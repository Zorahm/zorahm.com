import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайту-визитке сервер не нужен: на выходе статика, которую можно лить куда угодно.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
