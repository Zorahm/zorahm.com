import type { AiEntryStructure } from "./types";

/**
 * Entries of the /ai page. Every one of them is a placeholder for now: the
 * page was built to settle its design, and real projects replace these once
 * they are written up. The links point at the GitHub profile only so that
 * the linked state of a card can be seen.
 *
 * Status, year, stack and link are the same in every language and live
 * here; titles and summaries live in ./en.ts and ./ru.ts.
 */
export const AI_STRUCTURE: AiEntryStructure[] = [
  {
    id: "alpha",
    group: "projects",
    status: "live",
    year: 2026,
    tags: ["LLM", "Agents", "TypeScript"],
    href: "https://github.com/zorahm",
    featured: true,
  },
  {
    id: "beta",
    group: "projects",
    status: "wip",
    year: 2026,
    tags: ["RAG", "Python"],
  },
  {
    id: "gamma",
    group: "projects",
    status: "live",
    year: 2025,
    tags: ["MCP", "TypeScript"],
    href: "https://github.com/zorahm",
  },
  {
    id: "delta",
    group: "projects",
    status: "idea",
    year: 2026,
    tags: ["Evals", "Python"],
  },
  {
    id: "epsilon",
    group: "projects",
    status: "wip",
    year: 2025,
    tags: ["Vision", "WebGL"],
  },
  {
    id: "zeta",
    group: "other",
    status: "live",
    year: 2026,
    tags: ["Prompts"],
  },
  {
    id: "eta",
    group: "other",
    status: "live",
    year: 2025,
    tags: ["Claude Code", "Skills"],
  },
  {
    id: "theta",
    group: "other",
    status: "wip",
    year: 2026,
    tags: ["CLI"],
  },
];
