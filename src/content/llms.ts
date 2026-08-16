import { getContacts, getFrames, getUi, langPath } from "./index";
import { LANGS, SITE_URL, type Lang } from "./types";

const absolute = (lang: Lang) => new URL(langPath(lang), SITE_URL).toString();

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
      "each pairing a short text with a halftone figure rendered in WebGL. " +
      "Available in English and Russian; the full text of both versions is " +
      "included below.",
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
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}
