import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайту-визитке сервер не нужен: на выходе статика, которую можно лить куда угодно.
  output: "export",
  images: { unoptimized: true },
  // Единственный способ дать общий 404 сайту с двумя корневыми макетами
  experimental: { globalNotFound: true },
};

export default nextConfig;
