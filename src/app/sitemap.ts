import type { MetadataRoute } from "next";
import { LANGS, SITE_URL, langPath, spacePath, type Lang } from "@/content";

// Дата сборки делает маршрут динамическим — при статическом экспорте это
// нужно снять явно
export const dynamic = "force-static";

type Route = {
  path: (lang: Lang) => string;
  priority: (lang: Lang) => number;
};

/** Обе языковые версии страницы — одна страница, поэтому связаны alternates */
const ROUTES: Route[] = [
  { path: langPath, priority: (lang) => (lang === "en" ? 1 : 0.8) },
  { path: spacePath, priority: (lang) => (lang === "en" ? 0.7 : 0.6) },
];

const absolute = (path: (lang: Lang) => string, lang: Lang) =>
  new URL(path(lang), SITE_URL).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap((route) => {
    const languages = Object.fromEntries(
      LANGS.map((lang) => [lang, absolute(route.path, lang)]),
    );

    return LANGS.map((lang) => ({
      url: absolute(route.path, lang),
      lastModified,
      changeFrequency: "monthly" as const,
      // Английская версия основная и лежит в корне
      priority: route.priority(lang),
      alternates: { languages },
    }));
  });
}
