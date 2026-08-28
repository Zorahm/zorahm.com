/**
 * Проходы после сцены: яркая часть кадра, размытие, сборка.
 *
 * Сцена считается в кадровый буфер с плавающей точкой и совершенно
 * спокойно выдаёт там яркости больше единицы — иначе Солнце было бы просто
 * белым кругом. Всё, что ярче порога, отбирается, размывается в два
 * масштаба и возвращается в кадр: так свет ведёт себя в оптике, а заодно
 * так на экране появляется ощущение, что светит именно звезда.
 */

export const VERT = /* glsl */ `
attribute vec2 aPos;
varying vec2 vUv;
void main(){
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

/** Отбор яркой части с попутным уменьшением вдвое */
export const FRAG_BRIGHT = /* glsl */ `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uTexel;
uniform float uThreshold;
void main(){
  vec3 c = texture2D(uTex, vUv + uTexel * vec2(-1.0,-1.0)).rgb
         + texture2D(uTex, vUv + uTexel * vec2( 1.0,-1.0)).rgb
         + texture2D(uTex, vUv + uTexel * vec2(-1.0, 1.0)).rgb
         + texture2D(uTex, vUv + uTexel * vec2( 1.0, 1.0)).rgb;
  c *= 0.25;
  float br = max(c.r, max(c.g, c.b));
  float k = 0.35;
  float soft = clamp(br - uThreshold + k, 0.0, 2.0 * k);
  soft = soft * soft / (4.0 * k + 1e-4);
  float w = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(c * w, 1.0);
}`;

/** Разделимое гауссово размытие: сначала по горизонтали, потом по вертикали */
export const FRAG_BLUR = /* glsl */ `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uDir;
void main(){
  vec3 s = texture2D(uTex, vUv).rgb * 0.227027;
  s += (texture2D(uTex, vUv + uDir * 1.3846).rgb +
        texture2D(uTex, vUv - uDir * 1.3846).rgb) * 0.316216;
  s += (texture2D(uTex, vUv + uDir * 3.2308).rgb +
        texture2D(uTex, vUv - uDir * 3.2308).rgb) * 0.070270;
  gl_FragColor = vec4(s, 1.0);
}`;

/** Сборка: свечение, экспозиция, тональная компрессия, виньетка, дизеринг */
export const FRAG_COMPOSITE = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D uScene;
uniform sampler2D uBloomA;
uniform sampler2D uBloomB;
uniform float uBloom;
uniform float uExposure;
uniform float uFade;

vec3 aces(vec3 x){
  float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main(){
  vec3 col = texture2D(uScene, vUv).rgb;
  vec3 bl  = texture2D(uBloomA, vUv).rgb * 0.60
           + texture2D(uBloomB, vUv).rgb * 0.32;
  col += bl * uBloom;

  col *= uExposure;
  col = aces(col);

  vec2 q = vUv - 0.5;
  col *= 1.0 - 0.42 * dot(q, q) * 1.6;

  col = pow(col, vec3(1.0 / 2.2));

  // Появление сцены после загрузки: без него первый кадр бьёт по глазам
  col *= uFade;

  // Упорядоченный дизеринг убивает полосы в глубоких градиентах
  float dz = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (dz - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}`;
