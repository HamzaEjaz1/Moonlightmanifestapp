import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    localPatterns: [
      { pathname: "/screens/**" },
      { pathname: "/reviews/**" },
      { pathname: "/brand/**" },
    ],
  },
};

export default nextConfig;
