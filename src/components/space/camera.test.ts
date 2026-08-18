import { beforeEach, describe, expect, it } from "vitest";
import { SPACE_STRUCTURE } from "../../content";
import {
  arriveAt,
  resetSpace,
  selectBody,
  spaceState,
  useSpaceStore,
} from "./camera";
import { IDLE_CAMERA, placeBodies } from "./mechanics";

const SCENE = { centerX: 60, centerY: 30, scale: 28 };
const SATURN = SPACE_STRUCTURE.findIndex((body) => body.id === "saturn");

/** Камера, как её собирает кадр сцены: цели читаются из состояния */
const camera = () => ({
  ...IDLE_CAMERA,
  focus: spaceState.focus,
  focusIndex: spaceState.anchorIndex,
});

describe("прилёт с главной страницы", () => {
  beforeEach(resetSpace);

  it("сцена открывается на теле, в которое нырнули", () => {
    arriveAt(SATURN);
    expect(spaceState.focus).toBe(1);
    expect(spaceState.anchorIndex).toBe(SATURN);

    const { placements } = placeBodies(SPACE_STRUCTURE, 7, camera(), SCENE);
    expect(placements[SATURN].x).toBeCloseTo(SCENE.centerX, 8);
    expect(placements[SATURN].y).toBeCloseTo(SCENE.centerY, 8);
  });

  it("камера сразу нацелена на обзор системы", () => {
    arriveAt(SATURN);
    // Индекс выбранного -1, значит focus поедет к нулю: тело отъедет само
    expect(spaceState.focusIndex).toBe(-1);
  });

  it("карточка при этом не открывается — читать никто не просил", () => {
    arriveAt(SATURN);
    expect(useSpaceStore.getState().selected).toBe(-1);
  });
});

describe("якорь камеры", () => {
  beforeEach(resetSpace);

  it("держится, пока камера возвращается к обзору", () => {
    selectBody(SATURN);
    expect(spaceState.anchorIndex).toBe(SATURN);

    // Тело закрыли: выбор снят сразу, а якорь обязан пережить отлёт, иначе
    // планета пропала бы рывком в тот же кадр
    selectBody(-1);
    expect(spaceState.focusIndex).toBe(-1);
    expect(spaceState.anchorIndex).toBe(SATURN);
  });

  it("переход с тела на тело заводит перелёт заново", () => {
    selectBody(SATURN);
    spaceState.focus = 1;

    selectBody(0);
    expect(spaceState.anchorIndex).toBe(0);
    expect(spaceState.focus).toBeLessThanOrEqual(0.12);
  });

  it("сброс возвращает сцену к обзору", () => {
    arriveAt(SATURN);
    resetSpace();
    expect(spaceState.focus).toBe(0);
    expect(spaceState.anchorIndex).toBe(-1);
    expect(useSpaceStore.getState().selected).toBe(-1);
  });
});
