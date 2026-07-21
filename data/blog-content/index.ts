import type { BlogArticle } from "../blog";
import tr from "./tr";
import en from "./en";
import es from "./es";
import de from "./de";

const byLocale: Record<string, Record<string, BlogArticle>> = {
  tr,
  en,
  es,
  de,
};

export function getBlogArticle(
  locale: string,
  slug: string
): BlogArticle | undefined {
  const pack = byLocale[locale] ?? byLocale.tr;
  return pack[slug] ?? byLocale.tr[slug];
}
