import { SpacePage } from "@/components/SpacePage";
import { buildSpaceMetadata } from "../../../shared";

export const metadata = buildSpaceMetadata("ru");

export default function SpaceRu() {
  return <SpacePage lang="ru" />;
}
