import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Completely disable Next.js image optimization
    unoptimized: true,
  },
};

export default nextConfig;
