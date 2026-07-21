"use client";

import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import WhatsAppButton from "./WhatsAppButton";

type PageCtaProps = {
  label: string;
  title: string;
  blurb: string;
  cta: string;
};

/** Detay sayfası sonu — net birincil aksiyon */
export default function PageCta({ label, title, blurb, cta }: PageCtaProps) {
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-band-fg/55 md:text-[15px]">
              {blurb}
            </p>
          </div>

          <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Magnetic strength={0.3} className="w-full sm:w-auto">
              <Link
                href={{ pathname: "/", hash: "contact" }}
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold text-on-lime transition-transform duration-200 hover:scale-[1.02] sm:w-auto"
              >
                {cta}
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <WhatsAppButton
              variant="outlineOnDark"
              className="w-full justify-center sm:w-auto"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
