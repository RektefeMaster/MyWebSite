"use client";

import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Hero duvarı — gerçek proje ekranları, sütun sütun sürükleniyor.
 *
 * 3 sütun × 3 ekran = 9 benzersiz görsel. İkinci döngü seti aynı src
 * (ağ tekrarı yok). `loading=lazy` + düşük fetchPriority: kalite aynı,
 * LCP ile yarışmaz. `data-idle` true olunca animasyon durur.
 */

const PER_COLUMN = 3;

const COLUMNS: string[][] = (() => {
  const shots = projects
    .filter((p) => p.mobileImage)
    .slice(0, PER_COLUMN * 3)
    .map((p) => p.mobileImage as string);
  const cols: string[][] = [[], [], []];
  shots.forEach((src, i) => cols[i % 3].push(src));
  return cols;
})();

/** Sütun başına farklı hız — hepsi aynı hızda kayarsa tek blok gibi okunuyor */
const DURATION = ["58s", "74s", "66s"];

export default function HeroWall({ idle = false }: { idle?: boolean }) {
  return (
    <div
      aria-hidden
      data-idle={idle || undefined}
      className="hero-wall pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-wall__tilt absolute inset-0 flex justify-center gap-3 md:gap-4">
        {COLUMNS.map((col, ci) => (
          <div
            key={ci}
            className={`hero-wall__col ${ci === 2 ? "hidden sm:flex" : "flex"}`}
            style={{ ["--dur" as string]: DURATION[ci] }}
          >
            {/* İki set = kesintisiz döngü */}
            {[0, 1].map((dup) => (
              <div key={dup} className="hero-wall__set">
                {col.map((src) => (
                  <div key={`${dup}-${src}`} className="hero-wall__shot">
                    <Image
                      src={src}
                      alt=""
                      width={900}
                      height={1947}
                      sizes="(max-width: 767px) 45vw, 20vw"
                      quality={55}
                      loading="lazy"
                      fetchPriority="low"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="hero-wall__veil" />
    </div>
  );
}
