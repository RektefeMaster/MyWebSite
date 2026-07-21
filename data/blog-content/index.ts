import type { BlogArticle } from "../blog";

const byLocale: Record<string, () => Promise<Record<string, BlogArticle>>> = {
  tr: () => import("./tr").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
};

export async function getBlogArticle(
  locale: string,
  slug: string
): Promise<BlogArticle | undefined> {
  const load = byLocale[locale] ?? byLocale.tr;
  const pack = await load();
  if (pack[slug]) return pack[slug];
  if (locale !== "tr") {
    const tr = await byLocale.tr();
    return tr[slug];
  }
  return undefined;
}
