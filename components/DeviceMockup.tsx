"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";
import { cardImageSizes } from "@/lib/editorial-layout";

/**
 * Official Apple Product Bezel frames (transparent screen cutouts).
 * Fractions measured from the PNG alpha hole.
 */
const IPHONE = {
  frameSrc: "/devices/iphone-16-pro/natural-titanium.png",
  maskSrc: "/devices/iphone-16-pro/display.svg",
  frameW: 900,
  frameH: 1956,
  screen: {
    left: 0.10111,
    top: 0.10072,
    width: 0.79889,
    height: 0.79908,
    radius: "12.2%",
  },
} as const;

const MACBOOK = {
  frameSrc: "/devices/macbook-pro-16/silver.png",
  frameW: 2400,
  frameH: 1551,
  screen: {
    left: 0.16697,
    top: 0.16751,
    width: 0.66626,
    height: 0.6653,
    radius: "1.1%",
  },
} as const;

/*
  Kart içi görsellerin KART genişliğine oranı. Bunlar `sizes` hesabına girer;
  yanlışsa Next küçük varyantı seçip görseli upscale eder (ölçüldü: 12 kolonluk
  kartta 1075px kutuya 384px varyant → gözle görülür bulanıklık).

  MacBook çerçevesi kartın %84'ü (className `w-[84%]`), ekran da çerçevenin
  MACBOOK.screen.width kadarı — ikisi çarpılır.
*/
const MACBOOK_FRAME_FRAC = 0.84;
const MACBOOK_SCREEN_FRAC = MACBOOK_FRAME_FRAC * MACBOOK.screen.width;

/*
  iPhone md+'da `max-w-[140px]` ile sabitlenir (çerçeve PNG'si şeffaf kenar
  payı yüzünden kutudan ~%15 taşar → ~161px). Mobilde tek kolonlu karta göre
  ölçeklenir. cols'a bağlı olmadığı için sabit string.
*/
const IPHONE_FRAME_SIZES =
  "(min-width: 768px) 170px, calc((100vw - 40px) * 0.40)";
const IPHONE_SCREEN_SIZES =
  "(min-width: 768px) 140px, calc((100vw - 40px) * 0.32)";

function PlaceholderScreen({
  colors,
  label,
}: {
  colors: [string, string];
  label: string;
}) {
  const [c1, c2] = colors;
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-[8%]"
      style={{
        background: `linear-gradient(145deg, ${c1} 0%, ${c2} 100%)`,
      }}
    >
      <div className="h-[6%] w-[28%] rounded-full bg-white/25" />
      <div className="space-y-[6%]">
        <p className="truncate text-[clamp(0.55rem,1.6vw,0.85rem)] font-bold tracking-wide text-white">
          {label}
        </p>
        <div className="h-[4%] w-[70%] rounded-full bg-white/40" />
        <div className="h-[4%] w-[48%] rounded-full bg-white/25" />
      </div>
      <div className="grid grid-cols-3 gap-[6%]">
        <div className="aspect-square rounded-md bg-white/20" />
        <div className="aspect-square rounded-md bg-white/15" />
        <div className="aspect-square rounded-md bg-white/10" />
      </div>
    </div>
  );
}

/**
 * Hover’da tam sayfa gibi kaydırır. Uzun screenshot gerekir;
 * yoksa statik cover gösterilir.
 *
 * Scroll strip (ham JPG) yalnızca yakın viewport’ta yüklenir —
 * soft-nav’da 10× 0.5MB strip aynı anda inmesin.
 */
function ScreenContent({
  src,
  scrollSrc,
  alt,
  colors,
  label,
  sizes,
  priority = false,
  scroll = false,
  quality = 75,
}: {
  src?: string;
  scrollSrc?: string;
  alt: string;
  colors: [string, string];
  label: string;
  sizes: string;
  priority?: boolean;
  scroll?: boolean;
  quality?: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [scrollReady, setScrollReady] = useState(false);
  const scrollable = Boolean(scroll && scrollSrc);

  /*
    Hover şeridi ~250KB ham JPG ve sayfada onlarca kart var. Viewport'a girer
    girmez çekilince 768px'te LCP elemanı oluyor, /work'ü 5.5sn'ye çıkarıyordu.
    Artık yalnızca hover niyetinde iniyor: hover yoksa tek bayt inmez.

    Hedef mockup değil tüm kart (`data-project-item`) — imleç kartın kenarına
    değdiği anda başlıyor, mockup'a varana kadar şerit hazır oluyor.
    Dokunmatikte `useScroll` zaten false, şerit hiç istenmiyor.
  */
  useEffect(() => {
    if (!scrollable || priority || scrollReady) return;
    const el = rootRef.current;
    if (!el) return;

    const hoverTarget =
      el.closest("[data-project-item]") ?? el.closest("[data-mock-root]") ?? el;
    const load = () => setScrollReady(true);
    hoverTarget.addEventListener("pointerenter", load, { once: true });
    return () => hoverTarget.removeEventListener("pointerenter", load);
  }, [scrollable, priority, scrollReady]);

  if (!src && !scrollSrc) {
    return <PlaceholderScreen colors={colors} label={label} />;
  }

  if (scrollable && scrollSrc) {
    // Yakın değilken optimize cover — soft-nav bandwidth
    if (!scrollReady && !priority && src) {
      return (
        <div ref={rootRef} className="absolute inset-0 bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            quality={quality}
            loading="lazy"
            decoding="async"
            className="object-cover object-top"
          />
        </div>
      );
    }

    return (
      <div ref={rootRef} className="device-screen-scroll absolute inset-0 bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element -- tall scroll strip; next/image fill kırpar */}
        <img
          src={scrollSrc}
          alt={alt}
          className="device-screen-scroll__img"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onLoad={(e) => {
            const img = e.currentTarget;
            const parent = img.parentElement;
            if (!parent || !img.naturalWidth) return;
            const cw = parent.clientWidth;
            const ch = parent.clientHeight;
            if (cw < 8 || ch < 8) return;
            const displayedH = (img.naturalHeight / img.naturalWidth) * cw;
            const screens = Math.max(0, displayedH - ch) / ch;
            // ~1.4s / ekran; kısa şerit acele etmesin, uzun şerit uçmasın
            const dur = Math.min(7.8, Math.max(3.5, 2.8 + screens * 1.4));
            img.style.setProperty("--scroll-duration", `${dur.toFixed(2)}s`);
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-black">
      <Image
        src={src ?? scrollSrc!}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="object-cover object-top"
      />
    </div>
  );
}

function DeviceFrame({
  frameSrc,
  frameW,
  frameH,
  screen,
  maskSrc,
  children,
  className,
  style,
  priority = false,
  sizes,
  quality = 75,
}: {
  frameSrc: string;
  frameW: number;
  frameH: number;
  screen: {
    left: number;
    top: number;
    width: number;
    height: number;
    radius: string;
  };
  maskSrc?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  sizes: string;
  quality?: number;
}) {
  return (
    <div
      className={className}
      style={{
        aspectRatio: `${frameW} / ${frameH}`,
        ...style,
      }}
    >
      <div className="relative h-full w-full">
        <div
          className="absolute overflow-hidden bg-black"
          style={{
            left: `${screen.left * 100}%`,
            top: `${screen.top * 100}%`,
            width: `${screen.width * 100}%`,
            height: `${screen.height * 100}%`,
            borderRadius: maskSrc ? undefined : screen.radius,
            ...(maskSrc
              ? {
                  WebkitMaskImage: `url(${maskSrc})`,
                  maskImage: `url(${maskSrc})`,
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }
              : null),
          }}
        >
          {children}
        </div>

        <Image
          src={frameSrc}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="pointer-events-none z-10 select-none object-contain"
          aria-hidden
        />
      </div>
    </div>
  );
}

/** Selected Work / Capabilities — Apple PNG peep kaldırıldı; LightPhone kullan */
type DeviceMockupProps = {
  project: Project;
  variant?: "card" | "hero";
  priority?: boolean;
  /** Kartın editorial grid'te kapladığı kolon (4|5|7|8|12) — sizes hesabı */
  cardCols?: number;
};

export default function DeviceMockup({
  project,
  variant = "card",
  priority = false,
  cardCols = 5,
}: DeviceMockupProps) {
  const t = useTranslations("a11y");
  const isHero = variant === "hero";
  // Dokunmatik: hover-scroll yok → optimize statik next/image
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  const useScroll = !coarse && Boolean(project.desktopScrollImage);
  const canScroll = Boolean(project.desktopScrollImage);
  const screenQ = isHero ? 85 : 75;
  const frameQ = isHero ? 85 : 75;

  return (
    <div
      data-mock-root
      className={`group/mock relative h-full w-full ${canScroll ? "device-mockup--scrollable" : ""}`}
    >
      {/* MacBook — LCP adayı yalnızca hero desktop screen */}
      <DeviceFrame
        {...MACBOOK}
        priority={false}
        quality={frameQ}
        sizes={
          isHero
            ? "(max-width: 768px) 92vw, 920px"
            : cardImageSizes(cardCols, MACBOOK_FRAME_FRAC)
        }
        className={
          isHero
            ? "absolute left-[3%] top-[5%] w-[78%] drop-shadow-[0_28px_56px_rgba(0,0,0,0.28)] md:left-[5%] md:top-[7%] md:w-[74%]"
            : "absolute left-[1%] top-[4%] w-[84%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
        }
      >
        <ScreenContent
          src={project.desktopImage}
          scrollSrc={project.desktopScrollImage}
          alt={t("deviceDesktop", { name: project.name })}
          colors={project.colors}
          label={project.name}
          priority={priority}
          scroll={useScroll}
          quality={screenQ}
          sizes={
            isHero
              ? "(max-width: 768px) 82vw, 740px"
              : cardImageSizes(cardCols, MACBOOK_SCREEN_FRAC)
          }
        />
      </DeviceFrame>

      {/*
        iPhone — kartta asla priority (eski bug: !isHero → 14 eager preload).
        Hero’da da peep LCP değil → lazy.
      */}
      <DeviceFrame
        {...IPHONE}
        priority={false}
        quality={frameQ}
        sizes={
          isHero
            ? "(max-width: 768px) 34vw, 250px"
            : IPHONE_FRAME_SIZES
        }
        className={
          isHero
            ? "absolute bottom-[2%] right-[2%] z-20 w-[28%] max-w-[220px] origin-bottom -rotate-[4deg] drop-shadow-[0_22px_40px_rgba(0,0,0,0.38)] md:right-[4%] md:bottom-[3%] md:w-[23%] md:max-w-[240px]"
            : "absolute bottom-[1%] right-[1%] z-20 w-[34%] max-w-[152px] origin-bottom -rotate-[4deg] drop-shadow-[0_16px_28px_rgba(0,0,0,0.34)] sm:w-[28%] sm:max-w-[140px]"
        }
      >
        <ScreenContent
          src={project.mobileImage}
          alt={t("deviceMobile", { name: project.name })}
          colors={project.colors}
          label={project.name.split(" ")[0] ?? project.name}
          priority={false}
          quality={screenQ}
          sizes={
            isHero
              ? "(max-width: 768px) 42vw, 280px"
              : IPHONE_SCREEN_SIZES
          }
        />
      </DeviceFrame>
    </div>
  );
}
