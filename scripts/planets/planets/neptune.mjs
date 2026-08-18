/**
 * Нептун — самые быстрые ветры в системе.
 *
 * Здесь нет запечённой карты: поверхность считается формулой, потому что
 * главное в кадре — сдвиг. Экваториальная струя идёт в обратную сторону
 * относительно средних широт, и на границе зон полосы разъезжаются.
 * Все частоты по долготе целые, иначе на 180-м меридиане был бы шов.
 *
 * Тритон обращается ретроградно и по наклонённой орбите — единственный
 * крупный спутник системы, который летит против вращения планеты.
 */

import { clamp, contrast, dot2, lambert, mix, rotate, sphereUV, TAU } from "../core/math.mjs";

/** Зоны ветров: экватор отстаёт, средние широты обгоняют */
const JETS = [
  { min: 58, turns: 2 },
  { min: 26, turns: 3 },
  { min: -26, turns: -4 },
  { min: -58, turns: 3 },
  { min: -91, turns: 2 },
];

const turnsAt = (latDeg) => JETS.find((j) => latDeg >= j.min).turns;

/** Большое тёмное пятно и его спутник из перистых облаков */
const SPOT_LON = -0.6;
const SPOT_LAT = -22;

const TRITON_TURNS = -1;
const TRITON_TILT = 0.55;

export default {
  id: "neptune",
  title: "Нептун",
  accent: 0.15,

  create(geom) {
    const R = geom.scale * 0.5;

    /** Альбедо в координатах карты: долгота в радианах, широта в градусах */
    const albedo = (lon, latDeg) => {
      let a = 0.55;
      a += 0.27 * Math.sin(latDeg * 0.115 + 0.5);
      a += 0.1 * Math.sin(latDeg * 0.31 + 1.9);

      // Перистые струи вдоль средних широт
      const belt = Math.exp(-Math.pow((Math.abs(latDeg) - 40) / 15, 2));
      const streak = Math.pow(Math.max(0, Math.sin(lon * 5 + latDeg * 0.25)), 6);
      a += streak * belt * 0.34;

      // Тёмное пятно
      const d = lon - SPOT_LON;
      const dlon = Math.atan2(Math.sin(d), Math.cos(d));
      const spot = Math.exp(
        -(Math.pow(dlon * 2, 2) + Math.pow((latDeg - SPOT_LAT) / 16, 2)),
      );
      a = mix(a, 0.06, spot * 0.95);

      // Светлые облака у края пятна
      const cd = lon - (SPOT_LON - 0.55);
      const clon = Math.atan2(Math.sin(cd), Math.cos(cd));
      const companion = Math.exp(
        -(Math.pow(clon * 4.5, 2) + Math.pow((latDeg - SPOT_LAT + 9) / 7, 2)),
      );
      a = mix(a, 1, companion * 0.85);

      return a;
    };

    const field = (nx, ny, t) => {
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      let v = 0;

      const uv = sphereUV(qx, qy, R);
      if (uv) {
        const latDeg = (uv.lat * 180) / Math.PI;
        const lon = uv.lon + TAU * turnsAt(latDeg) * t;
        v = clamp(contrast(albedo(lon, latDeg), 1.3, 0.55) * lambert(uv, 0.13), 0, 1);
      }

      const a = 1.2 + TAU * TRITON_TURNS * t;
      const [tx, ty] = rotate(
        Math.cos(a) * geom.scale * 0.92,
        Math.sin(a) * geom.scale * 0.92 * 0.38,
        TRITON_TILT,
      );
      if (!(Math.sin(a) > 0 && Math.hypot(tx, ty) < R)) {
        v = Math.max(v, dot2(qx, qy, tx, ty, 1.25) * 0.9);
      }

      return v;
    };

    return { field };
  },
};
