import type { AnyShapeId } from "@/content";
import type { Shape } from "./common";
import { saturn } from "./saturn";
import { noise } from "./noise";
import { network } from "./network";
import { eye } from "./eye";
import { globe } from "./globe";
import { ripple } from "./ripple";
import { github } from "./github";
import { mark } from "./mark";
import { notfound } from "./notfound";
import { waifik } from "./waifik";

export const SHAPES: Record<AnyShapeId, Shape> = {
  saturn,
  noise,
  network,
  eye,
  globe,
  ripple,
  github,
  mark,
  notfound,
  waifik,
};

export type { Shape } from "./common";
