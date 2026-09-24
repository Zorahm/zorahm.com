"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "zorahm:theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

// localStorage fires no "storage" event in the tab that wrote it,
// so same-tab writes notify through this set
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener("change", listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", listener);
    window.removeEventListener("storage", listener);
  };
};

const readChoice = (): Theme | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
};

/** "light", "dark", or "system:light" / "system:dark" when nothing is stored */
const readSnapshot = () => {
  const choice = readChoice();
  if (choice) return choice;
  return window.matchMedia(DARK_QUERY).matches ? "system:dark" : "system:light";
};

// The server cannot know the visitor's scheme; CSS covers the first paint
const serverSnapshot = () => "system:light";

/**
 * Theme of pages on the ecosystem design: the visitor's stored choice, else the system's.
 * `choice` is null while the system decides, so the page can leave the
 * choice to CSS and not flash the wrong theme before hydration.
 */
export function useEcoTheme() {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, serverSnapshot);
  const choice: Theme | null = snapshot.startsWith("system:") ? null : (snapshot as Theme);
  const theme: Theme = snapshot.endsWith("dark") ? "dark" : "light";

  const toggle = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme === "dark" ? "light" : "dark");
    } catch {
      // The choice just won't survive a reload
    }
    for (const listener of listeners) listener();
  };

  // `scheme` changes whenever the painted colours may change, including the
  // switch from the server's guess to the real value after hydration
  return { theme, choice, scheme: snapshot, toggle };
}
