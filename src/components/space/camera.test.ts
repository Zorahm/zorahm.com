import { beforeEach, describe, expect, it } from "vitest";
import { SPACE_STRUCTURE } from "../../content";
import {
  resetSpace,
  selectBody,
  spaceState,
  useSpaceStore,
} from "./camera";

const SATURN = SPACE_STRUCTURE.findIndex((body) => body.id === "saturn");

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
    selectBody(SATURN);
    spaceState.focus = 1;
    resetSpace();
    expect(spaceState.focus).toBe(0);
    expect(spaceState.anchorIndex).toBe(-1);
    expect(useSpaceStore.getState().selected).toBe(-1);
  });
});
