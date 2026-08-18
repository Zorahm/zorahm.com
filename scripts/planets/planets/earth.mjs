/**
 * Земля — суша, облака и Луна.
 *
 * Слоёв два, и они крутятся с разной скоростью: материки делают оборот за
 * петлю, облака — два. Из-за этого погода живёт отдельно от географии, и
 * кадр не выглядит вращением одной картинки.
 */

import { createEquirectMap } from "../core/textures.mjs";
import { band, blob, fillBase, polygon, soften } from "../core/maps.mjs";
import { clamp, contrast, dot2, lambert, mix, rng, sphereUV, stroke, TAU } from "../core/math.mjs";

const LAND_TURNS = 1;
const CLOUD_TURNS = 2;
/** Оборотов Луны за петлю */
const MOON_TURNS = 1;

/** Грубые контуры материков: [долгота, широта] */
const CONTINENTS = [
  // Африка
  [[-17, 14], [-6, 5], [8, 4], [10, -1], [12, -6], [14, -22], [20, -35], [27, -33], [33, -26], [40, -16], [42, -2], [51, 12], [43, 12], [32, 31], [10, 37], [-6, 36], [-17, 21]],
  // Евразия
  [[-9, 36], [3, 43], [18, 40], [30, 37], [45, 40], [60, 42], [70, 38], [77, 32], [72, 20], [80, 15], [90, 22], [92, 21], [98, 8], [104, 1], [110, 12], [122, 22], [122, 40], [136, 46], [143, 53], [160, 60], [178, 66], [170, 71], [140, 74], [110, 77], [80, 76], [60, 71], [45, 69], [30, 70], [12, 60], [5, 54], [-5, 50]],
  // Северная Америка
  [[-166, 66], [-152, 58], [-132, 54], [-124, 42], [-117, 32], [-108, 24], [-97, 18], [-90, 15], [-83, 9], [-81, 24], [-76, 35], [-66, 45], [-56, 50], [-62, 60], [-78, 70], [-95, 72], [-125, 70], [-156, 71]],
  // Южная Америка
  [[-81, 8], [-70, 11], [-60, 10], [-50, 1], [-35, -6], [-38, -13], [-48, -25], [-58, -35], [-63, -42], [-70, -53], [-75, -46], [-72, -30], [-71, -18], [-78, -6], [-80, 0]],
  // Австралия
  [[113, -22], [122, -17], [130, -12], [142, -11], [146, -19], [153, -28], [150, -37], [140, -38], [129, -32], [115, -34]],
  // Гренландия
  [[-45, 60], [-22, 70], [-25, 82], [-50, 83], [-68, 78], [-56, 66]],
];

export default {
  id: "earth",
  title: "Земля",
  accent: 0.22,

  create(geom) {
    const R = geom.scale * 0.52;
    const moonOrbit = geom.scale * 0.9;

    const land = createEquirectMap(768, 384, (ctx, box) => {
      fillBase(ctx, box, 0.08);
      for (const outline of CONTINENTS) polygon(ctx, box, outline, 0.95);

      // Пустыни светлее травы, тайга темнее
      blob(ctx, box, { lon: 15, lat: 22, rx: 30, ry: 8, level: 0.98, alpha: 0.8 });
      blob(ctx, box, { lon: 48, lat: 22, rx: 14, ry: 7, level: 0.98, alpha: 0.7 });
      blob(ctx, box, { lon: 90, lat: 62, rx: 55, ry: 10, level: 0.7, alpha: 0.6 });
      blob(ctx, box, { lon: -60, lat: -5, rx: 16, ry: 10, level: 0.72, alpha: 0.7 });

      // Лёд
      band(ctx, box, { lat0: -90, lat1: -71, level: 1 });
      band(ctx, box, { lat0: 79, lat1: 90, level: 1 });
      soften(ctx, box, 1.5);
    });

    const clouds = createEquirectMap(768, 384, (ctx, box) => {
      const random = rng(0x4541);
      fillBase(ctx, box, 0);

      // Экваториальная зона конвекции и два пояса циклонов
      for (const [lat, spread, count] of [[4, 7, 26], [45, 11, 22], [-45, 11, 22]]) {
        for (let i = 0; i < count; i++) {
          blob(ctx, box, {
            lon: random() * 360 - 180,
            lat: lat + (random() - 0.5) * spread * 2,
            rx: 8 + random() * 16,
            ry: 2.5 + random() * 4,
            level: 1,
            alpha: 0.3 + random() * 0.3,
            spin: (random() - 0.5) * 0.6,
          });
        }
      }

      // Циклоны с закруткой
      for (let i = 0; i < 5; i++) {
        const lon = random() * 360 - 180;
        const lat = (random() < 0.5 ? 1 : -1) * (22 + random() * 25);
        for (let a = 0; a < 7; a++) {
          const turn = (a / 7) * Math.PI * 1.6;
          blob(ctx, box, {
            lon: lon + Math.cos(turn) * a * 1.5,
            lat: lat + Math.sin(turn) * a * 0.9 * Math.sign(lat),
            rx: 7 - a * 0.6,
            ry: 3.2 - a * 0.25,
            level: 1,
            alpha: 0.4,
            spin: turn,
          });
        }
      }

      soften(ctx, box, 2.5);
    });

    const field = (nx, ny, t) => {
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      let v = 0;

      const uv = sphereUV(qx, qy, R);
      if (uv) {
        const surface = land(uv.lon + TAU * LAND_TURNS * t, uv.lat);
        const cloud = clouds(uv.lon + TAU * CLOUD_TURNS * t, uv.lat);
        v = clamp(contrast(mix(surface, 1, cloud * 0.8), 1.3, 0.42) * lambert(uv, 0.1), 0, 1);
      } else {
        // Дымка атмосферы по краю диска
        v = stroke(Math.abs(Math.hypot(qx, qy) - R * 1.02), 1.2) * 0.3;
      }

      const a = 0.6 + TAU * MOON_TURNS * t;
      const mx = Math.cos(a) * moonOrbit;
      const my = Math.sin(a) * moonOrbit * 0.34;
      // Дальняя половина орбиты уходит за планету
      if (!(Math.sin(a) > 0 && Math.hypot(mx, my) < R)) {
        v = Math.max(v, dot2(qx, qy, mx, my, 1.9) * 0.95);
      }

      return v;
    };

    return { field };
  },
};
