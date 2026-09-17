import { AiPage } from "@/components/AiPage";
import { buildAiMetadata } from "../../../shared";

export const metadata = buildAiMetadata("ru");

export default function AiRu() {
  return <AiPage lang="ru" />;
}
