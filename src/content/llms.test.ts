import { describe, expect, it } from "vitest";
import { LLMS_FULL_PATH, buildLlmsFullTxt, buildLlmsTxt } from "./llms";
import {
  LANGS,
  SITE_URL,
  aiPath,
  gamesPath,
  gargantuaPath,
  getAiEntries,
  getBodies,
  getFrames,
  getGames,
  getPaperDecision,
  getSpiritMatches,
  getUi,
  langPath,
  paperDecisionPath,
  paperPath,
  space3dPath,
  spacePath,
  spiritPath,
} from "./index";

const txt = buildLlmsTxt();
const full = buildLlmsFullTxt();
const url = (path: string) => new URL(path, SITE_URL).toString();

const PATHS = [
  langPath,
  aiPath,
  gamesPath,
  spacePath,
  space3dPath,
  gargantuaPath,
  spiritPath,
  paperPath,
  paperDecisionPath,
];

describe("llms.txt", () => {
  it("opens with a title and a summary in a quote", () => {
    expect(txt.split("\n")[0]).toBe("# ZorahM");
    expect(txt).toContain(`> ${getUi("en").siteDescription}`);
  });

  it("says outright that AI agents may crawl it", () => {
    expect(txt).toMatch(/AI agents is allowed/i);
  });

  it("links every page in both languages", () => {
    for (const path of PATHS) {
      for (const lang of LANGS) {
        expect(txt).toContain(`(${url(path(lang))})`);
      }
    }
  });

  it("lists the AI projects with their GitHub links", () => {
    for (const entry of getAiEntries("en")) {
      expect(txt).toContain(`[${entry.title}](${entry.href})`);
    }
  });

  it("tells which model made each game", () => {
    for (const game of getGames("en")) {
      expect(txt).toContain(game.model);
      expect(txt).toContain(url(game.href));
    }
  });

  it("points to the full text and keeps the page texts out", () => {
    expect(txt).toContain(url(LLMS_FULL_PATH));
    const [frame] = getFrames("ru");
    expect(txt).not.toContain(frame.body[0].text);
  });

  it("gives the email and the GitHub profile, without mailto:", () => {
    expect(txt).toContain("me@zorahm.com");
    expect(txt).toContain("https://github.com/zorahm");
    expect(txt).not.toContain("mailto:");
  });
});

describe("llms-full.txt", () => {
  it("groups the text by language, English first", () => {
    const en = full.indexOf("\n## English\n");
    const ru = full.indexOf("\n## Русский\n");
    expect(en).toBeGreaterThan(0);
    expect(ru).toBeGreaterThan(en);
  });

  it("names the source of every page in both languages", () => {
    for (const path of PATHS) {
      for (const lang of LANGS) {
        expect(full).toContain(`Source: ${url(path(lang))}\n`);
      }
    }
  });

  it("carries the whole text of both versions", () => {
    for (const lang of LANGS) {
      for (const frame of getFrames(lang)) {
        expect(full, `${lang}/${frame.id}`).toContain(frame.title);
        for (const p of frame.body) expect(full, `${lang}/${frame.id}`).toContain(p.text);
      }
      for (const entry of getAiEntries(lang)) {
        for (const p of entry.summary) expect(full, `${lang}/${entry.id}`).toContain(p);
        for (const command of entry.install) expect(full).toContain(command);
      }
      for (const game of getGames(lang)) {
        expect(full).toContain(game.summary);
        expect(full).toContain(game.prompts);
      }
      for (const body of getBodies(lang)) expect(full).toContain(body.body);
      for (const match of getSpiritMatches(lang)) expect(full).toContain(match.line);
      for (const p of getUi(lang).spirit.ps) expect(full).toContain(p);
      for (const p of getPaperDecision(lang).after) expect(full).toContain(p);
    }
  });
});

describe("both files", () => {
  it("never mention the old domain", () => {
    expect(txt + full).not.toContain("zorahm.ru");
  });

  it("leave no triple line breaks and end with a newline", () => {
    for (const file of [txt, full]) {
      expect(file).not.toMatch(/\n{3,}/);
      expect(file.endsWith("\n")).toBe(true);
    }
  });
});
