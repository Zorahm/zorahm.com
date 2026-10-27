import type { HomeSectionId } from "@/content";

/**
 * Pictograms for the home bento, drawn as halftone dots.
 *
 * Each icon is a plain vector figure in the square [-1, 1] x [-1, 1] (y runs
 * down). It is sampled on a coarse grid: every cell is supersampled, and the
 * share of the cell the figure covers sets the size of its dot. So the edges
 * stay clean at a few dozen dots, and a figure can shade itself by returning a
 * tone below 1.
 */

/** What a point of the figure is: nothing, ink of a given tone, or the accent */
type Paint = null | { tone: number; accent?: boolean };
type Figure = (x: number, y: number) => Paint;

export type DotIconCell = { col: number; row: number; size: number; accent: boolean };
export type DotIcon = { cells: DotIconCell[]; grid: number };

/** Cells per side; odd, so a figure centred at 0 lands on a dot */
export const ICON_GRID = 17;
/** Samples per cell side */
const SUPER = 4;
/** Coverage below this leaves the cell empty, so edges do not fuzz */
const MIN_COVER = 0.12;

const INK: Paint = { tone: 1 };
const ACCENT: Paint = { tone: 1, accent: true };

const disc = (x: number, y: number, cx: number, cy: number, r: number) =>
  (x - cx) ** 2 + (y - cy) ** 2 <= r * r;

const ring = (x: number, y: number, cx: number, cy: number, r: number, w: number) =>
  Math.abs(Math.hypot(x - cx, y - cy) - r) <= w;

/** Rectangle with rounded corners, given by its half sizes */
const box = (x: number, y: number, cx: number, cy: number, hw: number, hh: number, r = 0) => {
  const dx = Math.max(Math.abs(x - cx) - (hw - r), 0);
  const dy = Math.max(Math.abs(y - cy) - (hh - r), 0);
  return dx * dx + dy * dy <= r * r && Math.abs(x - cx) <= hw && Math.abs(y - cy) <= hh;
};

/** Four-pointed sparkle: a star with concave sides and radius a */
const sparkle = (x: number, y: number, cx: number, cy: number, a: number) =>
  Math.abs((x - cx) / a) ** 0.5 + Math.abs((y - cy) / a) ** 0.5 <= 1;

/** AI: a large sparkle and a small accent one, the usual mark for a model at work */
const ai: Figure = (x, y) => {
  if (sparkle(x, y, 0.56, -0.56, 0.42)) return ACCENT;
  if (sparkle(x, y, -0.12, 0.12, 0.88)) return INK;
  return null;
};

/** Games: a gamepad, the d-pad cut out on the left and two accent buttons on the right */
const games: Figure = (x, y) => {
  const body =
    box(x, y, 0, -0.08, 0.9, 0.36, 0.3) ||
    disc(x, y, -0.56, 0.24, 0.34) ||
    disc(x, y, 0.56, 0.24, 0.34);
  if (!body) return null;
  const px = x + 0.5;
  const py = y + 0.02;
  const dpad =
    (Math.abs(px) <= 0.08 && Math.abs(py) <= 0.26) ||
    (Math.abs(py) <= 0.08 && Math.abs(px) <= 0.26);
  if (dpad) return null;
  if (disc(x, y, 0.36, -0.1, 0.11) || disc(x, y, 0.6, 0.1, 0.11)) return ACCENT;
  return INK;
};

/** Space: a sun in the accent, one orbit, and a planet on it with a gap around it */
const space: Figure = (x, y) => {
  if (disc(x, y, 0, 0, 0.26)) return ACCENT;
  const angle = -Math.PI / 4;
  const px = Math.cos(angle) * 0.74;
  const py = Math.sin(angle) * 0.74;
  if (disc(x, y, px, py, 0.17)) return INK;
  if (disc(x, y, px, py, 0.3)) return null;
  if (ring(x, y, 0, 0, 0.74, 0.07)) return INK;
  return null;
};

/** Space 3D: a sphere shaded by depth, with the equator in the accent */
const space3d: Figure = (x, y) => {
  const r2 = (x * x + y * y) / 0.86 ** 2;
  if (r2 > 1) return null;
  const nx = x / 0.86;
  const ny = y / 0.86;
  const nz = Math.sqrt(1 - r2);
  // The near half of the equator, seen from a little above, bows downwards
  if (ny > 0 && Math.abs(ny - 0.32 * Math.sqrt(Math.max(0, 1 - nx * nx))) < 0.07) return ACCENT;
  // Dots shrink towards the rim, so it reads round on a light ground and a dark one alike
  return { tone: 0.3 + 0.7 * nz };
};

/** Gargantua: the dark shadow, the photon ring in the accent, the disc across both */
const gargantua: Figure = (x, y) => {
  if (Math.abs(y) <= 0.075 + 0.05 * (1 - Math.abs(x)) && Math.abs(x) <= 0.96) return INK;
  if (disc(x, y, 0, 0, 0.34)) return INK;
  if (ring(x, y, 0, 0, 0.47, 0.055)) return ACCENT;
  // The far side of the disc, bent over the top by the lens
  const arc = (x / 0.72) ** 2 + ((y + 0.02) / 0.62) ** 2;
  if (y < -0.1 && Math.abs(arc - 1) < 0.16) return { tone: 0.6 };
  return null;
};

/** Spirit: a trophy cup with handles, a stem and a base, an accent star on the bowl */
const spirit: Figure = (x, y) => {
  if (sparkle(x, y, 0, -0.36, 0.3)) return ACCENT;
  const bowl =
    (y >= -0.74 && y <= -0.66 && Math.abs(x) <= 0.56) ||
    (y >= -0.7 && (x / 0.54) ** 2 + ((y + 0.7) / 0.76) ** 2 <= 1);
  const handles =
    (ring(x, y, -0.56, -0.44, 0.2, 0.055) && x < -0.5) ||
    (ring(x, y, 0.56, -0.44, 0.2, 0.055) && x > 0.5);
  const stem = Math.abs(x) <= 0.08 && y >= 0 && y <= 0.5;
  const base = box(x, y, 0, 0.6, 0.42, 0.1, 0.04) || box(x, y, 0, 0.46, 0.24, 0.06);
  return bowl || handles || stem || base ? INK : null;
};

/** Paper: a page with a folded corner and lines of text cut out, one line in the accent */
const paper: Figure = (x, y) => {
  if (!box(x, y, 0, 0, 0.62, 0.84, 0.06)) return null;
  // The folded corner: the tip past the diagonal is cut off, the fold under it is lighter
  if (x - 0.62 - (y + 0.84) > -0.36) return null;
  if (x > 0.26 && y < -0.48) return { tone: 0.5 };
  const lines = [-0.28, -0.02, 0.24, 0.5];
  for (const [i, ly] of lines.entries()) {
    const end = i === lines.length - 1 ? 0.08 : 0.38;
    if (Math.abs(y - ly) <= 0.07 && x >= -0.4 && x <= end) {
      return i === 1 ? ACCENT : null;
    }
  }
  return INK;
};

const FIGURES: Record<HomeSectionId, Figure> = {
  ai,
  games,
  space,
  space3d,
  gargantua,
  spirit,
  paper,
};

/** Samples a figure onto the dot grid */
export function buildDotIcon(id: HomeSectionId, grid = ICON_GRID): DotIcon {
  const figure = FIGURES[id];
  const cells: DotIconCell[] = [];
  const step = 2 / grid;

  for (let row = 0; row < grid; row++) {
    for (let col = 0; col < grid; col++) {
      let ink = 0;
      let accent = 0;
      for (let sy = 0; sy < SUPER; sy++) {
        for (let sx = 0; sx < SUPER; sx++) {
          const x = -1 + (col + (sx + 0.5) / SUPER) * step;
          const y = -1 + (row + (sy + 0.5) / SUPER) * step;
          const paint = figure(x, y);
          if (!paint) continue;
          ink += paint.tone;
          if (paint.accent) accent++;
        }
      }
      const cover = ink / (SUPER * SUPER);
      if (cover < MIN_COVER) continue;
      cells.push({
        col,
        row,
        size: Math.sqrt(Math.min(cover, 1)),
        accent: accent * 2 >= SUPER * SUPER * cover,
      });
    }
  }

  return { cells, grid };
}
