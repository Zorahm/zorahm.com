import { blob, drawEquirect, fillBase, rng, soften, wavyBand } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Нептун — самые быстрые ветры системы.
 *
 * Экваториальная струя идёт против вращения планеты, средние широты — по
 * вращению, и на границе зон полосы разъезжаются в разные стороны. Приём тот
 * же, что у Юпитера, но знак у экватора отрицательный: так дует настоящий
 * Нептун.
 *
 * Тритон обращается ретроградно и по наклонённой орбите — единственный
 * крупный спутник системы, который летит против вращения своей планеты.
 */
export const neptune: SpaceBody = {
  id: "neptune",
  fit: 1.3,

  buildMap: () =>
    drawEquirect(384, (ctx, box) => {
      const random = rng(0x4e45);
      fillBase(ctx, box, 0.58);

      // Широтные пояса
      for (let i = 0; i < 6; i++) {
        const lat = -84 + i * 28;
        wavyBand(ctx, box, {
          lat0: lat,
          lat1: lat + 15,
          level: i % 2 ? 0.34 : 0.8,
          alpha: 0.7,
          waves: 2,
          amp: 5,
          phase: i * 1.1,
        });
      }

      // Перистые струи вдоль средних широт
      for (let i = 0; i < 26; i++) {
        const lat = (random() < 0.5 ? 1 : -1) * (28 + random() * 26);
        blob(ctx, box, {
          lon: random() * 360 - 180,
          lat,
          rx: 10 + random() * 18,
          ry: 1.6 + random() * 2.2,
          level: 1,
          alpha: 0.5 + random() * 0.3,
        });
      }

      // Большое тёмное пятно и белые облака у его края
      blob(ctx, box, { lon: -35, lat: -22, rx: 30, ry: 13, level: 0.05, alpha: 0.95 });
      blob(ctx, box, { lon: -62, lat: -13, rx: 12, ry: 5, level: 1, alpha: 0.9 });
      blob(ctx, box, { lon: -12, lat: -30, rx: 9, ry: 4, level: 1, alpha: 0.7 });

      soften(ctx, 3);
    }),

  glsl: /* glsl */ `
/** Знак и скорость струи: экватор идёт против вращения планеты */
float neptuneJet(float latDeg){
  float a = abs(latDeg);
  if (a > 58.0) return 2.0;
  if (a > 26.0) return 3.0;
  return -4.0;
}

float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.5;
  float v = 0.0;
  float lon, lat;
  vec3 n;

  if (sphereAt(q, R, lon, lat, n)){
    float latDeg = lat * 180.0 / PI;
    float albedo = contrast(mapAt(lon + uTime * 0.07 * neptuneJet(latDeg), lat), 1.3, 0.55);
    v = clamp(albedo * lit(n, 0.13), 0.0, 1.0);
  }

  // Тритон: ретроградная орбита, заметно наклонённая к экватору
  float orbit = uScale * 0.92;
  float a = 1.2 - uTime * 0.12;
  vec2 triton = rot(vec2(cos(a) * orbit, sin(a) * orbit * 0.38), 0.55);
  if (!(sin(a) > 0.0 && length(triton) < R)){
    v = max(v, dot2(q, triton, 1.25) * 0.9);
  }

  return v;
}
`,
};
