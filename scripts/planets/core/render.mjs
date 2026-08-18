/**
 * Рендер кадров и сборка GIF.
 *
 * Отрисовка точки повторяет вершинный шейдер сайта (POINTS_VERTEX в
 * Halftone.tsx): узлы тусклее 0.035 не рисуются вовсе, радиус равен
 * maxRadius * v^0.8, золото достаётся самым ярким узлам по тому же hash.
 *
 * Единственное сознательное расхождение — дрожание точек. На сайте его фаза
 * привязана к абсолютному времени, здесь — к фазе петли, иначе последний кадр
 * GIF не сходился бы с первым.
 */

import { createCanvas } from "@napi-rs/canvas";
// gifenc собран как CommonJS без карты exports: именованный импорт Node не видит
import gifenc from "gifenc";
import { computeGeometry } from "./geometry.mjs";
import { hash, TAU } from "./math.mjs";

const { GIFEncoder, applyPalette } = gifenc;

export const VOID = [3, 5, 10];
export const INK = [232, 237, 244];
export const GOLD = [217, 164, 65];

/** Ступеней в растяжках void→ink и void→gold */
const INK_STEPS = 24;
const GOLD_STEPS = 8;

/**
 * Палитра фиксированная, а не подобранная quantize по кадру.
 *
 * Точка внутри всегда сплошного цвета, оттенки нужны только сглаженному краю,
 * поэтому 32 ступеней хватает с запасом, а короткая палитра заметно улучшает
 * сжатие. Последний индекс не цвет, а метка «пиксель не изменился»: им
 * заполняются дельта-кадры.
 */
export function buildPalette() {
  const colors = [];
  const ramp = (to, steps) => {
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      colors.push([
        Math.round(VOID[0] + (to[0] - VOID[0]) * t),
        Math.round(VOID[1] + (to[1] - VOID[1]) * t),
        Math.round(VOID[2] + (to[2] - VOID[2]) * t),
      ]);
    }
  };
  ramp(INK, INK_STEPS);
  ramp(GOLD, GOLD_STEPS);

  return {
    /** По этим цветам раскладываются пиксели кадра */
    colors,
    /** Эта палитра уходит в файл: тот же набор плюс слот прозрачности */
    table: [...colors, [255, 0, 255]],
    transparentIndex: colors.length,
  };
}

const rgb = ([r, g, b]) => `rgb(${r},${g},${b})`;

/**
 * Считает один кадр планеты в холст.
 *
 * @param t фаза петли 0..1
 */
export function drawFrame(ctx, geom, field, accent, t, jitter = true) {
  const { cols, rows, step, offsetX, offsetY, maxRadius, size } = geom;

  ctx.fillStyle = rgb(VOID);
  ctx.fillRect(0, 0, size, size);

  // Точки одного цвета собираются в один путь: заливка на несколько тысяч
  // arc'ов заметно дороже, если переключать fillStyle на каждой
  ctx.beginPath();
  const goldDots = [];
  const wave = TAU * t;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const v = field(x, y, t);
      if (!(v >= 0.035)) continue;

      const r = maxRadius * Math.pow(Math.min(v, 1), 0.8);
      const px = offsetX + x * step + (jitter ? Math.sin(y * 0.28 + wave) * 0.7 : 0);
      const py = offsetY + y * step + (jitter ? Math.cos(x * 0.24 + wave) * 0.7 : 0);
      // Узлы живут в системе с Y вверх, холст — с Y вниз
      const screenY = size - py;

      if (v > 0.93 && accent > 0.15 && hash(x, y, 7) < accent) {
        goldDots.push(px, screenY, r);
        continue;
      }

      ctx.moveTo(px + r, screenY);
      ctx.arc(px, screenY, r, 0, TAU);
    }
  }

  ctx.fillStyle = rgb(INK);
  ctx.fill();

  if (goldDots.length) {
    ctx.beginPath();
    for (let i = 0; i < goldDots.length; i += 3) {
      const r = goldDots[i + 2];
      ctx.moveTo(goldDots[i] + r, goldDots[i + 1]);
      ctx.arc(goldDots[i], goldDots[i + 1], r, 0, TAU);
    }
    ctx.fillStyle = rgb(GOLD);
    ctx.fill();
  }
}

/**
 * Рендерит планету в GIF-байты.
 *
 * Кадры пишутся разностью: пиксель, не изменившийся с прошлого кадра,
 * получает прозрачный индекс и остаётся от предыдущего кадра (dispose: 1).
 * Пустой фон вокруг планеты перестаёт кодироваться заново каждые 50 мс, и
 * файл худеет примерно на треть.
 *
 * @param planet модуль планеты: { id, accent, create(geom) }
 */
export function renderPlanet(planet, { size, step, fps, seconds, jitter = true }) {
  const geom = computeGeometry({ size, step });
  const { field } = planet.create(geom);

  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  const frames = Math.round(fps * seconds);
  const delay = Math.round(1000 / fps);
  const { colors, table, transparentIndex } = buildPalette();
  const gif = GIFEncoder();

  let previous = null;

  for (let f = 0; f < frames; f++) {
    drawFrame(ctx, geom, field, planet.accent, f / frames, jitter);

    const { data } = ctx.getImageData(0, 0, size, size);
    const index = applyPalette(data, colors, "rgb565");

    if (previous) {
      const delta = index.slice();
      for (let i = 0; i < delta.length; i++) {
        if (delta[i] === previous[i]) delta[i] = transparentIndex;
      }
      gif.writeFrame(delta, size, size, {
        delay,
        transparent: true,
        transparentIndex,
        dispose: 1,
      });
    } else {
      // Палитра пишется только с первым кадром и становится глобальной
      gif.writeFrame(index, size, size, { palette: table, delay, repeat: 0, dispose: 1 });
    }

    previous = index;
  }

  gif.finish();
  return { bytes: gif.bytes(), frames, geom };
}
