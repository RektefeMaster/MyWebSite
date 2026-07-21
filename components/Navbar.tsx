"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee";
import ThemeToggle from "./ThemeToggle";
import WhatsAppButton from "./WhatsAppButton";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { SITE } from "@/lib/site";

type NavHref =
  | "/"
  | "/manifesto"
  | "/work"
  | "/approach"
  | "/services"
  | "/blog"
  | { pathname: "/"; hash: string };

/** Glass header + altında lime şerit — sayfa rotaları */
export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const shellRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const links: { href: NavHref; label: string; match?: string }[] = [
    { href: "/", label: t("home"), match: "/" },
    { href: "/manifesto", label: t("manifesto"), match: "/manifesto" },
    { href: "/work", label: t("work"), match: "/work" },
    { href: "/approach", label: t("approach"), match: "/approach" },
    { href: "/services", label: t("services"), match: "/services" },
    { href: "/blog", label: t("blog"), match: "/blog" },
    {
      href: { pathname: "/", hash: "contact" },
      label: t("contact"),
    },
  ];

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
      gsap.from(shell, {
        y: -16,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        delay: 0.08,
        onComplete: () => {
          // Inline opacity/transform tema geçişinde takılı kalmasın
          gsap.set(shell, { clearProps: "opacity,transform" });
        },
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setProgress?.(self.progress);
          if (self.scroll() > 20) header.classList.add("is-scrolled");
          else header.classList.remove("is-scrolled");
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setProgress?.(self.progress);
          if (self.scroll() > 20) header.classList.add("is-scrolled");
          else header.classList.remove("is-scrolled");
        },
      });
    });

    return () => mm.revert();
  }, [pathname]);

  return (
    <div
      ref={shellRef}
      data-nav-shell
      className="fixed inset-x-0 top-0 z-[100] max-w-[100vw] overflow-x-clip"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <header ref={headerRef} className="nav-shell">
        <div className="nav-glass border-b">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-10 md:py-4">
            <Link
              href="/"
              className="brand-mark inline-flex min-h-11 min-w-11 shrink-0 items-center text-2xl leading-none tracking-tight text-foreground md:min-h-0 md:min-w-0 md:text-3xl"
              aria-label={SITE.brand}
            >
              M<span className="text-lime">.</span>
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
              {links.map((link) => {
                const isActive = Boolean(
                  link.match &&
                    (link.match === "/"
                      ? pathname === "/"
                      : pathname === link.match ||
                        pathname.startsWith(`${link.match}/`))
                );
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative rounded-full px-3 py-1.5 text-[13px] font-semibold tracking-tight transition-colors ${
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

            <div className="flex shrink-0 items-center gap-1.5 md:gap-2.5">
              <ThemeToggle />
              <LanguageSwitcher />
              <Magnetic strength={0.3} className="hidden sm:inline-block">
                <WhatsAppButton variant="nav" />
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href={{ pathname: "/", hash: "contact" }}
                  aria-label={t("cta")}
                  className="inline-flex min-h-10 items-center rounded-full bg-lime px-3.5 py-2 text-xs font-bold text-on-lime md:min-h-0 md:px-5 md:py-2.5 md:text-sm"
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
              return (
                <Link
                  key={`m-${link.label}`}
                  href={link.href}
                  className={`inline-flex min-h-8 shrink-0 items-center rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-colors ${
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
