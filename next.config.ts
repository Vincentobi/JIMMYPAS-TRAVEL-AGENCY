import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'flagcdn.com'],
    unoptimized: true,
  },
};

export default nextConfig;
