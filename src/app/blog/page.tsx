"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";

const posts = [
  {
    slug: "why-80-percent-of-ai-projects-fail",
    title: "Why 80% of AI Projects Fail (And What the Other 20% Do Differently)",
    excerpt:
      "The problem is rarely the technology. It's starting with the technology instead of the problem. Here's how to build AI systems that actually deliver results.",
    date: "Coming soon",
    category: "AI Strategy",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format",
  },
  {
    slug: "building-a-rag-system-that-works",
    title: "Building a RAG System That Actually Works",
    excerpt:
      "Vector search alone falls short. Here's how we combine embeddings, BM25 keyword matching, and reciprocal rank fusion to build product catalogs that understand what you're asking.",
    date: "Coming soon",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format",
  },
  {
    slug: "running-a-business-across-us-and-china",
    title: "Running a Business Across the US and China in 2026",
    excerpt:
      "What it actually takes to operate entities in both countries, from WFOE registration to transfer pricing documentation to managing bookkeepers in Chengdu from Hawaii.",
    date: "Coming soon",
    category: "Cross-Border",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero: asymmetric */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              Back to home
            </Link>
          </RevealSection>
          <RevealSection delay={0.1}>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Insights</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">Blog</h1>
          </RevealSection>
          <RevealSection delay={0.2}>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl">
              Notes on building AI systems, running cross-border operations, and the things
              we learn shipping production software.
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Featured post: large image + text split */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <article className="card-glass rounded-sm overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="relative h-[240px] lg:h-auto lg:col-span-5">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent lg:hidden" />
                </div>
                <div className="lg:col-span-7 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs tracking-widest text-accent uppercase">{posts[0].category}</span>
                    <span className="font-mono text-xs text-fg-dim">{posts[0].date}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">{posts[0].title}</h2>
                  <p className="mt-4 text-fg-muted leading-relaxed text-lg">{posts[0].excerpt}</p>
                </div>
              </div>
            </article>
          </RevealSection>
        </div>
      </section>

      {/* Remaining posts: 2-col grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {posts.slice(1).map((post) => (
              <RevealItem key={post.slug}>
                <article className="card-glass rounded-sm overflow-hidden h-full group hover:border-accent/30 transition-all duration-300">
                  <div className="relative h-[180px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs tracking-widest text-accent uppercase">{post.category}</span>
                      <span className="font-mono text-xs text-fg-dim">{post.date}</span>
                    </div>
                    <h2 className="font-display text-xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">{post.title}</h2>
                    <p className="mt-3 text-fg-muted leading-relaxed text-sm">{post.excerpt}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Coming soon banner: left-aligned */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="card-glass rounded-sm p-8 md:p-12 glow-accent max-w-3xl">
              <h3 className="font-display text-2xl font-medium tracking-tight mb-3">Blog launching soon</h3>
              <p className="text-fg-muted leading-relaxed">
                We&apos;re putting the finishing touches on our first posts. In the meantime,{" "}
                <a href="mailto:ryan@gesedge.com" className="text-accent hover:text-accent-hover transition-colors">reach out directly</a>{" "}
                if you have questions about AI systems, cross-border operations, or anything else we work on.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
