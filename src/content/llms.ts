import {
  getBodies,
  getContacts,
  getFrames,
  getSpiritMatches,
  getUi,
  langPath,
  space3dPath,
  spacePath,
  spiritPath,
} from "./index";
import { SPIRIT_CITY_TITLE, SPIRIT_DAY } from "./spirit";
import { LANGS, SITE_URL, type Lang } from "./types";

const absolute = (lang: Lang) => new URL(langPath(lang), SITE_URL).toString();
const spaceUrl = (lang: Lang) => new URL(spacePath(lang), SITE_URL).toString();
const space3dUrl = (lang: Lang) =>
  new URL(space3dPath(lang), SITE_URL).toString();
const spiritUrl = (lang: Lang) => new URL(spiritPath(lang), SITE_URL).toString();

const LANG_TITLE: Record<Lang, string> = {
  en: "English",
  ru: "Русский",
};

/**
 * llms.txt по формату llmstxt.org: заголовок, краткое описание в цитате,
 * затем разделы со ссылками.
 *
 * Содержимое страницы рисуется в WebGL и раскрывается по скроллу, поэтому
 * весь текст продублирован здесь в готовом виде — краулеру не нужно исполнять
 * страницу, чтобы понять, о чём сайт.
 *
 * Собирается из тех же словарей, что и сама страница: иначе файл тихо
 * устаревал бы после каждой правки текстов.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push("# ZorahM");
  lines.push("");
  lines.push(`> ${getUi("en").siteDescription}`);
  lines.push("");
  lines.push(
    "Personal site of ZorahM. A single scroll-driven page told in eight frames, " +
      "each pairing a short text with a halftone figure rendered in WebGL, plus " +
      "an interactive solar system at /space where every body can be opened and " +
      "read about, the same system ray-traced in 3D at /space-3d, and a fan's " +
      "note at /spirit about the day Team Spirit won two world titles. Available " +
      "in English and Russian; the full text of both versions is included below.",
  );
  lines.push("");
  lines.push("Crawling and indexing by AI agents is allowed.");
  lines.push("");

  lines.push("## Pages");
  lines.push("");
  for (const lang of LANGS) {
    lines.push(
      `- [${LANG_TITLE[lang]}](${absolute(lang)}): ${getUi(lang).siteTitle}`,
    );
  }
  for (const lang of LANGS) {
    lines.push(
      `- [${getUi(lang).space.title} — ${LANG_TITLE[lang]}](${spaceUrl(lang)}): ` +
        getUi(lang).space.description,
    );
  }
  for (const lang of LANGS) {
    lines.push(
      `- [${getUi(lang).space3d.title} — ${LANG_TITLE[lang]}](${space3dUrl(lang)}): ` +
        getUi(lang).space3d.description,
    );
  }
  for (const lang of LANGS) {
    lines.push(
      `- [${getUi(lang).spirit.title} — ${LANG_TITLE[lang]}](${spiritUrl(lang)}): ` +
        getUi(lang).spirit.description,
    );
  }
  lines.push("");

  lines.push("## Contact");
  lines.push("");
  for (const contact of getContacts("en")) {
    const href = contact.href.replace(/^mailto:/, "");
    lines.push(`- ${contact.label}: ${href}`);
  }
  lines.push("");

  for (const lang of LANGS) {
    lines.push(`## Full text — ${LANG_TITLE[lang]}`);
    lines.push("");
    lines.push(`Source: ${absolute(lang)}`);
    lines.push("");

    for (const frame of getFrames(lang)) {
      lines.push(`### ${frame.eyebrow} — ${frame.title}`);
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

    lines.push(`### ${getUi(lang).space.title}`);
    lines.push("");
    lines.push(`Source: ${spaceUrl(lang)}`);
    lines.push("");

    for (const body of getBodies(lang)) {
      lines.push(`#### ${body.name} — ${body.tagline}`);
      lines.push("");
      lines.push(body.stats.map((s) => `${s.label}: ${s.value}`).join(" · "));
      lines.push("");
      lines.push(body.body);
      lines.push("");
    }

    const spirit = getUi(lang).spirit;
    lines.push(`### ${spirit.heading}`);
    lines.push("");
    lines.push(`Source: ${spiritUrl(lang)}`);
    lines.push("");
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
        `Team Spirit ${match.score[0]}:${match.score[1]} ${match.opponent} ` +
          `(${match.format}) — ${match.venue}`,
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

    for (const paragraph of spirit.city) {
      lines.push(paragraph);
      lines.push("");
    }
    lines.push(
      `${SPIRIT_CITY_TITLE.discipline} — ${SPIRIT_CITY_TITLE.event}: ` +
        `Team Spirit ${SPIRIT_CITY_TITLE.score[0]}:${SPIRIT_CITY_TITLE.score[1]} ` +
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
    lines.push(spirit.disclaimer);
    lines.push("");
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}
