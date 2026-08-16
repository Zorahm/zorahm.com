import "../globals.css";
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
      <body>{children}</body>
    </html>
  );
}
