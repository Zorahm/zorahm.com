/**
 * Общая часть всех шейдеров сцены: шум, вращение, мелкая геометрия.
 *
 * Ровно те же четыре октавы, что и в остальных полях сайта, но в трёх
 * измерениях: поверхность натягивается не на плоскость, а на шар, и шум
 * обязан быть бесшовным на полюсах. Отсюда и значение шума по точке
 * пространства вместо развёртки в координатах «долгота × широта».
 */
export const COMMON = /* glsl */ `
const float PI  = 3.14159265;
const float TAU = 6.28318531;

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

float fbm3(vec3 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 3; i++){
    s += a * vnoise(p);
    p = M3 * p * 2.02;
    a *= 0.5;
  }
  return s;
}

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

/**
 * Гребневой шум: складка модуля превращает холмы в хребты, а хребты после
 * инверсии — в чаши. На каменных телах из этого получаются кратеры.
 */
float ridged(vec3 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 4; i++){
    float n = 1.0 - abs(vnoise(p) * 2.0 - 1.0);
    s += a * n * n;
    p = M3 * p * 2.04;
    a *= 0.5;
  }
  return s;
}

/** Поворот вектора вокруг произвольной оси, формула Родрига */
vec3 rotAxis(vec3 v, vec3 axis, float ang){
  float c = cos(ang), s = sin(ang);
  return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

/**
 * Пересечение со сферой вместе с покрытием пикселя её силуэтом.
 *
 * Обычный тест «попал или нет» даёт на краю диска лесенку: холст заведён
 * без сглаживания, а планета — самый контрастный переход в кадре. Поэтому
 * вместо булева ответа считается доля пикселя, накрытая телом: расстояние
 * от центра до луча сравнивается с радиусом в единицах пикселя на том же
 * удалении. Луч, прошедший в полупикселе от лимба, получает t в точке
 * касания и покрытие около половины — этого хватает, чтобы край стал
 * гладким без единого лишнего отсчёта.
 *
 * pix — угловой размер пикселя; cover обнуляется при промахе.
 */
float sphereTrace(vec3 ro, vec3 rd, vec3 center, float radius, float pix,
                  out float cover){
  cover = 0.0;
  vec3  oc = ro - center;
  float b  = dot(oc, rd);
  float tc = -b;                           // ближайшая к центру точка луча
  if (tc <= 0.0) return -1.0;              // тело позади камеры

  float h2 = dot(oc, oc) - b * b;
  float d  = sqrt(max(h2, 0.0));
  // Полпикселя в обе стороны от силуэта: ровно ширина перехода
  cover = clamp((radius - d) / max(tc * pix, 1e-6) + 0.5, 0.0, 1.0);
  if (cover <= 0.0) return -1.0;

  // При промахе в пределах пикселя корня нет — берётся точка касания
  float sq = sqrt(max(radius * radius - h2, 0.0));
  float t  = tc - sq;
  return t > 0.0 ? t : tc + sq;
}

/**
 * Проходит ли отрезок от точки к Солнцу мимо шара.
 *
 * Солнце стоит в начале координат, поэтому загораживать может только то,
 * что ближе него: шар за Солнцем тени не отбрасывает.
 */
float shadowedBy(vec3 p, vec3 lightDir, vec3 center, float radius){
  vec3  oc = p - center;
  float b  = dot(oc, lightDir);
  if (b > 0.0) return 0.0;                 // шар позади точки
  if (-b > length(p)) return 0.0;          // шар по ту сторону Солнца
  float d2 = dot(oc, oc) - b * b;
  // Мягкий край: полутень шириной в десятую радиуса
  return 1.0 - smoothstep(radius * 0.9, radius * 1.05, sqrt(max(d2, 0.0)));
}
`;
