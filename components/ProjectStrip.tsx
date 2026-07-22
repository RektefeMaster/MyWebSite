"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projects, type Project } from "@/data/projects";
import { getProjectCardCopy } from "@/data/project-card-copy";
import { getProjectPunch } from "@/data/project-punch";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";

function StripCard({
  project,
  locale,
  view,
  live,
  clone = false,
}: {
  project: Project;
  locale: string;
  view: string;
  live: string;
  clone?: boolean;
}) {
  const copy = getProjectCardCopy(locale, project.id);
  const name = copy?.title ?? project.name;
  const punch = getProjectPunch(locale, project.id);
  const [c1, c2] = project.colors;

  return (
    <div className={clone ? "pstrip-card pstrip-card--clone" : "pstrip-card"}>
      <Link
        href={`/work/${project.id}`}
        tabIndex={clone ? -1 : undefined}
        aria-hidden={clone || undefined}
        scroll={false}
        className="group flex h-full overflow-hidden rounded-2xl border border-foreground/10 bg-surface transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink [@media(hover:hover)_and_(pointer:fine)]:hover:border-band"
      >
        <div
          className="relative w-[40%] shrink-0 overflow-hidden md:w-[46%]"
          style={{ background: `linear-gradient(145deg, ${c1}, ${c2})` }}
        >
          {project.desktopImage ? (
            <Image
              src={project.desktopImage}
              alt={name}
              fill
              sizes="280px"
              quality={86}
              loading="eager"
              decoding="async"
              draggable={false}
              className="object-cover object-top transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
            />
          ) : null}
          {project.mobileImage ? (
            <span className="pointer-events-none absolute bottom-2 right-2 z-[1] h-[42%] w-[28%] overflow-hidden rounded-[0.55rem] border border-white/35 shadow-[0_8px_18px_rgba(0,0,0,0.35)] ring-1 ring-black/20">
              <Image
                src={project.mobileImage}
                alt=""
                fill
                sizes="140px"
                quality={92}
                loading="eager"
                decoding="async"
                draggable={false}
                className="object-cover object-top"
                aria-hidden
              />
            </span>
          ) : null}
          <span className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex items-center gap-1 px-2.5 py-2">
            <i className="size-1.5 rounded-full bg-white/50" />
            <i className="size-1.5 rounded-full bg-white/35" />
            <i className="size-1.5 rounded-full bg-white/25" />
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between p-4 md:p-5">
          <div className="min-h-0">
            {copy?.tag ? (
              <p className="mb-1.5 truncate text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/35">
                {copy.tag}
              </p>
            ) : null}
            <h3 className="text-[15px] font-bold uppercase leading-[1.15] tracking-[0.04em] md:text-lg">
              {name}
            </h3>
            {punch ? (
              <p className="mt-2 line-clamp-2 text-[13px] leading-snug text-foreground/55 md:text-sm">
                {punch}
              </p>
            ) : null}
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-ink transition-colors [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-band">
            {project.url ? live : view}
            <span aria-hidden>{project.url ? "↗" : "→"}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

/**
 * Ana sayfa: projeler tek sırada sonsuz akan şerit (grid değil).
 * Her kartın yanında kısa, güçlü tek satır anlatım. Altta "Tüm projeleri gör".
 */
export default function ProjectStrip() {
  const t = useTranslations("projects");
  const tUi = useTranslations("projectUi");
  const locale = useLocale();
  const view = tUi("view");
  const live = tUi("live");

  const renderSet = (clone: boolean) =>
    projects.map((project) => (
      <StripCard
        key={`${clone ? "c" : "o"}-${project.id}`}
        project={project}
        locale={locale}
        view={view}
        live={live}
        clone={clone}
      />
    ));

  return (
    <section
      id="projects"
      className="scroll-mt-[var(--nav-offset)] bg-background py-16 md:py-24"
    >
      <div className="mx-auto mb-12 max-w-7xl px-5 md:mb-16 md:px-10">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_1.2fr] md:gap-12">
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
      </div>

      <div className="pstrip-viewport group/strip">
        <div className="pstrip-track">
          {renderSet(false)}
          {renderSet(true)}
        </div>
      </div>

      <div className="mt-12 flex justify-center px-5">
        <Magnetic strength={0.35}>
          <SpecularButton
            href="/work"
            tone="ink"
            size="md"
            className="btn-stable btn-stable--chip"
          >
            {t("viewAll")}
          </SpecularButton>
        </Magnetic>
      </div>
    </section>
  );
}
