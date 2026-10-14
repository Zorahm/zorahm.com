import { NoticePage } from "@/components/NoticePage";
import { buildNoticeMetadata } from "../../../shared";

export { ecoViewport as viewport } from "../../../shared";

export const metadata = buildNoticeMetadata("ru");

export default function NoticeRu() {
  return <NoticePage lang="ru" />;
}
