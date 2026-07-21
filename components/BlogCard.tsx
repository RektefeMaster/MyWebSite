import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogPostMeta } from "@/data/blog";
import Reveal from "./Reveal";

type BlogCardProps = {
  post: BlogPostMeta;
  title: string;
  excerpt: string;
  categoryLabel: string;
  dateLabel: string;
  readLabel: string;
  viewLabel: string;
  imageAlt: string;
  featured?: boolean;
  delay?: number;
};

export default function BlogCard({
  post,
  title,
  excerpt,
  categoryLabel,
  dateLabel,
  readLabel,
  viewLabel,
  imageAlt,
  featured = false,
  delay = 0,
}: BlogCardProps) {
  return (
    <Reveal delay={delay} className={featured ? "md:col-span-2" : ""}>
      <Link
        href={`/blog/${post.slug}`}
        className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-surface transition-colors hover:border-ink ${
          featured ? "md:min-h-[340px] md:flex-row" : "min-h-[300px]"
        }`}
      >
        <div
          className={`relative overflow-hidden bg-stone ${
            featured ? "min-h-[200px] md:w-[44%] md:min-h-full" : "h-44"
          }`}
        >
          <Image
            src={post.image}
            alt={imageAlt}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 44vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-5 rounded-full bg-surface/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {categoryLabel}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/35">
              <time dateTime={post.date}>{dateLabel}</time>
              <span className="text-foreground/20">·</span>
              <span>{readLabel}</span>
            </div>
            <h3
              className={`font-bold tracking-tight ${
                featured
                  ? "text-2xl md:text-3xl lg:text-4xl"
                  : "text-xl md:text-2xl"
              }`}
            >
              {title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/50">
              {excerpt}
            </p>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink">
            {viewLabel}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
