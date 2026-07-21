"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

/** Sahte referans yerine çalışma ilkeleri */
export default function WorkingPrinciples() {
  const t = useTranslations("workingPrinciples");
  const items = t.raw("items") as string[];

  return (
    <section
      id="principles-home"
      className="scroll-mt-[var(--nav-offset)] bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl md:mb-16">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
              {t("label")}
            </p>
          </Reveal>
          <WordReveal
            text={t("title")}
            className="text-5xl font-bold tracking-tight md:text-7xl"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <article className="flex items-start gap-5 rounded-3xl border border-foreground/8 bg-surface px-6 py-7 md:px-8 md:py-8">
                <span className="font-mono text-xs font-bold text-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-bold tracking-tight text-ink md:text-xl">
                  {item}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
