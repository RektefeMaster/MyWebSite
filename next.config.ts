import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // R3F's renderer disposal clashes with StrictMode's double-invoked effects
  // (the WebGL context is force-lost on the first cleanup and never restored)
  reactStrictMode: false,
  // a stray lockfile in the home directory makes Next guess the wrong root
  turbopack: { root: process.cwd() },
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

export default withNextIntl(nextConfig);
