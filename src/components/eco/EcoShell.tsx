"use client";

import Link from "next/link";
import { createContext, useContext, useSyncExternalStore } from "react";
import {
  HOME_SECTIONS,
  getUi,
  langPath,
  otherLang,
  type HomeSectionId,
  type Lang,
} from "@/content";
import { useEcoTheme } from "@/lib/ecoTheme";
import { ecoFontClassName } from "./fonts";
import { MoonIcon, SunIcon } from "./icons";
import eco from "./eco.module.css";

// The year is read on the client: a static build would freeze it at build
// time. Nothing to subscribe to, it changes once a year.
const noSubscribe = () => () => {};
const currentYear = () => new Date().getFullYear();
const noYearOnServer = () => null;

const SchemeContext = createContext("system:light");

/**
 * Changes whenever the page's colours may change. Canvas drawings read
 * their colours from CSS and use this to know when to read them again.
 */
export const useScheme = () => useContext(SchemeContext);

export function Mark() {
  return (
    <span className={eco.mark}>
      Z<span className={eco.slash}>\</span>M
    </span>
  );
}

/**
 * Page frame of the ZorahM Ecosystem design: header with navigation,
 * language and theme switches, the page's own sections in <main>, and the
 * footer. Owns the theme, so every page on the design shares one choice.
 */
export function EcoShell({
  lang,
  otherHref,
  current,
  children,
}: {
  lang: Lang;
  /** The same page in the other language */
  otherHref: string;
  /** The section this page is, marked in the navigation */
  current?: HomeSectionId;
  children: React.ReactNode;
}) {
  const { theme, choice, scheme, toggle } = useEcoTheme();
  const year = useSyncExternalStore(noSubscribe, currentYear, noYearOnServer);
  const ui = getUi(lang);
  const other = otherLang(lang);
  // The 3D scene shares the space entry in the bar; the home index lists both
  const nav = HOME_SECTIONS.filter((section) => section.id !== "space3d");

  return (
    <SchemeContext value={scheme}>
      <div className={`${eco.page} ${ecoFontClassName}`} data-theme={choice ?? undefined}>
        <header className={eco.header}>
          <Link href={langPath(lang)} className={eco.homeLink} aria-label="ZorahM">
            <Mark />
          </Link>

          <nav className={eco.nav} aria-label={ui.shell.navLabel}>
            {nav.map((section) => (
              <Link
                key={section.id}
                href={section.path(lang)}
                className={eco.navLink}
                aria-current={section.id === current ? "page" : undefined}
              >
                {ui.home.sections[section.id].name}
              </Link>
            ))}
          </nav>

          <div className={eco.tools}>
            <nav className={eco.langs} aria-label={ui.switchLanguage}>
              <span className={eco.langActive} aria-current="page">
                {ui.langName}
              </span>
              <Link href={otherHref} hrefLang={other} lang={other} className={eco.langLink}>
                {getUi(other).langName}
              </Link>
            </nav>
            <button
              type="button"
              className={eco.iconButton}
              onClick={toggle}
              aria-label={theme === "dark" ? ui.shell.themeLight : ui.shell.themeDark}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </header>

        <main>{children}</main>

        <footer className={eco.footer}>
          <Mark />
          <span className={eco.code}>zorahm.com — {year ?? ""}</span>
        </footer>
      </div>
    </SchemeContext>
  );
}
