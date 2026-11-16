"use client";

import { useEffect, useRef } from "react";
import { useScheme } from "./eco/EcoShell";
import styles from "./PaperDecisionPage.module.css";

function drawHalftone(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  pigment: CanvasGradient,
) {
  const pitch = Math.max(8, Math.min(14, width / 105));

  context.clearRect(0, 0, width, height);
  context.beginPath();

  for (let x = pitch / 2; x < width; x += pitch) {
    const u = (2 * x) / width - 1;
    const sweep = 0.43 * Math.sin(2.5 * u + phase) + 0.18 * Math.sin(5.1 * u - phase * 0.55);
    const spine = sweep - 0.42 * u;
    const turn = 2.4 * u - phase * 1.2;

    for (let y = pitch / 2; y < height; y += pitch) {
      const v = (2 * y) / height - 1;
      const offset = v - spine;
      const envelope = Math.exp(-3.4 * offset * offset);
      const folds = 0.5 + 0.5 * Math.cos(16 * offset + turn);
      const ink = envelope * (0.17 + 0.83 * folds);
      if (ink < 0.075) continue;

      const radius = pitch * 0.45 * Math.sqrt((ink - 0.075) / 0.925);
      context.moveTo(x + radius, y);
      context.arc(x, y, radius, 0, 2 * Math.PI);
    }
  }

  context.fillStyle = pigment;
  context.fill();
}

export function PaperHalftone() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const scheme = useScheme();

  useEffect(() => {
    const surface = canvas.current;
    const context = surface?.getContext("2d");
    if (!surface || !context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const style = getComputedStyle(surface);
    const violet = style.getPropertyValue("--halftone-violet").trim();
    const blue = style.getPropertyValue("--halftone-blue").trim();
    const pink = style.getPropertyValue("--halftone-pink").trim();
    let frame = 0;
    let pigment: CanvasGradient | undefined;
    let previousPhase: number | undefined;
    let paintedWidth = 0;
    let paintedHeight = 0;
    let paintedDpr = 0;

    const paint = () => {
      frame = 0;
      const bounds = surface.getBoundingClientRect();
      const width = surface.clientWidth;
      const height = surface.clientHeight;
      if (!width || !height || bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const phase = 0.7 + (reduced.matches ? 0 : Math.max(0, -bounds.top) / height * 0.8);

      if (!pigment || paintedWidth !== width || paintedHeight !== height || paintedDpr !== dpr) {
        surface.width = Math.round(width * dpr);
        surface.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        pigment = context.createLinearGradient(0, height * 0.72, width, height * 0.28);
        pigment.addColorStop(0, violet);
        pigment.addColorStop(0.52, blue);
        pigment.addColorStop(1, pink);
        paintedWidth = width;
        paintedHeight = height;
        paintedDpr = dpr;
      } else if (previousPhase === phase) {
        return;
      }

      drawHalftone(context, width, height, phase, pigment);
      previousPhase = phase;
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const resize = new ResizeObserver(schedule);
    resize.observe(surface);
    reduced.addEventListener("change", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      reduced.removeEventListener("change", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [scheme]);

  return <canvas ref={canvas} className={styles.halftoneCanvas} aria-hidden="true" />;
}
