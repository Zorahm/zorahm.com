import { describe, expect, it } from "vitest";
import { clamp, damp, measureStage, resolveStage, smoothstep } from "./stage";

describe("smoothstep", () => {
  it("закреплён на концах отрезка", () => {
    expect(smoothstep(0)).toBe(0);
    expect(smoothstep(1)).toBe(1);
  });

  it("зажимает выход за границы", () => {
    expect(smoothstep(-5)).toBe(0);
    expect(smoothstep(5)).toBe(1);
  });

  it("проходит через середину и монотонно растёт", () => {
    expect(smoothstep(0.5)).toBeCloseTo(0.5);
    let prev = -1;
    for (let t = 0; t <= 1; t += 0.05) {
      const v = smoothstep(t);
      expect(v).toBeGreaterThanOrEqual(prev);
      prev = v;
    }
  });
});

describe("clamp", () => {
  it("держит значение в границах", () => {
    expect(clamp(5, 0, 1)).toBe(1);
    expect(clamp(-5, 0, 1)).toBe(0);
    expect(clamp(0.3, 0, 1)).toBe(0.3);
  });
});

describe("damp", () => {
  it("за одинаковое время даёт одинаковый результат на 60 и 120 Гц", () => {
    let at60 = 0;
    for (let i = 0; i < 60; i++) at60 = damp(at60, 1, 0.12, 1 / 60);

    let at120 = 0;
    for (let i = 0; i < 120; i++) at120 = damp(at120, 1, 0.12, 1 / 120);

    expect(at120).toBeCloseTo(at60, 6);
  });

  it("на 60 Гц сохраняет прежний шаг исходника в 12% за кадр", () => {
    expect(damp(0, 1, 0.12, 1 / 60)).toBeCloseTo(0.12, 6);
  });

  it("приближается к цели, но не проскакивает её", () => {
    let v = 0;
    for (let i = 0; i < 500; i++) v = damp(v, 1, 0.12, 1 / 60);
    expect(v).toBeGreaterThan(0.999);
    expect(v).toBeLessThanOrEqual(1);
  });
});

describe("measureStage", () => {
  const sections = [
    { top: 0, height: 1400 },
    { top: 1400, height: 1000 },
    { top: 2400, height: 1000 },
  ];

  it("без секций возвращает ноль", () => {
    expect(measureStage(0, 800, [])).toBe(0);
  });

  it("меряет от середины вьюпорта", () => {
    expect(measureStage(0, 800, sections)).toBeCloseTo(400 / 1400);
  });

  it("на стыке секций даёт ровную границу", () => {
    expect(measureStage(1000, 800, sections)).toBeCloseTo(1);
  });

  it("при перескролле упирается в конец последнего кадра", () => {
    // Индекс последней секции плюс её полный прогресс. Зажим до
    // допустимого индекса фигуры делает уже resolveStage.
    expect(measureStage(99999, 800, sections)).toBeCloseTo(3);
  });

  it("переживает секции нулевой высоты до монтирования", () => {
    const empty = [{ top: 0, height: 0 }];
    expect(measureStage(0, 800, empty)).toBe(0);
  });
});

describe("resolveStage", () => {
  const accents = [0.6, 0.15, 0.35];

  it("без кадров не падает", () => {
    expect(resolveStage(0, 1, [])).toMatchObject({ indexA: 0, blend: 0 });
  });

  it("в середине кадра фигура собрана и не смешана", () => {
    const s = resolveStage(0.5, 1, accents);
    expect(s.indexA).toBe(0);
    expect(s.blend).toBe(0);
    expect(s.settleA).toBeCloseTo(1);
    expect(s.accent).toBeCloseTo(0.6);
  });

  it("в самом начале кадра фигура ещё не дорисовалась", () => {
    expect(resolveStage(0, 1, accents).settleA).toBe(0);
  });

  it("к концу кадра передаёт эстафету следующему", () => {
    const s = resolveStage(0.95, 1, accents);
    expect(s.blend).toBeCloseTo(1);
    expect(s.settleA).toBeCloseTo(0);
    expect(s.settleB).toBeCloseTo(0.6);
    expect(s.accent).toBeCloseTo(0.15);
  });

  it("на последнем кадре никуда не переходит", () => {
    const s = resolveStage(2.9, 1, accents);
    expect(s.indexA).toBe(2);
    expect(s.indexB).toBe(2);
    expect(s.blend).toBe(0);
    expect(s.settleB).toBe(0);
    expect(s.accent).toBeCloseTo(0.35);
  });

  it("на последнем кадре фигура остаётся живой до самого низа страницы", () => {
    // Сменять её нечем, поэтому settle обязан держаться, а не гаснуть.
    expect(resolveStage(2.9, 1, accents).settleA).toBeCloseTo(1);
    expect(resolveStage(3, 1, accents).settleA).toBeCloseTo(1);
  });

  it("гасит обе фигуры, пока идёт вступление", () => {
    const s = resolveStage(0.95, 0, accents);
    expect(s.settleA).toBe(0);
    expect(s.settleB).toBe(0);
  });

  it("держит settle в пределах 0..1 на всём прогоне", () => {
    for (let p = 0; p <= accents.length - 0.01; p += 0.01) {
      const s = resolveStage(p, 1, accents);
      expect(s.settleA).toBeGreaterThanOrEqual(0);
      expect(s.settleA).toBeLessThanOrEqual(1);
      expect(s.settleB).toBeGreaterThanOrEqual(0);
      expect(s.settleB).toBeLessThanOrEqual(1);
    }
  });
});
