import type { Shape } from "./common";

/**
 * Кадр «Мир»: глобус с меридианами, параллелями и спутниками на орбитах.
 */
export const globe: Shape = {
  id: "globe",
  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.66;
  float v = 0.0;

  // Заливка диска
  if (length(q) < R) v = 0.13;

  // Меридианы: эллипс схлопывается, когда уходит на ребро
  for (int k = 0; k < 7; k++){
    float ph = uTime * 0.22 + float(k) * PI / 7.0;
    float rx = cos(ph) * R;
    float front = rx > 0.0 ? 0.85 : 0.3;
    // Нижняя граница полуоси: иначе вырожденный эллипс даёт артефакт
    v = max(v, stroke(ellipseEdge(q, vec2(max(abs(rx), 0.5), R)), 0.9) * front);
  }

  // Параллели
  for (int i = -3; i <= 3; i++){
    float la = float(i) * 0.32;
    float r = cos(la) * R;
    float y = sin(la) * R * 0.92;
    v = max(v, stroke(ellipseEdge(q - vec2(0.0, y), vec2(r, r * 0.28)), 0.9) * 0.55);
  }

  // Контур
  v = max(v, stroke(abs(length(q) - R), 1.3));

  // Спутники появляются, когда глобус собрался
  float st = uSettle;
  for (int k = 0; k < 3; k++){
    float ang = -0.5 + float(k) * 0.85;
    float s = sin(ang), c = cos(ang);
    vec2 rp = vec2(q.x * c + q.y * s, -q.x * s + q.y * c);
    float rr = R * (1.22 + float(k) * 0.16);

    v = max(v, stroke(ellipseEdge(rp, vec2(rr, rr * 0.26)), 0.7) * 0.16 * st);

    float a = uTime * (0.55 + float(k) * 0.22) * (0.3 + 0.7 * st) + float(k) * 2.4;
    vec2 sat = vec2(cos(a) * rr, sin(a) * rr * 0.26);
    v = max(v, dot2(rp, sat, 1.3) * (0.35 + 0.65 * st));
  }

  return v;
}
`,
};
