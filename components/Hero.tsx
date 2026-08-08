"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroWall from "./HeroWall";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";
import { gsap, useGSAP } from "@/lib/gsap";
import { loadHeroScene } from "@/lib/load-hero-scene";

/** Prefetch tetikleri için re-export — HomeHeroKeepAlive / Intro. */
export { loadHeroScene };

/* Yükleme yer tutucusu yok: arkada HeroWall zaten duruyor, opak bir gradient
   basmak duvarı sahne hazır olana kadar gizliyordu. */
const HeroScene = dynamic(loadHeroScene, { ssr: false });

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
  /*
    Sahne artık `introSkip` ile ANINDA mount olmuyor. WebGL context kurulumu +
    transmission FBO bake'i ilk boyamayla aynı karelere denk geliyordu; arkada
    HeroWall hazır durduğu için beklemenin görsel maliyeti yok. Perde
    oynuyorsa eskisi gibi "metek:hero-warm" ile, oynamıyorsa idle'da mount.
  */
  const sceneMounted = warmMount;

  useEffect(() => {
    if (warmMount || parked) return;
    const mount = () => setWarmMount(true);
    window.addEventListener("metek:hero-warm", mount);

    // Perde atlandıysa (tekrar ziyaret) idle'ı bekle
    const ric = window.requestIdleCallback as
      | typeof window.requestIdleCallback
      | undefined;
    let handle = 0;
    let timer = 0;
    if (introSkip) {
      if (ric) handle = ric(mount, { timeout: 2000 });
      else timer = window.setTimeout(mount, 700);
    } else {
      timer = window.setTimeout(mount, 3200); // failsafe
    }

    return () => {
      window.removeEventListener("metek:hero-warm", mount);
      if (handle) window.cancelIdleCallback(handle);
      if (timer) window.clearTimeout(timer);
    };
  }, [introSkip, warmMount, parked]);

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
      className="hero-section relative flex h-[100svh] max-h-[1100px] min-h-[560px] flex-col overflow-x-clip overflow-y-hidden bg-background"
    >
      {/*
        Zemin: gerçek proje ekranlarından oluşan sürüklenen duvar. Cam "M"
        bunun ÜSTÜNDE duruyor — HeroScene canvas'ı bu yüzden şeffaf
        (alpha:true + clearAlpha 0, scene.background yok). Duvar görüş
        dışına çıkınca `idle` ile duruyor.
      */}
      <HeroWall idle={!sceneActive} />

      {sceneMounted ? <HeroScene active={sceneActive} /> : null}

      <div
        aria-hidden
        data-atmosphere-idle={!sceneActive}
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <div className="hero-grid" />
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
          <span className="text-accent-ink">●</span> {t("metaStudio")}
        </div>

        <div
          data-hero-fade
          className="flex min-h-0 flex-1 items-start justify-center px-4 pt-[7svh] sm:px-5 md:pointer-events-none md:absolute md:inset-x-12 md:top-1/2 md:-translate-y-1/2 md:flex-none md:items-center md:justify-start md:p-0 lg:inset-x-16"
        >
          {/*
            Mobil ölçek hero satır uzunluğuyla sınırlı (marka satırı
            "METEK Digital" = 13ch). max-md clamp ~%91; md+ korunuyor.
          */}
          <h1
            aria-label={`${t("line1")} ${t("line2")} ${t("line3")}`}
            className="mx-auto max-w-5xl text-center font-display text-[clamp(2.1rem,7.2vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.035em] text-ink [text-shadow:0_1px_18px_rgba(232,230,224,0.45)] dark:[text-shadow:0_2px_28px_rgba(12,11,10,0.7)] max-md:text-[clamp(1.85rem,8.4vw,3.1rem)] max-md:leading-[1.02] md:mx-0 md:max-w-[13ch] md:text-left md:text-[clamp(2.5rem,4.9vw,4.75rem)]"
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
                  className="mr-1.5 inline-block size-1.5 rounded-full bg-accent"
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
                {/* ogl SpecularButton içinde lazy — kalite tam, critical path şişmez */}
                <SpecularButton
                  href={{ pathname: "/", hash: "contact" }}
                  tone="accent"
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
                className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border border-[color:var(--chrome-edge)] bg-paper/90 px-5 text-sm font-semibold text-ink/80 shadow-[inset_0_1px_0_var(--chrome-shine)] transition-colors hover:border-ink/35 hover:text-ink sm:min-h-10 md:bg-paper/70 md:backdrop-blur-sm"
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
