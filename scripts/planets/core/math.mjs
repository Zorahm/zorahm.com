/**
 * Математика поля. Порт хелперов из src/components/field/shapes/common.ts:
 * там это GLSL-пролог, здесь — обычный JS, потому что кадры считаются на CPU.
 *
 * Координаты узлов везде такие же, как на сайте: X вправо, Y ВВЕРХ.
 * Переворот в экранные пиксели делает только рендерер.
 */

export const TAU = Math.PI * 2;

export const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);

export const mix = (a, b, t) => a + (b - a) * t;

export const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

/** Тот же hash, что в шейдерах сайта: на нём держится раскладка золотых точек */
export const hash = (x, y, z) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
};

/** Мягкое пятно радиуса r с линейным спадом */
export const dot2 = (px, py, cx, cy, r) => {
  const d = Math.hypot(px - cx, py - cy);
  return Math.max(0, 1 - d / Math.max(r, 1e-4));
};

/** Линия толщиной w со сглаженным краем */
export const stroke = (dist, w) => 1 - smoothstep(w * 0.5, w * 0.5 + 0.75, dist);

/** Приближённое расстояние до контура эллипса с полуосями rx, ry */
export const ellipseEdge = (px, py, rx, ry) => {
  const ax = Math.max(rx, 1e-4);
  const ay = Math.max(ry, 1e-4);
  const k = Math.hypot(px / ax, py / ay);
  return Math.abs(k - 1) * Math.min(ax, ay);
};

/** Расстояние до отрезка */
export const segDist = (px, py, ax, ay, bx, by) => {
  const pax = px - ax;
  const pay = py - ay;
  const bax = bx - ax;
  const bay = by - ay;
  const h = clamp((pax * bax + pay * bay) / Math.max(bax * bax + bay * bay, 1e-6), 0, 1);
  return Math.hypot(pax - bax * h, pay - bay * h);
};

/** Поворот вектора вокруг нуля */
export const rotate = (x, y, angle) => {
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  return [x * c - y * s, x * s + y * c];
};

/** Детерминированный ГПСЧ: карты планет обязаны быть одинаковыми от запуска к запуску */
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Ортографическая проекция шара: точка экрана → долгота, широта, глубина.
 *
 * Это то, чего нет у фигур сайта, и ради чего затевался офлайн-рендер: карта
 * планеты сэмплится по (lon, lat), поэтому детали реально уезжают за лимб
 * со сжатием, а не просто ползут по диску.
 *
 * @returns null, если точка вне диска
 */
export function sphereUV(qx, qy, R) {
  const r2 = qx * qx + qy * qy;
  const rr = R * R;
  if (r2 >= rr) return null;
  const z = Math.sqrt(rr - r2);
  return {
    lon: Math.atan2(qx, z),
    lat: Math.asin(clamp(qy / R, -1, 1)),
    /** Нормаль по оси взгляда, 1 в центре диска и 0 на лимбе */
    depth: z / R,
    nx: qx / R,
    ny: qy / R,
    nz: z / R,
  };
}

/** Нормированное направление света */
export function light(x, y, z) {
  const len = Math.hypot(x, y, z);
  return [x / len, y / len, z / len];
}

/** Свет слева сверху и почти в лоб — как радиальный градиент у Сатурна */
export const LIGHT = light(-0.4, 0.42, 0.81);

/**
 * Освещённость точки шара. ambient не даёт ночной стороне схлопнуться в ноль:
 * halftone живёт на плавном спаде радиусов, а не на чёрной дыре.
 */
export function lambert(uv, ambient = 0.16, dir = LIGHT) {
  const d = uv.nx * dir[0] + uv.ny * dir[1] + uv.nz * dir[2];
  return ambient + (1 - ambient) * Math.pow(Math.max(d, 0), 0.75);
}

/**
 * Растяжка контраста вокруг середины.
 *
 * Без неё карта планеты превращается в ровное серое поле: точки отличаются
 * радиусом на доли пикселя, и деталь просто не видна. Растяжка разводит
 * альбедо к краям диапазона, и halftone снова начинает рисовать.
 */
export const contrast = (v, k, mid = 0.5) => clamp((v - mid) * k + mid, 0, 1);
