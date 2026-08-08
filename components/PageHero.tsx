"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { forDisplay } from "@/lib/typography";

type Crumb = {
  label: string;
  href?: "/" | "/manifesto" | "/work" | "/approach" | "/services" | "/blog";
};

type PageHeroProps = {
  /** Kept for call-site API; not shown (Atelier Signal — no eyebrows). */
  label: string;
  title: string;
  blurb?: string;
  crumbs?: Crumb[];
};

/**
 * Alt sayfa üst bandı — paper editorial + chrome hairline (Atelier Signal).
 */
export default function PageHero({
  label,
  title,
  blurb,
  crumbs,
}: PageHeroProps) {
  const t = useTranslations("a11y");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const safeTitle = forDisplay(title);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const nodes = el.querySelectorAll<HTMLElement>("[data-ph]");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(nodes, { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        nodes,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.04,
          overwrite: "auto",
          onComplete: () => {
            gsap.set(nodes, { clearProps: "opacity,transform" });
          },
        }
      );
    },
    { scope: ref, dependencies: [locale, safeTitle, label, blurb] }
  );

  return (
    <div
      ref={ref}
      className="page-hero relative overflow-hidden border-b border-[color:var(--chrome-edge)] bg-paper"
    >
      <div
        aria-hidden
        className="page-hero__wash pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-[calc(var(--nav-offset)+1.25rem)] md:px-10 md:pb-16 md:pt-32">
        {crumbs && crumbs.length > 0 && (
          <nav
            data-ph
            aria-label={t("breadcrumb")}
            className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/40"
          >
            {crumbs.map((c, i) => (
              <span
                key={`${locale}-${c.href ?? "here"}-${i}`}
                className="flex items-center gap-2"
              >
                {i > 0 && <span className="text-foreground/25">/</span>}
                {c.href ? (
                  <Link
                    scroll={false}
                    href={c.href}
                    className="inline-flex min-h-6 items-center py-1.5 -my-1.5 transition-colors hover:text-ink"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink/70">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1
          data-ph
          className="font-display max-w-4xl text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.98] tracking-[-0.035em]"
        >
          {safeTitle}
        </h1>
        {blurb && (
          <p
            data-ph
            className="font-subtitle mt-6 max-w-[68ch] text-sm leading-relaxed text-foreground/55 md:text-base"
          >
            {blurb}
          </p>
        )}
      </div>
    </div>
  );
}
