import { PaperPage } from "@/components/PaperPage";
import { buildPaperMetadata } from "../../../shared";

export { ecoViewport as viewport } from "../../../shared";

export const metadata = buildPaperMetadata("ru");

export default function PaperRu() {
  return <PaperPage lang="ru" />;
}
