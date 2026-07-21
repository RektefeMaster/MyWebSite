import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { BlogPostMeta, BlogArticle } from "@/data/blog";
import { getRelatedPosts } from "@/data/blog";
import { getBlogArticle } from "@/data/blog-content";
import { formatBlogDate } from "@/lib/blog-format";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import WhatsAppButton from "./WhatsAppButton";

type BlogArticleViewProps = {
  locale: string;
  meta: BlogPostMeta;
  article: BlogArticle;
};

export default async function BlogArticleView({
  locale,
  meta,
  article,
}: BlogArticleViewProps) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const a11y = await getTranslations({ locale, namespace: "a11y" });
  const related = getRelatedPosts(meta.slug, 2);
  const relatedArticles = await Promise.all(
    related.map(async (post) => ({
      post,
      article: (await getBlogArticle(locale, post.slug))!,
    }))
  );

  return (
    <article className="bg-background">
      <header className="border-b border-foreground/8 bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-[calc(var(--nav-offset)+1rem)] md:px-10 md:pb-12 md:pt-32">
          <Reveal>
            <nav
              aria-label={a11y("breadcrumb")}
              className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/40"
            >
              <Link href="/" className="transition-colors hover:text-ink">
                {t("crumbHome")}
              </Link>
              <span className="text-foreground/25">/</span>
              <Link href="/blog" className="transition-colors hover:text-ink">
                {t("crumbBlog")}
              </Link>
              <span className="text-foreground/25">/</span>
              <span className="text-ink/70">
                {t(`categories.${meta.category}`)}
              </span>
            </nav>
          </Reveal>

          <Reveal delay={40}>
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/35">
              <span>{t("author")}</span>
              <span className="text-foreground/20">·</span>
              <span>{t(`categories.${meta.category}`)}</span>
              <span className="text-foreground/20">·</span>
              <time dateTime={meta.date}>
                {formatBlogDate(meta.date, locale)}
              </time>
              <span className="text-foreground/20">·</span>
              <span>{t("readMinutes", { count: meta.readMinutes })}</span>
            </div>
            <h1 className="font-display text-3xl leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]">
              {article.title}
            </h1>
            <p className="font-subtitle mt-6 text-base leading-relaxed text-foreground/55 md:text-lg">
              {article.lead}
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden md:aspect-[21/9] md:rounded-t-[2rem]">
          <Image
            src={meta.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-40" />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-10 md:py-20">
        <div className="space-y-14">
          {article.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 40}>
              <section>
                <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 48)}
                      className="text-[15px] leading-[1.75] text-foreground/65 md:text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-foreground/10 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-sm text-sm leading-relaxed text-foreground/50">
              {t("articleCtaBlurb")}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <Link
                  href={{ pathname: "/", hash: "contact" }}
                  className="btn-stable btn-stable--cta inline-flex w-full min-h-12 rounded-full bg-ink px-6 py-3 text-sm font-bold text-ink-fg sm:w-auto"
                >
                  {t("articleCta")}
                </Link>
              </Magnetic>
              <WhatsAppButton
                variant="outline"
                className="btn-stable btn-stable--cta w-full sm:w-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <aside className="border-t border-foreground/8 bg-paper px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                {t("relatedLabel")}
              </p>
              <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
                {t("relatedTitle")}
              </h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedArticles.map(({ post, article: a }, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full overflow-hidden rounded-3xl border border-foreground/10 bg-surface transition-colors hover:border-ink md:min-h-[200px]"
                  >
                    <div className="relative hidden w-[38%] shrink-0 sm:block">
                      <Image
                        src={post.image}
                        alt={a.imageAlt}
                        fill
                        sizes="200px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                      <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/35">
                          {t(`categories.${post.category}`)}
                        </p>
                        <h3 className="text-lg font-bold tracking-tight md:text-xl">
                          {a.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/50">
                          {a.excerpt}
                        </p>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink">
                        {t("view")}
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </aside>
      )}
    </article>
  );
}
