import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "en.wikipedia.org",
      },
    ],
  },
};

export default nextConfig;
