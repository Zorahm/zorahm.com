import type { Lang } from "./types";

/**
 * The /paper/decision note about decision models.
 *
 * The page is a one-off article, so its words live next to its facts in one
 * file instead of being spread over types.ts, en.ts and ru.ts. The shape is
 * still the same for both languages, and content.test.ts checks that.
 *
 * Neither language uses long dashes: the author asked for plain punctuation.
 * A `backtick` span inside a paragraph is shown as code.
 */

/** Day the note was written, ISO, for the <time> attribute */
export const PAPER_DECISION_DATE = "2026-10-19";

/** A screenshot of the Artificial Analysis Decision Index, kept in public/ */
export type PaperImage = {
  src: string;
  width: number;
  height: number;
};

/** The same two screenshots in both languages: only the alt text is translated */
export const PAPER_DECISION_IMAGES: { before: PaperImage; after: PaperImage } = {
  before: {
    src: "/paper/decision/index-before.png",
    width: 1285,
    height: 642,
  },
  after: {
    src: "/paper/decision/index-after.png",
    width: 1298,
    height: 639,
  },
};

/**
 * Prices in dollars per million tokens, as listed in October 2026. Jev and
 * d1-ultra list the same $0.042 for input and bill no output. Haiku 5.5 is
 * $0.10 in and $0.50 out for prompts under 100K tokens (Artificial Analysis
 * model page, which quotes Anthropic's API).
 */
export const PAPER_DECISION_PRICES = {
  decisionInput: 0.042,
  haikuInput: 0.1,
  haikuOutput: 0.5,
  /**
   * How many tokens Haiku 5.5 on Low effort spends thinking before it
   * answers. An assumption, not a measurement: the page says so.
   */
  thinkingTokens: 300,
} as const;

/**
 * Calls the price comparison walks through. The ticket is OpenRouter's worked
 * example for Jev (447 input tokens, answers of up to 69 tokens). The other
 * token counts are estimates of a typical call and are labelled as such.
 * Both sides are charged for the same input, which favours the LLM: it also
 * needs its instructions and answer format in the prompt.
 */
export const PAPER_DECISION_PRICE_CALLS: {
  inputTokens: number;
  /** Tokens an LLM writes to give the same answers as JSON */
  answerTokens: number;
}[] = [
  { inputTokens: 447, answerTokens: 69 },
  { inputTokens: 900, answerTokens: 150 },
  { inputTokens: 120, answerTokens: 25 },
  { inputTokens: 1500, answerTokens: 40 },
];

/**
 * How long the answer takes. Jev's figure is TypeSafe's own, end to end for the
 * whole answer. Haiku 5.5 (Low) is Artificial Analysis's time to first token,
 * so the answer is still being written after it: the real gap is wider.
 */
export const PAPER_DECISION_SPEED = {
  decisionMs: { min: 70, max: 500 },
  haikuFirstTokenMs: 7370,
} as const;

/** Dollars for a million identical calls, on each side of the comparison */
export function priceOfMillionCalls(call: {
  inputTokens: number;
  answerTokens: number;
}) {
  const p = PAPER_DECISION_PRICES;
  // dollars per million tokens times tokens per call is dollars per million calls
  const decision = call.inputTokens * p.decisionInput;
  const haiku =
    call.inputTokens * p.haikuInput + call.answerTokens * p.haikuOutput;
  const haikuLow = haiku + p.thinkingTokens * p.haikuOutput;
  return { decision, haiku, haikuLow };
}

export type PaperSource = {
  label: string;
  href: string;
};

/** Pages the note leans on, all read in October 2026 */
export const PAPER_DECISION_SOURCES: PaperSource[] = [
  {
    label: "Artificial Analysis: Decision Index",
    href: "https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index",
  },
  {
    label: "Liquid AI docs: Decision Models",
    href: "https://docs.liquid.ai/lfm/models/decision-models",
  },
  {
    label: "Artificial Analysis: Claude Haiku 5.5 (Low)",
    href: "https://artificialanalysis.ai/models/claude-haiku-5-5-low",
  },
  {
    label: "OpenRouter: What is Jev?",
    href: "https://openrouter.ai/blog/insights/what-is-jev/",
  },
  {
    label: "BenchLM: What Is Jev? TypeSafe's Decision Model and Its Limits",
    href: "https://benchlm.ai/blog/posts/what-is-jev",
  },
  {
    label: "Crypto Briefing: Liquid AI's d1-ultra takes the top spot",
    href: "https://cryptobriefing.com/liquid-ai-d1-ultra-tops-decision-index/",
  },
];

export type PaperDecisionStrings = {
  title: string;
  description: string;
  eyebrow: string;
  /** Date above the heading, in words */
  date: string;
  heading: string;
  lead: string[];
  home: string;
  contentsLabel: string;
  /** Labels of the image viewer: the thumbnail button and the close button */
  viewImage: string;
  closeImage: string;

  whatLabel: string;
  what: string[];
  /** The question types: name as the models spell it, and what it does */
  questions: { name: string; text: string }[];
  illustrationLabel: string;
  illustrationNote: string;
  /** Switchable examples of a call: what the model reads, then one row per question */
  examples: {
    /** Name on the switch */
    tab: string;
    stateLabel: string;
    state: string;
    rows: { kind: string; question: string; answer: string }[];
  }[];
  whatAfter: string[];

  modelsLabel: string;
  models: string[];
  modelList: { name: string; text: string }[];
  modelsAfter: string;

  whyLabel: string;
  why: string[];
  numbers: { value: string; label: string }[];
  priceLabel: string;
  priceIntro: string;
  /** One entry per call in PAPER_DECISION_PRICE_CALLS: the name on the switch and what the call is */
  priceCalls: { tab: string; text: string }[];
  /** Words around the token counts of a call */
  priceTokens: { input: string; answer: string };
  priceUnit: string;
  priceRows: { decision: string; haiku: string; haikuLow: string };
  /** Said once under the bars: what each row assumes */
  priceNotes: string[];
  priceVerdict: string[];
  speedLabel: string;
  speedUnit: string;
  /** Row names and the figure each row shows, written the way the language writes it */
  speedRows: {
    decision: string;
    decisionValue: string;
    haiku: string;
    haikuValue: string;
  };
  /** Joins the two ends of the multiplier: "x15 to x105" */
  speedTo: string;
  speedNotes: string[];
  speedVerdict: string[];

  useLabel: string;
  useIntro: string;
  use: { mark: string; text: string[] }[];
  useMore: string;
  useWarning: string;

  indexLabel: string;
  index: string[];
  beforeLabel: string;
  beforeAlt: string;
  beforeCaption: string;
  before: string[];
  afterLabel: string;
  afterAlt: string;
  afterCaption: string;
  after: string[];
  indexVerdict: string[];

  limitsLabel: string;
  limits: { mark: string; text: string }[];

  sourcesLabel: string;
  disclaimer: string;
};

const en: PaperDecisionStrings = {
  title: "Decision models",
  description:
    "What decision models are (Jev, d1-ultra and the rest), what they are for, and how far they have caught up with ordinary LLMs on the Artificial Analysis Decision Index.",
  eyebrow: "Paper",
  date: "19 October 2026",
  heading: "Decision models",
  lead: [
    "A decision model does not write text. You give it a piece of text and a few questions, and it answers each one with a probability: which queue, how urgent, yes or no.",
    "Jev from TypeSafe started the class in September 2026, and in October d1-ultra from Liquid AI took the top of the Artificial Analysis index. This is a note on what these models are, where they are already used, and how far they have really caught up with ordinary LLMs.",
  ],
  home: "Home",
  contentsLabel: "Contents",
  viewImage: "Open the image full size",
  closeImage: "Close",

  whatLabel: "What it is",
  what: [
    "An ordinary LLM answers by writing: it produces one token after another until the answer is finished. Asking it to classify a text means asking it to write the word \"billing\" and hoping the word is one of the allowed ones.",
    "A decision model skips the writing. It reads the text together with typed questions and returns a probability for every option in a single pass. There is no prose and no reasoning to read, only the distribution. Jev, d1 and the other models of this kind are built around the same few question types:",
  ],
  questions: [
    {
      name: "Choice",
      text: "Pick one option from a list you wrote. Returns a probability for each option.",
    },
    {
      name: "Score",
      text: "Place the input on an ordered scale you describe, for example urgency from 1 to 5. Returns a position on that scale.",
    },
    {
      name: "Noul",
      text: "A yes or no question. Returns one number from 0 to 1. Noul is Jev's name for it, in d1 it is a plain yes/no question.",
    },
    {
      name: "Box",
      text: "Only in Jev 1.14 and only for images: returns a bounding box around the thing you asked for.",
    },
  ],
  illustrationLabel: "What a call looks like",
  illustrationNote:
    "An illustration with made-up numbers, not a real API response.",
  examples: [
    {
      tab: "Support ticket",
      stateLabel: "Text",
      state:
        "I was charged twice for the same order and nobody answers.",
      rows: [
        {
          kind: "Choice",
          question: "Which queue should take it?",
          answer: "billing 0.94, delivery 0.03, other 0.03",
        },
        {
          kind: "Score",
          question: "How urgent is it, from 1 to 5?",
          answer: "4.2",
        },
        {
          kind: "Noul",
          question: "Is the customer asking for a refund?",
          answer: "0.88",
        },
      ],
    },
    {
      tab: "Router",
      stateLabel: "Task",
      state:
        "Write a Python script that renames 200 photos by the date in their EXIF data.",
      rows: [
        {
          kind: "Choice",
          question: "How hard is the task?",
          answer: "easy 0.12, medium 0.71, hard 0.17",
        },
        {
          kind: "Noul",
          question: "Does it need to run code or use tools?",
          answer: "0.83",
        },
        {
          kind: "Noul",
          question: "Does it need the strongest model?",
          answer: "0.09",
        },
      ],
    },
    {
      tab: "Safe command",
      stateLabel: "Command",
      state:
        "curl https://example.com",
      rows: [
        {
          kind: "Noul",
          question: "Is it safe to run without asking?",
          answer: "0.99",
        },
        {
          kind: "Choice",
          question: "What does it touch?",
          answer: "network read 0.96, files 0.03, system 0.01",
        },
        {
          kind: "Noul",
          question: "Can it destroy data?",
          answer: "0.01",
        },
      ],
    },
    {
      tab: "Risky command",
      stateLabel: "Command",
      state:
        "rm -rf /",
      rows: [
        {
          kind: "Noul",
          question: "Is it safe to run without asking?",
          answer: "0.01",
        },
        {
          kind: "Choice",
          question: "What does it touch?",
          answer: "network read 0.00, files 0.30, system 0.70",
        },
        {
          kind: "Noul",
          question: "Can it destroy data?",
          answer: "0.99",
        },
      ],
    },
    {
      tab: "Fact check",
      stateLabel: "Draft and source",
      state:
        "Draft: \"The refund window is 60 days.\" Source: \"Refunds are possible within 30 days of delivery.\"",
      rows: [
        {
          kind: "Noul",
          question: "Does the source support the draft?",
          answer: "0.04",
        },
        {
          kind: "Choice",
          question: "What is wrong?",
          answer: "number 0.91, condition 0.06, nothing 0.03",
        },
        {
          kind: "Score",
          question: "How serious is the mismatch, from 1 to 5?",
          answer: "4.6",
        },
      ],
    },
  ],
  whatAfter: [
    "TypeSafe says the probabilities are calibrated: when the model says 0.8, it should be right about 80% of the time across many answers. That is the vendor's claim, and one independent write-up warns that confidence shows how concentrated an answer is, not whether it is correct.",
  ],

  modelsLabel: "Who makes them",
  models: [
    "The class is a few weeks old, so the list is short and changes fast. By \"Jev-style\" I mean any model of this kind: typed questions in, calibrated probabilities out, no generated text. These are the ones I could place:",
  ],
  modelList: [
    {
      name: "Jev",
      text: "TypeSafe. Released on 15 September 2026, and Jev 1.14 followed on 14 October with image input. Proprietary, no published weights.",
    },
    {
      name: "d1 and d1-ultra",
      text: "Liquid AI. d1-ultra (15 October 2026) is the strongest of the family and takes text and images. The family also has open-weight d1-3B (3.1B parameters) and d1-omni-600M (587M, can take short audio).",
    },
    {
      name: "The rest of the index",
      text: "Microsoft-Decision-1, Decider v1.1 27B from Perplexity, Mercury Decide from Inception, Celeris-1 Decision, GLIDE from Fastino, Clef and Clef-Omni from Cloudflare, and GPT-6 Luna (Decisions) from OpenAI.",
    },
  ],
  modelsAfter:
    "Most of them are hosted and closed. Only the small d1 models publish their weights.",

  whyLabel: "What they are for",
  why: [
    "For classifying text. That is the whole job, and a lot of software is made of it: where this message goes, whether this request is allowed, whether this answer follows from its source.",
    "An LLM can do it, but it pays for things the job does not need: it generates tokens, which costs time and money, and it is a model big enough to write essays. A decision model only reads. Its answer is a few dozen tokens, and the hosted ones do not bill output at all.",
    "They are also small. d1-omni-600M has 587M parameters, d1-3B has 3.1B, and Decider v1.1 27B is the largest I found with a public size.",
  ],
  numbers: [
    {
      value: "$0.042",
      label:
        "per million input tokens, output free. The listed price of Jev and of d1-ultra.",
    },
    {
      value: "$0.10 and $0.50",
      label:
        "per million input and output tokens of Claude Haiku 5.5, for prompts under 100K tokens.",
    },
  ],
  priceLabel: "A million calls, priced",
  priceIntro:
    "Cheaper than an LLM is easy to say, so here are four calls priced both ways: a decision model at $0.042 per million input tokens, and Claude Haiku 5.5, the cheap LLM, at $0.10 in and $0.50 out. Pick a call to see the bill for a million of them.",
  priceCalls: [
    {
      tab: "Support ticket",
      text: "Route a ticket: queue, urgency, refund. OpenRouter's worked example for Jev.",
    },
    {
      tab: "Router",
      text: "Pick a model for a job: 14 choice questions and 5 yes or no questions.",
    },
    {
      tab: "Command check",
      text: "Is this shell command safe to run without asking?",
    },
    {
      tab: "Fact check",
      text: "Does a draft follow from its source? A long input, a short answer.",
    },
  ],
  priceTokens: { input: "input tokens", answer: "answer tokens" },
  priceUnit: "per million calls",
  priceRows: {
    decision: "Decision model",
    haiku: "Claude Haiku 5.5, answer only",
    haikuLow: "Claude Haiku 5.5 (Low), with thinking",
  },
  priceNotes: [
    "Both sides are charged for the same input, which favours the LLM: it also needs its instructions and answer format in the prompt. Only the ticket's token counts are sourced, the other three are my estimates of a typical call.",
    "The last row adds 300 tokens of thinking before the answer. That number is my assumption, not a measurement: Low effort still thinks, and how much depends on the task.",
    "One more caveat: Liquid's docs say d1 bills every question as its own prompt, so for d1 the first row can come out several times higher. Jev's price is per call, which is what the ticket example uses.",
  ],
  priceVerdict: [
    "Against Haiku the gap is real but modest: about 3 to 5 times with a bare answer, and 5 to 20 times once the LLM thinks. TypeSafe's \"one two-hundredth of the cost\" is measured against frontier models, and Haiku 5.5 is already a cheap one.",
  ],
  speedLabel: "Waiting for the answer",
  speedUnit: "one call",
  speedRows: {
    decision: "Decision model (Jev)",
    decisionValue: "70 to 500 ms",
    haiku: "Claude Haiku 5.5 (Low), first token",
    haikuValue: "7.37 s",
  },
  speedTo: " to ",
  speedNotes: [
    "The two bars are not measured the same way. Jev's is the whole answer, end to end, and comes from TypeSafe. Haiku's is only the time until its first token, from Artificial Analysis. The answer is still being written after that, so the real gap is wider than the bars show.",
  ],
  speedVerdict: [
    "The bigger gap is in time. The cost of a million calls is a line in a budget, but a 7 second wait before the first token does not fit in a request path, and half a second does.",
  ],

  useLabel: "Where they are used",
  useIntro: "Two examples that show the idea well.",
  use: [
    {
      mark: "Model router",
      text: [
        "A request comes in and someone has to decide who gets it: the strong and expensive model or the weak and cheap one. A decision model reads the task and answers questions such as how hard it is and whether it needs code or tools. Plain code turns the answers into a choice.",
        "Every request that goes to the cheap model saves tokens, and the router itself costs almost nothing. BenchLM describes the same pattern for Jev: one call with 14 choice questions and 5 yes or no questions about a job, and code builds a shortlist of models from the answers.",
      ],
    },
    {
      mark: "Auto mode in coding agents",
      text: [
        "An agent wants to run a command, and asking the person every single time gets tiring. A decision model answers one question: is this safe?",
        "`curl https://example.com` gets a yes, and the interface confirms it without bothering anyone. `rm -rf /` gets a no, and then the agent either blocks it or shows it to the person, depending on the agent.",
      ],
    },
  ],
  useMore:
    "Smaller jobs on the same pattern: ticket triage, content moderation, checking that an LLM draft is grounded in its source, ranking candidates.",
  useWarning:
    "One warning from the write-ups: hostile text inside the input can push a decision model toward an allowed but harmful answer. In auto mode that matters, so the permission itself should be enforced in code and the model's answer should be only one input to it.",

  indexLabel: "Decision models against LLMs",
  index: [
    "Artificial Analysis publishes a Decision Index that scores decision models and ordinary LLMs on the same four tests, 25% each: AA-Omniscience-Decision (knowledge and hallucination), HLE-MultiChoice (reasoning), When2Call (tool calling) and WildGuardTest (safety classification). LLMs are included for comparison and drawn hatched on the charts.",
    "Both screenshots below are my own selections from the 28 models on the index, taken before and after d1-ultra came out.",
  ],
  beforeLabel: "Before d1-ultra",
  beforeAlt:
    "Bar chart of the Artificial Analysis Decision Index for 12 of 28 models. Claude Haiku 5.5 (Low) scores 61, Jev 1.13 58, GPT-6 Luna (Low) 55, GLIDE 54, Microsoft-Decision-1 54, Decider v1.1 27B 53, Mercury Decide 53, Celeris-1 Decision 52, d1 50, Clef 49, GPT-6 Luna (Decisions) 48, Clef-Omni 44.",
  beforeCaption:
    "Decision Index, 12 of 28 models. Screenshot from Artificial Analysis.",
  before: [
    "The best decision model here is Jev 1.13 with 58, in second place. The bars on both sides of it are LLMs: Claude Haiku 5.5 (Low) with 61 above and GPT-6 Luna (Low) with 55 below. After Jev come GLIDE and Microsoft-Decision-1 at 54, and the rest go down to Clef-Omni at 44. d1 is at 50.",
    "So a small LLM on low effort still beat every specialised model, by 3 points. Jev came close, but the decision models argued with price and speed, not with the quality of the answers.",
  ],
  afterLabel: "After d1-ultra",
  afterAlt:
    "Bar chart of the Artificial Analysis Decision Index for 15 of 28 models. Claude Opus 5.5 (Max) scores 79, Claude Opus 5.5 (Low) 75, Claude Haiku 5.5 (Max) 68, d1-ultra 65, Claude Haiku 5.5 (Low) 61, GPT-6 Luna (Low) 55, then the same decision models as before from GLIDE at 54 down to Clef-Omni at 44.",
  afterCaption:
    "Decision Index, 15 of 28 models, with more LLMs added. Screenshot from Artificial Analysis.",
  after: [
    "d1-ultra scores 65. That is 7 points above Jev 1.13, the best decision model of the first shot. Jev had already passed GPT-6 Luna (Low) at 55, but d1-ultra is the first decision model on these charts to pass Claude Haiku 5.5 (Low) at 61, the top bar of the first shot.",
    "I added more LLMs to this shot on purpose, and they stay ahead: Claude Haiku 5.5 on Max effort at 68, Claude Opus 5.5 at 75 and 79.",
  ],
  indexVerdict: [
    "The honest reading: decision models closed the gap to small LLMs, not to frontier ones. A frontier LLM still answers better. The case for a decision model is that on a task that is only classification, 65 at $0.042 per million tokens may be enough, and the Opus bar costs and waits far more.",
    "Two caveats. The index went public on 13 October, so every number here is a few days old. And d1-ultra reportedly trades some raw accuracy for fewer hallucinations, which is part of how it reaches 65. The newer Jev 1.14 is not in my selection, and coverage of the d1-ultra release gives it 57.",
  ],

  limitsLabel: "Limits",
  limits: [
    {
      mark: "They only choose",
      text: "No text, no tool calls, no multi-step plans. If the answer is a reply or a piece of code, use an LLM.",
    },
    {
      mark: "They read literally",
      text: "Implied context is ignored, so the criteria have to be written out in full.",
    },
    {
      mark: "Weak at exact maths",
      text: "Arithmetic and date comparisons are unreliable. Compute those in code.",
    },
    {
      mark: "Confidence is not correctness",
      text: "A 0.8 tells you how concentrated the answer is. Set thresholds from your own labelled data.",
    },
    {
      mark: "Closed",
      text: "Jev and d1-ultra are hosted only, with no published weights, so you depend on the vendor's price and uptime.",
    },
  ],

  sourcesLabel: "Sources",
  disclaimer:
    "The scores on the charts are Artificial Analysis's. The price and speed figures are the vendors' own, and Liquid AI's claims about d1-ultra are its own too.",
};

const ru: PaperDecisionStrings = {
  title: "Decision-модели",
  description:
    "Что такое Decision-модели (Jev, d1-ultra и другие), зачем они нужны и насколько они уже догнали обычные LLM в индексе Decision Index от Artificial Analysis.",
  eyebrow: "Статья",
  date: "19 октября 2026",
  heading: "Decision-модели",
  lead: [
    "Decision-модель не пишет текст. Ей дают кусок текста и несколько вопросов, а она на каждый отвечает вероятностью: в какую очередь, насколько срочно, да или нет.",
    "В сентябре 2026 года этот класс начал Jev от TypeSafe, а в октябре d1-ultra от Liquid AI возглавил индекс Artificial Analysis. Здесь коротко о том, что это за модели, где их уже применяют и насколько они действительно догнали обычные LLM.",
  ],
  home: "Главная",
  contentsLabel: "Содержание",
  viewImage: "Открыть изображение в полном размере",
  closeImage: "Закрыть",

  whatLabel: "Что это",
  what: [
    "Обычная LLM отвечает, дописывая текст: токен за токеном, пока ответ не закончится. Попросить её классифицировать текст значит попросить написать слово «billing» и надеяться, что это слово окажется одним из допустимых.",
    "Decision-модель ничего не пишет. Она читает текст вместе с типизированными вопросами и за один проход возвращает вероятность для каждого варианта. Нет ни прозы, ни рассуждений, только распределение. Jev, d1 и другие модели этого класса строятся вокруг нескольких одинаковых типов вопросов:",
  ],
  questions: [
    {
      name: "Choice",
      text: "Выбрать один вариант из списка, который написали вы. Возвращает вероятность для каждого варианта.",
    },
    {
      name: "Score",
      text: "Поставить вход на упорядоченную шкалу, которую вы описали, например срочность от 1 до 5. Возвращает положение на шкале.",
    },
    {
      name: "Noul",
      text: "Вопрос с ответом да или нет. Возвращает одно число от 0 до 1. Noul так называет его Jev, в d1 это обычный yes/no вопрос.",
    },
    {
      name: "Box",
      text: "Только в Jev 1.14 и только для изображений: возвращает рамку вокруг того, что попросили найти.",
    },
  ],
  illustrationLabel: "Как выглядит вызов",
  illustrationNote:
    "Иллюстрация с выдуманными числами, а не настоящий ответ API.",
  examples: [
    {
      tab: "Тикет",
      stateLabel: "Текст",
      state:
        "С меня дважды списали деньги за один заказ, и никто не отвечает.",
      rows: [
        {
          kind: "Choice",
          question: "В какую очередь отправить?",
          answer: "billing 0.94, delivery 0.03, other 0.03",
        },
        {
          kind: "Score",
          question: "Насколько срочно, от 1 до 5?",
          answer: "4.2",
        },
        {
          kind: "Noul",
          question: "Клиент просит вернуть деньги?",
          answer: "0.88",
        },
      ],
    },
    {
      tab: "Роутер",
      stateLabel: "Задача",
      state:
        "Напиши скрипт на Python, который переименует 200 фотографий по дате из EXIF.",
      rows: [
        {
          kind: "Choice",
          question: "Насколько сложная задача?",
          answer: "easy 0.12, medium 0.71, hard 0.17",
        },
        {
          kind: "Noul",
          question: "Нужно ли запускать код или использовать инструменты?",
          answer: "0.83",
        },
        {
          kind: "Noul",
          question: "Нужна ли самая сильная модель?",
          answer: "0.09",
        },
      ],
    },
    {
      tab: "Безопасная команда",
      stateLabel: "Команда",
      state:
        "curl https://example.com",
      rows: [
        {
          kind: "Noul",
          question: "Можно выполнять без вопросов?",
          answer: "0.99",
        },
        {
          kind: "Choice",
          question: "Чего она касается?",
          answer: "network read 0.96, files 0.03, system 0.01",
        },
        {
          kind: "Noul",
          question: "Может ли она уничтожить данные?",
          answer: "0.01",
        },
      ],
    },
    {
      tab: "Опасная команда",
      stateLabel: "Команда",
      state:
        "rm -rf /",
      rows: [
        {
          kind: "Noul",
          question: "Можно выполнять без вопросов?",
          answer: "0.01",
        },
        {
          kind: "Choice",
          question: "Чего она касается?",
          answer: "network read 0.00, files 0.30, system 0.70",
        },
        {
          kind: "Noul",
          question: "Может ли она уничтожить данные?",
          answer: "0.99",
        },
      ],
    },
    {
      tab: "Проверка фактов",
      stateLabel: "Черновик и источник",
      state:
        "Черновик: «Возврат возможен в течение 60 дней». Источник: «Возврат возможен в течение 30 дней после доставки».",
      rows: [
        {
          kind: "Noul",
          question: "Подтверждает ли источник черновик?",
          answer: "0.04",
        },
        {
          kind: "Choice",
          question: "Что не так?",
          answer: "number 0.91, condition 0.06, nothing 0.03",
        },
        {
          kind: "Score",
          question: "Насколько серьёзно расхождение, от 1 до 5?",
          answer: "4.6",
        },
      ],
    },
  ],
  whatAfter: [
    "TypeSafe утверждает, что вероятности откалиброваны: когда модель говорит 0.8, она должна оказываться права примерно в 80% таких ответов. Это слова вендора, а в одном независимом разборе предупреждают, что уверенность показывает, насколько ответ сосредоточен, а не верен ли он.",
  ],

  modelsLabel: "Кто их делает",
  models: [
    "Классу всего несколько недель, поэтому список короткий и быстро меняется. Под «Jev-style» я понимаю любую такую модель: на входе типизированные вопросы, на выходе откалиброванные вероятности, никакого сгенерированного текста. Вот те, что мне удалось найти:",
  ],
  modelList: [
    {
      name: "Jev",
      text: "TypeSafe. Вышел 15 сентября 2026 года, а 14 октября появился Jev 1.14 с поддержкой изображений. Закрытая модель, веса не опубликованы.",
    },
    {
      name: "d1 и d1-ultra",
      text: "Liquid AI. d1-ultra (15 октября 2026) самая сильная в семействе, принимает текст и изображения. Есть и открытые модели: d1-3B (3.1B параметров) и d1-omni-600M (587M, понимает короткое аудио).",
    },
    {
      name: "Остальные из индекса",
      text: "Microsoft-Decision-1, Decider v1.1 27B от Perplexity, Mercury Decide от Inception, Celeris-1 Decision, GLIDE от Fastino, Clef и Clef-Omni от Cloudflare, GPT-6 Luna (Decisions) от OpenAI.",
    },
  ],
  modelsAfter:
    "Большинство из них хостятся и закрыты. Веса публикуют только маленькие модели d1.",

  whyLabel: "Зачем они нужны",
  why: [
    "Для классификации текста. Это вся их работа, и из неё состоит много софта: куда отправить сообщение, разрешён ли запрос, следует ли ответ из источника.",
    "LLM тоже справится, но платит за то, что задаче не нужно: она генерирует токены, а это время и деньги, и сама она достаточно велика, чтобы писать эссе. Decision-модель только читает. Её ответ занимает несколько десятков токенов, а хостинговые версии выходные токены вообще не тарифицируют.",
    "Они ещё и маленькие. У d1-omni-600M 587M параметров, у d1-3B 3.1B, а Decider v1.1 27B самая большая из тех, чей размер я нашёл.",
  ],
  numbers: [
    {
      value: "$0.042",
      label:
        "за миллион входных токенов, выход бесплатный. Заявленная цена Jev и d1-ultra.",
    },
    {
      value: "$0.10 и $0.50",
      label:
        "за миллион входных и выходных токенов Claude Haiku 5.5, для промптов до 100K токенов.",
    },
  ],
  priceLabel: "Миллион вызовов в деньгах",
  priceIntro:
    "Сказать «дешевле LLM» легко, поэтому вот четыре вызова, посчитанные обоими способами: Decision-модель по $0.042 за миллион входных токенов и Claude Haiku 5.5, дешёвая LLM, по $0.10 за вход и $0.50 за выход. Выберите вызов, чтобы увидеть счёт за миллион таких.",
  priceCalls: [
    {
      tab: "Тикет",
      text: "Разобрать тикет: очередь, срочность, возврат. Пример расчёта OpenRouter для Jev.",
    },
    {
      tab: "Роутер",
      text: "Выбрать модель для задачи: 14 вопросов Choice и 5 вопросов да или нет.",
    },
    {
      tab: "Проверка команды",
      text: "Безопасно ли выполнять эту команду без вопросов?",
    },
    {
      tab: "Проверка фактов",
      text: "Следует ли черновик из источника? Длинный вход, короткий ответ.",
    },
  ],
  priceTokens: { input: "входных токенов", answer: "токенов ответа" },
  priceUnit: "за миллион вызовов",
  priceRows: {
    decision: "Decision-модель",
    haiku: "Claude Haiku 5.5, только ответ",
    haikuLow: "Claude Haiku 5.5 (Low), с размышлением",
  },
  priceNotes: [
    "Обе стороны платят за один и тот же вход, и это в пользу LLM: ей в промпт нужно ещё положить инструкции и формат ответа. Источником подтверждены только токены тикета, остальные три вызова это мои прикидки типичного запроса.",
    "Последняя строка добавляет 300 токенов размышления перед ответом. Это моё допущение, а не измерение: Low effort всё равно думает, и сколько именно, зависит от задачи.",
    "И ещё одна оговорка: по документации Liquid, d1 тарифицирует каждый вопрос как отдельный промпт, так что для d1 первая строка может выйти в несколько раз выше. Цена Jev считается за вызов, как и в примере с тикетом.",
  ],
  priceVerdict: [
    "Против Haiku разрыв настоящий, но скромный: примерно от 3 до 5 раз на голом ответе и от 5 до 20 раз, когда LLM думает. «Одна двухсотая стоимости» у TypeSafe считается против флагманских моделей, а Haiku 5.5 уже дешёвая.",
  ],
  speedLabel: "Ожидание ответа",
  speedUnit: "один вызов",
  speedRows: {
    decision: "Decision-модель (Jev)",
    decisionValue: "от 70 до 500 мс",
    haiku: "Claude Haiku 5.5 (Low), первый токен",
    haikuValue: "7.37 с",
  },
  speedTo: " до ",
  speedNotes: [
    "Два столбца измерены по-разному. У Jev это весь ответ целиком, от запроса до результата, цифра от TypeSafe. У Haiku это только время до первого токена, данные Artificial Analysis. Ответ после этого ещё дописывается, так что настоящий разрыв больше, чем показывают столбцы.",
  ],
  speedVerdict: [
    "Больший разрыв во времени. Стоимость миллиона вызовов это строчка в бюджете, а семь секунд до первого токена в путь запроса не помещаются, в отличие от полусекунды.",
  ],

  useLabel: "Где их применяют",
  useIntro: "Два примера, на которых идея видна лучше всего.",
  use: [
    {
      mark: "Роутер моделей",
      text: [
        "Приходит запрос, и надо решить, кому его отдать: сильной дорогой модели или слабой дешёвой. Decision-модель читает задачу и отвечает на вопросы вроде того, насколько она сложная и нужны ли код или инструменты. Обычный код превращает ответы в выбор.",
        "Каждый запрос, ушедший к дешёвой модели, экономит токены, а сам роутер почти ничего не стоит. BenchLM описывает тот же приём для Jev: один вызов с 14 вопросами Choice и 5 вопросами да или нет про задачу, и код собирает по ответам список подходящих моделей.",
      ],
    },
    {
      mark: "Auto-mode в кодинг-агентах",
      text: [
        "Агент хочет выполнить команду, а спрашивать человека каждый раз утомительно. Decision-модель отвечает на один вопрос: это безопасно?",
        "`curl https://example.com` получает «да», и интерфейс подтверждает команду, не беспокоя пользователя. `rm -rf /` получает «нет», и тогда агент либо запрещает команду, либо показывает её пользователю, в зависимости от агента.",
      ],
    },
  ],
  useMore:
    "Задачи поменьше на том же приёме: сортировка тикетов, модерация контента, проверка, что черновик LLM опирается на источник, ранжирование кандидатов.",
  useWarning:
    "Одно предупреждение из разборов: враждебный текст во входе может подтолкнуть Decision-модель к допустимому, но вредному ответу. В auto-mode это важно, поэтому само разрешение должно проверяться кодом, а ответ модели быть лишь одним из его входов.",

  indexLabel: "Decision-модели против LLM",
  index: [
    "Artificial Analysis публикует Decision Index, где Decision-модели и обычные LLM оцениваются одними и теми же четырьмя тестами по 25%: AA-Omniscience-Decision (знания и галлюцинации), HLE-MultiChoice (рассуждение), When2Call (вызов инструментов) и WildGuardTest (классификация безопасности). LLM добавлены для сравнения и нарисованы на графиках штриховкой.",
    "Оба скриншота ниже я собрал сам из 28 моделей индекса: до выхода d1-ultra и после.",
  ],
  beforeLabel: "До d1-ultra",
  beforeAlt:
    "Столбчатая диаграмма Artificial Analysis Decision Index для 12 из 28 моделей. Claude Haiku 5.5 (Low) набирает 61, Jev 1.13 58, GPT-6 Luna (Low) 55, GLIDE 54, Microsoft-Decision-1 54, Decider v1.1 27B 53, Mercury Decide 53, Celeris-1 Decision 52, d1 50, Clef 49, GPT-6 Luna (Decisions) 48, Clef-Omni 44.",
  beforeCaption:
    "Decision Index, 12 из 28 моделей. Скриншот с Artificial Analysis.",
  before: [
    "Лучшая Decision-модель здесь Jev 1.13 с 58, на втором месте. По обе стороны от неё стоят LLM: Claude Haiku 5.5 (Low) с 61 выше и GPT-6 Luna (Low) с 55 ниже. После Jev идут GLIDE и Microsoft-Decision-1 с 54, остальные спускаются до Clef-Omni с 44. У d1 50.",
    "То есть небольшая LLM на низком effort всё равно обгоняла любую специализированную модель, на 3 балла. Jev подобрался близко, но Decision-модели брали ценой и скоростью, а не качеством ответов.",
  ],
  afterLabel: "После d1-ultra",
  afterAlt:
    "Столбчатая диаграмма Artificial Analysis Decision Index для 15 из 28 моделей. Claude Opus 5.5 (Max) набирает 79, Claude Opus 5.5 (Low) 75, Claude Haiku 5.5 (Max) 68, d1-ultra 65, Claude Haiku 5.5 (Low) 61, GPT-6 Luna (Low) 55, дальше те же Decision-модели, что и раньше, от GLIDE с 54 до Clef-Omni с 44.",
  afterCaption:
    "Decision Index, 15 из 28 моделей, с добавленными LLM. Скриншот с Artificial Analysis.",
  after: [
    "У d1-ultra 65. Это на 7 баллов выше Jev 1.13, лучшей Decision-модели с первого скриншота. Jev уже обошёл GPT-6 Luna (Low) с 55, но d1-ultra первая Decision-модель на этих графиках, которая обошла Claude Haiku 5.5 (Low) с 61, верхний столбец первого скриншота.",
    "На этом скриншоте я нарочно добавил больше LLM, и они остаются впереди: Claude Haiku 5.5 на Max effort с 68, Claude Opus 5.5 с 75 и 79.",
  ],
  indexVerdict: [
    "Честный вывод: Decision-модели сократили отрыв от небольших LLM, но не от флагманских. Флагманская LLM всё ещё отвечает лучше. Довод в пользу Decision-модели такой: если задача сводится к классификации, 65 баллов за $0.042 за миллион токенов может хватить, а столбец Opus стоит и ждёт гораздо больше.",
    "Две оговорки. Индекс стал публичным 13 октября, так что все числа здесь возрастом в несколько дней. И d1-ultra, по сообщениям, отдаёт часть чистой точности ради меньшего числа галлюцинаций, и отчасти поэтому набирает 65. Более новой версии Jev 1.14 в моей выборке нет, а в материалах о выходе d1-ultra ей дают 57.",
  ],

  limitsLabel: "Ограничения",
  limits: [
    {
      mark: "Они только выбирают",
      text: "Нет текста, вызовов инструментов и многошаговых планов. Если ответ это реплика или кусок кода, нужна LLM.",
    },
    {
      mark: "Читают буквально",
      text: "Подразумеваемый контекст они пропускают, поэтому критерии надо расписывать целиком.",
    },
    {
      mark: "Слабы в точной математике",
      text: "Арифметика и сравнение дат ненадёжны. Считайте их в коде.",
    },
    {
      mark: "Уверенность не равна верности",
      text: "0.8 говорит лишь о том, насколько ответ сосредоточен. Пороги подбирайте по собственной размеченной выборке.",
    },
    {
      mark: "Закрытые",
      text: "Jev и d1-ultra только хостятся, веса не опубликованы, поэтому вы зависите от цены и аптайма вендора.",
    },
  ],

  sourcesLabel: "Источники",
  disclaimer:
    "Баллы на графиках принадлежат Artificial Analysis. Цены и скорости это цифры самих вендоров, и заявления Liquid AI о d1-ultra тоже её собственные.",
};

const STRINGS: Record<Lang, PaperDecisionStrings> = { en, ru };

export const getPaperDecision = (lang: Lang): PaperDecisionStrings =>
  STRINGS[lang];
