"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "./icons";
import styles from "./ImageViewer.module.css";

/**
 * A picture in the text that opens full size on a click.
 *
 * The thumbnail is a button; the full view is a native modal <dialog>, so the
 * browser gives focus handling, Esc to close and a backdrop for free. A click
 * outside the picture closes it too. The full-size image mounts only while the
 * dialog is open, so a page full of these does not load every picture twice.
 *
 * Labels come from the caller because the component does not know the page's
 * language.
 */
export function ImageViewer({
  src,
  width,
  height,
  alt,
  caption,
  openLabel,
  closeLabel,
  sizes = "(max-width: 960px) 100vw, 740px",
}: {
  src: string;
  /** Natural size of the file in pixels */
  width: number;
  height: number;
  alt: string;
  /** Line under the thumbnail */
  caption?: string;
  /** Name of the thumbnail button for screen readers, for example "Open the image full size" */
  openLabel: string;
  closeLabel: string;
  /** What the thumbnail needs, for the browser to pick a file size */
  sizes?: string;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (open && element && !element.open) element.showModal();
  }, [open]);

  return (
    <figure className={styles.figure}>
      <button
        type="button"
        className={styles.thumb}
        onClick={() => setOpen(true)}
        aria-label={`${openLabel}: ${alt}`}
        aria-haspopup="dialog"
      >
        <Image src={src} width={width} height={height} alt="" sizes={sizes} />
      </button>
      {caption && <figcaption>{caption}</figcaption>}

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={alt}
        onClose={() => setOpen(false)}
        // A click on the dim area, not on the picture or a button, closes the view
        onClick={(event) => {
          if ((event.target as Element).closest("img, button")) return;
          event.currentTarget.close();
        }}
      >
        {open && (
          <div className={styles.stage}>
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
              sizes="100vw"
              className={styles.full}
            />
            <button
              type="button"
              className={styles.close}
              onClick={() => dialog.current?.close()}
              aria-label={closeLabel}
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </dialog>
    </figure>
  );
}
