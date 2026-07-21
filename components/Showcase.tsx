"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";

type Card = {
  href: "/manifesto" | "/work" | "/approach" | "/services" | "/blog";
  label: string;
  title: string;
  body: string;
  index: string;
};

export default function Showcase() {
  const t = useTranslations("showcase");
  const view = t("view");

  const cards: Card[] = [
    {
      href: "/manifesto",
      label: t("cards.manifesto.label"),
      title: t("cards.manifesto.title"),
      body: t("cards.manifesto.body"),
      index: "01",
    },
    {
      href: "/work",
      label: t("cards.work.label"),
      title: t("cards.work.title"),
      body: t("cards.work.body"),
      index: "02",
    },
    {
      href: "/approach",
      label: t("cards.approach.label"),
      title: t("cards.approach.title"),
      body: t("cards.approach.body"),
      index: "03",
    },
    {
      href: "/services",
      label: t("cards.services.label"),
      title: t("cards.services.title"),
      body: t("cards.services.body"),
      index: "04",
    },
    {
      href: "/blog",
      label: t("cards.blog.label"),
      title: t("cards.blog.title"),
      body: t("cards.blog.body"),
      index: "05",
    },
  ];

  return (
    <section
      id="explore"
      className="scroll-mt-[var(--nav-offset)] border-t border-foreground/8 bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
              {t("label")}
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/50">
              {t("blurb")}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.href} delay={i * 60}>
              <Link
                href={card.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-surface p-7 transition-colors hover:border-band hover:bg-band hover:text-band-fg md:min-h-[240px] md:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-bold text-foreground/30 transition-colors group-hover:text-lime">
                    {card.index}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/35 transition-colors group-hover:text-band-fg/45">
                    {card.label}
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/50 transition-colors group-hover:text-band-fg/55">
                    {card.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors group-hover:text-lime">
                    {view}
                    <span aria-hidden>→</span>
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
