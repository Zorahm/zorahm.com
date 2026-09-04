"use client";

import { FRAG_BLUR, FRAG_BRIGHT, FRAG_COMPOSITE, VERT } from "./glsl/post";
import { FRAG_SCENE } from "./glsl/scene";
import {
  TAU,
  bodyAxis,
  bodySpin,
  cameraBasis,
  moonPositions,
  tanFov,
} from "./orbit";
import { FOV, stepScene, useView3dStore, view3d } from "./state";
import {
  BELTS,
  BODY_COUNT_3D,
  MOONS,
  SPHERE_COUNT,
  SYSTEM_3D,
  Surface,
  beltGapSlots,
  bodyIndex,
} from "./system";

/**
 * Рендер сцены: пять проходов на кадр.
 *
 * Сцена считается в буфер с плавающей точкой, из него отбирается яркая
 * часть, размывается в двух масштабах и возвращается в кадр вместе с
 * тональной компрессией. Обычного буфера здесь мало: Солнце светит куда
 * ярче единицы, и без запаса по яркости свечение считать не из чего.
 *
 * Разрешение сцены подстраивается под частоту кадров. Интерфейс к этому
 * отношения не имеет — он рисуется браузером поверх холста и остаётся
 * чётким на любом масштабе.
 */

const DPR_CAP = 2;
const MIN_SCALE = 0.45;

/** Порог отбора яркого: ниже него свет в свечение не попадает */
const BLOOM_THRESHOLD = 0.72;

export type Stats = { fps: number; width: number; height: number };

export type Renderer = { dispose(): void };

type Program = {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation | null>;
};

type Target = {
  tex: WebGLTexture;
  fbo: WebGLFramebuffer;
  w: number;
  h: number;
  ok: boolean;
};

/**
 * Создаёт рендер на холсте. Возвращает null, если WebGL недоступен или
 * шейдер не собрался: страница в этом ответе показывает экран отказа.
 *
 * Возврат из этой функции не значит, что сцена уже рисуется: программы
 * в этот момент только отданы драйверу. Первый настоящий кадр отзывается
 * через onReady, и до него страница держит экран сборки.
 */
export function createRenderer(
  canvas: HTMLCanvasElement,
  onStats?: (stats: Stats) => void,
  onError?: (message: string) => void,
  onReady?: () => void,
): Renderer | null {
  const options: WebGLContextAttributes = {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance",
    // Кадр должен оставаться в буфере после отрисовки: иначе сцена не
    // попадает ни в скриншот, ни в canvas.toDataURL
    preserveDrawingBuffer: true,
  };

  const gl =
    (canvas.getContext("webgl2", options) as WebGL2RenderingContext | null) ??
    (canvas.getContext("webgl", options) as WebGLRenderingContext | null);

  if (!gl) {
    onError?.("no-webgl");
    return null;
  }

  const isGL2 = typeof WebGL2RenderingContext !== "undefined" &&
    gl instanceof WebGL2RenderingContext;

  /* ---------------------------------------------------------------- *
   *  Формат кадрового буфера
   * ---------------------------------------------------------------- */

  let texType: number = gl.UNSIGNED_BYTE;
  let texInternal: number = gl.RGBA;
  let linearOK = true;

  if (isGL2) {
    const gl2 = gl as WebGL2RenderingContext;
    const float =
      gl2.getExtension("EXT_color_buffer_float") ??
      gl2.getExtension("EXT_color_buffer_half_float");
    if (float) {
      texType = gl2.HALF_FLOAT;
      texInternal = gl2.RGBA16F;
    }
  } else {
    const half = gl.getExtension("OES_texture_half_float") as
      | { HALF_FLOAT_OES: number }
      | null;
    const halfLinear = gl.getExtension("OES_texture_half_float_linear");
    gl.getExtension("EXT_color_buffer_half_float");
    if (half) {
      texType = half.HALF_FLOAT_OES;
      texInternal = gl.RGBA;
      linearOK = !!halfLinear;
    }
  }

  /* ---------------------------------------------------------------- *
   *  Программы
   * ---------------------------------------------------------------- */

  /**
   * Сборка программ разнесена на два шага, и это не украшательство.
   *
   * Любой вопрос драйверу о результате — COMPILE_STATUS, LINK_STATUS,
   * getUniformLocation — обязан вернуть настоящий ответ, а значит,
   * заставляет драйвер досчитать сборку прямо внутри вызова. Шейдер сцены
   * — пятьдесят тысяч знаков трассировки, и на медленной видеокарте этот
   * один вызов стоит до минуты, всю которую главный поток стоит намертво:
   * не крутится ни индикатор, ни курсор, страница не отвечает на клики.
   *
   * Поэтому сначала все четыре программы уходят драйверу без единого
   * вопроса, а спрашиваем мы только после того, как он сам ответил, что
   * готов. Сборка от этого короче не становится — но идёт она в его
   * потоках, а наш остаётся свободен и рисует экран загрузки.
   */
  type Pending = { program: WebGLProgram; vs: WebGLShader; fs: WebGLShader };

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("shader");
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    // Об успехе не спрашиваем: вопрос остановил бы поток до конца сборки.
    // Ошибка всё равно всплывёт при сборке программы, и там же, когда
    // терять уже нечего, читается журнал
    return shader;
  };

  const startLink = (fragment: string): Pending => {
    const program = gl.createProgram();
    if (!program) throw new Error("program");
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, fragment);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.bindAttribLocation(program, 0, "aPos");
    gl.linkProgram(program);
    return { program, vs, fs };
  };

  const finishLink = (p: Pending): Program => {
    if (!gl.getProgramParameter(p.program, gl.LINK_STATUS)) {
      // Журнал собирается из трёх мест разом: драйверы кладут причину то
      // в шейдер, то в программу, и одного источника не хватает
      const log = [
        gl.getShaderInfoLog(p.vs),
        gl.getShaderInfoLog(p.fs),
        gl.getProgramInfoLog(p.program),
      ]
        .filter(Boolean)
        .join("\n");
      throw new Error(log || "link");
    }
    gl.deleteShader(p.vs);
    gl.deleteShader(p.fs);

    const uniforms: Record<string, WebGLUniformLocation | null> = {};
    const count = gl.getProgramParameter(
      p.program,
      gl.ACTIVE_UNIFORMS,
    ) as number;
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(p.program, i);
      if (!info) continue;
      // Массивы приходят с индексом в имени: uBody[0] — это вся uBody
      const name = info.name.replace(/\[0\]$/, "");
      uniforms[name] = gl.getUniformLocation(p.program, info.name);
    }
    return { program: p.program, uniforms };
  };

  /**
   * Единственный вопрос о сборке, на который драйвер отвечает, не досчитывая
   * её. Без расширения спросить нечего — тогда считаем готовым сразу и
   * платим той же заминкой, что и раньше: хуже, чем было, не станет.
   */
  const parallel = gl.getExtension("KHR_parallel_shader_compile") as {
    COMPLETION_STATUS_KHR: number;
  } | null;

  const settled = (p: Pending) =>
    !parallel ||
    (gl.getProgramParameter(
      p.program,
      parallel.COMPLETION_STATUS_KHR,
    ) as boolean);

  let pending: Pending[] = [];
  let scene: Program;
  let bright: Program;
  let blur: Program;
  let composite: Program;
  try {
    pending = [FRAG_SCENE, FRAG_BRIGHT, FRAG_BLUR, FRAG_COMPOSITE].map(
      startLink,
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("space3d: шейдер не отдался драйверу\n" + message);
    onError?.(message);
    return null;
  }

  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW,
  );
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  /* ---------------------------------------------------------------- *
   *  Цели рендера
   * ---------------------------------------------------------------- */

  const makeTarget = (w: number, h: number): Target => {
    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, texInternal, w, h, 0, gl.RGBA, texType, null);
    const filter = linearOK ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const fbo = gl.createFramebuffer()!;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      tex,
      0,
    );
    const ok =
      gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { tex, fbo, w, h, ok };
  };

  let rtScene: Target | null = null;
  let rtHalfA: Target | null = null;
  let rtHalfB: Target | null = null;
  let rtQuarterA: Target | null = null;
  let rtQuarterB: Target | null = null;

  const dropTarget = (t: Target | null) => {
    if (!t) return;
    gl.deleteTexture(t.tex);
    gl.deleteFramebuffer(t.fbo);
  };

  const allocTargets = (w: number, h: number) => {
    [rtScene, rtHalfA, rtHalfB, rtQuarterA, rtQuarterB].forEach(dropTarget);

    rtScene = makeTarget(w, h);
    if (!rtScene.ok) {
      // Половинной точности нет — откатываемся на обычный буфер
      dropTarget(rtScene);
      texType = gl.UNSIGNED_BYTE;
      texInternal = gl.RGBA;
      linearOK = true;
      rtScene = makeTarget(w, h);
    }
    const hw = Math.max(2, w >> 1);
    const hh = Math.max(2, h >> 1);
    const qw = Math.max(2, w >> 2);
    const qh = Math.max(2, h >> 2);
    rtHalfA = makeTarget(hw, hh);
    rtHalfB = makeTarget(hw, hh);
    rtQuarterA = makeTarget(qw, qh);
    rtQuarterB = makeTarget(qw, qh);
  };

  /* ---------------------------------------------------------------- *
   *  Размер и масштаб
   * ---------------------------------------------------------------- */

  let viewW = 1;
  let viewH = 1;
  let sceneW = 1;
  let sceneH = 1;
  let renderScale = 1;

  const applyScale = (force: boolean) => {
    const w = Math.max(2, Math.round(viewW * renderScale));
    const h = Math.max(2, Math.round(viewH * renderScale));
    if (force || !rtScene || rtScene.w !== w || rtScene.h !== h) {
      allocTargets(w, h);
      sceneW = w;
      sceneH = h;
    }
  };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    const cssW = canvas.clientWidth || 1;
    const cssH = canvas.clientHeight || 1;
    const w = Math.max(1, Math.round(cssW * dpr));
    const h = Math.max(1, Math.round(cssH * dpr));

    // Попадание кликом считается в css-пикселях: события приходят в них же
    view3d.width = cssW;
    view3d.height = cssH;

    if (w !== viewW || h !== viewH) {
      viewW = w;
      viewH = h;
      canvas.width = w;
      canvas.height = h;
      applyScale(true);
    }
  };

  /* ---------------------------------------------------------------- *
   *  Юниформы тел
   * ---------------------------------------------------------------- */

  const bodyBuf = new Float32Array(SPHERE_COUNT * 4);
  const colABuf = new Float32Array(SPHERE_COUNT * 3);
  const colBBuf = new Float32Array(SPHERE_COUNT * 3);
  const surfBuf = new Float32Array(SPHERE_COUNT * 4);
  const axisBuf = new Float32Array(SPHERE_COUNT * 4);
  const orbitBuf = new Float32Array(SPHERE_COUNT);

  // Всё, что не зависит от времени, заполняется один раз
  SYSTEM_3D.forEach((body, i) => {
    bodyBuf[i * 4 + 3] = body.radius;
    colABuf.set(body.colorA, i * 3);
    colBBuf.set(body.colorB, i * 3);
    surfBuf.set([body.detail, body.contrast, body.extra, body.style], i * 4);
    axisBuf.set(bodyAxis(body), i * 4);
    orbitBuf[i] = body.orbit;
  });

  // Спутники идут следом за телами одним массивом: шейдеру всё равно, что
  // пересекать, а линия орбиты у них нулевая и в цикле пропускается
  MOONS.forEach((moon, k) => {
    const i = BODY_COUNT_3D + k;
    const parent = SYSTEM_3D[bodyIndex(moon.parent)];
    bodyBuf[i * 4 + 3] = moon.radius * parent.radius;
    colABuf.set(moon.color, i * 3);
    colBBuf.set(
      moon.color.map((c) => c * 0.45),
      i * 3,
    );
    surfBuf.set([moon.detail, moon.contrast, 0, Surface.Rock], i * 4);
    // Спутники обращены к планете одной стороной, поэтому ось вертикальна,
    // а собственное вращение равно орбитальному
    axisBuf.set([0, 1, 0, 0], i * 4);
  });

  // Окольцованные тела: у каждого свои плоскость, размах и профиль плотности
  const ringed = SYSTEM_3D.map((body, index) => ({ body, index })).filter(
    (item) => item.body.rings,
  );
  const ringCtrBuf = new Float32Array(Math.max(1, ringed.length) * 3);
  const ringAxisBuf = new Float32Array(Math.max(1, ringed.length) * 3);
  const ringSetBuf = new Float32Array(Math.max(1, ringed.length) * 4);
  const ringOwnerBuf = new Float32Array(Math.max(1, ringed.length));

  // Пояса неподвижны: вращение камней шейдер считает сам от времени
  const beltBuf = new Float32Array(Math.max(1, BELTS.length) * 4);
  const beltLookBuf = new Float32Array(Math.max(1, BELTS.length) * 4);
  const beltGapBuf = new Float32Array(Math.max(1, BELTS.length) * 3);
  BELTS.forEach((belt, k) => {
    beltBuf.set([belt.inner, belt.outer, belt.height, belt.density], k * 4);
    beltLookBuf.set([...belt.color, belt.cell], k * 4);
    beltGapBuf.set(beltGapSlots(belt), k * 3);
  });

  ringed.forEach(({ body, index }, k) => {
    const rings = body.rings!;
    ringAxisBuf.set(bodyAxis(body), k * 3);
    ringSetBuf.set(
      [body.radius, rings.span[0], rings.span[1], rings.style],
      k * 4,
    );
    ringOwnerBuf[k] = index;
  });

  /* ---------------------------------------------------------------- *
   *  Кадр
   * ---------------------------------------------------------------- */

  const bindTarget = (t: Target | null) => {
    gl.bindFramebuffer(gl.FRAMEBUFFER, t ? t.fbo : null);
    gl.viewport(0, 0, t ? t.w : viewW, t ? t.h : viewH);
  };

  const bindTex = (
    unit: number,
    tex: WebGLTexture,
    location: WebGLUniformLocation | null,
  ) => {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(location, unit);
  };

  const drawQuad = () => gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  let raf = 0;
  let lost = false;
  const start = performance.now();
  let prev = start;
  let prevRaw = 0;
  let fpsFrames = 0;
  let fpsTime = start;
  /** Время заминок внутри окна замера, миллисекунды */
  let stalled = 0;
  let fps = 0;
  let adaptAcc = 0;
  /** Сколько кадров сцены уже нарисовано; по нему снимается экран сборки */
  let drawn = 0;

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    if (lost) return;

    const raw = (now - prev) / 1000;
    const dt = Math.min(0.05, raw);

    // Одиночный длинный кадр — это не медленное железо, а заминка: вкладка
    // ушла в фон, окно тащили за угол, сборщик мусора встал посреди кадра.
    // Такое время вычитается из окна замера. А вот когда длинные кадры идут
    // подряд, машина и правда не тянет — это уже статистика, и разрешение
    // по ней обязано опуститься
    if (raw > 0.25 && prevRaw < 0.1) stalled += raw * 1000;
    prevRaw = raw;
    prev = now;

    resize();
    if (!rtScene || !rtHalfA || !rtHalfB || !rtQuarterA || !rtQuarterB) return;

    const positions = stepScene(dt);
    const { params } = useView3dStore.getState();

    positions.forEach((p, i) => {
      bodyBuf[i * 4] = p[0];
      bodyBuf[i * 4 + 1] = p[1];
      bodyBuf[i * 4 + 2] = p[2];
      axisBuf[i * 4 + 3] = bodySpin(SYSTEM_3D[i], view3d.time);
    });

    moonPositions(view3d.time).forEach((p, k) => {
      const i = BODY_COUNT_3D + k;
      bodyBuf[i * 4] = p[0];
      bodyBuf[i * 4 + 1] = p[1];
      bodyBuf[i * 4 + 2] = p[2];
      axisBuf[i * 4 + 3] = MOONS[k].phase + view3d.time * MOONS[k].rate * TAU;
    });

    const basis = cameraBasis({
      target: view3d.target,
      theta: view3d.theta,
      phi: view3d.phi,
      dist: view3d.dist,
    });

    /* --- проход 1: сцена --- */
    bindTarget(rtScene);
    gl.useProgram(scene.program);
    const u = scene.uniforms;
    gl.uniform2f(u.uRes, sceneW, sceneH);
    gl.uniform1f(u.uTime, view3d.time);
    gl.uniform3f(u.uCamPos, basis.pos[0], basis.pos[1], basis.pos[2]);
    gl.uniformMatrix3fv(
      u.uCamMat,
      false,
      new Float32Array([...basis.right, ...basis.up, ...basis.forward]),
    );
    gl.uniform1f(u.uTanFov, tanFov(FOV, sceneW / sceneH));
    gl.uniform1f(u.uShift, view3d.shift);
    gl.uniform4fv(u.uBody, bodyBuf);
    gl.uniform3fv(u.uColA, colABuf);
    gl.uniform3fv(u.uColB, colBBuf);
    gl.uniform4fv(u.uSurf, surfBuf);
    gl.uniform4fv(u.uAxis, axisBuf);
    gl.uniform1fv(u.uOrbitR, orbitBuf);
    gl.uniform1f(u.uOrbits, params.orbits);
    gl.uniform1f(u.uStars, params.stars);

    ringed.forEach(({ index }, k) => ringCtrBuf.set(positions[index], k * 3));
    gl.uniform3fv(u.uRingCtr, ringCtrBuf);
    gl.uniform3fv(u.uRingAxis, ringAxisBuf);
    gl.uniform4fv(u.uRingSet, ringSetBuf);
    gl.uniform1fv(u.uRingOwner, ringOwnerBuf);
    gl.uniform4fv(u.uBelt, beltBuf);
    gl.uniform4fv(u.uBeltLook, beltLookBuf);
    gl.uniform3fv(u.uBeltGap, beltGapBuf);
    drawQuad();

    /* --- проход 2: яркая часть в половинном разрешении --- */
    bindTarget(rtHalfA);
    gl.useProgram(bright.program);
    bindTex(0, rtScene.tex, bright.uniforms.uTex);
    gl.uniform2f(bright.uniforms.uTexel, 1 / sceneW, 1 / sceneH);
    gl.uniform1f(bright.uniforms.uThreshold, BLOOM_THRESHOLD);
    drawQuad();

    /* --- проход 3: размытие половины --- */
    gl.useProgram(blur.program);
    bindTarget(rtHalfB);
    bindTex(0, rtHalfA.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 1 / rtHalfA.w, 0);
    drawQuad();

    bindTarget(rtHalfA);
    bindTex(0, rtHalfB.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 0, 1 / rtHalfA.h);
    drawQuad();

    /* --- проход 4: широкий ореол в четверти --- */
    bindTarget(rtQuarterA);
    bindTex(0, rtHalfA.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 1.5 / rtQuarterA.w, 0);
    drawQuad();

    bindTarget(rtQuarterB);
    bindTex(0, rtQuarterA.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 0, 1.5 / rtQuarterA.h);
    drawQuad();

    bindTarget(rtQuarterA);
    bindTex(0, rtQuarterB.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 2.7 / rtQuarterA.w, 0);
    drawQuad();

    bindTarget(rtQuarterB);
    bindTex(0, rtQuarterA.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 0, 2.7 / rtQuarterA.h);
    drawQuad();

    /* --- проход 5: сборка на экран --- */
    bindTarget(null);
    gl.useProgram(composite.program);
    bindTex(0, rtScene.tex, composite.uniforms.uScene);
    bindTex(1, rtHalfA.tex, composite.uniforms.uBloomA);
    bindTex(2, rtQuarterB.tex, composite.uniforms.uBloomB);
    gl.uniform1f(composite.uniforms.uBloom, params.glow * 0.95);
    gl.uniform1f(composite.uniforms.uExposure, params.exposure * 1.05);
    // Появление: сглаженная кривая, чтобы кадр не проступал линейно
    const intro = view3d.intro;
    gl.uniform1f(composite.uniforms.uFade, intro * intro * (3 - 2 * intro));
    drawQuad();

    /* --- частота кадров и подстройка разрешения --- */
    fpsFrames++;
    const measured = now - fpsTime - stalled;
    if (measured > 500) {
      fps = (fpsFrames * 1000) / measured;
      fpsTime = now;
      fpsFrames = 0;
      stalled = 0;
      onStats?.({ fps, width: sceneW, height: sceneH });
    }

    adaptAcc += dt;
    if (adaptAcc >= 1 && fps > 0) {
      adaptAcc = 0;
      let s = renderScale;
      if (fps < 34) s -= 0.1;
      else if (fps < 46) s -= 0.05;
      else if (fps > 57 && s < 1) s += 0.05;
      s = Math.min(1, Math.max(MIN_SCALE, +s.toFixed(2)));
      if (s !== renderScale) {
        renderScale = s;
        applyScale(false);
      }
    }

    // О готовности сообщаем со второго кадра: на первом команды только
    // ушли в очередь драйвера, и на экране ещё чёрное поле. Убрать экран
    // сборки в этот момент — показать зрителю пустоту вместо сцены
    drawn++;
    if (drawn === 2) onReady?.();
  };

  const onLost = (e: Event) => {
    e.preventDefault();
    lost = true;
  };
  const onRestored = () => {
    lost = false;
    applyScale(true);
  };
  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestored);

  /**
   * Ожидание драйвера. Крутится тем же кадровым таймером, что и сцена,
   * поэтому ничего не стоит: один вопрос о готовности на кадр.
   *
   * Первый кадр сцены считается от момента, когда программы собрались,
   * а не от создания рендера. Иначе минута ожидания пришла бы в шаг сцены
   * одним dt, и планеты стартовали бы, улетев вперёд на пол-оборота.
   */
  const waitForDriver = () => {
    if (!pending.every(settled)) {
      raf = requestAnimationFrame(waitForDriver);
      return;
    }
    try {
      [scene, bright, blur, composite] = pending.map(finishLink);
    } catch (e) {
      // Ошибка сборки видна только здесь: наружу уходит экран отказа,
      // а разбираться придётся по журналу драйвера
      const message = e instanceof Error ? e.message : String(e);
      console.error("space3d: сборка шейдера не удалась\n" + message);
      pending = [];
      onError?.(message);
      return;
    }
    pending = [];
    resize();
    applyScale(true);
    prev = performance.now();
    fpsTime = prev;
    raf = requestAnimationFrame(frame);
  };

  resize();
  applyScale(true);
  raf = requestAnimationFrame(waitForDriver);

  return {
    dispose() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      [rtScene, rtHalfA, rtHalfB, rtQuarterA, rtQuarterB].forEach(dropTarget);
      gl.deleteBuffer(quad);
      // Уйти со страницы можно и посреди сборки: тогда собранных программ
      // ещё нет, а отданные драйверу — есть, и убирать надо их
      pending.forEach((p) => {
        gl.deleteShader(p.vs);
        gl.deleteShader(p.fs);
        gl.deleteProgram(p.program);
      });
      [scene, bright, blur, composite].forEach((p) => {
        if (p) gl.deleteProgram(p.program);
      });
      // Контекст намеренно не гасится через WEBGL_lose_context: холст тот же
      // самый, и повторный getContext вернул бы уже потерянный контекст —
      // в строгом режиме, где эффект монтируется дважды, сцена не поднялась
      // бы вовсе
    },
  };
}
