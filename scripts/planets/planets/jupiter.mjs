/**
 * Юпитер — пояса, Красное пятно и четыре галилеевых спутника.
 *
 * Пояса вращаются с разной скоростью: экваториальная струя делает четыре
 * оборота за петлю, полярные зоны — один. Технически это значит, что карта
 * сэмплится с разным сдвигом долготы в зависимости от широты, а число
 * оборотов у каждой струи целое — иначе петля бы не сошлась. Разрыв на
 * границах зон не артефакт: у настоящего Юпитера пояса так и срезаются
 * друг об друга.
 *
 * Спутники расставлены по резонансу Лапласа 8:4:2 — Ио, Европа и Ганимед
 * возвращаются в исходную расстановку ровно к концу петли.
 */

import { createEquirectMap } from "../core/textures.mjs";
import { blob, fillBase, soften, wavyBand } from "../core/maps.mjs";
import { clamp, contrast, dot2, lambert, rng, sphereUV, TAU } from "../core/math.mjs";

/** Струи: до какой широты действует зона и сколько оборотов делает за петлю */
const JETS = [
  { min: 62, turns: 1, level: 0.6 },
  { min: 40, turns: 2, level: 0.88 },
  { min: 24, turns: 2, level: 0.54 },
  { min: 8, turns: 3, level: 0.92 },
  { min: -8, turns: 4, level: 0.72 },
  { min: -24, turns: 3, level: 0.9 },
  { min: -40, turns: 2, level: 0.5 },
  { min: -62, turns: 2, level: 0.86 },
  { min: -91, turns: 1, level: 0.58 },
];

const turnsAt = (latDeg) => JETS.find((j) => latDeg >= j.min).turns;

/** Ио, Европа, Ганимед, Каллисто */
const MOONS = [
  { orbit: 0.68, turns: 8, phase: 0.2, radius: 1 },
  { orbit: 0.78, turns: 4, phase: 2.1, radius: 1.1 },
  { orbit: 0.88, turns: 2, phase: 4.0, radius: 1.3 },
  { orbit: 0.98, turns: 1, phase: 5.6, radius: 1.2 },
];

export default {
  id: "jupiter",
  title: "Юпитер",
  accent: 0.18,

  create(geom) {
    const R = geom.scale * 0.54;

    const map = createEquirectMap(768, 384, (ctx, box) => {
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
          const lat = jet.min + random() * (top - jet.min);
          blob(ctx, box, {
            lon: random() * 360 - 180,
            lat,
            rx: 4 + random() * 12,
            ry: 1 + random() * 2.2,
            level: jet.level + (random() < 0.5 ? -0.22 : 0.22),
            alpha: 0.45,
            spin: (random() - 0.5) * 0.25,
          });
        }
      });

      // Белые овалы в южном полушарии
      for (const [lon, lat] of [[-120, -34], [-60, -33], [60, -35], [150, -33]]) {
        blob(ctx, box, { lon, lat, rx: 7, ry: 3, level: 1, alpha: 0.85 });
      }

      // Большое красное пятно: тёмное ядро в светлом ободе
      blob(ctx, box, { lon: 0, lat: -20, rx: 20, ry: 8.5, level: 1, alpha: 0.9 });
      blob(ctx, box, { lon: 0, lat: -20, rx: 16, ry: 6.4, level: 0.3, alpha: 0.95 });
      blob(ctx, box, { lon: 0, lat: -20, rx: 8, ry: 3, level: 0.5, alpha: 0.6 });

      soften(ctx, box, 2);
    });

    const field = (nx, ny, t) => {
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      let v = 0;

      // Диск сплюснут: у Юпитера это видно невооружённым глазом
      const uv = sphereUV(qx, qy / 0.935, R);
      if (uv) {
        const latDeg = (uv.lat * 180) / Math.PI;
        const albedo = contrast(map(uv.lon + TAU * turnsAt(latDeg) * t, uv.lat), 1.3, 0.68);
        v = clamp(albedo * lambert(uv, 0.14), 0, 1);
      }

      for (const m of MOONS) {
        const a = m.phase + TAU * m.turns * t;
        const mx = Math.cos(a) * geom.scale * m.orbit;
        const my = Math.sin(a) * geom.scale * m.orbit * 0.26;
        // Спутник за диском не виден
        if (Math.sin(a) > 0 && Math.hypot(mx, my / 0.935) < R) continue;
        v = Math.max(v, dot2(qx, qy, mx, my, m.radius) * 0.9);
      }

      return v;
    };

    return { field };
  },
};
