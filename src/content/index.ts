import { AI_STRUCTURE } from "./ai";
import { enAiEntries, enBodies, enFrames, enSpiritMatches, enUi } from "./en";
import { ruAiEntries, ruBodies, ruFrames, ruSpiritMatches, ruUi } from "./ru";
import { SPACE_STRUCTURE } from "./space";
import { SPIRIT_STRUCTURE } from "./spirit";
import { FRAME_STRUCTURE } from "./structure";
import type {
  AiEntry,
  Body,
  Frame,
  Lang,
  SpiritMatch,
  UiStrings,
} from "./types";

export * from "./types";
export { FRAME_STRUCTURE } from "./structure";
export { AI_STRUCTURE } from "./ai";
export { SPACE_STRUCTURE, BODY_COUNT } from "./space";
export {
  SPIRIT_STRUCTURE,
  SPIRIT_CITY_TITLE,
  SPIRIT_SOURCES,
  SPIRIT_DAY,
  SPIRIT_MATCH_COUNT,
  SPIRIT_TEAM,
} from "./spirit";

const TEXTS = { en: enFrames, ru: ruFrames } as const;
const BODIES = { en: enBodies, ru: ruBodies } as const;
const SPIRIT = { en: enSpiritMatches, ru: ruSpiritMatches } as const;
const AI = { en: enAiEntries, ru: ruAiEntries } as const;
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

/** Entries of the /ai page: facts from the structure, words from the dictionary */
export function getAiEntries(lang: Lang): AiEntry[] {
  const texts = AI[lang];
  return AI_STRUCTURE.map((structure) => ({
    ...structure,
    ...texts[structure.id],
  }));
}

/** Intl locale behind each site language: British day-month order for English */
const LOCALE: Record<Lang, string> = { en: "en-GB", ru: "ru-RU" };

/**
 * An ISO day in words: "6 September", "6 сентября". Formatted rather than
 * translated, so a dictionary cannot drift from the date in the structure.
 * UTC on purpose: a date-only ISO string means midnight UTC, and formatting it
 * in any zone west of that would show the day before.
 */
export const formatDay = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALE[lang], {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(iso));

/** Days between two ISO days as a signed count: "+14 days", "+14 дней" */
export const formatDaysAfter = (from: string, to: string, lang: Lang) =>
  new Intl.NumberFormat(LOCALE[lang], {
    style: "unit",
    unit: "day",
    unitDisplay: "long",
    signDisplay: "always",
  }).format(Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000));

export const getUi = (lang: Lang): UiStrings => UI[lang];

/** Путь к странице языка. Английский — основной и живёт в корне. */
export const langPath = (lang: Lang) => (lang === "en" ? "/" : `/${lang}`);

/** Путь к странице космоса на языке */
export const spacePath = (lang: Lang) =>
  lang === "en" ? "/space" : `/${lang}/space`;

/** Путь к трассированной версии той же сцены */
export const space3dPath = (lang: Lang) =>
  lang === "en" ? "/space-3d" : `/${lang}/space-3d`;

/** Path to the black hole, traced with the same machinery as /space-3d */
export const gargantuaPath = (lang: Lang) =>
  lang === "en" ? "/gargantua" : `/${lang}/gargantua`;

/** Путь к записке о 23 августа 2026 */
export const spiritPath = (lang: Lang) =>
  lang === "en" ? "/spirit" : `/${lang}/spirit`;

/** Path to the AI projects page. Not published yet — see its metadata */
export const aiPath = (lang: Lang) => (lang === "en" ? "/ai" : `/${lang}/ai`);

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "ru" : "en");

export const getContacts = (lang: Lang) =>
  [
    { label: "Telegram", href: "https://t.me/zorahm" },
    { label: "GitHub", href: "https://github.com/zorahm" },
    { label: UI[lang].contactEmail, href: "mailto:me@zorahm.com" },
  ] as const;

/** Число кадров одинаково во всех языках — проверяется тестом */
export const FRAME_COUNT = FRAME_STRUCTURE.length;
