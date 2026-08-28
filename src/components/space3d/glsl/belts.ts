/**
 * Пояса мелких тел: астероидный за Марсом и Койпера за Нептуном.
 *
 * Плоским кольцом такое рисовать нельзя: с ребра оно схлопнулось бы в линию,
 * а у настоящих поясов есть толщина, и при облёте это видно. Поэтому луч
 * проходит сквозь слой несколькими отсчётами и набирает плотность по
 * трёхмерной решётке — в каждой занятой ячейке лежит один камень.
 *
 * Отсчёты берутся только на том отрезке луча, который вообще попал в слой,
 * так что для большей части кадра пояс не стоит ничего.
 */
export const BELTS = /* glsl */ `
/** x — внутренний радиус, y — внешний, z — полутолщина, w — доля занятых ячеек */
uniform vec4 uBelt[BELT_SETS];
/** rgb — цвет вещества, a — размер ячейки решётки */
uniform vec4 uBeltLook[BELT_SETS];

/**
 * Камень в ячейке решётки. Порог по первому числу хеша оставляет занятой
 * лишь часть ячеек — иначе пояс превратился бы в сплошную пыльную стену.
 */
float beltRock(vec3 p, float cell, float thresh, float grow){
  vec3  q  = p / cell;
  vec3  id = floor(q);
  vec3  h  = hash33(id);
  if (h.x > thresh) return 0.0;

  vec3  f   = fract(q) - 0.5;
  vec3  off = (hash33(id + 7.3) - 0.5) * 0.72;
  float d   = length(f - off);

  return smoothstep(grow, grow * 0.2, d) * (0.35 + 0.65 * h.y);
}

/**
 * Свет, набранный поясами вдоль луча. tMax обрезает путь по ближайшему телу:
 * камни за планетой видны быть не должны.
 */
vec3 beltLight(vec3 ro, vec3 rd, float tMax, float time){
  vec3 sum = vec3(0.0);

  for (int b = 0; b < BELT_SETS; b++){
    float inner = uBelt[b].x;
    float outer = uBelt[b].y;
    float halfH = uBelt[b].z;
    if (outer <= 0.0) continue;

    // Отрезок луча внутри слоя |y| < halfH
    float t0 = 0.0;
    float t1 = tMax;
    if (abs(rd.y) < 1e-4){
      if (abs(ro.y) > halfH) continue;   // луч идёт вдоль слоя мимо него
    } else {
      float ta = (-halfH - ro.y) / rd.y;
      float tb = ( halfH - ro.y) / rd.y;
      t0 = max(min(ta, tb), 0.0);
      t1 = min(max(ta, tb), tMax);
    }
    if (t1 <= t0) continue;

    // Взгляд вдоль плоскости тянет отрезок через весь пояс насквозь;
    // дальше поперечника набирать нечего
    t1 = min(t1, t0 + outer * 1.7);

    float span = (t1 - t0) / float(BELT_STEPS);
    // Сдвиг отсчётов по пикселю размывает ступеньки. Он постоянный во
    // времени: дрожащий каждый кадр шум читался бы как рябь
    float jit  = hash31(vec3(gl_FragCoord.xy, 3.7));
    float cell = uBeltLook[b].a;
    float dens = 0.0;

    for (int i = 0; i < BELT_STEPS; i++){
      float t = t0 + (float(i) + jit) * span;
      vec3  p = ro + rd * t;
      float r = length(p.xz);
      if (r < inner || r > outer) continue;

      // Кеплерова закрутка: внутренний край обгоняет внешний, ровно как
      // планеты. Решётка неподвижна, вращается точка запроса
      float a = -time * 6.0 * pow(r, -1.5);
      float c = cos(a), s = sin(a);
      vec3  q = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);

      // Камни редеют к обоим краям кольца и к границам слоя
      float width = outer - inner;
      float edge  = smoothstep(inner, inner + width * 0.25, r)
                  * (1.0 - smoothstep(outer - width * 0.3, outer, r));
      float lift  = 1.0 - smoothstep(0.0, halfH, abs(p.y));

      // Камень не мельчает на экране бесконечно: ниже пикселя пояс начал бы
      // мерцать при малейшем повороте камеры
      float grow = clamp(t * 0.0016 / cell, 0.12, 0.45);

      dens += beltRock(q, cell, uBelt[b].w, grow) * edge * lift * span;
    }

    if (dens <= 0.0) continue;

    // Освещённость берётся по середине пояса: разброс внутри него мал
    // рядом с разницей между поясами
    sum += uBeltLook[b].rgb * dens * 2.4 * sunFalloff(0.5 * (inner + outer));
  }

  return sum;
}
`;
