"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";

type Stat = {
  value: string;
  label: string;
};

function parseStat(value: string) {
  const match = value.match(/^([+]?)(\d+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value, raw: true as const };
  return {
    prefix: match[1] ?? "",
    num: Number(match[2]),
    suffix: match[3] ?? "",
    raw: false as const,
  };
}

export default function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as Stat[];
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const cards = grid.querySelectorAll<HTMLElement>("[data-stat-card]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        cards.forEach((card) => {
          const valueEl = card.querySelector<HTMLElement>("[data-stat-value]");
          const parsed = parseStat(valueEl?.dataset.value ?? "");

          const tween = gsap.from(card, {
            opacity: 0,
            y: 32,
            duration: 0.6,
            ease: "power2.out",
            force3D: true,
            paused: true,
          });

          attachScrollReveal(tween, card, {
            onEnter: () => {
              if (!valueEl || parsed.raw) return;
              const obj = { n: 0 };
              gsap.to(obj, {
                n: parsed.num,
                duration: 1,
                ease: "power2.out",
                overwrite: true,
                onUpdate: () => {
                  valueEl.textContent = `${parsed.prefix}${Math.round(obj.n)}${parsed.suffix}`;
                },
              });
            },
            onLeaveBack: () => {
              if (!valueEl || parsed.raw) return;
              valueEl.textContent = `${parsed.prefix}0${parsed.suffix}`;
            },
          });
        });
      });

      return () => mm.revert();
    },
    { dependencies: [items.length] }
  );

  return (
    <section
      id="why"
      className="cv-auto scroll-mt-[var(--nav-offset)] bg-band px-5 py-16 md:px-10 md:py-24 text-band-fg md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl md:mb-16">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-band-fg/40">
              {t("label")}
            </p>
          </Reveal>
          <WordReveal
            text={t("title")}
            className="text-3xl font-bold leading-tight tracking-tight md:text-5xl"
          />
        </div>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.value}
              data-stat-card
              className="rounded-3xl border border-band-fg/10 bg-band-fg/[0.03] p-7 md:p-9"
            >
              <p
                data-stat-value
                data-value={item.value}
                className="text-5xl font-bold tracking-tight text-lime md:text-6xl"
              >
                {item.value}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-band-fg/55">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
