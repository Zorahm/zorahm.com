"use client";

import { useEffect, useRef, useState } from "react";
import { createRenderer, type Stats } from "./renderer";
import { bodyAt, selectBody3d, turnCamera, view3d, zoomCamera } from "./state";
import styles from "./Scene3D.module.css";

/** Насколько можно сдвинуть указатель, чтобы это осталось кликом, а не облётом */
const CLICK_SLOP = 5;

/**
 * Холст трассированной сцены вместе с управлением.
 *
 * Обработчики живут здесь, а не на странице: здесь известна геометрия холста,
 * и экранная точка превращается в луч без единого пересчёта систем. В React
 * не хранится ничего, кроме факта отказа WebGL — камера меняется каждый кадр
 * и живёт в мутируемом состоянии модуля.
 */
export default function Scene3D({
  label,
  error,
  onStats,
}: {
  label: string;
  error: string;
  onStats?: (stats: Stats) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef({ active: false, x: 0, y: 0, travel: 0 });
  const pinchRef = useRef(0);
  const statsRef = useRef(onStats);
  const [failed, setFailed] = useState(false);

  // Колбэк живёт в ссылке: рендер создаётся один раз и не должен
  // пересоздаваться из-за новой функции на каждый рендер страницы
  useEffect(() => {
    statsRef.current = onStats;
  }, [onStats]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = createRenderer(
      canvas,
      (stats) => statsRef.current?.(stats),
      () => setFailed(true),
    );
    if (!renderer) return;
    return () => renderer.dispose();
  }, []);

  // Колесо и щипок слушаются вручную: React вешает пассивный обработчик,
  // а нам нужно отменить прокрутку страницы под сценой
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomCamera(Math.exp(-e.deltaY * 0.0013));
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2) return;
      e.preventDefault();
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      if (pinchRef.current > 0) zoomCamera(d / pinchRef.current);
      pinchRef.current = d;
      dragRef.current.active = false;
      view3d.dragging = false;
    };

    const onTouchEnd = () => {
      pinchRef.current = 0;
    };

    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    return () => {
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Сцена переживает уход со страницы: состояние лежит в модуле, а не в React
  useEffect(
    () => () => {
      view3d.dragging = false;
      view3d.hover = -1;
    },
    [],
  );

  const local = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  if (failed) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      role="application"
      aria-label={label}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture?.(e.pointerId);
        dragRef.current = { active: true, x: e.clientX, y: e.clientY, travel: 0 };
        view3d.dragging = true;
      }}
      onPointerMove={(e) => {
        const drag = dragRef.current;
        if (drag.active) {
          const dx = e.clientX - drag.x;
          const dy = e.clientY - drag.y;
          drag.travel += Math.abs(dx) + Math.abs(dy);
          drag.x = e.clientX;
          drag.y = e.clientY;
          turnCamera(dx, dy, Math.min(window.innerWidth, window.innerHeight));
          return;
        }

        const p = local(e);
        const hover = bodyAt(p.x, p.y);
        view3d.hover = hover;
        e.currentTarget.style.cursor = hover >= 0 ? "pointer" : "grab";
      }}
      onPointerUp={(e) => {
        const drag = dragRef.current;
        drag.active = false;
        view3d.dragging = false;
        // Клик и облёт различаются пройденным путём, а не кнопкой
        if (drag.travel <= CLICK_SLOP) {
          const p = local(e);
          const hit = bodyAt(p.x, p.y);
          selectBody3d(hit === view3d.focusIndex ? -1 : hit);
        }
      }}
      onPointerLeave={() => {
        dragRef.current.active = false;
        view3d.dragging = false;
        view3d.hover = -1;
      }}
    />
  );
}
