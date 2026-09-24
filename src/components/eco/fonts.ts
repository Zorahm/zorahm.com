import { JetBrains_Mono, Onest } from "next/font/google";

/**
 * Text faces of the ZorahM Ecosystem design system. Unbounded, its display
 * face, already comes from the root layout as --font-display. These two are
 * loaded here, so only pages on that design preload them.
 */
const sans = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const code = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-code",
  display: "swap",
});

export const ecoFontClassName = `${sans.variable} ${code.variable}`;
