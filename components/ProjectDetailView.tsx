import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import type { ProjectDetail } from "@/data/project-details";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import WhatsAppButton from "./WhatsAppButton";
import SpecularButton from "./SpecularButton";
import DeviceMockup from "./DeviceMockup";
import PageCta from "./PageCta";
import { forDisplay } from "@/lib/typography";

type ProjectDetailViewProps = {
  project: Project;
  detail: ProjectDetail;
};

const DEFAULT_GALLERY_SPANS = [
  "col-span-4 row-span-2 min-h-[220px] md:min-h-[320px]",
  "col-span-2 min-h-[130px] md:min-h-[154px]",
  "col-span-2 min-h-[130px] md:min-h-[154px]",
  "col-span-3 min-h-[140px] md:min-h-[170px]",
  "col-span-3 min-h-[140px] md:min-h-[170px]",
  "col-span-6 min-h-[140px] md:min-h-[190px]",
] as const;

export default async function ProjectDetailView({
  project,
  detail,
}: ProjectDetailViewProps) {
  const t = await getTranslations("projectUi");
  const nav = await getTranslations("nav");
  const a11y = await getTranslations("a11y");
  const name = detail.title ?? project.name;
  const gallery = detail.gallery ?? [];
  const hasCta = Boolean(detail.ctaTitle && detail.ctaButton);

  return (
    <article className="bg-background">
      <header className="border-b border-foreground/8 bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-[calc(var(--nav-offset)+1rem)] md:px-10 md:pb-10 md:pt-32">
          <Reveal>
            <nav
              aria-label={a11y("breadcrumb")}
              className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/40"
            >
              <Link scroll={false} href="/" className="transition-colors hover:text-ink">
                {nav("home")}
              </Link>
              <span className="text-foreground/25">/</span>
              <Link scroll={false} href="/work" className="transition-colors hover:text-ink">
                {nav("work")}
              </Link>
              <span className="text-foreground/25">/</span>
              <span className="text-ink/70">{name}</span>
            </nav>
          </Reveal>

          <Reveal delay={40}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
              {detail.tag}
            </p>
            <h1 className="font-display max-w-4xl text-3xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              {forDisplay(name)}
            </h1>
            <p className="font-subtitle mt-5 max-w-2xl text-base leading-relaxed text-foreground/55 md:text-lg">
              {detail.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {project.url ? (
                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <SpecularButton
                    externalHref={project.url}
                    tone="ink"
                    size="md"
                    fillMobile
                  >
                    {t("live")}
                    <span aria-hidden>↗</span>
                  </SpecularButton>
                </Magnetic>
              ) : null}
              {hasCta ? (
                <Magnetic strength={0.25} className="w-full sm:w-auto">
                  <SpecularButton
                    href={{ pathname: "/", hash: "contact" }}
                    tone="lime"
                    size="md"
                    fillMobile
                  >
                    {detail.ctaButton}
                    <span aria-hidden>→</span>
                  </SpecularButton>
                </Magnetic>
              ) : (
                <WhatsAppButton className="w-full justify-center sm:w-auto" />
              )}
              <Link
        scroll={false}
                href="/work"
                className="inline-flex min-h-10 items-center text-sm font-bold text-ink/60 transition-colors hover:text-ink"
              >
                ← {t("back")}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-12 md:px-10 md:pb-16">
          <Reveal delay={80}>
            <div className="relative aspect-[800/620] w-full md:aspect-[16/10]">
              <DeviceMockup project={project} variant="hero" priority />
            </div>
          </Reveal>
        </div>
      </header>

      {gallery.length > 0 ? (
        <section className="border-b border-foreground/8 bg-paper px-5 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/35">
                {t("gallery")}
              </p>
              <p className="mb-6 max-w-lg text-sm text-foreground/50 md:text-[15px]">
                {t("galleryHint")}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <div className="overflow-hidden rounded-[1.75rem] border border-foreground/8 bg-background md:rounded-[2rem]">
                <div className="grid grid-cols-6 gap-2 p-2 md:gap-2.5 md:p-2.5">
                  {gallery.map((shot, i) => (
                    <div
                      key={shot.src}
                      className={`relative overflow-hidden rounded-[1rem] bg-stone md:rounded-[1.15rem] ${
                        shot.span ??
                        DEFAULT_GALLERY_SPANS[
                          Math.min(i, DEFAULT_GALLERY_SPANS.length - 1)
                        ]
                      }`}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes={
                          i === 0
                            ? "(max-width: 1024px) 90vw, 720px"
                            : i === gallery.length - 1 && gallery.length >= 4
                              ? "(max-width: 1024px) 90vw, 960px"
                              : "(max-width: 1024px) 45vw, 320px"
                        }
                        quality={75}
                        priority={false}
                        loading="lazy"
                        decoding="async"
                        className="object-cover object-top transition-transform duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-3xl px-5 py-12 md:px-10 md:py-20">
        <div className="space-y-12">
          <Reveal>
            <section>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {detail.whatTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {detail.what.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-[15px] leading-relaxed text-foreground/65 md:text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={60}>
            <section>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {detail.howTitle}
              </h2>
              <ol className="mt-6 space-y-4">
                {detail.how.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 text-[15px] leading-relaxed text-foreground/65 md:text-base"
                  >
                    <span className="font-mono text-xs font-bold text-foreground/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          {detail.result ? (
            <Reveal delay={80}>
              <p className="rounded-3xl border border-foreground/10 bg-surface px-6 py-5 text-sm leading-relaxed text-foreground/60 md:text-[15px]">
                {detail.result}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={100}>
            <div className="rounded-3xl border border-foreground/10 bg-surface p-6 md:p-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground/35">
                {t("stack")}
              </p>
              <div className="flex flex-wrap gap-2">
                {detail.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-paper px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {hasCta ? (
        <PageCta
          label={detail.ctaLabel ?? ""}
          title={detail.ctaTitle!}
          blurb={detail.ctaBlurb ?? ""}
          cta={detail.ctaButton!}
        />
      ) : null}
    </article>
  );
}
