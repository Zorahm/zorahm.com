import { describe, expect, it } from "vitest";
import { buildRobotsTxt } from "./robots";
import { SITE_URL } from "./types";

const txt = buildRobotsTxt();
const lines = txt.split("\n");

/** Groups of directives as a crawler reads them: blocks between blank lines */
const groups = txt
  .split(/\n{2,}/)
  .map((block) => block.split("\n").filter((line) => !line.startsWith("#")))
  .filter((block) => block.some((line) => line.startsWith("User-Agent:")));

const groupOf = (agent: string) =>
  groups.find((group) => group.includes(`User-Agent: ${agent}`));

describe("robots.txt", () => {
  it("opens with the easter egg, and the egg is nothing but comments", () => {
    const firstRule = lines.findIndex((line) => line.startsWith("User-Agent:"));
    expect(lines[0].startsWith("#")).toBe(true);
    for (const line of lines.slice(0, firstRule)) {
      expect(line === "" || line.startsWith("#"), line).toBe(true);
    }
    expect(lines[firstRule]).toBe("User-Agent: *");
  });

  it("stays plain ASCII, so no parser trips over the banner", () => {
    expect(txt).toMatch(/^[\x20-\x7e\n]*$/);
  });

  it("lets everyone in", () => {
    expect(groupOf("*")).toEqual(["User-Agent: *", "Allow: /"]);
  });

  it("lets the AI crawlers in, llms.txt included", () => {
    const group = groupOf("ClaudeBot");
    expect(group).toContain("User-Agent: GPTBot");
    expect(group).toContain("Allow: /");
    expect(group).toContain("Allow: /llms.txt");
    expect(group?.some((line) => line.startsWith("Disallow:"))).toBe(false);
  });

  it("keeps GigaExplorator off the whole site and says whose crawler it is", () => {
    expect(groupOf("GigaExplorator")).toEqual([
      "User-Agent: GigaExplorator",
      "Disallow: /",
    ]);

    const index = lines.indexOf("User-Agent: GigaExplorator");
    expect(lines[index - 1]).toMatch(/^# .*GigaChat.*Sber/);
  });

  it("points at the host and the sitemap by absolute address", () => {
    expect(lines).toContain(`Host: ${SITE_URL}`);
    expect(lines).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
    expect(txt.endsWith("\n")).toBe(true);
  });
});
