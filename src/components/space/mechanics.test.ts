import { describe, expect, it } from "vitest";
import { SPACE_STRUCTURE } from "../../content";
import {
  IDLE_CAMERA,
  angularRate,
  bodyAngle,
  bodyScale,
  pickBody,
  placeBodies,
  type Camera,
} from "./mechanics";

const SCENE = { centerX: 60, centerY: 30, scale: 28 };

const camera = (over: Partial<Camera> = {}): Camera => ({
  ...IDLE_CAMERA,
  ...over,
});

describe("скорости на орбитах", () => {
  it("Солнце не обращается вокруг себя", () => {
    expect(angularRate(0)).toBe(0);
  });

  it("чем дальше орбита, тем медленнее тело", () => {
    const rates = SPACE_STRUCTURE.filter((b) => b.orbit > 0).map((b) =>
      angularRate(b.orbit),
    );
    for (let i = 1; i < rates.length; i++) {
      expect(rates[i], `тело ${i}`).toBeLessThan(rates[i - 1]);
    }
  });

  it("третий закон Кеплера: вчетверо дальше — ввосьмеро медленнее", () => {
    expect(angularRate(1) / angularRate(4)).toBeCloseTo(8, 6);
  });
});

describe("раскладка тел", () => {
  it("Солнце стоит в центре сцены", () => {
    const { placements } = placeBodies(SPACE_STRUCTURE, 12, camera(), SCENE);
    expect(placements[0].x).toBeCloseTo(SCENE.centerX, 10);
    expect(placements[0].y).toBeCloseTo(SCENE.centerY, 10);
  });

  it("тело не выходит за свою орбиту", () => {
    const { placements } = placeBodies(SPACE_STRUCTURE, 7, camera(), SCENE);
    placements.forEach((p, i) => {
      const radius = SPACE_STRUCTURE[i].orbit * SCENE.scale;
      const distance = Math.hypot(p.x - SCENE.centerX, p.y - SCENE.centerY);
      expect(distance, SPACE_STRUCTURE[i].id).toBeLessThanOrEqual(radius + 1e-9);
    });
  });

  it("с ребра орбиты вырождаются в линию", () => {
    const { placements } = placeBodies(
      SPACE_STRUCTURE,
      3,
      camera({ inclination: 0 }),
      SCENE,
    );
    for (const p of placements) {
      expect(p.y).toBeCloseTo(SCENE.centerY, 10);
    }
  });

  it("поворот камеры на полный оборот возвращает раскладку", () => {
    const before = placeBodies(SPACE_STRUCTURE, 5, camera(), SCENE).placements;
    const after = placeBodies(
      SPACE_STRUCTURE,
      5,
      camera({ azimuth: Math.PI * 2 }),
      SCENE,
    ).placements;
    before.forEach((p, i) => {
      expect(p.x).toBeCloseTo(after[i].x, 8);
      expect(p.y).toBeCloseTo(after[i].y, 8);
    });
  });

  /**
   * Главный инвариант перелёта: на полном приближении выбранное тело обязано
   * оказаться ровно в центре экрана. Детальное поле рисуется в этой же точке,
   * и любое расхождение развалило бы смешивание двух полей.
   */
  it("на полном приближении выбранное тело в центре экрана", () => {
    SPACE_STRUCTURE.forEach((body, index) => {
      const { placements } = placeBodies(
        SPACE_STRUCTURE,
        9,
        camera({ focus: 1, focusIndex: index }),
        SCENE,
      );
      expect(placements[index].x, body.id).toBeCloseTo(SCENE.centerX, 8);
      expect(placements[index].y, body.id).toBeCloseTo(SCENE.centerY, 8);
    });
  });

  it("глубина отличает ближнюю половину орбиты от дальней", () => {
    const quarter = (phase: number) =>
      placeBodies(
        [{ id: "earth", orbit: 0.5, phase, dot: 1, accent: 0 }],
        0,
        camera({ azimuth: 0 }),
        SCENE,
      ).placements[0];

    // Синус угла отрицателен — тело идёт перед Солнцем и ниже центра экрана
    expect(quarter(-Math.PI / 2).depth).toBeGreaterThan(0);
    expect(quarter(-Math.PI / 2).y).toBeLessThan(SCENE.centerY);
    expect(quarter(Math.PI / 2).depth).toBeLessThan(0);
  });
});

describe("попадание по телу", () => {
  const { placements } = placeBodies(SPACE_STRUCTURE, 4, camera(), SCENE);

  it("клик в точку тела выбирает его", () => {
    placements.forEach((p, i) => {
      expect(pickBody(placements, p.x, p.y, 13), SPACE_STRUCTURE[i].id).toBe(i);
    });
  });

  it("клик далеко от всего не выбирает ничего", () => {
    expect(pickBody(placements, 5000, 5000, 13)).toBe(-1);
  });

  /**
   * Меркурий в обзоре — это меньше узла сетки, и порог попадания держится
   * на двух величинах сразу: около 22 экранных пикселей, но не меньше двух
   * с половиной узлов, иначе на крупной сетке в него было бы не ткнуть.
   */
  it("порог попадания шире самой точки", () => {
    const { centerX: x, centerY: y } = SCENE;
    const near = { x: x + 2.4, y, depth: 0, dot: 0.4 };
    const far = { x: x + 4.2, y, depth: 0, dot: 0.4 };

    // Крупный шаг: порог держит нижняя граница в узлах
    expect(pickBody([near], x, y, 26)).toBe(0);
    // Мелкий шаг: 22 пикселя — это 3.7 узла, промах в 4.2 уже мимо
    expect(pickBody([near], x, y, 6)).toBe(0);
    expect(pickBody([far], x, y, 6)).toBe(-1);
  });
});

describe("масштаб детального поля", () => {
  it("в обзоре тело размером с точку, на приближении — во весь кадр", () => {
    expect(bodyScale(SCENE, 0)).toBeCloseTo(SCENE.scale * 0.12, 10);
    expect(bodyScale(SCENE, 1)).toBeCloseTo(SCENE.scale, 10);
  });
});

describe("угол на орбите", () => {
  it("складывается из фазы, времени и поворота камеры", () => {
    const body = SPACE_STRUCTURE[3];
    expect(bodyAngle(body, 0, 0)).toBeCloseTo(body.phase, 10);
    expect(bodyAngle(body, 10, 0.5)).toBeCloseTo(
      body.phase + 10 * angularRate(body.orbit) + 0.5,
      10,
    );
  });
});
