import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const base = "https://hlokeshwariemids.github.io/Portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
