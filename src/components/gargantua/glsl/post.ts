/**
 * Everything that happens after the scene: bright pass, blur, composite.
 *
 * The disk near the inner edge is beamed and blue-shifted well past white,
 * and an ordinary 8-bit buffer would simply clip it. The scene is drawn into
 * a floating-point target instead, the part above the threshold is picked
 * out, blurred at two scales and folded back into the frame — which is how
 * light behaves in a lens, and also why the ring reads as something hot
 * rather than a bright grey line.
 */

export const VERT = /* glsl */ `
attribute vec2 aPos;
varying vec2 vUv;
void main(){
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

/** Bright pass, downsampling by half along the way */
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

/** Separable gaussian blur: horizontal first, then vertical */
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

/** Composite: glow, exposure, tone mapping, vignette, dithering */
export const FRAG_COMPOSITE = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D uScene;
uniform sampler2D uBloomA;
uniform sampler2D uBloomB;
uniform float uBloom;
uniform float uExposure;

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

  // ordered dithering kills the banding in the deep gradients
  float dz = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (dz - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}`;
