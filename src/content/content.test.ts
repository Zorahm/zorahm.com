import { describe, expect, it } from "vitest";
import {
  AI_STRUCTURE,
  FRAME_STRUCTURE,
  GAMES_STRUCTURE,
  HOME_SECTIONS,
  LANGS,
  SPACE_STRUCTURE,
  SPIRIT_CITY_TITLE,
  SPIRIT_DAY,
  SPIRIT_SOURCES,
  SPIRIT_STRUCTURE,
  formatDay,
  aiPath,
  formatDaysAfter,
  gamesPath,
  gargantuaPath,
  getAiEntries,
  getBodies,
  getContacts,
  getFrames,
  getGames,
  getPaperArticles,
  getPaperDecision,
  getPaperIndex,
  getSpiritMatches,
  getUi,
  langPath,
  otherLang,
  paperDecisionPath,
  paperPath,
  PAPER_DECISION_PRICE_CALLS,
  priceOfMillionCalls,
  space3dPath,
  spacePath,
  spiritPath,
} from "./index";

describe("кадры", () => {
  it("во всех языках одинаковый набор и порядок кадров", () => {
    const ids = FRAME_STRUCTURE.map((f) => f.id);
    for (const lang of LANGS) {
      expect(getFrames(lang).map((f) => f.id)).toEqual(ids);
    }
  });

  it("ни один текст не потерян при переводе", () => {
    for (const lang of LANGS) {
      for (const frame of getFrames(lang)) {
        expect(frame.label.trim(), `${lang}/${frame.id} label`).not.toBe("");
        expect(frame.eyebrow.trim(), `${lang}/${frame.id} eyebrow`).not.toBe("");
        expect(frame.title.trim(), `${lang}/${frame.id} title`).not.toBe("");
        expect(frame.body.length, `${lang}/${frame.id} body`).toBeGreaterThan(0);
        for (const p of frame.body) {
          expect(p.text.trim(), `${lang}/${frame.id} абзац`).not.toBe("");
        }
      }
    }
  });

  it("структура абзацев совпадает между языками", () => {
    const shape = (lang: (typeof LANGS)[number]) =>
      getFrames(lang).map((f) => f.body.map((p) => Boolean(p.muted)));
    const [first, ...rest] = LANGS;
    for (const lang of rest) {
      expect(shape(lang), `${lang} против ${first}`).toEqual(shape(first));
    }
  });

  it("композиция не зависит от языка", () => {
    const composition = (lang: (typeof LANGS)[number]) =>
      getFrames(lang).map((f) => ({
        id: f.id,
        align: f.align,
        accent: f.accent,
        hero: Boolean(f.hero),
        contacts: Boolean(f.contacts),
        cta: f.cta?.href ?? null,
      }));
    expect(composition("ru")).toEqual(composition("en"));
  });

  it("accent лежит в допустимых пределах", () => {
    for (const f of FRAME_STRUCTURE) {
      expect(f.accent).toBeGreaterThanOrEqual(0);
      expect(f.accent).toBeLessThanOrEqual(1);
    }
  });

  it("ровно один hero и ровно один блок контактов", () => {
    expect(FRAME_STRUCTURE.filter((f) => f.hero)).toHaveLength(1);
    expect(FRAME_STRUCTURE.filter((f) => f.contacts)).toHaveLength(1);
  });

  it("hero идёт первым", () => {
    expect(FRAME_STRUCTURE[0].hero).toBe(true);
  });
});

describe("тела сцены /space", () => {
  it("во всех языках одинаковый набор и порядок тел", () => {
    const ids = SPACE_STRUCTURE.map((b) => b.id);
    for (const lang of LANGS) {
      expect(getBodies(lang).map((b) => b.id)).toEqual(ids);
    }
  });

  it("ни один текст не потерян при переводе", () => {
    for (const lang of LANGS) {
      for (const body of getBodies(lang)) {
        expect(body.name.trim(), `${lang}/${body.id} name`).not.toBe("");
        expect(body.eyebrow.trim(), `${lang}/${body.id} eyebrow`).not.toBe("");
        expect(body.tagline.trim(), `${lang}/${body.id} tagline`).not.toBe("");
        expect(body.body.trim(), `${lang}/${body.id} абзац`).not.toBe("");
      }
    }
  });

  it("у каждого тела ровно четыре заполненные величины", () => {
    for (const lang of LANGS) {
      for (const body of getBodies(lang)) {
        expect(body.stats, `${lang}/${body.id}`).toHaveLength(4);
        for (const stat of body.stats) {
          expect(stat.label.trim(), `${lang}/${body.id} подпись`).not.toBe("");
          expect(stat.value.trim(), `${lang}/${body.id} значение`).not.toBe("");
        }
      }
    }
  });

  it("Солнце стоит первым и в центре, остальные — по возрастанию орбиты", () => {
    expect(SPACE_STRUCTURE[0].id).toBe("sun");
    expect(SPACE_STRUCTURE[0].orbit).toBe(0);
    for (let i = 2; i < SPACE_STRUCTURE.length; i++) {
      expect(
        SPACE_STRUCTURE[i].orbit,
        SPACE_STRUCTURE[i].id,
      ).toBeGreaterThan(SPACE_STRUCTURE[i - 1].orbit);
    }
  });

  it("орбиты помещаются в кадр, accent лежит в допустимых пределах", () => {
    for (const body of SPACE_STRUCTURE) {
      expect(body.orbit, body.id).toBeLessThanOrEqual(1);
      expect(body.accent, body.id).toBeGreaterThanOrEqual(0);
      expect(body.accent, body.id).toBeLessThanOrEqual(1);
      expect(body.dot, body.id).toBeGreaterThan(0);
    }
  });
});

describe("титулы страницы /spirit", () => {
  it("во всех языках одинаковый набор и порядок титулов", () => {
    const ids = SPIRIT_STRUCTURE.map((m) => m.id);
    for (const lang of LANGS) {
      expect(getSpiritMatches(lang).map((m) => m.id)).toEqual(ids);
    }
  });

  it("ни один текст не потерян при переводе", () => {
    for (const lang of LANGS) {
      for (const match of getSpiritMatches(lang)) {
        expect(match.venue.trim(), `${lang}/${match.id} venue`).not.toBe("");
        expect(match.prize.trim(), `${lang}/${match.id} prize`).not.toBe("");
        expect(match.line.trim(), `${lang}/${match.id} line`).not.toBe("");
      }
    }
  });

  it("факты не зависят от языка", () => {
    const facts = (lang: (typeof LANGS)[number]) =>
      getSpiritMatches(lang).map((m) => ({
        event: m.event,
        opponent: m.opponent,
        score: m.score,
        roster: m.roster,
        coach: m.coach,
      }));
    expect(facts("ru")).toEqual(facts("en"));
  });

  it("счёт серии сходится с её форматом", () => {
    for (const match of SPIRIT_STRUCTURE) {
      const games = Number(match.format.replace(/^Bo/, ""));
      expect(games, `${match.id} формат`).toBeGreaterThan(0);

      // Записка про победы: первая цифра всегда за Spirit
      const [won, lost] = match.score;
      expect(won, `${match.id} победы`).toBe(Math.ceil(games / 2));
      expect(lost, `${match.id} поражения`).toBeLessThan(won);
      expect(won + lost, `${match.id} сыграно карт`).toBeLessThanOrEqual(games);
    }
  });

  it("состав заполнен и у каждого титула есть первоисточник", () => {
    for (const match of SPIRIT_STRUCTURE) {
      expect(match.roster.length, `${match.id} состав`).toBe(5);
      for (const player of match.roster) {
        expect(player.trim(), `${match.id} игрок`).not.toBe("");
      }
      expect(match.coach.trim(), `${match.id} тренер`).not.toBe("");
      expect(match.source, `${match.id} источник`).toMatch(/^https:\/\//);
    }
  });

  it("прошлый титул того же города записан по тем же правилам", () => {
    const past = SPIRIT_CITY_TITLE;
    const [won, lost] = past.score;

    expect(past.event.trim()).not.toBe("");
    expect(past.opponent.trim()).not.toBe("");
    expect(won).toBeGreaterThan(lost);
    expect(past.source).toMatch(/^https:\/\//);

    // The coincidence means nothing if the earlier title is already on the page
    const onPage = SPIRIT_STRUCTURE.map((m) => m.event);
    expect(onPage).not.toContain(past.event);
  });

  it("titles run in date order and start on the day of the note", () => {
    const dates = SPIRIT_STRUCTURE.map((m) => m.date);
    for (const date of dates) {
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(date)), date).toBe(false);
    }
    expect(dates[0]).toBe(SPIRIT_DAY);
    // ISO days sort as plain strings, so a sorted copy must keep the order
    expect([...dates].sort()).toEqual(dates);
  });

  it("dates and gaps between them are written out in words", () => {
    expect(formatDay("2026-08-23", "en")).toBe("23 August");
    expect(formatDay("2026-08-23", "ru")).toBe("23 августа");
    expect(formatDaysAfter("2026-08-23", "2026-09-06", "en")).toBe("+14 days");
    expect(formatDaysAfter("2026-08-23", "2026-09-06", "ru")).toBe("+14 дней");
  });

  it("ссылки на источники ведут наружу по https", () => {
    expect(SPIRIT_SOURCES.length).toBeGreaterThan(0);
    for (const source of SPIRIT_SOURCES) {
      expect(source.label.trim()).not.toBe("");
      expect(source.href).toMatch(/^https:\/\//);
    }
  });
});

describe("entries of the /ai page", () => {
  it("every language has the same entries in the same order", () => {
    const ids = AI_STRUCTURE.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const lang of LANGS) {
      expect(getAiEntries(lang).map((e) => e.id)).toEqual(ids);
    }
  });

  it("no title or summary is lost in translation", () => {
    for (const lang of LANGS) {
      for (const entry of getAiEntries(lang)) {
        expect(entry.title.trim(), `${lang}/${entry.id} title`).not.toBe("");
        expect(entry.summary.length, `${lang}/${entry.id} summary`).toBeGreaterThan(0);
        for (const text of entry.summary) {
          expect(text.trim(), `${lang}/${entry.id} summary`).not.toBe("");
        }
      }
    }
  });

  it("projects carry a stack, an install command and a link to GitHub", () => {
    for (const entry of AI_STRUCTURE) {
      expect(entry.tags.length, `${entry.id} tags`).toBeGreaterThan(0);
      for (const tag of entry.tags) {
        expect(tag.trim(), `${entry.id} tag`).not.toBe("");
      }
      expect(entry.agents.trim(), `${entry.id} agents`).not.toBe("");
      expect(entry.requires.trim(), `${entry.id} requires`).not.toBe("");
      expect(entry.install.length, `${entry.id} install`).toBeGreaterThan(0);
      expect(entry.href, `${entry.id} href`).toMatch(/^https:\/\/github\.com\//);
    }
  });

  it("English lives at the root, Russian under /ru", () => {
    expect(aiPath("en")).toBe("/ai");
    expect(aiPath("ru")).toBe("/ru/ai");
  });
});

describe("games of the /games page", () => {
  it("every language has the same games in the same order", () => {
    const ids = GAMES_STRUCTURE.map((g) => g.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
    for (const lang of LANGS) {
      expect(getGames(lang).map((g) => g.id)).toEqual(ids);
    }
  });

  it("no title, summary or prompt count is lost in translation", () => {
    for (const lang of LANGS) {
      for (const game of getGames(lang)) {
        for (const key of ["title", "summary", "prompts"] as const) {
          expect(game[key].trim(), `${lang}/${game.id} ${key}`).not.toBe("");
        }
      }
    }
  });

  it("every game names its model and is played on this site under /games", () => {
    for (const game of GAMES_STRUCTURE) {
      expect(game.model.trim(), `${game.id} model`).not.toBe("");
      expect(game.setup.trim(), `${game.id} setup`).not.toBe("");
      // A trailing slash: the build loads its assets by absolute paths, but
      // nginx only finds the directory's index.html with it
      expect(game.href).toBe(`/games/${game.id}/`);
    }
  });

  it("English lives at the root, Russian under /ru", () => {
    expect(gamesPath("en")).toBe("/games");
    expect(gamesPath("ru")).toBe("/ru/games");
  });
});

describe("строки интерфейса", () => {
  /** Обходит и вложенные группы строк — тексты 404 лежат объектами */
  const walk = (value: unknown, path: string, visit: (s: string, p: string) => void) => {
    if (typeof value === "string") return visit(value, path);
    for (const [key, nested] of Object.entries(value as object)) {
      walk(nested, `${path}/${key}`, visit);
    }
  };

  it("заполнены во всех языках", () => {
    for (const lang of LANGS) {
      walk(getUi(lang), lang, (value, path) => {
        expect(value.trim(), path).not.toBe("");
      });
    }
  });

  it("набор ключей одинаков во всех языках", () => {
    const keys = (lang: (typeof LANGS)[number]) => {
      const found: string[] = [];
      walk(getUi(lang), "", (_, path) => found.push(path));
      return found.sort();
    };
    const [first, ...rest] = LANGS;
    for (const lang of rest) {
      expect(keys(lang), `${lang} против ${first}`).toEqual(keys(first));
    }
  });
});

describe("маршруты и контакты", () => {
  it("английский лежит в корне, русский — на /ru", () => {
    expect(langPath("en")).toBe("/");
    expect(langPath("ru")).toBe("/ru");
  });

  it("космос лежит рядом с языковой главной", () => {
    expect(spacePath("en")).toBe("/space");
    expect(spacePath("ru")).toBe("/ru/space");
  });

  it("записка лежит рядом с языковой главной", () => {
    expect(spiritPath("en")).toBe("/spirit");
    expect(spiritPath("ru")).toBe("/ru/spirit");
  });

  it("переключение языка обратимо", () => {
    for (const lang of LANGS) {
      expect(otherLang(otherLang(lang))).toBe(lang);
    }
  });

  it("почта и домены ведут на zorahm.com", () => {
    for (const lang of LANGS) {
      const contacts = getContacts(lang);
      const mail = contacts.find((c) => c.href.startsWith("mailto:"));
      expect(mail?.href).toBe("mailto:me@zorahm.com");
      for (const c of contacts) {
        expect(c.href).not.toContain("zorahm.ru");
      }
    }
  });

  it("во всех языках одинаковый набор контактов", () => {
    expect(getContacts("ru").map((c) => c.href)).toEqual(
      getContacts("en").map((c) => c.href),
    );
  });
});

describe("home index", () => {
  const paths = {
    ai: aiPath,
    games: gamesPath,
    space: spacePath,
    space3d: space3dPath,
    gargantua: gargantuaPath,
    spirit: spiritPath,
    paper: paperPath,
  } as const;

  it("leads to the same addresses as the shared path helpers", () => {
    for (const lang of LANGS) {
      for (const section of HOME_SECTIONS) {
        expect(section.path(lang)).toBe(paths[section.id](lang));
      }
    }
  });

  it("has a line and a tag for every section in every language", () => {
    for (const lang of LANGS) {
      const { sections } = getUi(lang).home;
      expect(Object.keys(sections).sort()).toEqual(
        HOME_SECTIONS.map((s) => s.id).sort(),
      );
    }
  });
});

describe("the /paper/decision note", () => {
  const shape = (value: unknown): unknown =>
    Array.isArray(value)
      ? value.map(shape)
      : value !== null && typeof value === "object"
        ? Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, shape(item)]),
          )
        : typeof value;

  it("has the same shape in every language", () => {
    const [first, ...rest] = LANGS;
    for (const lang of rest) {
      expect(shape(getPaperDecision(lang)), `${lang} against ${first}`).toEqual(
        shape(getPaperDecision(first)),
      );
    }
  });

  it("keeps lists of the same length in every language", () => {
    const en = getPaperDecision("en");
    const ru = getPaperDecision("ru");
    expect(ru.questions).toHaveLength(en.questions.length);
    expect(ru.examples).toHaveLength(en.examples.length);
    en.examples.forEach((example, index) => {
      expect(ru.examples[index].rows).toHaveLength(example.rows.length);
    });
    expect(ru.modelList).toHaveLength(en.modelList.length);
    expect(ru.numbers).toHaveLength(en.numbers.length);
    expect(en.priceCalls).toHaveLength(PAPER_DECISION_PRICE_CALLS.length);
    expect(ru.priceCalls).toHaveLength(PAPER_DECISION_PRICE_CALLS.length);
    expect(ru.use).toHaveLength(en.use.length);
    expect(ru.limits).toHaveLength(en.limits.length);
  });

  it("uses no long dashes, as the author asked", () => {
    for (const lang of LANGS) {
      expect(JSON.stringify(getPaperDecision(lang))).not.toMatch(/[–—]/);
    }
  });

  it("lies next to the language home", () => {
    expect(paperDecisionPath("en")).toBe("/paper/decision");
    expect(paperDecisionPath("ru")).toBe("/ru/paper/decision");
  });

  it("prices the ticket the way OpenRouter does for Jev", () => {
    // 447 input tokens at $0.042 per million is about $19 for a million tickets
    const [ticket] = PAPER_DECISION_PRICE_CALLS;
    const price = priceOfMillionCalls(ticket);
    expect(price.decision).toBeCloseTo(18.77, 2);
    expect(price.haiku).toBeCloseTo(79.2, 1);
    expect(price.haikuLow).toBeCloseTo(229.2, 1);
  });

  it("keeps the decision model the cheapest row of every call", () => {
    for (const call of PAPER_DECISION_PRICE_CALLS) {
      const price = priceOfMillionCalls(call);
      expect(price.decision).toBeLessThan(price.haiku);
      expect(price.haiku).toBeLessThan(price.haikuLow);
    }
  });
});

describe("the /paper index", () => {
  it("lies next to the language home and above its articles", () => {
    expect(paperPath("en")).toBe("/paper");
    expect(paperPath("ru")).toBe("/ru/paper");
    for (const lang of LANGS) {
      for (const article of getPaperArticles(lang)) {
        expect(article.path(lang).startsWith(paperPath(lang) + "/")).toBe(true);
      }
    }
  });

  it("lists the same articles in every language, each with words", () => {
    const ids = getPaperArticles("en").map((a) => a.id);
    for (const lang of LANGS) {
      const articles = getPaperArticles(lang);
      expect(articles.map((a) => a.id)).toEqual(ids);
      for (const article of articles) {
        expect(article.title.length).toBeGreaterThan(0);
        expect(article.summary.length).toBeGreaterThan(0);
        expect(article.dateText.length).toBeGreaterThan(0);
      }
    }
  });

  it("has the same strings in every language, without long dashes", () => {
    expect(Object.keys(getPaperIndex("ru")).sort()).toEqual(
      Object.keys(getPaperIndex("en")).sort(),
    );
    for (const lang of LANGS) {
      expect(JSON.stringify(getPaperIndex(lang))).not.toMatch(/[\u2013\u2014]/);
    }
  });
});

