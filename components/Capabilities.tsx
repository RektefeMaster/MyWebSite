"use client";

import { useCallback, useId, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LightPhone from "./LightPhone";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";

type CapId = "experiences" | "systems" | "ai";

const CAP_IDS: CapId[] = ["experiences", "systems", "ai"];

const CAP_VISUAL: Record<
  CapId,
  { hero: string; mobile: string; objectPosition: string; peep: boolean }
> = {
  experiences: {
    hero: "/projects/casa-aurelia/desktop.jpg",
    mobile: "/projects/casa-aurelia/mobile.jpg",
    objectPosition: "50% 0%",
    peep: false,
  },
  systems: {
    hero: "/projects/crm/desktop.jpg",
    mobile: "/projects/crm/mobile.jpg",
    objectPosition: "8% 0%",
    peep: true,
  },
  ai: {
    hero: "/projects/aiahi/desktop.jpg",
    mobile: "/projects/aiahi/mobile.jpg",
    objectPosition: "50% 18%",
    peep: false,
  },
};

function CapVisual({ id, label }: { id: CapId; label: string }) {
  const visual = CAP_VISUAL[id];

  return (
    <div
      aria-hidden
      className="relative min-h-[220px] overflow-hidden rounded-[1.15rem] bg-ink ring-1 ring-inset ring-white/10 md:min-h-[300px] md:rounded-[1.35rem]"
    >
      <Image
        src={visual.hero}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        quality={75}
        loading="lazy"
        decoding="async"
        className="object-cover object-top"
        style={{ objectPosition: visual.objectPosition }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />

      <div className="absolute left-4 top-4 z-[1] rounded-full bg-ink/55 px-2.5 py-1 backdrop-blur-sm md:left-5 md:top-5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/90">
          {label}
        </span>
      </div>

      {visual.peep ? <LightPhone src={visual.mobile} /> : null}
    </div>
  );
}

function CapDetail({
  id,
  body,
  detail,
  outcomes,
  visualLabel,
  showDetail,
}: {
  id: CapId;
  body: string;
  detail: string;
  outcomes: string[];
  visualLabel: string;
  showDetail: boolean;
}) {
  return (
    <>
      <CapVisual id={id} label={visualLabel} />
      <p className="mt-5 text-sm leading-relaxed text-foreground/55 md:mt-6 md:max-w-lg md:text-base">
        {body}
      </p>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          showDetail
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!showDetail}
      >
        <div className="overflow-hidden">
          {showDetail ? (
            <p className="mt-3 max-w-lg border-l-2 border-accent/70 pl-3.5 text-sm leading-relaxed text-foreground/70 md:text-[15px]">
              {detail}
            </p>
          ) : null}
        </div>
      </div>
      <ul className="mt-4 space-y-2.5 md:mt-5">
        {outcomes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-foreground/70"
          >
            <span
              aria-hidden
              className="mt-2 size-1 shrink-0 rounded-full bg-accent"
            />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function CapCta({ label }: { label: string }) {
  return (
    <Magnetic strength={0.25} className="w-full sm:w-auto">
      <SpecularButton
        href="/services"
        tone="ink"
        size="md"
        fillMobile
        className="btn-stable btn-stable--chip"
      >
        {label}
        <span aria-hidden>→</span>
      </SpecularButton>
    </Magnetic>
  );
}

/** Üç ana capability — hover: accent + preview; tık: seçim + detay metin */
export default function Capabilities() {
  const t = useTranslations("capabilities");
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [hoverPreview, setHoverPreview] = useState<number | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const shown = hoverPreview ?? active;
  const shownId = CAP_IDS[shown];
  const outcomes = t.raw(`items.${shownId}.outcomes`) as string[];
  const showDetail = detailOpen && hoverPreview === null;

  const select = useCallback(
    (index: number) => {
      setHoverPreview(null);
      if (index === active) {
        setDetailOpen((open) => !open);
        return;
      }
      setActive(index);
      setDetailOpen(true);
    },
    [active]
  );

  const onListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next: number | null = null;
    if (e.key === "ArrowDown") next = (active + 1) % CAP_IDS.length;
    else if (e.key === "ArrowUp")
      next = (active - 1 + CAP_IDS.length) % CAP_IDS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = CAP_IDS.length - 1;
    if (next === null) return;
    e.preventDefault();
    select(next);
    listRef.current
      ?.querySelectorAll<HTMLButtonElement>("[data-cap-tab]")
      [next]?.focus();
  };

  return (
    <section
      id="capabilities"
      className="cv-auto scroll-mt-[var(--nav-offset)] border-t border-foreground/8 bg-background px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
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
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/50 md:text-base">
              {t("blurb")}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-3 max-w-md font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/30">
              {t("techLine")}
            </p>
          </Reveal>
        </div>

        <div className="hidden gap-10 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex min-w-0 flex-col">
          <div
            ref={listRef}
            role="tablist"
            aria-orientation="vertical"
            aria-label={t("label")}
            onKeyDown={onListKeyDown}
            className="flex flex-col border-t border-foreground/10"
          >
            {CAP_IDS.map((id, i) => {
              const selected = active === i;
              const preview = hoverPreview === i;
              const hot = selected || preview;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  data-cap-tab
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  aria-expanded={selected && detailOpen}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(i)}
                  onMouseEnter={() => setHoverPreview(i)}
                  onMouseLeave={() => setHoverPreview(null)}
                  className={`group flex items-start gap-5 border-b border-foreground/10 py-6 text-left transition-[color,transform] duration-300 ease-out ${
                    hot
                      ? "text-ink"
                      : "text-foreground/40 [@media(hover:hover)_and_(pointer:fine)]:hover:text-foreground/70"
                  } ${preview && !selected ? "translate-x-1" : ""}`}
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-300 ${
                      hot ? "text-accent-ink" : "text-foreground/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={`block text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl ${
                        hot ? "text-foreground" : ""
                      }`}
                    >
                      {t(`items.${id}.title`)}
                    </span>
                    <span className="mt-1 block max-w-sm text-sm leading-relaxed text-foreground/45 transition-opacity duration-300 group-hover:text-foreground/55">
                      {t(`items.${id}.summary`)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
            {/*
              Sekme listesi sağ panelden kısa kalıyor; CTA ~230px boşlukta
              yüzüyordu. mt-auto ile kolonun dibine otursun.
            */}
            <div className="mt-12 pt-2 lg:mt-auto">
              <CapCta label={t("cta")} />
            </div>
          </div>

          {/* Etiket her zaman *seçili* sekme — `shown` hover önizlemesiyle
              değişiyor ve panel'i seçili olmayan bir sekmeye bağlıyordu. */}
          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
            className="min-w-0 transition-opacity duration-300"
          >
            <CapDetail
              id={shownId}
              body={t(`items.${shownId}.body`)}
              detail={t(`items.${shownId}.detail`)}
              outcomes={outcomes}
              visualLabel={t(`items.${shownId}.visual`)}
              showDetail={showDetail && shown === active}
            />
          </div>
        </div>

        <div className="space-y-0 border-t border-foreground/10 lg:hidden">
          {CAP_IDS.map((id, i) => {
            const open = active === i;
            return (
              <div key={id} className="border-b border-foreground/10">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`${baseId}-mobile-panel-${i}`}
                  onClick={() => select(i)}
                  className="flex w-full items-start gap-4 py-5 text-left"
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors duration-300 ${
                      open ? "text-accent-ink" : "text-foreground/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-bold tracking-tight">
                      {t(`items.${id}.title`)}
                    </span>
                    <span className="mt-0.5 block text-sm text-foreground/45">
                      {t(`items.${id}.summary`)}
                    </span>
                  </span>
                </button>
                {open ? (
                  <div
                    id={`${baseId}-mobile-panel-${i}`}
                    className="pb-6"
                  >
                    <CapDetail
                      id={id}
                      body={t(`items.${id}.body`)}
                      detail={t(`items.${id}.detail`)}
                      outcomes={t.raw(`items.${id}.outcomes`) as string[]}
                      visualLabel={t(`items.${id}.visual`)}
                      showDetail={detailOpen}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* lg+ CTA sekme kolonunun dibinde; burada yalnızca akordeon altı */}
        <div className="mt-12 flex justify-start md:mt-16 lg:hidden">
          <CapCta label={t("cta")} />
        </div>
      </div>
    </section>
  );
}
