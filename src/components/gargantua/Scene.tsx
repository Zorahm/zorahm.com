"use client";

import { useEffect, useRef, useState } from "react";
import { createRenderer, type Renderer, type Stats } from "./renderer";
import { turnCamera, view, zoomCamera } from "./state";
import styles from "./Scene.module.css";

/**
 * The canvas of the traced scene together with its controls.
 *
 * The handlers live here rather than on the page: there is nothing to pick
 * in this scene, so all they do is turn and zoom the camera, and doing that
 * next to the canvas keeps the page free of pointer arithmetic. React holds
 * nothing but the fact of a WebGL refusal — the camera changes every frame
 * and lives in the module's mutable state.
 */
export default function Scene({
  label,
  error,
  onStats,
}: {
  label: string;
  error: string;
  onStats?: (stats: Stats) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const pinchRef = useRef(0);
  const statsRef = useRef(onStats);
  const [failed, setFailed] = useState(false);

  // The callback lives in a ref: the renderer is created once and must not
  // be rebuilt because the page handed over a new function
  useEffect(() => {
    statsRef.current = onStats;
  }, [onStats]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: Renderer | null = null;
    // Building the programs is not free, and the first paint of the page
    // has to happen before the driver takes the main thread
    const wait = requestAnimationFrame(() => {
      renderer = createRenderer(
        canvas,
        (stats) => statsRef.current?.(stats),
        () => setFailed(true),
      );
    });

    return () => {
      cancelAnimationFrame(wait);
      renderer?.dispose();
    };
  }, []);

  // The wheel and the pinch are subscribed by hand: React attaches a passive
  // listener, and we have to cancel the page scroll under the scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      // One notch of a mouse wheel and one flick of a trackpad differ by
      // orders of magnitude, so the step is capped before it is applied
      const d = Math.max(-120, Math.min(120, e.deltaY));
      zoomCamera(Math.exp(-d * 0.0013));
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
      view.dragging = false;
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

  // The scene outlives the page: its state is in the module, not in React
  useEffect(
    () => () => {
      view.dragging = false;
    },
    [],
  );

  if (failed) {
    return <div className={styles.error}>{error}</div>;
  }

  const stop = () => {
    dragRef.current.active = false;
    view.dragging = false;
  };

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      role="application"
      aria-label={label}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture?.(e.pointerId);
        dragRef.current = { active: true, x: e.clientX, y: e.clientY };
        view.dragging = true;
        view.idle = 0;
      }}
      onPointerMove={(e) => {
        const drag = dragRef.current;
        if (!drag.active) return;
        // The travel is measured against the previous event rather than read
        // off movementX: touch does not always report it
        turnCamera(e.clientX - drag.x, e.clientY - drag.y);
        drag.x = e.clientX;
        drag.y = e.clientY;
      }}
      onPointerUp={stop}
      onPointerCancel={stop}
      onPointerLeave={stop}
    />
  );
}
