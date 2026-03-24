import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog-posts";

const BASE_URL = "https://gesedge.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/case-studies", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/case-studies/bloodline-charters", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies/pjcs-rag", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies/docproc", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const blogSlugs = getAllBlogSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
