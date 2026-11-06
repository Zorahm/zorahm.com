import { buildPaperDecisionLlmsTxt } from "@/content/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildPaperDecisionLlmsTxt("ru"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
