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
    slug: "what-is-seo",
    date: "2026-08-05",
    readMinutes: 16,
    category: "digital",
    accent: "#0c6b66",
    image: "/blog/what-is-seo.webp",
  },
  {
    slug: "website-pricing-why-cheap-costs-more",
    date: "2026-08-05",
    readMinutes: 12,
    category: "strategy",
    accent: "#14171c",
    image: "/blog/website-pricing-why-cheap-costs-more.webp",
  },
  {
    slug: "whatsapp-chatbot-for-business",
    date: "2026-08-05",
    readMinutes: 11,
    category: "digital",
    accent: "#25D366",
    image: "/blog/whatsapp-chatbot-for-business.webp",
  },
  {
    slug: "technical-seo-checklist-business-website",
    date: "2026-08-05",
    readMinutes: 12,
    category: "digital",
    accent: "#0c6b66",
    image: "/blog/technical-seo-checklist-business-website.webp",
  },
  {
    slug: "identity-at-first-glance",
    date: "2026-07-18",
    readMinutes: 10,
    category: "identity",
    accent: "#0c6b66",
    image: "/blog/identity-at-first-glance.webp",
  },
  {
    slug: "system-not-logo",
    date: "2026-07-12",
    readMinutes: 10,
    category: "identity",
    accent: "#14171c",
    image: "/blog/system-not-logo.webp",
  },
  {
    slug: "editorial-web-as-sales",
    date: "2026-07-05",
    readMinutes: 10,
    category: "digital",
    accent: "#cdd6dd",
    image: "/blog/editorial-web-as-sales.webp",
  },
  {
    slug: "quiet-luxury-online",
    date: "2026-06-28",
    readMinutes: 10,
    category: "strategy",
    accent: "#a8cfe4",
    image: "/blog/quiet-luxury-online.webp",
  },
  {
    slug: "brief-that-works",
    date: "2026-06-20",
    readMinutes: 11,
    category: "process",
    accent: "#0c6b66",
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
