import { beforeEach, describe, expect, it } from "vitest";
import { OVERVIEW_DIST } from "./orbit";
import {
  panCamera,
  resetScene,
  resetView,
  roamKey,
  selectBody3d,
  stepScene,
  useView3dStore,
  view3d,
  zoomCamera,
} from "./state";
import { SYSTEM_3D } from "./system";

describe("state3d - камера и управление", () => {
  beforeEach(() => {
    resetScene();
  });

  it("сброс сцены возвращает исходные значения и goalTarget", () => {
    resetView();
    expect(view3d.dist).toBe(OVERVIEW_DIST);
    expect(view3d.target).toEqual([0, 0, 0]);
    expect(view3d.goalTarget).toEqual([0, 0, 0]);
    expect(view3d.roaming).toBe(false);
    expect(useView3dStore.getState().selected).toBe(-1);
  });

  it("выбор тела плавно ведёт target к goalTarget", () => {
    selectBody3d(3); // Earth
    expect(useView3dStore.getState().selected).toBe(3);
    expect(view3d.focusIndex).toBe(3);

    // Сделаем шаги сцены (2 секунды)
    const dt = 0.016;
    for (let i = 0; i < 120; i++) {
      stepScene(dt);
    }

    // target должен догнать актуальное положение Земли
    const earthPos = view3d.positions[3];
    expect(view3d.target[0]).toBeCloseTo(earthPos[0], 0);
    expect(view3d.target[2]).toBeCloseTo(earthPos[2], 0);
  });

  it("сброс фокуса плавно возвращает target в начало координат", () => {
    selectBody3d(3);
    for (let i = 0; i < 90; i++) stepScene(0.016);

    selectBody3d(-1);
    expect(view3d.focusIndex).toBe(-1);
    expect(view3d.goalTarget).toEqual([0, 0, 0]);

    for (let i = 0; i < 120; i++) stepScene(0.016);
    expect(view3d.target[0]).toBeCloseTo(0, 0);
    expect(view3d.target[2]).toBeCloseTo(0, 0);
  });

  it("минимальная дистанция до выбранного тела не меньше radius * 1.45", () => {
    selectBody3d(3); // Earth: radius 0.55
    const earthRadius = SYSTEM_3D[3].radius;
    const minExpected = earthRadius * 1.45;

    // Пытаемся зазумиться вплотную
    for (let i = 0; i < 20; i++) zoomCamera(5.0);
    for (let i = 0; i < 60; i++) stepScene(0.016);

    expect(view3d.dist).toBeGreaterThanOrEqual(minExpected);
  });

  it("панорамирование мышкой (panCamera) сдвигает target и включает свободный режим", () => {
    panCamera(50, -30, 800);
    expect(view3d.roaming).toBe(true);
    expect(useView3dStore.getState().selected).toBe(-1);
    expect(view3d.target).not.toEqual([0, 0, 0]);
  });

  it("адаптивный WASD и вертикальный полёт Q/E", () => {
    roamKey("w", true);
    roamKey("e", true); // Вверх

    const t0 = [...view3d.target];
    for (let i = 0; i < 30; i++) stepScene(0.016);

    expect(view3d.roaming).toBe(true);
    expect(view3d.target).not.toEqual(t0);
    expect(view3d.target[1]).toBeGreaterThan(t0[1]);

    roamKey("w", false);
    roamKey("e", false);
  });

  it("Shift увеличивает скорость полёта в 3 раза", () => {
    resetScene();
    roamKey("w", true);
    for (let i = 0; i < 30; i++) stepScene(0.016);
    const dNormal = Math.hypot(...view3d.target);

    resetScene();
    roamKey("shift", true);
    roamKey("w", true);
    for (let i = 0; i < 30; i++) stepScene(0.016);
    const dShift = Math.hypot(...view3d.target);

    expect(dShift).toBeGreaterThan(dNormal * 2.2);

    roamKey("w", false);
    roamKey("shift", false);
  });

  it("выталкивание камеры при сближении с телами в режиме roaming", () => {
    resetScene();
    view3d.roaming = true;
    view3d.roamDist = 1.0;
    // Помещаем цель рядом с Солнцем (радиус 2.6, выталкивание на 2.6 * 1.25 = 3.25)
    view3d.target = [0, 0, 0];
    stepScene(0.016);

    const sunMinDist = SYSTEM_3D[0].radius * 1.25;
    const camDistToSun = Math.hypot(
      view3d.target[0],
      view3d.target[1],
      view3d.target[2] + view3d.dist,
    );
    expect(camDistToSun).toBeGreaterThanOrEqual(sunMinDist * 0.95);
  });

  it("переключатель границ в store", () => {
    const store = useView3dStore.getState();
    const initial = store.borders;
    useView3dStore.setState({ borders: !initial });
    expect(useView3dStore.getState().borders).toBe(!initial);
  });
});
