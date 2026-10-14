import { NoticePage } from "@/components/NoticePage";
import { buildNoticeMetadata } from "../../shared";

export { ecoViewport as viewport } from "../../shared";

export const metadata = buildNoticeMetadata("en");

export default function Notice() {
  return <NoticePage lang="en" />;
}
