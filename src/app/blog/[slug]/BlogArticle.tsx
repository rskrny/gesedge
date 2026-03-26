"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";
import type { BlogPost } from "@/lib/blog-posts";

function formatDate(dateString: string, locale: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── Markdown-lite renderer ─────────────────────────────────────────── */
/* Handles ## headings and paragraphs from the content string.          */

function renderContent(content: string) {
  const blocks = content.split("\n\n").filter((block) => block.trim());

  return blocks.map((block, i) => {
    const trimmed = block.trim();

    // H2 heading
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-display text-2xl md:text-3xl font-semibold tracking-tight mt-14 mb-6"
        >
          {trimmed.replace("## ", "")}
        </h2>
      );
    }

    // Regular paragraph
    return (
      <p key={i} className="text-fg-muted leading-relaxed text-lg mb-6">
        {trimmed}
      </p>
    );
  });
}

/* ── Article layout ─────────────────────────────────────────────────── */

export default function BlogArticle({
  post,
  prevPost,
  nextPost,
}: {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}) {
  const { t, locale } = useLanguage();
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              {t("blog.backToBlog")}
            </Link>
          </RevealSection>

          <div className="max-w-3xl">
            <RevealSection delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-fg-dim">
                  {formatDate(post.date, locale)}
                </span>
                <span className="font-mono text-xs text-fg-dim">
                  {post.readingTime}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
                {post.title}
              </h1>
            </RevealSection>
            <RevealSection delay={0.2}>
              <p className="mt-6 text-lg text-fg-muted leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xs font-mono text-accent font-medium">
                    RK
                  </span>
                </div>
                <span className="text-sm text-fg-dim">{post.author}</span>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Featured image */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <RevealSection>
            <div className="relative h-[300px] md:h-[400px] rounded-sm overflow-hidden border border-border/50">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <RevealSection delay={0.1}>
            <article className="prose-custom">
              {renderContent(post.content)}
            </article>
          </RevealSection>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Post navigation */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="card-glass rounded-sm p-6 group hover:border-accent/30 transition-all duration-300"
                >
                  <p className="font-mono text-xs text-fg-dim mb-2">
                    {t("blog.previous")}
                  </p>
                  <p className="font-display text-lg font-medium tracking-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className={`card-glass rounded-sm p-6 group hover:border-accent/30 transition-all duration-300 ${
                    !prevPost ? "md:col-start-2" : ""
                  }`}
                >
                  <p className="font-mono text-xs text-fg-dim mb-2 md:text-right">
                    {t("blog.next")}
                  </p>
                  <p className="font-display text-lg font-medium tracking-tight group-hover:text-accent transition-colors duration-300 md:text-right line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              {t("blog.ctaTitle")}
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
              {t("blog.ctaSub")}
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="primary">
                {t("blog.ctaButton")}
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
