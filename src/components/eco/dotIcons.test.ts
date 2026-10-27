import { describe, expect, it } from "vitest";
import { HOME_SECTIONS } from "../../content";
import { ICON_GRID, buildDotIcon } from "./dotIcons";

describe("bento dot icons", () => {
  it("draws a figure with an accent for every home section", () => {
    for (const section of HOME_SECTIONS) {
      const { cells } = buildDotIcon(section.id);
      // A readable pictogram: neither a speck nor a filled square
      expect(cells.length).toBeGreaterThan(ICON_GRID * 2);
      expect(cells.length).toBeLessThan(ICON_GRID * ICON_GRID * 0.8);
      expect(cells.some((cell) => cell.accent)).toBe(true);
    }
  });

  it("keeps every dot inside the grid and no larger than its cell", () => {
    for (const section of HOME_SECTIONS) {
      for (const cell of buildDotIcon(section.id).cells) {
        expect(cell.col).toBeGreaterThanOrEqual(0);
        expect(cell.col).toBeLessThan(ICON_GRID);
        expect(cell.row).toBeGreaterThanOrEqual(0);
        expect(cell.row).toBeLessThan(ICON_GRID);
        expect(cell.size).toBeGreaterThan(0);
        expect(cell.size).toBeLessThanOrEqual(1);
      }
    }
  });
});
