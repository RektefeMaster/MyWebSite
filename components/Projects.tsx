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
      className="scroll-mt-[var(--nav-offset)] bg-band px-5 py-16 text-band-fg md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-6 md:mb-20 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={60}>
            <p className="max-w-md text-sm leading-relaxed text-band-fg/55 md:justify-self-end md:pb-1 md:text-base">
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
                  <h3 className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.16em] text-band-fg/40">
                    {tLanes(lane)}
                  </h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
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
