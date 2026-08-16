import type { Shape } from "./common";

/**
 * Семейство заголовочного шрифта для Canvas2D.
 *
 * next/font подставляет сгенерированное имя вида `__Unbounded_a1b2c3`, поэтому
 * задать шрифт литералом («Unbounded») нельзя — canvas молча возьмёт фолбэк.
 * Настоящее имя лежит в CSS-переменной, которую ставит layout.
 */
function displayFamily(): string {
  const name = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-display")
    .trim();
  return name ? `${name}, "Arial Black", sans-serif` : '"Arial Black", sans-serif';
}

/**
 * Кадр «Связь»: знак Z\M, по которому проходит тёмная волна.
 * Глиф запекается шрифтом, волна и пульсация — в шейдере.
 */
export const mark: Shape = {
  id: "mark",

  bake({ ctx, width, height, centerX, centerY }) {
    const size = Math.round(height * 0.62);
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `800 ${size}px ${displayFamily()}`;
    ctx.fillText("Z\\M", centerX, centerY + size * 0.03);
    ctx.restore();
    void width;
  },

  glsl: /* glsl */ `
float field(vec2 p){
  float v = bakedTransformed(p, 0.0, 1.0 + sin(uTime * 0.5) * 0.012);

  // Волна идёт слева направо и гасит знак под собой
  if (uSettle > 0.05){
    float sweep = (mod(uTime * 0.22, 1.7) - 0.35) * uGrid.x;
    float reach = uGrid.x * 0.17;
    float falloff = 1.0 - clamp(abs(p.x - sweep) / reach, 0.0, 1.0);
    v *= 1.0 - falloff * 0.7 * uSettle;
  }

  return v;
}
`,
};
