import {
  band,
  blob,
  drawEquirect,
  fillBase,
  mergeLayers,
  polygon,
  rng,
  soften,
} from "../maps";
import type { SpaceBody } from "./common";

/**
 * Земля — суша, облака и Луна.
 *
 * Слоёв два, и они живут порознь: материки идут с вращением планеты, облака
 * ползут поверх них своим ходом. Оба лежат в одной текстуре — суша в красном
 * канале, облака в зелёном, — поэтому шейдеру хватает одного сэмплера.
 */

/** Грубые контуры материков: [долгота, широта] */
const CONTINENTS: readonly (readonly (readonly [number, number])[])[] = [
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

export const earth: SpaceBody = {
  id: "earth",
  fit: 1.3,

  buildMap: () => {
    const land = drawEquirect(384, (ctx, box) => {
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
      soften(ctx, 1.5);
    });

    const clouds = drawEquirect(384, (ctx, box) => {
      const random = rng(0x4541);
      fillBase(ctx, box, 0);

      // Экваториальная зона конвекции и два пояса циклонов
      for (const [lat, spread, count] of [
        [4, 7, 26],
        [45, 11, 22],
        [-45, 11, 22],
      ]) {
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

      soften(ctx, 2.5);
    });

    return mergeLayers(land, clouds);
  },

  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.52;
  float v = 0.0;
  float lon, lat;
  vec3 n;

  if (sphereAt(q, R, lon, lat, n)){
    float surface = mapAt(lon + uTime * 0.2, lat);
    float cloud = mapLayer2(lon + uTime * 0.3, lat);
    v = clamp(contrast(mix(surface, 1.0, cloud * 0.8), 1.3, 0.42) * lit(n, 0.1), 0.0, 1.0);
  } else {
    // Дымка атмосферы по краю диска
    v = stroke(abs(length(q) - R * 1.02), 1.2) * 0.3;
  }

  // Луна: дальняя половина орбиты уходит за планету
  float orbit = uScale * 0.9;
  float a = 0.6 + uTime * 0.09;
  vec2 moon = vec2(cos(a) * orbit, sin(a) * orbit * 0.34);
  if (!(sin(a) > 0.0 && length(moon) < R)){
    v = max(v, dot2(q, moon, 1.9) * 0.95);
  }

  return v;
}
`,
};
