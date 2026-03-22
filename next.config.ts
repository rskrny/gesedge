import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // All images served from local public/ folder — no external sources
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
