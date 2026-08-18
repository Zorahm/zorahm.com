import { BODY_COUNT } from "@/content";
import { SHAPE_EPILOGUE, SHAPE_PROLOGUE } from "@/components/field/shapes/common";

/**
 * Шейдеры сцены /space.
 *
 * Оба прохода — и обзор системы, и раскрытое тело — стоят на прологе фигур
 * сайта: сетка, hash, stroke, dot2 и ellipseEdge там уже объявлены, и незачем
 * держать два набора одних и тех же хелперов. Пролог дополняется тем, чего
 * фигурам не требовалось: развёрткой шара, светом и картой поверхности.
 */

/** Дополнение пролога для тел: шар, свет, карта поверхности */
const BODY_EXTRAS = /* glsl */ `
uniform sampler2D uMap;

const float TAU = 6.283185307179586;

/** Направление на Солнце: слева сверху и почти в лоб */
const vec3 SUN_DIR = vec3(-0.4285, 0.4499, 0.8677);

vec2 rot(vec2 p, float a){
  float s = sin(a), c = cos(a);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

/**
 * Ортографическая проекция шара: точка диска → долгота, широта, нормаль.
 * Возвращает false за пределами диска.
 */
bool sphereAt(vec2 q, float R, out float lon, out float lat, out vec3 n){
  float r2 = dot(q, q);
  if (r2 >= R * R) return false;
  float z = sqrt(R * R - r2);
  lon = atan(q.x, z);
  lat = asin(clamp(q.y / R, -1.0, 1.0));
  n = vec3(q / R, z / R);
  return true;
}

/** Освещённость. ambient не даёт ночной стороне схлопнуться в пустоту */
float lit(vec3 n, float ambient, vec3 dir){
  return ambient + (1.0 - ambient) * pow(max(dot(n, dir), 0.0), 0.75);
}

float lit(vec3 n, float ambient){
  return lit(n, ambient, SUN_DIR);
}

/**
 * Растяжка контраста вокруг середины: без неё карта планеты превращается
 * в ровное серое поле, где точки отличаются радиусом на доли пикселя.
 */
float contrast(float v, float k, float mid){
  return clamp((v - mid) * k + mid, 0.0, 1.0);
}

vec2 mapUV(float lon, float lat){
  return vec2(fract(lon / TAU + 0.5), 0.5 - lat / PI);
}

/** Основной слой карты. Долгота заворачивается, широта обрезается. */
float mapAt(float lon, float lat){
  return texture(uMap, mapUV(lon, lat)).r;
}

/**
 * Второй слой карты. Он лежит в зелёном канале той же текстуры: Земле нужны
 * материки и облака по отдельности, а лишний сэмплер ради одного тела —
 * плата дороже, чем один канал, который всё равно простаивает.
 */
float mapLayer2(float lon, float lat){
  return texture(uMap, mapUV(lon, lat)).g;
}

`;

export const buildBodyShader = (body: string) =>
  `${SHAPE_PROLOGUE}\n${BODY_EXTRAS}\n${body}\n${SHAPE_EPILOGUE}`;

/**
 * Обзор системы.
 *
 * Положения тел приходят готовыми из mechanics.ts — шейдер их не считает, а
 * только рисует. Так гарантировано, что клик попадает ровно в ту точку,
 * которую видно на экране.
 */
export const SYSTEM_SHADER = `${SHAPE_PROLOGUE}
/** xy — центр тела в узлах, z — радиус точки, w — яркость */
uniform vec4 uBodies[${BODY_COUNT}];
/** Радиус орбиты в долях масштаба сцены; у Солнца 0 */
uniform float uOrbits[${BODY_COUNT}];
/** Начало системы в узлах: при залёте к телу оно уезжает с экрана */
uniform vec2 uOrigin;
/** Синус наклона камеры: 0 — орбиты с ребра, 1 — вид сверху */
uniform float uFlat;
uniform float uViewScale;
/** Индекс подсвеченного тела или -1 */
uniform float uHighlight;
/** Общее затухание, пока раскрывается тело */
uniform float uFade;

/**
 * Расстояние до контура орбиты.
 *
 * Общий ellipseEdge из пролога делит невязку на меньшую полуось, и у сильно
 * сплюснутого эллипса линия у левого и правого краёв разбухает во столько
 * раз, во сколько полуоси отличаются. На девяти вложенных орбитах это
 * сливается в сплошную полосу поперёк экрана. Здесь невязка делится на
 * градиент — оценка первого порядка, честная в обе стороны.
 */
float orbitEdge(vec2 p, vec2 r){
  r = max(r, vec2(1e-4));
  float k = length(p / r);
  vec2 g = vec2(p.x / (r.x * r.x), p.y / (r.y * r.y));
  return abs(k - 1.0) * k / max(length(g), 1e-6);
}

float field(vec2 p){
  float v = 0.0;

  // Звёзды: редкие узлы, мерцающие вразнобой
  float h = hash(p.x, p.y, 11.0);
  if (h > 0.977){
    v = 0.05 + 0.085 * (0.5 + 0.5 * sin(uTime * 0.7 + h * 90.0));
  }

  vec2 q = p - uOrigin;

  // Орбиты. Ближняя половина ярче дальней — без этого кольцо плоское
  for (int i = 0; i < ${BODY_COUNT}; i++){
    float o = uOrbits[i];
    if (o <= 0.0) continue;
    float r = o * uViewScale;
    float d = orbitEdge(q, vec2(r, max(r * uFlat, 0.4)));
    float near = q.y < 0.0 ? 1.0 : 0.5;
    v = max(v, stroke(d, 0.7) * 0.34 * near);
  }

  // Корона Солнца: спад наружу плюс медленно ползущие лучи
  vec2 s = p - uBodies[0].xy;
  float sr = length(s);
  float halo = exp(-max(sr - uBodies[0].z, 0.0) / (uBodies[0].z * 1.7));
  float rays = 0.6 + 0.4 * sin(atan(s.y, s.x) * 9.0 + uTime * 0.35);
  v = max(v, halo * (0.3 + 0.32 * rays));

  // Тела
  for (int i = 0; i < ${BODY_COUNT}; i++){
    vec4 b = uBodies[i];
    v = max(v, dot2(p, b.xy, b.z) * b.w);
  }

  // Прицел вокруг выбранного тела
  if (uHighlight >= 0.0){
    vec4 b = uBodies[int(uHighlight + 0.5)];
    float ring = abs(length(p - b.xy) - (b.z + 3.4));
    v = max(v, stroke(ring, 0.7) * 0.5);
  }

  return v * uFade;
}
${SHAPE_EPILOGUE}`;
