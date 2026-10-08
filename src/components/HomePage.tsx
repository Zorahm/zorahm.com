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
import { ContactBlock } from "./eco/ContactBlock";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowRightIcon, ArrowUpRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import { arriveAt } from "./space/camera";
import styles from "./HomePage.module.css";

const SATURN = SPACE_STRUCTURE.findIndex((body) => body.id === "saturn");

/**
 * The home page in the ZorahM Laboratory design: a daylight bench with one
 * accent. Figures are specimens laid out in plain air, with no frames. Saturn
 * is the way into the site, the index is a specimen viewer (a list on one
 * side, one large figure that morphs on the other), and the story is one plate
 * that reassembles as its text scrolls past.
 */
export function HomePage({ lang }: { lang: Lang }) {
  const frames = getFrames(lang);
  const hero = frames.find((frame) => frame.hero) ?? frames[0];
  const contact = frames.find((frame) => frame.contacts) ?? hero;
  const story = frames.filter((frame) => !frame.hero && !frame.contacts);

  return (
    <EcoShell lang={lang} otherHref={langPath(otherLang(lang))}>
      <Hero lang={lang} frame={hero} />
      <SectionIndex lang={lang} />
      <Story lang={lang} frames={story} />
      <ContactBlock
        lang={lang}
        heading={contact.title}
        body={contact.body.filter((p) => !p.muted).map((p) => p.text)}
      />
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
      {/* The button below is the named way in; the figure is the same link for a pointer */}
      <Link
        href={spacePath(lang)}
        className={styles.saturn}
        aria-hidden="true"
        tabIndex={-1}
        onClick={enter}
      >
        <DotPlate shape="saturn" accent={0.3} cols={52} rows={30} lens arrive />
      </Link>

      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{frame.title}</h1>
        <div className={styles.heroSide}>
          {lead.map((paragraph, i) => (
            <p key={i} className={styles.heroLead}>
              {paragraph.text}
            </p>
          ))}
          <div className={eco.actions}>
            <Link href={spacePath(lang)} className={eco.primary} onClick={enter}>
              {ui.home.enter}
              <ArrowRightIcon />
            </Link>
            <a href="#index" className={eco.secondary}>
              {ui.home.index.heading}
            </a>
          </div>
          <p className={`${eco.hint} ${styles.heroHint}`}>{ui.home.heroHint}</p>
        </div>
      </div>
    </section>
  );
}

/**
 * The index as a specimen viewer: the sections are a list of large names, and
 * one big plate shows whichever is hovered or focused, flowing from figure to
 * figure. On a screen with no pointer the plate rides above the list and
 * follows whichever row was touched last.
 */
function SectionIndex({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const [active, setActive] = useState(0);
  const current = HOME_SECTIONS[active];
  const currentText = ui.home.sections[current.id];

  return (
    <section id="index" className={styles.index}>
      <h2 className={styles.indexHeading}>{ui.home.index.heading}</h2>

      <div className={styles.viewer}>
        <div className={styles.viewerPlate} aria-hidden="true">
          <DotPlate
            shape={current.shape}
            accent={current.accent}
            cols={40}
            rows={26}
            lens
          />
          <p className={styles.viewerCaption}>{currentText.tag}</p>
        </div>

        <ul className={styles.indexList}>
          {HOME_SECTIONS.map((section, i) => {
            const text = ui.home.sections[section.id];
            return (
              <li key={section.id}>
                <Link
                  href={section.path(lang)}
                  className={styles.indexRow}
                  data-active={i === active ? "true" : undefined}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className={styles.indexTitle}>{text.name}</span>
                  <span className={styles.indexLine}>{text.line}</span>
                  <ArrowUpRightIcon className={styles.indexArrow} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
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
      <h2 className={styles.storyHeading}>{ui.heading}</h2>

      <div className={styles.story}>
        <div className={styles.storyPlate} aria-hidden="true">
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
              {f.cta && (
                <a
                  href={f.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={eco.inkLink}
                >
                  {f.cta.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
