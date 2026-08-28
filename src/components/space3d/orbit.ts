import {
  MOONS,
  SYSTEM_3D,
  SYSTEM_RADIUS,
  bodyIndex,
  type Body3D,
  type Moon,
  type Vec3,
} from "./system";

/**
 * Механика трассированной сцены: где тела в момент времени и откуда на них
 * смотрит камера.
 *
 * Ни WebGL, ни DOM здесь нет — только числа, поэтому раскладка проверяется
 * тестами. Она же кормит и шейдер, и попадание кликом: тела нарисованы ровно
 * там, куда их поставили эти функции, и промахнуться мимо диска нельзя
 * по построению.
 */

export const TAU = Math.PI * 2;

export const clamp = (v: number, min: number, max: number) =>
  v < min ? min : v > max ? max : v;

/**
 * Множитель третьего закона Кеплера. Подобран так, чтобы Земля обходила
 * Солнце примерно за сорок секунд: медленнее — сцена кажется застывшей,
 * быстрее — планеты мельтешат.
 */
const BASE_RATE = 6.0;

/** Наклон камеры: от вида с ребра до вида сверху */
export const MIN_PHI = -1.45;
export const MAX_PHI = 1.45;

/** Пределы удаления камеры от точки, на которую она смотрит */
export const MIN_DIST = 1.2;
export const MAX_DIST = SYSTEM_RADIUS * 3.4;

/**
 * Расстояние, с которого система видна целиком. Считается по самой дальней
 * орбите с запасом на пояс Койпера: он лежит за Нептуном, и без запаса
 * в обзоре от него виднелась бы только внутренняя кромка.
 */
export const OVERVIEW_DIST = SYSTEM_RADIUS * 1.62;

/**
 * Третий закон Кеплера: период растёт как радиус в степени 3/2. Радиусы
 * орбит сжаты, а соотношение скоростей настоящее — Меркурий успевает
 * тринадцать оборотов, пока Нептун делает один.
 */
export const orbitRate = (orbit: number) =>
  orbit <= 0 ? 0 : BASE_RATE * Math.pow(orbit, -1.5);

/** Положение тела на орбите в момент времени */
export function bodyPosition(body: Body3D, time: number): Vec3 {
  if (body.orbit <= 0) return [0, 0, 0];
  const a = body.phase + time * orbitRate(body.orbit);
  return [Math.cos(a) * body.orbit, 0, Math.sin(a) * body.orbit];
}

/** Положения всех тел: один проход на кадр, дальше им пользуются все */
export const systemPositions = (time: number): Vec3[] =>
  SYSTEM_3D.map((body) => bodyPosition(body, time));

/** Угол собственного вращения тела в момент времени */
export const bodySpin = (body: Body3D, time: number) =>
  body.spin * time * TAU;

/**
 * Ось вращения тела в мировых координатах. Наклон отсчитывается от нормали
 * к эклиптике и завален в плоскости XY — направление завала произвольно,
 * важен только сам угол.
 */
export const bodyAxis = (body: Body3D): Vec3 => [
  Math.sin(body.tilt),
  Math.cos(body.tilt),
  0,
];

/**
 * Опорная пара векторов экваториальной плоскости тела. Та же, что строит
 * шейдер для долготы: спутники обязаны ходить в той плоскости, по которой
 * на планете разложены пояса.
 */
export function equatorBasis(axis: Vec3): [Vec3, Vec3] {
  // Ось всегда лежит в плоскости XY, поэтому с ортом Z она не совпадает
  // никогда и векторное произведение не вырождается
  const e1 = norm(cross(axis, [0, 0, 1]));
  return [e1, cross(axis, e1)];
}

/** Положение спутника в момент времени */
export function moonPosition(moon: Moon, time: number): Vec3 {
  const parent = SYSTEM_3D[bodyIndex(moon.parent)];
  const center = bodyPosition(parent, time);
  const [e1, e2] = equatorBasis(bodyAxis(parent));

  const a = moon.phase + time * moon.rate * TAU;
  const r = moon.orbit * parent.radius;
  const c = Math.cos(a) * r;
  const s = Math.sin(a) * r;

  return [
    center[0] + e1[0] * c + e2[0] * s,
    center[1] + e1[1] * c + e2[1] * s,
    center[2] + e1[2] * c + e2[2] * s,
  ];
}

/** Положения всех спутников на тот же момент, что и тела */
export const moonPositions = (time: number): Vec3[] =>
  MOONS.map((moon) => moonPosition(moon, time));

export type Camera3D = {
  /** Точка, вокруг которой ходит камера */
  target: Vec3;
  /** Поворот вокруг полярной оси, радианы */
  theta: number;
  /** Подъём над плоскостью эклиптики, радианы */
  phi: number;
  /** Удаление от цели */
  dist: number;
};

export type Basis = {
  /** Положение камеры в мире */
  pos: Vec3;
  right: Vec3;
  up: Vec3;
  forward: Vec3;
};

const norm = (v: Vec3): Vec3 => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};

const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

export const dot = (a: Vec3, b: Vec3) =>
  a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/**
 * Базис камеры: где она стоит и куда смотрит.
 *
 * Подъём ограничен снаружи, поэтому взгляд никогда не совпадает с мировой
 * вертикалью и векторное произведение не вырождается.
 */
export function cameraBasis(cam: Camera3D): Basis {
  const cp = Math.cos(cam.phi);
  const pos: Vec3 = [
    cam.target[0] + cam.dist * cp * Math.cos(cam.theta),
    cam.target[1] + cam.dist * Math.sin(cam.phi),
    cam.target[2] + cam.dist * cp * Math.sin(cam.theta),
  ];

  const forward = norm([
    cam.target[0] - pos[0],
    cam.target[1] - pos[1],
    cam.target[2] - pos[2],
  ]);
  const right = norm(cross(forward, [0, 1, 0]));
  const up = cross(right, forward);

  return { pos, right, up, forward };
}

/**
 * Тангенс половины поля зрения с поправкой на портретный экран.
 *
 * На вертикальном экране кадр сужается по горизонтали, и система вылезала бы
 * за края; поле зрения расширяется ровно настолько, чтобы этого не случилось.
 * Ту же формулу считает шейдер — иначе клик расходился бы с картинкой.
 */
export const tanFov = (fov: number, aspect: number) =>
  Math.tan(fov * 0.5) / Math.min(aspect, 1);

/**
 * Луч через точку экрана. Координаты — в пикселях от левого верхнего угла,
 * как их отдаёт событие указателя.
 *
 * shift поднимает картинку в кадре: на телефоне карточка тела занимает низ
 * экрана, и без сдвига планета оказывалась бы ровно под ней. Шейдер считает
 * ту же поправку, иначе клик разошёлся бы с изображением.
 */
export function screenRay(
  basis: Basis,
  x: number,
  y: number,
  width: number,
  height: number,
  fov: number,
  shift = 0,
): Vec3 {
  // Развёртка кадра — та же, что в шейдере: единица по вертикали
  const u = ((x - width * 0.5) / height) * tanFov(fov, width / height) * 2;
  const v =
    ((height * 0.5 - y) / height - shift) * tanFov(fov, width / height) * 2;

  return norm([
    basis.right[0] * u + basis.up[0] * v + basis.forward[0],
    basis.right[1] * u + basis.up[1] * v + basis.forward[1],
    basis.right[2] * u + basis.up[2] * v + basis.forward[2],
  ]);
}

/**
 * Тело под лучом или -1.
 *
 * Порог попадания заметно шире самого диска: в обзоре системы Меркурий —
 * это три пикселя, пальцем в него не попасть. Допуск задан углом, поэтому
 * растёт вместе с расстоянием и на экране остаётся постоянным.
 */
export function pickBody(
  positions: readonly Vec3[],
  origin: Vec3,
  dir: Vec3,
  slop = 0.02,
): number {
  let best = -1;
  let bestT = Infinity;

  positions.forEach((center, i) => {
    const oc: Vec3 = [
      center[0] - origin[0],
      center[1] - origin[1],
      center[2] - origin[2],
    ];
    const along = dot(oc, dir);
    if (along <= 0) return; // тело за спиной

    const off2 = dot(oc, oc) - along * along;
    const reach = Math.max(SYSTEM_3D[i].radius, along * slop);
    if (off2 > reach * reach) return;

    if (along < bestT) {
      bestT = along;
      best = i;
    }
  });

  return best;
}

/**
 * С какого расстояния смотреть на выбранное тело: столько его радиусов,
 * сколько заказано композицией. У Сатурна больше остальных — иначе кольца
 * не влезают в кадр.
 */
export const framingDist = (index: number) =>
  index < 0
    ? OVERVIEW_DIST
    : SYSTEM_3D[index].radius * SYSTEM_3D[index].framing;
