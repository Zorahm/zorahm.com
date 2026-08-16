import type { ShapeId } from "@/content";
import type { Shape } from "./common";
import { saturn } from "./saturn";
import { noise } from "./noise";
import { network } from "./network";
import { eye } from "./eye";
import { globe } from "./globe";
import { ripple } from "./ripple";
import { github } from "./github";
import { mark } from "./mark";

export const SHAPES: Record<ShapeId, Shape> = {
  saturn,
  noise,
  network,
  eye,
  globe,
  ripple,
  github,
  mark,
};

export type { Shape } from "./common";
