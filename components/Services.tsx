"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { gsap, useGSAP, ScrollTrigger, attachScrollReveal } from "@/lib/gsap";

type ServiceItem = {
  title: string;
  description: string;
  includes: string[];
};

type ServicesProps = {
  /** teaser: ana sayfa, full: /services */
  variant?: "teaser" | "full";
};

export default function Services({ variant = "full" }: ServicesProps) {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];
  const isTeaser = variant === "teaser";
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const openRef = useRef(0);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        gsap.set(panel, {
          height: i === openRef.current ? "auto" : 0,
          overflow: "hidden",
        });
      });

      const articles = list.querySelectorAll("[data-service-item]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.from(articles, {
          opacity: 0,
          y: 24,
          stagger: 0.045,
          duration: 0.5,
          ease: "power2.out",
          force3D: true,
          paused: true,
        });
        attachScrollReveal(tween, list);
      });

      return () => mm.revert();
    },
    { scope: listRef, dependencies: [items.length] }
  );

  const toggle = contextSafe((i: number) => {
    const next = openRef.current === i ? -1 : i;
    const prev = openRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    openRef.current = next;
    setOpen(next);

    if (reduced) {
      panelRefs.current.forEach((panel, idx) => {
        if (!panel) return;
        gsap.set(panel, { height: idx === next ? "auto" : 0 });
      });
      ScrollTrigger.refresh();
      return;
    }

    tweenRef.current?.kill();
    const tl = gsap.timeline({
      onComplete: () => ScrollTrigger.refresh(),
    });
    tweenRef.current = tl;

    if (prev >= 0 && prev !== next) {
      const prevPanel = panelRefs.current[prev];
      if (prevPanel) {
        tl.to(
          prevPanel,
          { height: 0, duration: 0.38, ease: "power2.inOut" },
          0
        );
      }
    }

    if (next >= 0) {
      const nextPanel = panelRefs.current[next];
      if (nextPanel) {
        tl.to(
          nextPanel,
          { height: "auto", duration: 0.42, ease: "power2.inOut" },
          prev >= 0 && prev !== next ? 0.08 : 0
        );
        const chips = nextPanel.querySelectorAll("[data-service-chips] > *");
        if (chips.length) {
          tl.fromTo(
            chips,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.03,
              duration: 0.28,
              ease: "power2.out",
            },
            "-=0.2"
          );
        }
      }
    }
  });

  return (
    <section
      id="services"
      className={`scroll-mt-[var(--nav-offset)] px-5 md:px-10 ${
        isTeaser ? "py-20 md:py-28" : "pb-20 pt-4 md:pb-28 md:pt-8"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {isTeaser && (
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                  {t("label")}
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  {t("title")}
                </h2>
              </div>
            </div>
          </Reveal>
        )}

        <div ref={listRef} className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                key={item.title}
                data-service-item={i}
                className={`overflow-hidden rounded-2xl border ${
                  isOpen
                    ? "border-band"
                    : "border-foreground/10 hover:border-foreground/25"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-colors duration-200 md:gap-6 md:px-7 md:py-6 ${
                    isOpen ? "bg-band text-band-fg" : "bg-surface text-ink"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      isOpen ? "text-lime" : "text-foreground/35"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-bold tracking-tight md:text-xl">
                    {item.title}
                  </span>
                  <span
                    className={`inline-flex size-8 items-center justify-center rounded-full text-xl leading-none transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "rotate-45 bg-band-fg/10 text-lime"
                        : "rotate-0 text-foreground/30"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  className="bg-band text-band-fg"
                  style={{ height: i === 0 ? "auto" : 0, overflow: "hidden" }}
                >
                  <div
                    data-service-body
                    className="grid gap-8 px-5 pb-7 pt-1 md:grid-cols-[1.15fr_1fr] md:items-start md:gap-10 md:px-7 md:pb-8"
                  >
                    <div>
                      <p className="max-w-md text-sm leading-relaxed text-band-fg/60">
                        {item.description}
                      </p>
                      <Magnetic strength={0.32} className="mt-5 inline-block">
                        <Link
                          href={{ pathname: "/", hash: "contact" }}
                          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-on-lime transition-transform hover:scale-[1.02]"
                        >
                          {t("cta")}
                          <span aria-hidden>→</span>
                        </Link>
                      </Magnetic>
                    </div>
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-wide text-band-fg/40">
                        {t("included")}
                      </p>
                      <div
                        data-service-chips
                        className="flex flex-wrap gap-2"
                      >
                        {item.includes.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-band-fg/15 px-2.5 py-1 text-xs text-band-fg/85"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {isTeaser && (
          <div className="mt-10 flex justify-start">
            <Magnetic strength={0.3}>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ink"
              >
                {t("seeAll")}
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}
