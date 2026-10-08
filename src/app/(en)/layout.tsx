import Script from "next/script";
import "../globals.css";
import { buildMetadata, fontClassName, themeInitScript, viewport } from "../shared";

export const metadata = buildMetadata("en");
export { viewport };

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassName} suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      <body>
        {children}
      </body>
    </html>
  );
}
