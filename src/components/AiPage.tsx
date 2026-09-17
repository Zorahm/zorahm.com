"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  aiPath,
  getAiEntries,
  getContacts,
  getUi,
  langPath,
  otherLang,
  type AiEntry,
  type Lang,
} from "@/content";
import { useStageDriver } from "@/lib/scroll";
import type { FieldFrame } from "./field/Halftone";
import hud from "./Hud.module.css";
import styles from "./AiPage.module.css";

// WebGL only lives in the browser; there is nothing to render on the server
const Field = dynamic(() => import("./field/Field"), { ssr: false });

/** One still figure behind the whole page */
const FRAMES: readonly FieldFrame[] = [{ id: "latent", accent: 0.85 }];

/** Counters and indices are set in two digits: 01, 04 */
const twoDigits = (n: number) => String(n).padStart(2, "0");

/** An entry opens in a new tab: every link on the page leads off the site */
function EntryTitle({ entry }: { entry: AiEntry }) {
  if (!entry.href) return entry.title;
  return (
    <a
      className={styles.stretch}
      href={entry.href}
      target="_blank"
      rel="noreferrer"
    >
      {entry.title}
    </a>
  );
}

function Status({ entry, label }: { entry: AiEntry; label: string }) {
  return (
    <span className={styles.status} data-status={entry.status}>
      <i aria-hidden="true" />
      {label}
    </span>
  );
}

/**
 * The /ai page: projects built for artificial intelligence and around it,
 * and everything else on the subject.
 *
 * The field here is a backdrop that has to stay visible, so there is no
 * single sheet over it as on /spirit. The page is made of separate glass
 * blocks instead: the dots read clearly in the gaps between them and as a
 * soft glow through them.
 *
 * Counters are counted from the entries, not written in the dictionaries, so
 * they cannot fall out of step with what the page lists.
 */
export function AiPage({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const page = ui.ai;
  const other = otherLang(lang);
  const otherUi = getUi(other);

  const entries = getAiEntries(lang);
  const projects = entries.filter((entry) => entry.group === "projects");
  const rest = entries.filter((entry) => entry.group === "other");

  const counts = [
    { label: page.counts.projects, value: projects.length },
    {
      label: page.counts.live,
      value: entries.filter((entry) => entry.status === "live").length,
    },
    {
      label: page.counts.wip,
      value: entries.filter((entry) => entry.status === "wip").length,
    },
    { label: page.counts.other, value: rest.length },
  ];

  useStageDriver(0);

  return (
    <>
      <Field frames={FRAMES} still />

      <Link
        href={langPath(lang)}
        className={`${hud.hud} ${hud.mark} ${styles.hudTop}`}
      >
        Z<span>\</span>M
      </Link>

      <nav
        className={`${hud.hud} ${hud.lang} ${styles.hudTop}`}
        aria-label={ui.switchLanguage}
      >
        <span className={hud.langActive} aria-current="page">
          {ui.langName}
        </span>
        <span className={hud.langSep} aria-hidden="true">
          /
        </span>
        <Link href={aiPath(other)} hrefLang={other} lang={other}>
          {otherUi.langName}
        </Link>
      </nav>

      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>
            <span>{page.eyebrow}</span>
            <span className={styles.draft}>{page.draft}</span>
          </p>

          <h1 className={styles.title}>{page.heading}</h1>

          <div className={styles.lead}>
            {page.lead.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <dl className={styles.counts}>
            {counts.map((count) => (
              <div key={count.label}>
                <dt>{count.label}</dt>
                <dd>{twoDigits(count.value)}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className={styles.section}>
          <h2 className={styles.label}>{page.projectsLabel}</h2>

          <ol className={styles.grid}>
            {projects.map((entry, index) => (
              <li
                key={entry.id}
                className={
                  entry.featured
                    ? `${styles.card} ${styles.featured}`
                    : styles.card
                }
              >
                <p className={styles.cardHead}>
                  <span className={styles.index}>{twoDigits(index + 1)}</span>
                  <Status entry={entry} label={page.status[entry.status]} />
                  <span className={styles.year}>{entry.year}</span>
                </p>

                <h3 className={styles.cardTitle}>
                  <EntryTitle entry={entry} />
                </h3>
                <p className={styles.summary}>{entry.summary}</p>

                <ul className={styles.tags}>
                  {entry.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {entry.href && (
                  <i className={styles.arrow} aria-hidden="true">
                    ↗
                  </i>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.label}>{page.otherLabel}</h2>

          <ol className={styles.rows}>
            {rest.map((entry, index) => (
              <li key={entry.id} className={styles.row}>
                <span className={styles.index}>{twoDigits(index + 1)}</span>
                <h3 className={styles.rowTitle}>
                  <EntryTitle entry={entry} />
                </h3>
                <p className={styles.rowSummary}>{entry.summary}</p>
                <p className={styles.rowMeta}>
                  <Status entry={entry} label={page.status[entry.status]} />
                  <span className={styles.rowTags}>
                    {entry.tags.join(" · ")}
                  </span>
                </p>
                <span className={styles.year}>{entry.year}</span>
                <i className={styles.rowArrow} aria-hidden="true">
                  {entry.href ? "↗" : ""}
                </i>
              </li>
            ))}
          </ol>
        </section>

        <footer className={`${styles.section} ${styles.foot}`}>
          <div>
            <h2 className={styles.label}>{ui.contactsLabel}</h2>
            <p className={styles.outro}>{page.outro}</p>
            <ul className={styles.contacts}>
              {getContacts(lang).map((contact) => {
                const external = contact.href.startsWith("http");
                return (
                  <li key={contact.href}>
                    <a
                      href={contact.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      {contact.label}
                      <i aria-hidden="true">↗</i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link href={langPath(lang)} className={styles.biglink}>
            {page.home}
            <i aria-hidden="true">→</i>
          </Link>
        </footer>
      </main>
    </>
  );
}
