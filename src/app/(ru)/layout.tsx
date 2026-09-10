import "../globals.css";
import { MotionDisclaimer } from "@/components/MotionDisclaimer";
import { buildMetadata, fontClassName, viewport } from "../shared";

export const metadata = buildMetadata("ru");
export { viewport };

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={fontClassName}>
      <body>
        <MotionDisclaimer lang="ru" />
        {children}
      </body>
    </html>
  );
}
