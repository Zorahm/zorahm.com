/**
 * Меркурий — голый камень.
 *
 * Атмосферы нет, поэтому терминатор жёсткий: свет уведён вбок, ambient почти
 * нулевой, и ночная сторона проваливается ниже порога видимости точки.
 * Планета выходит не кругом, а неполной фазой — как её и снимает «Мессенджер».
 *
 * Кратеры нарочно крупные. На диске около тридцати узлов поперёк один узел
 * стоит шести градусов широты, и всё, что мельче десяти, размывается в серое.
 */

import { createEquirectMap } from "../core/textures.mjs";
import { blob, crater, fillBase, soften } from "../core/maps.mjs";
import { clamp, contrast, lambert, light, rng, sphereUV, TAU } from "../core/math.mjs";

/** Оборотов поверхности за петлю */
const TURNS = 1;
/** Свет сильно сбоку — ради терминатора */
const SUN = light(-0.74, 0.26, 0.62);

export default {
  id: "mercury",
  title: "Меркурий",
  accent: 0.08,

  create(geom) {
    const R = geom.scale * 0.46;

    const map = createEquirectMap(768, 384, (ctx, box) => {
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

      // Равнина Жары: единственная деталь, которую стоит узнавать
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

      soften(ctx, box, 2);
    });

    const field = (nx, ny, t) => {
      const uv = sphereUV(nx - geom.centerX, ny - geom.centerY, R);
      if (!uv) return 0;
      const albedo = contrast(map(uv.lon + TAU * TURNS * t, uv.lat), 1.5, 0.6);
      return clamp(albedo * lambert(uv, 0.04, SUN), 0, 1);
    };

    return { field };
  },
};
