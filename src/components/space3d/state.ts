"use client";

import { create } from "zustand";
import {
  MAX_DIST,
  MAX_PHI,
  MIN_DIST,
  MIN_PHI,
  OVERVIEW_DIST,
  cameraBasis,
  clamp,
  framingDist,
  pickBody,
  screenRay,
  systemPositions,
  type Camera3D,
} from "./orbit";
import { SYSTEM_3D, type Vec3 } from "./system";

/**
 * Состояние трассированной сцены.
 *
 * Разделение по температуре данных — то же, что у точечной сцены и у скролла
 * главной: камера меняется каждый кадр и живёт в обычном мутируемом объекте,
 * который читает рендер; выбранное тело и параметры панели меняются редко,
 * ими заведует zustand, и на них подписан интерфейс.
 *
 * Раскладка тел кладётся сюда же после каждого шага: по ней считается
 * попадание кликом. Пересчитывать её в обработчике нельзя — планеты успевают
 * уехать, и клик расходился бы с картинкой.
 */

/** Поле зрения камеры по вертикали, радианы */
export const FOV = (48 * Math.PI) / 180;

/** Пределы ручного приближения относительно опорного удаления */
const MIN_ZOOM = 0.32;
const MAX_ZOOM = 3.2;

const ORIGIN: Vec3 = [0, 0, 0];

export const view3d = {
  /** Куда камера едет */
  theta: 0.9,
  phi: 0.42,
  /** Ручное приближение: больше единицы — ближе к цели */
  zoom: 1,

  /** Инерция после броска */
  vTheta: 0,
  vPhi: 0,
  /** Путь указателя за кадр — из него получается инерция при отпускании */
  pendX: 0,
  pendY: 0,
  dragging: false,

  /** Где камера сейчас */
  dist: OVERVIEW_DIST,
  target: [0, 0, 0] as Vec3,

  /** 0 — обзор системы, 1 — выбранное тело в кадре */
  focus: 0,
  /** Индекс выбранного тела или -1 */
  focusIndex: -1,
  /**
   * Тело, к которому привязана камера. От выбранного отличается временем
   * жизни: выбор снимается мгновенно, а якорь держится, пока камера не
   * вернётся к обзору — иначе планета выпрыгивала бы из кадра рывком.
   */
  anchorIndex: -1,
  /** Тело под курсором или -1 */
  hover: -1,

  /** Время сцены: идёт со скоростью, заданной панелью */
  time: 0,
  /** Плавное появление после загрузки, 0..1 */
  intro: 0,
  /** Сколько секунд никто не трогал камеру */
  idle: 0,

  /**
   * Подъём картинки в кадре в долях высоты. Нужен только на узком экране:
   * там карточка тела занимает низ, и без сдвига планета пряталась бы за ней.
   */
  shift: 0,

  /** Последняя раскладка тел и размер холста, в котором она посчитана */
  positions: [] as Vec3[],
  width: 0,
  height: 0,
};

/** Ширина, ниже которой карточка тела разворачивается на весь низ экрана */
const NARROW = 820;

/** Насколько поднимается тело в кадре, когда снизу открыта карточка */
const CARD_SHIFT = 0.17;

export type Params = {
  /** Ход времени: 0 останавливает систему */
  time: number;
  exposure: number;
  orbits: number;
  glow: number;
  stars: number;
};

export const DEFAULT_PARAMS: Params = {
  time: 1,
  exposure: 1,
  orbits: 1,
  glow: 1,
  stars: 1,
};

type View3dStore = {
  /** Индекс выбранного тела или -1 */
  selected: number;
  /** Камера сама облетает систему, когда её не трогают */
  auto: boolean;
  /** Интерфейс спрятан по клавише H */
  hidden: boolean;
  params: Params;
};

export const useView3dStore = create<View3dStore>(() => ({
  selected: -1,
  auto: true,
  hidden: false,
  params: { ...DEFAULT_PARAMS },
}));

export const setParam = (key: keyof Params, value: number) =>
  useView3dStore.setState((s) => ({ params: { ...s.params, [key]: value } }));

export const toggleAuto = () =>
  useView3dStore.setState((s) => ({ auto: !s.auto }));

export const toggleHidden = () =>
  useView3dStore.setState((s) => ({ hidden: !s.hidden }));

/** Выбрать тело; -1 возвращает к обзору системы */
export function selectBody3d(index: number) {
  if (view3d.focusIndex === index) return;

  // Переход с тела на тело: камера сначала отступает, иначе одна планета
  // сменяла бы другую подменой картинки, без всякого перелёта
  if (index >= 0 && view3d.focusIndex >= 0) {
    view3d.focus = Math.min(view3d.focus, 0.15);
  }

  view3d.focusIndex = index;
  if (index >= 0) {
    view3d.anchorIndex = index;
    view3d.zoom = 1;
    view3d.idle = 0;
  }
  useView3dStore.setState({ selected: index });
}

/**
 * Вернуть сцену в исходное положение. Состояние живёт в модуле и переживает
 * уход со страницы: вернувшись, ожидаешь увидеть систему целиком, а не тот
 * же Нептун во весь экран.
 */
export function resetView() {
  view3d.theta = 0.9;
  view3d.phi = 0.42;
  view3d.zoom = 1;
  view3d.vTheta = 0;
  view3d.vPhi = 0;
  view3d.dist = OVERVIEW_DIST;
  view3d.target = [0, 0, 0];
  view3d.focus = 0;
  view3d.focusIndex = -1;
  view3d.anchorIndex = -1;
  view3d.hover = -1;
  view3d.idle = 0;
  useView3dStore.setState({ selected: -1 });
}

/** Полный сброс, включая время и появление: страница открывается заново */
export function resetScene() {
  resetView();
  view3d.time = 0;
  view3d.intro = 0;
  view3d.positions = [];
  useView3dStore.setState({ params: { ...DEFAULT_PARAMS } });
}

/** Повернуть камеру. Значения — в пикселях перетаскивания. */
export function turnCamera(dx: number, dy: number, size: number) {
  view3d.theta -= (dx / size) * Math.PI * 2;
  view3d.phi = clamp(view3d.phi + (dy / size) * Math.PI, MIN_PHI, MAX_PHI);
  view3d.pendX += dx;
  view3d.pendY += dy;
  view3d.idle = 0;
}

export function zoomCamera(factor: number) {
  view3d.zoom = clamp(view3d.zoom * factor, MIN_ZOOM, MAX_ZOOM);
  view3d.idle = 0;
}

/** Камера сцены в том виде, в каком её понимает математика */
export const currentCamera = (): Camera3D => ({
  target: view3d.target,
  theta: view3d.theta,
  phi: view3d.phi,
  dist: view3d.dist,
});

/**
 * Шаг сцены: время, фокус, камера. Возвращает раскладку тел — рендеру она
 * нужна сразу, а попаданию кликом позже, поэтому кладётся и в состояние.
 */
export function stepScene(dt: number): Vec3[] {
  const s = view3d;
  const { auto, params } = useView3dStore.getState();

  s.time += dt * params.time;
  s.intro = Math.min(1, s.intro + dt * 0.9);

  const positions = systemPositions(s.time);
  s.positions = positions;

  // Наезд и отъезд: одно число ведёт и цель камеры, и удаление
  const want = s.focusIndex >= 0 ? 1 : 0;
  s.focus += (want - s.focus) * Math.min(1, dt * 2.4);
  if (s.focus < 0.004 && s.focusIndex < 0) {
    s.focus = 0;
    s.anchorIndex = -1;
  }

  const anchor = s.anchorIndex >= 0 ? positions[s.anchorIndex] : ORIGIN;
  // Цель едет от центра системы к телу вместе с наездом
  s.target = [
    anchor[0] * s.focus,
    anchor[1] * s.focus,
    anchor[2] * s.focus,
  ];

  // Поворот: во время перетаскивания сразу, после — по инерции
  if (s.dragging) {
    s.vTheta = clamp(-s.pendX * 0.0052 * 0.4, -0.03, 0.03);
    s.vPhi = clamp(s.pendY * 0.0032 * 0.4, -0.03, 0.03);
    s.pendX = 0;
    s.pendY = 0;
  } else {
    s.idle += dt;
    s.theta += s.vTheta;
    s.phi = clamp(s.phi + s.vPhi, MIN_PHI, MAX_PHI);
    s.vTheta *= 0.93;
    s.vPhi *= 0.93;
    if (auto && s.idle > 1.2) s.theta += dt * 0.035;
  }

  // Подлёт к телу, которому важен угол зрения: пока камера идёт на цель,
  // она заодно поднимается. Кольца Сатурна с ребра — это просто линия,
  // и встречать его надо сверху. После прилёта камера снова полностью
  // в руках зрителя
  const wanted =
    s.focusIndex >= 0 ? SYSTEM_3D[s.focusIndex].viewPhi : undefined;
  if (wanted !== undefined && !s.dragging && s.focus < 0.985) {
    s.phi += (wanted - s.phi) * Math.min(1, dt * 1.6);
  }

  // Опорное удаление ведёт наезд, ручное приближение — множитель к нему
  const base =
    s.anchorIndex >= 0
      ? OVERVIEW_DIST + (framingDist(s.anchorIndex) - OVERVIEW_DIST) * s.focus
      : OVERVIEW_DIST;
  const floor =
    s.anchorIndex >= 0
      ? Math.max(MIN_DIST, SYSTEM_3D[s.anchorIndex].radius * 1.25)
      : MIN_DIST;
  const targetDist = clamp(base / s.zoom, floor, MAX_DIST);
  s.dist += (targetDist - s.dist) * Math.min(1, dt * 3.4);

  // Сдвиг нарастает вместе с наездом: тело поднимается в кадре ровно тогда,
  // когда снизу выезжает карточка
  s.shift = s.width > 0 && s.width <= NARROW ? CARD_SHIFT * s.focus : 0;

  return positions;
}

/** Тело под точкой холста или -1. Координаты — в пикселях от левого верхнего угла. */
export function bodyAt(x: number, y: number): number {
  const s = view3d;
  if (!s.positions.length || s.width <= 0 || s.height <= 0) return -1;

  const basis = cameraBasis(currentCamera());
  const rd = screenRay(basis, x, y, s.width, s.height, FOV, s.shift);
  return pickBody(s.positions, basis.pos, rd);
}
