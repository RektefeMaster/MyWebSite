import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { SITE, absoluteUrl, pageMeta } from "@/lib/site";
import { blogPosts, getPostMeta } from "@/data/blog";
import { getBlogArticle } from "@/data/blog-content";
import { routing } from "@/i18n/routing";
import BlogArticleView from "@/components/BlogArticleView";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale, slug } = await params;
  const meta = getPostMeta(slug);
  const article = await getBlogArticle(locale, slug);
  if (!meta || !article) return {};
  return pageMeta(
    {
      locale,
      path: `/blog/${slug}`,
      title: `${article.title} — METEK`,
      description: article.excerpt,
      type: "article",
      image: meta.image,
    },
    parent
  );
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

  const pageUrl = absoluteUrl(locale, `/blog/${slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${SITE.url}${meta.image}`,
    datePublished: meta.date,
    dateModified: meta.date,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "Nurullah Aydın",
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.brand,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon`,
        width: 256,
        height: 256,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogArticleView locale={locale} meta={meta} article={article} />
    </>
  );
}
