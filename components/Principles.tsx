"use client";

import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { gsap, useGSAP } from "@/lib/gsap";

type Principle = {
  title: string;
  body: string;
};

/** Büyük satırlar — hover’da açılan prensipler (kart değil) */
export default function Principles() {
  const t = useTranslations("principles");
  const locale = useLocale();
  const items = t.raw("items") as Principle[];
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;
      const rows = list.querySelectorAll<HTMLElement>("[data-principle]");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(rows, { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        rows,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          overwrite: true,
          scrollTrigger: {
            trigger: list,
            start: "top 85%",
          },
          onComplete: () => {
            gsap.set(rows, { clearProps: "opacity,transform" });
          },
        }
      );
    },
    { scope: listRef, dependencies: [locale, items.length] }
  );

  return (
    <section
      id="approach"
      className="bg-background px-5 py-14 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={listRef} className="border-t border-foreground/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.title}
                type="button"
                data-principle
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
                onClick={() => setOpen(i)}
                className={`group grid w-full grid-cols-[auto_1fr] gap-5 border-b border-foreground/10 py-7 text-left transition-colors md:grid-cols-[5rem_1fr_1.1fr] md:gap-10 md:py-9 ${
                  isOpen ? "bg-band text-band-fg" : "hover:bg-stone/50"
                }`}
              >
                <span
                  className={`pt-1 font-mono text-xs font-bold md:pt-2 ${
                    isOpen ? "text-lime" : "text-foreground/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-2xl font-bold tracking-tight transition-transform duration-300 md:text-4xl ${
                    isOpen ? "translate-x-1 md:translate-x-2" : ""
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`col-span-2 max-w-md text-sm leading-relaxed md:col-span-1 md:justify-self-end md:text-[15px] ${
                    isOpen
                      ? "text-band-fg/65"
                      : "text-foreground/45 group-hover:text-foreground/60"
                  }`}
                >
                  {item.body}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
