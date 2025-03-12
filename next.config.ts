import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "goauction.weweb.co.za"
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      }

    ]
  }
};

export default nextConfig;
