"use client";

import Link from "next/link";
import { useRef, useState } from "react";
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
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "./eco/icons";
import eco from "./eco/eco.module.css";
import { arriveAt } from "./space/camera";
import styles from "./HomePage.module.css";

const SATURN = SPACE_STRUCTURE.findIndex((body) => body.id === "saturn");

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The home page in the ZorahM Ecosystem design system: warm paper, one
 * vermilion accent. Halftone plates stay as decoration; the interaction is
 * the visitor's own — hovering the index, stepping through the frames.
 */
export function HomePage({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const frames = getFrames(lang);
  const hero = frames.find((frame) => frame.hero) ?? frames[0];
  const story = frames.filter((frame) => !frame.hero);
  const contact = frames.find((frame) => frame.contacts) ?? hero;

  return (
    <EcoShell lang={lang} otherHref={langPath(otherLang(lang))}>
      <Hero lang={lang} frame={hero} />
      <SectionIndex lang={lang} />
      <Story lang={lang} frames={story} />
      <ContactBlock
        lang={lang}
        eyebrow={ui.home.contact.eyebrow}
        heading={contact.title}
        body={contact.body.filter((p) => !p.muted).map((p) => p.text)}
      />
    </EcoShell>
  );
}

function Hero({ lang, frame }: { lang: Lang; frame: Frame }) {
  const ui = getUi(lang);
  const lead = frame.body.filter((paragraph) => !paragraph.muted);

  return (
    <section className={`${eco.section} ${styles.hero}`}>
      <div className={styles.heroText}>
        <p className={eco.label}>{frame.eyebrow}</p>
        <h1 className={eco.displayXl}>{frame.title}</h1>
        {lead.map((paragraph, i) => (
          <p key={i} className={eco.body}>
            {paragraph.text}
          </p>
        ))}
        <div className={`${eco.actions} ${styles.heroActions}`}>
          <a href="#contact" className={eco.primary}>
            {ui.home.write}
            <ArrowRightIcon />
          </a>
          <a
            href="https://github.com/zorahm"
            target="_blank"
            rel="noopener noreferrer"
            className={eco.secondary}
          >
            GitHub
            <ArrowUpRightIcon />
          </a>
        </div>
        <p className={`${eco.hint} ${styles.heroHint}`}>{ui.home.heroHint}</p>
      </div>

      <Link
        href={spacePath(lang)}
        className={styles.saturn}
        aria-label={ui.space.enter}
        // The scene opens on the same Saturn and pulls back to the overview
        onClick={() => arriveAt(SATURN)}
      >
        <DotPlate shape="saturn" accent={0.35} cols={30} rows={20} lens />
      </Link>
    </section>
  );
}

function SectionIndex({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const [selected, setSelected] = useState(0);
  const current = HOME_SECTIONS[selected];

  return (
    <section className={eco.section}>
      <div className={eco.sectionHead}>
        <div className={eco.headText}>
          <p className={eco.label}>{ui.home.index.eyebrow}</p>
          <h2 className={eco.displayL}>{ui.home.index.heading}</h2>
        </div>
        <p className={eco.headLead}>{ui.home.index.lead}</p>
      </div>

      <div className={styles.indexBody}>
        <ol className={styles.indexList}>
          {HOME_SECTIONS.map((section, i) => {
            const on = i === selected;
            return (
              <li key={section.id}>
                <Link
                  href={section.path(lang)}
                  className={`${styles.indexRow} ${on ? styles.indexRowOn : ""}`}
                  onPointerEnter={() => setSelected(i)}
                  onFocus={() => setSelected(i)}
                >
                  <span className={styles.indexNumber}>{pad(i + 1)}</span>
                  <span className={styles.indexMarker} aria-hidden="true" />
                  <span className={styles.indexTitle}>
                    {ui.home.sections[section.id].name}
                  </span>
                  <span className={styles.indexLine}>
                    {ui.home.sections[section.id].line}
                  </span>
                  <span className={`${eco.label} ${styles.indexTag}`}>
                    {ui.home.sections[section.id].tag}
                  </span>
                  <ArrowUpRightIcon className={eco.arrowMuted} />
                </Link>
              </li>
            );
          })}
        </ol>

        <aside className={styles.preview}>
          <div className={styles.previewPlate}>
            <DotPlate
              shape={current.shape}
              accent={current.accent}
              cols={22}
              rows={9}
            />
          </div>
          <div className={styles.previewMeta}>
            <span className={eco.label}>
              {pad(selected + 1)} — {ui.home.sections[current.id].tag}
            </span>
            <code className={eco.chipCode}>{current.path(lang)}</code>
          </div>
          <h3 className={eco.heading}>{ui[current.id].title}</h3>
          <p className={`${eco.body} ${styles.previewBody}`}>{ui[current.id].description}</p>
          <Link href={current.path(lang)} className={eco.inkLink}>
            {ui.home.index.open}
          </Link>
        </aside>
      </div>
    </section>
  );
}

function Story({
  lang,
  frames,
}: {
  lang: Lang;
  frames: Frame[];
}) {
  const ui = getUi(lang).home.frames;
  const [step, setStep] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const frame = frames[step];
  const last = frames.length - 1;

  const go = (index: number, focus = false) => {
    const next = (index + frames.length) % frames.length;
    setStep(next);
    if (focus) tabs.current[next]?.focus();
  };

  // Arrow keys move between tabs, as the tabs pattern expects
  const onTabKey = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowRight: step + 1,
      ArrowLeft: step - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    go(moves[e.key], true);
  };

  return (
    <section className={eco.section}>
      <div className={eco.sectionHead}>
        <div className={eco.headText}>
          <p className={eco.label}>{ui.eyebrow}</p>
          <h2 className={eco.displayL}>{ui.heading}</h2>
        </div>
        <div role="tablist" aria-label={ui.tabsLabel} className={styles.tabs} onKeyDown={onTabKey}>
          {frames.map((f, i) => (
            <button
              key={f.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`frame-tab-${f.id}`}
              aria-controls="frame-panel"
              aria-selected={i === step}
              aria-label={f.eyebrow}
              tabIndex={i === step ? 0 : -1}
              className={`${styles.tab} ${i === step ? styles.tabOn : ""}`}
              onClick={() => go(i)}
            >
              {pad(i + 1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.storyBody}>
        <div
          role="tabpanel"
          id="frame-panel"
          aria-labelledby={`frame-tab-${frame.id}`}
          className={styles.storyText}
        >
          <p className={styles.storyCount} aria-hidden="true">
            {pad(step + 1)}
            <span> / {pad(frames.length)}</span>
          </p>
          <p className={`${eco.label} ${eco.labelInk}`}>{frame.label}</p>
          <h3 className={eco.displayL}>{frame.title}</h3>
          {frame.body.map((paragraph, i) => (
            <p key={i} className={`${eco.body} ${paragraph.muted ? eco.muted : ""}`}>
              {paragraph.text}
            </p>
          ))}
          {frame.cta && (
            <a
              href={frame.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={eco.inkLink}
            >
              {frame.cta.label}
            </a>
          )}
          {frame.contacts && (
            <a href="#contact" className={eco.inkLink}>
              {ui.toContacts}
            </a>
          )}

          <div className={styles.stepper}>
            <button
              type="button"
              className={eco.iconButton}
              onClick={() => go(step - 1)}
              aria-label={ui.prev}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              className={eco.iconButton}
              onClick={() => go(step + 1)}
              aria-label={ui.next}
            >
              <ArrowRightIcon />
            </button>
            <span className={`${eco.hint} ${styles.stepperHint}`}>
              {step === last ? ui.last : ui.upNext + frames[step + 1].title}
            </span>
          </div>
        </div>

        <div className={styles.storyPlate}>
          <DotPlate
            shape={frame.id}
            accent={frame.accent}
            cols={30}
            rows={20}
          />
        </div>
      </div>
    </section>
  );
}
