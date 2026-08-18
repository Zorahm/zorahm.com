/**
 * Реестр планет. Порядок — от Солнца наружу.
 */

import mercury from "./mercury.mjs";
import venus from "./venus.mjs";
import earth from "./earth.mjs";
import mars from "./mars.mjs";
import jupiter from "./jupiter.mjs";
import saturn from "./saturn.mjs";
import uranus from "./uranus.mjs";
import neptune from "./neptune.mjs";

export const PLANETS = {
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
};

export const ORDER = Object.keys(PLANETS);
