import type { Shape } from "./common";

/**
 * Кадр «Модель»: слои нейросети, по связям бегут сигналы.
 *
 * В исходнике это рисовалось линиями Canvas2D. Здесь каждая связь — SDF
 * отрезка: 21 узел, 98 связей, и всё это считается в разрешении сетки
 * (около 6000 пикселей), а не экрана.
 */
export const network: Shape = {
  id: "network",
  glsl: /* glsl */ `
// Слои исходника: [4, 7, 7, 3]
int layerSize(int l){
  if (l == 0) return 4;
  if (l == 3) return 3;
  return 7;
}

vec2 nodeAt(int l, int i){
  float n = float(layerSize(l));
  float gapX = uScale * 1.5 / 3.0;
  float x = uCenter.x - uScale * 0.75 + float(l) * gapX;
  float spread = uScale * 1.35 / max(n - 1.0, 1.0);
  float y = uCenter.y + (float(i) - (n - 1.0) * 0.5) * spread
          + sin(uTime * 0.6 + float(l) * 1.3 + float(i)) * uScale * 0.02;
  return vec2(x, y);
}

float field(vec2 p){
  float v = 0.0;
  float st = uSettle;

  for (int l = 0; l < 3; l++){
    int na = layerSize(l);
    int nb = layerSize(l + 1);

    for (int i = 0; i < 7; i++){
      if (i >= na) break;
      vec2 a = nodeAt(l, i);

      for (int j = 0; j < 7; j++){
        if (j >= nb) break;
        vec2 b = nodeAt(l + 1, j);

        float pulse = 0.5 + 0.5 * sin(uTime * 2.2 - float(l) * 1.4 - a.y * 0.06);
        v = max(v, stroke(segDist(p, a, b), 0.7) * (0.14 + pulse * 0.5));

        // Сигнал бежит только по части связей — как в исходнике
        float h = hash(float(l) * 13.0 + float(i), float(j), 5.0);
        if (st > 0.08 && h < 0.3){
          float u = mod(uTime * (0.5 + h) + h * 3.0, 1.0);
          vec2 sig = mix(a, b, u);
          v = max(v, dot2(p, sig, 1.15) * st * (1.0 - abs(u - 0.5) * 0.8));
        }
      }
    }
  }

  for (int l = 0; l < 4; l++){
    int n = layerSize(l);
    for (int i = 0; i < 7; i++){
      if (i >= n) break;
      float r = 2.6 * (1.0 + st * 0.28 * sin(uTime * 3.0 - float(l) * 1.4 + float(i)));
      v = max(v, dot2(p, nodeAt(l, i), r));
    }
  }

  return v;
}
`,
};
