import type { AnyShapeId } from "@/content";
import type { Grid } from "../grid";

/**
 * Семейство заголовочного шрифта для Canvas2D.
 *
 * next/font подставляет сгенерированное имя вида `__Unbounded_a1b2c3`, поэтому
 * задать шрифт литералом («Unbounded») нельзя — canvas молча возьмёт фолбэк.
 * Настоящее имя лежит в CSS-переменной, которую ставит layout.
 */
export function displayFamily(): string {
  const name = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-display")
    .trim();
  return name ? `${name}, "Arial Black", sans-serif` : '"Arial Black", sans-serif';
}

/**
 * Запечённые фигуры рисуются в разрешении выше сеточного, чтобы поворот и
 * масштабирование UV не мылили результат. Исходник рисовал ровно в cols×rows.
 */
export const BAKE_SCALE = 3;

export type BakeContext = {
  ctx: CanvasRenderingContext2D;
  /** Размер холста в пикселях */
  width: number;
  height: number;
  /** Центр и масштаб в тех же единицах, что и холст */
  centerX: number;
  centerY: number;
  scale: number;
  grid: Grid;
};

export type Shape = {
  id: AnyShapeId;
  /**
   * Тело фрагментного шейдера. Обязано определить
   *   float field(vec2 node)
   * возвращающую яркость 0..1 в координатах узлов сетки.
   */
  glsl: string;
  /**
   * Только для запечённых фигур: рисует статическую основу один раз при
   * изменении размеров. Динамика добавляется поверх в шейдере.
   */
  bake?: (c: BakeContext) => void;
};

/**
 * Общий пролог. Подставляется перед телом каждой фигуры.
 *
 * hash повторяет функцию из исходника один в один: на ней держится
 * распределение золотых точек, обломков в кольцах и сигналов по связям.
 */
export const SHAPE_PROLOGUE = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uSettle;
uniform vec2  uGrid;
uniform vec2  uCenter;
uniform float uScale;
uniform vec2  uPointer;
uniform sampler2D uBaked;

out vec4 pc_fragColor;

const float PI = 3.141592653589793;

float hash(float x, float y, float z){
  float n = sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - floor(n);
}

/** Расстояние до отрезка */
float segDist(vec2 p, vec2 a, vec2 b){
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * h);
}

/** Приближённое расстояние до контура эллипса с полуосями r */
float ellipseEdge(vec2 p, vec2 r){
  r = max(r, vec2(1e-4));
  float k = length(p / r);
  return abs(k - 1.0) * min(r.x, r.y);
}

/** Линия толщиной w со сглаженным краем */
float stroke(float dist, float w){
  return 1.0 - smoothstep(w * 0.5, w * 0.5 + 0.75, dist);
}

/** Мягкое пятно радиуса r с линейным спадом — аналог радиального градиента */
float dot2(vec2 p, vec2 c, float r){
  return max(0.0, 1.0 - length(p - c) / max(r, 1e-4));
}

/** Сэмпл запечённой текстуры по координате узла */
float baked(vec2 node){
  return texture(uBaked, node / uGrid).r;
}

/** Сэмпл запечённой текстуры с поворотом и масштабом вокруг центра сетки */
float bakedTransformed(vec2 node, float angle, float zoom){
  vec2 p = node - uCenter;
  float s = sin(angle), c = cos(angle);
  p = vec2(p.x * c - p.y * s, p.x * s + p.y * c) / max(zoom, 1e-4);
  return texture(uBaked, (p + uCenter) / uGrid).r;
}
`;

export const SHAPE_EPILOGUE = /* glsl */ `
void main(){
  // gl_FragCoord даёт центр пикселя, узлы сетки — целые
  float v = field(gl_FragCoord.xy - 0.5);
  pc_fragColor = vec4(clamp(v, 0.0, 1.0), 0.0, 0.0, 1.0);
}
`;

export const buildShapeShader = (body: string) =>
  `${SHAPE_PROLOGUE}\n${body}\n${SHAPE_EPILOGUE}`;
