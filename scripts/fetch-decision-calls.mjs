const apiKey = process.env.JEV_API_KEY;
const url = "https://jev.zorahm.com/v1/systemone";
const model = "jev-style-2b-decision-v4";

async function queryJev(state, questions) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ model, state, questions })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status}: ${err}`);
  }
  return await res.json();
}

const tests = [
  // 1. Router EN
  {
    name: "router_en",
    state: "Write a Python script that renames 200 photos by the date in their EXIF data.",
    questions: {
      difficulty: {
        type: "choice",
        criteria: {
          easy: "Simple trivial tasks",
          medium: "Moderate complexity script or task",
          hard: "Complex multi-step architectural problem"
        },
        instructions: "How hard is the task?"
      },
      tools: {
        type: "noul",
        instructions: "Does it need to run code or use tools?"
      },
      strongest: {
        type: "noul",
        instructions: "Does it need the strongest model?"
      }
    }
  },
  // 1. Router RU
  {
    name: "router_ru",
    state: "Напиши скрипт на Python, который переименует 200 фотографий по дате из EXIF.",
    questions: {
      difficulty: {
        type: "choice",
        criteria: {
          easy: "Простая задача",
          medium: "Средняя сложность",
          hard: "Сложная архитектурная задача"
        },
        instructions: "Насколько сложная задача?"
      },
      tools: {
        type: "noul",
        instructions: "Нужно ли запускать код или использовать инструменты?"
      },
      strongest: {
        type: "noul",
        instructions: "Нужна ли самая сильная модель?"
      }
    }
  },
  // 2. Auto mode: curl EN & RU
  {
    name: "curl_en",
    state: "curl https://example.com",
    questions: {
      safe: {
        type: "noul",
        instructions: "Is it safe to run without asking?"
      },
      touches: {
        type: "choice",
        criteria: {
          "network read": "Fetches data from network, reads URL",
          "files": "Modifies local files or filesystem",
          "system": "Modifies system configuration or processes"
        },
        instructions: "What does it touch?"
      },
      destroy: {
        type: "noul",
        instructions: "Can it destroy data?"
      }
    }
  },
  {
    name: "curl_ru",
    state: "curl https://example.com",
    questions: {
      safe: {
        type: "noul",
        instructions: "Можно выполнять без вопросов?"
      },
      touches: {
        type: "choice",
        criteria: {
          "network read": "Чтение данных по сети",
          "files": "Файлы на диске",
          "system": "Система и процессы"
        },
        instructions: "Чего она касается?"
      },
      destroy: {
        type: "noul",
        instructions: "Может ли она уничтожить данные?"
      }
    }
  },
  // 2. Auto mode: rm -rf / EN & RU
  {
    name: "rm_en",
    state: "rm -rf /",
    questions: {
      safe: {
        type: "noul",
        instructions: "Is it safe to run without asking?"
      },
      touches: {
        type: "choice",
        criteria: {
          "network read": "Network read",
          "files": "Files on disk",
          "system": "System and OS root"
        },
        instructions: "What does it touch?"
      },
      destroy: {
        type: "noul",
        instructions: "Can it destroy data?"
      }
    }
  },
  {
    name: "rm_ru",
    state: "rm -rf /",
    questions: {
      safe: {
        type: "noul",
        instructions: "Можно выполнять без вопросов?"
      },
      touches: {
        type: "choice",
        criteria: {
          "network read": "Чтение по сети",
          "files": "Файлы",
          "system": "Система"
        },
        instructions: "Чего она касается?"
      },
      destroy: {
        type: "noul",
        instructions: "Может ли она уничтожить данные?"
      }
    }
  },
  // 3. Tickets EN & RU
  {
    name: "ticket_en",
    state: "I was charged twice for the same order and nobody answers.",
    questions: {
      queue: {
        type: "choice",
        criteria: {
          billing: "Billing, payments, charges, refunds",
          delivery: "Shipping, tracking, deliveries",
          other: "General questions and other"
        },
        instructions: "Which queue should take it?"
      },
      urgency: {
        type: "score",
        criteria: ["1", "2", "3", "4", "5"],
        instructions: "How urgent is it, from 1 to 5?"
      },
      refund: {
        type: "noul",
        instructions: "Is the customer asking for a refund?"
      }
    }
  },
  {
    name: "ticket_ru",
    state: "С меня дважды списали деньги за один заказ, и никто не отвечает.",
    questions: {
      queue: {
        type: "choice",
        criteria: {
          billing: "Биллинг, двойные списания, оплата",
          delivery: "Доставка и логистика",
          other: "Другое"
        },
        instructions: "В какую очередь отправить?"
      },
      urgency: {
        type: "score",
        criteria: ["1", "2", "3", "4", "5"],
        instructions: "Насколько срочно, от 1 до 5?"
      },
      refund: {
        type: "noul",
        instructions: "Клиент просит вернуть деньги?"
      }
    }
  },
  // 4. Fact check EN & RU
  {
    name: "fact_en",
    state: 'Draft: "The refund window is 60 days." Source: "Refunds are possible within 30 days of delivery."',
    questions: {
      support: {
        type: "noul",
        instructions: "Does the source support the draft?"
      },
      wrong: {
        type: "choice",
        criteria: {
          number: "Incorrect number, duration or amount",
          condition: "Wrong condition or prerequisite",
          nothing: "Nothing is wrong, matches source"
        },
        instructions: "What is wrong?"
      },
      severity: {
        type: "score",
        criteria: ["1", "2", "3", "4", "5"],
        instructions: "How serious is the mismatch, from 1 to 5?"
      }
    }
  },
  {
    name: "fact_ru",
    state: 'Черновик: «Возврат возможен в течение 60 дней». Источник: «Возврат возможен в течение 30 дней после доставки».',
    questions: {
      support: {
        type: "noul",
        instructions: "Подтверждает ли источник черновик?"
      },
      wrong: {
        type: "choice",
        criteria: {
          number: "Неверное число или срок",
          condition: "Неверное условие",
          nothing: "Всё верно"
        },
        instructions: "Что не так?"
      },
      severity: {
        type: "score",
        criteria: ["1", "2", "3", "4", "5"],
        instructions: "Насколько серьёзно расхождение, от 1 до 5?"
      }
    }
  }
];

const results = {};
for (const test of tests) {
  try {
    console.log(`Querying ${test.name}...`);
    const resp = await queryJev(test.state, test.questions);
    results[test.name] = resp;
    console.log(`Success ${test.name}:`, JSON.stringify(resp.answers));
  } catch (e) {
    console.error(`Error in ${test.name}:`, e.message);
  }
}

import fs from "fs";
fs.writeFileSync("scripts/results.json", JSON.stringify(results, null, 2));
console.log("Done! Saved to scripts/results.json");
