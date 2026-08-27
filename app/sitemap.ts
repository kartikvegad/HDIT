import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hdit.example";
  return ["", "/about", "/careers", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
