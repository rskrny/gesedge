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
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Link href="/" className="text-sm text-edge hover:text-edge-dark mb-8 inline-block">
          &larr; Back to home
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
          Blog
        </h1>
        <p className="mt-4 text-lg text-stone leading-relaxed max-w-2xl">
          Notes on building AI systems, running cross-border operations, and the things
          we learn shipping production software.
        </p>

        <div className="mt-14 space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-xl border border-border bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-edge uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-stone">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-2 text-base text-stone leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-warm text-center">
          <h3 className="text-lg font-semibold text-ink">Blog launching soon</h3>
          <p className="mt-2 text-sm text-stone">
            We&apos;re putting the finishing touches on our first posts. In the meantime,{" "}
            <a href="mailto:ryan@gesedge.com" className="text-edge font-medium">
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
