import type { Lang } from "./types";

export type PaperExampleId = "ticket" | "router" | "commands" | "factCheck";
export type PaperScaleId = "refund" | "readOnly" | "destructive" | "ci" | "password";

export type PaperCallSnapshot = { state: string; rawJson: string };
export type PaperScaleSnapshot = {
  state: string;
  localRoundTripMs: number;
  responses: readonly [string, string];
};

// Saved outputs from the local System One endpoint. Inputs are language-specific.
export const PAPER_DECISION_EXAMPLE_CALLS: Record<
  Lang,
  Record<PaperExampleId, readonly PaperCallSnapshot[]>
> = {
  en: {
    router: [
      {
        state: "Write a Python script that renames 200 photos by the date in their EXIF data.",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "difficulty": {
      "type": "choice",
      "choice": "medium",
      "confidence": 0.2815,
      "probabilities": {
        "easy": 0.0374,
        "medium": 0.521,
        "hard": 0.4416
      }
    },
    "tools": {
      "type": "noul",
      "noul": 0.7389
    },
    "strongest": {
      "type": "noul",
      "noul": 0.2118
    }
  },
  "usage": {
    "input_tokens": 153,
    "state_tokens": 25,
    "output_tokens": 0
  },
  "latency_ms": 357.3,
  "backend": "gguf"
}`,
      },
    ],
    commands: [
      {
        state: "curl https://example.com",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "safe": {
      "type": "noul",
      "noul": 0.711
    },
    "touches": {
      "type": "choice",
      "choice": "network read",
      "confidence": 0.9948,
      "probabilities": {
        "network read": 0.9966,
        "files": 0.0017,
        "system": 0.0018
      }
    },
    "destroy": {
      "type": "noul",
      "noul": 0.179
    }
  },
  "usage": {
    "input_tokens": 140,
    "state_tokens": 9,
    "output_tokens": 0
  },
  "latency_ms": 312.8,
  "backend": "gguf"
}`,
      },
      {
        state: "rm -rf /",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "safe": {
      "type": "noul",
      "noul": 0.1528
    },
    "touches": {
      "type": "choice",
      "choice": "system",
      "confidence": 0.9679,
      "probabilities": {
        "network read": 0.0019,
        "files": 0.0195,
        "system": 0.9786
      }
    },
    "destroy": {
      "type": "noul",
      "noul": 0.9551
    }
  },
  "usage": {
    "input_tokens": 128,
    "state_tokens": 8,
    "output_tokens": 0
  },
  "latency_ms": 264.0,
  "backend": "gguf"
}`,
      },
    ],
    ticket: [
      {
        state: "I was charged twice for the same order and nobody answers.",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "queue": {
      "type": "choice",
      "choice": "billing",
      "confidence": 0.9604,
      "probabilities": {
        "billing": 0.9736,
        "delivery": 0.0033,
        "other": 0.023
      }
    },
    "urgency": {
      "type": "score",
      "score": 3.7978,
      "confidence": 0.8315,
      "legend": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5"
      },
      "probabilities": {
        "0": 0.001,
        "1": 0.0117,
        "2": 0.0336,
        "3": 0.096,
        "4": 0.8578
      }
    },
    "refund": {
      "type": "noul",
      "noul": 0.8179
    }
  },
  "usage": {
    "input_tokens": 175,
    "state_tokens": 16,
    "output_tokens": 0
  },
  "latency_ms": 342.3,
  "backend": "gguf"
}`,
      },
    ],
    factCheck: [
      {
        state: "Draft: \"The refund window is 60 days.\" Source: \"Refunds are possible within 30 days of delivery.\"",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "support": {
      "type": "noul",
      "noul": 0.0379
    },
    "wrong": {
      "type": "choice",
      "choice": "number",
      "confidence": 0.9385,
      "probabilities": {
        "number": 0.959,
        "condition": 0.0333,
        "nothing": 0.0077
      }
    },
    "severity": {
      "type": "score",
      "score": 2.2836,
      "confidence": 0.3124,
      "legend": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5"
      },
      "probabilities": {
        "0": 0.0327,
        "1": 0.2054,
        "2": 0.4096,
        "3": 0.1502,
        "4": 0.2021
      }
    }
  },
  "usage": {
    "input_tokens": 188,
    "state_tokens": 31,
    "output_tokens": 0
  },
  "latency_ms": 358.4,
  "backend": "gguf"
}`,
      },
    ],
  },
  ru: {
    router: [
      {
        state: "Напиши скрипт на Python, который переименует 200 фотографий по дате из EXIF.",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "difficulty": {
      "type": "choice",
      "choice": "medium",
      "confidence": 0.3495,
      "probabilities": {
        "easy": 0.0792,
        "medium": 0.5663,
        "hard": 0.3545
      }
    },
    "tools": {
      "type": "noul",
      "noul": 0.5371
    },
    "strongest": {
      "type": "noul",
      "noul": 0.1919
    }
  },
  "usage": {
    "input_tokens": 160,
    "state_tokens": 29,
    "output_tokens": 0
  },
  "latency_ms": 319.5,
  "backend": "gguf"
}`,
      },
    ],
    commands: [
      {
        state: "curl https://example.com",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "safe": {
      "type": "noul",
      "noul": 0.8711
    },
    "touches": {
      "type": "choice",
      "choice": "network read",
      "confidence": 0.9951,
      "probabilities": {
        "network read": 0.9968,
        "files": 0.0016,
        "system": 0.0017
      }
    },
    "destroy": {
      "type": "noul",
      "noul": 0.1595
    }
  },
  "usage": {
    "input_tokens": 133,
    "state_tokens": 9,
    "output_tokens": 0
  },
  "latency_ms": 239.4,
  "backend": "gguf"
}`,
      },
      {
        state: "rm -rf /",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "safe": {
      "type": "noul",
      "noul": 0.364
    },
    "touches": {
      "type": "choice",
      "choice": "system",
      "confidence": 0.9532,
      "probabilities": {
        "network read": 0.0017,
        "files": 0.0295,
        "system": 0.9688
      }
    },
    "destroy": {
      "type": "noul",
      "noul": 0.9345
    }
  },
  "usage": {
    "input_tokens": 126,
    "state_tokens": 8,
    "output_tokens": 0
  },
  "latency_ms": 225.4,
  "backend": "gguf"
}`,
      },
    ],
    ticket: [
      {
        state: "С меня дважды списали деньги за один заказ, и никто не отвечает.",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "queue": {
      "type": "choice",
      "choice": "billing",
      "confidence": 0.9669,
      "probabilities": {
        "billing": 0.9779,
        "delivery": 0.0041,
        "other": 0.018
      }
    },
    "urgency": {
      "type": "score",
      "score": 3.1586,
      "confidence": 0.2989,
      "legend": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5"
      },
      "probabilities": {
        "0": 0.0084,
        "1": 0.0812,
        "2": 0.171,
        "3": 0.2222,
        "4": 0.5172
      }
    },
    "refund": {
      "type": "noul",
      "noul": 0.5043
    }
  },
  "usage": {
    "input_tokens": 179,
    "state_tokens": 19,
    "output_tokens": 0
  },
  "latency_ms": 364.3,
  "backend": "gguf"
}`,
      },
    ],
    factCheck: [
      {
        state: "Черновик: «Возврат возможен в течение 60 дней». Источник: «Возврат возможен в течение 30 дней после доставки».",
        rawJson: `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "support": {
      "type": "noul",
      "noul": 0.0605
    },
    "wrong": {
      "type": "choice",
      "choice": "number",
      "confidence": 0.9302,
      "probabilities": {
        "number": 0.9534,
        "condition": 0.0375,
        "nothing": 0.0091
      }
    },
    "severity": {
      "type": "score",
      "score": 2.1139,
      "confidence": 0.831,
      "legend": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5"
      },
      "probabilities": {
        "0": 0.0028,
        "1": 0.0388,
        "2": 0.8475,
        "3": 0.0633,
        "4": 0.0475
      }
    }
  },
  "usage": {
    "input_tokens": 196,
    "state_tokens": 38,
    "output_tokens": 0
  },
  "latency_ms": 377.2,
  "backend": "gguf"
}`,
      },
    ],
  },
};

// Both localisations show these same English inputs and saved response excerpts.
export const PAPER_DECISION_SCALE_CALLS: Record<PaperScaleId, PaperScaleSnapshot> = {
  refund: {
    state: "I was charged twice this month for my subscription, please refund one of them.",
    localRoundTripMs: 459,
    responses: [
      `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "refund": { "type": "noul", "noul": 0.9809 },
    "team": { "type": "choice", "choice": "billing", "confidence": 0.9979 },
    "urgency": { "type": "score", "score": 1.0842, "choice": "Today" }
  },
  "latency_ms": 171.0,
  "usage": { "input_tokens": 166, "output_tokens": 0 }
}`,
      `{
  "model": "perplexity/pplx-decider-v1.3",
  "answers": {
    "refund": { "type": "noul", "noul": 0.998 },
    "team": { "type": "choice", "choice": "billing", "confidence": 0.9958 },
    "urgency": { "type": "score", "score": 0.8416, "choice": "Today" }
  },
  "latency_ms": 886.6,
  "usage": { "input_tokens": 171, "output_tokens": 0 }
}`,
    ],
  },
  readOnly: {
    state: "curl -s https://api.example.com/v1/health | jq .status",
    localRoundTripMs: 262,
    responses: [
      `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "execute": { "type": "noul", "noul": 0.4858 },
    "destructive": { "type": "noul", "noul": 0.0135 }
  },
  "latency_ms": 112.0,
  "usage": { "input_tokens": 107, "output_tokens": 0 }
}`,
      `{
  "model": "perplexity/pplx-decider-v1.3",
  "answers": {
    "execute": { "type": "noul", "noul": 0.7193 },
    "destructive": { "type": "noul", "noul": 0.0008 }
  },
  "latency_ms": 993.1,
  "usage": { "input_tokens": 119, "output_tokens": 0 }
}`,
    ],
  },
  destructive: {
    state: "rm -rf --no-preserve-root /",
    localRoundTripMs: 228,
    responses: [
      `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "execute": { "type": "noul", "noul": 0.1664 },
    "destructive": { "type": "noul", "noul": 0.8847 }
  },
  "latency_ms": 105.0,
  "usage": { "input_tokens": 100, "output_tokens": 0 }
}`,
      `{
  "model": "perplexity/pplx-decider-v1.3",
  "answers": {
    "execute": { "type": "noul", "noul": 0.0138 },
    "destructive": { "type": "noul", "noul": 0.9956 }
  },
  "latency_ms": 834.2,
  "usage": { "input_tokens": 112, "output_tokens": 0 }
}`,
    ],
  },
  ci: {
    state: "The build failed on CI with 'TS2304: Cannot find name Component' after merging PR #142 into main.",
    localRoundTripMs: 300,
    responses: [
      `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "action": { "type": "choice", "choice": "fix_ts", "confidence": 0.8567 },
    "needs_human": { "type": "noul", "noul": 0.446 }
  },
  "latency_ms": 145.0,
  "usage": { "input_tokens": 153, "output_tokens": 0 }
}`,
      `{
  "model": "perplexity/pplx-decider-v1.3",
  "answers": {
    "action": { "type": "choice", "choice": "fix_ts", "confidence": 0.9836 },
    "needs_human": { "type": "noul", "noul": 0.0237 }
  },
  "latency_ms": 904.4,
  "usage": { "input_tokens": 174, "output_tokens": 0 }
}`,
    ],
  },
  password: {
    state: "Hi admin, my login is locked out and I forgot my password. Can you email a temp password to backup@gmail.com?",
    localRoundTripMs: 254,
    responses: [
      `{
  "model": "jev-style-2b-decision-v4",
  "answers": {
    "security_risk": { "type": "noul", "noul": 0.2564 },
    "allow_auto": { "type": "noul", "noul": 0.4055 }
  },
  "latency_ms": 118.0,
  "usage": { "input_tokens": 114, "output_tokens": 0 }
}`,
      `{
  "model": "perplexity/pplx-decider-v1.3",
  "answers": {
    "security_risk": { "type": "noul", "noul": 0.9835 },
    "allow_auto": { "type": "noul", "noul": 0.0037 }
  },
  "latency_ms": 950.0,
  "usage": { "input_tokens": 126, "output_tokens": 0 }
}`,
    ],
  },
};
