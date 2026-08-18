"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { AnyShapeId } from "@/content";
import { scrollState } from "@/lib/scroll";
import { computeGrid, type Grid } from "./grid";
import { resolveStage } from "./stage";
import { SHAPES } from "./shapes/registry";
import { BAKE_SCALE, buildShapeShader } from "./shapes/common";
import { GOLD, INK, POINTS_FRAGMENT, POINTS_VERTEX } from "./points";

/** Полноэкранный проход для рендера фигуры в render target */
const FBO_VERTEX = /* glsl */ `
void main(){
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

type ShapePass = {
  material: THREE.ShaderMaterial;
  bakeTexture: THREE.CanvasTexture | null;
  bakeCanvas: HTMLCanvasElement | null;
};

/**
 * Кадр глазами поля: какую фигуру показывать и сколько в ней золота.
 * Лента главной страницы даёт их из FRAME_STRUCTURE, служебные страницы —
 * своим списком, поэтому поле про содержание сайта ничего не знает.
 */
export type FieldFrame = {
  id: AnyShapeId;
  accent: number;
};

export function Halftone({ frames }: { frames: readonly FieldFrame[] }) {
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

  /** По проходу на каждый кадр, в порядке frames */
  const passes = useMemo<ShapePass[]>(
    () =>
      frames.map((frame) => {
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
    [frames],
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
        uExit: { value: 0 },
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
        const shape = SHAPES[frames[index].id];
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
  }, [size.width, size.height, targets, passes, points, reduce, frames]);

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

  const accents = useMemo(() => frames.map((f) => f.accent), [frames]);

  useFrame(() => {
    const grid = gridRef.current;
    const time = reduce ? 0 : (performance.now() - startRef.current) / 1000;

    const stage = resolveStage(
      scrollState.stagePos,
      scrollState.intro,
      accents,
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
    // Уходя, кадр гаснет тем быстрее, чем дальше разлетелись точки
    u.uExit.value = scrollState.exit;
    u.uIntro.value = scrollState.intro * (1.0 - scrollState.exit);
    u.uAccent.value = stage.accent;
    u.uTime.value = time;
    u.uPointer.value.set(scrollState.pointerX, pointerFieldY);
    u.uPointerActive.value = scrollState.pointerActive ? 1 : 0;
  });

  return <primitive object={points.mesh} />;
}
