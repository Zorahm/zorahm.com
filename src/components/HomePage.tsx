"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  HOME_SECTIONS,
  SPACE_STRUCTURE,
  getFrames,
  getUi,
  langPath,
  otherLang,
  spacePath,
  type Frame,
  type Lang,
} from "@/content";
import { GitHubCard } from "./eco/GitHubCard";
import { DotIcon } from "./eco/DotIcon";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import { arriveAt } from "./space/camera";
import styles from "./HomePage.module.css";

const SATURN = SPACE_STRUCTURE.findIndex((body) => body.id === "saturn");

/**
 * The home page on the card design: a centred title with the way in, Saturn
 * on a wide white card under it, the index as a bento grid of tinted cards,
 * and the story as one card whose plate reassembles as its text scrolls past.
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
  // The scene opens on the same Saturn and pulls back to the overview
  const enter = () => arriveAt(SATURN);

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
          <Link href={spacePath(lang)} className={eco.primary} onClick={enter}>
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
        href={spacePath(lang)}
        className={`${eco.card} ${styles.saturn} ${styles.rise}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={enter}
      >
        <DotPlate shape="saturn" accent={0.3} cols={52} rows={30} lens arrive />
        <p className={`${eco.hint} ${styles.heroHint}`}>{ui.home.heroHint}</p>
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
