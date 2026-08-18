import * as THREE from "three";

/**
 * Сетка точек: инстансы-квадраты, которые читают поле яркости из текстуры
 * и превращают её в halftone.
 *
 * Общее у ленты кадров и сцены /space: поля у них разные, а способ показать
 * поле точками — один и тот же. Сами объекты three каждая сцена собирает у
 * себя: eslint-правила react-hooks разбирают только тот код, который видят
 * целиком, и меш, приехавший из чужой функции, они считают чужой памятью.
 */

export const INK = new THREE.Color("#E8EDF4");
export const GOLD = new THREE.Color("#D9A441");

/** Радиус, в котором курсор расталкивает точки, и сила расталкивания */
const PUSH_RADIUS = 140;
const PUSH_FORCE = 34;

export const POINTS_VERTEX = /* glsl */ `
uniform sampler2D uFieldA;
uniform sampler2D uFieldB;
uniform vec2  uResolution;
uniform vec2  uOffset;
uniform float uStep;
uniform float uMaxRadius;
uniform float uBlend;
uniform float uIntro;
uniform float uAccent;
uniform float uTime;
uniform vec2  uPointer;
uniform float uPointerActive;
uniform float uReduce;
uniform float uExit;

in vec2 aNode;

out float vGold;
out vec2  vQuad;

float hash(float x, float y, float z){
  float n = sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - floor(n);
}

void main(){
  ivec2 texel = ivec2(aNode);
  float v = mix(
    texelFetch(uFieldA, texel, 0).r,
    texelFetch(uFieldB, texel, 0).r,
    uBlend
  );

  // Тусклые узлы схлопываются: фрагменты для них не порождаются вовсе.
  // В исходнике это был continue перед ctx.arc().
  if (v < 0.035){
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  v *= uIntro;

  vec2 px = uOffset + aNode * uStep;
  float r = uMaxRadius * pow(v, 0.8);

  if (uReduce < 0.5){
    px.x += sin(aNode.y * 0.28 + uTime * 0.6) * 0.7;
    px.y += cos(aNode.x * 0.24 + uTime * 0.5) * 0.7;

    if (uPointerActive > 0.5){
      vec2 d = px - uPointer;
      float dist = length(d);
      if (dist < ${PUSH_RADIUS.toFixed(1)}){
        float f = 1.0 - dist / ${PUSH_RADIUS.toFixed(1)};
        px += d / max(dist, 0.001) * f * f * ${PUSH_FORCE.toFixed(1)};
        r *= 1.0 + f * 0.75;
      }
    }
  }

  // Цвет решается здесь же — в исходнике золотые точки требовали
  // второго прохода с отдельным массивом
  vGold = (v > 0.93 && uAccent > 0.15 && hash(aNode.x, aNode.y, 7.0) < uAccent)
    ? 1.0 : 0.0;

  // Уход со сцены: точки разлетаются от центра экрана и растут. Так кадр
  // «ныряется» целиком, какой бы фигурой он ни был, — поле для этого трогать
  // не нужно, достаточно развести уже посчитанные узлы.
  if (uExit > 0.0){
    vec2 c = uResolution * 0.5;
    px = c + (px - c) * (1.0 + uExit * 2.2);
    r *= 1.0 + uExit * 1.4;
  }

  vQuad = position.xy * 2.0;

  vec2 corner = px + position.xy * 2.0 * r;
  // Ось Y не инвертируется: узел с aNode.y = 0 лежит внизу и в поле
  // (gl_FragCoord в render target растёт вверх), и на экране. Инверсия
  // здесь отражала бы всю картинку по вертикали и заодно выворачивала
  // порядок обхода вершин.
  gl_Position = vec4(corner / uResolution * 2.0 - 1.0, 0.0, 1.0);
}
`;

export const POINTS_FRAGMENT = /* glsl */ `
precision highp float;

uniform vec3 uInk;
uniform vec3 uGold;

in float vGold;
in vec2  vQuad;

out vec4 pc_fragColor;

void main(){
  float d = length(vQuad);
  // fwidth даёт сглаживание ровно в один пиксель на любом размере точки
  float w = max(fwidth(d), 0.001);
  float alpha = 1.0 - smoothstep(1.0 - w, 1.0 + w, d);
  if (alpha < 0.01) discard;
  pc_fragColor = vec4(mix(uInk, uGold, vGold), alpha);
}
`;
