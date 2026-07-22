import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";

const PATHS = [
  "",
  "/manifesto",
  "/work",
  "/approach",
  "/services",
  "/blog",
] as const;

function localePath(locale: string, path: string): string {
  if (locale === routing.defaultLocale) {
    return path || "/";
  }
  return path ? `/${locale}${path}` : `/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of PATHS) {
      entries.push({
        url: `${SITE.url}${localePath(locale, path)}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: `${SITE.url}${localePath(locale, `/blog/${post.slug}`)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }

    for (const project of projects) {
      entries.push({
        url: `${SITE.url}${localePath(locale, `/work/${project.id}`)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.65,
      });
    }
  }

  return entries;
}
