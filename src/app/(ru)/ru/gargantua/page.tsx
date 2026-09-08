import { GargantuaPage } from "@/components/GargantuaPage";
import { buildGargantuaMetadata } from "../../../shared";

export const metadata = buildGargantuaMetadata("ru");

export default function GargantuaRu() {
  return <GargantuaPage lang="ru" />;
}
