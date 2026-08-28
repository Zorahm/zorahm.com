import { describe, expect, it } from "vitest";
import {
  OVERVIEW_DIST,
  TAU,
  bodyAxis,
  bodyPosition,
  cameraBasis,
  dot,
  framingDist,
  moonPosition,
  moonPositions,
  orbitRate,
  pickBody,
  screenRay,
  systemPositions,
  tanFov,
  type Camera3D,
} from "./orbit";
import { MOONS, SYSTEM_3D, bodyIndex, type Vec3 } from "./system";

const len = (v: Vec3) => Math.hypot(v[0], v[1], v[2]);

const CAM: Camera3D = { target: [0, 0, 0], theta: 0, phi: 0, dist: 10 };

describe("орбиты", () => {
  it("Солнце стоит в центре и не обращается", () => {
    expect(orbitRate(0)).toBe(0);
    expect(bodyPosition(SYSTEM_3D[0], 12.5)).toEqual([0, 0, 0]);
  });

  it("планеты держатся своей орбиты в плоскости эклиптики", () => {
    for (const body of SYSTEM_3D.slice(1)) {
      for (const time of [0, 3.7, 91]) {
        const p = bodyPosition(body, time);
        expect(len(p), body.id).toBeCloseTo(body.orbit, 6);
        expect(p[1], body.id).toBe(0);
      }
    }
  });

  it("чем дальше орбита, тем медленнее обращение", () => {
    const rates = SYSTEM_3D.slice(1).map((b) => orbitRate(b.orbit));
    for (let i = 1; i < rates.length; i++) {
      expect(rates[i]).toBeLessThan(rates[i - 1]);
    }
  });

  it("периоды подчиняются третьему закону Кеплера", () => {
    const [inner, outer] = [SYSTEM_3D[1], SYSTEM_3D[8]];
    const ratio = orbitRate(inner.orbit) / orbitRate(outer.orbit);
    expect(ratio).toBeCloseTo(Math.pow(outer.orbit / inner.orbit, 1.5), 6);
  });

  it("тело возвращается в ту же точку через свой период", () => {
    const body = SYSTEM_3D[3];
    const period = TAU / orbitRate(body.orbit);
    const start = bodyPosition(body, 0);
    const round = bodyPosition(body, period);
    expect(round[0]).toBeCloseTo(start[0], 6);
    expect(round[2]).toBeCloseTo(start[2], 6);
  });

  it("раскладка отдаёт все тела разом", () => {
    expect(systemPositions(4).length).toBe(SYSTEM_3D.length);
  });
});

describe("спутники", () => {
  it("держатся своей орбиты вокруг родителя", () => {
    for (const moon of MOONS) {
      const parent = SYSTEM_3D[bodyIndex(moon.parent)];
      const want = moon.orbit * parent.radius;
      for (const time of [0, 5.5, 40]) {
        const p = moonPosition(moon, time);
        const c = bodyPosition(parent, time);
        const d = Math.hypot(p[0] - c[0], p[1] - c[1], p[2] - c[2]);
        expect(d, moon.parent).toBeCloseTo(want, 6);
      }
    }
  });

  it("не задевают поверхность родителя", () => {
    for (const moon of MOONS) {
      expect(moon.orbit, moon.parent).toBeGreaterThan(1 + moon.radius);
    }
  });

  it("галилеевы идут в резонансе 4:2:1", () => {
    const [io, europa, ganymede] = MOONS.filter((m) => m.parent === "jupiter");
    expect(io.rate / europa.rate).toBeCloseTo(2, 6);
    expect(europa.rate / ganymede.rate).toBeCloseTo(2, 6);
  });

  it("Фобос обгоняет вращение Марса, Деймос отстаёт", () => {
    const mars = SYSTEM_3D[bodyIndex("mars")];
    const [phobos, deimos] = MOONS.filter((m) => m.parent === "mars");
    expect(phobos.rate).toBeGreaterThan(mars.spin);
    expect(deimos.rate).toBeLessThan(mars.spin);
  });

  it("Тритон летит против остальных", () => {
    const triton = MOONS.find((m) => m.parent === "neptune");
    expect(triton?.rate).toBeLessThan(0);
    for (const moon of MOONS.filter((m) => m.parent !== "neptune")) {
      expect(moon.rate, moon.parent).toBeGreaterThan(0);
    }
  });

  it("спутник обходит планету за свой период", () => {
    const moon = MOONS[0];
    const period = TAU / (moon.rate * TAU);
    const start = moonPosition(moon, 0);
    const round = moonPosition(moon, period);
    const parentStart = bodyPosition(SYSTEM_3D[bodyIndex(moon.parent)], 0);
    const parentRound = bodyPosition(SYSTEM_3D[bodyIndex(moon.parent)], period);
    // Сравниваются смещения от планеты: сама она за это время уехала
    expect(round[0] - parentRound[0]).toBeCloseTo(start[0] - parentStart[0], 6);
    expect(round[2] - parentRound[2]).toBeCloseTo(start[2] - parentStart[2], 6);
  });

  it("орбита лежит в экваториальной плоскости родителя", () => {
    for (const moon of MOONS) {
      const parent = SYSTEM_3D[bodyIndex(moon.parent)];
      const axis = bodyAxis(parent);
      const c = bodyPosition(parent, 7);
      const p = moonPosition(moon, 7);
      const offset: Vec3 = [p[0] - c[0], p[1] - c[1], p[2] - c[2]];
      expect(dot(offset, axis), moon.parent).toBeCloseTo(0, 6);
    }
  });

  it("у каждого спутника есть родитель среди тел", () => {
    for (const moon of MOONS) {
      expect(bodyIndex(moon.parent), moon.parent).toBeGreaterThanOrEqual(0);
    }
    expect(moonPositions(3)).toHaveLength(MOONS.length);
  });
});

describe("камера", () => {
  it("стоит на заданном удалении и смотрит в цель", () => {
    const basis = cameraBasis({ ...CAM, theta: 0.7, phi: 0.4, dist: 18 });
    expect(len(basis.pos)).toBeCloseTo(18, 6);
    // Взгляд направлен из точки стояния в цель
    const toTarget: Vec3 = [-basis.pos[0], -basis.pos[1], -basis.pos[2]];
    const l = len(toTarget);
    expect(dot(basis.forward, [toTarget[0] / l, toTarget[1] / l, toTarget[2] / l])).toBeCloseTo(1, 6);
  });

  it("базис ортонормирован при любом наклоне", () => {
    for (const phi of [-1.45, -0.3, 0, 0.62, 1.45]) {
      const b = cameraBasis({ ...CAM, phi });
      expect(len(b.right), `phi=${phi}`).toBeCloseTo(1, 6);
      expect(len(b.up), `phi=${phi}`).toBeCloseTo(1, 6);
      expect(len(b.forward), `phi=${phi}`).toBeCloseTo(1, 6);
      expect(dot(b.right, b.up), `phi=${phi}`).toBeCloseTo(0, 6);
      expect(dot(b.right, b.forward), `phi=${phi}`).toBeCloseTo(0, 6);
      expect(dot(b.up, b.forward), `phi=${phi}`).toBeCloseTo(0, 6);
    }
  });

  it("подъём камеры поднимает её над эклиптикой", () => {
    expect(cameraBasis({ ...CAM, phi: 0.5 }).pos[1]).toBeGreaterThan(0);
    expect(cameraBasis({ ...CAM, phi: -0.5 }).pos[1]).toBeLessThan(0);
  });

  it("портретный экран расширяет поле зрения, альбомный — нет", () => {
    const fov = 0.8;
    expect(tanFov(fov, 1.78)).toBeCloseTo(Math.tan(fov / 2), 6);
    expect(tanFov(fov, 0.5)).toBeCloseTo(Math.tan(fov / 2) * 2, 6);
  });
});

describe("луч через экран", () => {
  const basis = cameraBasis({ ...CAM, theta: 0.9, phi: 0.3, dist: 40 });

  it("из центра кадра идёт ровно вперёд", () => {
    const rd = screenRay(basis, 640, 360, 1280, 720, 0.84);
    expect(rd[0]).toBeCloseTo(basis.forward[0], 6);
    expect(rd[1]).toBeCloseTo(basis.forward[1], 6);
    expect(rd[2]).toBeCloseTo(basis.forward[2], 6);
  });

  it("правая половина кадра уходит вправо, верхняя — вверх", () => {
    expect(dot(screenRay(basis, 1100, 360, 1280, 720, 0.84), basis.right)).toBeGreaterThan(0);
    expect(dot(screenRay(basis, 180, 360, 1280, 720, 0.84), basis.right)).toBeLessThan(0);
    expect(dot(screenRay(basis, 640, 100, 1280, 720, 0.84), basis.up)).toBeGreaterThan(0);
    expect(dot(screenRay(basis, 640, 600, 1280, 720, 0.84), basis.up)).toBeLessThan(0);
  });

  it("луч единичной длины", () => {
    expect(len(screenRay(basis, 20, 700, 1280, 720, 0.84))).toBeCloseTo(1, 6);
  });
});

describe("попадание по телу", () => {
  const positions: Vec3[] = SYSTEM_3D.map((_, i) => [0, 0, i === 0 ? 0 : 20 + i]);

  it("находит тело прямо по курсу", () => {
    expect(pickBody(positions, [0, 0, -10], [0, 0, 1])).toBe(0);
  });

  it("не смотрит назад", () => {
    expect(pickBody(positions, [0, 0, -10], [0, 0, -1])).toBe(-1);
  });

  it("мимо всех тел возвращает -1", () => {
    expect(pickBody(positions, [0, 0, -10], [0, 1, 0])).toBe(-1);
  });

  it("из двух тел на луче выбирает ближнее", () => {
    const line: Vec3[] = SYSTEM_3D.map(() => [0, 0, 0]);
    line[3] = [0, 0, 10];
    line[6] = [0, 0, 30];
    expect(pickBody([line[3], line[6]], [0, 0, 0], [0, 0, 1])).toBe(0);
    expect(pickBody([line[6], line[3]], [0, 0, 0], [0, 0, 1])).toBe(1);
  });

  it("допуск позволяет попасть по далёкому Меркурию мимо диска", () => {
    const far: Vec3[] = [[0, 0, 0], [0, 0, 50]];
    const radius = SYSTEM_3D[1].radius;
    // Промах вдвое шире диска, но внутри углового допуска
    const dir: Vec3 = [radius * 2, 0, 50];
    const l = Math.hypot(dir[0], dir[2]);
    expect(pickBody(far, [0, 0, 0], [dir[0] / l, 0, dir[2] / l])).toBe(1);
  });

  it("большой допуск не подменяет промах попаданием у самого края кадра", () => {
    const far: Vec3[] = [[0, 0, 0], [0, 0, 50]];
    expect(pickBody(far, [0, 0, 0], [0.7, 0, 0.71])).toBe(-1);
  });
});

describe("кадрирование", () => {
  it("без выбора камера стоит на обзорном удалении", () => {
    expect(framingDist(-1)).toBe(OVERVIEW_DIST);
  });

  it("к каждому телу камера подходит на его же радиусы", () => {
    SYSTEM_3D.forEach((body, i) => {
      expect(framingDist(i), body.id).toBeCloseTo(body.radius * body.framing, 6);
      // Кадр не должен упираться в поверхность
      expect(framingDist(i), body.id).toBeGreaterThan(body.radius * 2);
    });
  });

  it("система целиком видна дальше самой дальней орбиты", () => {
    expect(OVERVIEW_DIST).toBeGreaterThan(SYSTEM_3D[8].orbit);
  });
});
