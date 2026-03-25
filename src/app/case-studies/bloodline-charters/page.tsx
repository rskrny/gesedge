import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import BloodlineContent from "./BloodlineContent";

export const metadata: Metadata = createMetadata({
  title: "Bloodline Charters — Booking Platform Case Study | GES",
  description:
    "How we built a modern booking platform that increased traffic and engagement in under a week.",
  path: "/case-studies/bloodline-charters",
});

export default function BloodlineChartersPage() {
  return <BloodlineContent />;
}
