import {
  aiPath,
  gamesPath,
  gargantuaPath,
  getAiEntries,
  getBodies,
  getContacts,
  getFrames,
  getGames,
  getPaperDecision,
  getSpiritMatches,
  getUi,
  langPath,
  paperDecisionPath,
  space3dPath,
  spacePath,
  spiritPath,
} from "./index";
import {
  PAPER_DECISION_DATE,
  PAPER_DECISION_PRICE_CALLS,
  PAPER_DECISION_SOURCES,
  priceOfMillionCalls,
} from "./paperDecision";
import { SPIRIT_CITY_TITLE, SPIRIT_DAY, SPIRIT_TEAM } from "./spirit";
import { LANGS, SITE_URL, type Lang } from "./types";

const LANG_TITLE: Record<Lang, string> = {
  en: "English",
  ru: "Русский",
};

const url = (path: string) => new URL(path, SITE_URL).toString();

export const LLMS_FULL_PATH = "/llms-full.txt";

type Page = {
  path: (lang: Lang) => string;
  title: (lang: Lang) => string;
  description: (lang: Lang) => string;
};

/** Every page of the site, in the order of the header's navigation */
const PAGES: Page[] = [
  {
    path: langPath,
    title: (lang) => getUi(lang).siteTitle,
    description: (lang) => getUi(lang).siteDescription,
  },
  {
    path: aiPath,
    title: (lang) => getUi(lang).ai.title,
    description: (lang) => getUi(lang).ai.description,
  },
  {
    path: gamesPath,
    title: (lang) => getUi(lang).games.title,
    description: (lang) => getUi(lang).games.description,
  },
  {
    path: spacePath,
    title: (lang) => getUi(lang).space.title,
    description: (lang) => getUi(lang).space.description,
  },
  {
    path: space3dPath,
    title: (lang) => getUi(lang).space3d.title,
    description: (lang) => getUi(lang).space3d.description,
  },
  {
    path: gargantuaPath,
    title: (lang) => getUi(lang).gargantua.title,
    description: (lang) => getUi(lang).gargantua.description,
  },
  {
    path: spiritPath,
    title: (lang) => getUi(lang).spirit.title,
    description: (lang) => getUi(lang).spirit.description,
  },
  {
    path: paperDecisionPath,
    title: (lang) => getPaperDecision(lang).title,
    description: (lang) => getPaperDecision(lang).description,
  },
];

/** Collapses the blank lines pushed around empty parts and ends with one newline */
const finish = (lines: string[]) =>
  lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";

/**
 * llms.txt in the llmstxt.org format: a title, a summary in a quote, then
 * sections of links. It is the index only: which pages exist, what the AI
 * projects and the games are, and how to get in touch. The text of the pages
 * lives in llms-full.txt, so an agent reads it only when it needs it.
 *
 * Built from the same dictionaries as the pages themselves, so it cannot go
 * stale after an edit to the texts.
 */
export function buildLlmsTxt(): string {
  const en = getUi("en");
  const lines: string[] = [];

  lines.push("# ZorahM");
  lines.push("");
  lines.push(`> ${en.siteDescription}`);
  lines.push("");
  lines.push(
    "ZorahM's personal site about artificial intelligence: plugins and skills " +
      "for AI models, browser games made by models, interactive space scenes " +
      "and a fan's note. Every page exists in English at the root and in " +
      "Russian under /ru.",
  );
  lines.push("");
  lines.push(
    `The full text of every page, in both languages, is in ${url(LLMS_FULL_PATH)}. ` +
      "Crawling and indexing by AI agents is allowed.",
  );
  lines.push("");

  lines.push("## Pages");
  lines.push("");
  for (const page of PAGES) {
    lines.push(
      `- [${page.title("en")}](${url(page.path("en"))}): ${page.description("en")} ` +
        `${LANG_TITLE.ru}: [${page.title("ru")}](${url(page.path("ru"))})`,
    );
  }
  lines.push("");

  lines.push("## AI projects");
  lines.push("");
  for (const entry of getAiEntries("en")) {
    lines.push(
      `- [${entry.title}](${entry.href}): ${en.ai.kind[entry.kind]}. ${entry.summary[0]}`,
    );
  }
  lines.push("");

  lines.push("## Games");
  lines.push("");
  for (const game of getGames("en")) {
    lines.push(
      `- [${game.title}](${url(game.href)}): made by ${game.model} in ${game.setup}. ` +
        game.summary,
    );
  }
  lines.push("");

  lines.push("## Contact");
  lines.push("");
  for (const contact of getContacts("en")) {
    lines.push(`- ${contact.label}: ${contact.href.replace(/^mailto:/, "")}`);
  }
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(
    `- [Full text](${url(LLMS_FULL_PATH)}): every page in English and Russian, ` +
      "grouped by language, then by page",
  );

  return finish(lines);
}

/** Header of one page in the full text: its name, address and summary */
function pageHead(lines: string[], title: string, path: string, description?: string) {
  lines.push(`### ${title}`);
  lines.push("");
  lines.push(`Source: ${url(path)}`);
  lines.push("");
  if (description) {
    lines.push(description);
    lines.push("");
  }
}

function homeText(lines: string[], lang: Lang) {
  // No summary: the site description is the first frame's text word for word
  pageHead(lines, getUi(lang).siteTitle, langPath(lang));
  for (const frame of getFrames(lang)) {
    lines.push(`#### ${frame.eyebrow} — ${frame.title}`);
    lines.push("");
    for (const paragraph of frame.body) {
      lines.push(paragraph.text);
      lines.push("");
    }
    if (frame.cta) {
      lines.push(`Link: ${frame.cta.href}`);
      lines.push("");
    }
  }
}

function aiText(lines: string[], lang: Lang) {
  const ai = getUi(lang).ai;
  pageHead(lines, ai.heading, aiPath(lang), ai.description);
  for (const paragraph of ai.lead) {
    lines.push(paragraph);
    lines.push("");
  }
  for (const entry of getAiEntries(lang)) {
    lines.push(`#### ${entry.title} — ${ai.kind[entry.kind]}`);
    lines.push("");
    for (const paragraph of entry.summary) {
      lines.push(paragraph);
      lines.push("");
    }
    // One fact per line: the list of agents already uses the middle dot
    lines.push(`- ${ai.facts.agents}: ${entry.agents}`);
    lines.push(`- ${ai.facts.requires}: ${entry.requires}`);
    lines.push("");
    lines.push(`${ai.facts.install}:`);
    lines.push("");
    lines.push("```");
    lines.push(...entry.install);
    lines.push("```");
    lines.push("");
    lines.push(`GitHub: ${entry.href}`);
    lines.push("");
  }
}

function gamesText(lines: string[], lang: Lang) {
  const games = getUi(lang).games;
  pageHead(lines, games.heading, gamesPath(lang), games.description);
  for (const paragraph of games.lead) {
    lines.push(paragraph);
    lines.push("");
  }
  for (const game of getGames(lang)) {
    lines.push(`#### ${game.title}`);
    lines.push("");
    lines.push(
      `${games.facts.model}: ${game.model} · ${games.facts.setup}: ${game.setup} · ` +
        `${games.facts.prompts}: ${game.prompts}`,
    );
    lines.push("");
    lines.push(game.summary);
    lines.push("");
    lines.push(`${games.play}: ${url(game.href)}`);
    lines.push("");
  }
}

function spaceText(lines: string[], lang: Lang) {
  const space = getUi(lang).space;
  pageHead(lines, space.title, spacePath(lang), space.description);
  for (const body of getBodies(lang)) {
    lines.push(`#### ${body.name} — ${body.tagline}`);
    lines.push("");
    lines.push(body.stats.map((s) => `${s.label}: ${s.value}`).join(" · "));
    lines.push("");
    lines.push(body.body);
    lines.push("");
  }
}

/** Interactive scenes with no text of their own beyond the summary */
function sceneTexts(lines: string[], lang: Lang) {
  const { space3d, gargantua } = getUi(lang);
  pageHead(lines, space3d.title, space3dPath(lang), space3d.description);
  pageHead(lines, gargantua.title, gargantuaPath(lang), gargantua.description);
}

function spiritText(lines: string[], lang: Lang) {
  const spirit = getUi(lang).spirit;
  pageHead(lines, spirit.heading, spiritPath(lang), spirit.description);
  lines.push(`${spirit.date} (${SPIRIT_DAY})`);
  lines.push("");
  for (const paragraph of spirit.lead) {
    lines.push(paragraph);
    lines.push("");
  }

  for (const match of getSpiritMatches(lang)) {
    lines.push(`#### ${match.discipline} — ${match.event}`);
    lines.push("");
    lines.push(
      `${SPIRIT_TEAM} ${match.score[0]}:${match.score[1]} ${match.opponent} ` +
        `(${match.format}) — ${match.venue}, ${match.date}`,
    );
    lines.push("");
    lines.push(`${match.prize}. ${match.line}`);
    lines.push("");
    lines.push(
      `${spirit.rosterWord}: ${match.roster.join(", ")} · ` +
        `${spirit.coachWord}: ${match.coach}`,
    );
    lines.push("");
    lines.push(`${spirit.sourceWord}: ${match.source}`);
    lines.push("");
  }

  for (const step of spirit.timeline) {
    lines.push(`${step.mark} — ${step.text}`);
    lines.push("");
  }

  lines.push(`#### ${spirit.cityLabel}`);
  lines.push("");
  for (const paragraph of spirit.city) {
    lines.push(paragraph);
    lines.push("");
  }
  lines.push(
    `${SPIRIT_CITY_TITLE.discipline} — ${SPIRIT_CITY_TITLE.event}: ` +
      `${SPIRIT_TEAM} ${SPIRIT_CITY_TITLE.score[0]}:${SPIRIT_CITY_TITLE.score[1]} ` +
      `${SPIRIT_CITY_TITLE.opponent} · ${SPIRIT_CITY_TITLE.source}`,
  );
  lines.push("");

  for (const fact of spirit.facts) {
    lines.push(`- ${fact}`);
  }
  lines.push("");
  for (const paragraph of spirit.note) {
    lines.push(paragraph);
    lines.push("");
  }
  lines.push(`#### ${spirit.psLabel}`);
  lines.push("");
  for (const paragraph of spirit.ps) {
    lines.push(paragraph);
    lines.push("");
  }
  lines.push(spirit.disclaimer);
  lines.push("");
}

function paperDecisionText(lines: string[], lang: Lang) {
  const paper = getPaperDecision(lang);
  pageHead(lines, paper.heading, paperDecisionPath(lang), paper.description);
  lines.push(`${paper.date} (${PAPER_DECISION_DATE})`);
  lines.push("");
  const paragraphs = (items: string[]) => {
    for (const item of items) {
      lines.push(item);
      lines.push("");
    }
  };
  const heading = (label: string) => {
    lines.push(`#### ${label}`);
    lines.push("");
  };

  paragraphs(paper.lead);

  heading(paper.whatLabel);
  paragraphs(paper.what);
  for (const question of paper.questions) {
    lines.push(`- ${question.name}: ${question.text}`);
  }
  lines.push("");
  lines.push(`${paper.illustrationLabel}. ${paper.illustrationNote}`);
  lines.push("");
  for (const example of paper.examples) {
    lines.push(`##### ${example.tab}`);
    lines.push("");
    lines.push(`${example.stateLabel}: ${example.state}`);
    lines.push("");
    for (const row of example.rows) {
      lines.push(`- ${row.kind}, ${row.question} ${row.answer}`);
    }
    lines.push("");
  }
  paragraphs(paper.whatAfter);

  heading(paper.modelsLabel);
  paragraphs(paper.models);
  for (const model of paper.modelList) {
    lines.push(`- ${model.name}: ${model.text}`);
  }
  lines.push("");
  paragraphs([paper.modelsAfter]);

  heading(paper.whyLabel);
  paragraphs(paper.why);
  for (const number of paper.numbers) {
    lines.push(`- ${number.value} ${number.label}`);
  }
  lines.push("");
  lines.push(`##### ${paper.priceLabel}`);
  lines.push("");
  paragraphs([paper.priceIntro]);
  PAPER_DECISION_PRICE_CALLS.forEach((call, index) => {
    const price = priceOfMillionCalls(call);
    const money = (value: number) => `$${value.toFixed(2)}`;
    lines.push(
      `- ${paper.priceCalls[index].tab} (${call.inputTokens} ${paper.priceTokens.input}, ` +
        `${call.answerTokens} ${paper.priceTokens.answer}), ${paper.priceUnit}: ` +
        `${paper.priceRows.decision} ${money(price.decision)}, ` +
        `${paper.priceRows.haiku} ${money(price.haiku)}, ` +
        `${paper.priceRows.haikuLow} ${money(price.haikuLow)}`,
    );
  });
  lines.push("");
  paragraphs(paper.priceNotes);
  paragraphs(paper.priceVerdict);
  lines.push(`##### ${paper.speedLabel}`);
  lines.push("");
  lines.push(
    `- ${paper.speedRows.decision}: ${paper.speedRows.decisionValue}`,
  );
  lines.push(`- ${paper.speedRows.haiku}: ${paper.speedRows.haikuValue}`);
  lines.push("");
  paragraphs(paper.speedNotes);
  paragraphs(paper.speedVerdict);

  heading(paper.useLabel);
  paragraphs([paper.useIntro]);
  for (const item of paper.use) {
    lines.push(`##### ${item.mark}`);
    lines.push("");
    paragraphs(item.text);
  }
  paragraphs([paper.useMore, paper.useWarning]);

  heading(paper.indexLabel);
  paragraphs(paper.index);
  lines.push(`##### ${paper.beforeLabel}`);
  lines.push("");
  lines.push(paper.beforeAlt);
  lines.push("");
  paragraphs(paper.before);
  lines.push(`##### ${paper.afterLabel}`);
  lines.push("");
  lines.push(paper.afterAlt);
  lines.push("");
  paragraphs(paper.after);
  paragraphs(paper.indexVerdict);

  heading(paper.limitsLabel);
  for (const limit of paper.limits) {
    lines.push(`- ${limit.mark}: ${limit.text}`);
  }
  lines.push("");

  heading(paper.sourcesLabel);
  for (const source of PAPER_DECISION_SOURCES) {
    lines.push(`- [${source.label}](${source.href})`);
  }
  lines.push("");
  lines.push(paper.disclaimer);
  lines.push("");
}

/**
 * llms-full.txt: the text of every page, so a crawler does not need to run
 * the pages to read them — much of the site is drawn on canvases and in
 * WebGL. Grouped by language first, then by page in the order of the
 * header's navigation.
 */
export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push("# ZorahM — full text");
  lines.push("");
  lines.push(
    `> Every page of ${SITE_URL} in English and Russian, as plain text. ` +
      `The short index is at ${url("/llms.txt")}.`,
  );
  lines.push("");

  for (const lang of LANGS) {
    lines.push(`## ${LANG_TITLE[lang]}`);
    lines.push("");
    homeText(lines, lang);
    aiText(lines, lang);
    gamesText(lines, lang);
    spaceText(lines, lang);
    sceneTexts(lines, lang);
    spiritText(lines, lang);
    paperDecisionText(lines, lang);
  }

  return finish(lines);
}
