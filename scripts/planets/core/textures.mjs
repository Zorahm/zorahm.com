/**
 * Две текстуры, которыми пользуются планеты.
 *
 * BakeSurface — точный аналог запечённого холста с сайта: Canvas2D рисует
 * основу один раз, поле сэмплит её билинейно. Читается канал R, как в GLSL:
 * getImageData возвращает непремультиплицированный цвет, ровно то же, что
 * видит texture(uBaked, ...) в браузере.
 *
 * EquirectMap — карта планеты в координатах (долгота, широта). Её на сайте
 * нет: она нужна, чтобы поверхность вращалась по-настоящему, со сжатием у
 * лимба, а не ползла по плоскому диску.
 */

import { createCanvas } from "@napi-rs/canvas";
import { clamp, TAU } from "./math.mjs";

/** Запечённые фигуры рисуются мельче сетки, чтобы края не мылились */
export const BAKE_SCALE = 3;

/**
 * @param geom  сетка из computeGeometry
 * @param draw  (ctx, box) — рисует в пикселях холста, Y вниз, как в Canvas2D
 */
export function createBakeSurface(geom, draw) {
  const width = geom.cols * BAKE_SCALE;
  const height = geom.rows * BAKE_SCALE;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  draw(ctx, {
    width,
    height,
    centerX: geom.centerX * BAKE_SCALE,
    centerY: geom.centerY * BAKE_SCALE,
    scale: geom.scale * BAKE_SCALE,
  });

  const rgba = ctx.getImageData(0, 0, width, height).data;
  const lum = new Float32Array(width * height);
  for (let i = 0, p = 0; i < lum.length; i++, p += 4) lum[i] = rgba[p] / 255;

  const texel = (x, y) => {
    const cx = clamp(x, 0, width - 1) | 0;
    const cy = clamp(y, 0, height - 1) | 0;
    return lum[cy * width + cx];
  };

  /**
   * Сэмпл по координате узла. Y узлов растёт вверх, Y холста — вниз,
   * поэтому строка зеркалится: на сайте тот же переворот делает flipY
   * у CanvasTexture, и без него вся картинка встала бы на голову.
   */
  const sample = (nodeX, nodeY) => {
    const tx = (nodeX / geom.cols) * width - 0.5;
    const ty = (1 - nodeY / geom.rows) * height - 0.5;
    const x0 = Math.floor(tx);
    const y0 = Math.floor(ty);
    const fx = tx - x0;
    const fy = ty - y0;
    const a = texel(x0, y0);
    const b = texel(x0 + 1, y0);
    const c = texel(x0, y0 + 1);
    const d = texel(x0 + 1, y0 + 1);
    return (a + (b - a) * fx) * (1 - fy) + (c + (d - c) * fx) * fy;
  };

  /** Сэмпл с поворотом и масштабом вокруг центра сетки — аналог bakedTransformed */
  const sampleTransformed = (nodeX, nodeY, angle, zoom = 1) => {
    const px = nodeX - geom.centerX;
    const py = nodeY - geom.centerY;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const z = Math.max(zoom, 1e-4);
    return sample(
      (px * c - py * s) / z + geom.centerX,
      (px * s + py * c) / z + geom.centerY,
    );
  };

  return { sample, sampleTransformed, canvas };
}

/**
 * Карта планеты. draw рисует в прямоугольнике width×height, где X — долгота
 * от -180° до 180°, Y — широта от +90° (сверху) до -90°.
 *
 * @param draw (ctx, box) — box несёт хелперы перевода градусов в пиксели
 */
export function createEquirectMap(width, height, draw) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  draw(ctx, {
    width,
    height,
    /** Долгота в градусах → X в пикселях */
    lonX: (deg) => ((deg + 180) / 360) * width,
    /** Широта в градусах → Y в пикселях */
    latY: (deg) => ((90 - deg) / 180) * height,
    /** Сколько пикселей в одном градусе */
    degX: width / 360,
    degY: height / 180,
  });

  const rgba = ctx.getImageData(0, 0, width, height).data;
  const lum = new Float32Array(width * height);
  for (let i = 0, p = 0; i < lum.length; i++, p += 4) lum[i] = rgba[p] / 255;

  const texel = (x, y) => {
    // По долготе карта замкнута, по широте — обрезается на полюсах
    const cx = ((x % width) + width) % width;
    const cy = clamp(y, 0, height - 1) | 0;
    return lum[cy * width + cx];
  };

  /**
   * @param lon радианы, -π..π (сэмпл сам заворачивает)
   * @param lat радианы, -π/2..π/2
   */
  return (lon, lat) => {
    // Долгота 0 — середина карты, поэтому +0.5; fract заворачивает вращение
    const u = lon / TAU + 0.5;
    const tx = (u - Math.floor(u)) * width - 0.5;
    const ty = (0.5 - lat / Math.PI) * height - 0.5;
    const x0 = Math.floor(tx);
    const y0 = Math.floor(ty);
    const fx = tx - x0;
    const fy = ty - y0;
    const a = texel(x0, y0);
    const b = texel(x0 + 1, y0);
    const c = texel(x0, y0 + 1);
    const d = texel(x0 + 1, y0 + 1);
    return (a + (b - a) * fx) * (1 - fy) + (c + (d - c) * fx) * fy;
  };
}
