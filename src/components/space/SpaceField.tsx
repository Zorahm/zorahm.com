"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Orrery } from "./Orrery";
import { bodyAt, selectBody, spaceState, turnCamera, zoomCamera } from "./camera";
import styles from "./SpaceField.module.css";

/** Насколько можно сдвинуть указатель, чтобы это осталось кликом, а не поворотом */
const CLICK_SLOP = 5;

/**
 * Поле сцены /space вместе с управлением.
 *
 * Обработчики живут здесь, а не на странице, потому что здесь известна
 * геометрия: холст растянут на весь экран, поэтому экранные координаты
 * события — это сразу координаты сцены, и попадание по телу считается
 * без единого пересчёта систем.
 *
 * Ничего не хранится в состоянии React: и поворот камеры, и наведение
 * меняются каждый кадр, им нужен обычный мутируемый объект. Наружу через
 * React уходит только выбранное тело.
 */
export default function SpaceField({ label }: { label: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, x: 0, y: 0, travel: 0 });

  // Колесо слушается вручную: React вешает пассивный обработчик, а нам нужно
  // отменить прокрутку страницы под сценой
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const onWheel = (e: WheelEvent) => {
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

  const trackPointer = (e: React.PointerEvent) => {
    spaceState.pointerX = e.clientX;
    spaceState.pointerY = e.clientY;
    // Только мышь: на тач-экране расталкивание точек липло бы к последнему касанию
    spaceState.pointerActive = e.pointerType === "mouse";
  };

  return (
    <div
      ref={hostRef}
      className={styles.host}
      role="application"
      aria-label={label}
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        dragRef.current = { active: true, x: e.clientX, y: e.clientY, travel: 0 };
        trackPointer(e);
      }}
      onPointerMove={(e) => {
        trackPointer(e);
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

        const hover = bodyAt(e.clientX, e.clientY);
        spaceState.hover = hover;
        if (hostRef.current) {
          hostRef.current.style.cursor = hover >= 0 ? "pointer" : "grab";
        }
      }}
      onPointerUp={(e) => {
        const drag = dragRef.current;
        drag.active = false;
        // Клик и поворот различаются пройденным путём, а не кнопкой
        if (drag.travel <= CLICK_SLOP) selectBody(bodyAt(e.clientX, e.clientY));
      }}
      onPointerLeave={() => {
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
