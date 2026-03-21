import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Insights on AI systems, business automation, and cross-border operations from Global Edge Strategies.",
  path: "/blog",
});

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
    <section className="py-20 md:py-28 bg-bg text-fg">
      <div className="mx-auto max-w-4xl px-6">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-fg mb-8 inline-block hover:text-muted-fg">
          &larr; Back to home
        </Link>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">
          Blog
        </h1>
        <p className="font-body mt-8 text-lg leading-relaxed max-w-2xl">
          Notes on building AI systems, running cross-border operations, and the things
          we learn shipping production software.
        </p>

        <div className="mt-16 space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-2 border-fg p-8 hover:bg-fg hover:text-bg transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  {post.category}
                </span>
                <span className="font-mono text-xs opacity-60">{post.date}</span>
              </div>
              <h2 className="font-display text-2xl tracking-tight">{post.title}</h2>
              <p className="font-body mt-3 text-base leading-relaxed opacity-80">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <hr className="section-rule my-16" />

        <div className="border-2 border-fg p-8 text-center">
          <h3 className="font-display text-2xl tracking-tight mb-3">Blog launching soon</h3>
          <p className="font-body text-base opacity-80">
            We&apos;re putting the finishing touches on our first posts. In the meantime,{" "}
            <a href="mailto:ryan@gesedge.com" className="font-mono text-xs uppercase tracking-widest font-bold hover:opacity-60">
              reach out directly
            </a>{" "}
            if you have questions about AI systems, cross-border operations, or anything
            else we work on.
          </p>
        </div>
      </div>
    </section>
  );
}