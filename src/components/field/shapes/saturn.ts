import type { Shape } from "./common";

/** Базовый наклон колец. Колебание вокруг него добавляет шейдер. */
const TILT = -0.34;

/**
 * Кадр «Сатурн».
 *
 * Планета с поясами и кольца запекаются один раз: градиенты и клиппинг
 * Canvas2D рисует в три строки, а в GLSL это была бы отдельная неделя.
 * Живое — обломки в кольцах и спутники — считается в шейдере.
 */
export const saturn: Shape = {
  id: "saturn",

  bake({ ctx, centerX, centerY, scale }) {
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
    ctx.translate(centerX, centerY);

    // Кольца целиком — задняя часть уйдёт под планету
    ctx.save();
    ctx.rotate(TILT);
    ring();
    ctx.restore();

    // Планета
    const gr = ctx.createRadialGradient(
      -rp * 0.3,
      -rp * 0.35,
      rp * 0.1,
      0,
      0,
      rp * 1.05,
    );
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
  },

  glsl: /* glsl */ `
float field(vec2 p){
  // Наклон колец колеблется на 0.03 рад — поворачиваем весь сэмпл.
  // Планета круглая, поворот её не меняет; пояса едут вместе с кольцами,
  // но на 1.7 градуса это неразличимо.
  float wobble = sin(uTime * 0.12) * 0.03;
  float v = bakedTransformed(p, -wobble, 1.0);

  float tilt = ${TILT.toFixed(2)} + wobble;
  float rp = uScale * 0.58;
  float spin = 0.35 + 0.65 * uSettle;

  // В систему координат колец
  vec2 q = p - uCenter;
  float s = sin(-tilt), c = cos(-tilt);
  vec2 rq = vec2(q.x * c - q.y * s, q.x * s + q.y * c);

  // Обломки в кольцах
  for (int i = 0; i < 80; i++){
    float sd = hash(float(i), 3.0, 1.0);
    float rr = rp * (1.28 + sd * 0.56);
    float sp = spin * 0.42 * pow(rp / rr, 1.5);
    float a = hash(float(i), 9.0, 2.0) * 6.283 + uTime * sp;
    vec2 pos = vec2(cos(a) * rr, sin(a) * rr * 0.245);

    // Задняя половина кольца прячется за диском планеты
    if (sin(a) < 0.0 && length(pos) < rp) continue;
    v = max(v, dot2(rq, pos, 0.5 + sd * 0.7) * (0.35 + sd * 0.65));
  }

  // Спутники на дальних орбитах
  for (int i = 0; i < 4; i++){
    float rr = rp * (2.05 + float(i) * 0.28);
    float a = float(i) * 1.9 + uTime * spin * 0.3 * pow(rp / rr, 1.5);
    vec2 pos = vec2(cos(a) * rr, sin(a) * rr * 0.245);
    v = max(v, dot2(rq, pos, 1.1));
  }

  return v;
}
`,
};
