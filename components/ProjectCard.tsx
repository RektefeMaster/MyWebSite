"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { getProjectCardCopy } from "@/data/project-card-copy";
import { getProjectPunch } from "@/data/project-punch";
import DeviceMockup from "./DeviceMockup";
import LazyMount from "./LazyMount";

/** /work kartı — DeviceMockup + Selected Work ile hizalı tipografi */
export default function ProjectCard({
  project,
  cols = 5,
}: {
  project: Project;
  /** Editorial grid kolonu — DeviceMockup `sizes` hesabı için */
  cols?: number;
}) {
  const t = useTranslations("projectUi");
  const locale = useLocale();
  const detail = getProjectCardCopy(locale, project.id);
  const name = detail?.title ?? project.name;
  const punch = getProjectPunch(locale, project.id);

  // data-project-item: DeviceMockup hover şeridini kart kenarında tetikler
  return (
    <article className="group flex h-full flex-col" data-project-item>
      <Link
        scroll={false}
        href={`/work/${project.id}`}
        className="relative block aspect-[800/620] w-full overflow-hidden rounded-sm bg-stone shadow-[inset_0_0_0_1px_var(--chrome-edge)] transition-[box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [@media(hover:hover)_and_(pointer:fine)]:group-hover:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_50%,transparent)]"
        aria-label={`${name} — ${t("view")}`}
      >
        {/* Soft-nav: tüm grid’i birden decode etme — viewport’a yaklaşınca mount */}
        <LazyMount
          className="absolute inset-0"
          minHeight="100%"
          rootMargin="320px 0px"
        >
          <DeviceMockup project={project} cardCols={cols} />
        </LazyMount>
      </Link>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5 md:pt-6">
        <div className="flex items-baseline justify-between gap-3">
          {detail?.tag ? (
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-band-fg/40">
              {detail.tag}
            </p>
          ) : (
            <span />
          )}
          {project.year ? (
            <p className="font-mono text-[10px] font-bold tabular-nums text-band-fg/30">
              {project.year}
            </p>
          ) : null}
        </div>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-band-fg md:text-2xl">
          <Link
            scroll={false}
            href={`/work/${project.id}`}
            className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {name}
          </Link>
        </h3>
        {punch ? (
          <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-band-fg/50">
            {punch}
          </p>
        ) : detail?.summary ? (
          <p className="mt-2 line-clamp-3 max-w-[36ch] text-sm leading-relaxed text-band-fg/45">
            {detail.summary}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            scroll={false}
            href={`/work/${project.id}`}
            className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-band-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {t("view")}
            <span aria-hidden>→</span>
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-band-fg/40 transition-colors hover:text-band-fg/70"
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
