import { enBodies, enFrames, enUi } from "./en";
import { ruBodies, ruFrames, ruUi } from "./ru";
import { SPACE_STRUCTURE } from "./space";
import { FRAME_STRUCTURE } from "./structure";
import type { Body, Frame, Lang, UiStrings } from "./types";

export * from "./types";
export { FRAME_STRUCTURE } from "./structure";
export { SPACE_STRUCTURE, BODY_COUNT } from "./space";

const TEXTS = { en: enFrames, ru: ruFrames } as const;
const BODIES = { en: enBodies, ru: ruBodies } as const;
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

export const getUi = (lang: Lang): UiStrings => UI[lang];

/** Путь к странице языка. Английский — основной и живёт в корне. */
export const langPath = (lang: Lang) => (lang === "en" ? "/" : `/${lang}`);

/** Путь к странице космоса на языке */
export const spacePath = (lang: Lang) =>
  lang === "en" ? "/space" : `/${lang}/space`;

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "ru" : "en");

export const getContacts = (lang: Lang) =>
  [
    { label: "Telegram", href: "https://t.me/zorahm" },
    { label: "GitHub", href: "https://github.com/zorahm" },
    { label: UI[lang].contactEmail, href: "mailto:me@zorahm.com" },
  ] as const;

/** Число кадров одинаково во всех языках — проверяется тестом */
export const FRAME_COUNT = FRAME_STRUCTURE.length;
