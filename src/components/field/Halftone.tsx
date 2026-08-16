"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { FRAME_STRUCTURE } from "@/content";
import { scrollState } from "@/lib/scroll";
import { computeGrid, type Grid } from "./grid";
import { resolveStage } from "./stage";
import { SHAPES } from "./shapes/registry";
import { BAKE_SCALE, buildShapeShader } from "./shapes/common";

const INK = new THREE.Color("#E8EDF4");
const GOLD = new THREE.Color("#D9A441");

/** Радиус, в котором курсор расталкивает точки, и сила расталкивания */
const PUSH_RADIUS = 140;
const PUSH_FORCE = 34;

/** Полноэкранный проход для рендера фигуры в render target */
const FBO_VERTEX = /* glsl */ `
void main(){
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const POINTS_VERTEX = /* glsl */ `
uniform sampler2D uFieldA;
uniform sampler2D uFieldB;
uniform vec2  uResolution;
uniform vec2  uOffset;
uniform float uStep;
uniform float uMaxRadius;
uniform float uBlend;
uniform float uIntro;
uniform float uAccent;
uniform float uTime;
uniform vec2  uPointer;
uniform float uPointerActive;
uniform float uReduce;

in vec2 aNode;

out float vGold;
out vec2  vQuad;

float hash(float x, float y, float z){
  float n = sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - floor(n);
}

void main(){
  ivec2 texel = ivec2(aNode);
  float v = mix(
    texelFetch(uFieldA, texel, 0).r,
    texelFetch(uFieldB, texel, 0).r,
    uBlend
  );

  // Тусклые узлы схлопываются: фрагменты для них не порождаются вовсе.
  // В исходнике это был continue перед ctx.arc().
  if (v < 0.035){
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  v *= uIntro;

  vec2 px = uOffset + aNode * uStep;
  float r = uMaxRadius * pow(v, 0.8);

  if (uReduce < 0.5){
    px.x += sin(aNode.y * 0.28 + uTime * 0.6) * 0.7;
    px.y += cos(aNode.x * 0.24 + uTime * 0.5) * 0.7;

    if (uPointerActive > 0.5){
      vec2 d = px - uPointer;
      float dist = length(d);
      if (dist < ${PUSH_RADIUS.toFixed(1)}){
        float f = 1.0 - dist / ${PUSH_RADIUS.toFixed(1)};
        px += d / max(dist, 0.001) * f * f * ${PUSH_FORCE.toFixed(1)};
        r *= 1.0 + f * 0.75;
      }
    }
  }

  // Цвет решается здесь же — в исходнике золотые точки требовали
  // второго прохода с отдельным массивом
  vGold = (v > 0.93 && uAccent > 0.15 && hash(aNode.x, aNode.y, 7.0) < uAccent)
    ? 1.0 : 0.0;

  vQuad = position.xy * 2.0;

  vec2 corner = px + position.xy * 2.0 * r;
  // Ось Y не инвертируется: узел с aNode.y = 0 лежит внизу и в поле
  // (gl_FragCoord в render target растёт вверх), и на экране. Инверсия
  // здесь отражала бы всю картинку по вертикали и заодно выворачивала
  // порядок обхода вершин.
  gl_Position = vec4(corner / uResolution * 2.0 - 1.0, 0.0, 1.0);
}
`;

const POINTS_FRAGMENT = /* glsl */ `
precision highp float;

uniform vec3 uInk;
uniform vec3 uGold;

in float vGold;
in vec2  vQuad;

out vec4 pc_fragColor;

void main(){
  float d = length(vQuad);
  // fwidth даёт сглаживание ровно в один пиксель на любом размере точки
  float w = max(fwidth(d), 0.001);
  float alpha = 1.0 - smoothstep(1.0 - w, 1.0 + w, d);
  if (alpha < 0.01) discard;
  pc_fragColor = vec4(mix(uInk, uGold, vGold), alpha);
}
`;

type ShapePass = {
  material: THREE.ShaderMaterial;
  bakeTexture: THREE.CanvasTexture | null;
  bakeCanvas: HTMLCanvasElement | null;
};

export function Halftone() {
  const gl = useThree((s) => s.gl);
  const size = useThree((s) => s.size);

  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const gridRef = useRef<Grid>(computeGrid(size.width, size.height));
  const startRef = useRef(performance.now());

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

  /** По проходу на каждый кадр, в порядке FRAME_STRUCTURE */
  const passes = useMemo<ShapePass[]>(
    () =>
      FRAME_STRUCTURE.map((frame) => {
        const shape = SHAPES[frame.id];
        const material = new THREE.ShaderMaterial({
          glslVersion: THREE.GLSL3,
          vertexShader: FBO_VERTEX,
          fragmentShader: buildShapeShader(shape.glsl),
          depthTest: false,
          depthWrite: false,
          uniforms: {
            uTime: { value: 0 },
            uSettle: { value: 0 },
            uGrid: { value: new THREE.Vector2(1, 1) },
            uCenter: { value: new THREE.Vector2(0, 0) },
            uScale: { value: 1 },
            uPointer: { value: new THREE.Vector2(-9999, -9999) },
            uBaked: { value: null },
          },
        });

        const bakeCanvas = shape.bake ? document.createElement("canvas") : null;
        const bakeTexture = bakeCanvas
          ? new THREE.CanvasTexture(bakeCanvas)
          : null;
        if (bakeTexture) {
          bakeTexture.minFilter = THREE.LinearFilter;
          bakeTexture.magFilter = THREE.LinearFilter;
          material.uniforms.uBaked.value = bakeTexture;
        }

        return { material, bakeTexture, bakeCanvas };
      }),
    [],
  );

  const points = useMemo(() => {
    const plane = new THREE.PlaneGeometry(1, 1);
    const geometry = new THREE.InstancedBufferGeometry();
    geometry.index = plane.index;
    geometry.setAttribute("position", plane.getAttribute("position"));
    geometry.instanceCount = 0;
    // Собственный bounding sphere: инстансы расставляет вершинный шейдер,
    // three о них не знает и отбраковал бы меш целиком
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);

    const material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: POINTS_VERTEX,
      fragmentShader: POINTS_FRAGMENT,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      // Точки плоские, отбраковывать по стороне нечего
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
        uInk: { value: INK },
        uGold: { value: GOLD },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    return { geometry, material, mesh };
  }, []);

  /** Пересобрать сетку, буферы и запечённые текстуры под новый размер */
  useEffect(() => {
    const grid = computeGrid(size.width, size.height);
    gridRef.current = grid;
    const { cols, rows } = grid;

    targets.forEach((t) => t.setSize(cols, rows));

    // Инстансы: по одному на узел сетки
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

    passes.forEach((pass) => {
      pass.material.uniforms.uGrid.value.set(cols, rows);
      pass.material.uniforms.uCenter.value.set(grid.centerX, grid.centerY);
      pass.material.uniforms.uScale.value = grid.scale;
    });

    const rebake = () => {
      passes.forEach((pass, index) => {
        const shape = SHAPES[FRAME_STRUCTURE[index].id];
        if (!shape.bake || !pass.bakeCanvas || !pass.bakeTexture) return;

        const width = cols * BAKE_SCALE;
        const height = rows * BAKE_SCALE;
        const resized =
          pass.bakeCanvas.width !== width || pass.bakeCanvas.height !== height;
        pass.bakeCanvas.width = width;
        pass.bakeCanvas.height = height;

        // Хранилище текстуры на GPU выделено под прежний размер холста, и
        // одним needsUpdate его не расширить — three попытается залить
        // больший кадр в меньшую текстуру и получит GL_INVALID_VALUE.
        // dispose заставляет создать хранилище заново.
        if (resized) pass.bakeTexture.dispose();

        const ctx = pass.bakeCanvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        shape.bake({
          ctx,
          width,
          height,
          centerX: grid.centerX * BAKE_SCALE,
          centerY: grid.centerY * BAKE_SCALE,
          scale: grid.scale * BAKE_SCALE,
          grid,
        });
        pass.bakeTexture.needsUpdate = true;
      });
    };

    rebake();
    // Знак Z\M запекается шрифтом: до загрузки шрифта глиф был бы чужим
    document.fonts?.ready.then(rebake).catch(() => {});
  }, [size.width, size.height, targets, passes, points, reduce]);

  useEffect(() => {
    const currentTargets = targets;
    const currentPasses = passes;
    const currentPoints = points;
    const currentFbo = fbo;
    return () => {
      currentTargets.forEach((t) => t.dispose());
      currentPasses.forEach((p) => {
        p.material.dispose();
        p.bakeTexture?.dispose();
      });
      currentPoints.geometry.dispose();
      currentPoints.material.dispose();
      currentFbo.mesh.geometry.dispose();
    };
  }, [targets, passes, points, fbo]);

  useFrame(() => {
    const grid = gridRef.current;
    const time = reduce ? 0 : (performance.now() - startRef.current) / 1000;

    const stage = resolveStage(
      scrollState.stagePos,
      scrollState.intro,
      FRAME_STRUCTURE.map((f) => f.accent),
    );

    // Курсор приходит в экранных координатах, где Y растёт вниз, а поле
    // и точки живут в системе с Y вверх — отсюда переворот
    const pointerFieldY = size.height - scrollState.pointerY;

    // В координатах узлов: фигуры живут в них
    const pointerNodeX = scrollState.pointerActive
      ? (scrollState.pointerX - grid.offsetX) / grid.step
      : -9999;
    const pointerNodeY = scrollState.pointerActive
      ? (pointerFieldY - grid.offsetY) / grid.step
      : -9999;

    const renderShape = (index: number, settle: number, target: number) => {
      const pass = passes[index];
      pass.material.uniforms.uTime.value = time;
      pass.material.uniforms.uSettle.value = settle;
      pass.material.uniforms.uPointer.value.set(pointerNodeX, pointerNodeY);

      fbo.mesh.material = pass.material;
      gl.setRenderTarget(targets[target]);
      gl.render(fbo.scene, fbo.camera);
    };

    renderShape(stage.indexA, stage.settleA, 0);
    if (stage.blend > 0.001 && stage.indexB !== stage.indexA) {
      renderShape(stage.indexB, stage.settleB, 1);
    }
    gl.setRenderTarget(null);

    const u = points.material.uniforms;
    u.uFieldA.value = targets[0].texture;
    u.uFieldB.value =
      stage.blend > 0.001 && stage.indexB !== stage.indexA
        ? targets[1].texture
        : targets[0].texture;
    u.uBlend.value = stage.blend;
    u.uIntro.value = scrollState.intro;
    u.uAccent.value = stage.accent;
    u.uTime.value = time;
    u.uPointer.value.set(scrollState.pointerX, pointerFieldY);
    u.uPointerActive.value = scrollState.pointerActive ? 1 : 0;
  });

  return <primitive object={points.mesh} />;
}
