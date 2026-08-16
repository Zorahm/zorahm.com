/**
 * Механика кадров: как позиция скролла превращается в «какие две фигуры сейчас
 * на экране, насколько они смешаны и насколько каждая успела собраться».
 *
 * Здесь нет ни DOM, ни WebGL, ни времени — только чистые функции, поэтому
 * поведение проверяется юнит-тестами напрямую.
 */

export const clamp = (v: number, min: number, max: number) =>
  v < min ? min : v > max ? max : v;

/** Классический smoothstep: плавный старт и плавный финиш на отрезке 0..1 */
export const smoothstep = (t: number) => {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
};

/**
 * Экспоненциальное сглаживание, независимое от частоты кадров.
 *
 * В исходнике было `pos += (target - pos) * 0.12` — то есть 12% за кадр.
 * На мониторе 120 Гц это давало вдвое более резкую доводку, чем на 60 Гц.
 * Здесь коэффициент пересчитывается по реальному dt, а 0.12 сохраняет
 * прежнее ощущение ровно на 60 Гц.
 */
export const damp = (current: number, target: number, perFrame: number, dt: number) => {
  const factor = 1 - Math.pow(1 - perFrame, dt * 60);
  return current + (target - current) * factor;
};

export type SectionBox = { top: number; height: number };

/**
 * Дробная позиция по кадрам: 0 — первый кадр целиком, 2.5 — середина третьего.
 * Опорная точка — середина вьюпорта, как в исходнике.
 */
export function measureStage(
  scrollY: number,
  viewportHeight: number,
  sections: readonly SectionBox[],
): number {
  if (sections.length === 0) return 0;

  const y = scrollY + viewportHeight * 0.5;
  for (let i = 0; i < sections.length; i++) {
    const { top, height } = sections[i];
    if (y < top + height || i === sections.length - 1) {
      // height может быть нулём, пока секция не смонтирована
      const progress = height > 0 ? (y - top) / height : 0;
      return i + clamp(progress, 0, 1);
    }
  }
  return 0;
}

export type StageState = {
  /** Индекс текущей фигуры */
  indexA: number;
  /** Индекс следующей; равен indexA на последнем кадре */
  indexB: number;
  /** 0 — видна только A, 1 — только B */
  blend: number;
  /** Насколько фигура A «собралась и ожила», 0..1 */
  settleA: number;
  /** То же для B */
  settleB: number;
  /** Итоговая доля золотых точек */
  accent: number;
};

/**
 * Порог 0.55 и ширина 0.34 держат фигуру собранной больше половины секции,
 * а 0.14 — это короткая фаза «дорисовки» сразу после прихода. Значения взяты
 * из исходника без изменений: на них настроено ощущение всей страницы.
 */
export function resolveStage(
  stagePos: number,
  intro: number,
  accents: readonly number[],
): StageState {
  const count = accents.length;
  if (count === 0) {
    return { indexA: 0, indexB: 0, blend: 0, settleA: 0, settleB: 0, accent: 0 };
  }

  const indexA = clamp(Math.floor(stagePos), 0, count - 1);
  const indexB = Math.min(indexA + 1, count - 1);
  const frac = stagePos - indexA;

  const born = smoothstep(frac / 0.14);
  const transitioning = indexB !== indexA;

  // Обнуляем до того, как blend пойдёт в settle. В исходнике порядок был
  // обратный, и на последнем кадре — где переходить уже некуда — фигура
  // всё равно теряла settle: доскроллив страницу до конца, знак Z\M
  // переставал жить, хотя ничто его не сменяло.
  const blend = transitioning ? smoothstep((frac - 0.55) / 0.34) : 0;

  return {
    indexA,
    indexB,
    blend,
    settleA: Math.min(born, 1 - blend) * intro,
    // Приходящая фигура живёт вполсилы, пока не займёт экран целиком
    settleB: transitioning ? blend * 0.6 * intro : 0,
    accent:
      accents[indexA] +
      (accents[indexB] - accents[indexA]) * (transitioning ? blend : 0),
  };
}
