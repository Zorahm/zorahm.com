import { GamesPage } from "@/components/GamesPage";
import { buildGamesMetadata } from "../../shared";

export { ecoViewport as viewport } from "../../shared";

export const metadata = buildGamesMetadata("en");

export default function Games() {
  return <GamesPage lang="en" />;
}
