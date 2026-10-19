import { PaperDecisionPage } from "@/components/PaperDecisionPage";
import { buildPaperDecisionMetadata } from "../../../shared";

export { ecoViewport as viewport } from "../../../shared";

export const metadata = buildPaperDecisionMetadata("en");

export default function PaperDecision() {
  return <PaperDecisionPage lang="en" />;
}
