export type BlogCategory = "identity" | "digital" | "process" | "strategy";

export type BlogPostMeta = {
  slug: string;
  date: string;
  readMinutes: number;
  category: BlogCategory;
  accent: string;
  /** public/ altındaki kapak görseli */
  image: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  title: string;
  excerpt: string;
  lead: string;
  imageAlt: string;
  sections: BlogSection[];
};

/** Slug sırası = yayın sırası (yeniden eskiye) */
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "identity-at-first-glance",
    date: "2026-07-18",
    readMinutes: 11,
    category: "identity",
    accent: "#c8e84a",
    image: "/blog/identity-at-first-glance.webp",
  },
  {
    slug: "system-not-logo",
    date: "2026-07-12",
    readMinutes: 12,
    category: "identity",
    accent: "#161616",
    image: "/blog/system-not-logo.webp",
  },
  {
    slug: "editorial-web-as-sales",
    date: "2026-07-05",
    readMinutes: 12,
    category: "digital",
    accent: "#dcd8d0",
    image: "/blog/editorial-web-as-sales.webp",
  },
  {
    slug: "quiet-luxury-online",
    date: "2026-06-28",
    readMinutes: 10,
    category: "strategy",
    accent: "#e8f58a",
    image: "/blog/quiet-luxury-online.webp",
  },
  {
    slug: "brief-that-works",
    date: "2026-06-20",
    readMinutes: 11,
    category: "process",
    accent: "#c8e84a",
    image: "/blog/brief-that-works.webp",
  },
];

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = getPostMeta(slug);
  if (!current) return blogPosts.slice(0, limit);

  const same = blogPosts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = blogPosts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...same, ...rest].slice(0, limit);
}
