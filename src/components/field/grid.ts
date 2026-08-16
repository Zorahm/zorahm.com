/**
 * Геометрия halftone-сетки. Чистая функция от размеров вьюпорта, поэтому
 * проверяется тестами без браузера.
 */

/** Потолок числа точек: выше начинает страдать даже GPU на слабых машинах */
const MAX_POINTS = 13000;

export type Grid = {
  /** Шаг сетки в пикселях */
  step: number;
  cols: number;
  rows: number;
  /** Отступ первого узла от края, центрирует сетку */
  offsetX: number;
  offsetY: number;
  /** Максимальный радиус точки */
  maxRadius: number;
  /** Центр сетки в узлах */
  centerX: number;
  centerY: number;
  /** Опорный масштаб фигуры в узлах */
  scale: number;
};

export function computeGrid(width: number, height: number): Grid {
  const w = Math.max(width, 1);
  const h = Math.max(height, 1);

  let step = w < 620 ? 12 : w < 1100 ? 13 : 15;
  let cols = Math.floor(w / step) + 1;
  let rows = Math.floor(h / step) + 1;

  while (cols * rows > MAX_POINTS) {
    step += 1;
    cols = Math.floor(w / step) + 1;
    rows = Math.floor(h / step) + 1;
  }

  return {
    step,
    cols,
    rows,
    offsetX: (w - (cols - 1) * step) / 2,
    offsetY: (h - (rows - 1) * step) / 2,
    maxRadius: step * 0.44,
    centerX: (cols - 1) / 2,
    centerY: (rows - 1) / 2,
    scale: Math.min(cols, rows) * 0.5,
  };
}
