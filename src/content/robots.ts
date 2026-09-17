import { SITE_URL } from "./types";

/**
 * Easter egg at the top of the file: Saturn, the first figure of the home
 * page, set in the same halftone ramp the site draws with — only in letters,
 * since a text file has no dots to draw it with.
 *
 * Plain ASCII on purpose: robots.txt parsers are old and fussy, and a comment
 * they cannot read could cost the rules below it.
 */
const BANNER = [
  "",
  "                  OOOOOOOOo:",
  "              ::O@@@@@@@OOOoo:::",
  "     ::::: ooooO@@@@@@@@OOOOoo:oooo :::::",
  "  ::: oooOOOO O@@@@@@@@@OOOOoo:: OOOOooo :::",
  ":::: ooOOOO   OO@@@@@@OOOOOooo::   OOOOoo ::::",
  "  ::: oooOOOO OOOOOOOOOOOOooo::: OOOOooo :::",
  "     ::::: ooooOOOOOOOOOOOOOOOOoooo :::::",
  "              ::::::::::::::::::",
  "                  ::::::::::",
  "",
  "Z\\M | zorahm.com",
  "",
  "Hello, crawler. The site is drawn in dots; this file is written for you.",
  "If a human is reading this: every 404 here has a cat hiding in the",
  "dots. Click them.",
  "",
];

/**
 * AI crawlers are allowed on a par with everyone else. The `*` rule already
 * covers them, but plenty of sites block them, so they are named one by one:
 * that way the permission reads as a decision rather than an oversight.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
];

type Group = {
  /** Comment lines written above the group, into the file itself */
  note?: string[];
  agents: string[];
  allow?: string[];
  disallow?: string[];
};

export const ROBOTS_GROUPS: Group[] = [
  { agents: ["*"], allow: ["/"] },
  {
    note: ["AI crawlers are welcome, and named one by one on purpose."],
    agents: AI_AGENTS,
    allow: ["/", "/llms.txt"],
  },
  {
    // GigaExplorator is the search crawler of GigaChat, Sber's neural network
    note: [
      "GigaExplorator: the search crawler of GigaChat, Sber's neural network.",
    ],
    agents: ["GigaExplorator"],
    disallow: ["/"],
  },
];

/**
 * robots.txt, written by hand rather than through the MetadataRoute.Robots
 * object: that object has no way to carry comments, and both the banner and
 * the notes above the groups are comments.
 */
export function buildRobotsTxt(): string {
  const lines = BANNER.map((line) => (line ? `# ${line}` : "#"));
  lines.push("");

  for (const group of ROBOTS_GROUPS) {
    for (const note of group.note ?? []) lines.push(`# ${note}`);
    for (const agent of group.agents) lines.push(`User-Agent: ${agent}`);
    for (const path of group.allow ?? []) lines.push(`Allow: ${path}`);
    for (const path of group.disallow ?? []) lines.push(`Disallow: ${path}`);
    lines.push("");
  }

  lines.push(`Host: ${SITE_URL}`);
  lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);

  return lines.join("\n") + "\n";
}
