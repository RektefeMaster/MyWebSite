"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";
import { usePathname } from "@/i18n/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function navOffsetPx() {
  const shell = document.querySelector<HTMLElement>("[data-nav-shell]");
  return shell?.getBoundingClientRect().height ?? 120;
}

function hashFromHref(href: string | null): string | null {
  if (!href || href === "#") return null;
  if (href.startsWith("#") && href.length > 1) return href;

  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    if (!url.hash || url.hash === "#") return null;
    return url.hash;
  } catch {
    return null;
  }
}

function isSameDocumentHashLink(href: string, hash: string): boolean {
  if (href.startsWith("#")) return true;
  try {
    const url = new URL(href, window.location.href);
    return (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname &&
      url.hash === hash
    );
  } catch {
    return false;
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 768px)").matches;
    const useLenis = !reduced && !coarse && !narrow;
    reducedRef.current = reduced;

    let onLenisScroll: (() => void) | null = null;
    let tick: ((time: number) => void) | null = null;
    let t1 = 0;
    let t2 = 0;
    let t3 = 0;
    let cancelled = false;
    const onLoad = () => ScrollTrigger.refresh();

    const scrollToHash = (hash: string, smooth: boolean) => {
      const el = document.querySelector(hash);
      if (!el) return false;
      const offset = navOffsetPx() + 8;
      const lenis = lenisRef.current;

      if (lenis) {
        const target =
          lenis.scroll +
          (el as HTMLElement).getBoundingClientRect().top -
          offset;
        lenis.scrollTo(target, {
          duration: smooth ? 1.05 : 0,
          immediate: !smooth,
        });
        return true;
      }

      const top =
        el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: smooth && !reducedRef.current ? "smooth" : "auto",
      });
      return true;
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;

      const target = (e.target as HTMLElement | null)?.closest(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!target || target.target === "_blank" || target.hasAttribute("download"))
        return;

      const href = target.getAttribute("href");
      const hash = hashFromHref(href);
      if (!hash || !href) return;

      // Aynı sayfa hash: Lenis/native offset ile biz kaydır
      if (isSameDocumentHashLink(href, hash)) {
        const el = document.querySelector(hash);
        if (!el) return;
        e.preventDefault();
        if (`${window.location.pathname}${window.location.hash}` !== `${window.location.pathname}${hash}`) {
          window.history.pushState(null, "", hash);
        }
        scrollToHash(hash, !reducedRef.current);
      }
      // Cross-page hash: Next navigasyonu yapsın; pathname effect offset uygular
    };

    document.addEventListener("click", onClick, true);

    const onHashChange = () => {
      if (!window.location.hash) return;
      scrollToHash(window.location.hash, !reducedRef.current);
    };
    window.addEventListener("hashchange", onHashChange);

    if (useLenis) {
      void (async () => {
        try {
          const [{ default: LenisCtor }] = await Promise.all([
            import("lenis"),
            import("lenis/dist/lenis.css"),
          ]);
          if (cancelled) return;

          const lenis = new LenisCtor({
            duration: 1.05,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.05,
            wheelMultiplier: 1,
          });
          lenisRef.current = lenis;
          window.__lenis = lenis;
          gsap.ticker.lagSmoothing(0);

          onLenisScroll = () => {
            ScrollTrigger.update();
          };
          lenis.on("scroll", onLenisScroll);

          tick = (time: number) => {
            lenis.raf(time * 1000);
          };
          gsap.ticker.add(tick);

          const refresh = () => ScrollTrigger.refresh();
          t1 = window.setTimeout(refresh, 100);
          t2 = window.setTimeout(refresh, 600);
          t3 = window.setTimeout(refresh, 1400);
          void document.fonts?.ready.then(refresh);
          window.addEventListener("load", onLoad);

          if (window.location.hash) {
            scrollToHash(window.location.hash, false);
          }
        } catch {
          lenisRef.current = null;
        }
      })();
    } else if (window.location.hash) {
      scrollToHash(window.location.hash, false);
    }

    return () => {
      cancelled = true;
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.removeEventListener("load", onLoad);
      const lenis = lenisRef.current;
      if (lenis && onLenisScroll) lenis.off("scroll", onLenisScroll);
      if (tick) gsap.ticker.remove(tick);
      if (lenis) {
        gsap.ticker.lagSmoothing(500, 33);
        lenis.destroy();
        if (window.__lenis === lenis) delete window.__lenis;
      }
      lenisRef.current = null;
    };
  }, []);

  // Rota değişince: hash yoksa en üste; hash varsa hedefe (örn. /work → /#contact)
  useEffect(() => {
    const hash = window.location.hash;
    const lenis = lenisRef.current;

    const scrollTop = () => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
      ScrollTrigger.refresh();
    };

    if (!hash || hash === "#") {
      scrollTop();
      const timers = [50, 200].map((ms) =>
        window.setTimeout(scrollTop, ms)
      );
      return () => timers.forEach((id) => window.clearTimeout(id));
    }

    const run = () => {
      const el = document.querySelector(hash);
      if (!el) return;
      const offset = navOffsetPx() + 8;
      const current = lenisRef.current;

      if (current) {
        const target =
          current.scroll +
          (el as HTMLElement).getBoundingClientRect().top -
          offset;
        current.scrollTo(target, {
          duration: 0,
          immediate: true,
        });
        return;
      }

      const top =
        el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "auto",
      });
    };

    run();
    const timers = [50, 200, 450, 900].map((ms) =>
      window.setTimeout(run, ms)
    );
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [pathname]);

  return children;
}
