"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

/**
 * Sinematik açılış perdesi.
 * - `data-intro="play"` (layout inline script) olduğunda oynar; aksi halde
 *   ilk boyamadan itibaren CSS ile gizli (FOUC yok).
 * - Oturum başına bir kez (sessionStorage). `?intro` ile yeniden tetiklenir.
 * - reduced-motion'da hiç gösterilmez. JS çalışmazsa CSS failsafe temizler.
 */
export default function Intro() {
  const t = useTranslations("hero");
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

      // Perde bu yüklemede oynamıyorsa sessizce kaldır.
      if (document.documentElement.dataset.intro !== "play") {
        setVisible(false);
        window.dispatchEvent(new Event("metek:intro-done"));
        return;
      }

      try {
        sessionStorage.setItem("metek-intro", "1");
      } catch {
        /* private mode */
      }

      const html = document.documentElement;
      html.classList.add("intro-lock");
      window.__lenis?.stop();

      // Scroll'u overflow:hidden yerine event ile kilitle — scrollbar kalır,
      // layout genişliği değişmez, perde kalkınca zıplama olmaz.
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
        if (tag === "INPUT" || tag === "TEXTAREA" || el?.isContentEditable) return;
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
        window.__lenis?.start();
        ScrollTrigger.refresh();
        setVisible(false);
        // Hero 3D'nin intro sırasında rekabet etmeden mount olması için
        window.dispatchEvent(new Event("metek:intro-done"));
      };

      gsap.set([labelLRef.current, labelRRef.current], { opacity: 0, y: 10 });
      gsap.set(markRef.current, { opacity: 0, y: 18 });
      gsap.set(dotRef.current, { opacity: 0, scale: 0, transformOrigin: "50% 60%" });
      gsap.set(hairRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: finish,
      });

      tl.to(
        [labelLRef.current, labelRRef.current],
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
        0.15
      )
        .to(markRef.current, { opacity: 1, y: 0, duration: 0.75 }, 0.28)
        .to(
          dotRef.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2.4)" },
          0.82
        )
        .to(
          hairRef.current,
          { scaleX: 1, duration: 1.45, ease: "power1.inOut" },
          0.25
        )
        .to(
          proxy,
          {
            v: 100,
            duration: 1.45,
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
          0.25
        )
        // kısa duruş
        .to({}, { duration: 0.22 })
        // çıkış — perde yukarı kalkar, lime çizgi ekranı süpürür
        .to(
          [markRef.current, labelLRef.current, labelRRef.current],
          { opacity: 0, duration: 0.4, ease: "power2.in" },
          ">"
        )
        .to(
          markRef.current,
          { scale: 1.08, duration: 0.75, ease: "power3.inOut" },
          "<"
        )
        .to(
          root,
          { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "<0.08"
        );

      // "M" kendi ekseninde tam bir tur döner (nokta sabit çıpa kalır).
      // Mutlak konum — çıkış zamanlamasını bozmadan araya girer.
      tl.to(
        mRef.current,
        { rotationY: 360, duration: 1.3, ease: "power2.inOut" },
        0.55
      );

      return () => {
        tl.kill();
        unlock();
      };
    },
    { scope: rootRef }
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

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-5 pb-6 md:px-10 md:pb-8">
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
