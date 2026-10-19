import type { HomeSectionId, Lang, PlateShapeId } from "./types";

/**
 * Language-independent part of a home index entry: where it leads and which
 * dotted plate its row draws.
 */
export type HomeSectionStructure = {
  id: HomeSectionId;
  path: (lang: Lang) => string;
  shape: PlateShapeId;
  /** Share of the densest dots painted vermilion, 0..1 */
  accent: number;
};

const prefixed = (slug: string) => (lang: Lang) =>
  lang === "en" ? `/${slug}` : `/${lang}/${slug}`;

/** Order of the index on the home page */
export const HOME_SECTIONS: HomeSectionStructure[] = [
  { id: "ai", path: prefixed("ai"), shape: "rules", accent: 0.5 },
  { id: "games", path: prefixed("games"), shape: "rails", accent: 0.5 },
  { id: "space", path: prefixed("space"), shape: "orbits", accent: 0.5 },
  { id: "space3d", path: prefixed("space-3d"), shape: "globe", accent: 0.3 },
  { id: "gargantua", path: prefixed("gargantua"), shape: "hole", accent: 0.35 },
  { id: "spirit", path: prefixed("spirit"), shape: "spirit", accent: 0.5 },
  { id: "paper", path: prefixed("paper"), shape: "paper", accent: 0.5 },
];
