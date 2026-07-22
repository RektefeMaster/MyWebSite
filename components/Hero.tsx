"use client";

import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { preload } from "react-dom";
import { Link } from "@/i18n/navigation";
import Magnetic from "./Magnetic";
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

export default function Hero({ parked = false }: { parked?: boolean }) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLAnchorElement>(null);
  const [active, setActive] = useState(true);
  /** Parked iken sahne kapalı; görünürken IntersectionObserver yönetir */
  const sceneActive = !parked && active;
  /**
   * Intro oynarken WebGL'i ertele (GPU yarışı yok).
   * İlk state her zaman false — SSR/client hydrate eşleşsin (React #418).
   * Keep-alive sonrası park/çözülmede WebGL zaten mount; useLayoutEffect no-op.
   */
  const [sceneMounted, setSceneMounted] = useState(false);
  const mountedAt = useRef(
    typeof performance !== "undefined" ? performance.now() : 0
  );

  // 3D başlık — tam Türkçe glif desteği
  preload("/fonts/SpaceGrotesk-Bold.ttf", {
    as: "font",
    type: "font/ttf",
    crossOrigin: "anonymous",
  });

  useLayoutEffect(() => {
    mountedAt.current = performance.now();
    if (document.documentElement.dataset.intro !== "play") {
      setSceneMounted(true);
    }
  }, []);

  useEffect(() => {
    if (parked) {
      setActive(false);
      return;
    }
    // Park'tan dönüş: hemen aktif — IO gecikmesi boş frame üretmesin
    setActive(true);
    mountedAt.current = performance.now();

    const el = sectionRef.current;
    if (!el) return;
    // Soft-nav'da scroll henüz tepeye gelmeden IO "görünmüyor" deyip frameloop'u
    // kesmesin — ilk ~900ms grace ile active=true koru.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const age = performance.now() - mountedAt.current;
        if (!entry.isIntersecting && age < 900) {
          setActive(true);
          return;
        }
        setActive(entry.isIntersecting);
      },
      { rootMargin: "25% 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [parked]);

  useEffect(() => {
    if (sceneMounted) return;
    if (document.documentElement.dataset.intro !== "play") {
      setSceneMounted(true);
      return;
    }

    let cancelled = false;
    let failsafe = 0;
    const mount = () => {
      if (!cancelled) setSceneMounted(true);
    };
    const onWarm = () => mount();
    window.addEventListener("metek:hero-warm", onWarm);
    failsafe = window.setTimeout(mount, 3200);

    return () => {
      cancelled = true;
      window.removeEventListener("metek:hero-warm", onWarm);
      window.clearTimeout(failsafe);
    };
  }, [sceneMounted]);

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
            <Magnetic strength={0.28} className="w-full sm:w-auto">
              <Link
                href="/work"
                className="btn-sheen btn-stable btn-stable--hero group inline-flex w-full min-h-11 gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ink-fg touch-manipulation sm:w-auto sm:min-h-10"
              >
                {t("ctaWork")}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.26} className="w-full sm:w-auto">
              <Link
                href={{ pathname: "/", hash: "contact" }}
                className="btn-stable btn-stable--hero inline-flex w-full min-h-11 rounded-full border border-ink/15 bg-surface/75 px-5 py-2.5 text-sm font-bold text-ink backdrop-blur-sm touch-manipulation sm:w-auto sm:min-h-10"
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
