"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import WhatsAppButton from "./WhatsAppButton";
import SpecularButton from "./SpecularButton";

type PageCtaProps = {
  /** Kept for call-site API; not shown (no eyebrows). */
  label: string;
  title: string;
  blurb: string;
  cta: string;
};

/** Page-end void band — Atelier Signal kinetic close. */
export default function PageCta({ title, blurb, cta }: PageCtaProps) {
  return (
    <section className="border-t border-band-fg/10 bg-band px-5 py-16 text-band-fg md:px-10 md:py-28">
      <Reveal>
        <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 md:flex-row md:items-center md:gap-14">
          <span
            aria-hidden
            className="brand-mark pointer-events-none absolute -bottom-4 right-0 select-none text-[7rem] leading-none text-band-fg/[0.04] md:text-[9rem]"
          >
            M
          </span>

          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] md:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              {title}
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-band-fg/55 md:text-[15px]">
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
