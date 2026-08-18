/**
 * Геометрия halftone-сетки для квадратного кадра GIF.
 *
 * Отличие от src/components/field/grid.ts в опорном масштабе. Там scale —
 * половина короткой стороны, потому что фигура живёт во весь экран. Здесь
 * scale — это радиус вписанного круга за вычетом поля под точку: всё, что
 * планета рисует в пределах 1.0 * scale, гарантированно попадает в кадр.
 * Дальше каждая планета раскладывает свои радиусы в долях от него, поэтому
 * восемь кадров получаются одного роста.
 */

export function computeGeometry({ size, step, margin = 1.5 }) {
  const cols = Math.floor(size / step) + 1;
  const rows = Math.floor(size / step) + 1;

  return {
    size,
    step,
    cols,
    rows,
    offsetX: (size - (cols - 1) * step) / 2,
    offsetY: (size - (rows - 1) * step) / 2,
    maxRadius: step * 0.44,
    centerX: (cols - 1) / 2,
    centerY: (rows - 1) / 2,
    scale: Math.min(cols, rows) / 2 - margin,
  };
}
