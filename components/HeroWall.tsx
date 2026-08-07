"use client";

import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Hero duvarı — gerçek proje ekranları, sütun sütun sürükleniyor.
 *
 * Neden bu: stüdyonun satacak müşteri logosu yok, o yüzden ilk ekran iddia
 * değil KANIT göstermeli. Ekranlar zaten çekilmiş (`public/projects/*`);
 * eskiden yalnızca kart içinde minik mockup olarak görünüyorlardı.
 *
 * Perf: 3 sütun = 3 composite katman, `translate3d` keyframe (layout/paint
 * yok). `data-idle` true olunca duruyor — hero görüş dışına çıkınca
 * Hero.tsx set ediyor, yani ekran dışında sıfır iş. reduced-motion'da hiç
 * başlamıyor (craft.css).
 */

/*
  Sütun başına 3 ekran (toplam 9 benzersiz görsel), 14 değil.

  Ölçüldü: 14 görselle hero ilk yüklemede ~465KB indiriyordu ve duvar zaten
  perde altında, 7° eğik, ~190px genişlikte bir DOKU olarak okunuyor —
  kimse 14'ünü tek tek ayırt etmiyor. 9 görsel aynı etkiyi veriyor.
  Not: her sütun iki kez basılıyor (kesintisiz döngü) ama src aynı olduğu
  için ikinci set ağdan TEK bayt indirmiyor, sadece DOM düğümü.
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
                      /*
                        Kutu: clamp(4.75rem,14vw,9rem) × scale(1.34) ≈ 193px CSS.
                        DPR2'de ~386px lazım → 20vw (1440'ta 288) next/image'ı
                        384 varyantına düşürüyor. Sabit px yazma (AGENTS.md):
                        kutu vw ile büyüyor.
                      */
                      sizes="(max-width: 767px) 45vw, 20vw"
                      /* Perde altında, eğik, arka plan dokusu — 55 yeterli */
                      quality={55}
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
