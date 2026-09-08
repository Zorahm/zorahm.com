"use client";

import { FRAG_BLUR, FRAG_BRIGHT, FRAG_COMPOSITE, VERT } from "./glsl/post";
import { FRAG_SCENE } from "./glsl/scene";
import {
  currentCamera,
  stepScene,
  tanFov,
  useGargantuaStore,
  view,
} from "./state";

/**
 * The renderer: five passes per frame.
 *
 * The scene goes into a floating-point buffer, its bright part is picked
 * out, blurred at two scales and folded back in together with tone mapping.
 * An ordinary buffer is not enough here: the inner edge of the disk is many
 * times brighter than white, and without headroom there would be nothing
 * left to build the glow from.
 *
 * The resolution of the scene follows the frame rate. The interface is not
 * affected — the browser draws it over the canvas and it stays sharp at any
 * scale the scene drops to.
 */

const DPR_CAP = 2;
const MIN_SCALE = 0.45;

/** Brightness below which light does not reach the glow */
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
 * Creates the renderer on a canvas. Returns null when WebGL is unavailable
 * or a shader refuses to build: in that answer the page shows its failure
 * screen instead of the scene.
 */
export function createRenderer(
  canvas: HTMLCanvasElement,
  onStats?: (stats: Stats) => void,
  onError?: (message: string) => void,
): Renderer | null {
  const options: WebGLContextAttributes = {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance",
    // The frame has to survive the draw call: without this the scene is
    // missing from screenshots and from canvas.toDataURL
    preserveDrawingBuffer: true,
  };

  const gl =
    (canvas.getContext("webgl2", options) as WebGL2RenderingContext | null) ??
    (canvas.getContext("webgl", options) as WebGLRenderingContext | null);

  if (!gl) {
    onError?.("no-webgl");
    return null;
  }

  const isGL2 =
    typeof WebGL2RenderingContext !== "undefined" &&
    gl instanceof WebGL2RenderingContext;

  /* ---------------------------------------------------------------- *
   *  Frame buffer format
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
   *  Programs
   * ---------------------------------------------------------------- */

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("shader");
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader) ?? "compile";
      gl.deleteShader(shader);
      throw new Error(log);
    }
    return shader;
  };

  const link = (fragment: string): Program => {
    const program = gl.createProgram();
    if (!program) throw new Error("program");
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, fragment);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.bindAttribLocation(program, 0, "aPos");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) ?? "link");
    }
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    const uniforms: Record<string, WebGLUniformLocation | null> = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      if (!info) continue;
      uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    return { program, uniforms };
  };

  let scene: Program;
  let bright: Program;
  let blur: Program;
  let composite: Program;
  try {
    [scene, bright, blur, composite] = [
      FRAG_SCENE,
      FRAG_BRIGHT,
      FRAG_BLUR,
      FRAG_COMPOSITE,
    ].map(link);
  } catch (e) {
    // The reason is only visible here; the page gets a failure screen and
    // whoever debugs it reads the driver log
    const message = e instanceof Error ? e.message : String(e);
    console.error("gargantua: shader did not build\n" + message);
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
   *  Render targets
   * ---------------------------------------------------------------- */

  const makeTarget = (w: number, h: number): Target => {
    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      texInternal,
      w,
      h,
      0,
      gl.RGBA,
      texType,
      null,
    );
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
      // No half precision here — fall back to an ordinary buffer
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
   *  Size and scale
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
    const w = Math.max(1, Math.round((canvas.clientWidth || 1) * dpr));
    const h = Math.max(1, Math.round((canvas.clientHeight || 1) * dpr));
    if (w !== viewW || h !== viewH) {
      viewW = w;
      viewH = h;
      canvas.width = w;
      canvas.height = h;
      applyScale(true);
    }
  };

  /* ---------------------------------------------------------------- *
   *  Frame
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
  /** Time spent in stalls inside the measuring window, milliseconds */
  let stalled = 0;
  let fps = 0;
  let adaptAcc = 0;

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    if (lost) return;

    const raw = (now - prev) / 1000;
    const dt = Math.min(0.05, raw);

    // A single long frame is not slow hardware but a stall: the tab went to
    // the background, the window was dragged by a corner, the collector
    // stopped the world mid-frame. That time is taken out of the window.
    // Long frames in a row are a different story — that is statistics, and
    // the resolution has to come down because of it
    if (raw > 0.25 && prevRaw < 0.1) stalled += raw * 1000;
    prevRaw = raw;
    prev = now;

    resize();
    if (!rtScene || !rtHalfA || !rtHalfB || !rtQuarterA || !rtQuarterB) return;

    stepScene(dt);
    const { params } = useGargantuaStore.getState();
    const cam = currentCamera();

    /* --- pass 1: the geodesics --- */
    bindTarget(rtScene);
    gl.useProgram(scene.program);
    const u = scene.uniforms;
    gl.uniform2f(u.uRes, sceneW, sceneH);
    gl.uniform1f(u.uTime, view.time);
    gl.uniform3f(u.uCamPos, cam.pos[0], cam.pos[1], cam.pos[2]);
    gl.uniformMatrix3fv(
      u.uCamMat,
      false,
      new Float32Array([...cam.right, ...cam.up, ...cam.forward]),
    );
    gl.uniform1f(u.uTanFov, tanFov(sceneW / sceneH));
    gl.uniform1i(u.uSteps, Math.round(params.steps));
    gl.uniform1f(u.uBright, params.bright);
    gl.uniform1f(u.uSpin, params.spin);
    gl.uniform1f(u.uLens, params.lens);
    drawQuad();

    /* --- pass 2: bright part at half resolution --- */
    bindTarget(rtHalfA);
    gl.useProgram(bright.program);
    bindTex(0, rtScene.tex, bright.uniforms.uTex);
    gl.uniform2f(bright.uniforms.uTexel, 1 / sceneW, 1 / sceneH);
    gl.uniform1f(bright.uniforms.uThreshold, BLOOM_THRESHOLD);
    drawQuad();

    /* --- pass 3: blur of the half --- */
    gl.useProgram(blur.program);
    bindTarget(rtHalfB);
    bindTex(0, rtHalfA.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 1 / rtHalfA.w, 0);
    drawQuad();

    bindTarget(rtHalfA);
    bindTex(0, rtHalfB.tex, blur.uniforms.uTex);
    gl.uniform2f(blur.uniforms.uDir, 0, 1 / rtHalfA.h);
    drawQuad();

    /* --- pass 4: the wide halo at a quarter --- */
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

    /* --- pass 5: composite to the screen --- */
    bindTarget(null);
    gl.useProgram(composite.program);
    bindTex(0, rtScene.tex, composite.uniforms.uScene);
    bindTex(1, rtHalfA.tex, composite.uniforms.uBloomA);
    bindTex(2, rtQuarterB.tex, composite.uniforms.uBloomB);
    gl.uniform1f(composite.uniforms.uBloom, params.glow * 0.95);
    gl.uniform1f(composite.uniforms.uExposure, 1.05);
    drawQuad();

    /* --- frame rate and the resolution that follows it --- */
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

  resize();
  applyScale(true);
  raf = requestAnimationFrame(frame);

  return {
    dispose() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
      [rtScene, rtHalfA, rtHalfB, rtQuarterA, rtQuarterB].forEach(dropTarget);
      gl.deleteBuffer(quad);
      [scene, bright, blur, composite].forEach((p) => {
        if (p) gl.deleteProgram(p.program);
      });
      // The context is deliberately not killed through WEBGL_lose_context:
      // the canvas is the same one, and a second getContext would hand back
      // the lost context — in strict mode, where the effect mounts twice,
      // the scene would never come up at all
    },
  };
}
