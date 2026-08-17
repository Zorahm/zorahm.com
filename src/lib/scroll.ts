"use client";

import { useEffect, useRef } from "react";
import { create } from "zustand";
import {
  clamp,
  damp,
  measureStage,
  type SectionBox,
} from "@/components/field/stage";

/**
 * Разделение по температуре данных.
 *
 * Горячее (stagePos, положение курсора) меняется каждый кадр. Прогонять это
 * через React — 60 перерендеров в секунду, поэтому оно живёт в обычном
 * мутируемом объекте, который WebGL читает напрямую в useFrame.
 *
 * Холодное (номер кадра, процент прокрутки) — целые числа, меняются редко.
 * Им React подходит, и HUD подписан на них через zustand.
 */
export const scrollState = {
  stagePos: 0,
  /** Плавное появление всей сцены после загрузки, 0..1 */
  intro: 0,
  pointerX: -9999,
  pointerY: -9999,
  pointerActive: false,
};

type HudStore = {
  frameIndex: number;
  percent: number;
};

export const useHudStore = create<HudStore>(() => ({
  frameIndex: 0,
  percent: 0,
}));

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

/** Драйвер ленты кадров: позицию сцены задаёт прокрутка секций */
export function useScrollDriver(frameCount: number) {
  const boxesRef = useRef<SectionBox[]>([]);

  useEffect(() => {
    const measureSections = () => {
      boxesRef.current = Array.from(
        document.querySelectorAll<HTMLElement>("[data-frame]"),
      ).map((el) => ({ top: el.offsetTop, height: el.offsetHeight }));
    };

    measureSections();
    // Шрифты приезжают позже и меняют высоту секций
    document.fonts?.ready.then(measureSections).catch(() => {});
    window.addEventListener("resize", measureSections, { passive: true });

    return () => window.removeEventListener("resize", measureSections);
  }, [frameCount]);

  useFieldLoop(
    () =>
      frameCount === 0
        ? 0
        : measureStage(window.scrollY, window.innerHeight, boxesRef.current),
    () => {
      if (frameCount === 0) return;

      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = clamp(
        scrollable > 0 ? window.scrollY / scrollable : 0,
        0,
        1,
      );

      const frameIndex = clamp(
        Math.round(scrollState.stagePos),
        0,
        frameCount - 1,
      );
      const percent = Math.round(progress * 100);

      // Пишем в React только когда целые значения реально сменились
      const hud = useHudStore.getState();
      if (hud.frameIndex !== frameIndex || hud.percent !== percent) {
        useHudStore.setState({ frameIndex, percent });
      }
    },
  );
}

/**
 * Драйвер для страниц без ленты кадров: цель сцены задаёт сама страница.
 * Поле по-прежнему само доводит позицию, поэтому смена кадра выглядит как
 * обычный переход между фигурами, а не как подмена картинки.
 */
export function useStageDriver(target: number) {
  useFieldLoop(() => target);
}
