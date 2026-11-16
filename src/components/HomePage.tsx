"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  HOME_SECTIONS,
  getFrames,
  getPaperArticles,
  getUi,
  langPath,
  otherLang,
  paperDecisionPath,
  type Frame,
  type Lang,
} from "@/content";
import { GitHubCard } from "./eco/GitHubCard";
import { DotIcon } from "./eco/DotIcon";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import styles from "./HomePage.module.css";

/**
 * The home page on the card design: a centred title with the way in, the
 * newest article and its dots on a wide card under it, the index as a bento
 * grid of tinted cards, and the story as one card whose plate reassembles as
 * its text scrolls past.
 */
export function HomePage({ lang }: { lang: Lang }) {
  const frames = getFrames(lang);
  const hero = frames.find((frame) => frame.hero) ?? frames[0];
  const story = frames.filter((frame) => !frame.hero);

  return (
    <EcoShell lang={lang} otherHref={langPath(otherLang(lang))}>
      <Hero lang={lang} frame={hero} />
      <SectionIndex lang={lang} />
      <Story lang={lang} frames={story} />
      <GitHubCard lang={lang} />
    </EcoShell>
  );
}

function Hero({ lang, frame }: { lang: Lang; frame: Frame }) {
  const ui = getUi(lang);
  const lead = frame.body.filter((paragraph) => !paragraph.muted);
  // The newest article is the one thing the first screen offers besides the index
  const article = getPaperArticles(lang)[0];

  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        {/* The letters rise in one by one; side by side they still read as one word */}
        <h1 className={styles.heroTitle}>
          {[...frame.title].map((letter, i) => (
            <span key={i} className={styles.letter} style={{ "--i": i } as React.CSSProperties}>
              {letter}
            </span>
          ))}
        </h1>
        {lead.map((paragraph, i) => (
          <p key={i} className={`${styles.heroLead} ${styles.rise}`}>
            {paragraph.text}
          </p>
        ))}
        <div className={`${eco.actions} ${styles.heroActions} ${styles.rise}`}>
          <Link href={paperDecisionPath(lang)} className={eco.primary}>
            {ui.home.enter}
            <ArrowRightIcon />
          </Link>
          <a href="#index" className={eco.secondary}>
            {ui.home.index.heading}
          </a>
        </div>
      </div>

      {/* The button above is the named way in; the card is the same link for a pointer */}
      <Link
        href={article.path(lang)}
        className={`${eco.card} ${styles.feature} ${styles.rise}`}
      >
        <div className={`${eco.tinted} ${styles.featureArt}`}>
          <DotPlate shape={article.shape} accent={1} cols={30} rows={20} lens arrive />
          <p className={`${eco.hint} ${styles.featureHint}`} aria-hidden="true">{ui.home.heroHint}</p>
        </div>
        <div className={styles.featureInfo}>
          <p className={styles.featureHead}>
            <span className={eco.label}>{article.eyebrow}</span>
            <time className={`${eco.code} ${styles.featureDate}`} dateTime={article.updated}>
              {article.updatedText}
            </time>
          </p>
          <h2 className={eco.displayL}>{article.title}</h2>
          <p className={eco.body}>{article.summary}</p>
          <span className={styles.featureArrow} aria-hidden="true">
            <ArrowRightIcon />
          </span>
        </div>
      </Link>
    </section>
  );
}

/**
 * The index as a bento grid of tinted cards, three across and then four:
 * each card names a section, says what is there and carries its pictogram,
 * drawn in the same halftone dots, in the corner.
 */
function SectionIndex({ lang }: { lang: Lang }) {
  const ui = getUi(lang);

  return (
    <section id="index" className={styles.index}>
      <h2 className={styles.sectionHeading}>{ui.home.index.heading}</h2>

      <ul className={styles.bento}>
        {HOME_SECTIONS.map((section) => {
          const text = ui.home.sections[section.id];
          return (
            <li key={section.id} className={styles.bentoItem}>
              <Link href={section.path(lang)} className={`${eco.tinted} ${styles.tile}`}>
                <span className={styles.tileTitle}>{text.name}</span>
                <span className={styles.tileLine}>{text.line}</span>
                <span className={styles.tileArrow}>
                  <ArrowRightIcon />
                </span>
                <DotIcon id={section.id} className={styles.tileIcon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/**
 * The story as a scroll: its texts run down one side, and one plate stays
 * in view and reassembles into the figure of whichever text is passing the
 * middle of the window. Every text is in the document, so it reads the same
 * with no script and under a screen reader.
 */
function Story({ lang, frames }: { lang: Lang; frames: Frame[] }) {
  const ui = getUi(lang).home.frames;
  const [step, setStep] = useState(0);
  const items = useRef<(HTMLElement | null)[]>([]);
  const frame = frames[step];

  useEffect(() => {
    // A line across the window: one text crosses it at a time. On a narrow
    // screen the plate rides at the top, so the line sits below the middle.
    const narrow = window.matchMedia("(max-width: 960px)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setStep(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: narrow ? "-70% 0px -30% 0px" : "-50% 0px -50% 0px" },
    );
    for (const item of items.current) if (item) observer.observe(item);
    return () => observer.disconnect();
  }, [frames.length]);

  return (
    <section className={styles.storySection}>
      <h2 className={styles.sectionHeading}>{ui.heading}</h2>

      <div className={`${eco.card} ${styles.story}`}>
        <div className={`${eco.tinted} ${styles.storyPlate}`} aria-hidden="true">
          <DotPlate shape={frame.id} accent={frame.accent} cols={30} rows={20} />
          <p className={styles.storyLabel}>{frame.label}</p>
        </div>

        <ol className={styles.storyList}>
          {frames.map((f, i) => (
            <li
              key={f.id}
              ref={(el) => {
                items.current[i] = el;
              }}
              data-step={i}
              className={styles.storyItem}
            >
              <h3 className={eco.displayL}>{f.title}</h3>
              {f.body.map((paragraph, n) => (
                <p key={n} className={`${eco.body} ${paragraph.muted ? eco.muted : ""}`}>
                  {paragraph.text}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
