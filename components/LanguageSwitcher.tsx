"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  bumpNavGeneration,
  scheduleScrollTriggerRefresh,
  scrollToElement,
} from "@/lib/nav-scroll";

const SUFFIX_KEY = "metek-locale-suffix";

export default function LanguageSwitcher() {
  const t = useTranslations("a11y");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const boot = useRef(true);

  // Locale settle sonrası hash/search’ü geri yaz — tek rAF yetmiyordu
  useEffect(() => {
    if (boot.current) {
      boot.current = false;
      return;
    }
    let suffix = "";
    try {
      suffix = sessionStorage.getItem(SUFFIX_KEY) ?? "";
      sessionStorage.removeItem(SUFFIX_KEY);
    } catch {
      /* private mode */
    }
    if (!suffix) {
      scheduleScrollTriggerRefresh(160);
      return;
    }

    const apply = () => {
      const next = `${window.location.pathname}${suffix}`;
      const cur = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (cur !== next) {
        window.history.replaceState(null, "", next);
      }
      window.dispatchEvent(new Event("metek:lazy-reveal"));
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const el = document.querySelector(hash);
        if (el) {
          bumpNavGeneration();
          scrollToElement(el, { immediate: true });
        }
      }
      scheduleScrollTriggerRefresh(160);
    };

    const t1 = window.setTimeout(apply, 40);
    const t2 = window.setTimeout(apply, 260);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [locale]);

  return (
    <div
      className="flex shrink-0 items-center gap-0 rounded-full bg-foreground/[0.06] p-0.5 sm:gap-0.5 sm:p-1"
      role="group"
      aria-label={t("language")}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => {
            if (l === locale) return;
            window.dispatchEvent(new Event("metek:route-pending"));
            const hash = window.location.hash;
            const search = window.location.search;
            try {
              if (hash || search) {
                sessionStorage.setItem(SUFFIX_KEY, `${search}${hash}`);
              } else {
                sessionStorage.removeItem(SUFFIX_KEY);
              }
            } catch {
              /* private mode */
            }
            router.replace(pathname, { locale: l });
          }}
          aria-pressed={l === locale}
          className={`relative inline-flex min-h-11 min-w-10 items-center justify-center rounded-full text-[11px] font-bold uppercase transition-colors before:absolute before:inset-[-4px_-2px] before:content-[''] sm:min-w-11 sm:text-xs sm:before:content-none ${
            l === locale
              ? "bg-ink text-ink-fg"
              : "text-ink/55 [@media(hover:hover)_and_(pointer:fine)]:hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
