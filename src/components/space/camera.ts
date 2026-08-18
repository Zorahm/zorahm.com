"use client";

import { create } from "zustand";
import type { Grid } from "@/components/field/grid";
import {
  MAX_INCLINATION,
  MAX_ZOOM,
  MIN_INCLINATION,
  MIN_ZOOM,
  clamp,
  pickBody,
  type Placement,
} from "./mechanics";

/**
 * Состояние сцены /space. Разделение по температуре данных — то же, что
 * в lib/scroll.ts: положение камеры меняется каждый кадр и живёт в обычном
 * мутируемом объекте, который WebGL читает напрямую; выбранное тело меняется
 * редко, им заведует zustand, и на него подписан текст страницы.
 *
 * Раскладка тел кладётся сюда же после каждого кадра: по ней страница
 * понимает, во что попал клик. Считать её второй раз в обработчике нельзя —
 * тела успевают уехать, и клик промахивался бы мимо нарисованной точки.
 */
export const spaceState = {
  /** Куда камера едет */
  targetAzimuth: 0,
  targetInclination: 0.62,
  targetZoom: 1,

  /** Где камера сейчас */
  azimuth: 0,
  inclination: 0.62,
  zoom: 1,

  /** 0 — обзор системы, 1 — тело раскрыто на весь экран */
  focus: 0,
  /** Индекс выбранного тела или -1 */
  focusIndex: -1,
  /**
   * Тело, к которому привязана камера. От выбранного отличается временем
   * жизни: выбор снимается мгновенно, а якорь держится, пока камера не
   * вернётся к обзору. Без этого разделения тело пропадало бы рывком
   * в тот же кадр, когда его закрыли.
   */
  anchorIndex: -1,
  /** Индекс тела под курсором или -1 */
  hover: -1,

  /** Плавное появление всей сцены после загрузки, 0..1 */
  intro: 0,

  pointerX: -9999,
  pointerY: -9999,
  pointerActive: false,

  /** Последняя раскладка тел и сетка, в которой она посчитана */
  placements: [] as Placement[],
  grid: null as Grid | null,
  viewHeight: 0,
};

type SpaceStore = {
  /** Индекс выбранного тела или -1 */
  selected: number;
};

export const useSpaceStore = create<SpaceStore>(() => ({ selected: -1 }));

/** Выбрать тело; -1 возвращает к обзору системы */
export function selectBody(index: number) {
  if (spaceState.focusIndex === index) return;

  // Переход с тела на тело: камера отступает и заходит заново, иначе одна
  // планета сменяла бы другую подменой картинки, без всякого перелёта
  if (index >= 0 && spaceState.focusIndex >= 0) {
    spaceState.focus = Math.min(spaceState.focus, 0.12);
  }

  spaceState.focusIndex = index;
  if (index >= 0) spaceState.anchorIndex = index;
  useSpaceStore.setState({ selected: index });
}

/**
 * Прилететь с главной страницы.
 *
 * Кадр «Сатурн» на главной ныряется целиком, и сцена обязана открыться там же,
 * где он оборвался: тело раскрыто на весь экран, камера тут же начинает
 * отъезжать и показывает всю систему. Выбранным тело при этом не считается —
 * карточка не открывается, читать никто не просил.
 */
export function arriveAt(index: number) {
  spaceState.focus = 1;
  spaceState.anchorIndex = index;
  spaceState.focusIndex = -1;
  spaceState.intro = 0;
  useSpaceStore.setState({ selected: -1 });
}

/**
 * Вернуть сцену в исходное положение.
 *
 * Состояние живёт в модуле и переживает уход со страницы — как scrollState
 * на главной. Ленте кадров это на пользу, а здесь наоборот: вернувшись,
 * ожидаешь увидеть систему целиком, а не тот же Нептун во весь экран.
 */
export function resetSpace() {
  spaceState.targetAzimuth = 0;
  spaceState.azimuth = 0;
  spaceState.targetInclination = 0.62;
  spaceState.inclination = 0.62;
  spaceState.targetZoom = 1;
  spaceState.zoom = 1;
  spaceState.focus = 0;
  spaceState.focusIndex = -1;
  spaceState.anchorIndex = -1;
  spaceState.hover = -1;
  spaceState.intro = 0;
  spaceState.placements = [];
  useSpaceStore.setState({ selected: -1 });
}

/** Повернуть систему. Значения — в пикселях перетаскивания. */
export function turnCamera(dx: number, dy: number, size: number) {
  spaceState.targetAzimuth -= (dx / size) * Math.PI * 2;
  spaceState.targetInclination = clamp(
    spaceState.targetInclination + (dy / size) * Math.PI,
    MIN_INCLINATION,
    MAX_INCLINATION,
  );
}

export function zoomCamera(factor: number) {
  spaceState.targetZoom = clamp(
    spaceState.targetZoom * factor,
    MIN_ZOOM,
    MAX_ZOOM,
  );
}

/** Экранные координаты → узлы сетки. Y в поле растёт вверх, на экране вниз. */
function toNode(clientX: number, clientY: number, grid: Grid, height: number) {
  return {
    x: (clientX - grid.offsetX) / grid.step,
    y: (height - clientY - grid.offsetY) / grid.step,
  };
}

/** Тело под указанной точкой экрана или -1 */
export function bodyAt(clientX: number, clientY: number): number {
  const { grid, placements, viewHeight } = spaceState;
  if (!grid || placements.length === 0) return -1;
  const node = toNode(clientX, clientY, grid, viewHeight);
  return pickBody(placements, node.x, node.y, grid.step);
}
