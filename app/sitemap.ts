import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Add your actual routes here
  const routes = [
    "",
    "/about",
    "/services",
    "/work",
    "/contact",
    "/speaking",
    "/media-kit",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
