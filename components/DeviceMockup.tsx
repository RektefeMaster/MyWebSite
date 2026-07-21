import Image from "next/image";
import type { Project } from "@/data/projects";

function ScreenContent({
  src,
  alt,
  colors,
  label,
  sizes,
  priority = false,
}: {
  src?: string;
  alt: string;
  colors: [string, string];
  label: string;
  sizes: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={priority ? 90 : 75}
        priority={priority}
        className="object-cover object-top"
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
      {/* Soft stage / desk */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[8%] bottom-[6%] h-[18%] rounded-[100%] bg-black/[0.12] blur-2xl"
      />

      {/* Laptop */}
      <div
        className={
          isHero
            ? "absolute left-[3%] top-[7%] w-[78%] md:left-[5%] md:top-[9%] md:w-[74%]"
            : "absolute left-[1.5%] top-[5%] w-[79%]"
        }
      >
        {/* Lid */}
        <div className="relative rounded-t-[12px] bg-gradient-to-b from-[#3a3a3c] via-[#2c2c2e] to-[#1c1c1e] p-[1.4%] pb-[1.1%] shadow-[0_28px_50px_-18px_rgba(0,0,0,0.55)] ring-1 ring-black/40 md:rounded-t-[14px]">
          {/* Camera bar */}
          <div className="relative mb-[1.2%] flex h-[7px] items-center justify-center md:h-[9px]">
            <div className="size-[5px] rounded-full bg-[#0a0a0a] ring-1 ring-white/10 md:size-[6px]">
              <div className="mx-auto mt-[1.5px] size-[2px] rounded-full bg-[#1e3a5f]/80" />
            </div>
          </div>

          {/* Screen */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <ScreenContent
              src={project.desktopImage}
              alt={`${project.name} masaüstü`}
              colors={project.colors}
              label={project.name}
              priority={priority}
              sizes={
                isHero
                  ? "(max-width: 768px) 90vw, 960px"
                  : "(max-width: 640px) 75vw, (max-width: 1024px) 38vw, 28vw"
              }
            />
            {/* Glass reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-black/20"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-white/[0.07] to-transparent"
            />
          </div>
        </div>

        {/* Hinge */}
        <div className="relative z-[1] h-[3px] bg-gradient-to-b from-[#52525b] via-[#3f3f46] to-[#27272a]" />

        {/* Base */}
        <div className="relative mx-auto w-[108%] -translate-x-[3.7%]">
          <div className="h-[11px] rounded-b-[12px] bg-gradient-to-b from-[#d4d4d8] via-[#b8b8be] to-[#9a9aa3] shadow-[0_10px_18px_-8px_rgba(0,0,0,0.45)] md:h-[13px] md:rounded-b-[14px]">
            <div className="mx-auto h-[3px] w-[16%] rounded-b-[3px] bg-[#7c7c86]/75" />
          </div>
          {/* Front lip */}
          <div className="mx-auto mt-px h-[2px] w-[102%] -translate-x-[1%] rounded-b-full bg-gradient-to-b from-[#8b8b93] to-[#6b6b74]" />
        </div>
      </div>

      {/* Phone */}
      <div
        className={
          isHero
            ? "absolute bottom-[3%] right-[2%] z-10 w-[27%] max-w-[210px] md:right-[5%] md:bottom-[4%] md:w-[23%] md:max-w-[250px]"
            : "absolute bottom-[3%] right-[1.5%] z-10 w-[29%] max-w-[128px]"
        }
      >
        <div className="relative rounded-[1.55rem] bg-gradient-to-b from-[#3f3f46] via-[#18181b] to-[#09090b] p-[5%] shadow-[0_26px_40px_-14px_rgba(0,0,0,0.65)] ring-1 ring-white/15 md:rounded-[1.75rem]">
          {/* Side buttons */}
          <div
            aria-hidden
            className="absolute -left-[2px] top-[16%] h-[7%] w-[2px] rounded-l-sm bg-[#52525b]"
          />
          <div
            aria-hidden
            className="absolute -left-[2px] top-[26%] h-[11%] w-[2px] rounded-l-sm bg-[#52525b]"
          />
          <div
            aria-hidden
            className="absolute -right-[2px] top-[24%] h-[13%] w-[2px] rounded-r-sm bg-[#52525b]"
          />

          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.15rem] bg-black ring-1 ring-black/40 md:rounded-[1.3rem]">
            <ScreenContent
              src={project.mobileImage}
              alt={`${project.name} mobil`}
              colors={project.colors}
              label={project.name.split(" ")[0] ?? project.name}
              priority={priority}
              sizes={
                isHero
                  ? "(max-width: 768px) 32vw, 250px"
                  : "(max-width: 640px) 30vw, 128px"
              }
            />

            {/* Dynamic Island */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[2.6%] left-1/2 z-20 h-[3.8%] w-[32%] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            />

            {/* Home indicator */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[1.8%] left-1/2 z-20 h-[1.2%] w-[34%] -translate-x-1/2 rounded-full bg-white/35"
            />

            {/* Glass */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
