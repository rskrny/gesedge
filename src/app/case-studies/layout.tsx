import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Case Studies | Global Edge Strategies",
  description: "Production systems we designed, built, and shipped. Charter booking platforms, trilingual AI product advisors, and document processing toolkits.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
