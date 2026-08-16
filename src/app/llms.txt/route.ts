import { buildLlmsTxt } from "@/content/llms";

// Иначе статический экспорт откажется собирать маршрут
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
