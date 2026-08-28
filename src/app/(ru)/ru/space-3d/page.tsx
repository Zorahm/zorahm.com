import { Space3DPage } from "@/components/Space3DPage";
import { buildSpace3DMetadata } from "../../../shared";

export const metadata = buildSpace3DMetadata("ru");

export default function Space3DRu() {
  return <Space3DPage lang="ru" />;
}
