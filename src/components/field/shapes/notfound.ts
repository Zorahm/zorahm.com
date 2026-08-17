import { displayFamily, type Shape } from "./common";

/**
 * Кадр «404»: число запекается тем же шрифтом, что и знак Z\M, а поверх идёт
 * помеха — строки развёртки съезжают, снизу вверх ползёт полоса шума.
 *
 * uSettle здесь не используется: на служебной странице позиция сцены стоит на
 * целом кадре, где settle всегда нулевой, и фигура, завязанная на него,
 * замерла бы навсегда.
 */
export const notfound: Shape = {
  id: "notfound",

  bake({ ctx, width, height, centerX, centerY }) {
    const family = displayFamily();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Три широкие цифры не влезают по ширине даже на десктопе, поэтому кегль
    // берётся от высоты, но ужимается по реальной ширине строки
    let size = Math.round(height * 0.42);
    ctx.font = `800 ${size}px ${family}`;
    const measured = ctx.measureText("404").width;
    const limit = width * 0.8;
    if (measured > limit) {
      size = Math.floor((size * limit) / measured);
      ctx.font = `800 ${size}px ${family}`;
    }

    // Верхняя четверть экрана: нижнюю занимает текст страницы, и цифры не
    // должны прятаться за ним целиком
    ctx.fillText("404", centerX, centerY - height * 0.24);
    ctx.restore();
  },

  glsl: /* glsl */ `
float field(vec2 p){
  // Раз в 0.4 секунды несколько строк съезжают по горизонтали
  float band = floor(p.y / 3.0);
  float frame = floor(uTime * 2.5);
  float torn = step(0.9, hash(band, frame, 3.0));
  float shift = torn * (hash(band, frame, 8.0) - 0.5) * uScale * 0.55;

  float v = bakedTransformed(p + vec2(shift, 0.0), 0.0, 1.0 + sin(uTime * 0.6) * 0.012);

  // Полоса поиска идёт снизу вверх: подсвечивает цифры и сыплет шумом
  float sweep = (mod(uTime * 0.3, 1.7) - 0.35) * uGrid.y;
  float near = 1.0 - clamp(abs(p.y - sweep) / (uGrid.y * 0.09), 0.0, 1.0);
  v = v * (1.0 + near * 0.7) + near * near * hash(p.x, p.y, floor(uTime * 12.0)) * 0.16;

  return v;
}
`,
};
