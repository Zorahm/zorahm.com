/**
 * Плоские слои сцены: кольца планет и линии орбит.
 *
 * Оба — полупрозрачные плоскости, и обе пересекаются лучом ровно один раз,
 * поэтому считаются не трассировкой, а одной подстановкой. Сцена получает
 * от каждого слоя цвет, прозрачность и расстояние, и складывает их с телами
 * по глубине: кольцо за планетой обязано скрыться, а перед — просвечивать.
 *
 * Колец в системе два набора, и устроены они совершенно по-разному: у Сатурна
 * это широкая структура с делениями, у Урана — десяток тёмных нитей, из
 * которых различимо одно эпсилон. Отсюда два профиля плотности вместо общего.
 */
export const RINGS = /* glsl */ `
uniform vec3  uRingCtr[RING_SETS];
uniform vec3  uRingAxis[RING_SETS];
/** x — радиус тела, y — внутренний край, z — внешний, w — профиль плотности */
uniform vec4  uRingSet[RING_SETS];
/** Индекс тела, которому принадлежит набор */
uniform float uRingOwner[RING_SETS];

uniform float uOrbitR[BODIES];
uniform float uOrbits;

/**
 * Плотность колец Сатурна по радиусу в радиусах планеты.
 *
 * Границы настоящие: кольцо C начинается на 1.28, плотное B тянется до 1.95,
 * дальше деление Кассини, за ним A до 2.32 со щелью Энке посередине. Рисовать
 * это штрихом по контуру было бы враньём — структура именно радиальная.
 */
float broadRings(float u){
  float d = 0.0;
  d += 0.34 * (smoothstep(1.26, 1.35, u) - smoothstep(1.45, 1.55, u));
  d += 1.00 * (smoothstep(1.50, 1.59, u) - smoothstep(1.89, 1.95, u));
  d += 0.09 * (smoothstep(1.93, 1.97, u) - smoothstep(1.99, 2.04, u));
  d += 0.62 * (smoothstep(1.99, 2.07, u) - smoothstep(2.24, 2.32, u));

  // Щель Энке: узкая полоса, выметенная спутником. Квадрат берётся
  // умножением, а не через pow: у pow отрицательное основание не определено,
  // и внутренняя половина щели уходила в NaN вместе со всем кольцом
  float encke = (u - 2.215) / 0.014;
  d *= 1.0 - 0.78 * exp(-encke * encke);

  // Тысячи концентрических волн — то, из-за чего кольца выглядят веществом
  d *= 0.70 + 0.46 * fbm3(vec3(u * 46.0, 0.0, 0.0));
  return max(d, 0.0);
}

/** Одна узкая нить: единица в середине кольца, ноль за его краем */
float thread(float u, float r, float halfWidth){
  return smoothstep(halfWidth, halfWidth * 0.3, abs(u - r));
}

/**
 * Плотность колец Урана. Радиусы настоящие, от кольца 6 на 1.60 до эпсилон
 * на 2.006. Вещество темнее угля и нити тонкие, поэтому все они на грани
 * различимости — все, кроме эпсилон, который вдесятеро шире и ярче.
 */
float narrowRings(float u){
  float d = 0.0;
  d += 0.16 * thread(u, 1.597, 0.006);
  d += 0.14 * thread(u, 1.627, 0.005);
  d += 0.14 * thread(u, 1.652, 0.005);
  d += 0.18 * thread(u, 1.750, 0.006);
  d += 0.16 * thread(u, 1.786, 0.005);
  d += 0.12 * thread(u, 1.868, 0.004);
  d += 0.20 * thread(u, 1.876, 0.006);
  d += 0.22 * thread(u, 1.900, 0.007);
  d += 0.12 * thread(u, 1.957, 0.004);
  d += 0.95 * thread(u, 2.006, 0.013);
  return d;
}

float ringDensity(float u, float style){
  return style < 0.5 ? broadRings(u) : narrowRings(u);
}

/** Цвет вещества: тёплый лёд у Сатурна, угольная пыль у Урана */
vec3 ringMatter(float style, float dens){
  float t = clamp(dens, 0.0, 1.0);
  if (style < 0.5) return mix(vec3(0.62, 0.54, 0.42), vec3(1.0, 0.94, 0.8), t);
  return mix(vec3(0.20, 0.21, 0.24), vec3(0.52, 0.55, 0.6), t);
}

/**
 * Ближайшее кольцо по лучу. Возвращает цвет с накопленной яркостью, альфа —
 * в w, расстояние до пересечения — через tOut.
 */
vec4 ringLayer(vec3 ro, vec3 rd, out float tOut){
  vec4  best  = vec4(0.0);
  float bestT = 1e9;

  for (int k = 0; k < RING_SETS; k++){
    float radius = uRingSet[k].x;
    if (radius <= 0.0) continue;

    vec3  axis  = uRingAxis[k];
    float denom = dot(rd, axis);
    if (abs(denom) < 1e-5) continue;

    float t = dot(uRingCtr[k] - ro, axis) / denom;
    if (t <= 0.0 || t >= bestT) continue;

    vec3  p = ro + rd * t;
    float u = length(p - uRingCtr[k]) / radius;
    if (u < uRingSet[k].y || u > uRingSet[k].z) continue;

    float dens = ringDensity(u, uRingSet[k].w);
    if (dens <= 0.001) continue;

    // Косой взгляд удлиняет путь сквозь слой: кольца с ребра плотнее
    float alpha = 1.0 - exp(-dens * 1.9 / max(abs(denom), 0.05));

    vec3  toSun = -p;
    float dist  = length(toSun);
    vec3  L     = toSun / max(dist, 0.001);

    // Тень планеты на кольцах — она же доказывает, что это не картинка
    float shade = 1.0 - shadowedBy(p, L, uRingCtr[k], radius);
    float lit   = (0.3 + 0.8 * abs(dot(axis, L))) * shade;

    // Просвет: глядя против Солнца, разреженные участки светятся насквозь
    float fwd = pow(clamp(dot(rd, L), 0.0, 1.0), 6.0) * (1.0 - dens * 0.6);

    vec3 col = ringMatter(uRingSet[k].w, dens)
             * (lit * sunFalloff(dist) + fwd * 0.35);

    bestT = t;
    best  = vec4(col, clamp(alpha, 0.0, 1.0));
  }

  tOut = bestT < 1e9 ? bestT : -1.0;
  return best;
}

/**
 * Тень колец, падающая на планету. Луч от точки к Солнцу пересекается
 * с плоскостью колец; попал в вещество — точка в полутени. Считается только
 * для того тела, которому кольца и принадлежат.
 */
float ringShadow(vec3 p, float bodyIdx){
  float mask = 1.0;

  for (int k = 0; k < RING_SETS; k++){
    float radius = uRingSet[k].x;
    if (radius <= 0.0) continue;
    if (abs(uRingOwner[k] - bodyIdx) > 0.5) continue;

    vec3  axis  = uRingAxis[k];
    vec3  toSun = -p;
    vec3  L     = toSun / max(length(toSun), 0.001);
    float denom = dot(L, axis);
    if (abs(denom) < 1e-5) continue;

    float t = dot(uRingCtr[k] - p, axis) / denom;
    if (t <= 0.0) continue;                        // кольца с ночной стороны

    float u = length(p + L * t - uRingCtr[k]) / radius;
    if (u < uRingSet[k].y || u > uRingSet[k].z) continue;

    float dens = ringDensity(u, uRingSet[k].w);
    mask *= 1.0 - 0.82 * (1.0 - exp(-dens * 1.6));
  }

  return mask;
}

/**
 * Линии орбит в плоскости эклиптики.
 *
 * Толщина задана в мире, но растёт с расстоянием, поэтому на экране
 * остаётся одинаковой и не рассыпается на муар у дальних орбит. С ребра
 * плоскость гасится: там девять линий сходятся в одну и мерцают.
 */
vec4 orbitLayer(vec3 ro, vec3 rd, out float tOut){
  tOut = -1.0;
  if (uOrbits <= 0.001 || abs(rd.y) < 1e-5) return vec4(0.0);

  float t = -ro.y / rd.y;
  if (t <= 0.0) return vec4(0.0);

  vec3  p = ro + rd * t;
  float r = length(p.xz);
  float w = clamp(t * 0.0032, 0.010, 0.30);

  float line = 0.0;
  float clear = 1.0;
  for (int i = 0; i < BODIES; i++){
    if (uOrbitR[i] > 0.0) line += smoothstep(w, 0.0, abs(r - uOrbitR[i]));
    // Возле самого тела линия гасится. Планета стоит ровно на своей
    // окружности, и без этого зазора ближняя дуга шла бы прямо по её диску
    clear *= smoothstep(uBody[i].w * 1.05, uBody[i].w * 1.9,
                        distance(p, uBody[i].xyz));
  }

  line *= clear;
  if (line <= 0.0) return vec4(0.0);

  line *= smoothstep(0.004, 0.065, abs(rd.y));
  tOut = t;

  return vec4(vec3(0.36, 0.52, 0.86) * uOrbits, clamp(line, 0.0, 1.0) * 0.55);
}
`;
