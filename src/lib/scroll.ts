"use client";

import { useEffect, useRef } from "react";
import { damp } from "@/components/field/stage";

/**
 * Stage position and pointer change every frame. Pushing them through React
 * would mean 60 renders a second, so they live in a plain mutable object that
 * WebGL reads directly in useFrame.
 */
export const scrollState = {
  stagePos: 0,
  /** Плавное появление всей сцены после загрузки, 0..1 */
  intro: 0,
  /** Уход со страницы: 0 — кадр на месте, 1 — точки разлетелись и погасли */
  exit: 0,
  pointerX: -9999,
  pointerY: -9999,
  pointerActive: false,
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Единственный писатель scrollState. Крутит свой requestAnimationFrame, а не
 * живёт внутри R3F, чтобы HUD и прогресс работали даже там, где WebGL не
 * поднялся вовсе.
 *
 * Цель сцены и работа после доводки приходят колбэками: ленте кадров их даёт
 * скролл, служебным страницам — их собственное состояние. Оба колбэка читаются
 * из ref, поэтому цикл заводится один раз на страницу и не перезапускается на
 * каждый рендер.
 */
function useFieldLoop(readTarget: () => number, onSettled?: () => void) {
  const targetRef = useRef(readTarget);
  const settledRef = useRef(onSettled);

  // Колбэки подменяются после каждого рендера — цикл читает их из ref
  useEffect(() => {
    targetRef.current = readTarget;
    settledRef.current = onSettled;
  });

  useEffect(() => {
    const reduce = prefersReducedMotion();
    let raf = 0;
    let last = performance.now();

    const onPointerMove = (e: PointerEvent) => {
      scrollState.pointerX = e.clientX;
      scrollState.pointerY = e.clientY;
      // Только мышь: на тач-экране «отталкивание» точек липло бы к последнему касанию
      scrollState.pointerActive = e.pointerType === "mouse";
    };
    const onPointerLeave = () => {
      scrollState.pointerActive = false;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      const target = targetRef.current();
      scrollState.stagePos = reduce
        ? target
        : damp(scrollState.stagePos, target, 0.12, dt);
      scrollState.intro = reduce ? 1 : Math.min(1, scrollState.intro + dt * 0.84);

      settledRef.current?.();

      raf = requestAnimationFrame(tick);
    };

    // scrollState живёт вне React и переживает переход между страницами.
    // Без этого уход с восьмого кадра на 404 прогонял бы всю ленту заново.
    scrollState.stagePos = targetRef.current();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);
}

/**
 * Драйвер для страниц без ленты кадров: цель сцены задаёт сама страница.
 * Поле по-прежнему само доводит позицию, поэтому смена кадра выглядит как
 * обычный переход между фигурами, а не как подмена картинки.
 */
export function useStageDriver(target: number) {
  useFieldLoop(() => target);
}
