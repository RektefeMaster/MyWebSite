"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects, type Project } from "@/data/projects";
import { getProjectCardCopy } from "@/data/project-card-copy";
import { getProjectPunch } from "@/data/project-punch";
import {
  getSelectedWorkStage,
  type WorkStage,
} from "@/data/selected-work-stages";
import {
  editorialSpan,
  layoutSlotAt,
  type LayoutSlot,
} from "@/lib/editorial-layout";
import LightPhone from "./LightPhone";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";

function MediaStage({
  project,
  name,
  wide,
  stage,
}: {
  project: Project;
  name: string;
  wide: boolean;
  stage: WorkStage | null;
}) {
  const [c1, c2] = project.colors;
  const hero = stage?.hero ?? project.desktopImage;
  const mobile = stage?.mobile ?? project.mobileImage;
  const position = stage?.objectPosition ?? "50% 0%";
  const peep = Boolean(stage?.peep && mobile);

  /* Dar kolon: tek okunaklı mobil kare — arka peep yok */
  if (!wide && mobile) {
    return (
      <div
        className="relative min-h-[240px] flex-1 overflow-hidden md:min-h-[300px]"
        style={{ background: `linear-gradient(160deg, ${c1}, ${c2})` }}
      >
        <div className="absolute inset-x-[18%] bottom-[8%] top-[8%] overflow-hidden rounded-[1rem] border border-white/30 shadow-[0_16px_40px_rgba(0,0,0,0.4)] ring-1 ring-black/25 md:inset-x-[16%]">
          <Image
            src={mobile}
            alt={name}
            fill
            sizes="(max-width: 768px) 70vw, 280px"
            quality={72}
            loading="lazy"
            decoding="async"
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-[220px] flex-1 overflow-hidden md:min-h-[300px]"
      style={{ background: `linear-gradient(145deg, ${c1}, ${c2})` }}
    >
      {hero ? (
        <Image
          src={hero}
          alt={name}
          fill
          sizes={
            wide
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 40vw"
          }
          quality={75}
          loading="lazy"
          decoding="async"
          className="object-cover object-top transition-transform duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.02]"
          style={{ objectPosition: position }}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      {peep && mobile ? <LightPhone src={mobile} /> : null}
    </div>
  );
}

function WorkCard({
  project,
  locale,
  slot,
  index,
}: {
  project: Project;
  locale: string;
  slot: LayoutSlot;
  index: number;
}) {
  const copy = getProjectCardCopy(locale, project.id);
  const name = copy?.title ?? project.name;
  const punch = getProjectPunch(locale, project.id);
  const wide = slot === "wide" || slot === "large";
  const stage = getSelectedWorkStage(project.id);

  return (
    <article className="group relative h-full min-w-0" data-project-item>
      <Link
        href={`/work/${project.id}`}
        scroll={false}
        className="flex h-full flex-col overflow-hidden bg-band-fg/[0.03] ring-1 ring-inset ring-band-fg/10 transition-[box-shadow,background-color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime [@media(hover:hover)_and_(pointer:fine)]:hover:bg-band-fg/[0.055] [@media(hover:hover)_and_(pointer:fine)]:hover:ring-lime/35"
      >
        <MediaStage
          project={project}
          name={name}
          wide={wide}
          stage={stage}
        />
        <div className="flex shrink-0 flex-col gap-2 px-5 py-5 md:px-6 md:py-6">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-mono text-[10px] font-bold tabular-nums tracking-[0.12em] text-lime">
              {String(index + 1).padStart(2, "0")}
              {copy?.tag ? (
                <span className="ml-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-band-fg/40">
                  {copy.tag}
                </span>
              ) : null}
            </p>
            {project.year ? (
              <p className="font-mono text-[10px] font-bold tabular-nums text-band-fg/30">
                {project.year}
              </p>
            ) : null}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-band-fg md:text-2xl md:leading-tight">
            {name}
          </h3>
          {punch ? (
            <p className="max-w-[34ch] text-sm leading-relaxed text-band-fg/50">
              {punch}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}

/** Ana sayfa — 4 featured proje, editorial grid (WCC hariç) */
export default function SelectedWork() {
  const t = useTranslations("selectedWork");
  const locale = useLocale();
  const items = getFeaturedProjects().slice(0, 4);

  return (
    <section
      className="hero-work-bridge bg-band px-5 py-16 text-band-fg md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-6 md:mb-16 md:grid-cols-[1fr_1.05fr] md:gap-16">
          <div>
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-band-fg/40">
                <span
                  aria-hidden
                  className="inline-block h-px w-6 bg-lime/80"
                />
                {t("label")}
              </p>
            </Reveal>
            <Reveal delay={40}>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <p className="max-w-md text-sm leading-relaxed text-band-fg/50 md:justify-self-end md:pb-2 md:text-base">
              {t("blurb")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-12 md:gap-5">
          {items.map((project, i) => {
            const slot = layoutSlotAt(i);
            return (
              <div
                key={project.id}
                className={`min-w-0 h-full ${editorialSpan(i)}`}
              >
                <Reveal delay={i * 40} className="h-full">
                  <WorkCard
                    project={project}
                    locale={locale}
                    slot={slot}
                    index={i}
                  />
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <Magnetic strength={0.28} className="w-full sm:w-auto">
            <SpecularButton
              href="/work"
              tone="lime"
              size="md"
              fillMobile
              className="btn-stable btn-stable--chip"
            >
              {t("viewAll")}
              <span aria-hidden>→</span>
            </SpecularButton>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
