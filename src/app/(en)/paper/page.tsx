import { PaperPage } from "@/components/PaperPage";
import { buildPaperMetadata } from "../../shared";

export { ecoViewport as viewport } from "../../shared";

export const metadata = buildPaperMetadata("en");

export default function Paper() {
  return <PaperPage lang="en" />;
}
