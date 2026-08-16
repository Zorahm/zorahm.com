import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content";

// При статическом экспорте маршрут нужно пометить статическим явно
export const dynamic = "force-static";

/**
 * ИИ-краулеры разрешены наравне со всеми. Формально их покрывает правило `*`,
 * но многие сайты их блокируют, поэтому агенты перечислены поимённо — так
 * разрешение читается как осознанное решение, а не как недосмотр.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
