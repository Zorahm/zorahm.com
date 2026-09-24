import type { GameStructure } from "./types";

/**
 * Games of the /games page. Each one is played right here: the build lives
 * as static files under public/, next to the pages.
 *
 * Model, setup, year and stack are the same in every language and live here;
 * titles and summaries live in ./en.ts and ./ru.ts.
 */
export const GAMES_STRUCTURE: GameStructure[] = [
  {
    id: "rail-rush",
    year: 2026,
    model: "Claude Opus 5.5",
    setup: "Claude Code · Ultracode",
    tags: ["Three.js", "WebGL", "Vite"],
    href: "/games/rail-rush/",
  },
];
