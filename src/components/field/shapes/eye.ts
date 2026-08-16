import type { Shape } from "./common";

/**
 * Кадр «Взгляд».
 *
 * В исходнике форма глаза складывалась из двух квадратичных кривых Безье.
 * Здесь это vesica piscis — пересечение двух окружностей, у которого есть
 * готовая SDF. Форма выходит той же, а кода меньше.
 *
 * Вывод радиуса. Кривая Безье с концами (±w, 0) и контрольной точкой
 * (0, ∓1.9h) в середине даёт вершину на 0.95h, то есть полувысота b = 0.95h,
 * полуширина a = w. Для vesica из окружностей радиуса R со смещением центров
 * на ±c: a² = R² − c² и b = R − c, откуда R = (a² + b²) / 2b, c = R − b.
 */
export const eye: Shape = {
  id: "eye",
  glsl: /* glsl */ `
float field(vec2 p){
  vec2 q = p - uCenter;

  float a = uScale * 1.15;
  float b = uScale * 0.6 * 0.95;
  float R = (a * a + b * b) / (2.0 * b);
  float c = R - b;

  float d = max(length(q - vec2(0.0,  c)) - R,
                length(q - vec2(0.0, -c)) - R);

  float v = d < 0.0 ? 0.32 : 0.0;

  // Взгляд следует за курсором. Исходник при отсутствии мыши подставлял
  // -9999 и после clamp получал -1, из-за чего глаз косил влево-вверх,
  // вместо того чтобы смотреть прямо.
  vec2 gaze = vec2(0.0);
  if (uPointer.x > -9000.0){
    vec2 rel = clamp((uPointer - uCenter) / uScale, vec2(-1.0), vec2(1.0));
    gaze = vec2(rel.x * uScale * 0.16, rel.y * uScale * 0.09);
  }

  if (d < 0.0){
    float ir = uScale * 0.36;
    vec2 ip = q - gaze;
    float il = length(ip);

    if (il < ir){
      // Радужка: от белого в центре к тёмному краю
      v = max(v, mix(1.0, 0.25, smoothstep(0.0, 1.0, il / ir)));

      // 26 радиальных штрихов
      if (il > ir * 0.35 && il < ir * 0.95){
        float ang = atan(ip.y, ip.x) + uTime * 0.08;
        float spoke = abs(fract(ang / (2.0 * PI) * 26.0) - 0.5) * 2.0;
        v *= mix(0.5, 1.0, smoothstep(0.0, 0.35, spoke));
      }

      float pr = ir * (0.36 + sin(uTime * 0.7) * 0.05);
      if (il < pr) v = 0.0;
      v = max(v, dot2(ip, vec2(-pr * 0.5, -pr * 0.55), pr * 0.32));
    }
  }

  // Контур века поверх всего
  return max(v, stroke(abs(d), 1.4));
}
`,
};
