import { blob, crater, drawEquirect, fillBase, rng, soften } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Меркурий — голый камень.
 *
 * Атмосферы нет, поэтому терминатор жёсткий: свет уведён вбок, ambient почти
 * нулевой, и ночная сторона проваливается ниже порога, при котором точка
 * вообще рисуется. Планета выходит не кругом, а неполной фазой.
 *
 * Кратеры нарочно крупные: на диске в три десятка узлов поперёк один узел
 * стоит шести градусов широты, и всё, что мельче десяти, размывается в серое.
 */
export const mercury: SpaceBody = {
  id: "mercury",
  fit: 1.3,

  buildMap: () =>
    drawEquirect(384, (ctx, box) => {
      const random = rng(0x4d45);
      fillBase(ctx, box, 0.66);

      // Залитые лавой равнины
      for (let i = 0; i < 9; i++) {
        blob(ctx, box, {
          lon: random() * 360 - 180,
          lat: random() * 130 - 65,
          rx: 22 + random() * 30,
          ry: 14 + random() * 18,
          level: 0.42,
          alpha: 0.8,
          spin: random() * Math.PI,
        });
      }

      // Равнина Жары — единственная деталь, которую стоит узнавать
      blob(ctx, box, { lon: -160, lat: 30, rx: 42, ry: 28, level: 0.5, alpha: 0.9 });

      for (let i = 0; i < 34; i++) {
        crater(ctx, box, {
          lon: random() * 360 - 180,
          lat: random() * 150 - 75,
          radius: 4 + random() * random() * 12,
          floor: 0.22 + random() * 0.16,
          rim: 0.95 + random() * 0.05,
          rays: random() < 0.15 ? 5 + Math.floor(random() * 4) : 0,
          random,
        });
      }

      soften(ctx, 2);
    }),

  glsl: /* glsl */ `
/** Свет сильно сбоку — ради жёсткого терминатора */
const vec3 MERCURY_SUN = vec3(-0.74, 0.26, 0.62);

float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.46;
  float lon, lat;
  vec3 n;
  if (!sphereAt(q, R, lon, lat, n)) return 0.0;

  float albedo = contrast(mapAt(lon + uTime * 0.1, lat), 1.5, 0.6);
  return clamp(albedo * lit(n, 0.04, MERCURY_SUN), 0.0, 1.0);
}
`,
};
