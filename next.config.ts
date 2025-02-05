import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "*"
      }
    ]
  },
  env: {
    BASE_URL: process.env.BASE_URL
  }
};

export default nextConfig;
