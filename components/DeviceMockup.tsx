import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Project } from "@/data/projects";

/**
 * Official Apple Product Bezel frames (via Monkr / Apple Design Resources).
 * Screen fractions measured from the PNG alpha cutout.
 */
const IPHONE = {
  frameSrc: "/devices/iphone-16-pro/natural-titanium.png",
  maskSrc: "/devices/iphone-16-pro/display.svg",
  frameW: 1508,
  frameH: 3279,
  screen: {
    left: 0.1008,
    top: 0.10034,
    width: 0.79907,
    height: 0.79933,
    radius: "12.2%",
  },
} as const;

const MACBOOK = {
  frameSrc: "/devices/macbook-pro-16/silver.png",
  frameW: 4893,
  frameH: 3164,
  screen: {
    left: 0.16697,
    top: 0.16751,
    width: 0.66626,
    height: 0.6653,
    radius: "1.1%",
  },
} as const;

function ScreenContent({
  src,
  alt,
  colors,
  label,
  sizes,
  priority = false,
  objectPosition = "object-top",
}: {
  src?: string;
  alt: string;
  colors: [string, string];
  label: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: "object-top" | "object-center" | "object-bottom";
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={priority ? 92 : 85}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`object-cover ${objectPosition}`}
      />
    );
  }

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
          quality={85}
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

  return (
    <div
      className="relative h-full w-full"
      role="img"
      aria-label={project.name}
    >
      {/* MacBook Pro 16" — official Apple product bezel */}
      <DeviceFrame
        {...MACBOOK}
        priority={priority}
        sizes={
          isHero
            ? "(max-width: 768px) 90vw, 900px"
            : "(max-width: 640px) 80vw, (max-width: 1024px) 42vw, 340px"
        }
        className={
          isHero
            ? "absolute left-[4%] top-[4%] w-[76%] drop-shadow-[0_28px_50px_rgba(0,0,0,0.3)] md:left-[6%] md:top-[6%] md:w-[72%]"
            : "absolute left-[2%] top-[2%] w-[80%] drop-shadow-[0_18px_34px_rgba(0,0,0,0.24)]"
        }
      >
        <ScreenContent
          src={project.desktopImage}
          alt={`${project.name} masaüstü`}
          colors={project.colors}
          label={project.name}
          priority={priority}
          sizes={
            isHero
              ? "(max-width: 768px) 80vw, 720px"
              : "(max-width: 640px) 70vw, (max-width: 1024px) 34vw, 280px"
          }
        />
      </DeviceFrame>

      {/* iPhone 16 Pro — official Apple product bezel */}
      <DeviceFrame
        {...IPHONE}
        priority={priority}
        sizes={
          isHero
            ? "(max-width: 768px) 34vw, 260px"
            : "(max-width: 640px) 34vw, 150px"
        }
        className={
          isHero
            ? "absolute right-[4%] bottom-[2%] z-20 w-[26%] max-w-[230px] drop-shadow-[0_22px_40px_rgba(0,0,0,0.4)] md:right-[6%] md:bottom-[3%] md:w-[24%] md:max-w-[250px]"
            : "absolute right-[1%] bottom-[2%] z-20 w-[30%] max-w-[132px] drop-shadow-[0_16px_28px_rgba(0,0,0,0.32)]"
        }
      >
        <ScreenContent
          src={project.mobileImage}
          alt={`${project.name} mobil`}
          colors={project.colors}
          label={project.name.split(" ")[0] ?? project.name}
          priority={priority}
          objectPosition="object-center"
          sizes={
            isHero
              ? "(max-width: 768px) 30vw, 220px"
              : "(max-width: 640px) 30vw, 130px"
          }
        />
      </DeviceFrame>
    </div>
  );
}
