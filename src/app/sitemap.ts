import type { MetadataRoute } from "next";

const BASE_URL = "https://gesedge.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services/business-platforms",
    "/services/ai-tools",
    "/services/cross-border",
    "/case-studies",
    "/training",
    "/about",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
