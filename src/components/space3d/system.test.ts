import { describe, expect, it } from "vitest";
import { SPACE_STRUCTURE } from "../../content";
import { OVERVIEW_DIST } from "./orbit";
import {
  BELTS,
  BELT_COUNT,
  RING_COUNT,
  SYSTEM_3D,
  SYSTEM_RADIUS,
  Surface,
} from "./system";

describe("композиция трассированной сцены", () => {
  it("тот же набор и порядок тел, что и на точечной сцене", () => {
    expect(SYSTEM_3D.map((b) => b.id)).toEqual(SPACE_STRUCTURE.map((b) => b.id));
  });

  it("Солнце стоит в центре, орбиты растут наружу", () => {
    expect(SYSTEM_3D[0].id).toBe("sun");
    expect(SYSTEM_3D[0].orbit).toBe(0);
    for (let i = 2; i < SYSTEM_3D.length; i++) {
      expect(SYSTEM_3D[i].orbit, SYSTEM_3D[i].id).toBeGreaterThan(
        SYSTEM_3D[i - 1].orbit,
      );
    }
  });

  it("ни одно тело не задевает соседнюю орбиту", () => {
    for (let i = 2; i < SYSTEM_3D.length; i++) {
      const gap = SYSTEM_3D[i].orbit - SYSTEM_3D[i - 1].orbit;
      const bulk = SYSTEM_3D[i].radius + SYSTEM_3D[i - 1].radius;
      expect(gap, SYSTEM_3D[i].id).toBeGreaterThan(bulk);
    }
  });

  it("внутренние планеты не влетают в Солнце", () => {
    expect(SYSTEM_3D[1].orbit).toBeGreaterThan(
      SYSTEM_3D[0].radius + SYSTEM_3D[1].radius,
    );
  });

  it("кольца начинаются над поверхностью и помещаются в кадр тела", () => {
    for (const body of SYSTEM_3D.filter((b) => b.rings)) {
      const [inner, outer] = body.rings!.span;
      expect(inner, body.id).toBeGreaterThan(1);
      expect(outer, body.id).toBeGreaterThan(inner);
      // Камера отходит на framing радиусов — кольца обязаны влезть
      expect(outer, body.id).toBeLessThan(body.framing * 0.5);
    }
  });

  it("кольца есть у Сатурна и Урана, и профили у них разные", () => {
    const ringed = SYSTEM_3D.filter((b) => b.rings);
    expect(ringed.map((b) => b.id)).toEqual(["saturn", "uranus"]);
    expect(RING_COUNT).toBe(ringed.length);
    expect(new Set(ringed.map((b) => b.rings!.style)).size).toBe(ringed.length);
  });

  it("у каждого тела заданы цвета и положительный радиус", () => {
    for (const body of SYSTEM_3D) {
      expect(body.radius, body.id).toBeGreaterThan(0);
      expect(body.colorA, body.id).toHaveLength(3);
      expect(body.colorB, body.id).toHaveLength(3);
      for (const c of [...body.colorA, ...body.colorB]) {
        expect(c, body.id).toBeGreaterThanOrEqual(0);
        expect(c, body.id).toBeLessThanOrEqual(1);
      }
    }
  });

  it("стиль поверхности — одно из известных шейдеру значений", () => {
    const known = Object.values(Surface);
    for (const body of SYSTEM_3D) {
      expect(known, body.id).toContain(body.style);
    }
    // Солнце единственное светит само
    expect(SYSTEM_3D.filter((b) => b.style === Surface.Sun).map((b) => b.id)).toEqual(
      ["sun"],
    );
  });

  it("радиус системы — самая дальняя орбита", () => {
    expect(SYSTEM_RADIUS).toBe(SYSTEM_3D[SYSTEM_3D.length - 1].orbit);
  });
});

describe("пояса мелких тел", () => {
  const orbitOf = (id: string) => SYSTEM_3D.find((b) => b.id === id)!.orbit;

  it("оба пояса заданы кольцом с толщиной", () => {
    expect(BELT_COUNT).toBe(BELTS.length);
    for (const belt of BELTS) {
      expect(belt.outer, belt.id).toBeGreaterThan(belt.inner);
      expect(belt.height, belt.id).toBeGreaterThan(0);
      expect(belt.cell, belt.id).toBeGreaterThan(0);
      expect(belt.density, belt.id).toBeGreaterThan(0);
      expect(belt.density, belt.id).toBeLessThan(1);
    }
  });

  it("астероидный лежит в разрыве между Марсом и Юпитером", () => {
    const belt = BELTS.find((b) => b.id === "asteroid")!;
    expect(belt.inner).toBeGreaterThan(orbitOf("mars"));
    expect(belt.outer).toBeLessThan(orbitOf("jupiter"));
  });

  it("пояс Койпера начинается за орбитой Нептуна", () => {
    const belt = BELTS.find((b) => b.id === "kuiper")!;
    expect(belt.inner).toBeGreaterThan(orbitOf("neptune"));
  });

  it("ни одна планета не проходит сквозь пояс", () => {
    for (const belt of BELTS) {
      for (const body of SYSTEM_3D) {
        const inside = body.orbit >= belt.inner && body.orbit <= belt.outer;
        expect(inside, `${body.id} в поясе ${belt.id}`).toBe(false);
      }
    }
  });

  it("обзор системы охватывает пояс Койпера", () => {
    const kuiper = BELTS.find((b) => b.id === "kuiper")!;
    expect(OVERVIEW_DIST).toBeGreaterThan(kuiper.inner);
  });
});
