import { buildLlmsFullTxt } from "@/content/llms";

// A static export will not build the route otherwise
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
