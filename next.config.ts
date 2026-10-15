import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
