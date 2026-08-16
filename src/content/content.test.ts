import { describe, expect, it } from "vitest";
import {
  FRAME_STRUCTURE,
  LANGS,
  getContacts,
  getFrames,
  getUi,
  langPath,
  otherLang,
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

describe("строки интерфейса", () => {
  it("заполнены во всех языках", () => {
    for (const lang of LANGS) {
      for (const [key, value] of Object.entries(getUi(lang))) {
        expect(value.trim(), `${lang}/${key}`).not.toBe("");
      }
    }
  });
});

describe("маршруты и контакты", () => {
  it("английский лежит в корне, русский — на /ru", () => {
    expect(langPath("en")).toBe("/");
    expect(langPath("ru")).toBe("/ru");
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
