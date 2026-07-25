"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import Hero, { loadHeroScene } from "@/components/Hero";

/**
 * Ana sayfada sahneyi hemen çek. Diğer rotalarda kritik yükü bitirip idle'da —
 * ve tasarruf modu / yavaş bağlantıda hiç çekme. Böylece /blog'a doğrudan
 * giren biri 3D sahnenin bedelini ödemez, M.'ye dönüş yine anında açılır.
 */
function usePrefetchHeroScene(onHome: boolean) {
  useEffect(() => {
    if (onHome) {
      void loadHeroScene();
      return;
    }

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;

    const ric = window.requestIdleCallback as
      | typeof window.requestIdleCallback
      | undefined;

    if (!ric) {
      const timer = window.setTimeout(() => void loadHeroScene(), 2000);
      return () => window.clearTimeout(timer);
    }

    const handle = ric(() => void loadHeroScene(), { timeout: 4000 });
    return () => window.cancelIdleCallback(handle);
  }, [onHome]);
}

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

  usePrefetchHeroScene(onHome);

  // Props’tan türetilen sticky state — effect içinde setState yok
  if (onHome && !kept) {
    setKept(true);
  }

  if (!kept) return null;

  return (
    <div
      id="home-hero-keepalive"
      data-parked={onHome ? undefined : "true"}
      aria-hidden={!onHome}
      // Park’ta Tab odağı / hayalet tıklama — aria-hidden yetmez
      inert={!onHome ? true : undefined}
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
