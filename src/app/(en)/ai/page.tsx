import { AiPage } from "@/components/AiPage";
import { buildAiMetadata } from "../../shared";

export const metadata = buildAiMetadata("en");

export default function Ai() {
  return <AiPage lang="en" />;
}
