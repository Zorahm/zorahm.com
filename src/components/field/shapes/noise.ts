import type { Shape } from "./common";

/**
 * Кадр «Данные»: шум с бегущей сверху вниз строкой чтения.
 * Перенос функции calc() из исходника без изменений.
 */
export const noise: Shape = {
  id: "noise",
  glsl: /* glsl */ `
float field(vec2 node){
  float x = node.x;
  float y = node.y;

  float fr = floor(uTime * 10.0);
  float scan = (mod(uTime * 0.28, 1.5) - 0.25) * uGrid.y;
  float sl = exp(-((y - scan) * (y - scan)) / 6.0) * uSettle;

  vec2 dd = (node - uCenter) / uScale;
  float d = length(vec2(dd.x, dd.y * 1.15));

  float v = 0.5 + 0.5 * sin(x * 0.34 + uTime * 1.1 + sin(y * 0.19 + uTime * 0.45) * 2.4);
  v *= 0.55 + 0.45 * sin(x * 1.07 + y * 0.05);
  v = v * 0.6 + hash(x, y, fr) * 0.4;
  v = v * (1.0 - sl * 0.55) + sl * (0.55 + hash(x, y, fr + 1.0) * 0.45);

  float falloff = 1.0 - smoothstep(0.0, 1.0, (d - 0.55) / 0.75);
  return clamp(v, 0.0, 1.0) * falloff * 0.85;
}
`,
};
