import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about/", "/writing/", "/contact/"].map((p) => ({
    url: `${site.url}${p}`,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/writing/${p.slug}/`,
    lastModified: p.date,
  }));
  return [...pages, ...posts];
}
