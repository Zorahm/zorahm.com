"use client";

import Link from "next/link";
import {
  gamesPath,
  getGames,
  getUi,
  langPath,
  otherLang,
  type GameId,
  type Lang,
} from "@/content";
import { GitHubCard } from "./eco/GitHubCard";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, PlayIcon } from "./eco/icons";
import type { PlateShape } from "./eco/plate";
import eco from "./eco/eco.module.css";
import styles from "./GamesPage.module.css";

/** Counters and indices are set in two digits: 01, 04 */
const twoDigits = (n: number) => String(n).padStart(2, "0");

/** The dotted figure on each game's card; the games ship no screenshots */
const COVERS: Record<GameId, PlateShape> = {
  "rail-rush": "rails",
  "city-street": "street",
};

/**
 * The /games page: browser games made by AI models, each one doubling as a
 * test of the model that made it.
 *
 * A game is a separate static build under public/, not a Next route, so its
 * links are plain <a>: the client router would look for a page that is not
 * there.
 */
export function GamesPage({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const page = ui.games;
  const games = getGames(lang);

  const counts = [
    { label: page.counts.games, value: games.length },
    {
      label: page.counts.models,
      value: new Set(games.map((game) => game.model)).size,
    },
  ];

  return (
    <EcoShell lang={lang} otherHref={gamesPath(otherLang(lang))} current="games">
      <section className={`${eco.section} ${styles.hero}`}>
        <div className={`${eco.card} ${styles.heroText}`}>
          <Link href={langPath(lang)} className={styles.back}>
            <ArrowLeftIcon />
            {page.home}
          </Link>
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

        <div className={`${eco.tinted} ${styles.heroPlate}`}>
          <DotPlate shape="ripple" accent={0.85} cols={30} rows={20} lens arrive />
        </div>
      </section>

      <section className={eco.section}>
        <h2 className={eco.label}>{page.gamesLabel}</h2>

        <ol className={styles.list}>
          {games.map((game, index) => (
            <li key={game.id}>
              <article className={`${eco.card} ${styles.card}`}>
                <a
                  href={game.href}
                  className={`${eco.tinted} ${styles.cover}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <DotPlate shape={COVERS[game.id]} accent={1} cols={30} rows={20} lens />
                </a>

                <div className={styles.info}>
                  <p className={styles.cardHead}>
                    <span className={eco.code}>{twoDigits(index + 1)}</span>
                    <span className={`${eco.label} ${styles.status}`}>
                      <i aria-hidden="true" />
                      {page.playable}
                    </span>
                    <span className={`${eco.code} ${styles.year}`}>{game.year}</span>
                  </p>

                  <h3 className={eco.displayL}>{game.title}</h3>
                  <p className={eco.body}>{game.summary}</p>

                  <ul className={styles.tags}>
                    {game.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <dl className={styles.facts}>
                    <div>
                      <dt className={eco.label}>{page.facts.model}</dt>
                      <dd>{game.model}</dd>
                    </div>
                    <div>
                      <dt className={eco.label}>{page.facts.setup}</dt>
                      <dd>{game.setup}</dd>
                    </div>
                    <div>
                      <dt className={eco.label}>{page.facts.prompts}</dt>
                      <dd>{game.prompts}</dd>
                    </div>
                  </dl>

                  <div className={eco.actions}>
                    <a href={game.href} className={eco.primary}>
                      <PlayIcon />
                      {page.play}
                      <span className={styles.srOnly}> — {game.title}</span>
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <GitHubCard lang={lang} />
    </EcoShell>
  );
}
