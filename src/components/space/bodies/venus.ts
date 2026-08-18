import { blob, drawEquirect, fillBase, rng, soften, wavyBand } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Венера — сплошная облачная пелена.
 *
 * Облака идут в обратную сторону и заметно быстрее самой планеты — отсюда
 * минус в скорости вращения карты. Тёмная деталь в форме Y, видимая
 * в ультрафиолете, и есть след этой суперротации. Атмосфера плотная, поэтому
 * терминатор мягкий, а над лимбом висит светящийся ободок.
 */
export const venus: SpaceBody = {
  id: "venus",
  fit: 1.3,

  buildMap: () =>
    drawEquirect(384, (ctx, box) => {
      const random = rng(0x5645);
      fillBase(ctx, box, 0.95);

      // Широтные потоки: полос немного, зато каждая шире узла сетки
      for (let i = 0; i < 8; i++) {
        const lat = -85 + i * 21;
        wavyBand(ctx, box, {
          lat0: lat,
          lat1: lat + 11 + random() * 4,
          level: 0.5 + random() * 0.2,
          alpha: 0.55,
          waves: 2,
          amp: 4 + random() * 4,
          phase: random() * Math.PI * 2,
        });
      }

      // Та самая Y: две полосы, сходящиеся у экватора
      for (const sign of [1, -1]) {
        for (let i = 0; i < 8; i++) {
          blob(ctx, box, {
            lon: -30 + i * 12,
            lat: sign * (6 + i * 7),
            rx: 26,
            ry: 9,
            level: 0.42,
            alpha: 0.5,
            spin: sign * 0.55,
          });
        }
      }
      for (let i = 0; i < 6; i++) {
        blob(ctx, box, { lon: -60 - i * 13, lat: 0, rx: 20, ry: 9, level: 0.45, alpha: 0.45 });
      }

      // Полярные вихри
      for (const lat of [76, -76]) {
        blob(ctx, box, { lon: 0, lat, rx: 170, ry: 12, level: 0.6, alpha: 0.7 });
      }

      soften(ctx, 4);
    }),

  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.54;
  float lon, lat;
  vec3 n;

  if (!sphereAt(q, R, lon, lat, n)){
    // Свечение атмосферы на просвет
    return stroke(abs(length(q) - R * 1.04), 1.4) * 0.4;
  }

  float albedo = contrast(mapAt(lon - uTime * 0.22, lat), 1.35, 0.72);
  return clamp(albedo * lit(n, 0.3), 0.0, 1.0);
}
`,
};
