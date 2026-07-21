"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { preload } from "react-dom";
import { Link } from "@/i18n/navigation";
import Magnetic from "./Magnetic";
import { gsap, useGSAP } from "@/lib/gsap";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]" />
  ),
});

export default function Hero() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLAnchorElement>(null);
  const [active, setActive] = useState(true);

  // 3D başlık — tam Türkçe glif desteği
  preload("/fonts/SpaceGrotesk-Bold.ttf", {
    as: "font",
    type: "font/ttf",
    crossOrigin: "anonymous",
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(Boolean(entry?.isIntersecting)),
      { rootMargin: "15% 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useGSAP(
    () => {
      const copy = copyRef.current;
      const cue = cueRef.current;
      if (!copy) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(copy.querySelectorAll("[data-hero-fade]"), {
          opacity: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.07,
          delay: 0.55,
          ease: "power2.out",
        });
        if (cue) {
          gsap.from(cue, {
            opacity: 0,
            y: 12,
            duration: 0.55,
            delay: 0.95,
            ease: "power2.out",
          });
        }
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (pointer: fine)",
        () => {
          if (!cue) return;
          const bob = gsap.to(cue, {
            y: 6,
            duration: 1.35,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.5,
          });
          return () => {
            bob.kill();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] max-h-[1100px] min-h-[560px] overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]"
    >
      <HeroScene
        lines={[t("line1"), t("line2"), t("line3")]}
        active={active}
      />

      {/* Alt-sağ: kısa vaat + CTA */}
      <div
        ref={copyRef}
        className="pointer-events-none absolute bottom-[max(5rem,calc(3.5rem+var(--safe-bottom)))] right-5 z-10 w-[min(22rem,calc(100%-2.5rem))] md:bottom-24 md:right-12 md:w-[min(24rem,42vw)] lg:right-16"
      >
        <div className="flex flex-col items-end text-right">
          <p
            data-hero-fade
            className="font-subtitle text-[13px] leading-relaxed text-ink/55 md:text-sm"
          >
            {t("blurb")}
          </p>
          <div
            data-hero-fade
            className="pointer-events-auto mt-4 flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-2.5"
          >
            <Magnetic strength={0.28} className="w-full sm:w-auto">
              <Link
                href="/work"
                className="inline-flex w-full min-h-10 items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ink-fg sm:w-auto"
              >
                {t("ctaWork")}
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.26} className="w-full sm:w-auto">
              <Link
                href={{ pathname: "/", hash: "contact" }}
                className="inline-flex w-full min-h-10 items-center justify-center rounded-full border border-ink/15 bg-surface/75 px-5 py-2.5 text-sm font-bold text-ink backdrop-blur-sm sm:w-auto"
              >
                {t("ctaContact")}
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>

      <a
        ref={cueRef}
        href="#projects"
        className="absolute bottom-[max(1.25rem,calc(0.75rem+var(--safe-bottom)))] left-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3.5 py-2 text-xs font-semibold text-ink/70 backdrop-blur-sm transition-colors hover:bg-ink/10 hover:text-ink md:bottom-8 md:left-16 md:bg-transparent md:px-0 md:py-0 md:text-sm md:font-medium md:text-lime md:backdrop-blur-none"
      >
        {t("scroll")}
        <span aria-hidden className="md:ml-0.5">
          ↓
        </span>
      </a>
    </section>
  );
}
