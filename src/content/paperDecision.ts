import {
  PAPER_DECISION_EXAMPLE_CALLS,
  PAPER_DECISION_SCALE_CALLS,
  type PaperExampleId,
  type PaperScaleId,
} from "./paperDecisionExamples";
import type { Lang } from "./types";

export const PAPER_DECISION_PUBLISHED = "2026-10-19";
export const PAPER_DECISION_DATE = "2026-11-15";

export const PAPER_DECISION_SECTIONS = [
  "what",
  "use",
  "scale",
  "models",
  "index",
  "why",
  "limits",
  "sources",
  "practice",
] as const;

export type PaperDecisionSection = (typeof PAPER_DECISION_SECTIONS)[number];

const PRACTICE_REVIEW = {
  model: "Jev-Style-2B-Decision-v3 (Q8_0)",
  threshold: 0.6,
  buildOutput: "   Compiling demo v0.1.0\n    Finished `dev` profile [unoptimized + debuginfo] target(s)",
  source: "https://github.com/Zorahm/yaca/blob/e005d580b11bbdfe5289df8bae30ac33f19abb3e/crates/yaca-core/src/permission/review.rs#L49-L90",
  calls: [
    { command: "cargo build", score: 0.87 },
    { command: "git push --force", score: 0.21 },
  ],
} as const;

type PaperSource = { label: string; href: string };

export const PAPER_DECISION_SOURCES = {
  jev: {
    label: "TypeSafe · Introducing Jev",
    href: "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
  },
  jevUpdate: {
    label: "TypeSafe · Jev 1.14",
    href: "https://typesafe.ai/blog/jev-1-14",
  },
  aaV1: {
    label: "Artificial Analysis · Decision Index v1.0",
    href: "https://artificialanalysis.ai/articles/artificial-analysis-decision-index",
  },
  liquidOpen: {
    label: "Liquid AI · Open d1",
    href: "https://www.liquid.ai/blog/d1-open",
  },
  liquidLaunch: {
    label: "Liquid AI · d1-ultra",
    href: "https://www.liquid.ai/blog/d1-ultra",
  },
  aaV2: {
    label: "Artificial Analysis · Decision Index v2.0",
    href: "https://artificialanalysis.ai/articles/decision-index-v2",
  },
  gemini: {
    label: "Google · Gemini Decisions API",
    href: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/",
  },
  codexReview: {
    label: "Codex · Auto-review",
    href: "https://learn.chatgpt.com/docs/sandboxing/auto-review",
  },
  antigravityReview: {
    label: "Antigravity CLI · Safety and permissions",
    href: "https://antigravity.google/docs/settings?tab=cli#safety-and-permissions",
  },
  claudeReview: {
    label: "Claude Code · Auto mode",
    href: "https://www.anthropic.com/research/claude-code-auto-mode",
  },
  openaiDecisions: {
    label: "OpenAI · Decisions API",
    href: "https://developers.openai.com/api/docs/guides/decisions",
  },
  perplexity: {
    label: "OpenRouter · Perplexity Decider v1.3",
    href: "https://openrouter.ai/perplexity/pplx-decider-v1.3:free",
  },
  aaIndex: {
    label: "Artificial Analysis · Decision Index v2.1",
    href: "https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index",
  },
  aaMethod: {
    label: "Artificial Analysis · Decision Index methodology",
    href: "https://artificialanalysis.ai/methodology/decision-index",
  },
  nace: {
    label: "Nace.AI · 13 Nov 2026 Decision Index table",
    href: "https://www.nace.ai/drex/decision-index",
  },
  liquid: {
    label: "Liquid AI · Decision models",
    href: "https://docs.liquid.ai/lfm/models/decision-models",
  },
  liquidTypes: {
    label: "Liquid AI · d1-2B",
    href: "https://docs.liquid.ai/lfm/models/d1-2b",
  },
  haiku: {
    label: "Anthropic · Claude Haiku 5.5 pricing",
    href: "https://www.anthropic.com/claude-haiku-5-5#pricing",
  },
  openrouter: {
    label: "OpenRouter · What is Jev?",
    href: "https://openrouter.ai/blog/insights/what-is-jev/",
  },
  benchlm: {
    label: "BenchLM · A 19-question request",
    href: "https://benchlm.ai/blog/posts/what-is-jev",
  },
  baseLabs: {
    label: "Base Labs · Mammoth-1 and Elephant-1",
    href: "https://labs.baseten.co/articles/mammoth-1-and-elephant-1-frontier-decision-models",
  },
  mammoth: {
    label: "Base Labs · Mammoth-1 results",
    href: "https://huggingface.co/baselabs/mammoth-1#performance",
  },
  fastino: {
    label: "Fastino · GLiDE v1.2 release",
    href: "https://fastino.ai/blog/training-glide-sota-decision-model",
  },
  drex: {
    label: "Nace.AI · Drex model specifications",
    href: "https://console.nace.ai/docs/drex/reference/models",
  },
  strands: {
    label: "AWS · Strands Decider E2B",
    href: "https://aws.amazon.com/marketplace/pp/prodview-4isgskzyrqxly",
  },
  strandsRuntime: {
    label: "Strands · Local inference",
    href: "https://github.com/strands-labs/strands-decider/blob/main/docs/inference.md",
  },
  haikuPerformance: {
    label: "Artificial Analysis · Claude Haiku 5.5 performance",
    href: "https://artificialanalysis.ai/models/claude-haiku-5-5#performance",
  },
} satisfies Record<string, PaperSource>;

export type PaperDecisionSourceId = keyof typeof PAPER_DECISION_SOURCES;

const EXAMPLE_SOURCES: Partial<Record<PaperExampleId, readonly PaperDecisionSourceId[]>> = {
  router: ["gemini", "benchlm"],
  commands: ["codexReview", "antigravityReview", "claudeReview", "openaiDecisions", "gemini"],
};
export const PAPER_DECISION_INDEX_DETAIL_SOURCES = ["aaV2", "nace", "baseLabs", "mammoth"] as const;

export const PAPER_DECISION_TIMELINE = [
  { date: "2026-09-15", source: "jev" },
  { date: "2026-10-07", source: "liquidOpen" },
  { date: "2026-10-13", source: "aaV1" },
  { date: "2026-10-14", source: "jevUpdate" },
  { date: "2026-10-15", source: "liquidLaunch" },
  { date: "2026-10-22", source: "fastino" },
  { date: "2026-11-08", source: "aaV2" },
  { date: "2026-11-11", source: "gemini" },
  { date: "2026-11-12", source: "perplexity" },
  { date: "2026-11-13", source: "nace" },
] as const;

export const PAPER_DECISION_IMAGES = {
  before: { src: "/paper/decision/index-before.png", width: 1285, height: 642 },
  after: { src: "/paper/decision/index-after.png", width: 1298, height: 639 },
  v2: { src: "/paper/decision/index-v2.png", width: 1024, height: 548 },
} as const;

// Decision Index v2.1 in Nace.AI's table of 18 selected decision models, 13 November.
export const PAPER_DECISION_RANKING = [
  { model: "Drex Max v1.1", score: 72.6 },
  { model: "SubQ Snap 1.2", score: 72.6 },
  { model: "GLiDE v1.2", score: 72.5 },
  { model: "Mammoth 27B", score: 71.4 },
  { model: "d1-ultra", score: 70.6 },
  { model: "Perplexity Decider v1.3", score: 70.4 },
  { model: "d1.1", score: 66.5 },
  { model: "Elephant 9B", score: 66.4 },
  { model: "Jev 1.14", score: 66.2 },
  { model: "Gemini Decision 1", score: 66.0 },
  { model: "Decider Flash v1.3", score: 64.1 },
  { model: "Microsoft-Decision-1", score: 62.1 },
  { model: "Mercury Decide", score: 62.1 },
  { model: "Celeris-1.1 Decision", score: 62.0 },
  { model: "Drex 2.0", score: 61.6 },
  { model: "Clef", score: 60.3 },
  { model: "GPT-6 Luna (Decisions)", score: 60.2 },
  { model: "Clef-Omni", score: 57.8 },
] as const;

export const PAPER_DECISION_INDEX_WEIGHTS = [
  { evaluation: "AA-Paperclip", weight: 30 },
  { evaluation: "EvalSafe-O*NET-AA", weight: 15 },
  { evaluation: "AA-Omniscience-Decision v1.1", weight: 15 },
  { evaluation: "HLE-MultiChoice v1.1", weight: 15 },
  { evaluation: "AA-Symmetry v1.1", weight: 15 },
  { evaluation: "When2Call", weight: 10 },
] as const;

// Paired score and Time per Task from Artificial Analysis's v2.0 launch article.
export const PAPER_DECISION_TIMING = [
  { model: "Drex Max v1.1", score: 73, durationMs: 275 },
  { model: "GPT-6 Luna (Max)", score: 76, durationMs: 11340 },
  { model: "Claude Haiku 5.5 (Max)", score: 77, durationMs: 32650 },
] as const;

export const PAPER_DECISION_ARCHIVED_TIMING = {
  jevMinMs: 70,
  jevMaxMs: 500,
  haikuFirstTokenMs: 7370,
} as const;

export const PAPER_DECISION_PRICES = {
  decisionInput: 0.042,
  geminiInput: 0.1,
  haikuInput: 0.1,
  haikuOutput: 0.5,
  thinkingTokens: 300,
} as const;

export const PAPER_DECISION_PRICE_CALLS = [
  { inputTokens: 447, answerTokens: 69 },
  { inputTokens: 900, answerTokens: 150 },
  { inputTokens: 120, answerTokens: 25 },
  { inputTokens: 1500, answerTokens: 40 },
] as const;

export function priceOfMillionCalls(call: { inputTokens: number; answerTokens: number }) {
  const prices = PAPER_DECISION_PRICES;
  const decision = call.inputTokens * prices.decisionInput;
  const haiku = call.inputTokens * prices.haikuInput + call.answerTokens * prices.haikuOutput;
  const haikuLow = haiku + prices.thinkingTokens * prices.haikuOutput;
  return { decision, haiku, haikuLow };
}

export const PAPER_DECISION_PRICE_MAX = Math.max(
  ...PAPER_DECISION_PRICE_CALLS.flatMap((call) => Object.values(priceOfMillionCalls(call))),
);

const LOCALE: Record<Lang, string> = { en: "en-GB", ru: "ru-RU" };

export function formatPaperDate(date: string, lang: Lang, year = false) {
  const formatted = new Intl.DateTimeFormat(LOCALE[lang], {
    day: "numeric",
    month: "long",
    year: year ? "numeric" : undefined,
    timeZone: "UTC",
  }).format(new Date(date));
  return lang === "ru" ? formatted.replace(/\s+г\.$/u, "") : formatted;
}

export function formatPaperNumber(number: number, lang: Lang, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(LOCALE[lang], options).format(number);
}

export const formatPaperUsd = (number: number, lang: Lang, digits = 2) =>
  formatPaperNumber(number, lang, {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

export const formatPaperDuration = (ms: number, lang: Lang) =>
  formatPaperNumber(ms >= 1000 ? ms / 1000 : ms, lang, {
    style: "unit",
    unit: ms >= 1000 ? "second" : "millisecond",
    unitDisplay: "short",
    maximumFractionDigits: 2,
  });

export const formatPaperRatio = (ratio: number, lang: Lang) =>
  formatPaperNumber(ratio, lang, { maximumFractionDigits: 1 }) + "×";

export function paperPriceRanges(lang: Lang) {
  const costs = PAPER_DECISION_PRICE_CALLS.map(priceOfMillionCalls);
  const range = (row: "haiku" | "haikuLow") => {
    const ratios = costs.map((cost) => cost[row] / cost.decision);
    return [Math.min(...ratios), Math.max(...ratios)].map((value) => formatPaperRatio(value, lang));
  };
  const [answerMin, answerMax] = range("haiku");
  const [thinkingMin, thinkingMax] = range("haikuLow");
  const tokens = PAPER_DECISION_PRICES.thinkingTokens;
  return lang === "ru"
    ? "В этих четырёх сценариях цена Haiku составляет от " + answerMin + " до " + answerMax + " цены Jev 1.14 за сам ответ и от " + thinkingMin + " до " + thinkingMax + " при допущении в " + tokens + " токенов размышления."
    : "Across the four scenarios, Haiku costs " + answerMin + " to " + answerMax + " as much as Jev 1.14 for the answer alone and " + thinkingMin + " to " + thinkingMax + " as much with " + tokens + " assumed thinking tokens.";
}

export const PAPER_DECISION_USES: readonly PaperExampleId[] = ["router", "commands", "factCheck"];
export const PAPER_DECISION_EXPERIMENTS: readonly PaperScaleId[] = ["refund", "readOnly", "destructive", "ci", "password"];

export const PAPER_DECISION_COMPARED_MODELS = ["Jev-Style", "Perplexity Decider"] as const;

type ExampleCopy = {
  label: string;
  explanation: readonly string[];
  questions: Record<string, string>;
};

type ScaleCopy = {
  label: string;
  situation: string;
  takeaway: string;
  evidenceNote?: string;
  questions: Record<string, string>;
};

export type PaperDecisionStrings = {
  title: string;
  description: string;
  lead: string;
  opening: { format: string; example: string; research: string };
  back: string;
  dates: { published: string; updated: string };
  sections: Record<PaperDecisionSection, string>;
  detailLabels: { types: string; rankings: string; pricing: string; measurement: string };
  intro: {
    scenario: string;
    message: string;
    urgencyLevel: string;
    model: string;
    explanation: string;
    types: { name: string; text: string }[];
    extensions: string;
    calibration: string;
  };
  examples: Record<PaperExampleId, ExampleCopy>;
  answerNames: Record<string, string>;
  exampleLabels: {
    state: string;
    output: string;
    kinds: Record<PaperDecisionAnswer["kind"], string>;
    rubric: { mean: string; outOf: string; level: string; probability: string; distribution: string };
    json: string;
    excerpt: string;
    copy: string;
    copied: string;
    copyFailed: string;
    confidence: string;
    localInference: string;
    localRoundTrip: string;
    apiTime: string;
    inputTokens: string;
  };
  useWarning: string;
  useMore: string;
  timeline: readonly { title: string; text: string }[];
  modelNotes: {
    title: string;
    entries: readonly { name: string; text: string; sources: readonly PaperDecisionSourceId[] }[];
  };
  index: {
    lead: string;
    v1Note: string;
    v21Note: string;
    rankCaption: string;
    rank: string;
    model: string;
    score: string;
    methodology: string;
    metric: string;
    weight: string;
    metricDescriptions: readonly string[];
    metricNote: string;
    details: { title: string; notes: readonly string[] };
    archiveTitle: string;
    archives: Record<keyof typeof PAPER_DECISION_IMAGES, { title: string; alt: string; caption: string }>;
    original: string;
  };
  price: {
    caption: string;
    intro: string;
    calls: readonly { label: string; basis: string }[];
    names: Record<(typeof PAPER_DECISION_PRICE_KEYS)[number], string>;
    tokens: { input: string; output: string };
    amount: string;
    ratio: string;
    thinkingAssumption: string;
    billingNote: string;
    decisionTariffLabel: string;
    haikuTariffLabel: string;
    geminiComparison: string;
    barScale: string;
  };
  timing: {
    caption: string;
    duration: string;
    note: string;
    extra: string;
    archive: { title: string; jev: string; haiku: string; note: string };
  };
  scale: {
    intro: string;
    modelOrigins: readonly [string, string];
    note: string;
    setup: string;
    footprint: {
      title: string;
      cards: readonly { model: string; amount: string; text: string }[];
      note: string;
    };
    cases: Record<PaperScaleId, ScaleCopy>;
  };
  limits: { title: string; text: string }[];
  textVersion: string;
  practice: {
    jump: string;
    lead: string;
    scenarios: string;
    command: string;
    question: string;
    response: string;
    scoreMeaning: string;
    rawResponse: string;
    rule: string;
    action: string;
    allow: string;
    ask: string;
    preview: {
      title: string;
      completed: string;
      confirm: string;
      deny: string;
      permit: string;
    };
    tasks: Record<(typeof PRACTICE_REVIEW.calls)[number]["command"], { label: string; assessment: string }>;
    note: string;
    sourceLabel: string;
  };
};

export const PAPER_DECISION_PRICE_KEYS = ["decision", "haiku", "haikuLow"] as const;

const en: PaperDecisionStrings = {
  title: "Decision models",
  description: "A support example shows how decision models work. I compare a local Jev-Style model with Perplexity Decider on five cases and look at cost and response time.",
  lead: "The model answers in a format you set. It can pick an option, give a score or estimate the probability of “yes.” The program uses the answer to decide what to do next.",
  opening: { format: "Article and research", example: "See how it works", research: "Compare the models" },
  back: "All papers",
  dates: { published: "Published", updated: "Updated" },
  sections: {
    what: "From a message to a decision",
    use: "Where this helps",
    models: "How the models developed",
    index: "An independent model ranking",
    why: "Cost and response time",
    scale: "My comparison of two models",
    limits: "Limits",
    sources: "Sources",
    practice: "How Yaca decides",
  },
  detailLabels: {
    types: "Question types and calibration",
    rankings: "Remaining models",
    pricing: "Rates and assumptions",
    measurement: "How I measured",
  },
  intro: {
    scenario: "A customer reports a double charge. To decide how to handle the request, the support team can send the message to a local model, Jev-Style, and ask it three questions.",
    message: "Customer message",
    urgencyLevel: "Urgency level",
    model: "Saved response from the local Jev-Style-2B-Decision-v4 (Q8_0) model, served through a System One-compatible API.",
    explanation: "The first two answers let the support system send the message to billing and put it higher in the queue. The final percentage shows how likely Jev-Style thinks the customer is asking for a refund. The support team applies its own rules when issuing one.",
    types: [
      { name: "Choice", text: "Choose from the categories you supply and get probabilities for the options." },
      { name: "Score", text: "Rate something on an ordered scale, such as urgency from 1 to 5." },
      { name: "Noul", text: "Get a probability for a yes/no condition. TypeSafe, Liquid and Google use the name noul." },
      { name: "Box", text: "Get a bounding box for an object in an image. Available in Jev 1.14 and Liquid d1-2B." },
    ],
    extensions: "Liquid d1-2B also supports typed extraction. Gemini Decision 1 accepts up to 262,144 tokens of shared multimodal input and 1,000 questions per request, with 2 to 255 options in a Choice question.",
    calibration: "TypeSafe describes its own Jev model as calibrated. If it assigns 80% to many similar predictions, about 80 in 100 should be right. Artificial Analysis checks this behaviour as part of its evaluation.",
  },
  examples: {
    ticket: {
      label: "Support request",
      explanation: ["The urgency shown here uses the 1 to 5 scale in the request. In the JSON, score uses zero-based positions and legend maps those positions to levels."],
      questions: {
        queue: "Who should handle the message?",
        urgency: "How urgent is it, from 1 to 5?",
        refund: "Is the customer asking for a refund?",
      },
    },
    router: {
      label: "Model routing",
      explanation: ["A router can ask about difficulty and tool use before deciding which model to call. Google reports up to 40% lower latency on everyday queries in Gemini Notebook. BenchLM describes its own Jev request with 14 Choice and 5 Noul questions sent together."],
      questions: {
        difficulty: "How hard is the task?",
        tools: "Does it need to run code or use tools?",
        strongest: "Does it need the strongest model?",
      },
    },
    commands: {
      label: "Action review",
      explanation: [
        "Coding agents use this kind of check before acting. Codex Auto-review sends eligible approval requests to a separate reviewer. In Auto mode, Antigravity CLI evaluates commands that need to run outside the sandbox. Claude Code’s auto mode uses a classifier to review eligible actions.",
        "OpenAI’s Decisions API can assess a proposed action with GPT-6 Luna. Google uses Gemini Decision 1 to check MCP tool calls in Search. The application’s rules determine whether the action runs.",
      ],
      questions: {
        safe: "Is it safe to run without asking?",
        touches: "What does it touch?",
        destroy: "Can it destroy data?",
      },
    },
    factCheck: {
      label: "Draft checking",
      explanation: ["A model can flag a claim for review by comparing a draft with the source it was given."],
      questions: {
        support: "Does the source support the draft?",
        wrong: "What is wrong?",
        severity: "How serious is the mismatch, from 1 to 5?",
      },
    },
  },
  answerNames: {
    billing: "Billing",
    delivery: "Delivery",
    other: "Other",
    Today: "Today",
    fix_ts: "Fix the TypeScript error",
  },
  exampleLabels: {
    state: "What the model received",
    output: "Model answers",
    kinds: { Choice: "Category selection", Score: "Scale rating", Noul: "Binary flag (yes / no)" },
    rubric: { mean: "Average score", outOf: "out of", level: "Level", probability: "Probability", distribution: "How the score was calculated" },
    json: "Response JSON",
    excerpt: "Original request and JSON",
    copy: "Copy JSON",
    copied: "Copied",
    copyFailed: "Clipboard unavailable. Select and copy the JSON below.",
    confidence: "model confidence",
    localInference: "Jev-Style inference time",
    localRoundTrip: "Full request to my server",
    apiTime: "Time reported by OpenRouter",
    inputTokens: "Input tokens",
  },
  useWarning: "Hostile text can steer a model toward a harmful choice even with fixed options. Enforce permissions and approval rules in code. Use the model score as one input to that check.",
  useMore: "The same approach works for content review, checking invoice fields and screening résumés against defined criteria.",
  timeline: [
    { title: "TypeSafe releases Jev", text: "Its first System One model answers typed questions in one call." },
    { title: "Liquid AI opens d1 weights", text: "The release includes the 3.1B d1-3B and d1-omni-600M, a 587M model that also handles audio." },
    { title: "Decision Index v1.0", text: "Artificial Analysis publishes the first version, with four equally weighted evaluations." },
    { title: "Jev 1.14", text: "The update previews image input, longer context and a box question type." },
    { title: "Liquid AI releases d1-ultra", text: "It leads the specialised models in the October snapshots below." },
    { title: "Fastino releases GLiDE v1.2", text: "Fastino publishes the weights alongside its hosted API." },
    { title: "Decision Index v2.0", text: "The index moves to six weighted evaluations and changes how confidence affects the score." },
    { title: "Gemini Decision 1", text: "Google releases an API for batches of questions on text, images, audio, video and PDFs." },
    { title: "Perplexity Decider v1.3", text: "OpenRouter lists the model used in my comparison." },
    { title: "Decision Index v2.1 snapshot", text: "The dated table below uses the revised symmetry test and 18 selected decision models." },
  ],
  modelNotes: {
    title: "Model families and open weights",
    entries: [
      { name: "Jev 1.14 and d1", text: "TypeSafe serves Jev 1.14 through its API. Liquid serves d1-ultra and d1.1 and publishes smaller weights for local use. The audio-capable d1-omni-600M is one of those models.", sources: ["jevUpdate", "liquid"] },
      { name: "Drex Max, SubQ Snap and GLiDE", text: "Drex Max v1.1 is offered through the Nace.AI API with a 262,144-token request limit. SubQ Snap 1.2 comes from Subquadratic. Fastino published the weights of GLiDE v1.2.", sources: ["drex", "nace", "fastino"] },
      { name: "Mammoth and Elephant", text: "Base Labs post-trained Mammoth-1 and Elephant-1 from Qwen3.5-27B and Qwen3.5-9B. Both have downloadable weights. Mammoth-1 distributes its weights under MIT.", sources: ["baseLabs", "mammoth"] },
      { name: "Strands and other decision APIs", text: "Amazon Strands Decider E2B can run on a CPU. The project also supports MLX on Apple silicon. The November table includes Microsoft-Decision-1, Mercury Decide, Celeris, Cloudflare Clef and Clef-Omni, and OpenAI’s GPT-6 Luna Decisions.", sources: ["strands", "strandsRuntime", "aaIndex"] },
    ],
  },
  index: {
    lead: "The Artificial Analysis index measures tasks such as document decisions, tool selection and reasoning. Compare models within the same version and selection.",
    v1Note: "In the first October snapshot (v1.0), Claude Haiku 5.5 (Low) scores 61, Jev 1.13 scores 58, GLiDE and Microsoft-Decision-1 score 54, and d1 scores 50. In the second, d1-ultra reaches 65. Haiku (Low) still scores 61, Haiku (Max) scores 68, and the two Opus 5.5 settings score 75 and 79. The second chart adds three Claude settings and omits Jev 1.13.",
    v21Note: "v2.0 changed the tests and the score. v2.1 then revised the symmetry test. The v2.1 ranking here uses the selection of 18 decision models, with generative LLMs hidden. The first two scores round to 72.6 from 72.624 and 72.581.",
    rankCaption: "Decision Index v2.1 · 18 selected models · 13 November 2026",
    rank: "Rank",
    model: "Model",
    score: "Score",
    methodology: "How v2.1 is scored",
    metric: "Evaluation",
    weight: "Weight",
    metricDescriptions: [
      "Decisions and extraction from documents, including receipts, invoices and résumés",
      "Judgments about workplace documents and actions",
      "Knowledge and when to decline an uncertain answer",
      "Multiple-choice reasoning with an option to decline",
      "Consistency under reordered, reworded or negated questions",
      "Whether to call a tool and which action to choose",
    ],
    metricNote: "For five evaluations, each scored decision earns 50 × (1 + c − (p − c)²). Here p is the probability of the chosen answer, and c is 1 for a correct answer or 0 for a wrong one. AA-Symmetry has its own consistency score.",
    details: {
      title: "Individual tests and the Jev Decision Index",
      notes: [
        "Artificial Analysis’s v2.0 report puts Drex Max v1.1 at 63% of AA-Paperclip documents with all 15 answers correct. The earlier notes for this article record 35.5% for Jev 1.14 and 33% for Gemini Decision 1, and When2Call readings of 94.6% for Drex and 75.2% for Gemini. Those percentages are retained from the earlier notes. Nace also reports a v2.1 When2Call Decision Score of 95.3 for Drex.",
        "In the Base Labs release, Mammoth-1 leads Jev Decision Index 0.4 with 71.24, followed by Perplexity Decider v1.2 at 69.42. Elephant-1 scores 62.65 and Jev 1.14 scores 62.2 in that index. On the separate Base Labs replica of the Artificial Analysis index, Mammoth-1 scores 65.9 and Elephant-1 65.2. The release cites 65.0 for d1-ultra as the then-official reference.",
      ],
    },
    archiveTitle: "Archived screenshots",
    archives: {
      before: {
        title: "October · Jev 1.13 and Haiku 5.5",
        alt: "Bar chart of the Artificial Analysis Decision Index for 12 of 28 models. Claude Haiku 5.5 (Low) scores 61, Jev 1.13 58, GPT-6 Luna (Low) 55, GLIDE 54, Microsoft-Decision-1 54, Decider v1.1 27B 53, Mercury Decide 53, Celeris-1 Decision 52, d1 50, Clef 49, GPT-6 Luna (Decisions) 48, Clef-Omni 44.",
        caption: "12 of 28 models. Generative language models included.",
      },
      after: {
        title: "October · d1-ultra added",
        alt: "Bar chart of the Artificial Analysis Decision Index for 15 of 28 models. Claude Opus 5.5 (Max) scores 79, Claude Opus 5.5 (Low) 75, Claude Haiku 5.5 (Max) 68, d1-ultra 65, Claude Haiku 5.5 (Low) 61, GPT-6 Luna (Low) 55, then the same decision models as before from GLIDE at 54 down to Clef-Omni at 44.",
        caption: "15 of 28 models. Three additional Claude configurations are shown and Jev 1.13 is absent from this selection.",
      },
      v2: {
        title: "15 November · Decision Index v2.1",
        alt: "Bar chart of the Artificial Analysis Decision Index v2.1 on 15 November 2026 for 18 of 22 models without language models. Drex Max v1.1 73, SubQ Snap 1.2 73, GLiDE v1.2 73, Mammoth 27B 71, d1-ultra 71, Decider v1.3 70, d1.1 66, Elephant 9B 66, Jev 1.14 66, Gemini Decision 1 66, Decider Flash v1.3 64, Microsoft-Decision-1 62, Mercury Decide 62, Celeris-1.1 Decision 62, Drex 2.0 62, Clef 60, GPT-6 Luna (Decisions) 60, Clef-Omni 58.",
        caption: "18 of 22 models. Generative LLMs hidden. Captured on 15 November 2026.",
      },
    },
    original: "Open original PNG",
  },
  price: {
    caption: "Estimated cost per million calls",
    intro: "The calculator uses Jev 1.14 on OpenRouter and the Claude API tariff for Haiku 5.5 prompts of up to 100,000 tokens. Both use the same input count and the Haiku rows use an estimated output count.",
    calls: [
      { label: "Support ticket", basis: "The input count is from OpenRouter’s three-question example. Its 69 output tokens serve as a proxy for a Haiku reply." },
      { label: "Routing", basis: "Estimated tokens for routing with 14 Choice and 5 yes/no questions." },
      { label: "Action review", basis: "Estimated tokens for a short input and a few checks." },
      { label: "Fact check", basis: "Estimated tokens for a long source and a short answer." },
    ],
    names: {
      decision: "Jev 1.14",
      haiku: "Haiku 5.5 · answer",
      haikuLow: "Haiku 5.5 · with thinking",
    },
    tokens: { input: "input tokens", output: "reply tokens in the estimate" },
    amount: "Cost",
    ratio: "Relative to Jev 1.14",
    thinkingAssumption: "assumed thinking tokens",
    billingNote: "Billing can change the comparison. Liquid bills each d1 question separately, including the input. Google bills the Gemini document once per request and also charges for each question’s instructions and criteria.",
    decisionTariffLabel: "Per million input tokens. Jev 1.14 and d1-ultra at the lower rate, Gemini Decision 1 at the higher rate. Output is free.",
    haikuTariffLabel: "Per million input and output tokens for Claude Haiku 5.5, for requests up to 100,000 tokens.",
    geminiComparison: "In Google’s shared test suite, Gemini Decision 1 cost nearly five times less than Gemini 3.5 Flash-Lite through the Interactions API.",
    barScale: "Bars use the same scale across scenarios, from zero to",
  },
  timing: {
    caption: "Time per completed task · Decision Index v2.0, 8 November",
    duration: "Time per task",
    note: "These are Artificial Analysis’s Time per Task results for the same v2.0 evaluation suite. The Haiku configuration is Max here, and the timing covers the full task.",
    extra: "Artificial Analysis reports 92 ms per task for Jev 1.14 in its v2.0 report. The 13 November v2.1 table gives 283 ms for Drex Max and 162 ms for SubQ Snap. Google reports 150 to 250 ms end to end for Gemini Decision 1 with inputs up to 16K tokens and up to 100 questions in its timing tests.",
    archive: {
      title: "Latency figures from the earlier edition",
      jev: "TypeSafe Jev · full response",
      haiku: "Haiku 5.5 (Low) · time to first answer token",
      note: "These figures are retained from the earlier edition, which cited TypeSafe and Artificial Analysis. They use different metrics. The original Haiku measurement export was not saved with the article.",
    },
  },
  scale: {
    intro: "I gave the local Jev-Style model and Perplexity Decider the same five situations and asked the same questions. For each case I saved their answers and response times.",
    modelOrigins: ["Local model", "OpenRouter"],
    note: "I ran one request per model for each case. For Jev-Style I recorded the local inference time and the full request time including the network. For Perplexity I used the time in the OpenRouter response. The five cases show how the answers compare in this run.",
    setup: "Both models received the same English inputs. My server at jev.zorahm.com/v1/systemone ran the local Jev-Style-2B-Decision-v4 (Q8_0) model in GGUF and exposed a System One-compatible API. The remote calls used perplexity/pplx-decider-v1.3:free through OpenRouter’s Decisions API.",
    footprint: {
      title: "Memory for local weights",
      cards: [
        { model: "2B · Q8_0", amount: "≈2.2 GB", text: "Size of the local weights in this setup." },
        { model: "Elephant-1 · 9B Q8_0", amount: "≈9.5 GB", text: "Size of the GGUF. A 16 GB GPU leaves room for the runtime and context." },
      ],
      note: "These are weight sizes. Total memory also depends on the runtime and the input. In the five saved cases local inference took 105 to 171 ms and round trips took 228 to 459 ms. OpenRouter reported 834 to 993 ms for Perplexity.",
    },
    cases: {
      refund: {
        label: "Refund",
        situation: "A customer was charged twice for a subscription and asks for one payment back.",
        takeaway: "Both models pick billing and rate the chance of a refund request above 98%. Both suggest handling it today.",
        evidenceNote: "The earlier write-up lists 77.5% and 60.9% for that urgency level. The saved excerpts contain the score and chosen level.",
        questions: { team: "Target department", refund: "Is a refund requested?", urgency: "Urgency score" },
      },
      readOnly: {
        label: "Read data",
        situation: "A proposed command reads the status from a server’s health check.",
        takeaway: "Both assign a low probability to destructive effects. They differ more on whether to run the command automatically.",
        questions: { execute: "Run automatically?", destructive: "Could it destroy data?" },
      },
      destructive: {
        label: "Delete files",
        situation: "A proposed command could delete files across the whole system.",
        takeaway: "In this case both assign a high probability to destructive effects. Perplexity gives a lower probability to automatic execution.",
        questions: { execute: "Run automatically?", destructive: "Could it destroy data?" },
      },
      ci: {
        label: "Build failure",
        situation: "The automatic build fails with a TypeScript error after changes are merged into the project.",
        takeaway: "Both suggest fixing the TypeScript error. They differ on whether to alert a person.",
        questions: { action: "Suggested next step", needs_human: "Does it need a person?" },
      },
      password: {
        label: "Password reset",
        situation: "A user locked out of their account asks for a temporary password by email.",
        takeaway: "Perplexity assigns more risk to this request and a lower probability to automatic approval. The saved run recorded scores, with approval left to the application.",
        questions: { security_risk: "Risk of account takeover?", allow_auto: "Approve automatically?" },
      },
    },
  },
  limits: [
    { title: "A bounded answer", text: "Use a decision model where the options or levels can be defined ahead of time. Free-form replies and explanations need a different interface." },
    { title: "Explicit criteria", text: "Spell out the conditions and exceptions the model should consider. A short label alone can leave an important distinction ambiguous." },
    { title: "Confidence and correctness", text: "A prediction of 80% means little in isolation. Check calibration and choose thresholds on examples from your own application." },
    { title: "Actions and deterministic checks", text: "Keep authorisation, exact arithmetic and date comparisons in code. Decide how ambiguous cases reach a person." },
    { title: "API and hardware", text: "Hosted models depend on the provider’s API. For local weights, allow memory for the runtime and context as well as the model file." },
  ],
  textVersion: "Plain-text version (llms.txt)",
  practice: {
    jump: "See how it works in practice?",
    lead: "Yaca, my coding agent, writes code and can run commands. I use it to show how a decision model works inside an agent: in Auto mode it asks a model to assess whether a command can run without checking with a person.",
    scenarios: "Example commands",
    command: "Command",
    question: "Is it safe to run without confirmation?",
    response: "Model’s answer",
    scoreMeaning: "for running without confirmation",
    rawResponse: "Show JSON",
    rule: "Runs without asking at {threshold} or above",
    action: "Yaca’s decision",
    allow: "Yaca runs the command",
    ask: "Yaca waits for a person to confirm",
    preview: {
      title: "What the user sees",
      completed: "Project build completed",
      confirm: "Confirm execution",
      deny: "Refuse",
      permit: "Allow",
    },
    tasks: {
      "cargo build": { label: "Build the project (safe action)", assessment: "Likely safe" },
      "git push --force": { label: "Rewrite history (unsafe action)", assessment: "Likely unsafe" },
    },
    note: "Replay based on measurements with",
    sourceLabel: "Yaca source",
  },
};

const ru: PaperDecisionStrings = {
  title: "Decision-модели",
  description: "Объясняю работу Decision-моделей на примере службы поддержки. Сравниваю ответы локальной модели Jev-Style и Perplexity Decider на пяти задачах, разбираю цену и скорость.",
  lead: "Модель отвечает в заданном формате. Она выбирает вариант, ставит оценку или даёт вероятность «да», а программа решает, что делать дальше.",
  opening: { format: "Статья и исследование", example: "Понять на примере", research: "Сравнить модели" },
  back: "Все статьи",
  dates: { published: "Опубликовано", updated: "Обновлено" },
  sections: {
    what: "От сообщения к решению",
    use: "Где это помогает",
    models: "Как развивались модели",
    index: "Независимый рейтинг моделей",
    why: "Цена и время ответа",
    scale: "Моё сравнение двух моделей",
    limits: "Ограничения",
    sources: "Источники",
    practice: "Как решает Yaca",
  },
  detailLabels: {
    types: "Типы вопросов и калибровка",
    rankings: "Остальные модели",
    pricing: "Тарифы и допущения",
    measurement: "Как я измерял",
  },
  intro: {
    scenario: "Клиент жалуется на двойное списание. Чтобы решить, как обработать обращение, служба поддержки может передать его сообщение локальной модели Jev-Style и задать ей три вопроса.",
    message: "Сообщение клиента",
    urgencyLevel: "Уровень срочности",
    model: "Сохранённый ответ локальной модели Jev-Style-2B-Decision-v4 (Q8_0), полученный через API, совместимый с System One.",
    explanation: "По первым двум ответам программа может передать обращение в отдел оплаты и пометить его как срочное. Последний процент показывает, насколько вероятной модель считает просьбу вернуть деньги. Возврат оформляет служба поддержки по своим правилам.",
    types: [
      { name: "Choice", text: "Выбор среди заданных вами категорий с вероятностями по вариантам." },
      { name: "Score", text: "Оценка на упорядоченной шкале, например срочность от 1 до 5." },
      { name: "Noul", text: "Вероятность того, что условие выполняется. Название noul используют TypeSafe, Liquid и Google." },
      { name: "Box", text: "Координаты рамки вокруг объекта на изображении. Есть у Jev 1.14 и Liquid d1-2B." },
    ],
    extensions: "Liquid d1-2B также умеет извлекать типизированные данные. У Gemini Decision 1 общий мультимодальный вход до 262 144 токенов, до 1 000 вопросов за запрос и от 2 до 255 вариантов в вопросе Choice.",
    calibration: "TypeSafe описывает вероятности своей модели Jev как откалиброванные. Среди похожих ответов с вероятностью 80% верными должны оказаться примерно 80 из 100. Artificial Analysis проверяет это свойство в своей оценке.",
  },
  examples: {
    ticket: {
      label: "Обращение в поддержку",
      explanation: ["Срочность показана по шкале от 1 до 5. В JSON поле score отсчитывает позиции с нуля, а legend связывает позиции со значениями шкалы."],
      questions: {
        queue: "Кому передать обращение?",
        urgency: "Насколько срочно, от 1 до 5?",
        refund: "Клиент просит вернуть деньги?",
      },
    },
    router: {
      label: "Выбор модели",
      explanation: ["Перед выбором модели роутер может спросить о сложности задачи и необходимости инструментов. В Gemini Notebook Google сообщает о снижении задержки до 40% на повседневных запросах. BenchLM показывает свой вызов Jev с 14 вопросами Choice и пятью Noul в одном пакете."],
      questions: {
        difficulty: "Насколько сложная задача?",
        tools: "Нужно запускать код или использовать инструменты?",
        strongest: "Нужна самая сильная модель?",
      },
    },
    commands: {
      label: "Проверка действия",
      explanation: [
        "Такую проверку используют кодинг-агенты. В Codex Auto-review запросы на разрешение оценивает отдельный ревьюер. Antigravity CLI в режиме Auto проверяет команды, которым нужен выход из песочницы. В авторежиме Claude Code часть действий проверяет классификатор.",
        "Для типизированной оценки действия можно использовать GPT-6 Luna через OpenAI Decisions API. Google применяет Gemini Decision 1 для проверки вызовов MCP-инструментов в Search. Приложение решает, выполнять ли действие, по своим правилам.",
      ],
      questions: {
        safe: "Можно выполнить без подтверждения?",
        touches: "Чего касается команда?",
        destroy: "Может ли она уничтожить данные?",
      },
    },
    factCheck: {
      label: "Проверка черновика",
      explanation: ["Модель может пометить утверждение для проверки, сопоставив черновик с предоставленным источником."],
      questions: {
        support: "Источник подтверждает черновик?",
        wrong: "Что в черновике неверно?",
        severity: "Насколько серьёзно расхождение, от 1 до 5?",
      },
    },
  },
  answerNames: {
    billing: "Отдел оплаты",
    delivery: "Доставка",
    other: "Другое",
    Today: "Сегодня",
    fix_ts: "Исправить ошибку TypeScript",
  },
  exampleLabels: {
    state: "Что получила модель",
    output: "Ответы модели",
    kinds: { Choice: "Выбор категории", Score: "Оценка по шкале", Noul: "Бинарный флаг (да / нет)" },
    rubric: { mean: "Средняя оценка", outOf: "из", level: "Уровень", probability: "Вероятность", distribution: "Как получилась оценка" },
    json: "Ответ в JSON",
    excerpt: "Исходный запрос и JSON",
    copy: "Копировать JSON",
    copied: "Скопировано",
    copyFailed: "Буфер обмена недоступен. Выделите и скопируйте JSON ниже.",
    confidence: "уверенность модели",
    localInference: "Время работы Jev-Style",
    localRoundTrip: "Полный запрос к моему серверу",
    apiTime: "Время по данным OpenRouter",
    inputTokens: "Входные токены",
  },
  useWarning: "Вредоносный текст на входе может склонить модель к нежелательному ответу даже при заданных вариантах. Проверяйте права и подтверждения в коде. Оценку модели можно использовать как один из входов этой проверки.",
  useMore: "Тот же подход подходит для модерации, проверки реквизитов счёта и отбора резюме по заданным критериям.",
  timeline: [
    { title: "TypeSafe выпускает Jev", text: "Первая модель System One отвечает на типизированные вопросы за один вызов." },
    { title: "Liquid AI публикует открытые веса d1", text: "В релизе d1-3B с 3,1 млрд параметров и d1-omni-600M с 587 млн параметров и поддержкой аудио." },
    { title: "Decision Index v1.0", text: "Artificial Analysis публикует первую версию из четырёх тестов с одинаковым весом." },
    { title: "Jev 1.14", text: "В обновлении появляются экспериментальные возможности: изображения, длинный контекст и поиск объектов по рамке." },
    { title: "Liquid AI выпускает d1-ultra", text: "Модель выходит в лидеры среди специализированных в октябрьском срезе AA." },
    { title: "Fastino выпускает GLiDE v1.2", text: "Fastino публикует веса модели и предоставляет доступ через API." },
    { title: "Decision Index v2.0", text: "Индекс переходит на шесть взвешенных тестов и начинает учитывать уверенность ответа в итоговом балле." },
    { title: "Gemini Decision 1", text: "Google выпускает API для пакетов вопросов по тексту, изображениям, аудио, видео и PDF." },
    { title: "Perplexity Decider v1.3", text: "На OpenRouter появляется модель из моего сравнения." },
    { title: "Срез Decision Index v2.1", text: "В таблице на эту дату используется обновлённый тест на симметрию и выборка из 18 Decision-моделей." },
  ],
  modelNotes: {
    title: "Семейства моделей и открытые веса",
    entries: [
      { name: "Jev 1.14 и d1", text: "TypeSafe предоставляет Jev 1.14 через API. У Liquid есть облачные d1-ultra и d1.1 и более компактные модели для локального запуска, включая d1-omni-600M с аудио.", sources: ["jevUpdate", "liquid"] },
      { name: "Drex Max, SubQ Snap и GLiDE", text: "У Drex Max v1.1 от Nace.AI лимит запроса 262 144 токена. SubQ Snap 1.2 выпускает Subquadratic. Fastino опубликовала веса GLiDE v1.2.", sources: ["drex", "nace", "fastino"] },
      { name: "Mammoth и Elephant", text: "Base Labs дообучила Mammoth-1 и Elephant-1 из Qwen3.5-27B и Qwen3.5-9B. Веса обеих моделей доступны для скачивания, у Mammoth-1 лицензия MIT.", sources: ["baseLabs", "mammoth"] },
      { name: "Strands и другие API", text: "Amazon Strands Decider E2B можно запускать на CPU. Проект поддерживает и MLX на Apple silicon. В ноябрьской таблице также есть Microsoft-Decision-1, Mercury Decide, Celeris, Clef и Clef-Omni от Cloudflare и GPT-6 Luna Decisions от OpenAI.", sources: ["strands", "strandsRuntime", "aaIndex"] },
    ],
  },
  index: {
    lead: "Artificial Analysis проверяет работу с документами, выбор инструментов и рассуждения. Баллы имеют смысл сравнивать внутри одной версии индекса и по одному набору моделей.",
    v1Note: "В первом октябрьском снимке v1.0 у Haiku 5.5 (Low) было 61, у Jev 1.13 было 58, у GLiDE и Microsoft-Decision-1 по 54, у d1 было 50. На втором снимке d1-ultra набрала 65. У Haiku (Low) осталось 61, у Haiku (Max) было 68, у двух конфигураций Opus 5.5 было 75 и 79. Во втором снимке появились три конфигурации Claude и исчезла Jev 1.13.",
    v21Note: "В v2.0 изменились тесты и подсчёт баллов. В v2.1 обновился тест на симметрию. Ниже выборка из 18 Decision-моделей с выключенным показом генеративных LLM. Первые два балла округлены до 72,6 с 72,624 и 72,581.",
    rankCaption: "Decision Index v2.1 · 18 выбранных моделей · 13 ноября 2026",
    rank: "Место",
    model: "Модель",
    score: "Балл",
    methodology: "Как считают v2.1",
    metric: "Тест",
    weight: "Вес",
    metricDescriptions: [
      "Решения и извлечение данных из документов, включая чеки, счета и резюме",
      "Оценка документов и действий на рабочем месте",
      "Знания и умение воздержаться от ответа при неуверенности",
      "Логические задачи с вариантами и возможностью воздержаться",
      "Согласованность при перестановке вариантов, перефразировании и отрицании",
      "Решение о вызове инструмента и выбор действия",
    ],
    metricNote: "В пяти тестах решение получает 50 × (1 + c − (p − c)²) баллов. Здесь p означает вероятность выбранного ответа, c равно 1 при верном ответе и 0 при ошибке. У AA-Symmetry собственная оценка согласованности.",
    details: {
      title: "Отдельные тесты и Jev Decision Index",
      notes: [
        "В отчёте Artificial Analysis по v2.0 Drex Max v1.1 решила 63% документов AA-Paperclip со всеми 15 верными ответами. В прежней редакции статьи были записаны 35,5% для Jev 1.14 и 33% для Gemini Decision 1, а для When2Call были выписаны 94,6% у Drex и 75,2% у Gemini. Это сохранённые проценты из прежних выписок. У Nace для Drex также опубликован Decision Score 95,3 в When2Call на v2.1.",
        "В релизе Base Labs Mammoth-1 заняла первое место в Jev Decision Index 0.4 с 71,24. У Perplexity Decider v1.2 было 69,42, у Elephant-1 было 62,65, у Jev 1.14 было 62,2. В отдельной реплике индекса Artificial Analysis от Base Labs у Mammoth-1 было 65,9, у Elephant-1 было 65,2. Для d1-ultra в отчёте приведён тогдашний официальный ориентир 65,0.",
      ],
    },
    archiveTitle: "Архивные скриншоты",
    archives: {
      before: {
        title: "Октябрь · Jev 1.13 и Haiku 5.5",
        alt: "Столбчатая диаграмма Artificial Analysis Decision Index для 12 из 28 моделей. Claude Haiku 5.5 (Low) набирает 61, Jev 1.13 58, GPT-6 Luna (Low) 55, GLIDE 54, Microsoft-Decision-1 54, Decider v1.1 27B 53, Mercury Decide 53, Celeris-1 Decision 52, d1 50, Clef 49, GPT-6 Luna (Decisions) 48, Clef-Omni 44.",
        caption: "12 из 28 моделей. В выборку включены генеративные LLM.",
      },
      after: {
        title: "Октябрь · появилась d1-ultra",
        alt: "Столбчатая диаграмма Artificial Analysis Decision Index для 15 из 28 моделей. Claude Opus 5.5 (Max) набирает 79, Claude Opus 5.5 (Low) 75, Claude Haiku 5.5 (Max) 68, d1-ultra 65, Claude Haiku 5.5 (Low) 61, GPT-6 Luna (Low) 55, дальше те же Decision-модели, что и раньше, от GLIDE с 54 до Clef-Omni с 44.",
        caption: "15 из 28 моделей. Добавлены три конфигурации Claude, Jev 1.13 в этой выборке отсутствует.",
      },
      v2: {
        title: "15 ноября · Decision Index v2.1",
        alt: "Столбчатая диаграмма Artificial Analysis Decision Index v2.1 на 15 ноября 2026 года для 18 из 22 специализированных моделей без LLM. Drex Max v1.1 73, SubQ Snap 1.2 73, GLiDE v1.2 73, Mammoth 27B 71, d1-ultra 71, Decider v1.3 70, d1.1 66, Elephant 9B 66, Jev 1.14 66, Gemini Decision 1 66, Decider Flash v1.3 64, Microsoft-Decision-1 62, Mercury Decide 62, Celeris-1.1 Decision 62, Drex 2.0 62, Clef 60, GPT-6 Luna (Decisions) 60, Clef-Omni 58.",
        caption: "18 из 22 моделей. Генеративные LLM скрыты. Снимок сделан 15 ноября 2026 года.",
      },
    },
    original: "Открыть оригинал PNG",
  },
  price: {
    caption: "Расчёт на миллион вызовов",
    intro: "Для Jev 1.14 взят тариф OpenRouter, для Haiku 5.5 тариф Claude API для входа до 100 000 токенов. Обе модели получают один и тот же входной объём. Объём ответа Haiku задан для расчёта.",
    calls: [
      { label: "Тикет", basis: "Вход взят из примера OpenRouter с тремя вопросами. Его 69 выходных токенов использованы для оценки ответа Haiku." },
      { label: "Маршрутизация", basis: "Оценка объёма маршрутизации с 14 вопросами Choice и пятью вопросами да или нет." },
      { label: "Проверка действия", basis: "Оценка токенов для короткого входа и нескольких проверок." },
      { label: "Проверка фактов", basis: "Оценка токенов для длинного источника и короткого ответа." },
    ],
    names: {
      decision: "Jev 1.14",
      haiku: "Haiku 5.5 · ответ",
      haikuLow: "Haiku 5.5 · с размышлением",
    },
    tokens: { input: "входных токенов", output: "токенов ответа в расчёте" },
    amount: "Цена",
    ratio: "К цене Jev 1.14",
    thinkingAssumption: "токенов размышления по допущению",
    billingNote: "Правила тарификации меняют счёт за пакет. Liquid тарифицирует каждый вопрос к d1 как отдельный запрос с полным входом. Gemini считает общий документ один раз, а инструкции и критерии каждого вопроса добавляются к входу.",
    decisionTariffLabel: "За миллион входных токенов. Нижняя ставка у Jev 1.14 и d1-ultra, верхняя у Gemini Decision 1. Выход бесплатный.",
    haikuTariffLabel: "За миллион входных и выходных токенов Claude Haiku 5.5, для запросов до 100 000 токенов.",
    geminiComparison: "В наборе тестов Google Gemini Decision 1 обошлась почти в пять раз дешевле Gemini 3.5 Flash-Lite через Interactions API.",
    barScale: "У полос общая шкала для всех сценариев, от нуля до",
  },
  timing: {
    caption: "Время на полную задачу · Decision Index v2.0, 8 ноября",
    duration: "Время на задачу",
    note: "Все три значения взяты из Time per Task для одной версии оценки Artificial Analysis. Для Haiku здесь выбран режим Max. Замер охватывает полный ответ.",
    extra: "В отчёте по v2.0 Artificial Analysis приводит 92 мс за задачу для Jev 1.14. В срезе v2.1 от 13 ноября у Drex Max было 283 мс, у SubQ Snap было 162 мс. Google сообщает для Gemini Decision 1 от 150 до 250 мс за полный ответ при входе до 16K токенов и числе вопросов до 100.",
    archive: {
      title: "Ориентиры задержки из прежней редакции",
      jev: "Jev от TypeSafe · полный ответ",
      haiku: "Haiku 5.5 (Low) · до первого токена ответа",
      note: "Числа сохранены из прежней редакции со ссылками на TypeSafe и Artificial Analysis. Здесь два разных способа измерения. Исходная выгрузка Haiku вместе со статьёй не сохранилась.",
    },
  },
  scale: {
    intro: "Я показал локальной модели Jev-Style и Perplexity Decider одни и те же пять ситуаций и задал одинаковые вопросы. В каждом случае сохранил ответы и время запроса.",
    modelOrigins: ["Локальная модель", "OpenRouter"],
    note: "Для каждой ситуации я сделал по одному запросу к каждой модели. Для Jev-Style я отдельно замерил время локального инференса и время всего запроса с учётом сети. Для Perplexity взял время из ответа OpenRouter. Эти пять ситуаций показывают, как соотносятся ответы в этом прогоне.",
    setup: "Обе модели получили одни и те же примеры на английском. Мой сервер по адресу jev.zorahm.com/v1/systemone запускал локальную модель Jev-Style-2B-Decision-v4 в формате GGUF с квантованием Q8_0 и предоставлял API, совместимый с System One. Запросы к perplexity/pplx-decider-v1.3:free шли через Decisions API OpenRouter.",
    footprint: {
      title: "Память для локальных весов",
      cards: [
        { model: "2B · Q8_0", amount: "≈2,2 ГБ", text: "Размер локальных весов в этой конфигурации." },
        { model: "Elephant-1 · 9B Q8_0", amount: "≈9,5 ГБ", text: "Размер GGUF. На видеокарте с 16 ГБ остаётся запас для приложения и контекста." },
      ],
      note: "Это размеры весов. Потребление памяти зависит также от приложения и объёма входа. В пяти сохранённых сценариях локальный инференс занял от 105 до 171 мс, вызов по сети от 228 до 459 мс. Для Perplexity ответ OpenRouter показал от 834 до 993 мс.",
    },
    cases: {
      refund: {
        label: "Возврат",
        situation: "С клиента дважды списали деньги за подписку. Он просит вернуть один платёж.",
        takeaway: "Обе модели выбрали отдел оплаты и оценили вероятность просьбы о возврате выше 98%. Обе предложили обработать обращение сегодня.",
        evidenceNote: "В прежнем разборе для этого уровня срочности записаны 77,5% и 60,9%. Сохранённые фрагменты содержат балл и выбранный уровень.",
        questions: { team: "Кому передать обращение?", refund: "Клиент просит возврат?", urgency: "Как срочно нужно ответить?" },
      },
      readOnly: {
        label: "Чтение данных",
        situation: "Команда читает статус сервера, чтобы проверить, работает ли он.",
        takeaway: "Обе модели оценивают вероятность разрушительных последствий низко. Оценки автоматического запуска расходятся сильнее.",
        questions: { execute: "Запускать автоматически?", destructive: "Есть риск уничтожения данных?" },
      },
      destructive: {
        label: "Удаление файлов",
        situation: "Команда может удалить файлы по всей системе.",
        takeaway: "Обе модели дают высокую оценку риска уничтожения данных. Perplexity ниже оценивает допустимость автоматического запуска.",
        questions: { execute: "Запускать автоматически?", destructive: "Есть риск уничтожения данных?" },
      },
      ci: {
        label: "Сбой сборки",
        situation: "После объединения изменений автоматическая сборка проекта падает с ошибкой TypeScript.",
        takeaway: "Обе модели предлагают исправить ошибку TypeScript. Их оценки того, нужно ли позвать человека, различаются.",
        questions: { action: "Следующее действие", needs_human: "Нужно позвать человека?" },
      },
      password: {
        label: "Сброс пароля",
        situation: "У пользователя заблокирован вход. Он просит прислать временный пароль по почте.",
        takeaway: "Perplexity оценивает риск выше, а допустимость автоодобрения ниже. Сохранённый вызов даёт оценки, а разрешение остаётся за приложением.",
        questions: { security_risk: "Есть риск захвата аккаунта?", allow_auto: "Одобрить автоматически?" },
      },
    },
  },
  limits: [
    { title: "Заранее заданный ответ", text: "Decision-модель подходит там, где можно заранее определить варианты или уровни. Для свободного текста и объяснений нужен другой интерфейс." },
    { title: "Явные условия", text: "Укажите, какие условия и исключения модель должна учитывать. Короткая метка может скрывать важное для ответа различие." },
    { title: "Уверенность и верность", text: "Одна оценка в 80% сама по себе мало говорит о точности. Калибровку и пороги стоит проверять на данных своего приложения." },
    { title: "Действия и точные проверки", text: "Права доступа, арифметику и сравнение дат оставляйте коду. Для неоднозначных случаев заранее определите, когда нужен человек." },
    { title: "API и оборудование", text: "Облачные модели зависят от API поставщика. Для локальных моделей нужен запас памяти под приложение и контекст сверх размера весов." },
  ],
  textVersion: "Текстовая версия (llms.txt)",
  practice: {
    jump: "Посмотреть, как это работает на практике?",
    lead: "Yaca, мой кодинг-агент, помогает писать код и умеет запускать команды. На его примере показываю, как работает Decision-модель внутри агента: в режиме Auto он просит модель оценить, можно ли запустить команду без подтверждения человека.",
    scenarios: "Примеры команд",
    command: "Команда",
    question: "Безопасно запустить без подтверждения?",
    response: "Ответ модели",
    scoreMeaning: "за запуск без подтверждения",
    rawResponse: "Показать JSON",
    rule: "От {threshold} для запуска без подтверждения",
    action: "Решение Yaca",
    allow: "Yaca запускает команду",
    ask: "Yaca ждёт подтверждения человека",
    preview: {
      title: "Что видит пользователь",
      completed: "Сборка проекта завершена",
      confirm: "Подтвердить выполнение",
      deny: "Отклонить",
      permit: "Разрешить",
    },
    tasks: {
      "cargo build": { label: "Собрать проект (безопасное действие)", assessment: "Скорее безопасно" },
      "git push --force": { label: "Переписать историю (небезопасное действие)", assessment: "Скорее небезопасно" },
    },
    note: "Сценарий по замерам на",
    sourceLabel: "Код Yaca",
  },
};

const STRINGS: Record<Lang, PaperDecisionStrings> = { en, ru };

export const getPaperDecision = (lang: Lang) => STRINGS[lang];

type Probabilities = Record<string, number>;

type StoredAnswer =
  | { type: "noul"; noul: number }
  | { type: "choice"; choice: string; confidence?: number; probabilities?: Probabilities }
  | { type: "score"; score: number; choice?: string; legend?: Record<string, string>; probabilities?: Probabilities };

type StoredResponse = {
  answers: Record<string, StoredAnswer>;
  latency_ms: number;
  usage: { input_tokens: number };
};

const parseResponse = (rawJson: string): StoredResponse => JSON.parse(rawJson);

const formatProbability = (probability: number, lang: Lang) =>
  formatPaperNumber(probability, lang, { style: "percent", maximumFractionDigits: 2 });

export function getPaperDecisionPractice(lang: Lang) {
  const copy = getPaperDecision(lang).practice;
  const { model, threshold, buildOutput, source, calls } = PRACTICE_REVIEW;
  const thresholdValue = threshold.toFixed(2);
  const thresholdPercent = formatProbability(threshold, lang);
  return {
    ...copy,
    preview: { ...copy.preview, buildOutput },
    model,
    source,
    threshold,
    thresholdPercent,
    rule: copy.rule.replace("{threshold}", thresholdPercent),
    calls: calls.map((call) => {
      const { label, assessment } = copy.tasks[call.command];
      const allowed = call.score >= threshold;
      const scoreValue = call.score.toFixed(2);
      return {
        command: call.command,
        task: label,
        assessment,
        allowed,
        score: call.score,
        scoreValue,
        scorePercent: formatProbability(call.score, lang),
        comparison: `${scoreValue} >= ${thresholdValue}`,
        outcome: allowed ? copy.allow : copy.ask,
      };
    }),
  };
}

export type PaperDecisionAnswer = {
  kind: "Noul" | "Choice" | "Score";
  value: string;
  detail: string;
  choice?: { label: string; percent: string };
  selectedLevel?: string;
  rubric?: {
    maximum?: string;
    mean: number;
    levels: { label: string; probability: number; percent: string }[];
  };
};

function describeAnswer(answer: StoredAnswer, lang: Lang): PaperDecisionAnswer {
  if (answer.type === "noul") {
    return { kind: "Noul", value: formatProbability(answer.noul, lang), detail: "" };
  }

  const { answerNames, exampleLabels } = getPaperDecision(lang);
  const nameOf = (value: string) => Object.hasOwn(answerNames, value) ? answerNames[value] : value;

  if (answer.type === "choice") {
    const choice = nameOf(answer.choice);
    const probabilities = answer.probabilities;
    if (probabilities) {
      const percent = formatProbability(probabilities[answer.choice], lang);
      return {
        kind: "Choice",
        value: choice + " · " + percent,
        choice: { label: choice, percent },
        detail: Object.entries(probabilities)
          .filter(([label]) => label !== answer.choice)
          .map(([label, probability]) => nameOf(label) + " " + formatProbability(probability, lang))
          .join(" · "),
      };
    }

    const percent = answer.confidence === undefined ? undefined : formatProbability(answer.confidence, lang);
    return {
      kind: "Choice",
      value: choice,
      detail: percent === undefined ? "" : exampleLabels.confidence + " " + percent,
      choice: percent === undefined ? undefined : { label: choice, percent },
    };
  }

  const levels = Object.entries(answer.probabilities ?? {}).map(([id, probability]) => ({
    label: answer.legend?.[id] ?? id,
    probability,
    percent: formatProbability(probability, lang),
  }));
  const formatScore = (score: number) => formatPaperNumber(score, lang, { maximumFractionDigits: 2 });
  const choice = answer.choice ? nameOf(answer.choice) : "";
  if (levels.length === 0) {
    return {
      kind: "Score",
      value: [formatScore(answer.score), choice].filter(Boolean).join(" · "),
      detail: "",
      selectedLevel: choice || undefined,
    };
  }

  // On the support and fact-check rubrics, the JSON score is a zero-based expectation.
  // Use the human-facing labels as values to display a result on the stated scale.
  const total = levels.reduce((sum, level) => sum + level.probability, 0);
  const hasNumericScale = total > 0 && levels.every((level) => Number.isFinite(Number(level.label)));
  const score = hasNumericScale
    ? levels.reduce((sum, level) => sum + Number(level.label) * level.probability, 0) / total
    : answer.score;

  return {
    kind: "Score",
    value: formatScore(score),
    detail: choice,
    rubric: {
      maximum: hasNumericScale ? formatScore(Math.max(...levels.map(({ label }) => Number(label)))) : undefined,
      mean: score,
      levels,
    },
  };
}

export function getPaperDecisionExample(lang: Lang, id: PaperExampleId) {
  const example = getPaperDecision(lang).examples[id];
  return {
    ...example,
    sources: EXAMPLE_SOURCES[id] ?? [],
    calls: PAPER_DECISION_EXAMPLE_CALLS[lang][id].map((call) => {
      const response = parseResponse(call.rawJson);
      return {
        ...call,
        rows: Object.entries(example.questions).map(([key, question]) => ({
          id: key,
          question,
          ...describeAnswer(response.answers[key], lang),
        })),
      };
    }),
  };
}

export function getPaperDecisionExperiment(lang: Lang, id: PaperScaleId) {
  const { cases, modelOrigins } = getPaperDecision(lang).scale;
  const scenario = cases[id];
  const snapshot = PAPER_DECISION_SCALE_CALLS[id];
  const responses = snapshot.responses.map(parseResponse);

  return {
    label: scenario.label,
    situation: scenario.situation,
    takeaway: scenario.takeaway,
    evidenceNote: scenario.evidenceNote,
    state: snapshot.state,
    rows: Object.entries(scenario.questions).map(([key, question]) => ({
      id: key,
      question,
      answers: responses.map((response) => describeAnswer(response.answers[key], lang)),
    })),
    models: responses.map((response, index) => ({
      name: PAPER_DECISION_COMPARED_MODELS[index],
      origin: modelOrigins[index],
      rawJson: snapshot.responses[index],
      latencyMs: response.latency_ms,
      inputTokens: response.usage.input_tokens,
    })),
    localRoundTripMs: snapshot.localRoundTripMs,
  };
}

export function paperPriceTariffs(lang: Lang) {
  const { price } = getPaperDecision(lang);
  const rates = PAPER_DECISION_PRICES;
  const to = lang === "ru" ? " до " : " to ";
  return [
    {
      value: (lang === "ru" ? formatPaperNumber(rates.decisionInput, lang) : formatPaperUsd(rates.decisionInput, lang, 3)) +
        to + formatPaperUsd(rates.geminiInput, lang),
      label: price.decisionTariffLabel,
    },
    {
      value: formatPaperUsd(rates.haikuInput, lang) + " / " + formatPaperUsd(rates.haikuOutput, lang),
      label: price.haikuTariffLabel,
    },
  ];
}

export function paperArchivedTiming(lang: Lang) {
  const { archive } = getPaperDecision(lang).timing;
  const { jevMinMs, jevMaxMs, haikuFirstTokenMs } = PAPER_DECISION_ARCHIVED_TIMING;
  const to = lang === "ru" ? " до " : " to ";
  return [
    [archive.jev, formatPaperDuration(jevMinMs, lang) + to + formatPaperDuration(jevMaxMs, lang)],
    [archive.haiku, formatPaperDuration(haikuFirstTokenMs, lang)],
  ];
}
