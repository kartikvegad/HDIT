import type { MetadataRoute } from "next";
import { projects, solutions } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hdit.example";
  const staticRoutes = ["", "/solutions", "/projects", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const solutionRoutes = solutions.map((item) => ({
    url: `${base}/solutions/${item.id}`,
    lastModified: new Date(),
  }));
  const projectRoutes = projects.map((item) => ({
    url: `${base}/projects/${item.id}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...solutionRoutes, ...projectRoutes];
}
