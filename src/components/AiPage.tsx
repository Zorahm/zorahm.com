"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  aiPath,
  getAiEntries,
  getFrames,
  getUi,
  langPath,
  otherLang,
  type AiEntry,
  type AiEntryId,
  type Lang,
} from "@/content";
import { ContactBlock } from "./eco/ContactBlock";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon, CopyIcon } from "./eco/icons";
import type { PlateShape } from "./eco/plate";
import eco from "./eco/eco.module.css";
import styles from "./AiPage.module.css";

/** Counters and indices are set in two digits: 01, 04 */
const twoDigits = (n: number) => String(n).padStart(2, "0");

/** The dotted figure on each project's card */
const COVERS: Record<AiEntryId, PlateShape> = {
  zowork: "rules",
  "crossword-skill": "crossword",
};

/** Install commands with a button that copies all of them at once */
function Install({ entry, lang }: { entry: AiEntry; lang: Lang }) {
  const ui = getUi(lang);
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(entry.install.join("\n"));
    } catch {
      return; // Nothing was copied, so nothing to confirm
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={styles.install}>
      <pre className={styles.commands}>
        <code>{entry.install.join("\n")}</code>
      </pre>
      <button
        type="button"
        className={eco.secondarySmall}
        onClick={copy}
        title={ui.ai.copyInstall}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span aria-live="polite">{copied ? ui.shell.copied : ui.shell.copy}</span>
        <span className={styles.srOnly}> — {entry.title}</span>
      </button>
    </div>
  );
}

/**
 * The /ai page: plugins and skills that teach AI models to do something,
 * each one open source on GitHub.
 *
 * Counters are counted from the entries, not written in the dictionaries, so
 * they cannot fall out of step with what the page lists.
 */
export function AiPage({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const page = ui.ai;
  const entries = getAiEntries(lang);
  const contact = getFrames(lang).find((frame) => frame.contacts);

  const counts = [
    { label: page.counts.projects, value: entries.length },
    {
      label: page.counts.plugins,
      value: entries.filter((entry) => entry.kind === "plugin").length,
    },
    {
      label: page.counts.skills,
      value: entries.filter((entry) => entry.kind === "skill").length,
    },
  ];

  return (
    <EcoShell lang={lang} otherHref={aiPath(otherLang(lang))} current="ai">
      <section className={`${eco.section} ${styles.hero}`}>
        <div className={styles.heroText}>
          <Link href={langPath(lang)} className={styles.back}>
            <ArrowLeftIcon />
            {page.home}
          </Link>
          <p className={eco.label}>{page.eyebrow}</p>
          <h1 className={`${eco.displayXl} ${styles.title}`}>{page.heading}</h1>
          {page.lead.map((text, index) => (
            <p key={index} className={`${eco.body} ${index > 0 ? eco.muted : ""}`}>
              {text}
            </p>
          ))}

          <dl className={styles.counts}>
            {counts.map((count) => (
              <div key={count.label} className={styles.count}>
                <dt className={eco.label}>{count.label}</dt>
                <dd className={styles.countValue}>{twoDigits(count.value)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.heroPlate}>
          <DotPlate shape="network" accent={0.85} cols={30} rows={20} lens />
        </div>
      </section>

      <section className={eco.section}>
        <h2 className={eco.label}>{page.projectsLabel}</h2>

        <ol className={styles.list}>
          {entries.map((entry, index) => (
            <li key={entry.id}>
              <article className={styles.card}>
                <a
                  href={entry.href}
                  className={styles.cover}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <DotPlate shape={COVERS[entry.id]} accent={1} cols={30} rows={20} lens />
                </a>

                <div className={styles.info}>
                  <p className={styles.cardHead}>
                    <span className={eco.code}>{twoDigits(index + 1)}</span>
                    <span className={`${eco.label} ${styles.kind}`}>
                      <i aria-hidden="true" />
                      {page.kind[entry.kind]}
                    </span>
                    <span className={`${eco.code} ${styles.year}`}>{entry.year}</span>
                  </p>

                  <h3 className={eco.displayL}>{entry.title}</h3>
                  {entry.summary.map((text, i) => (
                    <p key={i} className={`${eco.body} ${i > 0 ? eco.muted : ""}`}>
                      {text}
                    </p>
                  ))}

                  <ul className={styles.tags}>
                    {entry.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <dl className={styles.facts}>
                    <div>
                      <dt className={eco.label}>{page.facts.agents}</dt>
                      <dd>{entry.agents}</dd>
                    </div>
                    <div>
                      <dt className={eco.label}>{page.facts.requires}</dt>
                      <dd>{entry.requires}</dd>
                    </div>
                    <div>
                      <dt className={eco.label}>{page.facts.install}</dt>
                      <dd>
                        <Install entry={entry} lang={lang} />
                      </dd>
                    </div>
                  </dl>

                  <div className={eco.actions}>
                    <a
                      href={entry.href}
                      className={eco.primary}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {page.open}
                      <ArrowUpRightIcon />
                      <span className={styles.srOnly}> — {entry.title}</span>
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <ContactBlock
        lang={lang}
        eyebrow={ui.contactsLabel}
        heading={contact?.title ?? ui.contactsLabel}
        body={[page.outro]}
      />
    </EcoShell>
  );
}
