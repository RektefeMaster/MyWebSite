"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
  y?: number;
};

/**
 * Scroll reveal — sadece opacity + transform (GPU).
 * Yukarı kaydırınca yalnızca tamamen alta indikten sonra reverse.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  y = 40,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let x = 0;
        let yFrom = 0;
        let scale = 1;

        switch (from) {
          case "left":
            x = -36;
            break;
          case "right":
            x = 36;
            break;
          case "scale":
            scale = 0.96;
            break;
          case "up":
            yFrom = y;
            break;
          default: {
            const _exhaustive: never = from;
            void _exhaustive;
            yFrom = y;
            break;
          }
        }

        const tween = gsap.fromTo(
          el,
          { opacity: 0, x, y: yFrom, scale, force3D: true },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: delay / 1000,
            ease: "power2.out",
            force3D: true,
            immediateRender: true,
            paused: true,
          }
        );

        attachScrollReveal(tween, el);
      });

      return () => mm.revert();
    },
    { dependencies: [delay, from, y] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
