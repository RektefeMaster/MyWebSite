"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations, useLocale } from "next-intl";
import { preload } from "react-dom";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";
import { gsap, useGSAP } from "@/lib/gsap";

/** Chunk'ı erken çek — intro ısınmasında mount anında hazır olsun */
const loadHeroScene = () => import("./HeroScene");
if (typeof window !== "undefined") {
  void loadHeroScene();
}

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
  const cueRef = useRef<HTMLAnchorElement>(null);
  /** Parked iken sahne kapalı; görünürken IntersectionObserver yönetir */
  const [inView, setInView] = useState(true);
  const sceneActive = !parked && inView;
  const mountedAt = useRef(0);
  /**
   * Intro oynarken WebGL'i ertele (GPU yarışı yok).
   * data-intro / warm event / failsafe ile mount.
   */
  const introSkip = useSyncExternalStore(
    subscribeIntroSkip,
    getIntroSkip,
    () => false
  );
  const [warmMount, setWarmMount] = useState(false);
  const sceneMounted = introSkip || warmMount;

  // 3D başlık — tam Türkçe glif desteği
  preload("/fonts/SpaceGrotesk-Bold.ttf", {
    as: "font",
    type: "font/ttf",
    crossOrigin: "anonymous",
  });

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

    // Park'tan dönüş: bir sonraki frame'de aktif — IO gecikmesi boş frame üretmesin
    const resume = requestAnimationFrame(() => {
      mountedAt.current = performance.now();
      setInView(true);
    });

    const el = sectionRef.current;
    if (!el) {
      return () => cancelAnimationFrame(resume);
    }

    // Soft-nav'da scroll henüz tepeye gelmeden IO "görünmüyor" deyip frameloop'u
    // kesmesin — ilk ~900ms grace ile active=true koru.
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
      { rootMargin: "25% 0px", threshold: 0.01 }
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
      const cue = cueRef.current;
      if (!copy) return;

      const nodes = copy.querySelectorAll<HTMLElement>("[data-hero-fade]");
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([nodes, cue].filter(Boolean), {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Soft-nav / dönen ziyaretçi: giriş animasyonu YOK — anında görünür
        // (aksi halde 0.55–0.95s boş CTA/blurb + “header boş” hissi).
        const softReturn =
          document.documentElement.dataset.intro === "skip";
        const alreadyShown = [...nodes].some(
          (n) => Number.parseFloat(getComputedStyle(n).opacity) > 0.9
        );
        if (softReturn || alreadyShown) {
          gsap.set(nodes, { clearProps: "opacity,transform", opacity: 1, y: 0 });
          if (cue) {
            gsap.set(cue, { clearProps: "opacity,transform", opacity: 1, y: 0 });
          }
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
            delay: 0.55,
            ease: "power2.out",
            overwrite: true,
            onComplete: () => {
              gsap.set(nodes, { clearProps: "opacity,transform" });
            },
          }
        );
        if (cue) {
          gsap.fromTo(
            cue,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              delay: 0.95,
              ease: "power2.out",
              overwrite: true,
              onComplete: () => {
                gsap.set(cue, { clearProps: "opacity,transform" });
              },
            }
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [locale] }
  );

  // Scroll cue bob — yalnızca hero görünürken ve fine pointer'da
  useEffect(() => {
    const cue = cueRef.current;
    if (!cue) return;

    if (!sceneActive) {
      gsap.killTweensOf(cue);
      gsap.set(cue, { y: 0 });
      return;
    }

    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        const bob = gsap.to(cue, {
          y: 6,
          duration: 1.35,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        });
        return () => bob.kill();
      }
    );
    return () => mm.revert();
  }, [sceneActive]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100svh] max-h-[1100px] min-h-[560px] overflow-hidden bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]"
    >
      {sceneMounted ? (
        <HeroScene
          lines={[t("line1"), t("line2"), t("line3")]}
          active={sceneActive}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#dedede] to-[#c6c6c6] dark:from-[#1c1b18] dark:via-[#141311] dark:to-[#0c0b0a]" />
      )}

      {/* Sinematik atmosfer — canvas üstünde, metnin altında */}
      <div
        aria-hidden
        data-atmosphere-idle={!sceneActive}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <div className="hero-glow" />
        <div className="hero-vignette" />
        <div className="hero-grain" />
      </div>

      {/* Üst-sol: stüdyo künyesi — mobilde de görünür (profesyonellik) */}
      <div
        data-hero-fade
        className="pointer-events-none absolute left-5 top-[calc(var(--nav-offset)+0.65rem)] z-10 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-ink/45 sm:text-[11px] md:left-16 md:top-[calc(var(--nav-offset)+1rem)] md:tracking-[0.18em]"
      >
        <span className="text-lime">●</span> {t("metaStudio")}
        <br />
        {t("metaLocation")}
      </div>

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
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <SpecularButton
                href="/work"
                tone="ink"
                size="md"
                fillMobile
                className="btn-stable btn-stable--hero group"
              >
                {t("ctaWork")}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </SpecularButton>
            </Magnetic>
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
          </div>
        </div>
      </div>

      <a
        ref={cueRef}
        href="#projects"
        className="absolute bottom-[max(1.25rem,calc(0.75rem+var(--safe-bottom)))] left-5 z-10 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-ink/5 px-3.5 py-2 text-xs font-semibold text-ink/70 backdrop-blur-sm transition-colors touch-manipulation hover:bg-ink/10 hover:text-ink md:bottom-8 md:left-16 md:min-h-0 md:bg-transparent md:px-0 md:py-0 md:text-sm md:font-medium md:text-lime md:backdrop-blur-none"
      >
        {t("scroll")}
        <span aria-hidden className="md:ml-0.5">
          ↓
        </span>
      </a>
    </section>
  );
}
