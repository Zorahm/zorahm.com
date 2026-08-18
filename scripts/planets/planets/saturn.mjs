/**
 * Сатурн — перенос кадра с zorahm.com как есть.
 *
 * bake() скопирован из src/components/field/shapes/saturn.ts построчно.
 * Динамика тоже та же, но скорости квантованы: на сайте обломок проходит
 * круг за 20–35 секунд, а GIF обязан сойтись через пять. Поэтому вместо
 * «столько-то радиан в секунду» каждому обломку выдаётся целое число
 * оборотов за петлю — внутренние два, внешние один. Дифференциальное
 * вращение колец сохраняется, шва в петле нет.
 */

import { createBakeSurface } from "../core/textures.mjs";
import { dot2, hash, rotate, TAU } from "../core/math.mjs";

/** Базовый наклон колец. Колебание вокруг него добавляет поле. */
const TILT = -0.34;

const DEBRIS = 80;
const MOONS = 4;

/**
 * Вся система ужимается в кадр одним множителем: на сайте внешний спутник
 * улетает на 1.68 масштаба, а здесь дальше 1.0 начинается край кадра.
 * Пропорции планеты, колец и орбит между собой остаются исходными.
 */
const SYSTEM = 0.585;

export default {
  id: "saturn",
  title: "Сатурн",
  /** Как у героя главной страницы */
  accent: 0.6,

  create(geom) {
    const surface = createBakeSurface(geom, (ctx, box) => {
      const scale = box.scale * SYSTEM;
      const rp = scale * 0.58;

      const ring = () => {
        ctx.strokeStyle = "rgba(255,255,255,.95)";
        ctx.lineWidth = Math.max(1, rp * 0.1);
        ctx.beginPath();
        ctx.ellipse(0, 0, rp * 1.72, rp * 0.42, 0, 0, 7);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255,255,255,.7)";
        ctx.lineWidth = Math.max(1, rp * 0.07);
        ctx.beginPath();
        ctx.ellipse(0, 0, rp * 1.42, rp * 0.35, 0, 0, 7);
        ctx.stroke();
      };

      ctx.save();
      ctx.translate(box.centerX, box.centerY);

      // Кольца целиком — задняя часть уйдёт под планету
      ctx.save();
      ctx.rotate(TILT);
      ring();
      ctx.restore();

      // Планета
      const gr = ctx.createRadialGradient(-rp * 0.3, -rp * 0.35, rp * 0.1, 0, 0, rp * 1.05);
      gr.addColorStop(0, "#ffffff");
      gr.addColorStop(0.55, "#c8c8c8");
      gr.addColorStop(1, "#5a5a5a");
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(0, 0, rp, 0, 7);
      ctx.fill();

      // Пояса, обрезанные диском планеты
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, rp, 0, 7);
      ctx.clip();
      for (let i = -3; i <= 3; i++) {
        const y = i * rp * 0.26;
        ctx.strokeStyle = i % 2 ? "rgba(0,0,0,.42)" : "rgba(255,255,255,.55)";
        ctx.lineWidth = rp * 0.09;
        ctx.beginPath();
        ctx.ellipse(0, y, rp * 1.1, rp * 0.11, 0, 0, 7);
        ctx.stroke();
      }
      ctx.restore();

      // Передняя часть колец — поверх планеты
      ctx.save();
      ctx.rotate(TILT);
      ctx.beginPath();
      ctx.rect(-scale * 2.6, 0, scale * 5.2, scale * 2.6);
      ctx.clip();
      ring();
      ctx.restore();

      ctx.restore();
    });

    const rp = geom.scale * SYSTEM * 0.58;

    // Обломки: радиус, фаза и число оборотов за петлю считаются один раз
    const debris = Array.from({ length: DEBRIS }, (_, i) => {
      const sd = hash(i, 3, 1);
      const rr = rp * (1.28 + sd * 0.56);
      return {
        rr,
        phase: hash(i, 9, 2) * 6.283,
        turns: Math.max(1, Math.round(2.4 * Math.pow(rp / rr, 1.5))),
        radius: 0.5 + sd * 0.7,
        weight: 0.35 + sd * 0.65,
      };
    });

    const moons = Array.from({ length: MOONS }, (_, i) => {
      const rr = rp * (2.05 + i * 0.28);
      return {
        rr,
        phase: i * 1.9,
        turns: Math.max(1, Math.round(3 * Math.pow(rp / rr, 1.5))),
      };
    });

    const field = (nx, ny, t) => {
      const wobble = Math.sin(TAU * t) * 0.03;
      let v = surface.sampleTransformed(nx, ny, -wobble, 1);

      const tilt = TILT + wobble;
      const qx = nx - geom.centerX;
      const qy = ny - geom.centerY;
      const [rqx, rqy] = rotate(qx, qy, -tilt);

      for (const d of debris) {
        const a = d.phase + TAU * d.turns * t;
        const px = Math.cos(a) * d.rr;
        const py = Math.sin(a) * d.rr * 0.245;
        // Половина кольца прячется за диском планеты
        if (Math.sin(a) < 0 && Math.hypot(px, py) < rp) continue;
        v = Math.max(v, dot2(rqx, rqy, px, py, d.radius) * d.weight);
      }

      for (const m of moons) {
        const a = m.phase + TAU * m.turns * t;
        v = Math.max(
          v,
          dot2(rqx, rqy, Math.cos(a) * m.rr, Math.sin(a) * m.rr * 0.245, 1.1),
        );
      }

      return v;
    };

    return { field };
  },
};
