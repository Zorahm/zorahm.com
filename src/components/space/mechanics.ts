import type { BodyStructure } from "@/content";

/**
 * Механика сцены: где на экране оказывается каждое тело при данном времени
 * и положении камеры.
 *
 * Здесь нет ни DOM, ни WebGL — только чистые функции, поэтому раскладка
 * проверяется тестами. Она же отвечает за попадание кликом: шейдер рисует
 * тела ровно там, куда их поставила эта математика, и промахнуться мимо
 * нарисованной точки невозможно по построению.
 *
 * Система координат — узлы сетки, как во всех полях сайта: X вправо, Y вверх.
 */

export const TAU = Math.PI * 2;

export const clamp = (v: number, min: number, max: number) =>
  v < min ? min : v > max ? max : v;

/** Угловая скорость на орбите радиуса 1, рад/с */
const BASE_RATE = 0.06;

/** Наклон камеры: от почти с ребра до вида сверху */
export const MIN_INCLINATION = 0.12;
export const MAX_INCLINATION = 1.45;

export const MIN_ZOOM = 0.55;
export const MAX_ZOOM = 2.4;

/** Во сколько раз сцена приближается, пока камера летит к телу */
const FOCUS_ZOOM = 2.5;

/**
 * Третий закон Кеплера: период растёт как радиус в степени 3/2.
 * Радиусы орбит на сцене сжаты, но соотношение скоростей — настоящее:
 * Меркурий успевает пятнадцать оборотов, пока Нептун делает один.
 */
export const angularRate = (orbit: number) =>
  orbit <= 0 ? 0 : BASE_RATE * Math.pow(orbit, -1.5);

export type Camera = {
  /** Поворот системы вокруг полярной оси, радианы */
  azimuth: number;
  /** Наклон: 0 — кольца орбит с ребра, PI/2 — вид сверху */
  inclination: number;
  zoom: number;
  /** 0 — обзор системы, 1 — выбранное тело на весь экран */
  focus: number;
  /** Индекс тела, к которому летим; -1 — никуда */
  focusIndex: number;
};

export const IDLE_CAMERA: Camera = {
  azimuth: 0,
  inclination: 0.62,
  zoom: 1,
  focus: 0,
  focusIndex: -1,
};

/** Сетка глазами сцены: центр и опорный масштаб в узлах */
export type Scene = {
  centerX: number;
  centerY: number;
  scale: number;
};

export type Placement = {
  /** Положение в узлах сетки */
  x: number;
  y: number;
  /** Больше нуля — тело ближе к зрителю, чем Солнце */
  depth: number;
  /** Радиус точки в узлах */
  dot: number;
};

/** Угол тела на орбите с учётом поворота камеры */
export const bodyAngle = (body: BodyStructure, time: number, azimuth: number) =>
  body.phase + time * angularRate(body.orbit) + azimuth;

/** Масштаб сцены в узлах: обычный зум плюс наезд при залёте к телу */
export const viewScale = (camera: Camera, scene: Scene) =>
  scene.scale * camera.zoom * (1 + FOCUS_ZOOM * camera.focus);

/**
 * Раскладка всех тел.
 *
 * Пока focus растёт, начало системы уезжает так, чтобы выбранное тело
 * оказалось в центре экрана: камера не просто приближается, а ведёт цель.
 */
export function placeBodies(
  bodies: readonly BodyStructure[],
  time: number,
  camera: Camera,
  scene: Scene,
): { origin: { x: number; y: number }; placements: Placement[] } {
  const flat = Math.sin(camera.inclination);
  const depthScale = Math.cos(camera.inclination);
  const scale = viewScale(camera, scene);

  // Положение в долях орбиты, до сдвига камеры
  const raw = bodies.map((body) => {
    const a = bodyAngle(body, time, camera.azimuth);
    return {
      x: Math.cos(a) * body.orbit,
      y: Math.sin(a) * body.orbit * flat,
      depth: -Math.sin(a) * body.orbit * depthScale,
    };
  });

  const anchor =
    camera.focusIndex >= 0 && camera.focusIndex < raw.length
      ? raw[camera.focusIndex]
      : { x: 0, y: 0 };

  const origin = {
    x: scene.centerX - anchor.x * camera.focus * scale,
    y: scene.centerY - anchor.y * camera.focus * scale,
  };

  const placements = raw.map((r, i) => ({
    x: origin.x + r.x * scale,
    y: origin.y + r.y * scale,
    depth: r.depth,
    // Точки растут вместе со сценой, но медленнее: иначе Юпитер при
    // наезде превращается в кляксу раньше, чем включится детальное поле
    dot: bodies[i].dot * (0.85 + 0.35 * camera.zoom) * (1 + camera.focus),
  }));

  return { origin, placements };
}

/**
 * Тело под курсором. Радиус попадания заметно больше точки: в обзоре
 * системы Меркурий — это два узла сетки, пальцем в него не попасть.
 */
export function pickBody(
  placements: readonly Placement[],
  nodeX: number,
  nodeY: number,
  step: number,
): number {
  // Порог в узлах: около 22 экранных пикселей на любой плотности сетки
  const reach = Math.max(22 / step, 2.5);
  let best = -1;
  let bestDistance = Infinity;

  placements.forEach((p, i) => {
    const distance = Math.hypot(p.x - nodeX, p.y - nodeY);
    const limit = Math.max(reach, p.dot * 2);
    if (distance < limit && distance < bestDistance) {
      best = i;
      bestDistance = distance;
    }
  });

  return best;
}

/**
 * Масштаб детального поля тела.
 *
 * При focus = 0 диск планеты равен точке, которой она нарисована в обзоре,
 * поэтому смешивание двух полей не даёт скачка размера; при focus = 1 тело
 * занимает экран целиком.
 */
export const bodyScale = (scene: Scene, focus: number) =>
  scene.scale * (0.12 + 0.88 * focus);
