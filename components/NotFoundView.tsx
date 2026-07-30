import Link from "next/link";

type NotFoundViewProps = {
  title: string;
  blurb: string;
  homeLabel: string;
  /** Locale-aware path (`/` veya `/tr`) — i18n Link sağlayıcıya ihtiyaç duymaz. */
  homeHref?: string;
  /**
   * Locale layout içinde (nav/footer var) — 100svh kullanma;
   * aksi halde nav + tam ekran + footer çift çerçeve olur.
   */
  embedded?: boolean;
};

/** Paylaşılan 404 gövdesi — locale ve kök not-found aynı düzeni kullanır. */
export default function NotFoundView({
  title,
  blurb,
  homeLabel,
  homeHref = "/",
  embedded = false,
}: NotFoundViewProps) {
  return (
    <div
      className={
        embedded
          ? "flex min-h-[calc(100svh-var(--nav-offset)-14rem)] flex-col items-center justify-center bg-background px-5 py-16 text-center text-foreground"
          : "flex min-h-[100svh] flex-col items-center justify-center bg-background px-5 text-center text-foreground"
      }
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
        404
      </p>
      <h1 className="font-display max-w-lg text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/55">
        {blurb}
      </p>
      <Link
        href={homeHref}
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-bold text-ink-fg"
      >
        {homeLabel}
      </Link>
    </div>
  );
}
