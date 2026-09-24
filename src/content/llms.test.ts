import { describe, expect, it } from "vitest";
import { buildLlmsTxt } from "./llms";
import {
  LANGS,
  SITE_URL,
  aiPath,
  gamesPath,
  gargantuaPath,
  getGames,
  getFrames,
  getUi,
  langPath,
  space3dPath,
  spacePath,
  spiritPath,
} from "./index";

const txt = buildLlmsTxt();

describe("llms.txt", () => {
  it("начинается с заголовка и краткого описания в цитате", () => {
    const lines = txt.split("\n");
    expect(lines[0]).toBe("# ZorahM");
    expect(txt).toContain(`> ${getUi("en").siteDescription}`);
  });

  it("прямо разрешает обход ИИ-агентами", () => {
    expect(txt).toMatch(/AI agents is allowed/i);
  });

  it("ссылается на обе языковые версии по абсолютным адресам", () => {
    for (const lang of LANGS) {
      expect(txt).toContain(new URL(langPath(lang), SITE_URL).toString());
    }
  });

  it("links every published page in both languages", () => {
    for (const path of [
      spacePath,
      space3dPath,
      gargantuaPath,
      spiritPath,
      gamesPath,
    ]) {
      for (const lang of LANGS) {
        expect(txt).toContain(new URL(path(lang), SITE_URL).toString());
      }
    }
  });

  it("tells which model made each game, in both languages", () => {
    for (const lang of LANGS) {
      for (const game of getGames(lang)) {
        expect(txt).toContain(game.summary);
        expect(txt).toContain(game.model);
        expect(txt).toContain(new URL(game.href, SITE_URL).toString());
      }
    }
  });

  it("keeps the unfinished /ai page out", () => {
    for (const lang of LANGS) {
      expect(txt).not.toContain(new URL(aiPath(lang), SITE_URL).toString());
    }
  });

  it("содержит весь текст обеих версий", () => {
    for (const lang of LANGS) {
      for (const frame of getFrames(lang)) {
        expect(txt, `${lang}/${frame.id} заголовок`).toContain(frame.title);
        for (const p of frame.body) {
          expect(txt, `${lang}/${frame.id} абзац`).toContain(p.text);
        }
      }
    }
  });

  it("даёт почту и ссылку на репозиторий", () => {
    expect(txt).toContain("me@zorahm.com");
    expect(txt).toContain("https://github.com/zorahm");
  });

  it("не тащит mailto: в человекочитаемый список контактов", () => {
    expect(txt).not.toContain("mailto:");
  });

  it("нигде не поминает старый домен", () => {
    expect(txt).not.toContain("zorahm.ru");
  });

  it("не оставляет пустых секций и тройных переводов строки", () => {
    expect(txt).not.toMatch(/\n{3,}/);
    expect(txt.endsWith("\n")).toBe(true);
  });
});
