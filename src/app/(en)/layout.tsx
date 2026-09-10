import "../globals.css";
import { MotionDisclaimer } from "@/components/MotionDisclaimer";
import { buildMetadata, fontClassName, viewport } from "../shared";

export const metadata = buildMetadata("en");
export { viewport };

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassName}>
      <body>
        <MotionDisclaimer lang="en" />
        {children}
      </body>
    </html>
  );
}
