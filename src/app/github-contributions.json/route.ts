import { fetchContributions } from "@/lib/contributions";

// Built once into a static file; the graph is as fresh as the last deploy
export const dynamic = "force-static";

export async function GET() {
  return Response.json(await fetchContributions());
}
