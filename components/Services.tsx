"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";
import { scheduleScrollTriggerRefresh } from "@/lib/nav-scroll";

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

  useGSAP(
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

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, []);

  const toggle = (i: number) => {
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
      scheduleScrollTriggerRefresh(80);
      return;
    }

    tweenRef.current?.kill();
    const tl = gsap.timeline({
      onComplete: () => scheduleScrollTriggerRefresh(80),
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
  };

  return (
    <section
      id="services"
      className="cv-auto scroll-mt-[var(--nav-offset)] px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {isTeaser && (
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                  {t("label")}
                </p>
              </Reveal>
              <WordReveal
                text={t("title")}
                className="text-3xl font-bold tracking-tight md:text-5xl"
              />
            </div>
          </div>
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
                    : "border-foreground/10 [@media(hover:hover)_and_(pointer:fine)]:hover:border-foreground/25"
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
                  <span className="min-w-0 flex-1 text-lg font-bold tracking-tight md:text-xl">
                    {item.title}
                  </span>
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xl leading-none transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
                        <SpecularButton
                          href={{ pathname: "/", hash: "contact" }}
                          tone="lime"
                          size="sm"
                          className="btn-stable btn-stable--chip"
                        >
                          {t("cta")}
                          <span aria-hidden>→</span>
                        </SpecularButton>
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
                scroll={false}
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ink"
              >
                <span className="link-underline">{t("seeAll")}</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}
