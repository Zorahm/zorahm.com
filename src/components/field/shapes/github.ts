import type { Shape } from "./common";

/** Контур метки GitHub — octicons (MIT), viewBox 0 0 24 24 */
const GH_PATH =
  "M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943";

/**
 * Кадр «Код»: метка GitHub, вокруг неё по орбитам идут коммиты.
 * Контур запекается, пульсация масштаба и орбиты живут в шейдере.
 */
export const github: Shape = {
  id: "github",

  bake({ ctx, centerX, centerY, scale }) {
    const k = (scale * 1.55) / 24;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.scale(k, k);
    ctx.translate(-12, -12);
    ctx.fillStyle = "#fff";
    ctx.fill(new Path2D(GH_PATH));
    ctx.restore();
  },

  glsl: /* glsl */ `
float field(vec2 p){
  float v = bakedTransformed(p, 0.0, 1.0 + sin(uTime * 0.7) * 0.014 * uSettle);

  vec2 q = p - uCenter;
  float st = uSettle;

  for (int r = 0; r < 2; r++){
    float rr = uScale * (1.02 + float(r) * 0.17);
    float dir = r == 1 ? -1.0 : 1.0;
    int n = r == 1 ? 9 : 14;

    for (int i = 0; i < 14; i++){
      if (i >= n) break;
      float a = float(i) / float(n) * 6.283
              + uTime * dir * (0.06 + 0.16 * st)
              + float(r) * 0.4;
      float sd = hash(float(i), float(r), 6.0);
      vec2 pos = vec2(cos(a) * rr, sin(a) * rr * 0.94);
      v = max(v, dot2(q, pos, 0.6 + sd * 0.8) * (0.25 + sd * 0.6 * (0.3 + 0.7 * st)));
    }
  }

  return v;
}
`,
};
