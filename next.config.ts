import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  future: {
    webpack5: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://news-app-backend-4rb1.vercel.app/api/:path*", // Proxy API requests
      },
    ];
  },
};

export default nextConfig; // Use ES6 export for Next.js config
