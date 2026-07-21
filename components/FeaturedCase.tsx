"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { gsap, useGSAP } from "@/lib/gsap";

/** Tek vaka — sticky anlatı + renkli sahne */
export default function FeaturedCase() {
  const t = useTranslations("featured");
  const outcomes = t.raw("outcomes") as string[];
  const sceneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scene = sceneRef.current;
      if (!scene) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const orbs = scene.querySelectorAll("[data-orb]");
      gsap.to(orbs[0] ?? null, {
        y: 24,
        x: -12,
        duration: 4.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(orbs[1] ?? null, {
        y: -18,
        x: 16,
        duration: 5.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.4,
      });
      gsap.to(orbs[2] ?? null, {
        rotate: 12,
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: sceneRef }
  );

  return (
    <section
      id="featured"
      className="border-t border-foreground/8 bg-paper px-5 py-14 md:px-10 md:py-24"
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
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-ink-fg"
              >
                {t("cta")}
                <span aria-hidden className="text-lime">
                  →
                </span>
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal from="right" y={0} className="min-w-0">
          <div
            ref={sceneRef}
            className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-[2rem] bg-band md:aspect-square lg:min-h-[560px]"
          >
            <div
              data-orb
              className="absolute left-0 top-16 size-48 -translate-x-1/4 rounded-full bg-lime/90 blur-[2px] md:size-64"
            />
            <div
              data-orb
              className="absolute bottom-24 right-0 size-40 translate-x-1/4 rounded-full bg-lime/55 md:size-52"
            />
            <div
              data-orb
              className="absolute left-1/3 top-1/3 size-28 -rotate-6 rounded-3xl border border-band-fg/15 bg-band-fg/5 backdrop-blur-sm md:size-36"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-band via-band/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">
                {t("sceneLabel")}
              </p>
              <p className="mt-3 max-w-sm text-2xl font-bold leading-tight tracking-tight text-band-fg md:text-3xl">
                {t("sceneTitle")}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-band-fg/55">
                {t("sceneBody")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
