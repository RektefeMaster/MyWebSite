"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Subtle magnetic pull toward cursor — for CTAs */
export default function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = inner.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      gsap.set(el, { x: 0, y: 0 });
    },
    { scope: root }
  );

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const wrap = root.current;
    const el = inner.current;
    if (!wrap || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // overwrite: her harekette önceki tween'i öldür — takip başına tek aktif
    // tween (yüzlerce çakışan tween birikmesin)
    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  }

  function onLeave() {
    const el = inner.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
      overwrite: true,
    });
  }

  return (
    <div
      ref={root}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={inner}>
        {children}
      </div>
    </div>
  );
}
