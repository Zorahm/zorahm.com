"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  SPIRIT_CITY_TITLE,
  SPIRIT_DAY,
  SPIRIT_SOURCES,
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

// WebGL живёт только в браузере, на сервере рендерить нечего
const Field = dynamic(() => import("./field/Field"), { ssr: false });

/**
 * Одна фигура на всю страницу: поле здесь фон, а не лента кадров, поэтому
 * сцена стоит на месте, сколько бы записку ни прокручивали.
 */
const FRAMES: readonly FieldFrame[] = [{ id: "spirit", accent: 0.7 }];

/**
 * Страница /spirit — записка болельщика о 23 августа 2026 года.
 *
 * Всё, что можно перепутать при переводе, сюда не попадает: счёт, соперник,
 * состав и ссылка на первоисточник приходят из SPIRIT_STRUCTURE одинаковыми
 * для обоих языков, а словарь отвечает только за слова вокруг них.
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

      <Link href={langPath(lang)} className={`${hud.hud} ${hud.mark}`}>
        Z<span>\</span>M
      </Link>

      <nav className={`${hud.hud} ${hud.lang}`} aria-label={ui.switchLanguage}>
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
        <article className={styles.note}>
          <header className={styles.head}>
            <p className={styles.eyebrow}>{note.eyebrow}</p>
            <time className={styles.date} dateTime={SPIRIT_DAY}>
              {note.date}
            </time>
            <h1 className={styles.title}>{note.heading}</h1>

            {note.lead.map((text, index) => (
              <p
                key={index}
                className={
                  index === 0 ? styles.lead : `${styles.lead} ${styles.muted}`
                }
              >
                {text}
              </p>
            ))}
          </header>

          <div className={styles.boards}>
            {matches.map((match) => (
              <section key={match.id} className={styles.board}>
                <p className={styles.discipline}>
                  {match.discipline}
                  <span aria-hidden="true"> · </span>
                  {match.event}
                </p>
                <p className={styles.venue}>{match.venue}</p>

                <p className={styles.score}>
                  <span className={styles.side}>Team Spirit</span>
                  <b className={styles.digits}>
                    <i className={styles.won}>{match.score[0]}</i>
                    <span aria-hidden="true">:</span>
                    {match.score[1]}
                  </b>
                  <span className={styles.side}>{match.opponent}</span>
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
              </section>
            ))}
          </div>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>{note.timelineLabel}</h2>
            <ol className={styles.timeline}>
              {note.timeline.map((step, index) => (
                <li key={index}>
                  <span className={styles.mark}>{step.mark}</span>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Совпадение, ради которого город вообще стоит называть дважды */}
          <aside className={`${styles.block} ${styles.city}`}>
            <h2 className={styles.blockTitle}>{note.cityLabel}</h2>

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
              Team Spirit{" "}
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

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>{note.factsLabel}</h2>
            <ul className={styles.facts}>
              {note.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockTitle}>{note.noteLabel}</h2>
            {note.note.map((text, index) => (
              <p key={index} className={styles.body}>
                {text}
              </p>
            ))}
          </section>

          <footer className={styles.foot}>
            <h2 className={styles.blockTitle}>{note.sourcesLabel}</h2>
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

            <p className={styles.disclaimer}>{note.disclaimer}</p>

            <Link href={langPath(lang)} className={styles.biglink}>
              {note.home}
              <i aria-hidden="true">→</i>
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
