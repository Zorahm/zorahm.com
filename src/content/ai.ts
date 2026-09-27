import type { AiEntryStructure } from "./types";

/**
 * Projects of the /ai page: tools that teach AI models to do something,
 * all of them open source on GitHub.
 *
 * Kind, year, stack, agents and install commands are the same in every
 * language and live here; titles and summaries live in ./en.ts and ./ru.ts.
 */
export const AI_STRUCTURE: AiEntryStructure[] = [
  {
    id: "zowork",
    kind: "plugin",
    year: 2026,
    tags: ["Claude Code", "Skills", "Hooks", "Node.js"],
    agents: "Claude Code",
    requires: "Node 18+",
    install: ["/plugin marketplace add zorahm/zowork", "/plugin install zowork@zowork"],
    href: "https://github.com/Zorahm/zowork",
  },
  {
    id: "crossword-skill",
    kind: "skill",
    year: 2026,
    tags: ["Agent Skills", "Python"],
    agents: "Claude Code · Codex · Cursor · Gemini CLI · OpenCode",
    requires: "Python 3",
    install: ["npx skills add zorahm/crossword-skill"],
    href: "https://github.com/Zorahm/crossword-skill",
  },
];
