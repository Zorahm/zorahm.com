import { PAPER_DECISION_DATE, getPaperDecision } from "./paperDecision";
import type { Lang, PlateShapeId } from "./types";

/**
 * The /paper index: a list of the site's articles. Each article lives on its
 * own page with its own words (see paperDecision.ts); this file holds only
 * the index page's strings and the list of what is on it.
 *
 * Neither language uses long dashes, as on the articles themselves.
 */

/** Articles in the order they are listed, newest first */
export type PaperArticleId = "decision";

/** Language-independent part of a listed article */
export type PaperArticleStructure = {
  id: PaperArticleId;
  /** Address of the page in a language */
  path: (lang: Lang) => string;
  /** Day it was written, ISO */
  date: string;
  /** The dotted figure on its card */
  shape: PlateShapeId;
};

export const PAPER_ARTICLES: PaperArticleStructure[] = [
  {
    id: "decision",
    path: (lang) => (lang === "en" ? "/paper/decision" : `/${lang}/paper/decision`),
    date: PAPER_DECISION_DATE,
    shape: "network",
  },
];

/** An article as the index shows it: the facts plus the article's own words */
export type PaperArticle = PaperArticleStructure & {
  title: string;
  summary: string;
  /** The date in words, as the article itself writes it */
  dateText: string;
};

export type PaperIndexStrings = {
  title: string;
  description: string;
  heading: string;
  /** Lead paragraphs; the second one is dimmed */
  lead: string[];
  /** Caption of the counter under the heading */
  count: string;
  articlesLabel: string;
  /** Call to action on an article's card */
  read: string;
  /** Closing line above the contacts */
  outro: string;
  home: string;
};

const en: PaperIndexStrings = {
  title: "Paper",
  description:
    "Short articles on AI that I wanted to understand properly: what a thing is, what it is for, and where the numbers come from.",
  heading: "Paper",
  lead: [
    "Short articles on things in AI that I wanted to understand properly before writing about them.",
    "Each one says what the thing is, what it is for, and where every number comes from.",
  ],
  count: "Articles",
  articlesLabel: "Articles",
  read: "Read the article",
  outro: "A correction, a question or a topic you would like to see here? Write to me.",
  home: "Home",
};

const ru: PaperIndexStrings = {
  title: "Статьи",
  description:
    "Короткие статьи об ИИ, в которых я хотел разобраться как следует: что это, зачем оно нужно и откуда взяты цифры.",
  heading: "Статьи",
  lead: [
    "Короткие статьи о вещах из мира ИИ, в которых я хотел разобраться как следует, прежде чем о них писать.",
    "В каждой сказано, что это такое, зачем оно нужно и откуда взята каждая цифра.",
  ],
  count: "Статей",
  articlesLabel: "Статьи",
  read: "Читать статью",
  outro: "Поправка, вопрос или тема, которую хотелось бы здесь увидеть? Напишите мне.",
  home: "Главная",
};

const STRINGS: Record<Lang, PaperIndexStrings> = { en, ru };

export const getPaperIndex = (lang: Lang): PaperIndexStrings => STRINGS[lang];

/** Articles of the index: facts from the structure, words from each article */
export function getPaperArticles(lang: Lang): PaperArticle[] {
  const decision = getPaperDecision(lang);
  const texts = {
    decision: {
      title: decision.title,
      summary: decision.description,
      dateText: decision.date,
    },
  } as const;

  return PAPER_ARTICLES.map((structure) => ({
    ...structure,
    ...texts[structure.id],
  }));
}
