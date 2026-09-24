"use client";

import { useEffect, useRef } from "react";
import { useScheme } from "./EcoShell";
import { EMPTY, buildPlate, clamp01, lensPull, type Plate, type PlateShape } from "./plate";

/** How far the pointer's swell reaches, in cells */
const LENS_RADIUS = 4.5;
/** Dots this close to the pointer turn vermilion */
const LENS_ACCENT = 0.6;
/** Share of the gap to the target a dot closes per second, as a rate */
const EASE = 9;

type Lens = { x: number; y: number } | null;

const BLANK: Plate = {
  cols: 1,
  rows: 1,
  values: new Float32Array(1),
  accents: new Uint8Array(1),
};

/**
 * A halftone plate drawn on a 2D canvas. It fills its container's width and
 * takes its height from the grid's aspect ratio. A new shape does not replace the old one:
 * every dot eases to its new size, so figures flow into each other.
 *
 * With `lens`, dots under a mouse pointer swell. The loop only runs while
 * something is still moving and stops once every dot has settled.
 *
 * Colours come from the page's --ink and --vermilion, re-read whenever the
 * shell's colour scheme changes.
 */
export function DotPlate({
  shape,
  accent,
  cols,
  rows,
  lens = false,
  className,
}: {
  shape: PlateShape;
  accent: number;
  cols: number;
  rows: number;
  lens?: boolean;
  className?: string;
}) {
  const scheme = useScheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const live = useRef({
    current: new Float32Array(1),
    target: BLANK,
    lens: null as Lens,
    cell: 0,
    ink: "#1a1611",
    vermilion: "#ff4d2e",
    raf: 0,
    last: 0,
    reduce: false,
    kick: () => {},
  });

  // Runs before the loop below, so its first frame already has the figure
  useEffect(() => {
    const state = live.current;
    const next = buildPlate(shape, cols, rows, accent);
    if (state.current.length !== next.values.length) {
      state.current = new Float32Array(next.values.length);
    }
    state.target = next;
    state.kick();
  }, [shape, cols, rows, accent]);

  // One drawing loop per mounted plate; everything it reads lives in the ref
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const state = live.current;
    state.reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (now: number) => {
      const dt = state.last ? Math.min((now - state.last) / 1000, 0.1) : 1 / 60;
      state.last = now;
      const { target, current } = state;
      const step = state.reduce ? 1 : 1 - Math.exp(-EASE * dt);
      const dpr = window.devicePixelRatio || 1;
      const cell = state.cell;
      let moving = false;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cell * target.cols, cell * target.rows);

      for (let j = 0; j < target.rows; j++) {
        for (let i = 0; i < target.cols; i++) {
          const n = j * target.cols + i;
          let goal = target.values[n];
          let hot = target.accents[n] === 1;
          if (state.lens) {
            const pull = lensPull(i - state.lens.x, j - state.lens.y, LENS_RADIUS);
            if (pull > 0) {
              goal = clamp01(goal + pull * 0.9);
              if (pull > LENS_ACCENT) hot = true;
            }
          }

          const gap = goal - current[n];
          if (Math.abs(gap) > 0.002) moving = true;
          current[n] += gap * step;

          const value = current[n];
          if (value < EMPTY) continue;
          const radius = Math.max(1, cell * 0.46 * Math.sqrt(value));
          ctx.fillStyle = hot ? state.vermilion : state.ink;
          ctx.beginPath();
          ctx.arc((i + 0.5) * cell, (j + 0.5) * cell, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      state.raf = moving ? requestAnimationFrame(draw) : 0;
      if (!moving) state.last = 0;
    };

    state.kick = () => {
      if (!state.raf && state.cell > 0) state.raf = requestAnimationFrame(draw);
    };

    // The canvas keeps the grid's aspect ratio in CSS; only its pixels follow here
    const resize = () => {
      const width = canvas.clientWidth;
      const dpr = window.devicePixelRatio || 1;
      state.cell = width / state.target.cols;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(state.cell * state.target.rows * dpr);
      // A resized canvas is blank until the next frame is drawn
      cancelAnimationFrame(state.raf);
      state.raf = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(state.raf);
      state.raf = 0;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const style = getComputedStyle(canvas);
    const state = live.current;
    state.ink = style.getPropertyValue("--ink").trim() || state.ink;
    state.vermilion = style.getPropertyValue("--vermilion").trim() || state.vermilion;
    // Settled dots stop the loop, so a colour change needs one frame on its own
    cancelAnimationFrame(state.raf);
    state.raf = 0;
    state.kick();
  }, [scheme]);

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    // A finger would leave the swell stuck where it lifted
    if (!lens || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const state = live.current;
    state.lens = {
      x: ((e.clientX - rect.left) / rect.width) * state.target.cols - 0.5,
      y: ((e.clientY - rect.top) / rect.height) * state.target.rows - 0.5,
    };
    state.kick();
  };

  const onPointerLeave = () => {
    const state = live.current;
    if (!state.lens) return;
    state.lens = null;
    state.kick();
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", aspectRatio: `${cols} / ${rows}`, display: "block" }}
      aria-hidden="true"
      onPointerMove={lens ? onPointerMove : undefined}
      onPointerLeave={lens ? onPointerLeave : undefined}
    />
  );
}
