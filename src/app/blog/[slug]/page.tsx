import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/lib/blog-posts";
import { createMetadata } from "@/lib/seo";
import BlogArticle from "./BlogArticle";

/* ── Static generation ──────────────────────────────────────────────── */

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

/* ── Per-post metadata (OG + Twitter) ───────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createMetadata({ title: "Post Not Found", path: "/blog" });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  });
}

/* ── Page component (server) ────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <BlogArticle post={post} prevPost={prevPost} nextPost={nextPost} />
  );
}
