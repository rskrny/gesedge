"use client";

import Link from "next/link";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";

const posts = [
  {
    slug: "why-80-percent-of-ai-projects-fail",
    title: "Why 80% of AI Projects Fail (And What the Other 20% Do Differently)",
    excerpt:
      "The problem isn't the technology. It's starting with the technology instead of the problem. Here's how to build AI systems that actually deliver results.",
    date: "Coming soon",
    category: "AI Strategy",
  },
  {
    slug: "building-a-rag-system-that-works",
    title: "Building a RAG System That Actually Works",
    excerpt:
      "Vector search alone isn't enough. Here's how we combine embeddings, BM25 keyword matching, and reciprocal rank fusion to build product catalogs that understand what you're asking.",
    date: "Coming soon",
    category: "Engineering",
  },
  {
    slug: "running-a-business-across-us-and-china",
    title: "Running a Business Across the US and China in 2026",
    excerpt:
      "What it actually takes to operate entities in both countries — from WFOE registration to transfer pricing documentation to managing bookkeepers in Chengdu from Hawaii.",
    date: "Coming soon",
    category: "Cross-Border",
  },
];

export default function Blog() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <RevealSection>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </RevealSection>
        <RevealSection delay={0.1}>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Blog</h1>
        </RevealSection>
        <RevealSection delay={0.2}>
          <p className="mt-8 text-lg text-fg-muted leading-relaxed max-w-2xl">
            Notes on building AI systems, running cross-border operations, and the things
            we learn shipping production software.
          </p>
        </RevealSection>

        <RevealStagger className="mt-16 space-y-6" staggerDelay={0.1}>
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <article className="card-glass rounded-sm p-8 group hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs tracking-widest text-accent uppercase">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-fg-dim">{post.date}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="mt-3 text-fg-muted leading-relaxed">{post.excerpt}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <RevealSection delay={0.4} className="mt-16">
          <div className="divider-accent mb-16" />
          <div className="card-glass rounded-sm p-8 text-center glow-accent">
            <h3 className="font-display text-2xl font-bold tracking-tight mb-3">Blog launching soon</h3>
            <p className="text-fg-muted">
              We&apos;re putting the finishing touches on our first posts. In the meantime,{" "}
              <a href="mailto:ryan@gesedge.com" className="text-accent hover:text-accent-hover transition-colors">
                reach out directly
              </a>{" "}
              if you have questions about AI systems, cross-border operations, or anything
              else we work on.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
