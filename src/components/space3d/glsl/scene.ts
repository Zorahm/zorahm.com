import { BELT_COUNT, EARTH_ORBIT, RING_COUNT, SPHERE_COUNT } from "../system";
import { BELTS } from "./belts";
import { COMMON } from "./common";
import { RINGS } from "./rings";
import { STARS } from "./stars";
import { SURFACES } from "./surfaces";

/**
 * Главный проход: луч на пиксель, ближайшее тело, полупрозрачные слои
 * поверх.
 *
 * В отличие от чёрной дыры, где луч приходится вести шагами по кривой,
 * здесь пространство плоское и всё пересекается аналитически: девять сфер,
 * две плоскости. Поэтому кадр стоит дёшево, и весь бюджет уходит не на
 * геометрию, а на поверхности — пояса, материки, кратеры и кольца.
 *
 * Тела приходят юниформами и разбираются в цикле с постоянными границами:
 * GLSL ES 1.00 разрешает индексировать массив только счётчиком цикла, так
 * что найденное тело копируется в локальные переменные прямо в цикле.
 */
const PRELUDE = /* glsl */ `
precision highp float;

#define BODIES ${SPHERE_COUNT}
#define RING_SETS ${Math.max(1, RING_COUNT)}
#define BELT_SETS ${Math.max(1, BELT_COUNT)}
/**
 * Освещённость на орбите Земли принята за единицу. Радиус этой орбиты задаёт
 * масштаб всей системы, поэтому число приходит оттуда же: разъехаться им
 * нельзя, иначе свет и расстояния окажутся про разные системы
 */
#define LIGHT_REF ${EARTH_ORBIT.toFixed(4)}
/**
 * Отсчётов на пояс. Камень должен получить хотя бы пару попаданий, иначе
 * россыпь рассыпается на отдельные точки; цикл всё равно выходит досрочно,
 * как только передние камни съедят прозрачность
 */
#define BELT_STEPS 26

varying vec2 vUv;

uniform vec2  uRes;
uniform float uTime;
uniform vec3  uCamPos;
uniform mat3  uCamMat;      // столбцы: вправо, вверх, вперёд
uniform float uTanFov;
/** Подъём картинки в кадре: на узком экране низ занимает карточка тела */
uniform float uShift;

/** xyz — центр тела, w — радиус */
uniform vec4  uBody[BODIES];
uniform vec3  uColA[BODIES];
uniform vec3  uColB[BODIES];
/** x — частота рисунка, y — контраст, z — добавка стиля, w — сам стиль */
uniform vec4  uSurf[BODIES];
/** xyz — ось вращения, w — угол собственного вращения */
uniform vec4  uAxis[BODIES];
`;

const MAIN = /* glsl */ `
void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  uv.y -= uShift;
  vec3 rd = normalize(uCamMat * vec3(uv.x * uTanFov * 2.0,
                                     uv.y * uTanFov * 2.0, 1.0));
  vec3 ro = uCamPos;

  // Угловой размер пикселя: по нему считаются и покрытие силуэта, и то,
  // сколько мелочи имеет смысл рисовать на поверхности
  float pix = 2.0 * uTanFov / uRes.y;

  // Ближайшее тело по лучу. Всё, что понадобится для затенения, копируется
  // здесь же: после цикла индексировать массивы уже нельзя
  float tHit  = 1e9;
  float hIdx  = -1.0;
  float hCov  = 0.0;
  vec4  hBody = vec4(0.0);
  vec3  hColA = vec3(0.0);
  vec3  hColB = vec3(0.0);
  vec4  hSurf = vec4(0.0);
  vec4  hAxis = vec4(0.0);

  for (int i = 0; i < BODIES; i++){
    float cov;
    float t = sphereTrace(ro, rd, uBody[i].xyz, uBody[i].w, pix, cov);
    if (t > 0.0 && t < tHit){
      tHit  = t;
      hCov  = cov;
      hIdx  = float(i);
      hBody = uBody[i];
      hColA = uColA[i];
      hColB = uColB[i];
      hSurf = uSurf[i];
      hAxis = uAxis[i];
    }
  }

  vec3 sky = background(rd);
  vec3 col = sky;
  if (hIdx >= 0.0){
    vec3 p = ro + rd * tHit;
    vec3 n = normalize(p - hBody.xyz);
    // Тень колец ложится только на то тело, которому они принадлежат
    float mask = ringShadow(p, hIdx);
    // Доля кадра, занятая телом: единица — диск во весь экран. Мелкий
    // рисунок поверхности включается по ней и только вблизи
    float near = hBody.w / max(tHit * uTanFov, 1e-4);
    float lod  = smoothstep(0.015, 0.30, near);
    vec3 body = shadeBody(p, n, rd, hBody.xyz, hColA, hColB, hSurf, hAxis,
                          mask, lod, hIdx, uTime);
    // Край диска смешивается с небом по покрытию: холст заведён без
    // сглаживания, и лесенка на лимбе — самое заметное, что в нём видно
    col = mix(sky, body, hCov);
  }

  // Слои за телом обрезаются по нему только там, где оно кроет пиксель
  // целиком: на самом краю сквозь полупрозрачную кромку видно, что дальше
  float tClip = hCov > 0.5 ? tHit : 1e9;

  // Корона: угловой размер Солнца задаёт масштаб, поэтому вблизи она
  // разворачивается на полнеба, а издали сжимается в точку
  float sunDist = length(ro);
  vec3  sunDir  = -ro / max(sunDist, 0.001);
  float blocked = (hIdx > 0.5 && tHit < sunDist) ? 1.0 - hCov : 1.0;
  if (blocked > 0.0){
    float ang    = acos(clamp(dot(rd, sunDir), -1.0, 1.0));
    float sunAng = max(atan(uBody[0].w / max(sunDist, 0.001)), 1e-4);
    float x      = ang / sunAng;
    float halo   = 0.50 * exp(-x * 1.6) + 0.12 * exp(-x * 0.5)
                 + 0.02 * exp(-x * 0.14);

    // Протуберанцы: языки вещества над лимбом. Считаются по углу вокруг
    // направления на Солнце, поэтому висят на месте, а не ползут за камерой
    vec3  up = abs(sunDir.y) > 0.95 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    vec3  ax = normalize(cross(sunDir, up));
    vec3  ay = cross(sunDir, ax);
    float az = atan(dot(rd, ay), dot(rd, ax));
    float arc = fbm3(vec3(cos(az), sin(az), uTime * 0.04) * 3.4);
    halo += smoothstep(0.98, 1.04, x) * smoothstep(1.7, 1.05, x)
          * smoothstep(0.52, 0.82, arc) * 0.7;

    col += vec3(1.0, 0.74, 0.42) * halo * blocked;
  }

  // Пояса мелких тел набираются вдоль луча и обрезаются по ближайшему телу
  col += beltLight(ro, rd, tClip, uTime);

  // Полупрозрачные слои. Ближе тела — накладываются, дальше — скрыты им;
  // между собой складываются от дальнего к ближнему
  float tRing, tOrb;
  vec4  ring = ringLayer(ro, rd, tRing);
  vec4  orb  = orbitLayer(ro, rd, tOrb);

  bool showRing = tRing > 0.0 && tRing < tClip && ring.a > 0.0;
  bool showOrb  = tOrb  > 0.0 && tOrb  < tClip && orb.a  > 0.0;

  if (showRing && showOrb && tOrb > tRing){
    col += orb.rgb * orb.a;
    col  = mix(col, ring.rgb, ring.a);
  } else {
    if (showRing) col = mix(col, ring.rgb, ring.a);
    if (showOrb)  col += orb.rgb * orb.a;
  }

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
`;

export const FRAG_SCENE = [
  PRELUDE,
  COMMON,
  STARS,
  SURFACES,
  RINGS,
  BELTS,
  MAIN,
].join("\n");
