"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import { forDisplay } from "@/lib/typography";

type DoItem = { title: string; body: string };

/**
 * Studio page body: who builds METEK + what ships.
 * Sits between PageHero and the pinned manifesto lines.
 */
export default function StudioAbout() {
  const t = useTranslations("about");
  const items = t.raw("items") as DoItem[];

  return (
    <>
      <section
        id="about"
        className="relative border-b border-foreground/8 bg-paper text-foreground"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
              {t("whoLabel")}
            </p>
            <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-lime-ink">
              {t("origin")}
            </p>
            <p className="mt-2 max-w-[16rem] text-sm leading-snug text-foreground/45">
              {t("practice")}
            </p>
          </Reveal>

          <div className="md:col-span-8 md:pl-4 lg:pl-8">
            <Reveal>
              <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
                {forDisplay(t("whoTitle"))}
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
                {t("p1")}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
                {t("p2")}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-xl text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                {forDisplay(t("highlight"))}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/55 md:text-lg">
                {t("p3")}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 text-sm text-foreground/40">
                <span className="font-semibold text-foreground/70">
                  {t("name")}
                </span>
                <span className="mx-2 text-foreground/25">·</span>
                {t("role")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="relative border-b border-foreground/8 bg-background text-foreground"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-28">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
              {t("doLabel")}
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.08] tracking-tight">
              {forDisplay(t("doTitle"))}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
              {t("doIntro")}
            </p>
          </Reveal>

          <ul className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10 md:mt-16">
            {items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={40 * i}>
                  <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/35 md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-bold tracking-tight md:col-span-4 md:text-2xl">
                      {forDisplay(item.title)}
                    </h3>
                    <p className="text-base leading-relaxed text-foreground/60 md:col-span-7 md:text-[1.05rem]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:mt-12">
              <Link
                href="/work"
                scroll={false}
                className="inline-flex min-h-6 items-center py-1 -my-1 font-semibold text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-lime"
              >
                {t("linkWork")}
              </Link>
              <Link
                href="/services"
                scroll={false}
                className="inline-flex min-h-6 items-center py-1 -my-1 font-semibold text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-lime"
              >
                {t("linkServices")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
