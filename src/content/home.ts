import type { HomeSectionId, Lang } from "./types";

/**
 * Language-independent part of a home index entry: where it leads. Its
 * pictogram is keyed by the id in components/eco/dotIcons.ts.
 */
export type HomeSectionStructure = {
  id: HomeSectionId;
  path: (lang: Lang) => string;
};

const prefixed = (slug: string) => (lang: Lang) =>
  lang === "en" ? `/${slug}` : `/${lang}/${slug}`;

/** Order of the index on the home page */
export const HOME_SECTIONS: HomeSectionStructure[] = [
  { id: "ai", path: prefixed("ai") },
  { id: "games", path: prefixed("games") },
  { id: "space", path: prefixed("space") },
  { id: "space3d", path: prefixed("space-3d") },
  { id: "gargantua", path: prefixed("gargantua") },
  { id: "spirit", path: prefixed("spirit") },
  { id: "paper", path: prefixed("paper") },
];
