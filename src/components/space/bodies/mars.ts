import { blob, drawEquirect, fillBase, rng, soften, wavyBand } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Марс — тёмные области, шапки и две картофелины на орбитах.
 *
 * Карта собрана по настоящим альбедным деталям: Большой Сирт, Долины Маринер,
 * Эллада, вулканы Фарсиды. Поверх лежит пылевая дымка — единственное место
 * во всей сцене, где яркость шумит от кадра к кадру.
 */
export const mars: SpaceBody = {
  id: "mars",
  fit: 1.3,

  buildMap: () =>
    drawEquirect(384, (ctx, box) => {
      const random = rng(0x4d41);
      fillBase(ctx, box, 0.82);

      const dark: readonly [number, number, number, number, number][] = [
        [70, 8, 26, 16, 0.3],
        [-30, 45, 38, 18, 0.36],
        [-40, -24, 34, 17, 0.34],
        [110, -20, 28, 14, 0.36],
        [160, 20, 22, 12, 0.4],
        [-150, -35, 26, 14, 0.38],
      ];
      for (const [lon, lat, rx, ry, level] of dark) {
        blob(ctx, box, { lon, lat, rx, ry, level, alpha: 0.9 });
      }
      for (let i = 0; i < 22; i++) {
        blob(ctx, box, {
          lon: random() * 360 - 180,
          lat: random() * 120 - 60,
          rx: 5 + random() * 14,
          ry: 3 + random() * 7,
          level: 0.5 + random() * 0.14,
          alpha: 0.55,
          spin: random() * Math.PI,
        });
      }

      // Эллада — светлая котловина, и вулканы Фарсиды с кальдерами
      blob(ctx, box, { lon: 70, lat: -42, rx: 20, ry: 13, level: 0.96, alpha: 0.85 });
      for (const [lon, lat] of [
        [-134, 18],
        [-112, 12],
        [-120, 0],
        [-125, -10],
      ]) {
        blob(ctx, box, { lon, lat, rx: 6, ry: 5, level: 0.95, alpha: 0.8 });
        blob(ctx, box, { lon, lat, rx: 2, ry: 1.8, level: 0.4, alpha: 0.8 });
      }

      // Долины Маринер
      for (let i = 0; i < 12; i++) {
        blob(ctx, box, {
          lon: -95 + i * 6,
          lat: -8 - Math.sin(i * 0.6) * 2,
          rx: 5,
          ry: 1.6,
          level: 0.4,
          alpha: 0.75,
        });
      }

      // Полярные шапки
      wavyBand(ctx, box, { lat0: 90, lat1: 74, level: 1, waves: 6, amp: 3.5 });
      wavyBand(ctx, box, { lat0: -90, lat1: -78, level: 1, waves: 5, amp: 3, phase: 1.4 });

      soften(ctx, 1.5);
    }),

  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.46;
  float v = 0.0;
  float lon, lat;
  vec3 n;

  if (sphereAt(q, R, lon, lat, n)){
    float albedo = contrast(mapAt(lon + uTime * 0.2, lat), 1.4, 0.6);
    // Пыль в воздухе: шум сменяется восемь раз в секунду, а не каждый кадр
    float dust = 0.93 + 0.07 * hash(p.x, p.y, floor(uTime * 8.0));
    v = clamp(albedo * lit(n, 0.09) * dust, 0.0, 1.0);
  }

  // Фобос обгоняет вращение планеты, Деймос отстаёт
  for (int i = 0; i < 2; i++){
    float fi = float(i);
    float orbit = uScale * (0.68 + fi * 0.24);
    float a = 0.4 + fi * 3.0 + uTime * (i == 0 ? 0.55 : 0.22);
    vec2 moon = vec2(cos(a) * orbit, sin(a) * orbit * 0.3);
    if (sin(a) > 0.0 && length(moon) < R) continue;
    v = max(v, dot2(q, moon, 1.1 - fi * 0.2) * 0.85);
  }

  return v;
}
`,
};
