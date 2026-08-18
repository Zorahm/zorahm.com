import type { BodyId, BodyText, FrameText, ShapeId, UiStrings } from "./types";

export const enUi: UiStrings = {
  langName: "EN",
  frameWord: "Frame",
  contactsLabel: "Contacts",
  contactEmail: "Email",
  siteTitle: "ZorahM — AI and the world",
  siteDescription:
    "I work with artificial intelligence: I build systems, take models apart, and write about how all of it reshapes the world around us.",
  switchLanguage: "Переключиться на русский",
  notFound: {
    eyebrow: "Error 404 — signal lost",
    title: "Page not found",
    body: "There is nothing at this address. The dots gathered into a number and stopped there.",
    muted: "Whatever you were looking for lives somewhere else.",
    status: "404 — not found",
  },
  waifik: {
    eyebrow: "Easter egg — mascot found",
    title: "Waifik",
    body: "Waifik is the cat of the whole ecosystem. He was looking for this page too and found only dots.",
    muted: "Click again to let him back into the noise.",
    status: "404 — waifik found",
  },
  notFoundHome: "Back to the main page",
  eggLabel: "Show the mascot",
  space: {
    title: "Space",
    description:
      "The solar system in dots: turn the camera, zoom into a body, read about it.",
    overview: "System overview",
    hint: "Drag to turn · scroll to zoom · click a body to open",
    bodiesLabel: "Bodies",
    back: "Back to the system",
    enter: "Open the system",
    home: "Home",
  },
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

export const enBodies: Record<BodyId, BodyText> = {
  sun: {
    name: "The Sun",
    eyebrow: "Star · center of the system",
    tagline: "The only source of light in the whole frame",
    stats: [
      { label: "Radius", value: "696,000 km" },
      { label: "Mass", value: "99.86% of the system" },
      { label: "Surface", value: "5,500 °C" },
      { label: "Age", value: "4.6 billion years" },
    ],
    body: "The grain on the surface is the top of convection cells the size of a continent: hot plasma rises, cools and sinks back, over and over every few minutes. Dark spots run fifteen hundred degrees cooler than their surroundings — the magnetic field pins convection down there. The prominences on the limb hang on those same field lines.",
  },
  mercury: {
    name: "Mercury",
    eyebrow: "Planet · first from the Sun",
    tagline: "Bare rock with no atmosphere",
    stats: [
      { label: "Radius", value: "2,440 km" },
      { label: "Year", value: "88 days" },
      { label: "Day", value: "176 days" },
      { label: "Temperature", value: "−180…+430 °C" },
    ],
    body: "There is no atmosphere, so the light stops like a knife: +430 on the day side, −180 two steps past the terminator. Nothing erodes the craters — no wind, no water — they sit exactly as they were punched four billion years ago. The bright patch near the edge is the Caloris basin: an impact that crumpled the terrain on the far side of the planet.",
  },
  venus: {
    name: "Venus",
    eyebrow: "Planet · second from the Sun",
    tagline: "Clouds outrun the planet they sit on",
    stats: [
      { label: "Radius", value: "6,052 km" },
      { label: "Year", value: "225 days" },
      { label: "Day", value: "243 days" },
      { label: "Temperature", value: "+464 °C" },
    ],
    body: "Venus turns on its axis slower than it goes around the Sun, and it turns the other way. Its clouds, meanwhile, lap the planet in four days — sixty times faster than the surface below them. In ultraviolet that superrotation shows up as a dark Y stretched across the whole disc.",
  },
  earth: {
    name: "Earth",
    eyebrow: "Planet · third from the Sun",
    tagline: "The only one with liquid water on the surface",
    stats: [
      { label: "Radius", value: "6,371 km" },
      { label: "Year", value: "365 days" },
      { label: "Day", value: "24 hours" },
      { label: "Temperature", value: "−89…+57 °C" },
    ],
    body: "Two layers share the frame and live apart: the continents ride the planet's spin, the clouds drift over them at their own pace. The ice caps are the brightest thing here — ice throws back almost all the light it catches, while the ocean swallows almost all of it. The Moon slips behind the disc and comes out the other side.",
  },
  mars: {
    name: "Mars",
    eyebrow: "Planet · fourth from the Sun",
    tagline: "Rust, dust and two chips of rock in orbit",
    stats: [
      { label: "Radius", value: "3,390 km" },
      { label: "Year", value: "687 days" },
      { label: "Day", value: "24.6 hours" },
      { label: "Temperature", value: "−143…+35 °C" },
    ],
    body: "The dark regions are not seas but fields of basalt sand the wind has swept clear of bright dust. Syrtis Major shows up even in an amateur telescope. The polar caps grow and shrink with the seasons. Phobos outruns the planet's spin and rises in the west; Deimos falls behind and crawls in from the east.",
  },
  jupiter: {
    name: "Jupiter",
    eyebrow: "Planet · fifth from the Sun",
    tagline: "Belts that travel in opposite directions",
    stats: [
      { label: "Radius", value: "69,911 km" },
      { label: "Year", value: "11.9 years" },
      { label: "Day", value: "9.9 hours" },
      { label: "Temperature", value: "−145 °C" },
    ],
    body: "The equatorial jet outruns the polar latitudes, and the gas tears into vortices where belts meet. The Great Red Spot is a storm as wide as Earth, watched since the nineteenth century. Four large moons run in resonance: for every turn Ganymede makes, Europa makes two and Io makes four.",
  },
  saturn: {
    name: "Saturn",
    eyebrow: "Planet · sixth from the Sun",
    tagline: "The planet's shadow lies across its own rings",
    stats: [
      { label: "Radius", value: "58,232 km" },
      { label: "Year", value: "29.5 years" },
      { label: "Day", value: "10.7 hours" },
      { label: "Temperature", value: "−178 °C" },
    ],
    body: "The rings are not a disc but billions of ice fragments, from grains to houses, each on its own orbit — the inner ones moving faster than the outer. A quarter of a million kilometres across, the whole system is only tens of metres thick. The dark band cutting across them is the planet's own shadow; the gap between the A and B rings, as wide as France, was spotted by Cassini in 1675.",
  },
  uranus: {
    name: "Uranus",
    eyebrow: "Planet · seventh from the Sun",
    tagline: "Rolls around its orbit on its side",
    stats: [
      { label: "Radius", value: "25,362 km" },
      { label: "Year", value: "84 years" },
      { label: "Day", value: "17.2 hours" },
      { label: "Temperature", value: "−224 °C" },
    ],
    body: "The axis is tipped 98°, so the planet rolls along its orbit sideways and the rings stand almost upright. A pole faces the Sun for forty-two years straight, then spends as long in the dark. Of the thirteen rings only one is legible here — the narrow, bright epsilon.",
  },
  neptune: {
    name: "Neptune",
    eyebrow: "Planet · eighth from the Sun",
    tagline: "The fastest winds in the system",
    stats: [
      { label: "Radius", value: "24,622 km" },
      { label: "Year", value: "165 years" },
      { label: "Day", value: "16.1 hours" },
      { label: "Temperature", value: "−214 °C" },
    ],
    body: "At the equator the wind blows against the planet's rotation at up to 2,100 km/h — faster than anywhere else in the system. A dark spot the size of Earth appears and vanishes within a few years. Triton is the only large moon running backwards around its planet: Neptune almost certainly captured it from the Kuiper belt.",
  },
};
