"use client";

import { motion, useReducedMotion } from "motion/react";
import { getContacts, getUi, type Frame, type Lang } from "@/content";
import styles from "./Section.module.css";

const alignClass = {
  left: "",
  right: styles.alignRight,
  center: styles.alignCenter,
} as const;

export function Section({
  frame,
  index,
  lang,
}: {
  frame: Frame;
  index: number;
  lang: Lang;
}) {
  const reduced = useReducedMotion();
  const Heading = frame.hero ? "h1" : "h2";

  const reveal = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const },
      };

  return (
    <section
      data-frame={frame.id}
      data-index={index}
      className={[
        styles.section,
        frame.hero ? styles.hero : "",
        alignClass[frame.align],
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <motion.div className={styles.content} {...reveal}>
        <p className={styles.eyebrow}>{frame.eyebrow}</p>
        <Heading className={styles.title}>{frame.title}</Heading>

        {frame.body.map((paragraph, i) => (
          <p
            key={i}
            className={[styles.body, paragraph.muted ? styles.muted : ""]
              .filter(Boolean)
              .join(" ")}
          >
            {paragraph.text}
          </p>
        ))}

        {frame.cta && (
          <a
            className={styles.biglink}
            href={frame.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {frame.cta.label}
            <i aria-hidden="true">↗</i>
          </a>
        )}

        {frame.contacts && (
          <nav className={styles.links} aria-label={getUi(lang).contactsLabel}>
            {getContacts(lang).map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                {...(contact.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {contact.label}
              </a>
            ))}
          </nav>
        )}
      </motion.div>
    </section>
  );
}
