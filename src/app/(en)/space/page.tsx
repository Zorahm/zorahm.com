import { SpacePage } from "@/components/SpacePage";
import { buildSpaceMetadata } from "../../shared";

export const metadata = buildSpaceMetadata("en");

export default function Space() {
  return <SpacePage lang="en" />;
}
