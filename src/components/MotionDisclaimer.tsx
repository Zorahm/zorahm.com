"use client";

import { getUi, type Lang } from "@/content";
import { acknowledgeMotion, useMotionAck } from "@/lib/motionAck";
import styles from "./MotionDisclaimer.module.css";

/**
 * Full-screen warning about the site's moving dot fields, shown before any
 * of them mount. Consent is remembered in localStorage, so it only appears
 * once per browser.
 */
export function MotionDisclaimer({ lang }: { lang: Lang }) {
  const acknowledged = useMotionAck();
  if (acknowledged) return null;

  const ui = getUi(lang).motionDisclaimer;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="motion-disclaimer-title"
      aria-describedby="motion-disclaimer-body"
      className={styles.screen}
    >
      <p className={styles.eyebrow}>{ui.eyebrow}</p>
      <h2 id="motion-disclaimer-title" className={styles.title}>
        {ui.title}
      </h2>
      <p id="motion-disclaimer-body" className={styles.body}>
        {ui.body}
      </p>
      <button
        type="button"
        className={styles.accept}
        onClick={acknowledgeMotion}
        autoFocus
      >
        {ui.accept}
      </button>
    </div>
  );
}
