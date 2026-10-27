"use client";

import Link from "next/link";
import { createContext, useContext, useRef, useState, useSyncExternalStore } from "react";
import {
  HOME_SECTIONS,
  getContacts,
  getUi,
  langPath,
  otherLang,
  type HomeSectionId,
  type Lang,
} from "@/content";
import { useEcoTheme } from "@/lib/ecoTheme";
import { ArrowUpRightIcon, CheckIcon, CopyIcon, MoonIcon, SunIcon } from "./icons";
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

const MAIL = "me@zorahm.com";

/**
 * The site's contacts as pills in the footer: Telegram and GitHub open in a
 * new tab, the email address writes a letter and has a copy button beside it.
 */
function FooterContacts({ lang }: { lang: Lang }) {
  const ui = getUi(lang);
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(MAIL);
    } catch {
      return; // Nothing was copied, so nothing to confirm
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <ul className={eco.footerContacts} aria-label={ui.contactsLabel}>
      {getContacts(lang).map((contact) => {
        const mail = contact.href.startsWith("mailto:");
        return (
          <li key={contact.href} className={eco.footerContact}>
            <a
              href={contact.href}
              className={eco.footerLink}
              {...(mail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {mail ? MAIL : contact.label}
              {!mail && <ArrowUpRightIcon />}
            </a>
            {mail && (
              <button
                type="button"
                className={eco.iconButton}
                onClick={copy}
                aria-label={copied ? ui.shell.copied : ui.shell.copy}
                title={copied ? ui.shell.copied : ui.shell.copy}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            )}
          </li>
        );
      })}
    </ul>
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
      <div className={eco.page} data-theme={choice ?? undefined}>
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
          <FooterContacts lang={lang} />
          <span className={eco.code}>zorahm.com · {year ?? ""}</span>
        </footer>

      </div>
    </SchemeContext>
  );
}
