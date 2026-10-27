"use client";

import Link from "next/link";
import {
  getPaperArticles,
  getPaperIndex,
  langPath,
  otherLang,
  paperPath,
  type Lang,
} from "@/content";
import { GitHubCard } from "./eco/GitHubCard";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, ArrowRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import styles from "./PaperPage.module.css";

/** Counters and indices are set in two digits: 01, 04 */
const twoDigits = (n: number) => String(n).padStart(2, "0");

/**
 * The /paper index: the site's articles, newest first. Each card links to
 * the article's own page; the figure on it is the site's own dots.
 */
export function PaperPage({ lang }: { lang: Lang }) {
  const page = getPaperIndex(lang);
  const articles = getPaperArticles(lang);

  return (
    <EcoShell lang={lang} otherHref={paperPath(otherLang(lang))} current="paper">
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
            <div className={styles.count}>
              <dt className={eco.label}>{page.count}</dt>
              <dd className={styles.countValue}>{twoDigits(articles.length)}</dd>
            </div>
          </dl>
        </div>

        <div className={`${eco.tinted} ${styles.heroPlate}`}>
          <DotPlate shape="paper" accent={0.85} cols={30} rows={20} lens arrive />
        </div>
      </section>

      <section className={eco.section}>
        <h2 className={eco.label}>{page.articlesLabel}</h2>

        <ol className={styles.list}>
          {articles.map((article, index) => (
            <li key={article.id}>
              <article className={`${eco.card} ${styles.card}`}>
                <Link
                  href={article.path(lang)}
                  className={`${eco.tinted} ${styles.cover}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <DotPlate shape={article.shape} accent={1} cols={30} rows={20} lens />
                </Link>

                <div className={styles.info}>
                  <p className={styles.cardHead}>
                    <span className={eco.code}>{twoDigits(index + 1)}</span>
                    <time className={`${eco.code} ${styles.date}`} dateTime={article.date}>
                      {article.dateText}
                    </time>
                  </p>

                  <h3 className={eco.displayL}>{article.title}</h3>
                  <p className={eco.body}>{article.summary}</p>

                  <div className={eco.actions}>
                    <Link href={article.path(lang)} className={eco.primary}>
                      {page.read}
                      <ArrowRightIcon />
                      <span className={styles.srOnly}>: {article.title}</span>
                    </Link>
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
