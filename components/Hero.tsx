"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Chunk'ı erken çek — intro ısınmasında mount anında hazır olsun.
 *
 * Modül kapsamında ÇAĞIRMA: Hero, layout'taki HomeHeroKeepAlive tarafından
 * statik import ediliyor; modül her rotada değerlendiği için three.js (~259KB
 * gzip) /blog, /services gibi 3D'siz sayfalarda da iniyordu. Tetiği
 * HomeHeroKeepAlive veriyor (ana sayfada hemen, diğerlerinde idle'da).
 */
export const loadHeroScene = () => import("./HeroScene");

const HeroScene = dynamic(loadHeroScene, {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]" />
  ),
});

function getIntroSkip() {
  return document.documentElement.dataset.intro !== "play";
}

function subscribeIntroSkip(onStoreChange: () => void) {
  const root = document.documentElement;
  const obs = new MutationObserver(onStoreChange);
  obs.observe(root, { attributes: true, attributeFilter: ["data-intro"] });
  return () => obs.disconnect();
}

export default function Hero({ parked = false }: { parked?: boolean }) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const sceneActive = !parked && inView;
  const mountedAt = useRef(0);
  const introSkip = useSyncExternalStore(
    subscribeIntroSkip,
    getIntroSkip,
    () => false
  );
  const [warmMount, setWarmMount] = useState(false);
  const sceneMounted = introSkip || warmMount;

  useEffect(() => {
    if (introSkip || warmMount) return;
    const mount = () => setWarmMount(true);
    window.addEventListener("metek:hero-warm", mount);
    const failsafe = window.setTimeout(mount, 3200);
    return () => {
      window.removeEventListener("metek:hero-warm", mount);
      window.clearTimeout(failsafe);
    };
  }, [introSkip, warmMount]);

  useEffect(() => {
    if (parked) return;

    const resume = requestAnimationFrame(() => {
      mountedAt.current = performance.now();
      setInView(true);
    });

    const el = sectionRef.current;
    if (!el) {
      return () => cancelAnimationFrame(resume);
    }

    // Mobil: sahne görüş dışına çıkınca hemen uyu (GPU). Desktop: soft-nav payı.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const age = performance.now() - mountedAt.current;
        if (!entry.isIntersecting && age < 900) {
          setInView(true);
          return;
        }
        setInView(entry.isIntersecting);
      },
      {
        rootMargin: coarse ? "0px 0px -10% 0px" : "25% 0px",
        threshold: 0.01,
      }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(resume);
      io.disconnect();
    };
  }, [parked]);

  useGSAP(
    () => {
      const copy = copyRef.current;
      if (!copy) return;

      const nodes = copy.querySelectorAll<HTMLElement>("[data-hero-fade]");
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(nodes, {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const softReturn =
          document.documentElement.dataset.intro === "skip";
        const alreadyShown = [...nodes].some(
          (n) => Number.parseFloat(getComputedStyle(n).opacity) > 0.9
        );
        if (softReturn || alreadyShown) {
          gsap.set(nodes, { clearProps: "opacity,transform", opacity: 1, y: 0 });
          return;
        }
        gsap.fromTo(
          nodes,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            delay: 0.35,
            ease: "power2.out",
            overwrite: true,
            onComplete: () => {
              gsap.set(nodes, { clearProps: "opacity,transform" });
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [locale] }
  );

  return (
    <section
      ref={sectionRef}
      id={parked ? undefined : "home"}
      className="hero-section relative flex h-[100svh] max-h-[1100px] min-h-[560px] flex-col overflow-x-clip overflow-y-hidden bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]"
    >
      {sceneMounted ? (
        <HeroScene active={sceneActive} />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]" />
      )}

      <div
        aria-hidden
        data-atmosphere-idle={!sceneActive}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <div className="hero-glow" />
        <div className="hero-vignette" />
        <div className="hero-grain" />
      </div>

      {/*
        Mobil: flex kolon — başlık her zaman nav altında, SE’de overlap yok.
        Desktop: absolute başlık (mevcut kompozisyon).
      */}
      <div
        ref={copyRef}
        className="relative z-[2] flex min-h-0 flex-1 flex-col pt-[calc(var(--nav-offset)+0.35rem)] md:contents"
      >
        <div
          data-hero-fade
          className="pointer-events-none absolute left-5 top-[calc(var(--nav-offset)+0.35rem)] z-10 hidden text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-ink/50 sm:block sm:text-[11px] md:left-16 md:top-[calc(var(--nav-offset)+0.75rem)] md:tracking-[0.18em]"
        >
          <span className="text-lime">●</span> {t("metaStudio")}
          <br />
          {t("metaLocation")}
        </div>

        <div
          data-hero-fade
          className="flex min-h-0 flex-1 items-start justify-center px-4 pt-[7svh] sm:px-5 md:pointer-events-none md:absolute md:inset-x-12 md:top-[34%] md:-translate-y-1/2 md:flex-none md:items-center md:p-0 lg:inset-x-16"
        >
          {/*
            Mobil ölçek DE kopyasıyla sınırlı ("Von der Idee / zum laufenden /
            Produkt." en uzun satır). max-md clamp ~%91 satır doluluğunda
            kalıyor; md+ üstünde masaüstü ölçeği aynen korunuyor.
          */}
          <h1
            aria-label={`${t("line1")} ${t("line2")} ${t("line3")}`}
            className="mx-auto max-w-5xl text-center font-display text-[clamp(2.1rem,7.2vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.03em] text-ink [text-shadow:0_1px_24px_rgba(245,245,245,0.55)] dark:[text-shadow:0_2px_30px_rgba(0,0,0,0.6)] max-md:text-[clamp(1.95rem,9vw,3.1rem)]"
          >
            <span className="block" aria-hidden>
              {t("line1")}
            </span>
            <span className="block" aria-hidden>
              {t("line2")}
            </span>
            <span className="block" aria-hidden>
              {t("line3")}
            </span>
          </h1>
        </div>

        <div className="pointer-events-none shrink-0 px-5 pb-[max(1rem,calc(0.5rem+var(--safe-bottom)))] md:absolute md:inset-x-12 md:bottom-10 md:px-0 lg:inset-x-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
            <div data-hero-fade className="max-w-md">
              <p className="text-[14px] leading-relaxed text-ink/65 md:text-[15px]">
                {t("blurb")}
              </p>
              <p className="mt-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40 md:mt-3">
                <span
                  className="mr-1.5 inline-block size-1.5 rounded-full bg-lime"
                  aria-hidden
                />
                {t("availability")}
              </p>
            </div>
            <div
              data-hero-fade
              className={`flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-3 ${
                parked ? "pointer-events-none" : "pointer-events-auto"
              }`}
            >
              <Magnetic strength={0.18} className="w-full sm:w-auto">
                <SpecularButton
                  href={{ pathname: "/", hash: "contact" }}
                  tone="lime"
                  size="md"
                  fillMobile
                  className="btn-stable btn-stable--hero"
                >
                  {t("ctaContact")}
                </SpecularButton>
              </Magnetic>
              <Link
                href={{ pathname: "/", hash: "work" }}
                scroll={false}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-ink/20 bg-paper/90 px-5 text-sm font-semibold text-ink/80 transition-colors hover:border-ink/35 hover:text-ink sm:min-h-10 md:bg-paper/70 md:backdrop-blur-sm"
              >
                {t("ctaWork")}
                <span aria-hidden>↘</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
