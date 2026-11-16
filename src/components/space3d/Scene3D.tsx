"use client";

import { useEffect, useRef, useState } from "react";
import { createRenderer, type Renderer, type Stats } from "./renderer";
import {
  bodyAt,
  panCamera,
  selectBody3d,
  turnCamera,
  view3d,
  zoomCamera,
} from "./state";
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
  onSettled,
}: {
  label: string;
  error: string;
  onStats?: (stats: Stats) => void;
  /** Сцена пошла или отказалась: страница снимает экран сборки */
  onSettled?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef({ active: false, pan: false, x: 0, y: 0, travel: 0 });
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const multiRef = useRef({ dist: 0, midX: 0, midY: 0 });
  const statsRef = useRef(onStats);
  const settledRef = useRef(onSettled);
  const [failed, setFailed] = useState(false);

  // Колбэки живут в ссылках: рендер создаётся один раз и не должен
  // пересоздаваться из-за новой функции на каждый рендер страницы
  useEffect(() => {
    statsRef.current = onStats;
    settledRef.current = onSettled;
  }, [onStats, onSettled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: Renderer | null = null;
    // Создание рендера отложено на два кадра. Отдать программы драйверу
    // стоит недорого, но не бесплатно, а экран сборки к этому моменту
    // обязан быть на экране: показывать его после заминки поздно
    const wait = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        renderer = createRenderer(
          canvas,
          (stats) => statsRef.current?.(stats),
          () => {
            setFailed(true);
            settledRef.current?.();
          },
          () => settledRef.current?.(),
        );
        // Без WebGL рендера не будет вовсе, и ждать его тоже незачем
        if (!renderer) settledRef.current?.();
      }),
    );

    return () => {
      cancelAnimationFrame(wait);
      renderer?.dispose();
    };
  }, []);

  // Колесо мыши и pinch трекпада слушаются вручную
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      let dy = e.deltaY;
      // Нормализация deltaMode: 1 — строки колеса мыши
      if (e.deltaMode === 1) dy *= 24;
      else if (e.deltaMode === 2) dy *= window.innerHeight;

      // Pinch на трекпаде передаётся браузером как wheel с ctrlKey = true
      const sens = e.ctrlKey ? 0.007 : 0.0013;
      zoomCamera(Math.exp(-dy * sens));
    };

    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      canvas.removeEventListener("wheel", onWheel);
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
      onContextMenu={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture?.(e.pointerId);
        pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pointersRef.current.size === 1) {
          // Pan: ПКМ (button 2), СКМ (button 1) или Shift + ЛКМ
          const isPan = e.button === 1 || e.button === 2 || e.shiftKey;
          dragRef.current = {
            active: true,
            pan: isPan,
            x: e.clientX,
            y: e.clientY,
            travel: 0,
          };
          view3d.dragging = !isPan;
        } else if (pointersRef.current.size === 2) {
          // Инициализация 2-пальцевого pinch / pan
          const pts = Array.from(pointersRef.current.values());
          const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
          const mx = (pts[0].x + pts[1].x) * 0.5;
          const my = (pts[0].y + pts[1].y) * 0.5;
          multiRef.current = { dist: d, midX: mx, midY: my };
          dragRef.current.active = false;
          view3d.dragging = false;
        }
      }}
      onPointerMove={(e) => {
        pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

        // Мультитач (2 пальца): pinch-zoom и pan
        if (pointersRef.current.size === 2) {
          const pts = Array.from(pointersRef.current.values());
          const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
          const mx = (pts[0].x + pts[1].x) * 0.5;
          const my = (pts[0].y + pts[1].y) * 0.5;

          if (multiRef.current.dist > 0) {
            const zoomRatio = d / multiRef.current.dist;
            if (Math.abs(zoomRatio - 1) > 0.002) {
              zoomCamera(zoomRatio);
            }
            const dmx = mx - multiRef.current.midX;
            const dmy = my - multiRef.current.midY;
            if (Math.abs(dmx) + Math.abs(dmy) > 0.5) {
              panCamera(dmx, dmy, window.innerHeight);
            }
          }
          multiRef.current = { dist: d, midX: mx, midY: my };
          return;
        }

        // Одиночный указатель: вращение или pan
        const drag = dragRef.current;
        if (drag.active) {
          const dx = e.clientX - drag.x;
          const dy = e.clientY - drag.y;
          drag.travel += Math.abs(dx) + Math.abs(dy);
          drag.x = e.clientX;
          drag.y = e.clientY;

          if (drag.pan) {
            panCamera(dx, dy, window.innerHeight);
          } else {
            turnCamera(dx, dy, Math.min(window.innerWidth, window.innerHeight));
          }
          return;
        }

        const p = local(e);
        const hover = bodyAt(p.x, p.y);
        view3d.hover = hover;
        e.currentTarget.style.cursor = hover >= 0 ? "pointer" : "grab";
      }}
      onPointerUp={(e) => {
        pointersRef.current.delete(e.pointerId);

        if (pointersRef.current.size === 0) {
          const drag = dragRef.current;
          drag.active = false;
          view3d.dragging = false;

          // Клик и облёт различаются пройденным путём, а не кнопкой
          if (!drag.pan && drag.travel <= CLICK_SLOP) {
            const p = local(e);
            const hit = bodyAt(p.x, p.y);
            selectBody3d(hit === view3d.focusIndex ? -1 : hit);
          }
        } else if (pointersRef.current.size === 1) {
          // Возврат к 1 указателю
          const remaining = Array.from(pointersRef.current.values())[0];
          dragRef.current = {
            active: true,
            pan: false,
            x: remaining.x,
            y: remaining.y,
            travel: 100, // исключаем случайный клик при снятии пальцев
          };
          view3d.dragging = true;
        }
      }}
      onPointerCancel={(e) => {
        pointersRef.current.delete(e.pointerId);
        if (pointersRef.current.size === 0) {
          dragRef.current.active = false;
          view3d.dragging = false;
          view3d.hover = -1;
        }
      }}
      onPointerLeave={(e) => {
        pointersRef.current.delete(e.pointerId);
        if (pointersRef.current.size === 0) {
          dragRef.current.active = false;
          view3d.dragging = false;
          view3d.hover = -1;
        }
      }}
    />
  );
}
