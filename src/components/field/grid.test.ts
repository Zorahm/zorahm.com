import { describe, expect, it } from "vitest";
import { computeGrid } from "./grid";

describe("computeGrid", () => {
  const viewports: Array<[number, number]> = [
    [375, 812],
    [414, 896],
    [768, 1024],
    [1280, 800],
    [1920, 1080],
    [2560, 1440],
    [3840, 2160],
  ];

  it("нигде не превышает потолок в 13000 точек", () => {
    for (const [w, h] of viewports) {
      const g = computeGrid(w, h);
      expect(g.cols * g.rows).toBeLessThanOrEqual(13000);
    }
  });

  it("подбирает шаг по ширине экрана", () => {
    expect(computeGrid(375, 812).step).toBe(12);
    expect(computeGrid(900, 700).step).toBe(13);
    expect(computeGrid(1280, 800).step).toBe(15);
  });

  it("на больших экранах увеличивает шаг, чтобы влезть в потолок", () => {
    expect(computeGrid(3840, 2160).step).toBeGreaterThan(15);
  });

  it("центрирует сетку: отступы слева и справа равны", () => {
    const w = 1280;
    const g = computeGrid(w, 800);
    const right = w - (g.offsetX + (g.cols - 1) * g.step);
    expect(g.offsetX).toBeCloseTo(right, 6);
  });

  it("сетка накрывает вьюпорт целиком", () => {
    for (const [w, h] of viewports) {
      const g = computeGrid(w, h);
      expect(g.offsetX + (g.cols - 1) * g.step).toBeGreaterThanOrEqual(w - g.step);
      expect(g.offsetY + (g.rows - 1) * g.step).toBeGreaterThanOrEqual(h - g.step);
    }
  });

  it("не делится на ноль на вырожденных размерах", () => {
    const g = computeGrid(0, 0);
    expect(Number.isFinite(g.step)).toBe(true);
    expect(g.cols).toBeGreaterThan(0);
    expect(g.rows).toBeGreaterThan(0);
  });

  it("центр сетки лежит посередине", () => {
    const g = computeGrid(1280, 800);
    expect(g.centerX).toBeCloseTo((g.cols - 1) / 2);
    expect(g.centerY).toBeCloseTo((g.rows - 1) / 2);
  });
});
