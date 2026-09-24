"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  gamesPath,
  getContacts,
  getGames,
  getUi,
  langPath,
  otherLang,
  type Lang,
} from "@/content";
import { useStageDriver } from "@/lib/scroll";
import type { FieldFrame } from "./field/Halftone";
import hud from "./Hud.module.css";
import base from "./AiPage.module.css";
import styles from "./GamesPage.module.css";

// WebGL only lives in the browser; there is nothing to render on the server
const Field = dynamic(() => import("./field/Field"), { ssr: false });

/** One still figure behind the whole page */
const FRAMES: readonly FieldFrame[] = [{ id: "ripple", accent: 0.85 }];

/** Counters and indices are set in two digits: 01, 04 */
const twoDigits = (n: number) => String(n).padStart(2, "0");

/**
 * The /games page: browser games made by AI models, each one doubling as a
 * test of the model that made it.
 *
 * It shares the glass-over-the-field look of /ai and borrows its styles; only
 * the game card, which carries the model's facts, is its own.
 *
 * A game is a separate static build under public/, not a Next route, so its
 * link is a plain <a>: the client router would look for a page that is not
 * there.
 */
export function GamesPage({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const page = ui.games;
  const other = otherLang(lang);
  const otherUi = getUi(other);

  const games = getGames(lang);

  const counts = [
    { label: page.counts.games, value: games.length },
    {
      label: page.counts.models,
      value: new Set(games.map((game) => game.model)).size,
    },
  ];

  useStageDriver(0);

  return (
    <>
      <Field frames={FRAMES} still />

      <Link
        href={langPath(lang)}
        className={`${hud.hud} ${hud.mark} ${base.hudTop}`}
      >
        Z<span>\</span>M
      </Link>

      <nav
        className={`${hud.hud} ${hud.lang} ${base.hudTop}`}
        aria-label={ui.switchLanguage}
      >
        <span className={hud.langActive} aria-current="page">
          {ui.langName}
        </span>
        <span className={hud.langSep} aria-hidden="true">
          /
        </span>
        <Link href={gamesPath(other)} hrefLang={other} lang={other}>
          {otherUi.langName}
        </Link>
      </nav>

      <main className={base.main}>
        <header className={base.hero}>
          <p className={base.eyebrow}>
            <span>{page.eyebrow}</span>
          </p>

          <h1 className={base.title}>{page.heading}</h1>

          <div className={base.lead}>
            {page.lead.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <dl className={`${base.counts} ${styles.counts}`}>
            {counts.map((count) => (
              <div key={count.label}>
                <dt>{count.label}</dt>
                <dd>{twoDigits(count.value)}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className={base.section}>
          <h2 className={base.label}>{page.gamesLabel}</h2>

          <ol className={base.grid}>
            {games.map((game, index) => (
              <li key={game.id} className={`${base.card} ${styles.game}`}>
                <div className={styles.about}>
                  <p className={base.cardHead}>
                    <span className={base.index}>{twoDigits(index + 1)}</span>
                    <span className={base.status} data-status="live">
                      <i aria-hidden="true" />
                      {page.playable}
                    </span>
                    <span className={base.year}>{game.year}</span>
                  </p>

                  <h3 className={base.cardTitle}>
                    <a className={base.stretch} href={game.href}>
                      {game.title}
                    </a>
                  </h3>
                  <p className={base.summary}>{game.summary}</p>

                  <ul className={base.tags}>
                    {game.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.side}>
                  <dl className={styles.facts}>
                    <div>
                      <dt>{page.facts.model}</dt>
                      <dd>{game.model}</dd>
                    </div>
                    <div>
                      <dt>{page.facts.setup}</dt>
                      <dd>{game.setup}</dd>
                    </div>
                    <div>
                      <dt>{page.facts.prompts}</dt>
                      <dd>{game.prompts}</dd>
                    </div>
                  </dl>

                  <span className={styles.play} aria-hidden="true">
                    {page.play}
                    <i>→</i>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className={`${base.section} ${base.foot}`}>
          <div>
            <h2 className={base.label}>{ui.contactsLabel}</h2>
            <p className={base.outro}>{page.outro}</p>
            <ul className={base.contacts}>
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

          <Link href={langPath(lang)} className={base.biglink}>
            {page.home}
            <i aria-hidden="true">→</i>
          </Link>
        </footer>
      </main>
    </>
  );
}
