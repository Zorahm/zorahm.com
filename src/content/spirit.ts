import type {
  SpiritCityTitle,
  SpiritMatchStructure,
  SpiritSource,
} from "./types";

/** День, о котором записка. ISO — чтобы отдать его атрибуту <time>. */
export const SPIRIT_DAY = "2026-08-23";

/** The team as results tables write it — the same in every language */
export const SPIRIT_TEAM = "Team Spirit";

/**
 * Facts shared by every language. The words around them live in ./ru.ts and
 * ./en.ts, just like the home page frames and the /space bodies.
 *
 * Ordered by when the finals ended: Shanghai, then Paris the same day, then
 * Porto two weeks later.
 */
export const SPIRIT_STRUCTURE: SpiritMatchStructure[] = [
  {
    id: "dota",
    date: SPIRIT_DAY,
    discipline: "Dota 2",
    event: "The International 2026",
    opponent: "TEAM VISION",
    score: [3, 2],
    format: "Bo5",
    roster: ["Yatoro", "Larl", "Collapse", "rue", "not_me"],
    coach: "Miposhka",
    source: "https://dotesports.com/dota-2/news/team-spirit-champions-ti-2026",
  },
  {
    id: "cs",
    date: SPIRIT_DAY,
    discipline: "CS2",
    event: "Esports World Cup 2026",
    opponent: "FUT Esports",
    score: [3, 1],
    format: "Bo5",
    roster: ["donk", "sh1ro", "magixx", "zont1x", "tN1R"],
    coach: "hally",
    source: "https://www.hltv.org/results?event=8261",
  },
  {
    id: "porto",
    date: "2026-09-06",
    discipline: "CS2",
    event: "BLAST Open Porto 2026",
    opponent: "MOUZ",
    score: [3, 1],
    format: "Bo5",
    roster: ["donk", "sh1ro", "magixx", "zont1x", "tN1R"],
    coach: "hally",
    source:
      "https://www.hltv.org/news/45467/spirit-take-down-mouz-for-blast-open-porto-title",
  },
];

/**
 * Тот же город, только полутора годами раньше: в декабре 2024-го Шанхай уже
 * отдавал Spirit высший титул, но в другой игре. Из четырёх высших титулов
 * команды на один город пришлось два — и оба здесь.
 */
export const SPIRIT_CITY_TITLE: SpiritCityTitle = {
  discipline: "CS2",
  event: "Perfect World Shanghai Major 2024",
  opponent: "FaZe Clan",
  score: [2, 1],
  source: "https://en.wikipedia.org/wiki/Perfect_World_Shanghai_Major_2024",
};

/**
 * Ссылки под запиской.
 *
 * Логотипов команд и турниров, эмблем и снимков со сцены здесь нет намеренно:
 * это чужие товарные знаки и чужие фотографии. Сами факты — счёт, дата,
 * состав — никому не принадлежат, и на них достаточно сослаться.
 */
export const SPIRIT_SOURCES: SpiritSource[] = [
  {
    label: "Dot Esports — The International 2026",
    href: "https://dotesports.com/dota-2/news/team-spirit-champions-ti-2026",
  },
  {
    label: "GosuGamers — The International 2026",
    href: "https://www.gosugamers.net/dota2/news/79030-team-spirit-defeat-team-vision-to-win-the-international-2026-claim-third-aegis-of-champions",
  },
  {
    label: "HLTV — Esports World Cup 2026",
    href: "https://www.hltv.org/events/8261/esports-world-cup-2026",
  },
  {
    label: "HLTV — Esports World Cup 2026 grand final",
    href: "https://www.hltv.org/news/45370/live-updates-from-esports-world-cup-grand-final",
  },
  {
    label: "HLTV — BLAST Open Porto 2026",
    href: "https://www.hltv.org/events/8249/blast-open-porto-2026",
  },
  {
    label: "HLTV — BLAST Open Porto 2026 grand final",
    href: "https://www.hltv.org/news/45467/spirit-take-down-mouz-for-blast-open-porto-title",
  },
  {
    label: "HLTV — BLAST Open Porto 2026 MVP",
    href: "https://www.hltv.org/news/45470/donk-goes-back-to-back-with-blast-open-porto-mvp",
  },
  {
    label: "GosuGamers — BLAST Open Porto 2026",
    href: "https://www.gosugamers.net/counterstrike/news/79114-team-spirit-defeat-mouz-to-win-blast-open-fall-porto-2026",
  },
];

/** Number of titles on the page */
export const SPIRIT_MATCH_COUNT = SPIRIT_STRUCTURE.length;
