import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PjcsContent from "./PjcsContent";

export const metadata: Metadata = createMetadata({
  title: "PJCS RAG System — AI Product Advisor Case Study | GES",
  description:
    "Trilingual AI system helping a Chinese manufacturer serve Latin American contractors with intelligent product recommendations.",
  path: "/case-studies/pjcs-rag",
});

export default function PjcsRagPage() {
  return <PjcsContent />;
}
