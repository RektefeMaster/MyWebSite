"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects, type Project } from "@/data/projects";
import { getProjectCardCopy } from "@/data/project-card-copy";
import { getProjectPunch } from "@/data/project-punch";
import { gsap, useGSAP } from "@/lib/gsap";
import WorkPlate from "./WorkPlate";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ").filter(Boolean);

  return (
    <h3
      className="font-display type-display max-w-[13ch] text-[clamp(2.8rem,7vw,6.7rem)] leading-[1.44] tracking-[-0.05em]"
      aria-label={text}
    >
      <span aria-hidden>
        {/* Maske payı WordReveal ile ORTAK (.word-reveal-word) — eski
            `pb-[0.08em]` Goks'un 0.34em alt uzantısını kesiyordu. */}
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block">
            <span className="word-reveal-word">
              <span data-work-word className="inline-block">
                {word}
              </span>
            </span>
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </h3>
  );
}

function WorkSpread({
  project,
  locale,
  index,
}: {
  project: Project;
  locale: string;
  index: number;
}) {
  const copy = getProjectCardCopy(locale, project.id);
  const name = copy?.title ?? project.name;
  const punch = getProjectPunch(locale, project.id);
  const t = useTranslations("selectedWork");
  /* Levha yönü sırayla değişiyor — üç iş üst üste aynı kadrajda durmasın */
  const plateOnRight = index % 2 === 0;

  return (
    <article
      data-project-item
      data-work-spread
      className="group/mock relative col-span-12 grid min-w-0 grid-cols-12 gap-x-5 border-t border-band-fg/18 pt-5 md:gap-x-6 md:pt-7"
    >
      <div
        data-work-rule
        aria-hidden
        className="absolute left-0 top-0 h-px w-full origin-left bg-band-fg/70"
      />

      <p
        data-work-folio
        className="col-span-2 font-mono text-[10px] font-bold tabular-nums tracking-[0.18em] text-band-fg/38 md:col-span-1"
      >
        {String(index + 1).padStart(2, "0")}
      </p>

      <div className="col-span-10 md:col-span-8">
        <AnimatedTitle text={name} />
      </div>

      <div
        data-work-meta
        className="col-span-10 col-start-3 mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-band-fg/38 md:col-span-3 md:col-start-10 md:mt-1 md:justify-end md:text-right"
      >
        {copy?.tag ? <span>{copy.tag}</span> : null}
        {project.year ? <span>{project.year}</span> : null}
      </div>

      {/*
        Levha + karşı kolon. Eski düzende levha 12 kolonu kaplıyor, altındaki
        satırda metin şeridi geliyordu; levhanın yanındaki alan tamamen boştu.
        Artık levha 9 kolon, kalan 3 kolon punch metnini ve bağlantıyı taşıyor
        — ölü alan yerine karşı ağırlık. Yön (`side`) sırayla değişiyor.
      */}
      <div
        className={`col-span-12 mt-8 grid grid-cols-12 items-end gap-x-5 gap-y-6 md:mt-12 md:gap-x-6 ${
          plateOnRight ? "" : "md:[direction:ltr]"
        }`}
      >
        <div
          data-work-copy
          className={`col-span-12 flex flex-col gap-5 md:col-span-3 md:pb-2 ${
            plateOnRight ? "md:col-start-1 md:order-1" : "md:col-start-10 md:order-2"
          }`}
        >
          {punch ? (
            <p className="max-w-[42ch] text-[15px] leading-[1.65] text-band-fg/58">
              {punch}
            </p>
          ) : null}
          <Link
            href={`/work/${project.id}`}
            scroll={false}
            className="group/link inline-flex min-h-10 items-center gap-3 self-start text-sm font-bold"
          >
            <span className="border-b border-band-fg/35 pb-0.5 transition-colors group-hover/link:border-band-fg">
              {t("openProject")}
            </span>
            <span
              aria-hidden
              className="inline-flex size-8 items-center justify-center border border-band-fg/30 transition-[background-color,color] group-hover/link:bg-band-fg group-hover/link:text-band"
            >
              ↗
            </span>
          </Link>
        </div>

        <Link
          href={`/work/${project.id}`}
          scroll={false}
          aria-label={name}
          data-work-frame
          className={`col-span-12 block md:col-span-9 ${
            plateOnRight ? "md:col-start-4 md:order-2" : "md:col-start-1 md:order-1"
          }`}
        >
          {/*
            Telefon her zaman sayfanın İÇİNE taşar (metin kolonuna bakan
            kenara). Dışa taşarsa `max-w-7xl` kenarında düz kesiliyor.
          */}
          <WorkPlate
            project={project}
            cols={9}
            side={plateOnRight ? "left" : "right"}
          />
        </Link>
      </div>
    </article>
  );
}

/** Hero sonrası ilk dosya: üç işi laptop + telefon içinde canlı sayfa gibi gösterir. */
export default function SelectedWork() {
  const t = useTranslations("selectedWork");
  const locale = useLocale();
  const rootRef = useRef<HTMLElement>(null);
  const items = getFeaturedProjects().slice(0, 3);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          root.querySelectorAll(
            "[data-work-frame], [data-plate-screen], .work-plate__phone, [data-work-word], [data-work-copy], [data-work-meta], [data-work-folio], [data-work-rule]"
          ),
          { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1 }
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isTouch = window.matchMedia("(pointer: coarse), (max-width: 768px)").matches;
        const spreads = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-work-spread]")
        );

        spreads.forEach((spread, index) => {
          const frame = spread.querySelector<HTMLElement>("[data-work-frame]");
          /* clip-path YALNIZCA ekrana — sarmalayıcıda taşan telefonu kesiyor */
          const screen = spread.querySelector<HTMLElement>("[data-plate-screen]");
          const phone = spread.querySelector<HTMLElement>(
            ".work-plate__phone"
          );
          const words = spread.querySelectorAll<HTMLElement>(
            "[data-work-word]"
          );
          const copy = spread.querySelector<HTMLElement>("[data-work-copy]");
          const meta = spread.querySelector<HTMLElement>("[data-work-meta]");
          const folio = spread.querySelector<HTMLElement>("[data-work-folio]");
          const rule = spread.querySelector<HTMLElement>("[data-work-rule]");
          if (!frame) return;

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: spread,
              start: isTouch ? "top 95%" : "top 92%",
              end: isTouch ? "top 40%" : "top 30%",
              scrub: isTouch ? 0.45 : 0.75,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              rule,
              { scaleX: 0, transformOrigin: index % 2 ? "right" : "left" },
              { scaleX: 1, duration: 0.24 },
              0
            )
            .fromTo(
              frame,
              {
                y: isTouch ? 40 : 72,
                scale: isTouch ? 0.98 : 0.965,
                rotateZ: isTouch ? 0 : index % 2 ? 0.8 : -0.8,
                transformOrigin: index % 2 ? "right center" : "left center",
              },
              { y: 0, scale: 1, rotateZ: 0, duration: 0.8 },
              0
            );

          if (!isTouch && screen) {
            timeline.fromTo(
              screen,
              { clipPath: "inset(10% 0 10% 0)" },
              { clipPath: "inset(0% 0 0% 0)", duration: 0.8 },
              0
            );
          }

          timeline
            /* Telefon levhadan biraz sonra ve biraz daha uzağa yürüyor —
               parallaks derinliği kırılan kadrajı gerçek gösteriyor. */
            .fromTo(
              phone,
              { y: isTouch ? 60 : 118, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.72 },
              0.12
            )
            .fromTo(
              words,
              { yPercent: 112, opacity: 0 },
              { yPercent: 0, opacity: 1, stagger: 0.06, duration: 0.42 },
              0.06
            )
            .fromTo(
              [folio, meta],
              { opacity: 0, x: index % 2 ? (isTouch ? 12 : 24) : (isTouch ? -12 : -24) },
              { opacity: 1, x: 0, duration: 0.4 },
              0.08
            )
            .fromTo(
              copy,
              { opacity: 0, y: isTouch ? 16 : 28 },
              { opacity: 1, y: 0, duration: 0.38 },
              0.32
            );
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="hero-work-bridge bg-band px-5 py-14 text-band-fg md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-x-5 border-t border-band-fg/18 pt-6 md:gap-x-6 md:pt-7">
          <div className="col-span-12 md:col-span-9">
            <WordReveal
              text={t("title")}
              className="font-display type-display text-[clamp(3.25rem,9.5vw,8.5rem)] leading-[1.4] tracking-[-0.052em]"
            />
          </div>
          <Reveal
            delay={70}
            className="col-span-11 col-start-2 mt-5 md:col-span-3 md:col-start-10 md:mt-2"
          >
            <p className="text-[15px] leading-[1.7] text-band-fg/58">
              {t("blurb")}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-5 gap-y-20 md:mt-20 md:gap-x-6 md:gap-y-24">
          {items.map((project, index) => (
            <WorkSpread
              key={project.id}
              project={project}
              locale={locale}
              index={index}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex justify-end border-t border-band-fg/18 pt-6 md:mt-20">
            <Link
              href="/work"
              scroll={false}
              className="group inline-flex min-h-11 items-center gap-5 text-sm font-bold text-band-fg"
            >
              {t("viewAll")}
              <span
                aria-hidden
                className="inline-flex size-10 items-center justify-center border border-band-fg/35 transition-[background-color,color] group-hover:bg-band-fg group-hover:text-band"
              >
                ↗
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
