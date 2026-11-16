"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";
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
import { ArrowUpRightIcon, CheckIcon, CloseIcon, CopyIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";
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

/** Thin line along the top edge that follows how far an article is read */
function ReadingProgress({ label }: { label: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Expanded disclosures change the length of the article without a scroll
    const resize = new ResizeObserver(schedule);
    resize.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resize.disconnect();
    };
  }, []);

  return (
    <div
      className={eco.progress}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

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
  readingProgress = false,
  children,
}: {
  lang: Lang;
  /** The same page in the other language */
  otherHref: string;
  /** The section this page is, marked in the navigation */
  current?: HomeSectionId;
  /** Article pages get a progress line at the top of the viewport */
  readingProgress?: boolean;
  children: React.ReactNode;
}) {
  const { theme, choice, scheme, toggle } = useEcoTheme();
  const year = useSyncExternalStore(noSubscribe, currentYear, noYearOnServer);
  const ui = getUi(lang);
  const other = otherLang(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const tools = useRef<HTMLDivElement>(null);
  const menuPanel = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  // The 3D scene shares the space entry in the bar; the home index lists both
  const nav = HOME_SECTIONS.filter((section) => section.id !== "space3d");

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!tools.current?.contains(target) && !menuPanel.current?.contains(target)) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <SchemeContext value={scheme}>
      <div className={eco.page} data-theme={choice ?? undefined}>
        {readingProgress && <ReadingProgress label={ui.shell.readingProgress} />}
        <header className={eco.header} data-site-header>
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

          <div className={eco.tools} ref={tools}>
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
            <button
              ref={menuButton}
              type="button"
              className={`${eco.iconButton} ${eco.menuButton}`}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? ui.shell.closeMenu : ui.shell.menu}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {menuOpen && (
            <nav ref={menuPanel} id="site-menu" className={eco.menuPanel} aria-label={ui.shell.navLabel}>
              {nav.map((section) => (
                <Link
                  key={section.id}
                  href={section.path(lang)}
                  className={eco.menuLink}
                  aria-current={section.id === current ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {ui.home.sections[section.id].name}
                </Link>
              ))}
            </nav>
          )}
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
