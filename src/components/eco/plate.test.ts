import { describe, expect, it } from "vitest";
import { breath, buildPlate, lensPull, type PlateShape } from "./plate";

const SHAPES: PlateShape[] = [
  "saturn", "noise", "network", "eye", "globe", "ripple", "github", "mark", "rails", "street", "spirit",
  "crossword", "rules", "orbits", "hole",
];

describe("home plates", () => {
  it("keeps every density within 0..1", () => {
    for (const shape of SHAPES) {
      const { values } = buildPlate(shape, 30, 20, 1);
      for (const value of values) {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1);
      }
    }
  });

  it("draws the same figure every time", () => {
    const a = buildPlate("noise", 22, 9, 0.5);
    const b = buildPlate("noise", 22, 9, 0.5);
    expect(Array.from(a.values)).toEqual(Array.from(b.values));
    expect(Array.from(a.accents)).toEqual(Array.from(b.accents));
  });

  it("gives every shape its own figure", () => {
    const figures = SHAPES.map((shape) =>
      Array.from(buildPlate(shape, 30, 20, 0).values).join(","),
    );
    expect(new Set(figures).size).toBe(SHAPES.length);
  });

  it("paints no vermilion at zero accent and some at full accent", () => {
    for (const shape of SHAPES) {
      expect(buildPlate(shape, 30, 20, 0).accents.some(Boolean)).toBe(false);
    }
    expect(buildPlate("mark", 30, 20, 1).accents.some(Boolean)).toBe(true);
  });

  it("draws the crossword's crossings solid and its cells lighter", () => {
    const { values } = buildPlate("crossword", 30, 20, 0);
    const levels = new Set(Array.from(values).filter((value) => value > 0.3));
    expect(levels).toEqual(new Set([0.5, 1]));
  });

  it("pulls hardest at the pointer and not at all past the radius", () => {
    expect(lensPull(0, 0, 4)).toBe(1);
    expect(lensPull(4, 0, 4)).toBe(0);
    expect(lensPull(1, 1, 4)).toBeGreaterThan(lensPull(2, 2, 4));
  });

  it("breathes within -1..1 and changes slowly", () => {
    for (let t = 0; t < 40; t += 0.37) {
      const now = breath(7, 4, t);
      expect(Math.abs(now)).toBeLessThanOrEqual(1);
      // One frame at 60 fps moves a dot by a tiny fraction of its range
      expect(Math.abs(breath(7, 4, t + 1 / 60) - now)).toBeLessThan(0.01);
    }
  });
});
