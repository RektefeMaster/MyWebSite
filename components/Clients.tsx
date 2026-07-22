"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import RotatingText from "./RotatingText";

/** Hero altı — dönen chip; spring bounce yerine kontrollü tween. */
export default function Clients() {
  const t = useTranslations("clients");
  const rotating = t.raw("rotating") as string[];

  return (
    <section
      id="clients"
      className="scroll-mt-[var(--nav-offset)] border-y border-foreground/10 bg-stone/40 px-5 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40 md:mb-6">
            <span
              aria-hidden
              className="inline-block h-px w-6 bg-lime/80"
            />
            {t("label")}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-3 text-2xl font-bold tracking-tight text-ink md:gap-x-4 md:text-4xl lg:text-5xl">
            <span>{t("lead")}</span>
            <RotatingText
              texts={rotating}
              rotationInterval={2800}
              staggerFrom="last"
              staggerDuration={0.02}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              splitLevelClassName="overflow-hidden pb-0.5"
              mainClassName="inline-flex justify-center overflow-hidden rounded-lg bg-lime px-2.5 py-1 text-on-lime sm:px-3 sm:py-1.5 md:rounded-xl md:px-4 md:py-2"
            />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
