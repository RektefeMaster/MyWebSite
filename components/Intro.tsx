"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

/**
 * Sinematik açılış perdesi — süre bilinçli uzun tutulur ki perde kalkmadan
 * hero + below-fold chunk’lar + fontlar ısınsın.
 * - `data-intro="play"` (layout inline script) → oynar; aksi halde CSS skip.
 * - Oturum başına bir kez; `?intro` ile yeniden.
 * - reduced-motion’da yok; JS yoksa CSS failsafe (~7.2s) temizler.
 */

function warmHomeChunks() {
  return Promise.allSettled([
    import("./HeroScene"),
    import("./ProjectStrip"),
    import("./Stats"),
    import("./Services"),
    import("./TechExpertise"),
    import("./WorkingPrinciples"),
    import("./Availability"),
    import("./Contact"),
    import("./Showcase"),
    import("./Clients"),
  ]);
}

function waitForEvent(name: string, timeoutMs: number) {
  return new Promise<void>((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      window.removeEventListener(name, onReady);
      resolve();
    };
    const onReady = () => done();
    const timeout = window.setTimeout(done, timeoutMs);
    window.addEventListener(name, onReady);
  });
}

export default function Intro() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const mRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const labelLRef = useRef<HTMLDivElement>(null);
  const labelRRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hairRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      if (document.documentElement.dataset.intro !== "play") {
        setVisible(false);
        window.dispatchEvent(new Event("metek:intro-done"));
        return;
      }

      const isHome = pathname === "/";
      // Chunk ısıtmayı timeline başında başlat — sayaç bitene kadar paralel
      const bootPromise = isHome
        ? warmHomeChunks()
        : Promise.allSettled([
            import("./Showcase"),
            document.fonts?.ready ?? Promise.resolve(),
          ]);

      try {
        sessionStorage.setItem("metek-intro", "1");
      } catch {
        /* private mode */
      }

      const html = document.documentElement;
      html.classList.add("intro-lock");
      window.__lenis?.stop();

      const preventScroll = (e: Event) => e.preventDefault();
      const SCROLL_KEYS = new Set([
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
        "Spacebar",
      ]);
      const preventKeys = (e: KeyboardEvent) => {
        const el = e.target as HTMLElement | null;
        const tag = el?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || el?.isContentEditable)
          return;
        if (SCROLL_KEYS.has(e.key)) e.preventDefault();
      };
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeys);

      const counter = counterRef.current;
      const proxy = { v: 0 };

      const unlock = () => {
        html.classList.remove("intro-lock");
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        window.removeEventListener("keydown", preventKeys);
      };

      const finish = () => {
        unlock();
        document.documentElement.dataset.intro = "skip";
        window.__lenis?.start();
        ScrollTrigger.refresh();
        setVisible(false);
        window.dispatchEvent(new Event("metek:intro-done"));
      };

      /** Sayaç sonrası: font + chunk + (home) WebGL hazır olana kadar bekle */
      const waitUntilBooted = () =>
        new Promise<void>((resolve) => {
          const fonts = document.fonts?.ready ?? Promise.resolve();
          const heroGate =
            isHome && !window.__metekHeroReady
              ? waitForEvent("metek:hero-ready", 2200)
              : Promise.resolve();

          void Promise.all([bootPromise, fonts, heroGate]).then(() => {
            // Bir frame boya — gradient flash’ı kes
            requestAnimationFrame(() => resolve());
          });

          // Sert tavan — mobilde daha kısa; ağ çok yavaşsa yine de aç
          const bootCap =
            window.matchMedia("(pointer: coarse)").matches ||
            window.matchMedia("(max-width: 768px)").matches
              ? 1200
              : 2800;
          window.setTimeout(() => resolve(), bootCap);
        });

      const mobileLite =
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(max-width: 768px)").matches;
      const countDur = mobileLite ? 1.35 : 2.55;
      const warmAt = mobileLite ? 0.7 : 1.35;
      const exitDur = mobileLite ? 0.75 : 1.05;

      gsap.set([labelLRef.current, labelRRef.current], { opacity: 0, y: 12 });
      gsap.set(markRef.current, { opacity: 0, y: 22 });
      gsap.set(dotRef.current, {
        opacity: 0,
        scale: 0,
        transformOrigin: "50% 60%",
      });
      gsap.set(hairRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: finish,
      });

      tl.to(
        [labelLRef.current, labelRRef.current],
        { opacity: 1, y: 0, duration: mobileLite ? 0.4 : 0.65, stagger: 0.08 },
        0.12
      )
        .to(
          markRef.current,
          { opacity: 1, y: 0, duration: mobileLite ? 0.55 : 0.9 },
          0.2
        )
        .to(
          dotRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "back.out(2.4)",
          },
          mobileLite ? 0.55 : 1.05
        )
        .to(
          hairRef.current,
          { scaleX: 1, duration: countDur, ease: "power1.inOut" },
          0.2
        )
        .to(
          proxy,
          {
            v: 100,
            duration: countDur,
            ease: "power1.inOut",
            onUpdate: () => {
              if (counter) {
                counter.textContent = String(Math.round(proxy.v)).padStart(
                  3,
                  "0"
                );
              }
            },
          },
          0.2
        )
        // Sayaç ortasında WebGL + mid-fold ısınması
        .add(() => {
          if (isHome) {
            window.dispatchEvent(new Event("metek:hero-warm"));
          }
        }, warmAt)
        // 100’de kısa nefes + boot senkronu
        .to({}, { duration: mobileLite ? 0.15 : 0.35 })
        .add(() => {
          tl.pause();
          void waitUntilBooted().then(() => {
            if (tl.paused()) tl.resume();
          });
        })
        // Çıkış — marka büyür, perde yukarı
        .to(
          [markRef.current, labelLRef.current, labelRRef.current],
          { opacity: 0, duration: mobileLite ? 0.35 : 0.5, ease: "power2.in" }
        )
        .to(
          markRef.current,
          {
            scale: 1.1,
            duration: mobileLite ? 0.65 : 0.95,
            ease: "power3.inOut",
          },
          "<"
        )
        .to(
          root,
          { yPercent: -100, duration: exitDur, ease: "power4.inOut" },
          "<0.1"
        );

      // "M" dönüşü — sayaçla örtüşen daha yavaş tur
      tl.to(
        mRef.current,
        {
          rotationY: 360,
          duration: mobileLite ? 1.1 : 1.85,
          ease: "power2.inOut",
        },
        mobileLite ? 0.35 : 0.7
      );

      return () => {
        tl.kill();
        unlock();
        document.documentElement.dataset.intro = "skip";
        window.__lenis?.start();
      };
    },
    // pathname’e bağlama — soft-nav intro’yu yeniden başlatmasın / Lenis’i kilitli bırakmasın
    { scope: rootRef, dependencies: [] }
  );

  if (!visible) return null;

  return (
    <div ref={rootRef} className="intro-root" role="presentation" aria-hidden>
      <div className="hero-glow" />
      <div className="hero-vignette" />
      <div className="hero-grain" />

      <div
        ref={markRef}
        className="brand-mark relative z-10 flex select-none items-center text-[27vw] leading-none tracking-tight md:text-[17vw]"
        style={{ opacity: 0, perspective: "1000px" }}
      >
        <span ref={mRef} className="inline-block will-change-transform">
          M
        </span>
        <span
          ref={dotRef}
          className="inline-block text-[#d0ec5a]"
          style={{ opacity: 0 }}
        >
          .
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:px-10 md:pb-8">
        <div ref={labelLRef} style={{ opacity: 0 }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4f2ec] md:text-xs">
            METEK Digital
          </p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[#f4f2ec]/45 md:text-[11px]">
            {t("metaStudio")}
          </p>
        </div>
        <div
          ref={labelRRef}
          className="font-mono text-xs tracking-[0.2em] text-[#f4f2ec]/70 md:text-sm"
          style={{ opacity: 0 }}
        >
          <span ref={counterRef}>000</span>
        </div>
      </div>

      <div
        ref={hairRef}
        className="absolute inset-x-0 bottom-0 z-10 h-[2px] origin-left bg-[#d0ec5a]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
