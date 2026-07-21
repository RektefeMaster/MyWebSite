"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";

/** Ana sayfa: canlı web siteleri (bot/CRM/CSS ürünlerinin üstünde) */
const TEASER_COUNT = projects.findIndex((p) => !p.url);
const FIRST_PRODUCT_INDEX = TEASER_COUNT;

let flipRegistered = false;

type ProjectsProps = {
  /** teaser: ana sayfa vitrin (web siteleri + detaya link), full: /work detay */
  variant?: "teaser" | "full";
};

export default function Projects({ variant = "full" }: ProjectsProps) {
  const t = useTranslations("projects");
  const isTeaser = variant === "teaser";
  const [visible, setVisible] = useState(
    isTeaser ? Math.max(TEASER_COUNT, 0) : projects.length
  );
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-project-item]");
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.from(cards, {
        opacity: 0,
        y: 36,
        stagger: 0.06,
        duration: 0.6,
        ease: "power2.out",
        force3D: true,
        paused: true,
      });
      attachScrollReveal(tween, grid);
    });

    return () => mm.revert();
  }, []);

  async function loadMore() {
    const grid = gridRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!grid || reduced) {
      setVisible(projects.length);
      return;
    }

    const { Flip } = await import("gsap/Flip");
    if (!flipRegistered) {
      gsap.registerPlugin(Flip);
      flipRegistered = true;
    }

    const state = Flip.getState(grid.querySelectorAll("[data-project-item]"));
    flushSync(() => setVisible(projects.length));

    Flip.from(state, {
      duration: 0.75,
      ease: "power3.inOut",
      stagger: 0.04,
      absolute: false,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.06 }
        ),
    });
  }

  return (
    <section
      id="projects"
      className="cv-auto scroll-mt-[var(--nav-offset)] bg-background px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-6 md:grid-cols-[1fr_1.2fr] md:gap-12">
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                {t("label")}
              </p>
            </Reveal>
            <WordReveal
              text={t("title")}
              className="text-6xl font-bold tracking-tight md:text-8xl"
            />
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-foreground/50 md:justify-self-end md:pb-2">
              {t("blurb")}
            </p>
          </Reveal>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {projects.slice(0, visible).map((project, index) => (
            <div
              key={project.id}
              data-project-item
              className={
                index === FIRST_PRODUCT_INDEX
                  ? "cv-card sm:col-start-1 lg:col-start-1"
                  : "cv-card"
              }
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {isTeaser ? (
          <div className="mt-12 flex justify-center">
            <Magnetic strength={0.35}>
              <Link
                href="/work"
                className="btn-sheen inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-ink-fg"
              >
                {t("seeCase")}
              </Link>
            </Magnetic>
          </div>
        ) : (
          visible < projects.length && (
            <div className="mt-12 flex justify-center">
              <Magnetic strength={0.35}>
                <button
                  type="button"
                  onClick={loadMore}
                  className="rounded-full bg-lime px-8 py-3.5 text-sm font-bold"
                >
                  {t("loadMore")}
                </button>
              </Magnetic>
            </div>
          )
        )}
      </div>
    </section>
  );
}
