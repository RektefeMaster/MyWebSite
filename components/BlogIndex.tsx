import { getTranslations } from "next-intl/server";
import { blogPosts } from "@/data/blog";
import { getBlogArticle } from "@/data/blog-content";
import { formatBlogDate } from "@/lib/blog-format";
import BlogCard from "./BlogCard";

type BlogIndexProps = {
  locale: string;
};

export default async function BlogIndex({ locale }: BlogIndexProps) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const [featured, ...rest] = blogPosts;

  const featuredArticle = (await getBlogArticle(locale, featured.slug))!;
  const restArticles = await Promise.all(
    rest.map(async (post) => ({
      post,
      article: (await getBlogArticle(locale, post.slug))!,
    }))
  );

  return (
    <section className="bg-background px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2">
          <BlogCard
            post={featured}
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt}
            categoryLabel={t(`categories.${featured.category}`)}
            dateLabel={formatBlogDate(featured.date, locale)}
            readLabel={t("readMinutes", { count: featured.readMinutes })}
            viewLabel={t("view")}
            imageAlt={featuredArticle.imageAlt}
            featured
          />

          {restArticles.map(({ post, article }, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              title={article.title}
              excerpt={article.excerpt}
              categoryLabel={t(`categories.${post.category}`)}
              dateLabel={formatBlogDate(post.date, locale)}
              readLabel={t("readMinutes", { count: post.readMinutes })}
              viewLabel={t("view")}
              imageAlt={article.imageAlt}
              delay={(i + 1) * 50}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
