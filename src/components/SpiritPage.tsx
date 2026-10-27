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
 * It is built to be read. One column of text at a comfortable measure, with
 * a contents list standing in the margin; every part has a real heading, and
 * each title is its own sheet, stacked, instead of three narrow columns side
 * by side.
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

  // The contents list: the parts of the page in reading order
  const contents = [
    { id: "run", label: note.runLabel },
    { id: "day", label: note.timelineLabel },
    { id: "city", label: note.cityLabel },
    { id: "facts", label: note.factsLabel },
    { id: "note", label: note.noteLabel },
    { id: "ps", label: note.psLabel },
    { id: "sources", label: note.sourcesLabel },
  ];

  return (
    <EcoShell lang={lang} otherHref={spiritPath(otherLang(lang))} current="spirit">
      <article>
        <header className={styles.hero}>
          <Link href={langPath(lang)} className={styles.back}>
            <ArrowLeftIcon />
            {note.home}
          </Link>

          <h1 className={styles.title}>{note.heading}</h1>

          <div className={styles.heroBody}>
            <div className={styles.heroText}>
              <p className={styles.dateLine}>
                <span>{note.eyebrow}</span>
                <time dateTime={SPIRIT_DAY}>{note.date}</time>
              </p>
              {note.lead.map((text, index) => (
                <p key={index} className={index === 0 ? styles.lead : styles.leadMuted}>
                  {text}
                </p>
              ))}
            </div>

            <div className={`${eco.tinted} ${styles.heroPlate}`}>
              <DotPlate shape="spirit" accent={1} cols={30} rows={20} lens arrive />
            </div>
          </div>
        </header>

        <div className={styles.layout}>
          <nav className={`${eco.card} ${styles.contents}`} aria-label={note.contentsLabel}>
            <ol>
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={`${eco.card} ${styles.main}`}>
            <section id="run" className={styles.part}>
              <h2 className={styles.h2}>{note.runLabel}</h2>

              <ol className={styles.sheets}>
                {matches.map((match, index) => {
                  const previous = index > 0 ? matches[index - 1] : undefined;
                  // A title from a later day says how much later it came
                  const later = previous !== undefined && previous.date !== match.date;

                  return (
                    <li key={match.id} className={styles.sheet}>
                      <p className={styles.stamp}>
                        <time dateTime={match.date}>{formatDay(match.date, lang)}</time>
                        {later && (
                          <span className={styles.gap}>
                            {formatDaysAfter(previous.date, match.date, lang)}
                          </span>
                        )}
                      </p>

                      <h3 className={styles.prize}>{match.prize}</h3>
                      <p className={styles.event}>
                        {match.discipline}
                        <span aria-hidden="true"> · </span>
                        {match.event}
                        <span aria-hidden="true"> · </span>
                        {match.venue}
                      </p>

                      <p className={styles.score}>
                        <span className={styles.side}>{SPIRIT_TEAM}</span>
                        <b className={styles.digits}>
                          <span>{match.score[0]}</span>
                          <span className={styles.colon} aria-hidden="true">
                            :
                          </span>
                          <span className={styles.lost}>{match.score[1]}</span>
                        </b>
                        <span className={`${styles.side} ${styles.away}`}>
                          {match.opponent}
                        </span>
                      </p>

                      <p className={styles.text}>{match.line}</p>

                      <dl className={styles.roster}>
                        <div>
                          <dt>{note.scoreWord}</dt>
                          <dd>{match.format}</dd>
                        </div>
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
                        className={`${eco.inkLink} ${styles.source}`}
                        href={match.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {note.sourceWord}
                        <ArrowUpRightIcon />
                      </a>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section id="day" className={styles.part}>
              <h2 className={styles.h2}>{note.timelineLabel}</h2>
              <ol className={styles.timeline}>
                {note.timeline.map((step, index) => (
                  <li key={index}>
                    <span className={styles.stepNo}>{twoDigits(index + 1)}</span>
                    <div>
                      <h3 className={styles.stepMark}>{step.mark}</h3>
                      <p className={styles.text}>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="city" className={styles.part}>
              <h2 className={styles.h2}>{note.cityLabel}</h2>
              {note.city.map((text, index) => (
                <p key={index} className={styles.text}>
                  {text}
                </p>
              ))}

              {/* The coincidence that makes the city worth naming twice */}
              <p className={styles.cityScore}>
                <span className={styles.event}>
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
            </section>

            <section id="facts" className={styles.part}>
              <h2 className={styles.h2}>{note.factsLabel}</h2>
              <ol className={styles.facts}>
                {note.facts.map((fact, index) => (
                  <li key={index}>
                    <span className={styles.stepNo}>{twoDigits(index + 1)}</span>
                    <p className={styles.text}>{fact}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="note" className={`${styles.part} ${styles.essay}`}>
              <h2 className={styles.h2}>{note.noteLabel}</h2>
              {note.note.map((text, index) => (
                <p key={index} className={styles.essayText}>
                  {text}
                </p>
              ))}
            </section>

            {/* Written after the note, so it stands apart from it */}
            <section id="ps" className={`${styles.part} ${styles.ps}`}>
              <h2 className={styles.h3}>{note.psLabel}</h2>
              {note.ps.map((text, index) => (
                <p key={index} className={styles.text}>
                  {text}
                </p>
              ))}
            </section>

            <footer id="sources" className={styles.part}>
              <h2 className={styles.h3}>{note.sourcesLabel}</h2>
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
              <p className={styles.disclaimer}>{note.disclaimer}</p>
            </footer>
          </div>
        </div>
      </article>
    </EcoShell>
  );
}
