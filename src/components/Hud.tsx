"use client";

import Link from "next/link";
import {
  getFrames,
  getUi,
  langPath,
  otherLang,
  type Lang,
} from "@/content";
import { useHudStore } from "@/lib/scroll";
import styles from "./Hud.module.css";

/**
 * Телеметрия по краям экрана. Подписана только на целые значения, поэтому
 * перерисовывается при смене кадра и на каждом целом проценте прокрутки,
 * а не 60 раз в секунду.
 */
export function Hud({ lang }: { lang: Lang }) {
  const frameIndex = useHudStore((s) => s.frameIndex);
  const percent = useHudStore((s) => s.percent);

  const frames = getFrames(lang);
  const ui = getUi(lang);
  const other = otherLang(lang);
  const otherUi = getUi(other);

  const total = String(frames.length).padStart(2, "0");
  const current = String(frameIndex + 1).padStart(2, "0");
  const label = frames[frameIndex]?.label ?? "";

  return (
    <>
      <div className={`${styles.hud} ${styles.mark}`}>
        Z<span>\</span>M
      </div>

      <nav
        className={`${styles.hud} ${styles.lang}`}
        aria-label={ui.switchLanguage}
      >
        <span className={styles.langActive} aria-current="page">
          {ui.langName}
        </span>
        <span className={styles.langSep} aria-hidden="true">
          /
        </span>
        <Link href={langPath(other)} hrefLang={other} lang={other}>
          {otherUi.langName}
        </Link>
      </nav>

      <div className={`${styles.hud} ${styles.frame}`}>
        {ui.frameWord} <b>{current}</b> / {total} — <b>{label}</b>
      </div>

      <div className={`${styles.hud} ${styles.pct}`}>
        <div className={styles.bar} aria-hidden="true">
          <i style={{ width: `${percent}%` }} />
        </div>
        <span>{percent}%</span>
      </div>
    </>
  );
}
