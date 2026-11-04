import type { AiEntryStructure } from "./types";

/**
 * Projects of the /ai page: apps, plugins and skills for working with AI models,
 * all of them open source on GitHub.
 *
 * Kind, year, stack, agents and install commands are the same in every
 * language and live here; titles and summaries live in ./en.ts and ./ru.ts.
 */
export const AI_STRUCTURE: AiEntryStructure[] = [
  {
    id: "yaca",
    kind: "app",
    year: 2026,
    tags: ["Rust", "Tauri", "React", "Agent Skills", "MCP"],
    platforms: "Windows · macOS · Linux",
    requires: "API key / local model",
    downloadHref: "https://github.com/Zorahm/yaca/releases",
    href: "https://github.com/Zorahm/yaca",
  },
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
