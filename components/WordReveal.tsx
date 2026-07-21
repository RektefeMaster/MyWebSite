"use client";

import { useRef, createElement, Fragment, type ElementType } from "react";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";

type WordRevealProps = {
  /** Düz metin — kelimelere bölünüp maskeli yükseltilir */
  text: string;
  as?: ElementType;
  className?: string;
  /** Kelime başına gecikme (sn) */
  stagger?: number;
  delay?: number;
};

/**
 * Ajans imzası başlık reveal'ı — her kelime maskeden yukarı doğar.
 * Türkçe alt-uzantılar (ç, ş, ğ, y) için padding ile kırpılma önlenir.
 */
export default function WordReveal({
  text,
  as = "h2",
  className = "",
  stagger = 0.055,
  delay = 0,
}: WordRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const inners = el.querySelectorAll<HTMLElement>(".word-reveal-inner");
      if (!inners.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(inners, { yPercent: 0, opacity: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const settle = () => {
          inners.forEach((node) => node.classList.add("is-settled"));
        };
        const unsettle = () => {
          inners.forEach((node) => node.classList.remove("is-settled"));
        };

        const tween = gsap.fromTo(
          inners,
          { yPercent: 118, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger,
            delay,
            force3D: true,
            paused: true,
            onComplete: settle,
            onReverseComplete: unsettle,
          }
        );
        attachScrollReveal(tween, el, {
          enter: "top 88%",
          onEnter: () => {
            if (tween.progress() >= 1) settle();
          },
          onLeaveBack: unsettle,
        });
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [text] }
  );

  return createElement(
    as,
    // createElement'e ref geçmek standart; kural burada yanlış-pozitif veriyor.
    // eslint-disable-next-line react-hooks/refs
    { ref, className },
    words.map((word, i) => (
      <Fragment key={`${word}-${i}`}>
        <span className="word-reveal-word">
          <span className="word-reveal-inner">{word}</span>
        </span>
        {i < words.length - 1 ? " " : null}
      </Fragment>
    ))
  );
}
