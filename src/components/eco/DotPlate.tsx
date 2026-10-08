"use client";

import { useEffect, useRef } from "react";
import { useScheme } from "./EcoShell";
import bench_ from "./DotPlate.module.css";
import {
  EMPTY,
  breath,
  buildPlate,
  clamp01,
  lensPull,
  type Plate,
  type PlateShape,
} from "./plate";

/** How far the pointer's swell reaches, in cells */
const LENS_RADIUS = 4.5;
/** Dots this close to the pointer turn signal */
const LENS_ACCENT = 0.6;
/** Share of the gap to the target a dot closes per second, as a rate */
const EASE = 9;
/**
 * How much the ambient waves change a dot's ink, as a share of it. Kept low
 * and slow on purpose: the plate should feel alive, not draw the eye.
 */
const BREATH = 0.16;

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
 * Dots breathe: two slow waves drift across the plate and gently change
 * their size. The loop runs only while the plate is on screen. With reduced
 * motion there is no breathing and the loop stops once every dot settles.
 *
 * With `lens`, dots under a mouse pointer swell.
 *
 * Colours come from the page's --ink and --signal, re-read whenever the
 * shell's colour scheme changes.
 */
export function DotPlate({
  shape,
  accent,
  cols,
  rows,
  lens = false,
  arrive = false,
  bench,
  className,
}: {
  shape: PlateShape;
  accent: number;
  cols: number;
  rows: number;
  lens?: boolean;
  /** The figure assembles out of scattered noise when it first appears */
  arrive?: boolean;
  /** Draws the measuring scale and readout under the figure; on by default for wide plates */
  bench?: boolean;
  className?: string;
}) {
  const showBench = bench ?? cols >= 30;
  const readoutRef = useRef<HTMLSpanElement>(null);
  const scheme = useScheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const live = useRef({
    current: new Float32Array(1),
    target: BLANK,
    lens: null as Lens,
    cell: 0,
    ink: "#10171c",
    signal: "#2b45e0",
    raf: 0,
    last: 0,
    reduce: false,
    /** Motion acknowledged and not reduced: the plate may breathe */
    breathe: false,
    visible: false,
    /** Breathing clock in seconds; it only advances while frames are drawn */
    time: 0,
    kick: () => {},
  });

  // Runs before the loop below, so its first frame already has the figure
  useEffect(() => {
    const state = live.current;
    const next = buildPlate(shape, cols, rows, accent);
    if (state.current.length !== next.values.length) {
      state.current = new Float32Array(next.values.length);
      // A plate that arrives starts as noise and settles into its figure
      if (arrive && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        for (let n = 0; n < state.current.length; n++) {
          state.current[n] = Math.random() * 0.75;
        }
      }
    }
    state.target = next;
    state.kick();
  }, [shape, cols, rows, accent, arrive]);

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
      const breathing = state.breathe && state.visible;
      if (breathing) state.time += dt;
      const { target, current } = state;
      const step = state.reduce ? 1 : 1 - Math.exp(-EASE * dt);
      const dpr = window.devicePixelRatio || 1;
      const cell = state.cell;
      let moving = breathing;

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

          const value = breathing
            ? current[n] * (1 + BREATH * breath(i, j, state.time))
            : current[n];
          if (value < EMPTY) continue;
          const radius = Math.max(1, cell * 0.46 * Math.sqrt(value));
          ctx.fillStyle = hot ? state.signal : state.ink;
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

    // Breathing off screen would only burn battery
    const sight = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
      state.kick();
    });
    sight.observe(canvas);

    return () => {
      observer.disconnect();
      sight.disconnect();
      cancelAnimationFrame(state.raf);
      state.raf = 0;
    };
  }, []);

  useEffect(() => {
    const state = live.current;
    state.breathe = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    state.kick();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const style = getComputedStyle(canvas);
    const state = live.current;
    state.ink = style.getPropertyValue("--ink").trim() || state.ink;
    state.signal = style.getPropertyValue("--signal").trim() || state.signal;
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
    const u = (e.clientX - rect.left) / rect.width;
    const v = (e.clientY - rect.top) / rect.height;
    state.lens = {
      x: u * state.target.cols - 0.5,
      y: v * state.target.rows - 0.5,
    };
    // The readout follows the pointer without re-rendering the plate
    if (readoutRef.current) {
      readoutRef.current.textContent = `x ${u.toFixed(2)}  y ${v.toFixed(2)}`;
    }
    state.kick();
  };

  const onPointerLeave = () => {
    const state = live.current;
    if (readoutRef.current) readoutRef.current.textContent = "x –  y –";
    if (!state.lens) return;
    state.lens = null;
    state.kick();
  };

  const canvas = (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", aspectRatio: `${cols} / ${rows}`, display: "block" }}
      aria-hidden="true"
      onPointerMove={lens ? onPointerMove : undefined}
      onPointerLeave={lens ? onPointerLeave : undefined}
    />
  );

  if (!showBench) return canvas;

  // Scale under the figure: ten divisions, a longer tick on every fifth, and
  // the grid size and pointer position as readouts. Numbers only, so both
  // languages read it the same.
  return (
    <div className={bench_.wrap}>
      {canvas}
      <svg
        className={bench_.scale}
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: 21 }, (_, i) => (
          <line
            key={i}
            x1={i * 5}
            x2={i * 5}
            y1={0}
            y2={i % 5 === 0 ? 6 : 3}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <p className={bench_.readout} aria-hidden="true">
        <span>
          {cols} × {rows}
        </span>
        <span ref={readoutRef} className={bench_.pointer}>x –  y –</span>
      </p>
    </div>
  );
}
