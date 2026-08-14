"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
 * Scroll strip (ham JPG) yalnızca hover niyetinde yüklenir — aşağıdaki
 * `pointerenter` kapısına bak.
 *
 * DIŞA AÇIK: SelectedWork da bunu kullanıyor. Ana sayfadaki kartlar eskiden
 * statik `<Image>` + `scale(1.03)` hover'dı; projeler bu yüzden cansız
 * duruyordu. Aynı kapı ve aynı süre hesabı iki yerde de geçerli olsun diye
 * kopyalamak yerine bu bileşen paylaşılıyor.
 */
export function ProjectScreen({
  src,
  scrollSrc,
  alt,
  colors,
  label,
  sizes,
  priority = false,
  scroll = false,
  quality = 75,
  objectPosition,
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
  /** Statik karede özel kadraj (SelectedWork stage'leri kullanıyor) */
  objectPosition?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollable = Boolean(scroll && scrollSrc);
  const startsReady = scrollable && (priority || !src);
  const scrollImageRef = useRef<HTMLImageElement>(null);
  const scrollReadyRef = useRef(startsReady);
  const scrollLoadedRef = useRef(false);
  const hoveringRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [scrollReady, setScrollReady] = useState(startsReady);
  const [scrollLoaded, setScrollLoaded] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const [scrollMetrics, setScrollMetrics] = useState({
    distance: 0,
    duration: 4.2,
  });

  const measureScrollImage = useCallback(() => {
    const root = rootRef.current;
    const img = scrollImageRef.current;
    if (!root || !img?.naturalWidth) return;

    const screenWidth = root.clientWidth;
    const screenHeight = root.clientHeight;
    if (screenWidth < 8 || screenHeight < 8) return;

    const displayedHeight =
      (img.naturalHeight / img.naturalWidth) * screenWidth;
    const distance = Math.max(0, displayedHeight - screenHeight);
    const screens = distance / screenHeight;

    /*
      Gerçek bir sayfa gezintisi gibi: kısa sayfalar acele etmez, uzun
      sayfalar da sonsuza uzamaz. Telefon ve laptop kendi mesafesini ölçer.

      Tempo BİLEREK yavaş. Önceki katsayılar (2.4 + screens*1.25, tavan 9sn)
      tipik bir sayfayı ~6.4sn'de bitiriyordu; ekran o hızda "kaydırılıyor"
      değil "geçiliyor" gibi duruyor, içerik okunmuyordu. Ekran başına ~2.6sn
      insanın gerçekten göz gezdirdiği hıza denk geliyor.
    */
    const duration = Math.min(16, Math.max(5.5, 3 + screens * 2.6));
    setScrollMetrics((current) => {
      if (
        Math.abs(current.distance - distance) < 0.5 &&
        Math.abs(current.duration - duration) < 0.01
      ) {
        return current;
      }
      return { distance, duration };
    });
  }, []);

  /*
    Hover şeridi ~250KB ham JPG ve sayfada onlarca kart var. Viewport'a girer
    girmez çekilince 768px'te LCP elemanı oluyor, /work'ü 5.5sn'ye çıkarıyordu.
    Artık yalnızca hover niyetinde iniyor: hover yoksa tek bayt inmez.

    Şerit tüm kartta (`data-project-item`) hazırlanır, fakat hareket yalnızca
    gerçek mockup/screen alanında başlar. Böylece kullanıcı başlık veya proje
    notları üzerinde gezinirken ekran kendi kendine akmaz.

    Dokunmatik kapısı ARTIK medya sorgusu DEĞİL, olayın kendisi. Önce
    `matchMedia("(hover:hover) and (pointer:fine)")` bir state'e yazılıyordu;
    o state hidrasyona bağlı olduğu için /work'te mount sonrası `false`
    takılı kalıyordu (ölçüldü: mq true, maxTouchPoints 0, state hâlâ false)
    ve şerit hiç inmiyordu. `pointerType` doğrudan olaydan okunuyor: fare
    değilse şerit inmez, dokunmatikte tek bayt yüklenmez.

    Animasyon `:hover` CSS'ine bırakılmıyor. İlk pointer temasında uzun görsel
    hover zaten aktifken mount edilirse tarayıcı başlangıç karesini boyamadan
    onu doğrudan sayfanın sonuna yerleştiriyordu. Burada niyet, yükleme ve
    hareket ayrı tutuluyor; hover-out yalnız ekran içeriğini başa döndürüyor.
  */
  useEffect(() => {
    if (!scrollable) return;
    const el = rootRef.current;
    if (!el) return;

    const preloadTarget =
      el.closest("[data-project-item]") ?? el.closest("[data-mock-root]") ?? el;
    const motionTarget = el.closest("[data-mock-root]") ?? el;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      reducedMotionRef.current = reducedMotion.matches;
      if (reducedMotion.matches) setScrollActive(false);
    };
    const prepare = (event: Event) => {
      const pointerType = (event as PointerEvent).pointerType;
      if (pointerType && pointerType !== "mouse") return;
      if (reducedMotionRef.current) return;

      if (!scrollReadyRef.current) {
        scrollReadyRef.current = true;
        setScrollReady(true);
      }
    };
    const enter = (event: Event) => {
      const pointerType = (event as PointerEvent).pointerType;
      if (pointerType && pointerType !== "mouse") return;
      hoveringRef.current = true;
      if (reducedMotionRef.current) return;

      prepare(event);
      if (scrollLoadedRef.current) setScrollActive(true);
    };
    const leave = (event: Event) => {
      const pointerType = (event as PointerEvent).pointerType;
      if (pointerType && pointerType !== "mouse") return;
      hoveringRef.current = false;
      setScrollActive(false);
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);
    preloadTarget.addEventListener("pointerenter", prepare);
    motionTarget.addEventListener("pointerenter", enter);
    motionTarget.addEventListener("pointerleave", leave);
    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
      preloadTarget.removeEventListener("pointerenter", prepare);
      motionTarget.removeEventListener("pointerenter", enter);
      motionTarget.removeEventListener("pointerleave", leave);
    };
  }, [scrollable]);

  /*
    İlk top karesini kesin olarak boyat. Görsel cache'ten anında gelse bile iki
    animation frame boyunca transform=0 kalır; ancak sonra aşağı yürür.
  */
  useEffect(() => {
    if (!scrollLoaded || !hoveringRef.current || reducedMotionRef.current) {
      return;
    }

    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (hoveringRef.current && !reducedMotionRef.current) {
          setScrollActive(true);
        }
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
    };
  }, [scrollLoaded]);

  useEffect(() => {
    if (!scrollable || !scrollReady) return;
    const root = rootRef.current;
    if (!root || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(measureScrollImage);
    observer.observe(root);
    return () => observer.disconnect();
  }, [measureScrollImage, scrollable, scrollReady]);

  if (!src && !scrollSrc) {
    return <PlaceholderScreen colors={colors} label={label} />;
  }

  if (scrollable && scrollSrc) {
    return (
      <div
        ref={rootRef}
        className="device-screen-scroll absolute inset-0 bg-black"
        data-scroll-active={scrollActive ? "true" : "false"}
        data-scroll-loaded={scrollLoaded ? "true" : "false"}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            quality={quality}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="object-cover object-top"
            style={objectPosition ? { objectPosition } : undefined}
          />
        ) : null}

        {/*
          `loading="eager"` BİLEREK. Bu <img> ancak `scrollReady` olunca, yani
          kullanıcı zaten hover ettikten sonra DOM'a giriyor — gecikme katmak
          istediğimiz şey değil, beklenen şey.

          Dahası `lazy` burada şeridi tamamen ÖLDÜRÜYORDU: yüklenmeden önce
          kutusu 8px'e çöküyor, Chrome sıfıra yakın kutulu lazy görseli
          getirmiyor, görsel de yükselmediği için hiç yüksekliği olmuyor.
          Telefon şeridi bu yüzden `complete:false / naturalWidth:0` takılı
          kalıyordu (ölçüldü); `eager` yapınca 390×3545 olarak indi.
        */}
        {scrollReady ? (
          /* eslint-disable-next-line @next/next/no-img-element -- tall scroll strip; next/image fill kırpar */
          <img
            ref={scrollImageRef}
            src={scrollSrc}
            alt={src ? "" : alt}
            aria-hidden={src ? true : undefined}
            className="device-screen-scroll__img pointer-events-none absolute left-0 top-0"
            loading="eager"
            decoding="async"
            draggable={false}
            style={{
              opacity: scrollLoaded ? 1 : 0,
              transform: scrollActive
                ? "translate3d(0, -" +
                  scrollMetrics.distance.toFixed(2) +
                  "px, 0)"
                : "translate3d(0, 0, 0)",
              transitionProperty: "transform, opacity",
              transitionDuration:
                (scrollActive ? scrollMetrics.duration : 1.4) + "s, 180ms",
              /*
                İniş eğrisi neredeyse DOĞRUSAL. Eski `(0.32,0.04,0.18,1)` yolun
                büyük kısmını başta harcayıp sonda sürünüyordu — sayfa
                "kaydırılmış" değil "fırlatılmış" gibi duruyordu. Köşegene
                yakın S: yumuşak kalkış, sabit okuma hızı, nazik duruş.
              */
              transitionTimingFunction:
                (scrollActive
                  ? "cubic-bezier(0.4, 0.08, 0.4, 0.92)"
                  : "cubic-bezier(0.33, 1, 0.68, 1)") + ", ease-out",
              willChange: scrollLoaded ? "transform" : undefined,
            }}
            onLoad={() => {
              scrollLoadedRef.current = true;
              measureScrollImage();
              setScrollLoaded(true);
            }}
          />
        ) : null}
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
        style={objectPosition ? { objectPosition } : undefined}
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

/**
 * Telefon — ÇERÇEVELİ, tek başına.
 *
 * WorkPlate bunu kullanıyor: masaüstü ekranı artık laptop kasası içinde değil,
 * tam kanama bir levha; derinliği ve "gerçek cihaz" okumasını levhanın
 * kenarından taşan bu telefon veriyor. Laptop kasası kaldırıldığı için
 * (DESIGN.md: "Device chrome when the project image itself can carry the
 * composition" yapma listesinde) tek cihaz çerçevesi burada kalıyor.
 */
export function PhoneMockup({
  project,
  className,
  sizes = IPHONE_FRAME_SIZES,
  screenSizes = IPHONE_SCREEN_SIZES,
  scroll = true,
}: {
  project: Project;
  className?: string;
  sizes?: string;
  screenSizes?: string;
  scroll?: boolean;
}) {
  const t = useTranslations("a11y");

  return (
    <DeviceFrame
      {...IPHONE}
      priority={false}
      quality={78}
      sizes={sizes}
      className={className}
    >
      <ProjectScreen
        src={project.mobileImage}
        scrollSrc={project.mobileScrollImage}
        alt={t("deviceMobile", { name: project.name })}
        colors={project.colors}
        label={project.name.split(" ")[0] ?? project.name}
        priority={false}
        scroll={scroll && Boolean(project.mobileScrollImage)}
        quality={78}
        sizes={screenSizes}
      />
    </DeviceFrame>
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
  // Şeritlerden HANGİSİ varsa kaydırma açık — bazı projelerde yalnızca biri var
  // Dokunmatik ayıklaması ProjectScreen'deki `pointerType` kapısında.
  const hasStrip = Boolean(
    project.desktopScrollImage || project.mobileScrollImage,
  );
  const useScroll = hasStrip;
  const canScroll = hasStrip;
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
        <ProjectScreen
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
        sizes={isHero ? "(max-width: 768px) 34vw, 250px" : IPHONE_FRAME_SIZES}
        className={
          isHero
            ? "absolute bottom-[2%] right-[2%] z-20 w-[28%] max-w-[220px] origin-bottom -rotate-[4deg] drop-shadow-[0_22px_40px_rgba(0,0,0,0.38)] md:right-[4%] md:bottom-[3%] md:w-[23%] md:max-w-[240px]"
            : "absolute bottom-[1%] right-[1%] z-20 w-[34%] max-w-[152px] origin-bottom -rotate-[4deg] drop-shadow-[0_16px_28px_rgba(0,0,0,0.34)] sm:w-[28%] sm:max-w-[140px]"
        }
      >
        {/*
          Telefon da kaydırıyor. `mobileScrollImage` 11 projede DOLUYDU ama
          hiçbir yerde render edilmiyordu — şeritler deploy'a gidip hiç
          gösterilmiyordu. Artık laptop ile birlikte akıyor: "canlı site"
          okuması asıl buradan geliyor, çünkü mobil şerit sayfanın tamamını
          gösteriyor.

          Perf sözleşmesi değişmedi: şerit yalnızca `pointerenter` ile iner
          (ProjectScreen içindeki kapı); dokunmatik pointer şeridi yüklemez.
          Süre her şeridin kendi doğal yüksekliğinden hesaplandığı için
          laptop ile telefon aynı anda değil, hafif kaymayla ilerliyor.
        */}
        <ProjectScreen
          src={project.mobileImage}
          scrollSrc={project.mobileScrollImage}
          alt={t("deviceMobile", { name: project.name })}
          colors={project.colors}
          label={project.name.split(" ")[0] ?? project.name}
          priority={false}
          scroll={useScroll}
          quality={screenQ}
          sizes={
            isHero ? "(max-width: 768px) 42vw, 280px" : IPHONE_SCREEN_SIZES
          }
        />
      </DeviceFrame>
    </div>
  );
}
