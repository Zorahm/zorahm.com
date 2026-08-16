"use client";

import { Canvas } from "@react-three/fiber";
import { Halftone } from "./Halftone";
import styles from "./Field.module.css";

/**
 * Поле точек на весь экран. Всё содержимое декоративное, поэтому целиком
 * скрыто от скринридеров.
 */
export default function Field() {
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
          <Halftone />
        </Canvas>
      </div>
      <div className={styles.vignette} aria-hidden="true" />
    </>
  );
}
