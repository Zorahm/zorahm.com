/**
 * Венера — сплошная облачная пелена.
 *
 * Две детали, ради которых кадр узнаётся: суперротация (облака обгоняют
 * планету и идут в обратную сторону — отсюда минус в TURNS) и тёмная
 * Y-образная деталь, видимая в ультрафиолете. Атмосфера плотная, поэтому
 * терминатор мягкий, а над лимбом висит светящийся ободок.
 */

import { createEquirectMap } from "../core/textures.mjs";
import { blob, fillBase, soften, wavyBand } from "../core/maps.mjs";
import { clamp, contrast, lambert, rng, sphereUV, stroke, TAU } from "../core/math.mjs";

/** Ретроградная суперротация: облака идут против вращения планеты */
const TURNS = -2;

export default {
  id: "venus",
  title: "Венера",
  accent: 0.22,

  create(geom) {
    const R = geom.scale * 0.54;

    const map = createEquirectMap(768, 384, (ctx, box) => {
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
          phase: random() * TAU,
        });
      }

      // Та самая Y: две тёмные полосы, сходящиеся у экватора
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

      soften(ctx, box, 4);
    });

    const field = (nx, ny, t) => {
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      const uv = sphereUV(qx, qy, R);

      if (!uv) {
        // Свечение атмосферы на просвет
        return stroke(Math.abs(Math.hypot(qx, qy) - R * 1.04), 1.4) * 0.4;
      }

      const albedo = contrast(map(uv.lon + TAU * TURNS * t, uv.lat), 1.35, 0.72);
      return clamp(albedo * lambert(uv, 0.3), 0, 1);
    };

    return { field };
  },
};
