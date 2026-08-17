"use client";

import { Canvas } from "@react-three/fiber";
import { FRAME_STRUCTURE } from "@/content";
import { Halftone, type FieldFrame } from "./Halftone";
import styles from "./Field.module.css";

/**
 * Поле точек на весь экран. Всё содержимое декоративное, поэтому целиком
 * скрыто от скринридеров.
 *
 * По умолчанию показывает ленту главной страницы; служебные страницы передают
 * свой набор фигур.
 */
export default function Field({
  frames = FRAME_STRUCTURE,
}: {
  frames?: readonly FieldFrame[];
}) {
  return (
    <>
      <div className={styles.field} aria-hidden="true">
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Halftone frames={frames} />
        </Canvas>
      </div>
      <div className={styles.vignette} aria-hidden="true" />
    </>
  );
}
