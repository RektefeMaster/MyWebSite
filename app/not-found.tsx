import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
        404
      </p>
      <h1 className="font-display max-w-lg text-4xl font-bold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/55">
        This page does not exist or was moved. Back to {SITE.brand}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-bold text-ink-fg"
      >
        Home
      </Link>
    </main>
  );
}
