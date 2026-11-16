import {
  aiPath,
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
  paperDecisionLlmsPath,
  paperDecisionPath,
  paperPath,
  space3dPath,
  spacePath,
  spiritPath,
} from "./index";
import {
  PAPER_DECISION_DATE,
  PAPER_DECISION_EXPERIMENTS,
  PAPER_DECISION_IMAGES,
  PAPER_DECISION_INDEX_DETAIL_SOURCES,
  PAPER_DECISION_INDEX_WEIGHTS,
  PAPER_DECISION_PRICE_CALLS,
  PAPER_DECISION_PRICE_KEYS,
  PAPER_DECISION_PRICE_MAX,
  PAPER_DECISION_PRICES,
  PAPER_DECISION_PUBLISHED,
  PAPER_DECISION_RANKING,
  PAPER_DECISION_SECTIONS,
  PAPER_DECISION_SOURCES,
  PAPER_DECISION_TIMELINE,
  PAPER_DECISION_TIMING,
  PAPER_DECISION_USES,
  formatPaperDate,
  formatPaperDuration,
  formatPaperNumber,
  formatPaperRatio,
  formatPaperUsd,
  getPaperDecisionExample,
  getPaperDecisionExperiment,
  getPaperDecisionPractice,
  paperArchivedTiming,
  paperPriceRanges,
  paperPriceTariffs,
  priceOfMillionCalls,
  type PaperDecisionAnswer,
  type PaperDecisionSection,
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
    path: paperPath,
    title: (lang) => getPaperIndex(lang).title,
    description: (lang) => getPaperIndex(lang).description,
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
  for (const lang of LANGS) {
    lines.push(
      `- [Decision models — ${LANG_TITLE[lang]}, full text](${url(paperDecisionLlmsPath(lang))}): ` +
        "the article only, without navigation or other pages",
    );
  }
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
    // One fact per line: the lists already use the middle dot.
    lines.push(entry.kind === "app"
      ? `- ${ai.facts.platforms}: ${entry.platforms}`
      : `- ${ai.facts.agents}: ${entry.agents}`);
    lines.push(`- ${ai.facts.requires}: ${entry.requires}`);
    lines.push("");
    lines.push(`${ai.facts.install}:`);
    lines.push("");
    if (entry.kind === "app") {
      lines.push(`[${ai.download}](${entry.downloadHref})`);
    } else {
      lines.push("```");
      lines.push(...entry.install);
      lines.push("```");
    }
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

function paperIndexText(lines: string[], lang: Lang) {
  const paper = getPaperIndex(lang);
  pageHead(lines, paper.heading, paperPath(lang), paper.description);
  for (const paragraph of paper.lead) {
    lines.push(paragraph);
    lines.push("");
  }
  for (const article of getPaperArticles(lang)) {
    lines.push(
      `- [${article.title}](${url(article.path(lang))}) (${article.date}): ${article.summary}`,
    );
  }
  lines.push("");
}

function paperDecisionText(lines: string[], lang: Lang) {
  const paper = getPaperDecision(lang);
  pageHead(lines, paper.title, paperDecisionPath(lang), paper.description);

  const paragraph = (text: string) => lines.push(text, "");
  const subheading = (title: string) => paragraph("##### " + title);
  const list = (items: readonly string[]) => {
    lines.push(...items.map((item) => "- " + item), "");
  };
  const sources = (ids: readonly (keyof typeof PAPER_DECISION_SOURCES)[]) => {
    list(ids.map((id) => {
      const { label, href } = PAPER_DECISION_SOURCES[id];
      return "[" + label + "](" + href + ")";
    }));
  };
  const describeAnswer = ({ value, detail, rubric }: PaperDecisionAnswer) => {
    const extra = detail ? " (" + detail + ")" : "";
    if (!rubric) return value + extra;

    const labels = paper.exampleLabels.rubric;
    const scale = rubric.maximum ? " " + labels.outOf + " " + rubric.maximum : "";
    return [
      labels.mean + " " + value + scale + extra,
      ...rubric.levels.map(({ label, percent }) => labels.level + " " + label + " · " + percent),
    ].join("\n  - ");
  };
  const example = (item: ReturnType<typeof getPaperDecisionExample>, stateLabel = paper.exampleLabels.state) => {
    subheading(item.label);
    for (const call of item.calls) {
      paragraph(stateLabel + " · " + call.state);
      list(call.rows.map((row) => row.kind + " · " + row.question + " " + describeAnswer(row)));
    }
    for (const text of item.explanation) paragraph(text);
    if (item.sources.length > 0) sources(item.sources);
  };

  paragraph(paper.dates.published + " " + formatPaperDate(PAPER_DECISION_PUBLISHED, lang, true));
  paragraph(paper.dates.updated + " " + formatPaperDate(PAPER_DECISION_DATE, lang, true));
  paragraph(paper.opening.format);
  paragraph(paper.lead);

  const sections: Record<PaperDecisionSection, () => void> = {
    what() {
      paragraph(paper.intro.scenario);
      example(getPaperDecisionExample(lang, "ticket"), paper.intro.message);
      paragraph(paper.intro.explanation);
      paragraph(paper.intro.model);
      list(paper.intro.types.map(({ name, text }) => name + " · " + text));
      paragraph(paper.intro.extensions);
      paragraph(paper.intro.calibration);
      sources(["jevUpdate", "liquidTypes", "gemini", "openrouter", "aaMethod"]);
    },
    use() {
      for (const id of PAPER_DECISION_USES) example(getPaperDecisionExample(lang, id));
      paragraph(paper.useMore);
      paragraph(paper.useWarning);
    },
    models() {
      for (const [index, { date, source }] of PAPER_DECISION_TIMELINE.entries()) {
        const { title, text } = paper.timeline[index];
        subheading(formatPaperDate(date, lang) + " · " + title);
        paragraph(text);
        sources([source]);
      }
      subheading(paper.modelNotes.title);
      for (const { name, text, sources: refs } of paper.modelNotes.entries) {
        paragraph(name + " · " + text);
        sources(refs);
      }
    },
    index() {
      const { index } = paper;
      paragraph(index.lead);
      paragraph(index.v1Note);
      paragraph(index.v21Note);
      subheading(index.rankCaption);
      lines.push(...PAPER_DECISION_RANKING.map(({ model, score }, position) =>
        (position + 1) + ". " + model + " · " + formatPaperNumber(score, lang, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
      ), "");
      sources(["aaIndex", "nace"]);
      subheading(index.methodology);
      paragraph(index.metricNote);
      list(PAPER_DECISION_INDEX_WEIGHTS.map(({ evaluation, weight }, position) =>
        evaluation + " · " + formatPaperNumber(weight / 100, lang, { style: "percent" }) +
        " · " + index.metricDescriptions[position],
      ));
      sources(["aaMethod"]);
      subheading(index.details.title);
      for (const note of index.details.notes) paragraph(note);
      sources(PAPER_DECISION_INDEX_DETAIL_SOURCES);
      subheading(index.archiveTitle);
      list((["before", "after", "v2"] as const).map((id) => {
        const { title, caption, alt } = index.archives[id];
        return "[" + title + "](" + url(PAPER_DECISION_IMAGES[id].src) + ") · " + caption + " " + alt;
      }));
    },
    why() {
      const { price, timing } = paper;
      paragraph(price.intro);
      list(paperPriceTariffs(lang).map(({ value, label }) => value + " · " + label));
      subheading(price.caption);
      paragraph(price.barScale + " " + formatPaperUsd(PAPER_DECISION_PRICE_MAX, lang) + ".");
      for (const [index, call] of PAPER_DECISION_PRICE_CALLS.entries()) {
        const copy = price.calls[index];
        const cost = priceOfMillionCalls(call);
        paragraph(copy.label + " · " + formatPaperNumber(call.inputTokens, lang) + " " + price.tokens.input +
          " · " + formatPaperNumber(call.answerTokens, lang) + " " + price.tokens.output + ". " + copy.basis);
        list(PAPER_DECISION_PRICE_KEYS.map((key) => {
          const assumption = key === "haikuLow" ? " (" + PAPER_DECISION_PRICES.thinkingTokens + " " + price.thinkingAssumption + ")" : "";
          return price.names[key] + assumption + " · " + formatPaperUsd(cost[key], lang) +
            " · " + formatPaperRatio(cost[key] / cost.decision, lang);
        }));
      }
      paragraph(paperPriceRanges(lang));
      paragraph(price.billingNote);
      paragraph(price.geminiComparison);
      sources(["openrouter", "haiku", "liquid", "gemini"]);
      subheading(timing.caption);
      list(PAPER_DECISION_TIMING.map(({ model, score, durationMs }) =>
        model + " · " + paper.index.score + " " + score + " · " + formatPaperDuration(durationMs, lang),
      ));
      paragraph(timing.note);
      sources(["aaV2"]);
      paragraph(timing.extra);
      sources(["aaV2", "nace", "gemini"]);
      subheading(timing.archive.title);
      list(paperArchivedTiming(lang).map(([label, value]) => label + " · " + value));
      paragraph(timing.archive.note);
      sources(["jev", "haikuPerformance"]);
    },
    scale() {
      const labels = paper.exampleLabels;
      paragraph(paper.scale.intro);
      paragraph(paper.scale.setup);
      for (const id of PAPER_DECISION_EXPERIMENTS) {
        const experiment = getPaperDecisionExperiment(lang, id);
        subheading(experiment.label);
        paragraph(experiment.situation);
        paragraph(labels.state + " · " + experiment.state);
        for (const row of experiment.rows) {
          paragraph(row.question + " (" + row.answers[0].kind + ")");
          list(row.answers.map((answer, index) => experiment.models[index].name + " · " + describeAnswer(answer)));
        }
        list(experiment.models.map((model, index) => {
          const timing = index === 0
            ? labels.localInference + " " + formatPaperDuration(model.latencyMs, lang) + " · " +
              labels.localRoundTrip + " " + formatPaperDuration(experiment.localRoundTripMs, lang)
            : labels.apiTime + " " + formatPaperDuration(model.latencyMs, lang);
          return model.name + " · " + labels.inputTokens + " " + model.inputTokens + " · " + timing;
        }));
        paragraph(experiment.takeaway);
        if (experiment.evidenceNote) paragraph(experiment.evidenceNote);
      }
      paragraph(paper.scale.note);
      subheading(paper.scale.footprint.title);
      list(paper.scale.footprint.cards.map(({ model, amount, text }) => model + " · " + amount + " · " + text));
      paragraph(paper.scale.footprint.note);
    },
    limits() {
      list(paper.limits.map(({ title, text }) => title + " · " + text));
    },
    sources() {
      sources(Object.keys(PAPER_DECISION_SOURCES) as (keyof typeof PAPER_DECISION_SOURCES)[]);
    },
    practice() {
      const example = getPaperDecisionPractice(lang);
      const { title, completed, confirm, deny, permit, buildOutput } = example.preview;
      paragraph(example.lead);
      paragraph("Yaca · Auto · " + example.model);
      paragraph("Noul · " + example.question);
      for (const call of example.calls) {
        subheading("`" + call.command + "`");
        paragraph(call.task);
        paragraph(`${example.response} · ${call.assessment} · ${call.scorePercent} ${example.scoreMeaning} · \`{ "type": "noul", "noul": ${call.scoreValue} }\``);
        paragraph(`${example.rule} · \`${call.comparison}\` → \`${call.allowed}\` · ${call.outcome}`);
        paragraph(`${title} · ${call.allowed ? completed : confirm}`);
        if (call.allowed) {
          lines.push("```text", "$ " + call.command, buildOutput, "```", "");
        } else {
          paragraph(`\`${call.command}\` · ${deny} / ${permit}`);
        }
      }
      paragraph(`${example.note} ${example.model}. [${example.sourceLabel}](${example.source})`);
    },
  };

  for (const id of PAPER_DECISION_SECTIONS) {
    paragraph("#### " + paper.sections[id]);
    sections[id]();
  }
}

/** The article alone, using the same content as the page and full-site export. */
export function buildPaperDecisionLlmsTxt(lang: Lang): string {
  const lines: string[] = [];
  paperDecisionText(lines, lang);
  return finish(lines.map((line) => line.replace(/^(#{3,5}) /, (_, hashes: string) =>
    `${hashes.slice(2)} `,
  )));
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
    paperIndexText(lines, lang);
    paperDecisionText(lines, lang);
  }

  return finish(lines);
}
