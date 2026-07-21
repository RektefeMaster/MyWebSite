"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { getProjectCardCopy } from "@/data/project-card-copy";
import DeviceMockup from "./DeviceMockup";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projectUi");
  const locale = useLocale();
  const detail = getProjectCardCopy(locale, project.id);
  const name = detail?.title ?? project.name;

  return (
    <article className="group flex h-full flex-col transition-transform duration-300 active:scale-[0.99] touch-manipulation md:hover:-translate-y-1.5 md:active:scale-100">
      <Link
        href={`/work/${project.id}`}
        className="relative block aspect-[800/620] w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        aria-label={`${name} — ${t("view")}`}
      >
        <DeviceMockup project={project} />
      </Link>

      <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-5 text-center md:px-3 md:pt-6">
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
            {name}
          </Link>
        </h3>
        {detail?.summary ? (
          <p className="mt-2.5 line-clamp-5 max-w-[36ch] text-[13px] leading-snug text-foreground/45 md:text-sm md:leading-relaxed">
            {detail.summary}
          </p>
        ) : null}

        <div className="mt-4 grid w-full max-w-[18rem] grid-cols-2 gap-2">
          <Link
            href={`/work/${project.id}`}
            className="btn-stable btn-stable--pair inline-flex min-h-11 gap-1.5 rounded-full border border-foreground/10 bg-paper px-3 py-2.5 text-xs font-bold text-ink transition-colors touch-manipulation hover:border-ink/25 hover:bg-surface md:min-h-10"
          >
            {t("view")}
            <span aria-hidden>→</span>
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-stable btn-stable--pair inline-flex min-h-11 gap-1.5 rounded-full bg-ink px-3 py-2.5 text-xs font-bold text-ink-fg transition-colors touch-manipulation hover:bg-ink/90 md:min-h-10"
            >
              {t("live")}
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <span aria-hidden className="invisible" />
          )}
        </div>
      </div>
    </article>
  );
}
