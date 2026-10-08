import Script from "next/script";
import "../globals.css";
import { buildMetadata, fontClassName, themeInitScript, viewport } from "../shared";

export const metadata = buildMetadata("ru");
export { viewport };

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={fontClassName} suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      <body>
        {children}
      </body>
    </html>
  );
}
