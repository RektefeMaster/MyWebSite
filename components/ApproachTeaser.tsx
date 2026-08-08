"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";

type Step = {
  title: string;
  body: string;
};

/** Ana sayfa Approach — 4 aşamalı süreç + prensip */
export default function ApproachTeaser() {
  const t = useTranslations("approachTeaser");
  const steps = t.raw("steps") as Step[];

  return (
    <section
      id="approach-home"
      className="cv-auto scroll-mt-[var(--nav-offset)] border-t border-foreground/8 bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-5 max-w-[68ch] text-sm leading-relaxed text-foreground/55 md:text-base">
              {t("blurb")}
            </p>
          </Reveal>
        </div>

        <ol className="grid gap-0 border-t border-foreground/10 md:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-foreground/10 py-8 md:border-b-0 md:border-r md:px-5 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <Reveal delay={i * 50}>
                <span
                  className={`font-mono text-xs font-bold ${
                    i === 0 ? "text-accent-ink" : "text-foreground/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-foreground/50">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-10 max-w-xl border-l-2 border-accent/70 pl-4 font-subtitle text-sm leading-relaxed text-foreground/55 md:mt-14 md:text-base">
            {t("principle")}
          </p>
        </Reveal>

        <div className="mt-8">
          <Magnetic strength={0.25} className="w-full sm:w-auto">
            <SpecularButton
              href="/approach"
              tone="ink"
              size="md"
              fillMobile
              className="btn-stable btn-stable--chip"
            >
              {t("cta")}
              <span aria-hidden>→</span>
            </SpecularButton>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
