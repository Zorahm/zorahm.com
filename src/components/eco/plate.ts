import type { ShapeId } from "@/content";

/**
 * Flat halftone plates for the home page: a grid of dots whose sizes draw a
 * figure. The same shapes as the WebGL field, redrawn as ink on paper.
 *
 * Pure functions only, so the figures are testable without a canvas.
 */

/** The field's shapes plus figures that only exist on flat plates */
export type PlateShape = ShapeId | "rails" | "spirit";

export type Plate = {
  cols: number;
  rows: number;
  /** Ink density per dot, 0..1, row by row */
  values: Float32Array;
  /** 1 where the dot is painted vermilion */
  accents: Uint8Array;
};

const NODES: [number, number][] = [
  [-1.2, -0.55],
  [-0.55, 0.35],
  [-0.05, -0.5],
  [0.5, 0.15],
  [1.15, -0.55],
  [1.1, 0.6],
  [0.1, 0.8],
  [-1.15, 0.75],
];
const EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [3, 5],
  [4, 5], [1, 6], [3, 6], [6, 7], [1, 7],
];

/** Stable pseudo-random value per dot, 0..1 */
export function hash(i: number, j: number) {
  const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

function segmentDistance(
  px: number, py: number,
  ax: number, ay: number,
  bx: number, by: number,
) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = clamp01(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy));
  const x = ax + t * dx - px;
  const y = ay + t * dy - py;
  return Math.hypot(x, y);
}

/**
 * Ink density of one dot. `u` runs across the width in row-height units,
 * `v` runs -1..1 from top to bottom, `k` is the size of one cell in those
 * units, so thin lines stay one dot wide on any grid.
 */
export function density(
  shape: PlateShape,
  u: number,
  v: number,
  i: number,
  j: number,
  k: number,
): number {
  const r = Math.hypot(u, v);
  const star = hash(i, j) > 0.965 ? 0.1 : 0;

  switch (shape) {
    case "saturn": {
      const planet = 0.6;
      const c = Math.cos(-0.32);
      const s = Math.sin(-0.32);
      const x = u * c - v * s;
      const y = (u * s + v * c) * 3.3;
      const rr = Math.hypot(x, y);
      let ring = 0;
      if (rr > 0.82 && rr < 1.42) ring = rr < 1.02 ? 0.8 : rr < 1.12 ? 0.18 : 0.55;
      // The near half of the ring passes in front of the planet
      if (ring > 0 && (y > 0 || r >= planet)) return ring;
      if (r < planet) {
        const dx = u + 0.22;
        const dy = v + 0.25;
        return Math.max(0.2, clamp01(1.05 - (dx * dx + dy * dy) / 0.75));
      }
      return star;
    }
    case "noise":
      return Math.pow(hash(i, j), 2.4) * 0.97;
    case "network": {
      let m = star;
      const nodeRadius = Math.max(0.03, k * k * 2.2);
      for (const [nx, ny] of NODES) {
        const ex = u - nx;
        const ey = v - ny;
        m = Math.max(m, clamp01(1 - (ex * ex + ey * ey) / nodeRadius));
      }
      for (const [a, b] of EDGES) {
        const p = NODES[a];
        const q = NODES[b];
        if (segmentDistance(u, v, p[0], p[1], q[0], q[1]) < k * 0.6) {
          m = Math.max(m, 0.45);
        }
      }
      return m;
    }
    case "eye": {
      const h = 0.66 * (1 - (u * u) / (1.45 * 1.45));
      const av = Math.abs(v);
      if (h <= 0 || av > h) return star;
      if (av > h - k * 0.9) return 0.85;
      if (r < 0.17) return 1;
      if (r < 0.44) return 0.45 + 0.25 * Math.cos(Math.atan2(v, u) * 10);
      if (r < 0.5) return 0.9;
      return 0.05;
    }
    case "globe": {
      const g = 0.92;
      if (r > g) return star;
      if (r > g - k * 0.8) return 0.9;
      const lat = v / (g / 4);
      const latGap = Math.abs(lat - Math.round(lat)) * (g / 4);
      const w = Math.sqrt(g * g - v * v);
      const lon = (Math.asin(Math.max(-1, Math.min(1, u / w))) / (Math.PI / 2)) * 3;
      const lonGap = Math.abs(lon - Math.round(lon));
      return latGap < k * 0.5 || lonGap < 0.16 ? 0.7 : 0.1;
    }
    case "ripple": {
      if (r < 0.13) return 1;
      const wave = 0.5 + 0.5 * Math.cos(r * 12);
      return clamp01(wave * wave * clamp01(1 - r / 1.7));
    }
    case "github": {
      // A contribution grid rather than anyone's logo: busier towards the right
      if (Math.abs(u) > 1.35 || Math.abs(v) > 0.75) return 0;
      const level = Math.min(
        4,
        Math.floor(Math.pow(hash(i + 3, j + 7), 1.6) * 5 + ((u + 1.35) / 2.7) * 1.2),
      );
      return [0.06, 0.3, 0.5, 0.75, 1][level];
    }
    case "rails": {
      // One track running into the distance, a train's headlight where it ends
      const horizon = -0.7;
      const lx = u;
      const ly = v - horizon;
      if (lx * lx + ly * ly * 2 < 0.03) return 1;
      if (v <= horizon) return star;
      const t = (v - horizon) / (1 - horizon);
      const gauge = 1.7 * t;
      const width = Math.max(k * 0.55, 0.03);
      if (Math.abs(Math.abs(u) - gauge) < width) return 0.9;
      // Sleepers sit at even steps of 1/t, so they bunch up with distance.
      // A row gets one when the next row down starts another step.
      const next = t + k / (1 - horizon);
      const sleeper = Math.floor(2.4 / t) !== Math.floor(2.4 / next);
      if (t > 0.2 && sleeper && Math.abs(u) < gauge) return 0.4;
      return hash(i, j) > 0.93 ? 0.06 : 0;
    }
    case "spirit": {
      // The /spirit figure of the WebGL field: two orbits mirrored across
      // the horizontal axis, meeting on it. No marks, no emblems, just dots.
      const tilt = 0.62;
      const a = 1.3;
      const b = 0.55;
      const width = Math.max(k * 0.6, 0.04);
      let hits = 0;
      for (const angle of [tilt, -tilt]) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const x = u * c + v * s;
        const y = -u * s + v * c;
        if (Math.abs(Math.hypot(x / a, y / b) - 1) * b < width) hits++;
      }
      if (hits === 2) return 1;
      if (hits === 1) return 0.7;
      return star;
    }
    case "mark": {
      // The backslash of Z\M
      if (Math.abs(u - v * 0.5) / Math.hypot(1, 0.5) < 0.2) return 1;
      return hash(i, j) > 0.8 ? 0.08 : 0;
    }
  }
}

/** Densities below this draw nothing */
export const EMPTY = 0.02;

export function buildPlate(
  shape: PlateShape,
  cols: number,
  rows: number,
  accent: number,
): Plate {
  const half = (rows - 1) / 2;
  const k = 1 / half;
  const values = new Float32Array(cols * rows);
  const accents = new Uint8Array(cols * rows);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const u = (i - (cols - 1) / 2) / half;
      const v = (j - half) / half;
      const value = density(shape, u, v, i, j, k);
      const n = j * cols + i;
      values[n] = value;
      accents[n] = value > 0.93 && hash(j + 11, i + 5) < accent ? 1 : 0;
    }
  }

  return { cols, rows, values, accents };
}

/**
 * Pull of the pointer on one dot, 0..1: full at the pointer, none from
 * `radius` cells away. Squared, so the swell has a soft edge.
 */
export function lensPull(dx: number, dy: number, radius: number) {
  const g = clamp01(1 - Math.hypot(dx, dy) / radius);
  return g * g;
}
