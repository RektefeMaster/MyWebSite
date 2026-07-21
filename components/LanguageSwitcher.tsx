"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("a11y");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full bg-foreground/[0.06] p-1"
      role="group"
      aria-label={t("language")}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          aria-pressed={l === locale}
          className={`inline-flex min-h-8 w-9 items-center justify-center rounded-full text-[11px] font-bold uppercase transition-colors ${
            l === locale
              ? "bg-ink text-ink-fg"
              : "text-ink/55 hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
