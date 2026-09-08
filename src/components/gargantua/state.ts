"use client";

import { create } from "zustand";

/**
 * State of the black hole scene.
 *
 * Split by how fast it changes, the same way /space-3d splits it: the camera
 * moves every frame and lives in a plain mutable object the renderer reads,
 * while the panel parameters change rarely, belong to zustand and are what
 * the interface subscribes to. Nothing that runs per frame goes through
 * React — redrawing the tree to move a camera would cost more than the frame.
 */

/** Vertical field of view, radians */
export const FOV = (48 * Math.PI) / 180;

/** How close and how far the camera may be pulled, in Schwarzschild radii */
const MIN_DIST = 4.2;
const MAX_DIST = 65;

/**
 * Latitude limit. Straight above the hole the disk collapses into a circle
 * and the whole point of the scene — the far side folded over the top —
 * disappears, so the pole is never reached.
 */
const MAX_PHI = 1.45;

/** Where the camera starts and where Reset puts it back */
const HOME = { dist: 21, theta: 0.9, phi: 0.155 };

/** Seconds of stillness before the camera starts drifting on its own */
const IDLE_BEFORE_AUTO = 1.2;

/** Radians per pixel of pointer travel */
const TURN_X = 0.0052;
const TURN_Y = 0.004;

/** How much of the last frame's drag is kept as inertia, and its ceiling */
const FLICK = 0.4;
const FLICK_MAX = 0.03;

/** Per-frame decay of that inertia */
const FLICK_DECAY = 0.93;

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

export const view = {
  /** Where the camera looks from, in spherical coordinates around the hole */
  theta: HOME.theta,
  phi: HOME.phi,

  /** Distance follows the wheel with a lag, so zooming never jumps */
  dist: HOME.dist,
  targetDist: HOME.dist,

  /** Inertia left over from a flick */
  vTheta: 0,
  vPhi: 0,
  /** Pointer travel within the frame — the flick is read off it on release */
  pendX: 0,
  pendY: 0,
  dragging: false,

  /** Scene time, seconds */
  time: 0,
  /** Seconds since the camera was last touched */
  idle: 0,
};

export type Params = {
  /** Integration steps per ray: the only value here that is not a fraction */
  steps: number;
  /** Emission of the accretion disk */
  bright: number;
  /** Angular speed of the gas */
  spin: number;
  /** Strength of the light bending: at zero the rays go straight */
  lens: number;
  /** Bloom in the composite pass */
  glow: number;
};

export const DEFAULT_PARAMS: Params = {
  steps: 240,
  bright: 1,
  spin: 1,
  lens: 1,
  glow: 1,
};

type GargantuaStore = {
  /** The camera circles the hole on its own when nobody touches it */
  auto: boolean;
  /** Interface hidden with the H key */
  hidden: boolean;
  params: Params;
};

export const useGargantuaStore = create<GargantuaStore>(() => ({
  auto: true,
  hidden: false,
  params: { ...DEFAULT_PARAMS },
}));

export const setParam = (key: keyof Params, value: number) =>
  useGargantuaStore.setState((s) => ({ params: { ...s.params, [key]: value } }));

export const toggleAuto = () =>
  useGargantuaStore.setState((s) => ({ auto: !s.auto }));

export const toggleHidden = () =>
  useGargantuaStore.setState((s) => ({ hidden: !s.hidden }));

/** Pointer drag: the turn lands at once, the inertia is settled per frame */
export function turnCamera(dx: number, dy: number) {
  view.theta -= dx * TURN_X;
  view.phi = clamp(view.phi + dy * TURN_Y, -MAX_PHI, MAX_PHI);
  view.pendX += dx;
  view.pendY += dy;
  view.idle = 0;
}

export function zoomCamera(factor: number) {
  view.targetDist = clamp(view.targetDist / factor, MIN_DIST, MAX_DIST);
  view.idle = 0;
}

/** Back to the opening shot; the scene keeps running */
export function resetView() {
  view.theta = HOME.theta;
  view.phi = HOME.phi;
  view.targetDist = HOME.dist;
  view.vTheta = 0;
  view.vPhi = 0;
  view.idle = 0;
}

/**
 * Full reset on leaving the page: the state lives in the module, outlives
 * the component and would otherwise greet the next visit mid-flight.
 */
export function resetScene() {
  resetView();
  view.dist = HOME.dist;
  view.time = 0;
  view.dragging = false;
  view.pendX = 0;
  view.pendY = 0;
  useGargantuaStore.setState({ params: { ...DEFAULT_PARAMS } });
}

/** One step of the scene: time, inertia, auto-orbit, eased distance */
export function stepScene(dt: number) {
  const { auto } = useGargantuaStore.getState();

  view.time += dt;

  if (view.dragging) {
    // The speed of this frame's drag becomes the inertia once the pointer
    // is released — a flick has to keep going, a slow drag must not
    view.vTheta = clamp(-view.pendX * TURN_X * FLICK, -FLICK_MAX, FLICK_MAX);
    view.vPhi = clamp(view.pendY * TURN_Y * FLICK, -FLICK_MAX, FLICK_MAX);
    view.pendX = 0;
    view.pendY = 0;
  } else {
    view.idle += dt;
    view.theta += view.vTheta;
    view.phi = clamp(view.phi + view.vPhi, -MAX_PHI, MAX_PHI);
    view.vTheta *= FLICK_DECAY;
    view.vPhi *= FLICK_DECAY;
  }

  if (auto && !view.dragging && view.idle > IDLE_BEFORE_AUTO) {
    view.theta += dt * 0.035;
  }

  view.dist += (view.targetDist - view.dist) * Math.min(1, dt * 7);
}

export type Camera = {
  pos: [number, number, number];
  right: [number, number, number];
  up: [number, number, number];
  forward: [number, number, number];
};

/** The camera basis the scene shader traces from */
export function currentCamera(): Camera {
  const cp = Math.cos(view.phi);
  const sp = Math.sin(view.phi);
  const ct = Math.cos(view.theta);
  const st = Math.sin(view.theta);
  const pos: [number, number, number] = [
    view.dist * cp * ct,
    view.dist * sp,
    view.dist * cp * st,
  ];

  // The camera always looks at the hole, so forward is just the way back
  const len = Math.hypot(pos[0], pos[1], pos[2]) || 1;
  const forward: [number, number, number] = [
    -pos[0] / len,
    -pos[1] / len,
    -pos[2] / len,
  ];

  // right = normalize(cross(forward, worldUp)); up = cross(right, forward)
  const rl = Math.hypot(forward[2], forward[0]) || 1;
  const right: [number, number, number] = [
    -forward[2] / rl,
    0,
    forward[0] / rl,
  ];
  const up: [number, number, number] = [
    right[1] * forward[2] - right[2] * forward[1],
    right[2] * forward[0] - right[0] * forward[2],
    right[0] * forward[1] - right[1] * forward[0],
  ];

  return { pos, right, up, forward };
}

/**
 * Half-width of the frame at unit depth. On a portrait viewport the vertical
 * field is widened instead of narrowed, otherwise the disk runs off the sides.
 */
export const tanFov = (aspect: number) =>
  Math.tan(FOV * 0.5) / Math.min(aspect, 1);
