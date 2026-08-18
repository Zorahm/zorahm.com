import type { BodyStructure } from "./types";

/**
 * Композиция сцены /space — общая для всех языков. Тексты живут в ./ru.ts
 * и ./en.ts, ровно как у кадров главной страницы.
 *
 * Орбиты разложены почти равномерно, а не по астрономическим единицам:
 * в настоящем масштабе Меркурий, Венера, Земля и Марс слиплись бы в точку
 * у Солнца, а Нептун ушёл бы за край. Сохранён порядок тел и разрыв после
 * Марса — там, где на самом деле лежит пояс астероидов.
 */
export const SPACE_STRUCTURE: BodyStructure[] = [
  { id: "sun", orbit: 0, phase: 0, dot: 2.6, accent: 0.75 },
  { id: "mercury", orbit: 0.2, phase: 0.6, dot: 0.7, accent: 0.08 },
  { id: "venus", orbit: 0.29, phase: 2.4, dot: 0.95, accent: 0.22 },
  { id: "earth", orbit: 0.38, phase: 4.1, dot: 1, accent: 0.22 },
  { id: "mars", orbit: 0.47, phase: 5.3, dot: 0.8, accent: 0.15 },
  { id: "jupiter", orbit: 0.63, phase: 1.2, dot: 1.9, accent: 0.18 },
  { id: "saturn", orbit: 0.75, phase: 3.4, dot: 1.7, accent: 0.6 },
  { id: "uranus", orbit: 0.87, phase: 5.9, dot: 1.3, accent: 0.12 },
  { id: "neptune", orbit: 1, phase: 2.9, dot: 1.25, accent: 0.15 },
];

export const BODY_COUNT = SPACE_STRUCTURE.length;
