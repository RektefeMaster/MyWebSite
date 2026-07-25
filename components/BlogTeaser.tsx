import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/data/blog";
import { getBlogArticle } from "@/data/blog-content";
import { formatBlogDate } from "@/lib/blog-format";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";

type BlogTeaserProps = {
  locale: string;
};

/** Ana sayfa — son yazılardan kısa seçki */
export default async function BlogTeaser({ locale }: BlogTeaserProps) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = blogPosts.slice(0, 3);
  const articles = await Promise.all(
    posts.map(async (post) => ({
      post,
      article: (await getBlogArticle(locale, post.slug))!,
    }))
  );

  return (
    <section
      className="cv-auto border-t border-foreground/8 bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                {t("teaserLabel")}
              </p>
            </Reveal>
            <WordReveal
              text={t("teaserTitle")}
              className="text-4xl font-bold tracking-tight md:text-6xl"
            />
            <Reveal delay={120}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/50">
                {t("teaserBlurb")}
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Magnetic strength={0.3}>
              <Link
                scroll={false}
                href="/blog"
                className="link-underline inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ink"
              >
                {t("teaserAll")}
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {articles.map(({ post, article }, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  scroll={false}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-surface transition-colors md:min-h-[320px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-ink"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={article.imageAlt}
                      fill
                      loading="lazy"
                      decoding="async"
                      quality={72}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/35">
                        {t(`categories.${post.category}`)}
                        <span className="mx-2 text-foreground/20">·</span>
                        <time dateTime={post.date}>
                          {formatBlogDate(post.date, locale)}
                        </time>
                      </p>
                      <h3 className="text-lg font-bold leading-snug tracking-tight md:text-xl">
                        {article.title}
                      </h3>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink">
                      {t("view")}
                      <span
                        aria-hidden
                        className="transition-transform [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
