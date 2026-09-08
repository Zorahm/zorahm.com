/**
 * The scene pass: a Schwarzschild black hole traced photon by photon.
 *
 * Nothing here is a lens effect applied to a picture. Every ray leaves the
 * camera and is integrated along a null geodesic, so the ring of light, the
 * disk folded over the hole and the sky wrapped around its edge all come out
 * of the same equation of motion — they are not drawn, they are the result.
 *
 * The disk is crossed analytically: instead of marching through the gas, the
 * step that changes the sign of y is intersected with the equatorial plane
 * and the slab is integrated in one go. That keeps the gas thin and sharp at
 * grazing angles, which is exactly where the lensing puts it.
 */
export const FRAG_SCENE = /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform vec2  uRes;
uniform float uTime;
uniform vec3  uCamPos;
uniform mat3  uCamMat;     // columns: right, up, forward
uniform float uTanFov;
uniform int   uSteps;
uniform float uBright;     // disk brightness
uniform float uSpin;       // disk angular speed multiplier
uniform float uLens;       // lensing strength multiplier

#define MAX_STEPS  320
#define RS         1.0     // Schwarzschild radius (units of the whole scene)
#define DISK_IN    2.15
#define DISK_OUT   11.0
#define ESCAPE     140.0
#define SHEAR_PERIOD 11.0
#define PI         3.14159265

/* ---------------------------- hash / noise ---------------------------- */

float hash31(vec3 p){
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}

vec3 hash33(vec3 p){
  p = vec3(dot(p, vec3(127.1, 311.7,  74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}

float vnoise(vec3 x){
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash31(i + vec3(1.0, 1.0, 1.0));
  return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
             mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}

const mat3 M3 = mat3( 0.00,  0.80,  0.60,
                     -0.80,  0.36, -0.48,
                     -0.60, -0.48,  0.64);

float fbm4(vec3 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 4; i++){
    s += a * vnoise(p);
    p = M3 * p * 2.02;
    a *= 0.5;
  }
  return s;
}

float fbm5(vec3 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++){
    s += a * vnoise(p);
    p = M3 * p * 2.03;
    a *= 0.5;
  }
  return s;
}

/* ------------------------------ starfield ----------------------------- */

/*
 * Stars are points, and everything below follows from that.
 *
 * The profile has the same angular width in every layer and that width is
 * tied to the size of a pixel: a star never swells into a disc, and it never
 * falls between samples when the scene drops to a lower resolution. What
 * separates one star from another is brightness and colour, exactly as in a
 * real sky — and there is no twinkling anywhere, because there is no air out
 * here to make it.
 */

// Main-sequence colour, from a cool red dwarf to a hot blue giant
vec3 starColor(float t){
  vec3 c = mix(vec3(1.00, 0.56, 0.36), vec3(1.00, 0.80, 0.56),
               smoothstep(0.00, 0.30, t));
  c = mix(c, vec3(1.00, 0.95, 0.90), smoothstep(0.28, 0.60, t));
  c = mix(c, vec3(0.87, 0.92, 1.00), smoothstep(0.58, 0.84, t));
  c = mix(c, vec3(0.66, 0.78, 1.00), smoothstep(0.82, 1.00, t));
  return c;
}

vec3 starLayer(vec3 rd, float scale, float density, float gain, float px){
  vec3 p  = rd * scale;
  vec3 id = floor(p);
  vec3 f  = fract(p) - 0.5;
  vec3 h  = hash33(id);
  if (h.x > density) return vec3(0.0);

  // The star stands anywhere inside its cell, or the grid would show through
  vec3  off = (hash33(id + 11.7) - 0.5) * 0.72;
  vec3  dv  = (f - off) / scale;              // offset in radians, not cells
  float a   = length(dv);

  // Magnitudes follow a power law: a handful of bright ones and a crowd of
  // faint ones. A flat distribution is what makes a sky look sprayed on
  float mag = pow(h.y, 5.0) + 0.02;

  // Point spread: a core about a pixel across plus the wide skirt every real
  // optic has. The core is what is seen; the skirt is what makes the bright
  // ones feel bright
  // The skirt is kept short on purpose. The profile is measured in the sky
  // the ray came from, not on the screen, so whatever the lens magnifies it
  // also stretches — and a long tail turns every star near the ring into a
  // comet. The core survives that; the tail is what gives it away
  //
  // TODO: size the profile by the local Jacobian of the ray map instead of
  // by a pixel of the screen — dFdx/dFdy of the escape direction give the
  // solid angle one pixel actually covers, and a star scaled to that stays
  // a point under any magnification. Two things stand in the way: derivatives
  // need OES_standard_derivatives in GLSL ES 1.00, and along the edge of the
  // shadow neighbouring pixels take different paths (one falls in, one
  // escapes), so the derivative there is garbage and has to be clamped.
  float s     = 0.9 * px;
  float core  = exp(-(a * a) / (2.0 * s * s));
  float wide  = a / (2.2 * px);
  float skirt = 0.022 / (1.0 + wide * wide);
  float flux  = core + skirt;

  // Diffraction spikes belong to the handful of brightest stars and to no
  // one else. They are also drawn in the camera's own axes, which stops
  // being the plane of the screen once the ray is bent — one more reason to
  // keep them where the bending is weak and the stars are few
  float spike = smoothstep(0.975, 1.0, h.y);
  if (spike > 0.0){
    vec2 sc = vec2(dot(dv, uCamMat[0]), dot(dv, uCamMat[1]));
    float across = 2.0 * s * s;
    float arm = exp(-abs(sc.x) / (9.0 * px)) * exp(-sc.y * sc.y / across)
              + exp(-abs(sc.y) / (9.0 * px)) * exp(-sc.x * sc.x / across);
    flux += arm * 0.09 * spike;
  }

  // Hot stars are the luminous ones, so the bright end of a real sky leans
  // blue-white and the faint end red
  float temp = clamp(h.z * 0.55 + h.y * h.y * 0.75, 0.0, 1.0);

  return starColor(temp) * flux * mag * gain;
}

/*
 * The Galaxy seen edge-on from inside it: a band of starlight too fine to
 * resolve, cut lengthwise by dust. The dust is the point — a smooth glowing
 * stripe reads as an airbrush, while the dark rifts are what the eye
 * recognises as the Milky Way.
 */
vec3 milkyWay(vec3 rd, out float crowding){
  vec3  gal  = normalize(vec3(0.34, 0.86, -0.38));
  float lat  = dot(rd, gal);
  float core = exp(-lat * lat * 30.0);        // the bright narrow band
  float halo = exp(-lat * lat * 5.0);         // the thin disk around it

  float clump = fbm4(rd * 3.1 - 7.0);
  float dust  = fbm4(rd * 6.4 + vec3(4.0, 9.0, 1.0));
  float grain = fbm5(rd * 13.0 + 21.0);

  // Rifts live in the plane: away from it there is nothing left to hide
  dust = smoothstep(0.40, 0.70, dust) * core;

  float glow = (core * 0.78 + halo * 0.22)
             * (0.50 + 0.95 * clump)
             * (0.62 + 0.76 * grain);
  glow *= 1.0 - 0.88 * dust;

  // Old stars, so the light is warm and slightly yellow — never blue
  vec3 col = mix(vec3(0.42, 0.39, 0.36), vec3(0.48, 0.42, 0.33), clump)
           * glow * 0.085;

  // Hydrogen glowing where the dust thins out: a few red patches, no more
  float hii = smoothstep(0.70, 0.94, grain) * core * (1.0 - dust);
  col += vec3(0.32, 0.06, 0.05) * hii * 0.12;

  // Stars crowd toward the plane, and that is most of why the band is there
  crowding = (1.0 + 1.2 * halo + 0.8 * core) * (1.0 - 0.55 * dust);
  return col;
}

vec3 background(vec3 rd){
  // Angular size of a pixel: the star profile is measured in these, so it
  // holds its width whatever resolution the scene is running at
  float px = 2.0 * uTanFov / uRes.y;

  float crowding;
  vec3  col = milkyWay(rd, crowding);

  col += starLayer(rd,  46.0, 0.070 * crowding, 2.60, px);
  col += starLayer(rd,  96.0, 0.060 * crowding, 1.45, px);
  col += starLayer(rd, 190.0, 0.050 * crowding, 0.85, px);
  col += starLayer(rd, 360.0, 0.040 * crowding, 0.50, px);

  // Everything too far and too faint to be anything in particular
  col += vec3(0.0035, 0.0042, 0.0060);

  return col;
}

/* ----------------------------- accretion disk ------------------------- */

vec3 tempColor(float t){
  t = clamp(t, 0.0, 1.0);
  vec3 c1 = vec3(0.62, 0.09, 0.02);   // outer  – deep red
  vec3 c2 = vec3(1.00, 0.34, 0.05);   //          orange
  vec3 c3 = vec3(1.00, 0.74, 0.30);   //          amber
  vec3 c4 = vec3(1.00, 0.97, 0.90);   //          white
  vec3 c5 = vec3(0.74, 0.87, 1.00);   // inner  – blue-white
  vec3 c = mix(c1, c2, smoothstep(0.00, 0.30, t));
  c = mix(c, c3, smoothstep(0.26, 0.55, t));
  c = mix(c, c4, smoothstep(0.55, 0.82, t));
  c = mix(c, c5, smoothstep(0.84, 1.00, t));
  return c;
}

// gas pattern rotated by "ang" around the disk axis
float diskNoise(vec3 p, float ang, float drift){
  float ca = cos(ang), sa = sin(ang);
  vec3  q  = vec3(p.x * ca + p.z * sa, p.y, -p.x * sa + p.z * ca);
  return fbm4(q * vec3(0.62, 1.0, 0.62) + vec3(0.0, drift, 0.0));
}

// density of the gas at a point of the mid-plane
float diskDensity(vec3 p, float r){
  float t = uTime * uSpin;
  float w = 2.6 / pow(r, 1.5);               // Keplerian angular velocity

  // Keplerian shear would wind the texture into infinitely tight rings, so the
  // pattern is carried by two phases that reset half a period apart and are
  // cross-faded (flow-noise) — the swirl never degenerates into banding.
  float ph = t / SHEAR_PERIOD;
  float f  = fract(ph);
  float wA = 1.0 - abs(2.0 * f - 1.0);
  float dr = uTime * 0.04;
  float nA = diskNoise(p, w * SHEAR_PERIOD * f,               dr);
  float nB = diskNoise(p, w * SHEAR_PERIOD * fract(ph + 0.5), dr);
  float n  = mix(nB, nA, wA);

  float d = 0.28 + 1.55 * n * n;

  d *= smoothstep(DISK_IN, DISK_IN + 1.35, r);              // soft inner edge
  d *= 1.0 - smoothstep(DISK_OUT - 4.2, DISK_OUT, r);       // soft outer edge
  d *= pow(2.6 / r, 0.9);
  return max(d, 0.0);
}

/* ------------------------------- main --------------------------------- */

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec3 rd = normalize(uCamMat * vec3(uv.x * uTanFov * 2.0,
                                     uv.y * uTanFov * 2.0, 1.0));
  vec3 pos = uCamPos;
  vec3 vel = rd;

  // conserved angular momentum of the photon (per unit "energy")
  vec3  hv = cross(pos, vel);
  float h2 = dot(hv, hv);

  vec3  col   = vec3(0.0);
  float trans = 1.0;
  bool  done  = false;

  for (int i = 0; i < MAX_STEPS; i++){
    if (i >= uSteps) break;

    float r  = length(pos);
    if (r < RS){ done = true; break; }                       // event horizon
    if (r > ESCAPE && dot(pos, vel) > 0.0){                   // escaped
      col += trans * background(normalize(vel));
      done = true; break;
    }

    // adaptive step: constant swept angle near the hole, geometric far away
    float dt = 0.032 * r * r / max(sqrt(h2), 0.02);
    dt = min(dt, 0.30 * r);
    if (r < DISK_OUT + 1.5 && abs(pos.y) < 2.0) dt = min(dt, 0.16 + 0.03 * r);

    // velocity-Verlet on the null-geodesic equation
    //   a = -3/2 * rs * h^2 * r_vec / r^5      (exact orbit shape in Schwarzschild)
    float r2  = r * r;
    vec3  acc = -1.5 * RS * h2 * pos / (r2 * r2 * r) * uLens;
    vec3  np  = pos + vel * dt + 0.5 * acc * dt * dt;
    float nr  = length(np);
    float nr2 = nr * nr;
    vec3  nac = -1.5 * RS * h2 * np / (nr2 * nr2 * nr) * uLens;
    vec3  nv  = vel + 0.5 * (acc + nac) * dt;

    // --- crossing of the equatorial plane => accretion disk ---
    if (pos.y * np.y < 0.0){
      float s  = pos.y / (pos.y - np.y);
      vec3  cp = mix(pos, np, s);
      float cr = length(cp.xz);

      if (cr > DISK_IN * 0.86 && cr < DISK_OUT){
        vec3  cd  = normalize(mix(vel, nv, s));
        float dens = diskDensity(cp, cr);

        // analytic slab: longer path at grazing angles
        float tau = dens * 0.62 / max(abs(cd.y), 0.12);
        float alpha = 1.0 - exp(-min(tau, 6.0));

        // relativistic beaming + gravitational redshift
        vec3  orbit = normalize(cross(vec3(0.0, 1.0, 0.0), cp));
        float beta  = min(sqrt(0.5 * RS / cr), 0.72);
        float gamma = 1.0 / sqrt(1.0 - beta * beta);
        float dopp  = 1.0 / (gamma * (1.0 - beta * dot(orbit, -cd)));
        float grav  = sqrt(max(1.0 - RS / cr, 0.02));
        float g     = clamp(dopp * grav, 0.25, 2.6);

        float temp = pow(clamp(DISK_IN / cr, 0.0, 1.0), 1.05);
        vec3  emit = tempColor(clamp(temp * (0.55 + 0.45 * g), 0.0, 1.0));
        float power = uBright * 2.35 * pow(2.4 / cr, 2.0) * pow(g, 2.6);

        col   += trans * emit * alpha * power;
        trans *= (1.0 - alpha * 0.94);
        if (trans < 0.004){ done = true; break; }
      }
    }

    pos = np;
    vel = nv;
  }

  // rays that ran out of steps are grazing the photon sphere: they end black
  if (!done) col += trans * vec3(0.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`;
