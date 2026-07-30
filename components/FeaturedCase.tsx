"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";

const FEATURED_SHOTS = [
  {
    src: "/projects/wcc/featured/01-hero.jpg",
    altKey: "shotHero" as const,
    /** SE: full; ≥380: 2/2; md+: 4/6 sticky mozaik */
    span: "col-span-full min-h-[200px] sm:min-h-[240px] min-[380px]:col-span-2 md:col-span-4 md:row-span-2 md:min-h-[320px]",
  },
  {
    src: "/projects/wcc/featured/02-kitchen.jpg",
    altKey: "shotKitchen" as const,
    span: "col-span-full min-h-[140px] min-[380px]:col-span-1 md:col-span-2 md:min-h-[150px]",
  },
  {
    src: "/projects/wcc/featured/03-projects.jpg",
    altKey: "shotProjects" as const,
    span: "col-span-full min-h-[140px] min-[380px]:col-span-1 md:col-span-2 md:min-h-[150px]",
  },
  {
    src: "/projects/wcc/featured/04-brands.jpg",
    altKey: "shotBrands" as const,
    span: "col-span-full min-h-[140px] min-[380px]:col-span-2 md:col-span-6 md:min-h-[160px]",
  },
];

/** Tek vaka — sticky anlatı + site görselleri */
export default function FeaturedCase() {
  const t = useTranslations("featured");
  const outcomes = t.raw("outcomes") as string[];

  return (
    <section
      className="cv-auto border-t border-foreground/8 bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="min-w-0 lg:sticky lg:top-[calc(var(--nav-offset)+1rem)] lg:self-start">
          <Reveal>
            <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
              <span
                aria-hidden
                className="inline-block h-px w-6 bg-lime/80"
              />
              {t("label")}
            </p>
            <p className="mb-4 font-mono text-xs font-bold text-foreground/35">
              {t("client")}
            </p>
            <h2 className="text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/55 md:text-base">
              {t("blurb")}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 space-y-4 border-t border-foreground/10 pt-8">
              {outcomes.map((item, i) => (
                <li key={item} className="flex gap-4 text-sm md:text-[15px]">
                  <span className="font-mono text-xs font-bold text-lime-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <Magnetic strength={0.3} className="mt-10 block w-full sm:inline-block sm:w-auto">
              <SpecularButton
                href="/work/wcc"
                tone="ink"
                size="md"
                fillMobile
                className="btn-stable btn-stable--chip"
              >
                {t("cta")}
                <span aria-hidden className="text-lime">
                  →
                </span>
              </SpecularButton>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal from="right" y={0} className="min-w-0">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-background ring-1 ring-inset ring-foreground/8 md:min-h-[460px] md:rounded-[1.5rem]">
            {/* SE: tek kolon (okunur); ≥380px: 2 kolon; md+: 6 kolon mozaik */}
            <div className="grid grid-cols-1 gap-1.5 p-1.5 min-[380px]:grid-cols-2 md:grid-cols-6 md:gap-2 md:p-2">
              {FEATURED_SHOTS.map((shot, i) => (
                <div
                  key={shot.src}
                  className={`relative overflow-hidden rounded-[0.75rem] bg-stone md:rounded-[0.9rem] ${shot.span}`}
                >
                  <Image
                    src={shot.src}
                    alt={t(shot.altKey)}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width: 767px) 92vw, (max-width: 1024px) 90vw, 520px"
                        : i === 3
                          ? "(max-width: 767px) 92vw, (max-width: 1024px) 90vw, 560px"
                          : "(max-width: 767px) 46vw, (max-width: 1024px) 40vw, 220px"
                    }
                    quality={72}
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-top transition-transform duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>

            <div className="border-t border-foreground/8 px-5 py-5 md:px-8 md:py-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/35">
                {t("sceneLabel")}
              </p>
              <p className="mt-2 max-w-md text-lg font-bold leading-tight tracking-tight md:text-xl">
                {t("sceneTitle")}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/50">
                {t("sceneBody")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
