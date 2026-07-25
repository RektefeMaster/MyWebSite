import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";
import { blogPosts, getPostMeta } from "@/data/blog";
import { getBlogArticle } from "@/data/blog-content";
import { routing } from "@/i18n/routing";
import BlogArticleView from "@/components/BlogArticleView";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getBlogArticle(locale, slug);
  if (!article) return {};
  return {
    title: `${article.title} — M`,
    description: article.excerpt,
    alternates: alternatesFor(locale, `/blog/${slug}`),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const meta = getPostMeta(slug);
  const article = await getBlogArticle(locale, slug);
  if (!meta || !article) notFound();

  return <BlogArticleView locale={locale} meta={meta} article={article} />;
}
