"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SPACE_STRUCTURE, type BodyStructure } from "@/content";
import { computeGrid, type Grid } from "@/components/field/grid";
import { damp, smoothstep } from "@/components/field/stage";
import { GOLD, INK, POINTS_FRAGMENT, POINTS_VERTEX } from "@/components/field/points";
import { BODIES } from "./bodies/registry";
import { spaceState } from "./camera";
import { bodyScale, placeBodies, viewScale } from "./mechanics";
import { SYSTEM_SHADER, buildBodyShader } from "./shader";

/** Полноэкранный проход для рендера поля в render target */
const FBO_VERTEX = /* glsl */ `
void main(){
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

/**
 * Яркость точки тела.
 *
 * Планетам намеренно не даётся дойти до 0.93 — порога, за которым точка может
 * стать золотой. В обзоре системы золото достаётся одному Солнцу, и по нему
 * центр читается мгновенно.
 */
const brightness = (body: BodyStructure, depth: number) =>
  body.orbit <= 0
    ? 1
    : 0.72 + 0.16 * (0.5 + 0.5 * (depth / Math.max(body.orbit, 1e-4)));

type BodyPass = {
  material: THREE.ShaderMaterial;
  map: THREE.CanvasTexture | null;
};

/**
 * Сцена /space: два поля и точки поверх них.
 *
 * Поле A — обзор системы: орбиты, тела и корона Солнца. Поле B — выбранное
 * тело во всех подробностях. Между ними тот же блендер, что гоняет кадры
 * на главной, только ведёт его не прокрутка, а перелёт камеры.
 *
 * Раскладку тел считает mechanics.ts на CPU и передаёт готовой: шейдер ничего
 * не знает об орбитах и рисует тела там, куда их поставили. Поэтому клик
 * и картинка не могут разойтись.
 */
export function Orrery() {
  const gl = useThree((s) => s.gl);
  const size = useThree((s) => s.size);

  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const gridRef = useRef<Grid>(computeGrid(size.width, size.height));
  const startRef = useRef(0);
  const bodyPasses = useRef(new Map<number, BodyPass>());

  useEffect(() => {
    startRef.current = performance.now();
  }, []);

  // Сцена и камера для прохода в render target
  const fbo = useMemo(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    mesh.frustumCulled = false;
    scene.add(mesh);
    return { scene, camera, mesh };
  }, []);

  const targets = useMemo(
    () =>
      [0, 1].map(
        () =>
          new THREE.WebGLRenderTarget(1, 1, {
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            depthBuffer: false,
            stencilBuffer: false,
          }),
      ),
    [],
  );

  const system = useMemo(
    () =>
      new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL3,
        vertexShader: FBO_VERTEX,
        fragmentShader: SYSTEM_SHADER,
        depthTest: false,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uSettle: { value: 1 },
          uGrid: { value: new THREE.Vector2(1, 1) },
          uCenter: { value: new THREE.Vector2(0, 0) },
          uScale: { value: 1 },
          uPointer: { value: new THREE.Vector2(-9999, -9999) },
          uBodies: {
            value: SPACE_STRUCTURE.map(() => new THREE.Vector4()),
          },
          uOrbits: { value: SPACE_STRUCTURE.map((b) => b.orbit) },
          uOrigin: { value: new THREE.Vector2(0, 0) },
          uFlat: { value: 0.6 },
          uViewScale: { value: 1 },
          uHighlight: { value: -1 },
          uFade: { value: 1 },
        },
      }),
    [],
  );

  const points = useMemo(() => {
    const plane = new THREE.PlaneGeometry(1, 1);
    const geometry = new THREE.InstancedBufferGeometry();
    geometry.index = plane.index;
    geometry.setAttribute("position", plane.getAttribute("position"));
    geometry.instanceCount = 0;
    // Инстансы расставляет вершинный шейдер, three о них не знает
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);

    const material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: POINTS_VERTEX,
      fragmentShader: POINTS_FRAGMENT,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uFieldA: { value: null },
        uFieldB: { value: null },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uOffset: { value: new THREE.Vector2(0, 0) },
        uStep: { value: 1 },
        uMaxRadius: { value: 1 },
        uBlend: { value: 0 },
        uIntro: { value: 0 },
        uAccent: { value: 0 },
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(-9999, -9999) },
        uPointerActive: { value: 0 },
        uReduce: { value: 0 },
        // Разлёт точек — приём страницы кадров; здесь уходят не так
        uExit: { value: 0 },
        uInk: { value: INK },
        uGold: { value: GOLD },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    return { geometry, material, mesh };
  }, []);

  /**
   * Проход выбранного тела собирается при первом обращении и кешируется:
   * карта поверхности печётся Canvas2D, и делать это на каждый залёт незачем.
   */
  const ensureBodyPass = (index: number, grid: Grid): BodyPass | null => {
    const structure = SPACE_STRUCTURE[index];
    if (!structure) return null;

    const cached = bodyPasses.current.get(index);
    if (cached) return cached;

    const body = BODIES[structure.id];
    const material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: FBO_VERTEX,
      fragmentShader: buildBodyShader(body.glsl),
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        // Фигуры сайта используют uSettle как «насколько кадр ожил».
        // Здесь тело живёт сразу и в полную силу.
        uSettle: { value: 1 },
        uGrid: { value: new THREE.Vector2(grid.cols, grid.rows) },
        uCenter: { value: new THREE.Vector2(grid.centerX, grid.centerY) },
        uScale: { value: grid.scale },
        uPointer: { value: new THREE.Vector2(-9999, -9999) },
        uMap: { value: null },
      },
    });

    let map: THREE.CanvasTexture | null = null;
    if (body.buildMap) {
      map = new THREE.CanvasTexture(body.buildMap());
      // Карта развёрнута по долготе, поэтому по горизонтали она замкнута;
      // flipY снят, чтобы верх карты остался севером
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.ClampToEdgeWrapping;
      map.flipY = false;
      map.minFilter = THREE.LinearFilter;
      map.magFilter = THREE.LinearFilter;
      material.uniforms.uMap.value = map;
    }

    const pass: BodyPass = { material, map };
    bodyPasses.current.set(index, pass);
    return pass;
  };

  /** Пересобрать сетку и буферы под новый размер */
  useEffect(() => {
    const grid = computeGrid(size.width, size.height);
    gridRef.current = grid;
    spaceState.grid = grid;
    spaceState.viewHeight = size.height;

    const { cols, rows } = grid;
    targets.forEach((t) => t.setSize(cols, rows));

    const nodes = new Float32Array(cols * rows * 2);
    for (let y = 0, i = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++, i += 2) {
        nodes[i] = x;
        nodes[i + 1] = y;
      }
    }
    points.geometry.setAttribute(
      "aNode",
      new THREE.InstancedBufferAttribute(nodes, 2),
    );
    points.geometry.instanceCount = cols * rows;

    const u = points.material.uniforms;
    u.uResolution.value.set(size.width, size.height);
    u.uOffset.value.set(grid.offsetX, grid.offsetY);
    u.uStep.value = grid.step;
    u.uMaxRadius.value = grid.maxRadius;
    u.uReduce.value = reduce ? 1 : 0;

    system.uniforms.uGrid.value.set(cols, rows);
    system.uniforms.uCenter.value.set(grid.centerX, grid.centerY);
    system.uniforms.uScale.value = grid.scale;

    for (const pass of bodyPasses.current.values()) {
      pass.material.uniforms.uGrid.value.set(cols, rows);
    }
  }, [size.width, size.height, targets, points, system, reduce]);

  useEffect(() => {
    const currentTargets = targets;
    const currentPoints = points;
    const currentFbo = fbo;
    const currentSystem = system;
    const currentBodies = bodyPasses.current;
    return () => {
      currentTargets.forEach((t) => t.dispose());
      currentSystem.dispose();
      currentBodies.forEach((pass) => {
        pass.material.dispose();
        pass.map?.dispose();
      });
      currentBodies.clear();
      currentPoints.geometry.dispose();
      currentPoints.material.dispose();
      currentFbo.mesh.geometry.dispose();
    };
  }, [targets, points, fbo, system]);

  useFrame((_, delta) => {
    const grid = gridRef.current;
    const dt = Math.min(delta, 0.1);
    // Отсчёт заводится эффектом, но кадр может успеть раньше него: без этой
    // страховки время оказалось бы равно всей эпохе Unix, и сцену бы вывернуло
    if (startRef.current === 0) startRef.current = performance.now();
    const time = reduce ? 0 : (performance.now() - startRef.current) / 1000;

    // Доводка камеры: страница двигает только цели
    spaceState.azimuth = damp(spaceState.azimuth, spaceState.targetAzimuth, 0.16, dt);
    spaceState.inclination = damp(
      spaceState.inclination,
      spaceState.targetInclination,
      0.16,
      dt,
    );
    spaceState.zoom = damp(spaceState.zoom, spaceState.targetZoom, 0.14, dt);
    spaceState.focus = damp(
      spaceState.focus,
      spaceState.focusIndex >= 0 ? 1 : 0,
      0.055,
      dt,
    );
    spaceState.intro = reduce ? 1 : Math.min(1, spaceState.intro + dt * 0.7);

    // Долетев обратно до обзора, камера отпускает якорь
    if (spaceState.focusIndex < 0 && spaceState.focus < 0.005) {
      spaceState.anchorIndex = -1;
    }
    const index = spaceState.anchorIndex;

    const scene = {
      centerX: grid.centerX,
      centerY: grid.centerY,
      scale: grid.scale,
    };
    const camera = {
      azimuth: spaceState.azimuth,
      inclination: spaceState.inclination,
      zoom: spaceState.zoom,
      focus: spaceState.focus,
      focusIndex: index,
    };

    const { origin, placements } = placeBodies(SPACE_STRUCTURE, time, camera, scene);
    spaceState.placements = placements;

    // Курсор приходит в экранных координатах, где Y растёт вниз
    const pointerFieldY = size.height - spaceState.pointerY;

    // Проход A: обзор системы
    const su = system.uniforms;
    su.uTime.value = time;
    placements.forEach((p, i) => {
      su.uBodies.value[i].set(p.x, p.y, p.dot, brightness(SPACE_STRUCTURE[i], p.depth));
    });
    su.uOrigin.value.set(origin.x, origin.y);
    su.uFlat.value = Math.sin(spaceState.inclination);
    su.uViewScale.value = viewScale(camera, scene);
    su.uHighlight.value = spaceState.hover >= 0 ? spaceState.hover : index;
    su.uFade.value = 1 - 0.55 * spaceState.focus;

    fbo.mesh.material = system;
    gl.setRenderTarget(targets[0]);
    gl.render(fbo.scene, fbo.camera);

    // Проход B: выбранное тело
    const blend = smoothstep((spaceState.focus - 0.1) / 0.8);
    let bodyReady = false;

    if (blend > 0.001 && index >= 0) {
      const pass = ensureBodyPass(index, grid);
      if (pass) {
        const anchor = placements[index];
        const bu = pass.material.uniforms;
        bu.uTime.value = time;
        // Центр тела — там же, где его точка в обзоре: пока камера летит,
        // диск растёт ровно из неё
        bu.uCenter.value.set(anchor.x, anchor.y);
        bu.uScale.value = bodyScale(scene, spaceState.focus) * BODIES[SPACE_STRUCTURE[index].id].fit;

        fbo.mesh.material = pass.material;
        gl.setRenderTarget(targets[1]);
        gl.render(fbo.scene, fbo.camera);
        bodyReady = true;
      }
    }

    gl.setRenderTarget(null);

    const accent = SPACE_STRUCTURE[index >= 0 ? index : 0].accent;
    const u = points.material.uniforms;
    u.uFieldA.value = targets[0].texture;
    u.uFieldB.value = bodyReady ? targets[1].texture : targets[0].texture;
    u.uBlend.value = bodyReady ? blend : 0;
    u.uIntro.value = spaceState.intro;
    u.uAccent.value = bodyReady
      ? SPACE_STRUCTURE[0].accent + (accent - SPACE_STRUCTURE[0].accent) * blend
      : SPACE_STRUCTURE[0].accent;
    u.uTime.value = time;
    u.uPointer.value.set(spaceState.pointerX, pointerFieldY);
    u.uPointerActive.value = spaceState.pointerActive ? 1 : 0;
  });

  return <primitive object={points.mesh} />;
}
