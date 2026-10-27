import { useMemo } from "react";
import type { HomeSectionId } from "@/content";
import { buildDotIcon } from "./dotIcons";

/**
 * A section pictogram drawn as halftone dots, in --ink with accent dots in
 * --signal. Static SVG: it scales with its box and needs no drawing loop.
 */
export function DotIcon({ id, className }: { id: HomeSectionId; className?: string }) {
  const { cells, grid } = useMemo(() => buildDotIcon(id), [id]);

  return (
    <svg
      viewBox={`0 0 ${grid} ${grid}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {cells.map((cell) => (
        <circle
          key={`${cell.col}:${cell.row}`}
          cx={cell.col + 0.5}
          cy={cell.row + 0.5}
          r={0.44 * cell.size}
          fill={cell.accent ? "var(--signal)" : "var(--ink)"}
        />
      ))}
    </svg>
  );
}
