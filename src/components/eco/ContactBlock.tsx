"use client";

import { useRef, useState } from "react";
import { getContacts, getUi, type Lang } from "@/content";
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from "./icons";
import eco from "./eco.module.css";

const MAIL = "me@zorahm.com";

/** Visible part of a contact link: the address without its scheme */
const contactText = (href: string) =>
  href.replace(/^mailto:/, "").replace(/^https?:\/\//, "");

const isExternal = (href: string) => href.startsWith("http");

/**
 * Closing contact section: the page's own words on the left, the site's
 * contacts on the right, with a copy button next to the email address.
 */
export function ContactBlock({
  lang,
  eyebrow,
  heading,
  body,
}: {
  lang: Lang;
  eyebrow: string;
  heading: string;
  body: string[];
}) {
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
    <section id="contact" className={`${eco.section} ${eco.contact}`}>
      <div className={eco.contactText}>
        <p className={eco.label}>{eyebrow}</p>
        <h2 className={eco.displayL}>{heading}</h2>
        {body.map((text, i) => (
          <p key={i} className={eco.body}>
            {text}
          </p>
        ))}
      </div>

      <ul className={eco.contactList} aria-label={ui.contactsLabel}>
        {getContacts(lang).map((contact) => {
          const mail = contact.href.startsWith("mailto:");
          const row = (
            <>
              <span className={`${eco.label} ${eco.contactName}`}>{contact.label}</span>
              <code className={eco.contactValue}>{contactText(contact.href)}</code>
            </>
          );

          return (
            <li key={contact.href} className={eco.contactItem}>
              {mail ? (
                <div className={eco.contactRow}>
                  <a href={contact.href} className={eco.contactMain}>
                    {row}
                  </a>
                  <button type="button" className={eco.secondarySmall} onClick={copy}>
                    {copied ? <CheckIcon /> : <CopyIcon />}
                    <span aria-live="polite">
                      {copied ? ui.shell.copied : ui.shell.copy}
                    </span>
                  </button>
                </div>
              ) : (
                <a
                  href={contact.href}
                  className={`${eco.contactRow} ${eco.contactLink}`}
                  {...(isExternal(contact.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {row}
                  <ArrowUpRightIcon className={eco.arrowMuted} />
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
