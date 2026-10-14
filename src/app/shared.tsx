import type { Metadata, Viewport } from "next";
import { Geologica, JetBrains_Mono, Onest } from "next/font/google";
import {
  SITE_URL,
  aiPath,
  gamesPath,
  gargantuaPath,
  getUi,
  langPath,
  noticePath,
  space3dPath,
  spacePath,
  spiritPath,
  type Lang,
} from "@/content";

/**
 * Общая обвязка для обоих корневых макетов.
 *
 * Английский лежит в корне, русский — на /ru, поэтому у каждого языка свой
 * root layout: только он может задать <html lang>. Всё, что у них совпадает,
 * собрано здесь.
 */

// Geologica for display: a variable grotesque with Cyrillic and a light cut that
// holds at very large sizes, in both languages
const display = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

// Onest for running text: a calm humanist sans with matching Cyrillic
const body = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

// Monospace only for readouts: coordinates, tags and data
const mono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const fontClassName = `${display.variable} ${body.variable} ${mono.variable}`;

/**
 * Runs synchronously in <head>, before first paint: a visitor who chose the dark
 * bench gets data-bench="dark" on <html>, and globals.css paints the dark tokens
 * from that attribute. Mirrors the dark tokens of eco.module.css.
 */
export const themeInitScript = `(function(){try{if(window.localStorage.getItem("zorahm:theme")==="dark"){document.documentElement.dataset.bench="dark";}}catch(e){}})();`;

export const viewport: Viewport = {
  themeColor: "#eef1f2",
};

/** Pages on the laboratory design: the daylight ground shows in the browser chrome */
export const ecoViewport: Viewport = {
  themeColor: "#eef1f2",
};

const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  ru: "ru_RU",
};

export function buildMetadata(lang: Lang): Metadata {
  const ui = getUi(lang);
  const url = new URL(langPath(lang), SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title: ui.siteTitle,
    description: ui.siteDescription,
    // Обе иконки лежат статикой в public и объявлены явно.
    // Два повода не полагаться на автоподхват файлов из app/:
    // любой ручной ключ в icons отменяет автоматически найденные иконки,
    // а сгенерированный маршрут отдаёт PNG по пути без расширения, из-за
    // чего обычный статический хостинг подставит неверный MIME-тип.
    icons: {
      icon: { url: "/icon.svg", type: "image/svg+xml" },
      apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    },
    alternates: {
      canonical: url,
      // hreflang для обоих языков плюс x-default на английскую версию
      languages: {
        en: new URL(langPath("en"), SITE_URL).toString(),
        ru: new URL(langPath("ru"), SITE_URL).toString(),
        "x-default": new URL(langPath("en"), SITE_URL).toString(),
      },
    },
    openGraph: {
      title: ui.siteTitle,
      description: ui.siteDescription,
      url,
      siteName: "ZorahM",
      locale: OG_LOCALE[lang],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ui.siteTitle,
      description: ui.siteDescription,
    },
  };
}

/**
 * Метаданные внутренней страницы.
 *
 * Заголовок и описание свои, всё остальное — та же обвязка: канонический
 * адрес ведёт на язык страницы, hreflang связывает две её версии между
 * собой, а не с главной.
 */
function buildPageMetadata(
  lang: Lang,
  path: (lang: Lang) => string,
  name: string,
  description: string,
): Metadata {
  const url = new URL(path(lang), SITE_URL).toString();
  const title = `${name} — ZorahM`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: new URL(path("en"), SITE_URL).toString(),
        ru: new URL(path("ru"), SITE_URL).toString(),
        "x-default": new URL(path("en"), SITE_URL).toString(),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "ZorahM",
      locale: OG_LOCALE[lang],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Метаданные страницы /space */
export function buildSpaceMetadata(lang: Lang): Metadata {
  const { space } = getUi(lang);
  return buildPageMetadata(lang, spacePath, space.title, space.description);
}

/** Метаданные страницы /space-3d */
export function buildSpace3DMetadata(lang: Lang): Metadata {
  const { space3d } = getUi(lang);
  return buildPageMetadata(
    lang,
    space3dPath,
    space3d.title,
    space3d.description,
  );
}

/** Metadata of the /gargantua page */
export function buildGargantuaMetadata(lang: Lang): Metadata {
  const { gargantua } = getUi(lang);
  return buildPageMetadata(
    lang,
    gargantuaPath,
    gargantua.title,
    gargantua.description,
  );
}

/** Метаданные страницы /spirit */
export function buildSpiritMetadata(lang: Lang): Metadata {
  const { spirit } = getUi(lang);
  return buildPageMetadata(lang, spiritPath, spirit.title, spirit.description);
}

/** Metadata of the /ai page */
export function buildAiMetadata(lang: Lang): Metadata {
  const { ai } = getUi(lang);
  return buildPageMetadata(lang, aiPath, ai.title, ai.description);
}

/** Metadata of the /games page */
export function buildGamesMetadata(lang: Lang): Metadata {
  const { games } = getUi(lang);
  return buildPageMetadata(lang, gamesPath, games.title, games.description);
}

/**
 * Metadata of the temporary /notice page. Kept out of search results: the
 * page is about a passing incident and should not outlive it in an index.
 */
export function buildNoticeMetadata(lang: Lang): Metadata {
  const { notice } = getUi(lang);
  return {
    ...buildPageMetadata(lang, noticePath, notice.title, notice.description),
    robots: { index: false, follow: true },
  };
}
