"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";

export default function Clients() {
  const t = useTranslations("clients");
  const names = t.raw("names") as string[];
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;
      const items = list.querySelectorAll("li");

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.from(items, {
          opacity: 0,
          y: 20,
          stagger: 0.04,
          duration: 0.55,
          ease: "power2.out",
          force3D: true,
          paused: true,
        });
        attachScrollReveal(tween, list);
      });

      return () => mm.revert();
    },
    { dependencies: [names.length] }
  );

  return (
    <section
      id="clients"
      className="scroll-mt-[var(--nav-offset)] border-y border-foreground/10 bg-stone/40 px-5 py-12 md:px-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
            {t("label")}
          </p>
        </Reveal>
        <ul
          ref={listRef}
          className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12"
        >
          {names.map((name) => (
            <li
              key={name}
              className="text-xl font-bold tracking-tight text-foreground/30 transition-colors hover:text-ink md:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
