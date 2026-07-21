"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

/** Kapasite / açık slot — müşteriye aciliyet ve netlik */
export default function Availability() {
  const t = useTranslations("availability");

  return (
    <section
      id="availability"
      className="scroll-mt-[var(--nav-offset)] px-5 py-14 md:px-10 md:py-16 md:py-20"
    >
      <Reveal>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-band px-7 py-10 text-band-fg md:flex-row md:items-center md:px-12 md:py-12">
          <div className="relative z-10 max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-lime" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-band-fg/55 md:text-base">
              {t("blurb")}
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-4 md:items-end">
            <p className="font-mono text-sm text-band-fg/40">{t("slots")}</p>
            <Magnetic strength={0.35}>
              <Link
                href={{ pathname: "/", hash: "contact" }}
                className="inline-block rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-on-lime"
              >
                {t("cta")}
              </Link>
            </Magnetic>
          </div>

          <span
            aria-hidden
            className="brand-mark pointer-events-none absolute -right-8 -top-10 select-none text-[12rem] leading-none text-band-fg/[0.04] md:text-[16rem]"
          >
            M
          </span>
        </div>
      </Reveal>
    </section>
  );
}
