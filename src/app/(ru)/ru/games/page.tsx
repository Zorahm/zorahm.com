import { GamesPage } from "@/components/GamesPage";
import { buildGamesMetadata } from "../../../shared";

export { ecoViewport as viewport } from "../../../shared";

export const metadata = buildGamesMetadata("ru");

export default function GamesRu() {
  return <GamesPage lang="ru" />;
}
