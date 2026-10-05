import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Exact URLs only (blog-posts.ts): an open hostname lets anyone burn the
    // Cloudflare Images free quota (5k unique transformations/month).
    remotePatterns: [
      "/photo-1485827404703-89b55fcc595e",
      "/photo-1558494949-ef010cbdcc31",
      "/photo-1451187580459-43490279c0fa",
    ].map((pathname) => ({
      protocol: "https" as const,
      hostname: "images.unsplash.com",
      pathname,
      search: "?w=600&q=80&auto=format",
    })),
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Canonical host is the apex (seo.ts, sitemap.ts); www only redirects.
  async redirects() {
    return [
      // Root needs its own rule: OpenNext leaves an empty :path* unsubstituted.
      {
        source: "/",
        has: [{ type: "host", value: "www.gesedge.com" }],
        destination: "https://gesedge.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gesedge.com" }],
        destination: "https://gesedge.com/:path*",
        permanent: true,
      },
    ];
  },
  // Vercel sent this by default; Workers doesn't. Same value to keep parity.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Strict-Transport-Security", value: "max-age=63072000" }],
      },
    ];
  },
};

export default nextConfig;
