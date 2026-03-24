import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About | Global Edge Strategies",
  description: "Technical consultancy building custom AI-powered business systems across the US, China, and UK. Founded by Ryan Kearney.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
