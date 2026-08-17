import { displayFamily, type Shape } from "./common";

/**
 * Кадр «Связь»: знак Z\M, по которому проходит тёмная волна.
 * Глиф запекается шрифтом, волна и пульсация — в шейдере.
 */
export const mark: Shape = {
  id: "mark",

  bake({ ctx, width, height, centerX, centerY }) {
    const family = displayFamily();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Знак широкий: кегль берётся от высоты, но ужимается по реальной ширине
    // строки, иначе на телефоне и на низком окне ПК он вылезает за края
    let size = Math.round(height * 0.52);
    ctx.font = `800 ${size}px ${family}`;
    const measured = ctx.measureText("Z\\M").width;
    const limit = width * 0.9;
    if (measured > limit) {
      size = Math.floor((size * limit) / measured);
      ctx.font = `800 ${size}px ${family}`;
    }

    ctx.fillText("Z\\M", centerX, centerY + size * 0.03);
    ctx.restore();
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
