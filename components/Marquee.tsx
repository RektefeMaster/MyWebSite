"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

type MarqueeProps = {
  /** header: ince şerit (nav altında), section: geniş blok */
  variant?: "header" | "section";
};

/** Sonsuz yatay lime şerit */
export default function Marquee({ variant = "section" }: MarqueeProps) {
  const t = useTranslations("marquee");
  const items = t.raw("items") as string[];
  const track = [...items, ...items, ...items];
  const isHeader = variant === "header";
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const sync = () => {
      el.style.animationPlayState = document.hidden ? "paused" : "running";
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return (
    <div
      aria-hidden
      className={
        isHeader
          ? "relative overflow-hidden border-t border-ink/10 bg-lime"
          : "relative overflow-hidden border-y border-ink/10 bg-lime py-4 md:py-5"
      }
    >
      <div
        ref={trackRef}
        className={`marquee-track flex w-max items-center ${
          isHeader ? "py-2" : ""
        }`}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex items-center font-bold uppercase tracking-[0.2em] text-on-lime ${
              isHeader
                ? "gap-5 px-3 text-[10px] md:gap-7 md:text-[11px]"
                : "gap-6 px-3 text-sm md:gap-10 md:px-5 md:text-base"
            }`}
          >
            {item}
            <span className="inline-block size-1 rounded-full bg-on-lime/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
