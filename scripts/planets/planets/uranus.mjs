/**
 * Уран — кольца стоймя.
 *
 * Ось наклонена на 98°, поэтому кольца видны почти вертикальным эллипсом:
 * приём тот же, что у Сатурна, только TILT почти прямой угол. Кольца
 * запекаются двумя слоями — целиком и только передняя половина, — чтобы
 * задняя честно уходила за диск, а передняя ложилась поверх.
 *
 * Кольца Урана узкие и тусклые, из десятка заметно одно — эпсилон.
 * Яркость им задаётся серым, а не прозрачностью: поле читает канал R, и
 * альфа на него не влияет — полупрозрачный штрих на пустом холсте пришёл бы
 * в поле как совершенно белый.
 *
 * Сам диск почти без деталей: у Урана их и правда почти нет.
 */

import { createBakeSurface, createEquirectMap } from "../core/textures.mjs";
import { fillBase, soften, wavyBand } from "../core/maps.mjs";
import { clamp, contrast, dot2, lambert, rotate, sphereUV, TAU } from "../core/math.mjs";

/** Кольца почти вертикальны, но не идеально — так читается объём */
const TILT = -1.42;
const TURNS = 1;
/** Радиус диска в долях опорного масштаба */
const DISC = 0.36;

/**
 * Сжатие эллипса колец. Чем оно больше, тем шире раскрыто кольцо: при
 * малом сжатии передние дуги ложатся на диск и всё слипается в пятно.
 */
const OPENING = 0.58;

/** Радиус, толщина и яркость колец в радиусах планеты */
const RINGS = [
  [2.4, 0.06, 1],
  [2.15, 0.05, 0.45],
  [1.95, 0.045, 0.3],
];

/** Спутники ходят в плоскости колец, дальше внешнего кольца */
const MOONS = [
  { orbit: 2.65, turns: 2, phase: 0.7, radius: 0.85 },
  { orbit: 2.65, turns: 1, phase: 3.9, radius: 0.9 },
  { orbit: 2.65, turns: 1, phase: 1.4, radius: 0.7 },
];

export default {
  id: "uranus",
  title: "Уран",
  accent: 0.12,

  create(geom) {
    const R = geom.scale * DISC;

    /** @param front рисовать только ближнюю половину колец */
    const drawRings = (front) => (ctx, box) => {
      const rp = box.scale * DISC;

      ctx.save();
      ctx.translate(box.centerX, box.centerY);
      ctx.rotate(TILT);

      if (front) {
        ctx.beginPath();
        ctx.rect(-box.scale * 2.6, 0, box.scale * 5.2, box.scale * 2.6);
        ctx.clip();
      }

      for (const [radius, width, level] of RINGS) {
        const c = Math.round(level * 255);
        ctx.strokeStyle = `rgb(${c},${c},${c})`;
        ctx.lineWidth = Math.max(1, rp * width);
        ctx.beginPath();
        ctx.ellipse(0, 0, rp * radius, rp * radius * OPENING, 0, 0, 7);
        ctx.stroke();
      }

      ctx.restore();
    };

    const ringsAll = createBakeSurface(geom, drawRings(false));
    const ringsFront = createBakeSurface(geom, drawRings(true));

    const map = createEquirectMap(512, 256, (ctx, box) => {
      fillBase(ctx, box, 0.92);
      // Полосы едва проступают — контраст на пределе различимости
      for (let i = 0; i < 5; i++) {
        const lat = -75 + i * 36;
        wavyBand(ctx, box, {
          lat0: lat,
          lat1: lat + 18,
          level: 0.74,
          alpha: 0.5,
          waves: 2,
          amp: 4,
          phase: i,
        });
      }
      soften(ctx, box, 5);
    });

    const field = (nx, ny, t) => {
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      let v;

      const uv = sphereUV(qx, qy, R);
      if (uv) {
        const albedo = contrast(map(uv.lon + TAU * TURNS * t, uv.lat), 1.25, 0.85);
        v = clamp(albedo * lambert(uv, 0.28), 0, 1);
        // Поверх диска — только ближняя половина колец
        v = Math.max(v, ringsFront.sample(nx, ny));
      } else {
        v = ringsAll.sample(nx, ny);
      }

      const [rqx, rqy] = rotate(qx, qy, -TILT);
      for (const m of MOONS) {
        const a = m.phase + TAU * m.turns * t;
        const mx = Math.cos(a) * R * m.orbit;
        const my = Math.sin(a) * R * m.orbit * OPENING;
        if (Math.sin(a) > 0 && Math.hypot(mx, my) < R) continue;
        v = Math.max(v, dot2(rqx, rqy, mx, my, m.radius) * 0.85);
      }

      return v;
    };

    return { field };
  },
};
