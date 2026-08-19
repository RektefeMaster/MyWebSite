"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import DecryptedText from "./DecryptedText";
import TextType from "./TextType";

type CapId = "experiences" | "systems" | "ai";

const CAP_IDS: CapId[] = ["experiences", "systems", "ai"];

const CAP_VISUAL: Record<
  CapId,
  {
    hero: string;
    objectPosition: string;
    media: string;
    copy: string;
    caseName?: string;
    caseUrl?: string;
  }
> = {
  experiences: {
    hero: "/projects/casa-aurelia/desktop.jpg",
    objectPosition: "50% 0%",
    media: "md:col-span-7 md:col-start-1",
    copy: "md:col-span-4 md:col-start-9 md:self-end md:pb-10",
    caseName: "Casa Aurelia Roma",
    caseUrl: "https://casa-aurelia-jet.vercel.app/",
  },
  systems: {
    hero: "/projects/crm/desktop.jpg",
    objectPosition: "8% 0%",
    media: "md:col-span-6 md:col-start-7 md:order-2",
    copy: "md:col-span-5 md:col-start-1 md:order-1 md:self-center",
  },
  ai: {
    hero: "/projects/aiahi/desktop.jpg",
    objectPosition: "50% 18%",
    media: "md:col-span-8 md:col-start-2",
    copy: "md:col-span-5 md:col-start-8 md:-mt-20 md:bg-background md:p-8 md:relative md:z-10",
    caseName: "Ahi AI",
    caseUrl: "https://www.aiahi.net/",
  },
};

/** Üç üretim alanı: sekmeli panel yerine üç farklı editöryal dosya. */
export default function Capabilities() {
  const t = useTranslations("capabilities");
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isTouch = window.matchMedia("(pointer: coarse), (max-width: 768px)").matches;
        const shots = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-capability-shot]")
        );
        shots.forEach((shot) => {
          gsap.fromTo(
            shot,
            { yPercent: -4, scale: 1.045 },
            {
              yPercent: 4,
              scale: 1,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: shot.parentElement ?? shot,
                start: "top bottom",
                end: "bottom top",
                scrub: isTouch ? 0.4 : 0.7,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="cv-auto scroll-mt-[var(--nav-offset)] bg-background px-5 py-14 text-foreground md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-x-5 border-t border-foreground/20 pt-6 md:gap-x-6 md:pt-8">
          <div className="col-span-12 md:col-span-8">
            <WordReveal
              text={t("title")}
              className="font-display type-display text-[clamp(1.15rem,6.5vw,7rem)] sm:text-[clamp(3rem,8vw,7rem)] leading-[1.4] tracking-[-0.05em]"
            />
          </div>
          <Reveal delay={70} className="col-span-10 col-start-3 mt-8 md:col-span-3 md:col-start-10 md:mt-1">
            <p className="text-[15px] leading-[1.7] text-foreground/62">
              {t("blurb")}
            </p>
            <div className="mt-4 flex min-h-[2.85rem] items-center gap-1.5 font-mono text-[11px] font-bold text-accent sm:min-h-[1.5rem]">
              <span>›</span>
              <TextType
                text={[
                  "Next.js 16 & React Three Fiber",
                  "Headless Mimari & Yüksek Performans",
                  "Özel CRM & İşletim Panelleri",
                  "WhatsApp & AI Entegrasyonları",
                ]}
                typingSpeed={40}
                deletingSpeed={20}
                pauseDuration={2400}
                showCursor={true}
                cursorCharacter="▍"
                startOnVisible={true}
                loop={true}
              />
            </div>
            <p className="mt-4 font-mono text-[10px] font-bold uppercase leading-relaxed tracking-[0.15em] text-foreground/32">
              <DecryptedText text={t("techLine")} animateOn="inViewHover" />
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {CAP_IDS.map((id, index) => {
            const visual = CAP_VISUAL[id];
            const outcomes = t.raw(`items.${id}.outcomes`) as string[];
            return (
              <article
                key={id}
                className="grid grid-cols-12 items-start gap-x-5 gap-y-8 md:gap-x-6"
              >
                <Reveal mode="mask" className={`col-span-12 ${visual.media}`}>
                  <div
                    className={`relative overflow-hidden bg-stone ${
                      index === 1
                        ? "aspect-[5/4]"
                        : "aspect-[16/11] md:aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={visual.hero}
                      alt={t(`items.${id}.visual`)}
                      fill
                      sizes={
                        index === 1
                          ? "(max-width: 767px) calc(100vw - 40px), 50vw"
                          : "(max-width: 767px) calc(100vw - 40px), 66vw"
                      }
                      quality={82}
                      loading="lazy"
                      decoding="async"
                      data-capability-shot
                      className="scale-[1.045] object-cover object-top"
                      style={{ objectPosition: visual.objectPosition }}
                    />
                  </div>
                  {visual.caseUrl && (
                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-foreground/15 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                      <span>{t("liveLabel")}</span>
                      <a
                        href={visual.caseUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-foreground/60 transition-colors hover:text-accent-ink"
                      >
                        {visual.caseName}
                        <span aria-hidden>↗</span>
                      </a>
                    </div>
                  )}
                </Reveal>

                <Reveal delay={70} className={`col-span-12 ${visual.copy}`}>
                  <div className="border-t border-foreground/20 pt-5">
                    <div className="flex items-baseline justify-between gap-5">
                      <DecryptedText
                        text={String(index + 1).padStart(2, "0")}
                        animateOn="inViewHover"
                        className="font-mono text-[10px] font-bold tracking-[0.16em] text-foreground/35"
                      />
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                        <DecryptedText
                          text={t(`items.${id}.visual`)}
                          animateOn="inViewHover"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[0.94] tracking-[-0.045em]">
                      {t(`items.${id}.title`)}
                    </h3>
                    <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.7] text-foreground/62">
                      {t(`items.${id}.body`)}
                    </p>
                    <p className="mt-5 max-w-[40ch] font-subtitle text-base leading-relaxed text-foreground/74">
                      {t(`items.${id}.detail`)}
                    </p>
                    <ul className="mt-8 border-t border-foreground/15">
                      {outcomes.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[1.25rem_1fr] gap-3 border-b border-foreground/15 py-3.5 text-sm text-foreground/62"
                        >
                          <span aria-hidden>—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex justify-end border-t border-foreground/20 pt-6 md:mt-20">
            <Link
              href="/services"
              scroll={false}
              className="group inline-flex min-h-11 items-center gap-5 text-sm font-bold"
            >
              <DecryptedText text={t("cta")} animateOn="hover" />
              <span
                aria-hidden
                className="inline-flex size-10 items-center justify-center border border-foreground/30 transition-[background-color,color] group-hover:bg-foreground group-hover:text-background"
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
