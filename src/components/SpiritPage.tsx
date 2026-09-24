"use client";

import Link from "next/link";
import {
  SPIRIT_CITY_TITLE,
  SPIRIT_DAY,
  SPIRIT_SOURCES,
  SPIRIT_TEAM,
  formatDay,
  formatDaysAfter,
  getSpiritMatches,
  getUi,
  langPath,
  otherLang,
  spiritPath,
  type Lang,
} from "@/content";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, ArrowUpRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import styles from "./SpiritPage.module.css";

const twoDigits = (n: number) => String(n).padStart(2, "0");

/**
 * The /spirit page: a fan's note about 23 August 2026 and the trophy that
 * followed it.
 *
 * The layout reads left to right. The titles stand in one strip along a date
 * line, the day runs as a row of steps, and the text below sits in columns
 * rather than one narrow stack.
 *
 * Nothing that could get mixed up in translation is written here: score,
 * opponent, roster, date and source come from SPIRIT_STRUCTURE the same for
 * both languages, and the dictionary only supplies the words around them.
 *
 * No team or tournament marks anywhere, only names in the text: the figure is
 * the site's own dots.
 */
export function SpiritPage({ lang }: { lang: Lang }) {
  const matches = getSpiritMatches(lang);
  const ui = getUi(lang);
  const note = ui.spirit;

  return (
    <EcoShell lang={lang} otherHref={spiritPath(otherLang(lang))} current="spirit">
      <article>
        <header className={`${eco.section} ${styles.hero}`}>
          <div className={styles.heroText}>
            <Link href={langPath(lang)} className={styles.back}>
              <ArrowLeftIcon />
              {note.home}
            </Link>
            <p className={`${eco.label} ${styles.eyebrow}`}>
              <span>{note.eyebrow}</span>
              <time dateTime={SPIRIT_DAY} className={eco.labelInk}>
                {note.date}
              </time>
            </p>
            <h1 className={`${eco.displayXl} ${styles.title}`}>{note.heading}</h1>
            {note.lead.map((text, index) => (
              <p key={index} className={`${eco.body} ${index > 0 ? eco.muted : ""}`}>
                {text}
              </p>
            ))}
          </div>

          <div className={styles.heroPlate}>
            <DotPlate shape="spirit" accent={1} cols={30} rows={20} lens />
          </div>
        </header>

        <section className={eco.section}>
          <h2 className={eco.label}>{note.runLabel}</h2>

          <ol className={styles.boards}>
            {matches.map((match, index) => {
              const previous = index > 0 ? matches[index - 1] : undefined;
              // A title from a later day breaks the date line and says how much later
              const later = previous !== undefined && previous.date !== match.date;

              return (
                <li key={match.id} className={`${styles.board} ${later ? styles.later : ""}`}>
                  <p className={styles.stamp}>
                    <i className={styles.dot} aria-hidden="true" />
                    <time dateTime={match.date} className={eco.code}>
                      {formatDay(match.date, lang)}
                    </time>
                    {later && (
                      <span className={styles.gap}>
                        {formatDaysAfter(previous.date, match.date, lang)}
                      </span>
                    )}
                  </p>

                  <div className={styles.card}>
                    <p className={eco.label}>
                      {match.discipline}
                      <span aria-hidden="true"> · </span>
                      {match.event}
                    </p>
                    <p className={eco.hint}>{match.venue}</p>

                    <p className={styles.score}>
                      <span className={styles.side}>{SPIRIT_TEAM}</span>
                      <b className={styles.digits}>
                        <span>{match.score[0]}</span>
                        <span className={styles.colon} aria-hidden="true">
                          :
                        </span>
                        <span className={styles.lost}>{match.score[1]}</span>
                      </b>
                      <span className={`${styles.side} ${styles.away}`}>{match.opponent}</span>
                    </p>

                    <p className={eco.label}>
                      {note.scoreWord}
                      <span aria-hidden="true"> · </span>
                      {match.format}
                    </p>

                    <h3 className={eco.heading}>{match.prize}</h3>
                    <p className={`${eco.body} ${styles.line}`}>{match.line}</p>

                    <dl className={styles.roster}>
                      <div>
                        <dt className={eco.label}>{note.rosterWord}</dt>
                        <dd>{match.roster.join(" · ")}</dd>
                      </div>
                      <div>
                        <dt className={eco.label}>{note.coachWord}</dt>
                        <dd>{match.coach}</dd>
                      </div>
                    </dl>

                    <a
                      className={`${eco.inkLink} ${styles.source}`}
                      href={match.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {note.sourceWord}
                      <ArrowUpRightIcon />
                    </a>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className={eco.section}>
          <h2 className={eco.label}>{note.timelineLabel}</h2>
          <ol className={styles.timeline}>
            {note.timeline.map((step, index) => (
              <li key={index}>
                <p className={styles.step}>
                  <span className={eco.code}>{twoDigits(index + 1)}</span>
                  <span className={`${eco.label} ${eco.labelInk}`}>{step.mark}</span>
                </p>
                <p className={eco.body}>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className={`${eco.section} ${styles.pair}`}>
          {/* The coincidence that makes the city worth naming twice */}
          <aside className={styles.city}>
            <h2 className={eco.label}>{note.cityLabel}</h2>
            {note.city.map((text, index) => (
              <p key={index} className={eco.body}>
                {text}
              </p>
            ))}

            <p className={styles.cityScore}>
              <span className={eco.label}>
                {SPIRIT_CITY_TITLE.discipline}
                <span aria-hidden="true"> · </span>
                {SPIRIT_CITY_TITLE.event}
              </span>
              <span className={styles.cityResult}>
                {SPIRIT_TEAM}{" "}
                <b>
                  {SPIRIT_CITY_TITLE.score[0]}
                  <span aria-hidden="true">:</span>
                  {SPIRIT_CITY_TITLE.score[1]}
                </b>{" "}
                {SPIRIT_CITY_TITLE.opponent}
              </span>
            </p>

            <a
              className={`${eco.inkLink} ${styles.source}`}
              href={SPIRIT_CITY_TITLE.source}
              target="_blank"
              rel="noreferrer"
            >
              {note.sourceWord}
              <ArrowUpRightIcon />
            </a>
          </aside>

          <section className={styles.factsBlock}>
            <h2 className={eco.label}>{note.factsLabel}</h2>
            <ol className={styles.facts}>
              {note.facts.map((fact, index) => (
                <li key={index}>
                  <span className={eco.code}>{twoDigits(index + 1)}</span>
                  <p className={eco.body}>{fact}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className={`${eco.section} ${styles.split}`}>
          <h2 className={eco.displayL}>{note.noteLabel}</h2>
          <div className={styles.columns}>
            {note.note.map((text, index) => (
              <p key={index} className={eco.body}>
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* Written after the note, so it stands apart from it */}
        <section className={`${eco.section} ${styles.split} ${styles.ps}`}>
          <h2 className={eco.heading}>{note.psLabel}</h2>
          <div className={styles.columns}>
            {note.ps.map((text, index) => (
              <p key={index} className={eco.body}>
                {text}
              </p>
            ))}
          </div>
        </section>

        <footer className={`${eco.section} ${styles.foot}`}>
          <div className={styles.sourcesBlock}>
            <h2 className={eco.label}>{note.sourcesLabel}</h2>
            <ul className={styles.sources}>
              {SPIRIT_SOURCES.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    <span>{source.label}</span>
                    <ArrowUpRightIcon className={eco.arrowMuted} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className={`${eco.hint} ${styles.disclaimer}`}>{note.disclaimer}</p>
        </footer>
      </article>
    </EcoShell>
  );
}
