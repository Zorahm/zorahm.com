import { blob, drawEquirect, fillBase, rng, soften } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Солнце — единственное тело, которое светит само.
 *
 * Поверхность собрана из гранул: настоящие конвективные ячейки размером
 * с материк на такой сетке слились бы в ровный серый, поэтому они крупнее
 * натуральных. Живое здесь снаружи диска — корона с ползущими лучами
 * и протуберанцы, дышащие на лимбе.
 */
export const sun: SpaceBody = {
  id: "sun",
  fit: 1.15,

  buildMap: () =>
    drawEquirect(360, (ctx, box) => {
      const random = rng(0x53554e);
      fillBase(ctx, box, 0.62);

      // Гранулы: светлая верхушка ячейки, тёмные провалы между ними
      for (let i = 0; i < 340; i++) {
        blob(ctx, box, {
          lon: random() * 360 - 180,
          lat: random() * 180 - 90,
          rx: 3.5 + random() * 3.5,
          ry: 2.6 + random() * 2.6,
          level: 0.88 + random() * 0.12,
          alpha: 0.55,
          spin: random() * Math.PI,
        });
      }
      soften(ctx, 2);

      // Факельные поля вдоль экватора — там, где всплывает поле
      for (let i = 0; i < 10; i++) {
        blob(ctx, box, {
          lon: random() * 360 - 180,
          lat: (random() - 0.5) * 60,
          rx: 16 + random() * 20,
          ry: 6 + random() * 8,
          level: 1,
          alpha: 0.4,
        });
      }

      // Пятна: холодное ядро в полутени
      for (let i = 0; i < 6; i++) {
        const lon = random() * 360 - 180;
        const lat = (random() - 0.5) * 70;
        const size = 7 + random() * 7;
        blob(ctx, box, { lon, lat, rx: size, ry: size * 0.72, level: 0.4, alpha: 0.92 });
        blob(ctx, box, {
          lon,
          lat,
          rx: size * 0.55,
          ry: size * 0.4,
          level: 0.08,
          alpha: 0.95,
        });
      }

      soften(ctx, 2.5);
    }),

  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.46;
  float lon, lat;
  vec3 n;

  if (sphereAt(q, R, lon, lat, n)){
    float g = mapAt(lon + uTime * 0.05, lat);
    // Потемнение к краю у Солнца сильное: видно даже в любительский телескоп
    float limb = 0.34 + 0.66 * pow(n.z, 0.55);
    return clamp(contrast(g, 1.3, 0.62) * limb, 0.0, 1.0);
  }

  float r = length(q);

  // Корона: спад наружу плюс медленно ползущие лучи
  float halo = exp(-(r - R) / (R * 0.5));
  float rays = 0.55 + 0.45 * sin(atan(q.y, q.x) * 13.0 + uTime * 0.22);
  float v = halo * 0.6 * rays;

  // Протуберанцы: петли, висящие на лимбе и дышащие вместе с полем
  for (int i = 0; i < 5; i++){
    float fi = float(i);
    float a = hash(fi, 5.0, 2.0) * 6.283 + uTime * 0.02;
    float size = R * (0.13 + hash(fi, 9.0, 3.0) * 0.17);
    float breathe = 0.7 + 0.3 * sin(uTime * 0.45 + fi * 2.1);
    float s = size * breathe;
    vec2 anchor = vec2(cos(a), sin(a)) * (R + s * 0.55);
    v = max(v, stroke(abs(length(q - anchor) - s), 1.0) * 0.7);
  }

  return v;
}
`,
};
