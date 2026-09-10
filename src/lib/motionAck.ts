"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "zorahm:motion-ack";

// A write here needs to reach every subscriber, but localStorage never fires
// a native "storage" event for writes made in the same tab — so this
// listener set stands in for that.
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const readAck = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return true; // Storage blocked — don't gate the site if we can't remember the answer
  }
};

// Nothing to gate before hydration: the server has no localStorage to read
const ackOnServer = () => true;

/** Whether the visitor has acknowledged the motion disclaimer, this browser. */
export function useMotionAck() {
  return useSyncExternalStore(subscribe, readAck, ackOnServer);
}

export function acknowledgeMotion() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Consent just won't survive a reload
  }
  for (const listener of listeners) listener();
}
