import type { Shape } from "./common";

/** Наклон орбит друг относительно друга, радианы */
const TILT = 0.62;

/**
 * Фигура страницы /spirit: два пути, сошедшиеся в одной точке.
 *
 * Вторая орбита — зеркало первой по горизонтали, поэтому пересекаются они
 * ровно на горизонтальной оси. Из этого же следует и вся анимация: точке,
 * идущей по первой орбите, достаточно попасть на ось, чтобы встретиться со
 * своим отражением, — момент встречи не нужно ни считать, ни подгонять
 * фазами.
 *
 * Ось выбрана горизонтальной не из красоты: записка лежит узкой колонкой по
 * центру, и узлы на вертикальной оси уходили бы прямо под текст.
 *
 * Ничего заимствованного здесь нет: ни знаков, ни эмблем, ни кубков. Только
 * те же точки, из которых собран весь сайт.
 */
export const spirit: Shape = {
  id: "spirit",

  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;

  float a = uScale * 0.95;
  float b = uScale * 0.42;
  float st = sin(${TILT.toFixed(2)}), ct = cos(${TILT.toFixed(2)});

  // Координаты узла в системе каждой из орбит: вторая — та же, но отражённая
  vec2 la = vec2(q.x * ct + q.y * st, -q.x * st + q.y * ct);
  vec2 lb = vec2(q.x * ct - q.y * st, -q.x * st - q.y * ct);

  float v = stroke(ellipseEdge(la, vec2(a, b)), 0.95) * 0.42;
  v = max(v, stroke(ellipseEdge(lb, vec2(a, b)), 0.95) * 0.42);

  // Узлы пересечения лежат на оси: подставляем q.y = 0 в уравнение эллипса.
  // Множитель с потолком в единице делает не одну яркую точку, а пятно из
  // нескольких: только так узел попадает в золото, а не остаётся белым.
  float x0 = 1.0 / sqrt((ct * ct) / (a * a) + (st * st) / (b * b));
  // Дышит размер, а не яркость: узел должен оставаться золотым всегда, а
  // порог золота стоит на яркости
  float pulse = 2.3 + 0.4 * sin(uTime * 1.1);
  v = max(v, min(1.0, dot2(q, vec2( x0, 0.0), pulse) * 1.7));
  v = max(v, min(1.0, dot2(q, vec2(-x0, 0.0), pulse) * 1.7));

  float speed = 0.26 + 0.1 * uSettle;
  float alpha = uTime * speed;

  // Бегунок первой орбиты и его отражение — второй
  vec2 loc = vec2(cos(alpha) * a, sin(alpha) * b);
  vec2 run = vec2(loc.x * ct - loc.y * st, loc.x * st + loc.y * ct);
  vec2 mir = vec2(run.x, -run.y);

  // Хвосты: те же точки чуть раньше по фазе
  for (int i = 1; i <= 5; i++){
    float back = alpha - float(i) * 0.075;
    vec2 l = vec2(cos(back) * a, sin(back) * b);
    vec2 r = vec2(l.x * ct - l.y * st, l.x * st + l.y * ct);
    float fade = (1.0 - float(i) / 6.0) * 0.55;
    v = max(v, dot2(q, r, 0.8) * fade);
    v = max(v, dot2(q, vec2(r.x, -r.y), 0.8) * fade);
  }

  v = max(v, min(1.0, dot2(q, run, 2.0) * 1.5));
  v = max(v, min(1.0, dot2(q, mir, 2.0) * 1.5));

  // Встреча: чем ближе бегунок к оси, тем ярче узел, в котором они сходятся
  float meet = 1.0 - smoothstep(0.0, uScale * 0.17, abs(run.y));
  v = max(v, min(1.0, dot2(q, vec2(run.x, 0.0), 1.2 + 5.5 * meet) * 1.35) * meet);

  // Пыль по обеим орбитам: без неё линии выглядят чертежом, а не сценой
  for (int i = 0; i < 46; i++){
    float sd = hash(float(i), 4.0, 1.0);
    float ph = hash(float(i), 7.0, 2.0) * 6.283 + uTime * speed * (0.5 + sd * 0.6);
    vec2 l = vec2(cos(ph) * a, sin(ph) * b);
    vec2 r = vec2(l.x * ct - l.y * st, l.x * st + l.y * ct);
    vec2 pos = sd > 0.5 ? r : vec2(r.x, -r.y);
    v = max(v, dot2(q, pos, 0.45 + sd * 0.5) * (0.22 + sd * 0.4));
  }

  return v;
}
`,
};
