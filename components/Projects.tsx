"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import {
  PROJECT_LANES,
  getProjectsByPrimaryLane,
  type ProjectLane,
} from "@/data/projects";
import { editorialSpan, editorialSpanCols } from "@/lib/editorial-layout";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { gsap, useGSAP, attachScrollReveal } from "@/lib/gsap";

/** /work — primaryLane grupları + editorial grid */
export default function Projects() {
  const t = useTranslations("projects");
  const tLanes = useTranslations("workLanes");
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-project-item]");
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(cards, { clearProps: "all", opacity: 1, y: 0 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.from(cards, {
        opacity: 0,
        y: 36,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        force3D: true,
        paused: true,
      });
      attachScrollReveal(tween, grid);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-[var(--nav-offset)] bg-background px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-6 md:mb-16 md:grid-cols-[1fr_1.2fr] md:gap-12">
          <div>
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                <span
                  aria-hidden
                  className="inline-block h-px w-6 bg-accent/80"
                />
                {t("label")}
              </p>
            </Reveal>
            <Reveal delay={40}>
              <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <p className="max-w-md text-sm leading-relaxed text-foreground/50 md:justify-self-end md:pb-2">
              {t("blurb")}
            </p>
          </Reveal>
        </div>

        <div ref={gridRef} className="space-y-16 md:space-y-24">
          {PROJECT_LANES.map((lane: ProjectLane) => {
            const items = getProjectsByPrimaryLane(lane);
            if (items.length === 0) return null;
            return (
              <div key={lane}>
                <Reveal>
                  <h3 className="mb-8 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                    <span
                      aria-hidden
                      className="inline-block h-px w-6 bg-accent/80"
                    />
                    {tLanes(lane)}
                  </h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
                  {items.map((project, i) => (
                    <div
                      key={project.id}
                      data-project-item
                      className={`cv-card min-w-0 ${editorialSpan(i, project.displayPreference)}`}
                    >
                      <ProjectCard
                        project={project}
                        cols={editorialSpanCols(i, project.displayPreference)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
