import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Unbounded } from "next/font/google";
import { SITE_URL, getUi, langPath, type Lang } from "@/content";

/**
 * Общая обвязка для обоих корневых макетов.
 *
 * Английский лежит в корне, русский — на /ru, поэтому у каждого языка свой
 * root layout: только он может задать <html lang>. Всё, что у них совпадает,
 * собрано здесь.
 */

// Unbounded вместо Bricolage Grotesque: у того нет кириллицы, из-за чего
// русские заголовки уезжали на фолбэк и два языка выглядели по-разному
const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const fontClassName = `${display.variable} ${mono.variable}`;

export const viewport: Viewport = {
  themeColor: "#03050A",
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
