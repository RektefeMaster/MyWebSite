"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { getProjectDetail } from "@/data/project-details";
import DeviceMockup from "./DeviceMockup";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projectUi");
  const locale = useLocale();
  const detail = getProjectDetail(locale, project.id);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-foreground/[0.06] bg-surface shadow-[0_14px_40px_-18px_rgba(0,0,0,0.28)] transition-all duration-300 active:scale-[0.99] md:rounded-[2.25rem] md:hover:-translate-y-2 md:hover:shadow-[0_26px_52px_-20px_rgba(0,0,0,0.36)] md:active:scale-100">
      <Link
        href={`/work/${project.id}`}
        className="project-stage relative block aspect-[800/620] w-full px-4 pb-2 pt-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink md:px-5 md:pt-6"
        style={{
          backgroundImage: `radial-gradient(120% 80% at 30% 20%, ${project.colors[1]}22 0%, transparent 55%), var(--project-stage-gradient)`,
        }}
        aria-label={`${project.name} — ${t("view")}`}
      >
        <DeviceMockup project={project} />
      </Link>

      <div className="flex flex-1 flex-col items-center px-6 pb-7 pt-4 text-center md:px-7 md:pb-8">
        {detail?.tag ? (
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/35">
            {detail.tag}
          </p>
        ) : null}
        <h3 className="text-base font-bold uppercase tracking-[0.08em] md:text-lg">
          <Link
            href={`/work/${project.id}`}
            className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {project.name}
          </Link>
        </h3>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Link
            href={`/work/${project.id}`}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-foreground/10 bg-paper px-4 py-2.5 text-xs font-bold text-ink transition-colors hover:border-ink/25 hover:bg-surface"
          >
            {t("view")}
            <span aria-hidden>→</span>
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-ink-fg transition-colors hover:bg-ink/90"
            >
              {t("live")}
              <span aria-hidden>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
