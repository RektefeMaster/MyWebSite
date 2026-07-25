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
  label: string;
  title: string;
  blurb?: string;
  crumbs?: Crumb[];
};

/**
 * Alt sayfa üst bandı — glass hissi, net hiyerarşi.
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
      className="page-hero relative overflow-hidden border-b border-foreground/8 bg-gradient-to-b from-paper via-paper to-background"
    >
      <div
        aria-hidden
        className="page-hero__wash pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-[calc(var(--nav-offset)+1.25rem)] md:px-10 md:pb-16 md:pt-32">
        {crumbs && crumbs.length > 0 && (
          <nav
            data-ph
            aria-label={t("breadcrumb")}
            className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/40"
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
                    /*
                      11px metin → 17px'lik dokunma hedefi; WCAG 2.2 AA (2.5.8)
                      24px istiyor. Dikey padding hedefi büyütür, negatif
                      margin düzeni aynı bırakır (satır yüksekliği değişmez).
                    */
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

        <p
          data-ph
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40"
        >
          {label}
        </p>
        <h1
          data-ph
          className="font-display max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          {safeTitle}
        </h1>
        {blurb && (
          <p
            data-ph
            className="font-subtitle mt-5 max-w-xl text-sm leading-relaxed text-foreground/55 md:text-base"
          >
            {blurb}
          </p>
        )}
      </div>
    </div>
  );
}
