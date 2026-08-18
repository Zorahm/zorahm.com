/**
 * Марс — тёмные области, шапки и две картофелины на орбитах.
 *
 * Карта собрана по настоящим альбедным деталям: Большой Сирт, Долины
 * Маринер, Эллада. Поверх лежит пылевая дымка — единственное место во всём
 * наборе, где яркость шумит от кадра к кадру. Шум берётся не от времени, а
 * от номера шага внутри петли, поэтому он тоже замыкается.
 */

import { createEquirectMap } from "../core/textures.mjs";
import { blob, fillBase, soften, wavyBand } from "../core/maps.mjs";
import { clamp, contrast, dot2, hash, lambert, rng, sphereUV, TAU } from "../core/math.mjs";

const TURNS = 1;
/** Фобос обгоняет вращение планеты — так и есть на самом деле */
const PHOBOS_TURNS = 4;
const DEIMOS_TURNS = 2;
/** Шагов пылевого мерцания за петлю */
const DUST_STEPS = 20;

export default {
  id: "mars",
  title: "Марс",
  accent: 0.15,

  create(geom) {
    const R = geom.scale * 0.46;

    const map = createEquirectMap(768, 384, (ctx, box) => {
      const random = rng(0x4d41);
      fillBase(ctx, box, 0.82);

      // Тёмные области
      const dark = [
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

      // Эллада — светлая котловина, и вулканы Фарсиды
      blob(ctx, box, { lon: 70, lat: -42, rx: 20, ry: 13, level: 0.96, alpha: 0.85 });
      for (const [lon, lat] of [[-134, 18], [-112, 12], [-120, 0], [-125, -10]]) {
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

      soften(ctx, box, 1.5);
    });

    const field = (nx, ny, t) => {
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      let v = 0;

      const uv = sphereUV(qx, qy, R);
      if (uv) {
        const albedo = contrast(map(uv.lon + TAU * TURNS * t, uv.lat), 1.4, 0.6);
        // Остаток от деления замыкает шум: шаг при t = 1 совпадает с шагом при t = 0
        const dust = 0.93 + 0.07 * hash(nx, ny, Math.floor(t * DUST_STEPS) % DUST_STEPS);
        v = clamp(albedo * lambert(uv, 0.09) * dust, 0, 1);
      }

      const moon = (turns, phase, orbit, radius) => {
        const a = phase + TAU * turns * t;
        const mx = Math.cos(a) * orbit;
        const my = Math.sin(a) * orbit * 0.3;
        if (Math.sin(a) > 0 && Math.hypot(mx, my) < R) return;
        v = Math.max(v, dot2(qx, qy, mx, my, radius) * 0.85);
      };

      moon(PHOBOS_TURNS, 0.4, geom.scale * 0.68, 1.1);
      moon(DEIMOS_TURNS, 3.4, geom.scale * 0.92, 0.9);

      return v;
    };

    return { field };
  },
};
