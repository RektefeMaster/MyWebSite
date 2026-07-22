"use client";

import { useState } from "react";
import { usePathname } from "@/i18n/navigation";
import Hero from "@/components/Hero";

/**
 * Hero (WebGL) ana sayfadan çıkınca unmount olursa dönüşte 3–4sn boş kalıyordu
 * (context + font + transmission bake). İlk ziyaretten sonra DOM'da tutup
 * park ediyoruz — geri gelince anında görünür.
 *
 * Park’ta fixed + flow’dan çıkarma, soft-nav sırasında ~100vh layout kayması
 * yaratıyordu. Park’ta da aynı kutuyu akışta tutuyoruz (height:0 + overflow),
 * canvas’ı absolute ile park ediyoruz — document height aniden zıplamaz.
 */
export default function HomeHeroKeepAlive() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [kept, setKept] = useState(onHome);

  // Props’tan türetilen sticky state — effect içinde setState yok
  if (onHome && !kept) {
    setKept(true);
  }

  if (!kept) return null;

  return (
    <div
      id="home-hero-keepalive"
      aria-hidden={!onHome}
      className={
        onHome
          ? "relative"
          : "relative h-0 max-h-0 overflow-hidden opacity-0 pointer-events-none"
      }
    >
      <div
        className={
          onHome
            ? "relative"
            : "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100svh] max-h-[1100px] overflow-hidden opacity-0"
        }
      >
        <Hero parked={!onHome} />
      </div>
    </div>
  );
}
