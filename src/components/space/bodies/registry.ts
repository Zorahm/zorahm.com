import type { BodyId } from "@/content";
import type { SpaceBody } from "./common";
import { sun } from "./sun";
import { mercury } from "./mercury";
import { venus } from "./venus";
import { earth } from "./earth";
import { mars } from "./mars";
import { jupiter } from "./jupiter";
import { saturn } from "./saturn";
import { uranus } from "./uranus";
import { neptune } from "./neptune";

export const BODIES: Record<BodyId, SpaceBody> = {
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
};

export type { SpaceBody } from "./common";
