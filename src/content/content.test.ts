import { describe, expect, it } from "vitest";
import {
  FRAME_STRUCTURE,
  LANGS,
  SPACE_STRUCTURE,
  getBodies,
  getContacts,
  getFrames,
  getUi,
  langPath,
  otherLang,
  spacePath,
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
