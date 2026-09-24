import type { HomeSectionId, Lang, ShapeId } from "./types";

/**
 * Language-independent part of a home index entry: where it leads and which
 * dotted plate its preview card draws.
 */
export type HomeSectionStructure = {
  id: HomeSectionId;
  path: (lang: Lang) => string;
  shape: ShapeId;
  /** Share of the densest dots painted vermilion, 0..1 */
  accent: number;
};

const prefixed = (slug: string) => (lang: Lang) =>
  lang === "en" ? `/${slug}` : `/${lang}/${slug}`;

/** Order of the index on the home page */
export const HOME_SECTIONS: HomeSectionStructure[] = [
  { id: "games", path: prefixed("games"), shape: "github", accent: 0.4 },
  { id: "space", path: prefixed("space"), shape: "noise", accent: 0.2 },
  { id: "space3d", path: prefixed("space-3d"), shape: "globe", accent: 0.3 },
  { id: "gargantua", path: prefixed("gargantua"), shape: "saturn", accent: 0.5 },
  { id: "spirit", path: prefixed("spirit"), shape: "ripple", accent: 0.5 },
];
