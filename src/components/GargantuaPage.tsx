"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import {
  gargantuaPath,
  getUi,
  langPath,
  otherLang,
  type Lang,
} from "@/content";
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

/**
 * The /gargantua page: a Schwarzschild black hole traced ray by ray.
 *
 * The instrument-panel interface is the one from /space-3d, and that is on
 * purpose — these are two views of the same machinery. What is missing is
 * everything that had to do with choosing something: there is a single
 * object in the scene, it is always in frame, and the only thing to do with
 * it is to walk around it and turn the physics up and down.
 *
 * Nothing that changes per frame is lifted into React. The frame rate is
 * written straight into the nodes through refs: redrawing the tree twice a
 * second for two numbers is not worth a render.
 */
export function GargantuaPage({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const t = ui.gargantua;
  const other = otherLang(lang);
  const otherUi = getUi(other);

  const auto = useGargantuaStore((s) => s.auto);
  const hidden = useGargantuaStore((s) => s.hidden);
  const params = useGargantuaStore((s) => s.params);

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
      if (typing(e)) return;

      const key = e.key.toLowerCase();
      if (key === "h") toggleHidden();
      else if (key === "r") resetView();
      else if (key === " ") {
        e.preventDefault();
        toggleAuto();
      } else if (key === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ui_ = hidden ? `${styles.ui} ${styles.gone}` : styles.ui;

  return (
    <div className={styles.host}>
      <Scene label={t.description} error={t.error} onStats={onStats} />

      <div className={`${ui_} ${styles.brand}`}>
        <Link href={langPath(lang)} className={styles.mark}>
          Z<span>\</span>M
        </Link>
        <h1 className={styles.status}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={`${ui_} ${styles.corner}`}>
        <nav className={styles.links} aria-label={ui.switchLanguage}>
          <span className={styles.active} aria-current="page">
            {ui.langName}
          </span>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <Link href={gargantuaPath(other)} hrefLang={other} lang={other}>
            {otherUi.langName}
          </Link>
        </nav>

        <p className={styles.hint} aria-hidden="true">
          {t.hint}
          {/* The keys go first when the line stops fitting: without a pointer
              the scene cannot be turned at all, without hot keys it can */}
          <span className={styles.keys}>
            {" · "}
            <kbd>H</kbd> {t.keys.hide} · <kbd>R</kbd> {t.keys.reset} ·{" "}
            <kbd>Space</kbd> {t.keys.auto} · <kbd>F</kbd> {t.keys.fullscreen}
          </span>
        </p>

        <p className={styles.stats}>
          <b ref={fpsRef}>–</b> FPS · <span ref={resRef}>–</span>
        </p>
      </div>

      <section className={`${ui_} ${styles.panel}`} aria-label={t.panel}>
        <h2>{t.panel}</h2>
        {SLIDERS.map(({ key, min, max, step, percent }) => {
          const value = percent
            ? Math.round(params[key] * 100)
            : Math.round(params[key]);
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
            className={auto ? styles.on : undefined}
            aria-pressed={auto}
            onClick={toggleAuto}
          >
            {t.autoOrbit}
          </button>
          <button
            type="button"
            onClick={() => {
              resetView();
              (Object.keys(DEFAULT_PARAMS) as (keyof Params)[]).forEach((key) =>
                setParam(key, DEFAULT_PARAMS[key]),
              );
            }}
          >
            {t.reset}
          </button>
        </div>

        {/* The disclaimer sits under the instruments, where the physics is
            turned up and down — that is where it is worth admitting which
            half of the picture is physics at all */}
        <p className={styles.note}>{t.note}</p>
      </section>
    </div>
  );
}
