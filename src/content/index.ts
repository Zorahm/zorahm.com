import { enBodies, enFrames, enSpiritMatches, enUi } from "./en";
import { ruBodies, ruFrames, ruSpiritMatches, ruUi } from "./ru";
import { SPACE_STRUCTURE } from "./space";
import { SPIRIT_STRUCTURE } from "./spirit";
import { FRAME_STRUCTURE } from "./structure";
import type { Body, Frame, Lang, SpiritMatch, UiStrings } from "./types";

export * from "./types";
export { FRAME_STRUCTURE } from "./structure";
export { SPACE_STRUCTURE, BODY_COUNT } from "./space";
export {
  SPIRIT_STRUCTURE,
  SPIRIT_CITY_TITLE,
  SPIRIT_SOURCES,
  SPIRIT_DAY,
  SPIRIT_MATCH_COUNT,
} from "./spirit";

const TEXTS = { en: enFrames, ru: ruFrames } as const;
const BODIES = { en: enBodies, ru: ruBodies } as const;
const SPIRIT = { en: enSpiritMatches, ru: ruSpiritMatches } as const;
const UI: Record<Lang, UiStrings> = { en: enUi, ru: ruUi };

/** Собирает кадры языка: композиция из структуры, тексты из словаря */
export function getFrames(lang: Lang): Frame[] {
  const texts = TEXTS[lang];
  return FRAME_STRUCTURE.map((structure) => ({
    ...structure,
    ...texts[structure.id],
  }));
}

/** Собирает тела сцены /space: композиция из структуры, тексты из словаря */
export function getBodies(lang: Lang): Body[] {
  const texts = BODIES[lang];
  return SPACE_STRUCTURE.map((structure) => ({
    ...structure,
    ...texts[structure.id],
  }));
}

/** Собирает титулы страницы /spirit: факты из структуры, тексты из словаря */
export function getSpiritMatches(lang: Lang): SpiritMatch[] {
  const texts = SPIRIT[lang];
  return SPIRIT_STRUCTURE.map((structure) => ({
    ...structure,
    ...texts[structure.id],
  }));
}

export const getUi = (lang: Lang): UiStrings => UI[lang];

/** Путь к странице языка. Английский — основной и живёт в корне. */
export const langPath = (lang: Lang) => (lang === "en" ? "/" : `/${lang}`);

/** Путь к странице космоса на языке */
export const spacePath = (lang: Lang) =>
  lang === "en" ? "/space" : `/${lang}/space`;

/** Путь к трассированной версии той же сцены */
export const space3dPath = (lang: Lang) =>
  lang === "en" ? "/space-3d" : `/${lang}/space-3d`;

/** Путь к записке о 23 августа 2026 */
export const spiritPath = (lang: Lang) =>
  lang === "en" ? "/spirit" : `/${lang}/spirit`;

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "ru" : "en");

export const getContacts = (lang: Lang) =>
  [
    { label: "Telegram", href: "https://t.me/zorahm" },
    { label: "GitHub", href: "https://github.com/zorahm" },
    { label: UI[lang].contactEmail, href: "mailto:me@zorahm.com" },
  ] as const;

/** Число кадров одинаково во всех языках — проверяется тестом */
export const FRAME_COUNT = FRAME_STRUCTURE.length;
