import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact | Global Edge Strategies",
  description: "Start a project with Global Edge Strategies. Custom AI systems, web platforms, and cross-border solutions. Response within 24 hours.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
