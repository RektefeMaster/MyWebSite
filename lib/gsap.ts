"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

type AttachScrollRevealOptions = {
  /** Varsayılan: viewport altına girer girmez play */
  enter?: string;
  onEnter?: () => void;
  onLeaveBack?: () => void;
};

/**
 * play: üst kenar viewport altına değince
 * reverse: aynı çizginin üstünden geri çıkınca (tamamen alta inmiş)
 */
export function attachScrollReveal(
  animation: gsap.core.Animation,
  trigger: Element,
  {
    enter = "top bottom",
    onEnter,
    onLeaveBack,
  }: AttachScrollRevealOptions = {}
) {
  animation.pause(0);

  return ScrollTrigger.create({
    trigger,
    start: enter,
    onEnter: () => {
      animation.play();
      onEnter?.();
    },
    onLeaveBack: () => {
      animation.reverse();
      onLeaveBack?.();
    },
    // İlk ölçüm / resize / tema sonrası — NaN/geçici start ile sıfırlama.
    // Viewport’taki tetikleyiciyi progress(0)’a çekme: cv-auto / erken refresh
    // yanlış start üretince içerik “kaybolmuş” gibi kalıyordu.
    onRefresh: (self) => {
      if (!Number.isFinite(self.start)) return;
      if (self.scroll() >= self.start) {
        animation.progress(1);
        onEnter?.();
        return;
      }
      const rect = trigger.getBoundingClientRect();
      const vh =
        typeof window !== "undefined" ? window.innerHeight : 0;
      if (vh > 0 && rect.top < vh && rect.bottom > 0) {
        animation.progress(1);
        onEnter?.();
        return;
      }
      animation.progress(0);
      onLeaveBack?.();
    },
  });
}

export function registerGsap() {
  if (registered || typeof window === "undefined") return;

  // Flip yalnızca Projects "load more" anında dinamik yüklenir —
  // ilk bundle'a dahil etme.
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  gsap.config({
    nullTargetWarn: false,
  });

  gsap.defaults({
    ease: "power2.out",
    duration: 0.65,
  });

  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
  });

  gsap.ticker.fps(60);
  gsap.ticker.lagSmoothing(500, 33);

  registered = true;
}

registerGsap();

export { gsap, useGSAP, ScrollTrigger };
