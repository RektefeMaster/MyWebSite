"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";

const FEATURED_SHOTS = [
  {
    src: "/projects/wcc/featured/01-hero.jpg",
    alt: "Wholesale Cabinet Creations — ana sayfa",
    span: "col-span-4 row-span-2 min-h-[240px] md:min-h-[340px]",
  },
  {
    src: "/projects/wcc/featured/02-kitchen.jpg",
    alt: "Wholesale Cabinet Creations — mutfak dolapları",
    span: "col-span-2 min-h-[140px] md:min-h-[164px]",
  },
  {
    src: "/projects/wcc/featured/03-projects.jpg",
    alt: "Wholesale Cabinet Creations — proje galerisi",
    span: "col-span-2 min-h-[140px] md:min-h-[164px]",
  },
  {
    src: "/projects/wcc/featured/04-brands.jpg",
    alt: "Wholesale Cabinet Creations — markalar",
    span: "col-span-6 min-h-[140px] md:min-h-[180px]",
  },
] as const;

/** Tek vaka — sticky anlatı + site görselleri */
export default function FeaturedCase() {
  const t = useTranslations("featured");
  const outcomes = t.raw("outcomes") as string[];

  return (
    <section
      id="featured"
      className="cv-auto border-t border-foreground/8 bg-paper px-5 py-14 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-40 lg:self-start">
          <Reveal>
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
                  <span className="font-mono text-xs font-bold text-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <Magnetic strength={0.3} className="mt-10 inline-block">
              <SpecularButton
                href={{ pathname: "/", hash: "projects" }}
                tone="ink"
                size="md"
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
          <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/8 bg-background md:rounded-[2rem]">
            <div className="grid grid-cols-6 gap-2 p-2 md:gap-2.5 md:p-2.5">
              {FEATURED_SHOTS.map((shot, i) => (
                <div
                  key={shot.src}
                  className={`relative overflow-hidden rounded-[1rem] bg-stone md:rounded-[1.15rem] ${shot.span}`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 90vw, 520px"
                        : i === 3
                          ? "(max-width: 1024px) 90vw, 560px"
                          : "(max-width: 1024px) 40vw, 220px"
                    }
                    quality={88}
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="object-cover object-top transition-transform duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>

            <div className="border-t border-foreground/8 px-6 py-5 md:px-8 md:py-6">
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
