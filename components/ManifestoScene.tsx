"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

/**
 * Kısa manifesto durak — band zemin (paper yığılmasını kırar).
 * Sağ altta sade M. markası.
 */
export default function ManifestoScene() {
  const t = useTranslations("manifestoScene");

  return (
    <section
      id="idea"
      className="cv-auto relative flex min-h-[52vh] items-center overflow-hidden border-t border-band-fg/10 bg-band px-5 py-16 text-band-fg md:min-h-[60vh] md:px-10 md:py-28"
    >
      <div className="relative z-[1] mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-band-fg/40">
            <span aria-hidden className="inline-block h-px w-6 bg-accent/80" />
            {t("label")}
          </p>
        </Reveal>
        <Reveal delay={60} mode="line" once>
          <p className="max-w-[22ch] font-display text-[clamp(1.85rem,5.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight md:max-w-[26ch]">
            {t("before")}
            <span className="text-accent"> {t("accent")} </span>
            {t("after")}
          </p>
        </Reveal>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 bottom-6 select-none font-display text-[clamp(6rem,28vw,13rem)] leading-none tracking-tight text-band-fg/[0.06] md:right-8 md:bottom-8"
      >
        M<span className="text-accent/40">.</span>
      </span>
    </section>
  );
}
