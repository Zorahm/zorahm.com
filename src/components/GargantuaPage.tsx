"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gargantuaPath, getUi, langPath, otherLang, type Lang } from "@/content";
import { Mark } from "./eco/EcoShell";
import {
  CloseIcon,
  EyeIcon,
  EyeOffIcon,
  InfoIcon,
  MaximizeIcon,
  SlidersIcon,
} from "./eco/icons";
import type { Stats } from "./gargantua/renderer";
import {
  DEFAULT_PARAMS,
  resetScene,
  resetView,
  setParam,
  toggleAuto,
  toggleHidden,
  useGargantuaStore,
  type Params,
} from "./gargantua/state";
import styles from "./GargantuaPage.module.css";

// WebGL only exists in a browser; there is nothing to render on the server
const Scene = dynamic(() => import("./gargantua/Scene"), { ssr: false });

type Slider = {
  key: keyof Params;
  min: number;
  max: number;
  step: number;
  /** Everything but the quality is a fraction shown as a percentage */
  percent: boolean;
};

/** Panel sliders: the range each parameter is exposed on */
const SLIDERS: Slider[] = [
  { key: "steps", min: 80, max: 320, step: 10, percent: false },
  { key: "bright", min: 0, max: 250, step: 1, percent: true },
  { key: "spin", min: 0, max: 300, step: 1, percent: true },
  { key: "lens", min: 0, max: 200, step: 1, percent: true },
  { key: "glow", min: 0, max: 200, step: 1, percent: true },
];

/** Below this width the panel starts closed and opens as a bottom sheet */
const NARROW = "(max-width: 820px)";

const subscribeNarrow = (notify: () => void) => {
  const query = window.matchMedia(NARROW);
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};
const readNarrow = () => window.matchMedia(NARROW).matches;
const noSubscribe = () => () => {};
// iOS Safari has no fullscreen for a page, so the button is not offered there
const readFullscreen = () => document.fullscreenEnabled === true;
const onServer = () => false;

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.();
}

/**
 * The /gargantua page: a Schwarzschild black hole traced ray by ray.
 *
 * This is a visualization, not a page to read: the scene takes the whole
 * window and the interface is a thin layer over it in the site's design —
 * its type and its signal, always on the dark palette, since the sky
 * behind is black whatever the theme. A top bar says what this is and holds
 * the tools, the parameters sit on a card in the corner (a bottom sheet on
 * a phone), and the note on what is physics here opens on demand.
 *
 * Nothing that changes per frame is lifted into React. The frame rate is
 * written straight into the nodes through refs: redrawing the tree twice a
 * second for two numbers is not worth a render.
 */
export function GargantuaPage({ lang }: { lang: Lang }) {
  return <GargantuaScene lang={lang} />;
}

function GargantuaScene({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const t = ui.gargantua;
  const other = otherLang(lang);
  const tag = ui.home.sections.gargantua.tag;

  const auto = useGargantuaStore((s) => s.auto);
  const hidden = useGargantuaStore((s) => s.hidden);
  const params = useGargantuaStore((s) => s.params);

  const narrow = useSyncExternalStore(subscribeNarrow, readNarrow, onServer);
  const canFullscreen = useSyncExternalStore(noSubscribe, readFullscreen, onServer);
  // Until someone opens or closes it, the panel follows the screen width
  const [panelChoice, setPanelChoice] = useState<boolean | null>(null);
  const panelOpen = panelChoice ?? !narrow;
  const [aboutOpen, setAboutOpen] = useState(false);

  const fpsRef = useRef<HTMLElement>(null);
  const resRef = useRef<HTMLElement>(null);

  // Leaving the page returns the scene to its opening shot: the state lives
  // in the module and would not reset on its own
  useEffect(() => resetScene, []);

  const onStats = useCallback(({ fps, width, height }: Stats) => {
    if (fpsRef.current) fpsRef.current.textContent = fps.toFixed(0);
    if (resRef.current) resRef.current.textContent = `${width}×${height}`;
  }, []);

  useEffect(() => {
    // The sliders have a keyboard of their own, the buttons have the space bar
    const typing = (e: KeyboardEvent) => {
      const node = e.target as HTMLElement | null;
      return (
        node instanceof HTMLInputElement ||
        (e.key === " " && node instanceof HTMLButtonElement)
      );
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAboutOpen(false);
        return;
      }
      if (typing(e)) return;

      const key = e.key.toLowerCase();
      if (key === "h") toggleHidden();
      else if (key === "r") resetView();
      else if (key === " ") {
        e.preventDefault();
        toggleAuto();
      } else if (key === "f") toggleFullscreen();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const layer = hidden ? `${styles.ui} ${styles.gone}` : styles.ui;

  const resetAll = () => {
    resetView();
    (Object.keys(DEFAULT_PARAMS) as (keyof Params)[]).forEach((key) =>
      setParam(key, DEFAULT_PARAMS[key]),
    );
  };

  return (
    <div className={styles.host}>
      <Scene label={t.description} error={t.error} onStats={onStats} />

      <header className={`${layer} ${styles.top}`}>
        <div className={styles.titleBlock}>
          <Link href={langPath(lang)} className={styles.home} aria-label="ZorahM">
            <Mark />
          </Link>
          <span className={styles.divider} aria-hidden="true" />
          <h1 className={styles.title}>{t.title}</h1>
          <span className={styles.tag}>{tag}</span>
        </div>

        <div className={styles.tools}>
          <nav className={styles.langs} aria-label={ui.switchLanguage}>
            <span className={styles.langActive} aria-current="page">
              {ui.langName}
            </span>
            <Link
              href={gargantuaPath(other)}
              hrefLang={other}
              lang={other}
              className={styles.langLink}
            >
              {getUi(other).langName}
            </Link>
          </nav>
          <button
            type="button"
            className={styles.iconButton}
            aria-label={t.actions.about}
            aria-expanded={aboutOpen}
            onClick={() => setAboutOpen((open) => !open)}
          >
            <InfoIcon />
          </button>
          {canFullscreen && (
            <button
              type="button"
              className={`${styles.iconButton} ${styles.fullscreen}`}
              aria-label={t.actions.fullscreen}
              onClick={toggleFullscreen}
            >
              <MaximizeIcon />
            </button>
          )}
        </div>
      </header>

      {/* Stays on screen when everything else is hidden: on a phone there is
          no H key to bring the interface back */}
      <button
        type="button"
        className={`${styles.iconButton} ${styles.hide}`}
        aria-label={hidden ? t.actions.show : t.actions.hide}
        aria-pressed={hidden}
        onClick={toggleHidden}
      >
        {hidden ? <EyeIcon /> : <EyeOffIcon />}
      </button>

      {aboutOpen && (
        <aside className={`${layer} ${styles.about}`}>
          <p className={styles.label}>{t.actions.about}</p>
          <p className={styles.aboutText}>{t.note}</p>
          <button
            type="button"
            className={`${styles.iconButton} ${styles.aboutClose}`}
            aria-label={t.actions.close}
            onClick={() => setAboutOpen(false)}
          >
            <CloseIcon />
          </button>
        </aside>
      )}

      <div className={`${layer} ${styles.bottomLeft}`}>
        <p className={`${styles.hint} ${styles.hintMouse}`}>
          {t.hint}
          {/* The keys go first when the line stops fitting: without a pointer
              the scene cannot be turned at all, without hot keys it can */}
          <span className={styles.keys} aria-hidden="true">
            <kbd>H</kbd> {t.keys.hide} <kbd>R</kbd> {t.keys.reset} <kbd>Space</kbd>{" "}
            {t.keys.auto} <kbd>F</kbd> {t.keys.fullscreen}
          </span>
        </p>
        <p className={`${styles.hint} ${styles.hintTouch}`}>{t.hintTouch}</p>
        <p className={styles.stats}>
          <b ref={fpsRef}>–</b> FPS · <span ref={resRef}>–</span>
        </p>
      </div>

      {panelOpen ? (
        <section className={`${layer} ${styles.panel}`} aria-label={t.panel}>
          <div className={styles.panelHead}>
            <h2 className={styles.label}>{t.panel}</h2>
            <button
              type="button"
              className={styles.iconButton}
              aria-label={t.actions.close}
              onClick={() => setPanelChoice(false)}
            >
              <CloseIcon />
            </button>
          </div>

          {SLIDERS.map(({ key, min, max, step, percent }) => {
            const value = percent ? Math.round(params[key] * 100) : Math.round(params[key]);
            return (
              <div key={key} className={styles.row}>
                <label htmlFor={`p-${key}`}>
                  {t.params[key]}
                  <span>{percent ? `${value}%` : value}</span>
                </label>
                <input
                  id={`p-${key}`}
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={(e) =>
                    setParam(
                      key,
                      percent ? Number(e.target.value) / 100 : Number(e.target.value),
                    )
                  }
                />
              </div>
            );
          })}

          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.toggle}
              aria-pressed={auto}
              onClick={toggleAuto}
            >
              {t.autoOrbit}
            </button>
            <button type="button" className={styles.secondary} onClick={resetAll}>
              {t.reset}
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className={`${layer} ${styles.panelOpen}`}
          onClick={() => setPanelChoice(true)}
        >
          <SlidersIcon />
          {t.panel}
        </button>
      )}
    </div>
  );
}
