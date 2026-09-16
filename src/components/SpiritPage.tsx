"use client";

import dynamic from "next/dynamic";
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
import { useStageDriver } from "@/lib/scroll";
import type { FieldFrame } from "./field/Halftone";
import hud from "./Hud.module.css";
import styles from "./SpiritPage.module.css";

// WebGL only lives in the browser; there is nothing to render on the server
const Field = dynamic(() => import("./field/Field"), { ssr: false });

/**
 * One figure for the whole page: the field is a backdrop here, not a strip of
 * frames, so the scene stays put however far the note is scrolled.
 */
const FRAMES: readonly FieldFrame[] = [{ id: "spirit", accent: 0.7 }];

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
 */
export function SpiritPage({ lang }: { lang: Lang }) {
  const matches = getSpiritMatches(lang);
  const ui = getUi(lang);
  const note = ui.spirit;
  const other = otherLang(lang);
  const otherUi = getUi(other);

  useStageDriver(0);

  return (
    <>
      <Field frames={FRAMES} />

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
        <Link href={spiritPath(other)} hrefLang={other} lang={other}>
          {otherUi.langName}
        </Link>
      </nav>

      <main className={styles.main}>
        <article className={styles.sheet}>
          <header className={styles.head}>
            <div>
              <p className={styles.eyebrow}>
                <span>{note.eyebrow}</span>
                <time dateTime={SPIRIT_DAY}>{note.date}</time>
              </p>
              <h1 className={styles.title}>{note.heading}</h1>
            </div>

            <div className={styles.lead}>
              {note.lead.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </header>

          <section className={`${styles.band} ${styles.run}`}>
            <h2 className={styles.label}>{note.runLabel}</h2>

            <ol className={styles.boards}>
              {matches.map((match, index) => {
                const previous = index > 0 ? matches[index - 1] : undefined;
                // A title from a later day breaks the date line and says how much later
                const later =
                  previous !== undefined && previous.date !== match.date;

                return (
                  <li
                    key={match.id}
                    className={
                      later ? `${styles.board} ${styles.later}` : styles.board
                    }
                  >
                    <p className={styles.stamp}>
                      <i className={styles.dot} aria-hidden="true" />
                      <time dateTime={match.date}>
                        {formatDay(match.date, lang)}
                      </time>
                      {later && (
                        <span className={styles.gap}>
                          {formatDaysAfter(previous.date, match.date, lang)}
                        </span>
                      )}
                    </p>

                    <p className={styles.event}>
                      {match.discipline}
                      <span aria-hidden="true"> · </span>
                      {match.event}
                    </p>
                    <p className={styles.venue}>{match.venue}</p>

                    <p className={styles.score}>
                      <span className={styles.home}>{SPIRIT_TEAM}</span>
                      <b className={styles.digits}>
                        <i className={styles.won}>{match.score[0]}</i>
                        <span className={styles.colon} aria-hidden="true">
                          :
                        </span>
                        <span>{match.score[1]}</span>
                      </b>
                      <span className={styles.away}>{match.opponent}</span>
                    </p>

                    <p className={styles.format}>
                      {note.scoreWord}
                      <span aria-hidden="true"> · </span>
                      {match.format}
                    </p>

                    <p className={styles.prize}>{match.prize}</p>
                    <p className={styles.line}>{match.line}</p>

                    <dl className={styles.roster}>
                      <div>
                        <dt>{note.rosterWord}</dt>
                        <dd>{match.roster.join(" · ")}</dd>
                      </div>
                      <div>
                        <dt>{note.coachWord}</dt>
                        <dd>{match.coach}</dd>
                      </div>
                    </dl>

                    <a
                      className={styles.source}
                      href={match.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {note.sourceWord}
                      <i aria-hidden="true">↗</i>
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className={styles.band}>
            <h2 className={styles.label}>{note.timelineLabel}</h2>
            <ol className={styles.timeline}>
              {note.timeline.map((step, index) => (
                <li key={index}>
                  <span className={styles.mark}>{step.mark}</span>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className={styles.pair}>
            {/* The coincidence that makes the city worth naming twice */}
            <aside>
              <h2 className={styles.label}>{note.cityLabel}</h2>

              {note.city.map((text, index) => (
                <p key={index} className={styles.body}>
                  {text}
                </p>
              ))}

              <p className={styles.cityScore}>
                {SPIRIT_CITY_TITLE.discipline}
                <span aria-hidden="true"> · </span>
                {SPIRIT_CITY_TITLE.event}
                <span aria-hidden="true"> — </span>
                {SPIRIT_TEAM}{" "}
                <b>
                  {SPIRIT_CITY_TITLE.score[0]}
                  <span aria-hidden="true">:</span>
                  {SPIRIT_CITY_TITLE.score[1]}
                </b>{" "}
                {SPIRIT_CITY_TITLE.opponent}
              </p>

              <a
                className={styles.source}
                href={SPIRIT_CITY_TITLE.source}
                target="_blank"
                rel="noreferrer"
              >
                {note.sourceWord}
                <i aria-hidden="true">↗</i>
              </a>
            </aside>

            <section>
              <h2 className={styles.label}>{note.factsLabel}</h2>
              <ul className={styles.facts}>
                {note.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className={`${styles.band} ${styles.split}`}>
            <h2 className={styles.label}>{note.noteLabel}</h2>
            <div className={styles.columns}>
              {note.note.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </section>

          {/* Written after the note, so it stands apart from it */}
          <section className={`${styles.band} ${styles.split} ${styles.ps}`}>
            <h2 className={styles.psTitle}>{note.psLabel}</h2>
            <div className={styles.columns}>
              {note.ps.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </section>

          <footer className={`${styles.band} ${styles.foot}`}>
            <div>
              <h2 className={styles.label}>{note.sourcesLabel}</h2>
              <ul className={styles.sources}>
                {SPIRIT_SOURCES.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      {source.label}
                      <i aria-hidden="true">↗</i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={styles.disclaimer}>{note.disclaimer}</p>
              <Link href={langPath(lang)} className={styles.biglink}>
                {note.home}
                <i aria-hidden="true">→</i>
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
