import type { Shape } from "./common";

/**
 * Единица системы координат кота — доля высоты экрана, с потолком по ширине,
 * чтобы на узком экране кот не вылезал за края. Опорный масштаб сетки здесь не
 * годится: он берёт минимальную сторону, и на телефоне кот съёжился бы втрое.
 */
const UNIT_H = 0.23;
const UNIT_W = 0.36;
/** Где сидит центр кота, доля высоты сверху: под ним живёт текст страницы */
const CENTER_Y = 0.28;
/** Собственная середина силуэта чуть выше нуля координат — из-за ушей */
const OWN_Y = 0.05;

/**
 * Система координат кота: единица — UNIT_H высоты экрана, ось Y смотрит вниз,
 * как на холсте запекания. Ею пользуются и bake, и шейдер, поэтому силуэт,
 * глаза, усы и хвост не могут разъехаться.
 *
 * Перевод в узлы сетки не сводится к сдвигу: у текстуры включён flipY, из-за
 * чего низ холста лежит в нуле по Y, а не сверху. Отсюда вычитание из uGrid.y.
 */
const CAT_SPACE = /* glsl */ `
const float CENTER_Y = ${CENTER_Y.toFixed(3)};
const float OWN_Y = ${OWN_Y.toFixed(3)};

float catUnit(){
  return max(min(uGrid.y * ${UNIT_H.toFixed(3)}, uGrid.x * ${UNIT_W.toFixed(3)}), 1e-4);
}

vec2 catToNode(vec2 q){
  float unit = catUnit();
  return vec2(uGrid.x * 0.5 + q.x * unit,
              uGrid.y * (1.0 - CENTER_Y) - (q.y + OWN_Y) * unit);
}

vec2 nodeToCat(vec2 p){
  float unit = catUnit();
  return vec2((p.x - uGrid.x * 0.5) / unit,
              (uGrid.y * (1.0 - CENTER_Y) - p.y) / unit - OWN_Y);
}
`;

/**
 * Вайфик — кот экосистемы, пасхалка страницы 404.
 *
 * Запекается только силуэт: туловище, голова, уши. Всё, что должно шевелиться
 * — моргание, усы, хвост — рисуется в шейдере поверх, поэтому кот не замирает
 * на служебной странице, где uSettle всегда нулевой.
 */
export const waifik: Shape = {
  id: "waifik",

  bake({ ctx, width, height }) {
    const unit = Math.min(height * UNIT_H, width * UNIT_W);
    ctx.save();
    ctx.translate(width * 0.5, height * CENTER_Y);
    ctx.scale(unit, unit);
    ctx.translate(0, OWN_Y);

    ctx.fillStyle = "#fff";

    // Туловище: сидит, плечи уже бёдер, низ скруглён
    const body = new Path2D();
    body.moveTo(-0.20, -0.20);
    body.quadraticCurveTo(-0.52, 0.16, -0.46, 0.72);
    body.quadraticCurveTo(0, 0.92, 0.46, 0.72);
    body.quadraticCurveTo(0.52, 0.16, 0.20, -0.20);
    body.closePath();
    ctx.fill(body);

    // Уши — до головы, чтобы она перекрыла их основания
    const ears = new Path2D();
    ears.moveTo(-0.40, -0.58);
    ears.lineTo(-0.34, -1.02);
    ears.lineTo(-0.04, -0.64);
    ears.closePath();
    ears.moveTo(0.40, -0.58);
    ears.lineTo(0.34, -1.02);
    ears.lineTo(0.04, -0.64);
    ears.closePath();
    ctx.fill(ears);

    // Голова
    ctx.beginPath();
    ctx.ellipse(0, -0.46, 0.46, 0.40, 0, 0, Math.PI * 2);
    ctx.fill();

    // Чёрное на холсте — это ноль в поле, то есть дырка среди точек
    ctx.fillStyle = "#000";
    const innerEars = new Path2D();
    innerEars.moveTo(-0.35, -0.66);
    innerEars.lineTo(-0.31, -0.90);
    innerEars.lineTo(-0.16, -0.68);
    innerEars.closePath();
    innerEars.moveTo(0.35, -0.66);
    innerEars.lineTo(0.31, -0.90);
    innerEars.lineTo(0.16, -0.68);
    innerEars.closePath();
    ctx.fill(innerEars);

    ctx.restore();
  },

  glsl: /* glsl */ `
${CAT_SPACE}

float field(vec2 p){
  // Дыхание: силуэт целиком качается по вертикали
  vec2 q = nodeToCat(p) + vec2(0.0, sin(uTime * 1.6) * 0.014);
  vec2 pn = catToNode(q);
  // Та же точка, отражённая на правую половину: усы рисуются один раз
  vec2 pm = catToNode(vec2(abs(q.x), q.y));

  float v = baked(pn);

  // Глаза: дырки в силуэте, раз в пять секунд закрываются
  float t = fract(uTime * 0.2);
  float blink = 1.0 - 0.9 * exp(-t * t * 900.0);
  vec2 e = vec2(abs(q.x) - 0.19, q.y + 0.52);
  if (length(e / vec2(0.115, 0.140 * blink)) < 1.0) v = 0.0;

  // Нос
  if (length((q - vec2(0.0, -0.30)) / vec2(0.075, 0.055)) < 1.0) v = 0.0;

  // Усы: три с каждой стороны, веером от носа, кончики подрагивают.
  // Внутри силуэта они не видны — там точки и так горят на полную
  float twitch = sin(uTime * 1.1) * 0.03;
  float whisker = 1e9;
  for (int i = 0; i < 3; i++){
    float f = float(i) - 1.0;
    vec2 a = vec2(0.12, -0.30 + f * 0.02);
    vec2 b = vec2(0.72, -0.40 + f * 0.22 + twitch * (f + 1.6));
    whisker = min(whisker, segDist(pm, catToNode(a), catToNode(b)));
  }
  v = max(v, stroke(whisker, 1.0) * 0.7);

  // Хвост: квадратичная кривая, разбитая на отрезки, качается у кончика
  float sway = sin(uTime * 1.3) * 0.10;
  vec2 t0 = vec2(0.40, 0.72);
  vec2 t1 = vec2(1.06, 0.84 + sway);
  vec2 t2 = vec2(1.00, 0.00 + sway * 1.7);
  float tail = 1e9;
  vec2 prev = catToNode(t0);
  for (int i = 1; i <= 8; i++){
    float s = float(i) / 8.0;
    vec2 cur = catToNode(mix(mix(t0, t1, s), mix(t1, t2, s), s));
    tail = min(tail, segDist(pn, prev, cur));
    prev = cur;
  }
  v = max(v, stroke(tail, 2.6));

  return v;
}
`,
};
