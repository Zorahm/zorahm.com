import { blob, drawEquirect, fillBase, rng, soften, wavyBand } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Юпитер — пояса, Красное пятно и четыре галилеевых спутника.
 *
 * Пояса едут с разной скоростью: карта сэмплится со сдвигом долготы, который
 * зависит от широты. Экваториальная струя обгоняет полярные широты вчетверо,
 * и на границах зон полосы срезаются друг об друга — у настоящего Юпитера
 * это и есть главная примета.
 *
 * Границы зон в шейдере и в карте заданы одними и теми же широтами: разрыв
 * приходится ровно на край пояса, а не режет его посередине.
 */

/** Струи: широта нижнего края зоны и её яркость */
const JETS: readonly { min: number; level: number }[] = [
  { min: 62, level: 0.6 },
  { min: 40, level: 0.88 },
  { min: 24, level: 0.54 },
  { min: 8, level: 0.92 },
  { min: -8, level: 0.72 },
  { min: -24, level: 0.9 },
  { min: -40, level: 0.5 },
  { min: -62, level: 0.86 },
  { min: -91, level: 0.58 },
];

export const jupiter: SpaceBody = {
  id: "jupiter",
  fit: 1.3,

  buildMap: () =>
    drawEquirect(384, (ctx, box) => {
      const random = rng(0x4a55);
      fillBase(ctx, box, 0.7);

      JETS.forEach((jet, i) => {
        const top = i === 0 ? 90 : JETS[i - 1].min;
        wavyBand(ctx, box, {
          lat0: jet.min,
          lat1: top,
          level: jet.level,
          waves: 3 + (i % 3),
          amp: 1.6,
          phase: i * 1.3,
        });

        // Завихрения вдоль границы зоны
        for (let k = 0; k < 26; k++) {
          blob(ctx, box, {
            lon: random() * 360 - 180,
            lat: jet.min + random() * (top - jet.min),
            rx: 4 + random() * 12,
            ry: 1 + random() * 2.2,
            level: jet.level + (random() < 0.5 ? -0.22 : 0.22),
            alpha: 0.45,
            spin: (random() - 0.5) * 0.25,
          });
        }
      });

      // Белые овалы в южном полушарии
      for (const [lon, lat] of [
        [-120, -34],
        [-60, -33],
        [60, -35],
        [150, -33],
      ]) {
        blob(ctx, box, { lon, lat, rx: 7, ry: 3, level: 1, alpha: 0.85 });
      }

      // Большое красное пятно: тёмное ядро в светлом ободе
      blob(ctx, box, { lon: 0, lat: -20, rx: 20, ry: 8.5, level: 1, alpha: 0.9 });
      blob(ctx, box, { lon: 0, lat: -20, rx: 16, ry: 6.4, level: 0.3, alpha: 0.95 });
      blob(ctx, box, { lon: 0, lat: -20, rx: 8, ry: 3, level: 0.5, alpha: 0.6 });

      soften(ctx, 2);
    }),

  glsl: /* glsl */ `
/** Во сколько раз струя на этой широте быстрее полярной */
float jupiterJet(float latDeg){
  float a = abs(latDeg);
  if (a > 62.0) return 1.0;
  if (a > 24.0) return 2.0;
  if (a > 8.0)  return 3.0;
  return 4.0;
}

float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.54;
  float v = 0.0;
  float lon, lat;
  vec3 n;

  // Диск сплюснут: у Юпитера это видно невооружённым глазом
  if (sphereAt(vec2(q.x, q.y / 0.935), R, lon, lat, n)){
    float latDeg = lat * 180.0 / PI;
    float albedo = contrast(mapAt(lon + uTime * 0.09 * jupiterJet(latDeg), lat), 1.3, 0.68);
    v = clamp(albedo * lit(n, 0.14), 0.0, 1.0);
  }

  // Ио, Европа, Ганимед, Каллисто — резонанс 8:4:2 виден за полминуты
  for (int i = 0; i < 4; i++){
    float fi = float(i);
    float orbit = uScale * (0.68 + fi * 0.1);
    float a = 0.2 + fi * 1.9 + uTime * 0.72 / pow(2.0, fi);
    vec2 moon = vec2(cos(a) * orbit, sin(a) * orbit * 0.26);
    if (sin(a) > 0.0 && length(vec2(moon.x, moon.y / 0.935)) < R) continue;
    v = max(v, dot2(q, moon, 1.0 + fi * 0.1) * 0.9);
  }

  return v;
}
`,
};
