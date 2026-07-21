"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

type TechGroup = {
  title: string;
  blurb: string;
  items: string[];
};

/** Ayrı bölüm: kullanılan / bilinen teknolojilerde profesyonellik vurgusu */
export default function TechExpertise() {
  const t = useTranslations("tech");
  const groups = t.raw("groups") as TechGroup[];

  return (
    <section
      id="tech"
      className="cv-auto scroll-mt-[var(--nav-offset)] border-y border-foreground/8 bg-ink px-5 py-16 text-paper md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-paper/40">
              {t("label")}
            </p>
          </Reveal>
          <WordReveal
            text={t("title")}
            className="text-5xl font-bold tracking-tight text-paper md:text-7xl"
          />
          <Reveal delay={80}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/55 md:text-lg">
              {t("blurb")}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 50}>
              <article className="flex h-full flex-col rounded-3xl border border-paper/12 bg-paper/[0.04] px-6 py-7 md:px-8 md:py-8">
                <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-paper md:text-2xl">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/50 md:text-[15px]">
                  {group.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-paper/15 bg-paper/[0.06] px-3 py-1.5 text-xs font-semibold tracking-tight text-paper/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
