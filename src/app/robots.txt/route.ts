import { buildRobotsTxt } from "@/content/robots";

// A static export refuses to build the route otherwise
export const dynamic = "force-static";

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
