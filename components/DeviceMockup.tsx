"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { Project } from "@/data/projects";

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
}: {
  src?: string;
  scrollSrc?: string;
  alt: string;
  colors: [string, string];
  label: string;
  sizes: string;
  priority?: boolean;
  scroll?: boolean;
}) {
  const scrollable = Boolean(scroll && scrollSrc);

  if (!src && !scrollSrc) {
    return <PlaceholderScreen colors={colors} label={label} />;
  }

  if (scrollable && scrollSrc) {
    return (
      <div className="device-screen-scroll absolute inset-0 bg-black">
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
        quality={priority ? 96 : 90}
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
          quality={90}
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

type DeviceMockupProps = {
  project: Project;
  variant?: "card" | "hero";
  priority?: boolean;
};

export default function DeviceMockup({
  project,
  variant = "card",
  priority = false,
}: DeviceMockupProps) {
  const isHero = variant === "hero";
  // Dokunmatik cihazda hover ile kaydırma yok → uzun native <img> yerine
  // optimize edilmiş statik next/image göster (daha keskin + çok daha hafif).
  // Masaüstünde (fine pointer) hover-scroll aynen korunur.
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

  return (
    <div
      className={`group/mock relative h-full w-full ${canScroll ? "device-mockup--scrollable" : ""}`}
      role="img"
      aria-label={project.name}
    >
      {/* MacBook — baskın düzlem */}
      <DeviceFrame
        {...MACBOOK}
        priority={priority}
        sizes={
          isHero
            ? "(max-width: 768px) 92vw, 920px"
            : "(max-width: 640px) 84vw, (max-width: 1024px) 44vw, 360px"
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
          alt={`${project.name} masaüstü`}
          colors={project.colors}
          label={project.name}
          priority={priority}
          scroll={useScroll}
          sizes={
            isHero
              ? "(max-width: 768px) 82vw, 740px"
              : "(max-width: 640px) 72vw, (max-width: 1024px) 36vw, 300px"
          }
        />
      </DeviceFrame>

      {/*
        iPhone — küçük kartta scroll koyu boşluklara düşüyor;
        mobilde tek viewport (hero) daha net durur. Hafif eğim + net gölge.
      */}
      <DeviceFrame
        {...IPHONE}
        priority={priority}
        sizes={
          isHero
            ? "(max-width: 768px) 34vw, 250px"
            : "(max-width: 640px) 30vw, 124px"
        }
        className={
          isHero
            ? "absolute bottom-[2%] right-[2%] z-20 w-[28%] max-w-[220px] origin-bottom -rotate-[4deg] drop-shadow-[0_22px_40px_rgba(0,0,0,0.38)] md:right-[4%] md:bottom-[3%] md:w-[23%] md:max-w-[240px]"
            : "absolute bottom-[1%] right-[1%] z-20 w-[34%] max-w-[152px] origin-bottom -rotate-[4deg] drop-shadow-[0_16px_28px_rgba(0,0,0,0.34)] sm:w-[28%] sm:max-w-[140px]"
        }
      >
        <ScreenContent
          src={project.mobileImage}
          alt={`${project.name} mobil`}
          colors={project.colors}
          label={project.name.split(" ")[0] ?? project.name}
          priority={priority || !isHero}
          sizes={
            isHero
              ? "(max-width: 768px) 42vw, 280px"
              : "(max-width: 640px) 40vw, 220px"
          }
        />
      </DeviceFrame>
    </div>
  );
}
