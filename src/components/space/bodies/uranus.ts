import { drawEquirect, fillBase, soften, wavyBand } from "../maps";
import type { SpaceBody } from "./common";

/**
 * Уран — кольца стоймя.
 *
 * Ось наклонена на 98°, поэтому кольца видны почти вертикальным эллипсом.
 * В отличие от Сатурна они не печены, а считаются прямо в шейдере: так
 * ближняя половина честно ложится поверх диска, а дальняя уходит за него,
 * без второго прохода запекания.
 *
 * Сам диск почти без деталей — у Урана их и правда почти нет.
 */
export const uranus: SpaceBody = {
  id: "uranus",
  fit: 1.3,

  buildMap: () =>
    drawEquirect(256, (ctx, box) => {
      fillBase(ctx, box, 0.92);
      // Полосы едва проступают: контраст на пределе различимости
      for (let i = 0; i < 5; i++) {
        const lat = -75 + i * 36;
        wavyBand(ctx, box, {
          lat0: lat,
          lat1: lat + 18,
          level: 0.74,
          alpha: 0.5,
          waves: 2,
          amp: 4,
          phase: i,
        });
      }
      soften(ctx, 5);
    }),

  glsl: /* glsl */ `
/** Кольца почти вертикальны, но не идеально — так читается объём */
const float URANUS_TILT = -1.42;
/** Раскрытие эллипса колец: при малом они ложатся на диск и всё слипается */
const float URANUS_OPENING = 0.58;

/** Из тринадцати колец различимо одно — узкое и яркое эпсилон */
float uranusRings(vec2 rq, float rp){
  float v = stroke(ellipseEdge(rq, vec2(rp * 2.4, rp * 2.4 * URANUS_OPENING)), rp * 0.06);
  v = max(v, stroke(ellipseEdge(rq, vec2(rp * 2.15, rp * 2.15 * URANUS_OPENING)), rp * 0.05) * 0.45);
  v = max(v, stroke(ellipseEdge(rq, vec2(rp * 1.95, rp * 1.95 * URANUS_OPENING)), rp * 0.045) * 0.3);
  return v;
}

float field(vec2 p){
  vec2 q = p - uCenter;
  float R = uScale * 0.36;

  vec2 rq = rot(q, -URANUS_TILT);
  float rings = uranusRings(rq, R);
  bool near = rq.y < 0.0;

  float v;
  float lon, lat;
  vec3 n;

  if (sphereAt(q, R, lon, lat, n)){
    float albedo = contrast(mapAt(lon + uTime * 0.16, lat), 1.25, 0.85);
    v = clamp(albedo * lit(n, 0.28), 0.0, 1.0);
    // Поверх диска ложится только ближняя половина колец
    if (near) v = max(v, rings);
  } else {
    v = rings;
  }

  // Спутники ходят в плоскости колец, дальше внешнего кольца
  for (int i = 0; i < 3; i++){
    float fi = float(i);
    float orbit = R * 2.65;
    float a = 0.7 + fi * 2.2 + uTime * (i == 0 ? 0.24 : 0.14);
    vec2 moon = vec2(cos(a) * orbit, sin(a) * orbit * URANUS_OPENING);
    if (sin(a) > 0.0 && length(moon) < R) continue;
    v = max(v, dot2(rq, moon, 0.9 - fi * 0.08) * 0.85);
  }

  return v;
}
`,
};
