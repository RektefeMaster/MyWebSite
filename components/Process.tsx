"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { gsap, useGSAP, ScrollTrigger, attachScrollReveal } from "@/lib/gsap";

type Step = {
  title: string;
  body: string[];
};

export default function Process() {
  const t = useTranslations("process");
  const locale = useLocale();
  const steps = t.raw("steps") as Step[];
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const progressLabelRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const fill = fillRef.current;
      const head = headRef.current;
      const progressLabel = progressLabelRef.current;
      const section = sectionRef.current;
      if (!track || !fill || !head || !section) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(fill, { scaleY: 0, transformOrigin: "top center", force3D: true });
      gsap.set(head, { top: 0, yPercent: -50, y: 0, force3D: true });

      const setFill = gsap.quickSetter(fill, "scaleY");
      const setHeadY = gsap.quickSetter(head, "y", "px");
      let trackH = track.offsetHeight;

      ScrollTrigger.create({
        trigger: track,
        start: "top 75%",
        end: "bottom 50%",
        scrub: reduced ? true : 0.35,
        onRefresh: () => {
          trackH = track.offsetHeight;
        },
        onUpdate: (self) => {
          const p = self.progress;
          setFill(p);
          setHeadY(p * trackH);
          if (progressLabel) {
            progressLabel.textContent = `${Math.round(p * 100)}%`;
          }
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-process-card]")
      );
      const dots = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-process-dot]")
      );

      const desktop = window.matchMedia("(min-width: 768px)").matches;

      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        const xFrom = reduced ? 0 : desktop ? (fromLeft ? -48 : 48) : 28;

        if (reduced) {
          gsap.set(card, { opacity: 1, x: 0 });
          if (dots[i]) {
            gsap.set(dots[i], { scale: 1 });
            dots[i].dataset.lit = "true";
          }
          return;
        }

        const cardTween = gsap.fromTo(
          card,
          { opacity: 0, x: xFrom, force3D: true },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power2.out",
            force3D: true,
            paused: true,
          }
        );
        attachScrollReveal(cardTween, card);

        const dot = dots[i];
        if (dot) {
          // Renk CSS token ile — GSAP inline #hex dark’ta kalmasın
          const dotTween = gsap.fromTo(
            dot,
            { scale: 0.6 },
            {
              scale: 1,
              duration: 0.35,
              ease: "power2.out",
              paused: true,
            }
          );
          attachScrollReveal(dotTween, card, {
            onEnter: () => {
              dot.dataset.lit = "true";
            },
            onLeaveBack: () => {
              delete dot.dataset.lit;
            },
          });
        }
      });
    },
    { scope: sectionRef, dependencies: [locale, steps.length] }
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="scroll-mt-[var(--nav-offset)] bg-paper px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
            {t("title")}
          </h2>
        </div>

        <div ref={trackRef} className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute top-3 bottom-3 left-3 w-3 -translate-x-1/2 md:left-1/2"
          >
            <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-foreground/[0.08]">
              <div
                ref={fillRef}
                className="relative h-full w-full origin-top will-change-transform"
              >
                <div className="process-fill absolute inset-0 rounded-full" />
              </div>
            </div>

            <div
              ref={headRef}
              className="absolute left-1/2 z-20 -translate-x-1/2 will-change-transform"
            >
              <div className="process-head size-3.5 rounded-full bg-accent" />
            </div>

            <span
              ref={progressLabelRef}
              className="absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-sm border border-[color:var(--chrome-edge)] bg-paper px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-ink shadow-[inset_0_1px_0_var(--chrome-shine)] md:inline-block"
            >
              0%
            </span>
          </div>

          <ol className="relative space-y-4 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={step.title}
                  className="relative grid grid-cols-[1.5rem_1fr] items-center gap-5 py-6 md:grid-cols-[1fr_2.5rem_1fr] md:gap-8 md:py-12"
                >
                  <span className="relative z-10 col-start-1 row-start-1 mx-auto flex size-5 items-center justify-center md:col-start-2">
                    <span
                      data-process-dot
                      aria-hidden
                      className="process-dot relative size-3 rounded-full ring-[5px] ring-background"
                    />
                  </span>

                  <article
                    data-process-card
                    className={`col-start-2 row-start-1 rounded-sm border border-[color:var(--chrome-edge)] bg-background p-6 shadow-[inset_0_1px_0_var(--chrome-shine)] md:p-8 ${
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-3 md:text-left"
                    }`}
                  >
                    <div
                      className={`mb-3 flex items-center gap-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-foreground/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <div
                      className={`max-w-md space-y-2 text-sm leading-relaxed text-foreground/55 md:text-[15px] ${
                        isLeft ? "md:ms-auto" : ""
                      }`}
                    >
                      {step.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
