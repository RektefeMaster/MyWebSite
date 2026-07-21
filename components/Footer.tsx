import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import WhatsAppButton from "./WhatsAppButton";
import { SITE } from "@/lib/site";

const EMAILS = [SITE.email, SITE.emailAlt] as const;

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-foreground/10 bg-paper px-5 pb-[calc(5.5rem+var(--safe-bottom))] pt-14 md:px-10 md:pb-16 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="brand-mark inline-flex min-h-11 items-center text-4xl leading-none tracking-tight md:text-5xl"
            aria-label={SITE.brand}
          >
            M<span className="text-lime">.</span>
          </Link>
          <p className="mt-3 text-sm font-bold text-ink">{t("brand")}</p>
          <p className="mt-1 text-xs text-foreground/45">{t("founder")}</p>
          <p className="mt-4 max-w-xs text-sm text-foreground/45">{t("tagline")}</p>
        </div>

        <div>
          <h6 className="mb-4 text-xs font-bold uppercase tracking-wide">
            {t("quickLinks")}
          </h6>
          <ul className="space-y-1 text-sm text-foreground/60">
            <li>
              <Link
                href="/manifesto"
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {t("manifesto")}
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {t("work")}
              </Link>
            </li>
            <li>
              <Link
                href="/approach"
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {t("approach")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link
                href={{ pathname: "/", hash: "contact" }}
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {t("bookMeeting")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-4 text-xs font-bold uppercase tracking-wide">
            {t("contact")}
          </h6>
          <p className="mb-3 text-sm leading-relaxed text-foreground/60">
            {t("location")}
          </p>
          <ul className="space-y-1 text-sm text-foreground/60">
            {EMAILS.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-10 items-center hover:text-foreground"
                >
                  {email}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex min-h-10 items-center hover:text-foreground"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mb-4 text-xs font-bold uppercase tracking-wide">
            {t("follow")}
          </h6>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center font-semibold hover:text-foreground"
              >
                {t("instagram")}
              </a>
            </li>
            <li>
              <WhatsAppButton variant="footer" />
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-foreground/10 pt-6 text-xs text-foreground/40">
        © {new Date().getFullYear()} {SITE.brand} — {t("rights")}
      </div>
    </footer>
  );
}
