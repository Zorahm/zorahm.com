"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

/** What the page shows: the stored choice of the visitor, or "day" when there is none */
type Snapshot = Theme | "day";

const STORAGE_KEY = "zorahm:theme";

// localStorage fires no "storage" event in the tab that wrote it,
// so same-tab writes notify through this set
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

const readSnapshot = (): Snapshot => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "day";
  } catch {
    return "day";
  }
};

// The server renders the daylight default; a stored choice applies after hydration
const serverSnapshot = (): Snapshot => "day";

/**
 * Theme of pages on the laboratory design. Daylight is the default for every
 * visitor, because the bench is kept bright; dark is an explicit choice.
 * `choice` is null while the default holds, so CSS decides the first paint.
 */
export function useEcoTheme() {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, serverSnapshot);
  const choice: Theme | null = snapshot === "day" ? null : snapshot;
  const theme: Theme = snapshot === "dark" ? "dark" : "light";

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice just won't survive a reload
    }
    // Keep the attribute that themeInitScript reads on the next load in sync
    if (next === "dark") {
      document.documentElement.dataset.bench = "dark";
    } else {
      delete document.documentElement.dataset.bench;
    }
    for (const listener of listeners) listener();
  };

  // `scheme` changes whenever the painted colours may change, so canvas drawings re-read them
  return { theme, choice, scheme: snapshot, toggle };
}
