import { SpiritPage } from "@/components/SpiritPage";
import { buildSpiritMetadata } from "../../../shared";

export const metadata = buildSpiritMetadata("ru");

export default function SpiritRu() {
  return <SpiritPage lang="ru" />;
}
