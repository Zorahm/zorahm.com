import type { FrameText, ShapeId, UiStrings } from "./types";

export const enUi: UiStrings = {
  langName: "EN",
  frameWord: "Frame",
  contactsLabel: "Contacts",
  contactEmail: "Email",
  siteTitle: "ZorahM — AI and the world",
  siteDescription:
    "I work with artificial intelligence: I build systems, take models apart, and write about how all of it reshapes the world around us.",
  switchLanguage: "Переключиться на русский",
};

export const enFrames: Record<ShapeId, FrameText> = {
  saturn: {
    label: "Saturn",
    eyebrow: "AI · systems · practice",
    title: "ZorahM",
    body: [
      {
        text: "I work with artificial intelligence: I build systems, take models apart, and write about how all of it reshapes the world around us.",
      },
      {
        text: "This page is one long frame. The dots reassemble while you scroll.",
        muted: true,
      },
    ],
  },
  noise: {
    label: "Data",
    eyebrow: "01 — Data",
    title: "Noise first",
    body: [
      {
        text: "The world leaves traces: logs, texts, images, conversations, code. On their own they are junk nobody needs an hour later.",
      },
      { text: "Together they are the material models are made of." },
    ],
  },
  network: {
    label: "Model",
    eyebrow: "02 — Model",
    title: "Then structure",
    body: [
      {
        text: "A model does not store answers. It stores connections. Once there are enough of them, language surfaces out of the noise — and code, and music, and a plan of action.",
      },
      {
        text: "Exactly the moment that makes this worth doing.",
        muted: true,
      },
    ],
  },
  eye: {
    label: "Gaze",
    eyebrow: "03 — Gaze",
    title: "It looks back",
    body: [
      {
        text: "The model stopped being a text machine. It sees the screen, reads the document, walks through files and does the whole job — instead of hinting at it piece by piece.",
      },
    ],
  },
  globe: {
    label: "World",
    eyebrow: "04 — World",
    title: "Input and output",
    body: [
      {
        text: "First the world fed models with data. Now models feed code, decisions and finished products back into it. The loop closed — and the pace went up.",
      },
    ],
  },
  ripple: {
    label: "Impact",
    eyebrow: "05 — Impact",
    title: "Outward in rings",
    body: [
      {
        text: "The wave moves out from the center: development, education, support, science, medicine. It reaches everyone — the only question is the delay.",
      },
    ],
  },
  github: {
    label: "GitHub",
    eyebrow: "06 — Code",
    title: "It all lives here",
    body: [
      {
        text: "Projects, experiments and abandoned branches. Out in the open, no showcase and no slides.",
      },
    ],
  },
  mark: {
    label: "Z\\M",
    eyebrow: "07 — Contact",
    title: "Get in touch",
    body: [
      {
        text: "Open to projects, to talking about models, and to good questions in general.",
      },
    ],
  },
};
