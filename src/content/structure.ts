import type { FrameStructure } from "./types";

/**
 * Порядок и композиция кадров — общие для всех языков.
 * Тексты живут в ./ru.ts и ./en.ts.
 */
export const FRAME_STRUCTURE: FrameStructure[] = [
  { id: "saturn", align: "left", accent: 0.6, hero: true },
  { id: "noise", align: "right", accent: 0.15 },
  { id: "network", align: "left", accent: 0.35 },
  { id: "eye", align: "right", accent: 1 },
  { id: "globe", align: "left", accent: 0.25 },
  { id: "ripple", align: "center", accent: 0.5 },
  {
    id: "github",
    align: "right",
    accent: 0.45,
    cta: { href: "https://github.com/zorahm", label: "github.com/zorahm" },
  },
  { id: "mark", align: "center", accent: 1, contacts: true },
];
