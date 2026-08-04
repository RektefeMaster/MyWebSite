"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import WhatsAppButton from "./WhatsAppButton";
import SpecularButton from "./SpecularButton";

type PageCtaProps = {
  label: string;
  title: string;
  blurb: string;
  cta: string;
};

/** Page-end band — same composition, fixed title, craft accent. */
export default function PageCta({ label, title, blurb, cta }: PageCtaProps) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-28">
      <Reveal>
        <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 overflow-hidden rounded-[1.75rem] bg-band px-6 py-10 text-band-fg md:flex-row md:items-center md:rounded-[2rem] md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 left-1/3 size-64 rounded-full bg-surface/5 blur-3xl"
          />
          {/* Craft mark — quiet brand presence in the band */}
          <span
            aria-hidden
            className="brand-mark pointer-events-none absolute -bottom-6 right-4 select-none text-[7rem] leading-none text-band-fg/[0.04] md:right-10 md:text-[9rem]"
          >
            M
          </span>

          <div className="relative max-w-xl">
            <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-band-fg/40">
              <span
                aria-hidden
                className="inline-block h-px w-6 bg-accent/70"
              />
              {label}
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-band-fg/55 md:text-[15px]">
              {blurb}
            </p>
          </div>

          <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Magnetic strength={0.22} className="w-full sm:w-auto">
              <SpecularButton
                href={{ pathname: "/", hash: "contact" }}
                tone="accent"
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
