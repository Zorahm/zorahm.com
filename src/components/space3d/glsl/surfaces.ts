/**
 * Поверхности тел.
 *
 * Все девять шейдятся одной функцией: она разбирает четыре числа композиции
 * (частота рисунка, контраст, добавка стиля и сам стиль) и уходит в нужную
 * ветку. Ветки различаются только тем, как из шума получается альбедо;
 * свет, терминатор, блик и атмосферный ободок общие — иначе планеты
 * выглядели бы снятыми в разных студиях.
 *
 * Рисунок считается в собственных координатах тела: нормаль поворачивается
 * назад на угол собственного вращения, поэтому материки и пояса уезжают
 * за лимб вместе с телом, а не ползут по неподвижному диску.
 */
export const SURFACES = /* glsl */ `
const int S_SUN   = 0;
const int S_ROCK  = 1;
const int S_GAS   = 2;
const int S_EARTH = 3;
const int S_ICE   = 4;
const int S_CLOUD = 5;

/** Освещённость на орбите Земли принята за единицу */
const float LIGHT_REF = 11.4;

/**
 * Ослабление света с расстоянием. Обратный квадрат оставил бы Нептун
 * чёрным, а Меркурий выжженным: показатель занижен, и внешние планеты
 * остаются видимыми, сохраняя порядок яркостей.
 */
float sunFalloff(float dist){
  return clamp(pow(LIGHT_REF / max(dist, 0.001), 0.55), 0.28, 1.7);
}

/** Каменное тело: реголит крупными пятнами и кратеры поверх */
vec3 rockAlbedo(vec3 q, float lat, vec3 colA, vec3 colB, float detail,
                float contrast, float extra){
  float base   = fbm5(q * detail);
  float crater = ridged(q * detail * 2.3);
  float shade  = 0.5 + (base - 0.5) * 1.6 - (crater - 0.5) * 0.9;
  vec3  alb    = mix(colB, colA, clamp((shade - 0.5) * contrast + 0.5, 0.0, 1.0));

  // Полярные шапки: у Марса они есть, у Меркурия extra = 0 и ветка молчит.
  // Граница проходит по широте, но гуляет вместе с рельефом — ровного круга
  // у шапки не бывает
  if (extra > 0.0){
    float edge = 1.24 - 0.40 * extra;
    float cap  = smoothstep(edge, edge + 0.26, abs(lat) + 0.3 * (base - 0.5));
    alb = mix(alb, vec3(0.93, 0.95, 0.97), cap * 0.92);
  }
  return alb;
}

/**
 * Газовый гигант: широтные пояса, размытые турбулентностью.
 *
 * Шум перед синусом сжат по широте и растянут по долготе — так струйное
 * течение размывает границу пояса вдоль, но не поперёк, и полосы остаются
 * полосами, а не превращаются в пятна.
 */
vec3 gasAlbedo(vec3 q, float lat, float lon, float time, vec3 colA, vec3 colB,
               float detail, float contrast, float extra){
  // Шум растянут вдоль пояса и сжат поперёк: струя размывает границу вдоль,
  // но не поперёк, иначе полосы расплылись бы в пятна
  float turb  = fbm4(q * vec3(1.1, 6.5, 1.1) + vec3(0.0, time * 0.02, 0.0));
  float bands = sin(lat * detail * 2.4 + (turb - 0.5) * 1.3);
  float t     = clamp(0.5 + 0.5 * bands * (0.35 + contrast), 0.0, 1.0);
  vec3  alb   = mix(colB, colA, t);

  // Мелкая рябь вдоль пояса: без неё гигант выглядит крашеным
  alb *= 0.9 + 0.2 * fbm4(q * vec3(detail * 0.7, detail * 3.0, detail * 0.7));

  // Большое красное пятно: вихрь в южном полушарии, медленно дрейфующий
  // по долготе относительно самих поясов
  if (extra > 0.0){
    float dlon = mod(lon - time * 0.03 + PI, TAU) - PI;
    vec2  d    = vec2(dlon * 0.34, lat + 0.36);
    float swirl = fbm3(q * 9.0) - 0.5;
    float spot = smoothstep(0.19, 0.05, length(d) + swirl * 0.05);
    alb = mix(alb, vec3(0.78, 0.30, 0.16), spot * extra);
    alb = mix(alb, vec3(0.90, 0.55, 0.34), spot * extra * (0.4 + swirl));
  }
  return alb;
}

/** Земля: океан, материки, снег к полюсам и облачный слой поверх */
vec3 earthAlbedo(vec3 q, float lat, float time, vec3 ocean, vec3 land,
                 float detail, float extra, out float water, out float clouds){
  float h    = fbm5(q * detail + 3.7);
  float mask = smoothstep(0.49, 0.53, h);
  water = 1.0 - mask;

  vec3 alb = mix(land, vec3(0.44, 0.38, 0.24), smoothstep(0.53, 0.72, h));
  alb = mix(alb, vec3(0.30, 0.44, 0.20), smoothstep(0.60, 0.52, h) * 0.4);
  alb = mix(ocean * (0.75 + 0.5 * h), alb, mask);

  // Снег ложится по широте, но граница гуляет вместе с рельефом
  float snow = smoothstep(1.02, 1.32, abs(lat) + (h - 0.5) * 0.5);
  alb = mix(alb, vec3(0.90, 0.93, 0.96), snow);

  // Облака идут своим слоем и медленно обгоняют поверхность
  float cl = fbm5(q * (detail * 1.3) + vec3(time * 0.012, 0.0, -time * 0.006));
  clouds = smoothstep(0.54 - 0.16 * extra, 0.74, cl) * (0.35 + 0.65 * extra);
  alb = mix(alb, vec3(0.97, 0.98, 1.0), clouds);

  return alb;
}

/** Ледяной гигант: ровная метановая дымка, редкие тёмные шторма */
vec3 iceAlbedo(vec3 q, float lat, vec3 colA, vec3 colB, float detail,
               float contrast, float extra){
  float turb  = fbm4(q * vec3(1.2, 3.4, 1.2));
  float bands = sin(lat * detail * 1.8 + (turb - 0.5) * 2.2);
  vec3  alb   = mix(colB, colA, clamp(0.5 + 0.5 * bands * contrast, 0.0, 1.0));

  if (extra > 0.0){
    float storm = fbm4(q * 3.2 + 11.0);
    // Тёмное пятно и белые перья над ним — как у Нептуна
    alb = mix(alb, colB * 0.55, smoothstep(0.62, 0.78, storm) * extra);
    alb = mix(alb, vec3(0.92, 0.95, 1.0),
              smoothstep(0.70, 0.86, fbm4(q * 6.0 - 4.0)) * extra * 0.5);
  }
  return alb;
}

/** Венера: сплошная пелена, закрученная сдвигом долготы по широте */
vec3 cloudAlbedo(vec3 q, float lat, float time, vec3 colA, vec3 colB,
                 float detail, float contrast){
  vec3  w    = rotAxis(q, vec3(0.0, 1.0, 0.0), sin(lat) * 1.6 + time * 0.01);
  float veil = fbm5(w * detail * 1.8);
  float fine = fbm4(w * detail * 5.0);
  float t    = clamp(0.5 + (veil - 0.5) * (1.0 + contrast * 2.0)
                         + (fine - 0.5) * 0.35, 0.0, 1.0);
  return mix(colB, colA, t);
}

/**
 * Солнце: гранулы, пятна и потемнение к лимбу.
 *
 * Значения нарочно выходят далеко за единицу — диск обязан пересветить
 * фон и утащить за собой bloom, иначе звезда выглядит жёлтым кругом.
 */
vec3 sunSurface(vec3 q, vec3 n, vec3 rd, float time, vec3 colA, vec3 colB,
                float detail){
  float gran = fbm4(q * detail * 3.2 + vec3(0.0, time * 0.05, 0.0));
  float fine = fbm4(q * detail * 9.0 - time * 0.03);
  float t    = clamp(0.35 + 0.75 * gran + 0.25 * fine, 0.0, 1.0);

  vec3 col = mix(colA, colB, smoothstep(0.35, 0.9, t));

  // Пятна: холодные области, где конвекция придавлена полем
  float spot = smoothstep(0.60, 0.74, fbm3(q * 2.6 + 5.0));
  col *= 1.0 - 0.66 * spot;

  // Край диска темнее центра: луч зрения уходит в более холодные слои
  float limb = pow(clamp(dot(n, -rd), 0.0, 1.0), 0.42);

  // Яркость подобрана под тональную компрессию: выше — и диск схлопывается
  // в ровный белый круг, на котором не видно ни гранул, ни пятен
  return col * (0.85 + 1.55 * t * t) * (0.42 + 0.58 * limb);
}

/**
 * Цвет и сила атмосферного ободка по стилю поверхности. У голого камня
 * ободка нет вовсе — это и отличает Меркурий от всех остальных.
 */
vec3 atmoTint(int style, vec3 colA){
  if (style == S_EARTH) return vec3(0.32, 0.58, 1.00);
  if (style == S_GAS)   return vec3(1.00, 0.82, 0.58);
  if (style == S_ICE)   return vec3(0.48, 0.78, 1.00);
  if (style == S_CLOUD) return vec3(1.00, 0.86, 0.60);
  return colA;
}

float atmoGain(int style){
  if (style == S_EARTH) return 1.15;
  if (style == S_GAS)   return 0.55;
  if (style == S_ICE)   return 0.85;
  if (style == S_CLOUD) return 0.75;
  return 0.06;
}

/**
 * Полный цвет точки на теле.
 *
 * lightMask гасит прямой свет там, где точку накрыла тень колец: считать
 * её умеет только сцена, знающая про кольцевую плоскость, поэтому она
 * приходит снаружи готовым числом.
 */
vec3 shadeBody(vec3 p, vec3 n, vec3 rd, vec3 center, vec3 colA, vec3 colB,
               vec4 surf, vec4 axisSpin, float lightMask, float time){
  int   style    = int(surf.w + 0.5);
  float detail   = surf.x;
  float contrast = surf.y;
  float extra    = surf.z;

  vec3  axis = normalize(axisSpin.xyz);
  // Собственная система тела: нормаль откручивается назад на угол вращения
  vec3  q    = rotAxis(n, axis, -axisSpin.w);
  float lat  = asin(clamp(dot(q, axis), -1.0, 1.0));

  vec3  e1  = normalize(cross(axis, vec3(0.0, 0.0, 1.0)));
  vec3  e2  = cross(axis, e1);
  float lon = atan(dot(q, e2), dot(q, e1));

  if (style == S_SUN) return sunSurface(q, n, rd, time, colA, colB, detail);

  float water = 0.0, clouds = 0.0;
  vec3  alb;
  if (style == S_ROCK){
    alb = rockAlbedo(q, lat, colA, colB, detail, contrast, extra);
  } else if (style == S_GAS){
    alb = gasAlbedo(q, lat, lon, time, colA, colB, detail, contrast, extra);
  } else if (style == S_EARTH){
    alb = earthAlbedo(q, lat, time, colA, colB, detail, extra, water, clouds);
  } else if (style == S_ICE){
    alb = iceAlbedo(q, lat, colA, colB, detail, contrast, extra);
  } else {
    alb = cloudAlbedo(q, lat, time, colA, colB, detail, contrast);
  }

  // Свет идёт из начала координат: там Солнце и больше ничего
  vec3  toSun = -p;
  float dist  = length(toSun);
  vec3  L     = toSun / max(dist, 0.001);

  float ndl  = dot(n, L);
  float diff = smoothstep(-0.07, 0.42, ndl) * lightMask;
  float att  = sunFalloff(dist);

  vec3 col = alb * diff * att;
  // Ночная сторона не проваливается в абсолютный ноль
  col += alb * 0.018;

  // Блик: гладкая вода и метановая дымка, но не пыль и не камень
  float shine = (style == S_EARTH) ? water * 0.75 * (1.0 - clouds)
              : (style == S_ICE)   ? 0.22
              : 0.0;
  if (shine > 0.0){
    vec3  h    = normalize(L - rd);
    float spec = pow(clamp(dot(n, h), 0.0, 1.0), 44.0);
    col += vec3(1.0, 0.97, 0.9) * spec * shine * diff * att;
  }

  // Огни городов: только суша, только ночь и только сквозь разрывы облаков
  if (style == S_EARTH){
    float night = smoothstep(0.06, -0.22, ndl);
    float grid  = smoothstep(0.55, 0.78, fbm4(q * 26.0));
    col += vec3(1.0, 0.74, 0.38) * (1.0 - water) * (1.0 - clouds)
         * night * grid * 0.16;
  }

  // Атмосферный ободок: тем ярче, чем ближе край диска и чем он освещённее
  float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), 3.2);
  float rim  = fres * smoothstep(-0.35, 0.55, ndl) * atmoGain(style);
  col += atmoTint(style, colA) * rim * att * 0.55;

  return col;
}
`;
