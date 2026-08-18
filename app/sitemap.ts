import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hdit.example";
  return ["", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
