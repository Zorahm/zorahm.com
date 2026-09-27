"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Orrery } from "./Orrery";
import { bodyAt, selectBody, spaceState, turnCamera, zoomCamera } from "./camera";
import styles from "./SpaceField.module.css";

/** Насколько можно сдвинуть указатель, чтобы это осталось кликом, а не поворотом */
const CLICK_SLOP = 5;

type Touch = { x: number; y: number };

/**
 * Поле сцены /space вместе с управлением.
 *
 * The scene lives in a frame on the page, so every pointer position is
 * taken relative to the frame first: after that it is already in scene
 * coordinates, and a click hits a body with no further conversion.
 *
 * Ничего не хранится в состоянии React: и поворот камеры, и наведение
 * меняются каждый кадр, им нужен обычный мутируемый объект. Наружу через
 * React уходит только выбранное тело.
 *
 * The frame sits in a scrolling page, so it must not trap the scroll: the
 * wheel zooms only with Ctrl or ⌘ held (a trackpad pinch arrives that way
 * too), and on a touch screen a vertical swipe scrolls the page while a
 * sideways one turns the system and two fingers zoom.
 */
export default function SpaceField({ label }: { label: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, x: 0, y: 0, travel: 0 });
  const touchesRef = useRef(new Map<number, Touch>());
  const pinchRef = useRef(0);

  // Колесо слушается вручную: React вешает пассивный обработчик, а отменять
  // прокрутку страницы нужно, когда колесо всё-таки зумит
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      zoomCamera(Math.exp(-e.deltaY * 0.0012));
    };

    host.addEventListener("wheel", onWheel, { passive: false });
    return () => host.removeEventListener("wheel", onWheel);
  }, []);

  // Сцена переживает уход со страницы: состояние лежит в модуле, а не в React
  useEffect(
    () => () => {
      spaceState.pointerActive = false;
      spaceState.hover = -1;
    },
    [],
  );

  const local = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top, rect };
  };

  const trackPointer = (e: React.PointerEvent, x: number, y: number) => {
    spaceState.pointerX = x;
    spaceState.pointerY = y;
    // Только мышь: на тач-экране расталкивание точек липло бы к последнему касанию
    spaceState.pointerActive = e.pointerType === "mouse";
  };

  const pinchDistance = () => {
    const [a, b] = [...touchesRef.current.values()];
    return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;
  };

  const release = (e: React.PointerEvent) => {
    touchesRef.current.delete(e.pointerId);
    if (touchesRef.current.size < 2) pinchRef.current = 0;
    dragRef.current.active = false;
  };

  return (
    <div
      ref={hostRef}
      className={styles.host}
      role="application"
      aria-label={label}
      onPointerDown={(e) => {
        const { x, y } = local(e);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        trackPointer(e, x, y);

        if (e.pointerType === "touch") {
          touchesRef.current.set(e.pointerId, { x, y });
          if (touchesRef.current.size === 2) {
            pinchRef.current = pinchDistance();
            // A pinch is never a tap, whatever the fingers do next
            dragRef.current.travel = Infinity;
            return;
          }
        }
        dragRef.current = { active: true, x, y, travel: 0 };
      }}
      onPointerMove={(e) => {
        const { x, y, rect } = local(e);
        trackPointer(e, x, y);

        if (e.pointerType === "touch" && touchesRef.current.has(e.pointerId)) {
          touchesRef.current.set(e.pointerId, { x, y });
          if (pinchRef.current > 0) {
            const distance = pinchDistance();
            if (distance > 0) zoomCamera(distance / pinchRef.current);
            pinchRef.current = distance;
            return;
          }
        }

        const drag = dragRef.current;
        if (drag.active) {
          const dx = x - drag.x;
          const dy = y - drag.y;
          drag.travel += Math.abs(dx) + Math.abs(dy);
          drag.x = x;
          drag.y = y;
          turnCamera(dx, dy, Math.min(rect.width, rect.height));
          return;
        }

        const hover = bodyAt(x, y);
        spaceState.hover = hover;
        if (hostRef.current) {
          hostRef.current.style.cursor = hover >= 0 ? "pointer" : "grab";
        }
      }}
      onPointerUp={(e) => {
        const { x, y } = local(e);
        const tap = dragRef.current.active && dragRef.current.travel <= CLICK_SLOP;
        release(e);
        // Клик и поворот различаются пройденным путём, а не кнопкой
        if (tap) selectBody(bodyAt(x, y));
      }}
      // The browser took a vertical swipe over as a page scroll
      onPointerCancel={release}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        dragRef.current.active = false;
        spaceState.pointerActive = false;
        spaceState.hover = -1;
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Orrery />
      </Canvas>
    </div>
  );
}
