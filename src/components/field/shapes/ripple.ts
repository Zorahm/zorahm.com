import type { Shape } from "./common";

/**
 * Кадр «Влияние»: волны, расходящиеся кругами от центра.
 * Перенос функции calc() из исходника без изменений.
 */
export const ripple: Shape = {
  id: "ripple",
  glsl: /* glsl */ `
float field(vec2 node){
  float sp = 0.1 + 0.16 * uSettle;
  float d = length((node - uCenter) / uScale);

  float v = exp(-d * d / 0.006) * (0.75 + 0.25 * sin(uTime * 3.0) * uSettle);

  for (int k = 0; k < 4; k++){
    float ph = mod(uTime * sp + float(k) * 0.25, 1.0);
    float r = ph * 1.85;
    float e = d - r;
    v = max(v, exp(-e * e / 0.0035) * (1.0 - ph) * 0.95);
  }

  // Дальнее кольцо, к которому волны уходят
  v += exp(-abs(d - 1.7) * 6.0) * 0.12;
  return v;
}
`,
};
