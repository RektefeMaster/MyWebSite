"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import BrandMark from "./BrandMark";
import LanguageSwitcher from "./LanguageSwitcher";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee";
import ThemeToggle from "./ThemeToggle";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { attachNavOffsetSync } from "@/lib/nav-scroll";

type NavHref =
  | "/"
  | "/manifesto"
  | "/work"
  | "/approach"
  | "/services"
  | "/blog"
  | { pathname: "/"; hash: string };

/** Glass header + altında accent şerit — sayfa rotaları */
export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const shellRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Hero nav: İşler · Hizmetler · Notlar · Biz kimiz
  const links: { href: NavHref; label: string; match?: string }[] = [
    { href: "/work", label: t("work"), match: "/work" },
    { href: "/services", label: t("services"), match: "/services" },
    { href: "/blog", label: t("notes"), match: "/blog" },
    { href: "/manifesto", label: t("about"), match: "/manifesto" },
  ];

  const navEntered = useRef(false);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    return attachNavOffsetSync(shell);
  }, []);

  useGSAP(() => {
    const shell = shellRef.current;
    const header = headerRef.current;
    const progress = progressRef.current;
    if (!shell || !header) return;

    const mm = gsap.matchMedia();
    const setProgress = progress
      ? gsap.quickSetter(progress, "scaleX")
      : null;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Yalnızca ilk mount'ta giriş animasyonu — her rota değişiminde
      // opacity:0'dan yeniden oynamasın (M. ile ana sayfaya dönüşte “boş header”).
      if (!navEntered.current) {
        navEntered.current = true;
        gsap.from(shell, {
          y: -16,
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
          delay: 0.08,
          onComplete: () => {
            gsap.set(shell, { clearProps: "opacity,transform" });
          },
        });
      } else {
        gsap.set(shell, { clearProps: "opacity,transform" });
      }

      let scrolled = header.classList.contains("is-scrolled");
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setProgress?.(self.progress);
          const next = self.scroll() > 20;
          if (next === scrolled) return;
          scrolled = next;
          header.classList.toggle("is-scrolled", next);
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      let scrolled = header.classList.contains("is-scrolled");
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setProgress?.(self.progress);
          const next = self.scroll() > 20;
          if (next === scrolled) return;
          scrolled = next;
          header.classList.toggle("is-scrolled", next);
        },
      });
    });

    return () => mm.revert();
    // pathname’e bağlama — her soft-nav’de ST recreate + giriş animasyonu yarışı
  }, []);

  return (
    <div
      ref={shellRef}
      data-nav-shell
      className="fixed inset-x-0 top-0 z-[100] max-w-[100vw] overflow-x-clip"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <header ref={headerRef} className="nav-shell">
        <div className="nav-glass border-b">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-1.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 md:gap-4 md:px-10 md:py-4">
            <BrandMark />

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:gap-1 lg:flex">
              {links.map((link) => {
                const isActive = Boolean(
                  link.match &&
                    (link.match === "/"
                      ? pathname === "/"
                      : pathname === link.match ||
                        pathname.startsWith(`${link.match}/`))
                );
                const key =
                  typeof link.href === "string"
                    ? link.href
                    : `${link.href.pathname}#${link.href.hash}`;
                return (
                  <Link
                    key={key}
                    href={link.href}
                    scroll={false}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-semibold tracking-tight transition-colors xl:px-3 xl:text-[13px] ${
                      isActive
                        ? "bg-ink text-ink-fg"
                        : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex min-w-0 shrink-0 items-center gap-0.5 sm:gap-1.5 md:gap-2.5">
              <ThemeToggle />
              <LanguageSwitcher />
              <Magnetic strength={0.18}>
                <Link
                  href={{ pathname: "/", hash: "contact" }}
                  scroll={false}
                  aria-label={t("cta")}
                  className="btn-sheen btn-stable inline-flex min-h-10 shrink-0 rounded-full bg-accent px-2.5 py-2 text-xs font-bold text-on-accent sm:px-3.5 md:min-h-0 md:px-5 md:py-2.5 md:text-sm"
                >
                  <span className="sm:hidden" aria-hidden="true">
                    {t("ctaShort")}
                  </span>
                  <span className="hidden sm:inline" aria-hidden="true">
                    {t("cta")}
                  </span>
                </Link>
              </Magnetic>
            </div>
          </nav>

          <div className="nav-mobile-rail flex gap-1.5 overflow-x-auto border-t border-hairline px-4 py-2.5 lg:hidden">
            {links.map((link) => {
              const isActive = Boolean(
                link.match &&
                  (link.match === "/"
                    ? pathname === "/"
                    : pathname === link.match ||
                      pathname.startsWith(`${link.match}/`))
              );
              const key =
                typeof link.href === "string"
                  ? `m-${link.href}`
                  : `m-${link.href.pathname}#${link.href.hash}`;
              return (
                <Link
                  key={key}
                  href={link.href}
                  scroll={false}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors touch-manipulation ${
                    isActive
                      ? "bg-ink text-ink-fg"
                      : "bg-foreground/[0.04] text-ink/60 active:bg-foreground/[0.08]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          ref={progressRef}
          aria-hidden
          className="h-[2px] origin-left scale-x-0 bg-ink"
        />
      </header>

      <Marquee variant="header" />
    </div>
  );
}
