import { GargantuaPage } from "@/components/GargantuaPage";
import { buildGargantuaMetadata } from "../../shared";

export const metadata = buildGargantuaMetadata("en");

export default function Gargantua() {
  return <GargantuaPage lang="en" />;
}
