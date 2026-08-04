"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";
import { forDisplay } from "@/lib/typography";

/**
 * İmza bölüm: sabitlenmiş manifesto — markanın tez cümlesi.
 * Scroll ile satırlar sırayla netleşir.
 */
export default function Manifesto() {
  const t = useTranslations("manifesto");
  const locale = useLocale();
  const lines = (t.raw("lines") as string[]).map(forDisplay);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      if (!section || !pin) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const lineEls = gsap.utils.toArray<HTMLElement>(
        pin.querySelectorAll("[data-manifesto-line]")
      );
      const stamp = pin.querySelector<HTMLElement>("[data-manifesto-stamp]");

      gsap.set(lineEls, { opacity: reduced ? 1 : 0.12, y: reduced ? 0 : 28 });
      if (stamp) {
        gsap.set(stamp, {
          scale: reduced ? 1 : 0.85,
          opacity: reduced ? 0.9 : 0,
        });
      }

      if (reduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          // Soft-nav’de pin-spacer artığı kalmasın
          invalidateOnRefresh: true,
        },
      });

      lineEls.forEach((el, i) => {
        tl.to(
          el,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          i * 0.35
        );
      });

      if (stamp) {
        tl.to(
          stamp,
          { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.4)" },
          "-=0.2"
        );
      }
    },
    { scope: sectionRef, dependencies: [locale, lines.join("\n")] }
  );

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative bg-band text-band-fg"
    >
      <div
        ref={pinRef}
        className="flex min-h-[100svh] flex-col justify-center px-5 py-16 md:px-10 md:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-5xl space-y-2 md:space-y-3">
            {lines.map((line, i) => (
              <p
                key={`${locale}-${i}`}
                data-manifesto-line
                className="text-[clamp(1.75rem,5.2vw,4.75rem)] font-bold leading-[1.05] tracking-tight"
              >
                {line}
              </p>
            ))}
          </div>

          <div
            data-manifesto-stamp
            className="mt-14 inline-flex rotate-[-3deg] items-center gap-3 rounded-full border-2 border-accent px-5 py-2.5 md:mt-20"
          >
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {t("stamp")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
