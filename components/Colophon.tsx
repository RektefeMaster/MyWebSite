"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations, useLocale } from "next-intl";

/**
 * Künye — sayfanın kendi ölçümü.
 *
 * Stüdyonun tezi "teslimden sonra ayakta kalan iş". Site bunu her yerde
 * söylüyor ama hiçbir yerde göstermiyordu. Buradaki rakamlar rozet değil:
 * ziyaretçinin KENDİ tarayıcısından, o an, gerçek ölçüm. İyi çıkarsa iddia
 * kanıtlanır; kötü çıkarsa da dürüst kalır — asıl mesele bu.
 *
 * Intro perdesi 000→100 sayıyor; burada da sayıyor. Açılış ve kapanış aynı
 * hareket diliyle bağlanıyor, tek farkı bu rakamların gerçek olması.
 *
 * Safari `largest-contentful-paint` / `layout-shift` desteklemiyor; o metrik
 * "—" olarak kalır. Uydurma değer yok, yapı da bozulmaz.
 */

/**
 * Üç satır HER ZAMAN basılır (SSR dahil); yalnızca değer sonradan dolar.
 * Satırları ölçüm gelince eklemek mobilde sayfayı zıplatıyordu (CLS 0.02).
 * Ölçülemeyen metrik "—" kalır: yapı sabit, uydurma değer yok.
 */
type MetricKey = "paint" | "shift" | "ready";
const METRIC_KEYS: MetricKey[] = ["paint", "shift", "ready"];
const UNIT: Record<MetricKey, "s" | ""> = { paint: "s", shift: "", ready: "s" };
type Measured = Partial<Record<MetricKey, number>>;

const EASE = (t: number) => 1 - Math.pow(1 - t, 3);

function useCountUp(target: number, run: boolean, reduced: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    // reduced-motion'da hiç animasyon yok; değer render'da türetiliyor
    if (!run || reduced) return;
    let raf = 0;
    const t0 = performance.now();
    const DUR = 900;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DUR);
      setV(target * EASE(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, reduced]);
  return reduced ? target : v;
}

/**
 * prefers-reduced-motion — effect içinde senkron setState yerine harici
 * store aboneliği (Hero'daki intro okumasıyla aynı desen).
 */
const RM_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(RM_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(RM_QUERY).matches,
    () => false
  );
}

function Readout({
  label,
  value,
  unit,
  run,
  reduced,
}: {
  label: string;
  value: number | undefined;
  unit: "s" | "";
  run: boolean;
  reduced: boolean;
}) {
  const has = typeof value === "number";
  const v = useCountUp(value ?? 0, run && has, reduced);
  const shown = has ? (unit === "s" ? v.toFixed(2) : v.toFixed(3)) : "—";
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 py-3 sm:block sm:border-b-0 sm:py-0">
      <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/35">
        {label}
      </dt>
      <dd className="font-mono text-[1.35rem] font-bold leading-none text-ink sm:mt-3 sm:text-[1.75rem]">
        {/*
          Sabit genişlik: en uzun değer "0.000" (5ch). "—" de aynı kutuyu
          kaplasın ki ölçüm gelince rakam yana kaymasın.
        */}
        <span className="inline-block min-w-[5ch] text-right tabular-nums">
          {shown}
        </span>
        <span
          className={`ml-1 text-[0.6em] font-bold text-foreground/40 ${
            unit && has ? "" : "invisible"
          }`}
        >
          {unit || "s"}
        </span>
      </dd>
    </div>
  );
}

export default function Colophon() {
  const t = useTranslations("colophon");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const [measured, setMeasured] = useState<Measured>({});
  const [clock, setClock] = useState<string | null>(null);
  const [run, setRun] = useState(false);
  const reduced = useReducedMotion();

  /* Stüdyo saati — "gerçek bir yerde gerçek insanlar" sinyali */
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(locale, {
      timeZone: "Europe/Istanbul",
      hour: "2-digit",
      minute: "2-digit",
    });
    const sync = () => setClock(fmt.format(new Date()));
    sync();
    const id = window.setInterval(sync, 30_000);
    return () => window.clearInterval(id);
  }, [locale]);

  /* Gerçek ölçüm. Desteklenmeyen metrik "—" olarak kalır. */
  useEffect(() => {
    let lcp = 0;
    let cls = 0;
    const obs: PerformanceObserver[] = [];
    const supported = new Set<string>();
    const watch = (type: string, cb: (e: PerformanceEntry) => void) => {
      try {
        const o = new PerformanceObserver((l) => l.getEntries().forEach(cb));
        o.observe({ type, buffered: true });
        obs.push(o);
        supported.add(type);
      } catch {
        /* tarayıcı bu metriği bilmiyor — satır "—" kalacak */
      }
    };
    watch("largest-contentful-paint", (e) => {
      lcp = Math.max(lcp, e.startTime);
    });
    watch(
      "layout-shift",
      (e) => {
        const s = e as PerformanceEntry & {
          value: number;
          hadRecentInput: boolean;
        };
        if (!s.hadRecentInput) cls += s.value;
      }
    );

    const settle = window.setTimeout(() => {
      obs.forEach((o) => o.disconnect());
      const nav = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;
      const fcp = performance.getEntriesByName("first-contentful-paint")[0];
      const paint = lcp || fcp?.startTime || 0;

      const out: Measured = {};
      if (paint > 0) out.paint = paint / 1000;
      // CLS yalnızca gerçekten gözlemlenebildiyse (Safari desteklemiyor)
      if (supported.has("layout-shift")) out.shift = cls;
      if (nav?.domInteractive) out.ready = nav.domInteractive / 1000;
      setMeasured(out);
    }, 2600);

    return () => {
      window.clearTimeout(settle);
      obs.forEach((o) => o.disconnect());
    };
  }, []);

  /* Görüşe girince say — sayfa açılır açılmaz değil */
  useEffect(() => {
    const el = ref.current;
    if (!el || run) return;
    if (!("IntersectionObserver" in window)) {
      // IO yok: bir sonraki tick'te başlat — effect gövdesinde senkron
      // setState zincirleme render tetikliyor.
      // window.setTimeout değil: TS `in` kontrolüyle window'u never'a daraltıyor
      const id = setTimeout(() => setRun(true), 0);
      return () => clearTimeout(id);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        setRun(true);
        io.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [run]);

  return (
    <section
      ref={ref}
      aria-labelledby="colophon-title"
      className="border-t border-foreground/10 bg-paper px-5 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h2
            id="colophon-title"
            className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/45"
          >
            {t("title")}
          </h2>
          {/*
            Saat sunucuda bilinmiyor (saat dilimi + hydration). Yine de metin
            AYNI uzunlukta basılıp yalnızca görünürlüğü değişiyor: sonradan
            gelen saat satırın genişliğini değiştirip sayfayı kaydırmasın.
          */}
          <p
            className={`font-mono text-[10px] font-bold uppercase tracking-[0.16em] tabular-nums text-foreground/35 ${
              clock ? "" : "invisible"
            }`}
          >
            <span className="text-lime-ink">●</span> {t("studio")}{" "}
            {clock ?? "00:00"}
          </p>
        </div>

        {/*
          Plaka düzeni: solda iddia, sağda ölçüm. Üçü sayfaya yayılınca
          dağınık duruyordu; tek küme halinde "alet plakası" gibi okunuyor.
        */}
        <div className="mt-6 grid gap-x-12 gap-y-6 border-t border-foreground/10 pt-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <p className="max-w-sm text-sm leading-relaxed text-foreground/55 md:text-[15px]">
            {t("lede")}
          </p>

          {/* Ölçüm gelene kadar yükseklik rezerve — geç dolan sayı zıplatmasın */}
          <dl className="grid gap-x-8 sm:grid-cols-3 sm:gap-y-0">
            {METRIC_KEYS.map((k) => (
              <Readout
                key={k}
                label={t(k)}
                value={measured[k]}
                unit={UNIT[k]}
                run={run}
                reduced={reduced}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
