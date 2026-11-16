"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CheckIcon, CopyIcon } from "./eco/icons";
import styles from "./PaperDecisionPage.module.css";

export function PaperTabs({
  id,
  label,
  tabs,
}: {
  id: string;
  label: string;
  tabs: { name: string; panel: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = index === last ? 0 : index + 1; break;
      case "ArrowLeft": next = index === 0 ? last : index - 1; break;
      case "Home": next = 0; break;
      case "End": next = last; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label={label}>
        {tabs.map(({ name }, index) => (
          <button
            key={name}
            type="button"
            ref={(button) => { buttons.current[index] = button; }}
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => move(event, index)}
          >
            {name}
          </button>
        ))}
      </div>
      {tabs.map(({ name, panel }, index) => (
        <div
          key={name}
          id={`${id}-panel-${index}`}
          className={styles.tabPanel}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={index === active ? 0 : -1}
          hidden={index !== active}
        >
          {panel}
        </div>
      ))}
    </>
  );
}

export function PaperJson({
  json,
  label,
  copy,
  copied,
  copyFailed,
}: {
  json: string;
  label: string;
  copy: string;
  copied: string;
  copyFailed: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyJson() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(json);
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.json}>
      <div className={styles.jsonTools}>
        <button type="button" onClick={copyJson}>
          {status === "copied" ? <CheckIcon /> : <CopyIcon />}
          {copy}
        </button>
        <span role="status">{status === "copied" ? copied : status === "error" ? copyFailed : ""}</span>
      </div>
      <pre tabIndex={0} aria-label={label}><code>{json}</code></pre>
    </div>
  );
}
