"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

/**
 * Manifesto durak — editorial paper omurga (Atelier Signal).
 * Sağ altta sade M. markası.
 */
export default function ManifestoScene() {
  const t = useTranslations("manifestoScene");

  return (
    <section
      id="idea"
      className="cv-auto relative flex min-h-[52vh] items-center overflow-hidden border-t border-foreground/8 bg-paper px-5 py-16 text-foreground md:min-h-[60vh] md:px-10 md:py-28"
    >
      <div className="relative z-[1] mx-auto w-full max-w-5xl">
        <Reveal delay={40} mode="line" once>
          <p className="max-w-[22ch] font-display text-[clamp(1.85rem,5.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight md:max-w-[26ch]">
            {t("before")}
            <span className="text-accent-ink"> {t("accent")} </span>
            {t("after")}
          </p>
        </Reveal>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 bottom-6 select-none font-display text-[clamp(6rem,28vw,13rem)] leading-none tracking-tight text-foreground/[0.05] md:right-8 md:bottom-8"
      >
        M<span className="text-accent/35">.</span>
      </span>
    </section>
  );
}
