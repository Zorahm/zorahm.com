import { PaperDecisionPage } from "@/components/PaperDecisionPage";
import { buildPaperDecisionMetadata } from "../../../../shared";

export { ecoViewport as viewport } from "../../../../shared";

export const metadata = buildPaperDecisionMetadata("ru");

export default function PaperDecisionRu() {
  return <PaperDecisionPage lang="ru" />;
}
