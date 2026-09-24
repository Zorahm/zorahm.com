import { describe, expect, it } from "vitest";
import { buildPlate, lensPull, type PlateShape } from "./plate";

const SHAPES: PlateShape[] = [
  "saturn", "noise", "network", "eye", "globe", "ripple", "github", "mark", "rails", "spirit",
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

  it("pulls hardest at the pointer and not at all past the radius", () => {
    expect(lensPull(0, 0, 4)).toBe(1);
    expect(lensPull(4, 0, 4)).toBe(0);
    expect(lensPull(1, 1, 4)).toBeGreaterThan(lensPull(2, 2, 4));
  });
});
