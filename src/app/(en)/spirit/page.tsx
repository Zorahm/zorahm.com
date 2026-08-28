import { SpiritPage } from "@/components/SpiritPage";
import { buildSpiritMetadata } from "../../shared";

export const metadata = buildSpiritMetadata("en");

export default function Spirit() {
  return <SpiritPage lang="en" />;
}
