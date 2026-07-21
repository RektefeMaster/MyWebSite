"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import MetekLoader from "@/components/MetekLoader";
import { ScrollTrigger } from "@/lib/gsap";

/** Hızlı geçişlerde perde yok — sadece bu süre aşılırsa göster */
const SHOW_AFTER_MS = 520;
const MIN_VISIBLE_MS = 300;
const MAX_VISIBLE_MS = 2200;

function introPlaying() {
  return document.documentElement.dataset.intro === "play";
}

function isInternalPageNav(anchor: HTMLAnchorElement): boolean {
  if (
    anchor.target === "_blank" ||
    anchor.hasAttribute("download") ||
    anchor.getAttribute("rel")?.includes("external")
  ) {
    return false;
  }

  const href = anchor.getAttribute("href");
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("sms:") ||
    href.startsWith("whatsapp:") ||
    href.startsWith("javascript:")
  ) {
    return false;
  }

  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    if (
      url.pathname === window.location.pathname &&
      url.search === window.location.search
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Yalnızca yavaş / takılan soft-nav ve geri dönüşlerde markalı perde.
 * ~520ms içinde sayfa oturursa hiç görünmez.
 */
export default function RouteTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const pending = useRef(false);
  const shownAt = useRef(0);
  const showTimer = useRef(0);
  const hideTimer = useRef(0);
  const maxTimer = useRef(0);
  const pathBoot = useRef(true);

  const reveal = () => {
    if (!pending.current || introPlaying()) return;
    window.clearTimeout(maxTimer.current);
    shownAt.current = performance.now();
    setActive(true);
    maxTimer.current = window.setTimeout(() => {
      pending.current = false;
      shownAt.current = 0;
      setActive(false);
    }, MAX_VISIBLE_MS);
  };

  const arm = () => {
    if (introPlaying()) return;
    pending.current = true;
    window.clearTimeout(showTimer.current);
    window.clearTimeout(hideTimer.current);
    // Zaten görünürse yeniden arm etme — sadece pending tut
    if (shownAt.current) return;
    showTimer.current = window.setTimeout(reveal, SHOW_AFTER_MS);
  };

  const settle = () => {
    pending.current = false;
    window.clearTimeout(showTimer.current);
    window.clearTimeout(maxTimer.current);

    if (!shownAt.current) {
      // Hiç gösterilmedi → sessizce bit
      return;
    }

    const elapsed = performance.now() - shownAt.current;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      shownAt.current = 0;
      setActive(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
    }, wait);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const a = (e.target as HTMLElement | null)?.closest(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!a || !isInternalPageNav(a)) return;
      arm();
    };

    const onPop = () => arm();
    const onPending = () => arm();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    window.addEventListener("metek:route-pending", onPending);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("metek:route-pending", onPending);
      window.clearTimeout(showTimer.current);
      window.clearTimeout(hideTimer.current);
      window.clearTimeout(maxTimer.current);
    };
  }, []);

  useEffect(() => {
    if (pathBoot.current) {
      pathBoot.current = false;
      return;
    }
    settle();
  }, [pathname]);

  if (!active) return null;

  return (
    <div
      className="route-loader"
      role="presentation"
      aria-busy="true"
      aria-hidden={false}
    >
      <MetekLoader />
    </div>
  );
}
