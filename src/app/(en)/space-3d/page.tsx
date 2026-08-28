import { Space3DPage } from "@/components/Space3DPage";
import { buildSpace3DMetadata } from "../../shared";

export const metadata = buildSpace3DMetadata("en");

export default function Space3D() {
  return <Space3DPage lang="en" />;
}
