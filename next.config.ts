import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "goauctions.royalcreatives.live"
      }
    ]
  }
};

export default nextConfig;
