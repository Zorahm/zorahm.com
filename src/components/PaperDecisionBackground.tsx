"use client";

import { useScheme } from "./eco/EcoShell";
import GradientASCII from "./GradientASCII";
import styles from "./PaperDecisionPage.module.css";

const LIGHT_COLORS = ["#1e3fd8", "#7d94e0", "#84b7ee", "#38a5de"];

export function PaperDecisionBackground() {
  const lightMode = useScheme() !== "dark";

  return (
    <div className={styles.articleBackdrop} aria-hidden="true">
      <div className={styles.articleBackground}>
        <GradientASCII
          colors={lightMode ? LIGHT_COLORS : undefined}
          dpr={1.25}
          lightMode={lightMode}
        />
      </div>
    </div>
  );
}
