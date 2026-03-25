import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import DocprocContent from "./DocprocContent";

export const metadata: Metadata = createMetadata({
  title: "DocProc — Document Processing Toolkit Case Study | GES",
  description:
    "18-pipeline document processing toolkit with RAG-powered assistant and 248 automated tests.",
  path: "/case-studies/docproc",
});

export default function DocprocPage() {
  return <DocprocContent />;
}
