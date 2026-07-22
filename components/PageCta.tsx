"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import WhatsAppButton from "./WhatsAppButton";
import TextType from "./TextType";
import SpecularButton from "./SpecularButton";

type PageCtaProps = {
  label: string;
  title: string;
  /** Varsa başlık TextType ile döner; yoksa statik `title` */
  titles?: string[];
  blurb: string;
  cta: string;
};

const TYPE_SPEED = { min: 40, max: 75 } as const;

/** Detay sayfası sonu — net birincil aksiyon */
export default function PageCta({
  label,
  title,
  titles,
  blurb,
  cta,
}: PageCtaProps) {
  const typed = Boolean(titles && titles.length > 0);

  return (
    <section className="px-5 py-14 md:px-10 md:py-20">
      <Reveal>
        <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 overflow-hidden rounded-[1.75rem] bg-band px-6 py-10 text-band-fg md:flex-row md:items-center md:rounded-[2rem] md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-lime/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 left-1/3 size-64 rounded-full bg-surface/5 blur-3xl"
          />

          <div className="relative max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-band-fg/40">
              {label}
            </p>
            <h2 className="min-h-[2.6em] text-3xl font-bold tracking-tight md:min-h-[2.4em] md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {typed ? (
                <>
                  <span className="sr-only">{title}</span>
                  <TextType
                    text={titles!}
                    typingSpeed={55}
                    deletingSpeed={28}
                    pauseDuration={2200}
                    initialDelay={200}
                    startOnVisible
                    variableSpeed={TYPE_SPEED}
                    cursorCharacter="|"
                    cursorClassName="text-lime"
                    className="text-band-fg"
                    aria-hidden
                  />
                </>
              ) : (
                title
              )}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-band-fg/55 md:text-[15px]">
              {blurb}
            </p>
          </div>

          <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Magnetic strength={0.3} className="w-full sm:w-auto">
              <SpecularButton
                href={{ pathname: "/", hash: "contact" }}
                tone="lime"
                size="lg"
                fillMobile
                className="btn-stable btn-stable--cta"
              >
                {cta}
                <span aria-hidden>→</span>
              </SpecularButton>
            </Magnetic>
            <WhatsAppButton
              variant="outlineOnDark"
              className="btn-stable btn-stable--cta w-full sm:w-auto"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
