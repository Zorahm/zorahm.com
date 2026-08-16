import "../globals.css";
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
      <body>{children}</body>
    </html>
  );
}
