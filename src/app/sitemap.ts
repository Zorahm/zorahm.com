import type { MetadataRoute } from "next";
import { LANGS, SITE_URL, langPath, type Lang } from "@/content";

// Дата сборки делает маршрут динамическим — при статическом экспорте это
// нужно снять явно
export const dynamic = "force-static";

const absolute = (lang: Lang) =>
  new URL(langPath(lang), SITE_URL).toString();

/** Обе языковые версии — одна страница, поэтому связаны через alternates */
const languages = Object.fromEntries(
  LANGS.map((lang) => [lang, absolute(lang)]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LANGS.map((lang) => ({
    url: absolute(lang),
    lastModified,
    changeFrequency: "monthly" as const,
    // Английская версия основная и лежит в корне
    priority: lang === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
