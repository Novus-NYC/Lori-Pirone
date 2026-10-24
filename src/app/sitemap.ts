import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/book", "/about", "/contact"].map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route ? 0.7 : 1,
  }));
}
