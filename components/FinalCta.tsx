"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SpecularButton from "./SpecularButton";
import { SITE, whatsappHref } from "@/lib/site";
import { motion, motionEase } from "@/lib/motion";
import { gsap, useGSAP } from "@/lib/gsap";

const CurvedInput = dynamic(() => import("./CurvedInput"));

const EMAIL = SITE.email;

const CURVED_INPUT_COLORS = {
  backgroundColor: "#0e2632",
  textColor: "#e8eef3",
  placeholderColor: "rgba(240,237,229,0.42)",
  borderColor: "rgba(240,237,229,0.14)",
  buttonColor: "#175e86",
  buttonTextColor: "#06202e",
  iconColor: "#7ec8e8",
  shadowColor: "#02090a",
} as const;

const NAME_ICON = (
  <>
    <circle cx="0" cy="-2.8" r="3.2" fill="#06202e" />
    <path
      d="M -7 7.6 C -7 3.6 -3.9 1.3 0 1.3 C 3.9 1.3 7 3.6 7 7.6"
      fill="#06202e"
    />
  </>
);

/**
 * Final sahne — başlık + CTA; tıklanınca form aynı sahnede açılır.
 * JS yoksa form noscript/CSS ile erişilebilir (#contact).
 */
export default function FinalCta() {
  const t = useTranslations("finalCta");
  const tContact = useTranslations("contact");
  const locale = useLocale();
  const interests = tContact.raw("interests") as string[];
  const [open, setOpen] = useState(false);
  /** Etiket metni değil indeks tut — dil değişince seçim düşmesin. */
  const [selected, setSelected] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorField, setErrorField] = useState<
    "name" | "email" | "message" | null
  >(null);
  const formRef = useRef<HTMLFormElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sync = () => {
      setOpen(window.location.hash === "#contact");
    };
    sync();
    // SmoothScroll same-page hash pushState → hashchange yok; lazy-reveal + popstate
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener("metek:lazy-reveal", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener("metek:lazy-reveal", sync);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const focusFirst = () => {
      // CurvedInput gerçek <input> kullanır; yoksa textarea
      const field =
        formRef.current?.querySelector<HTMLElement>(
          'input[name="name"], input:not([type="hidden"]), textarea'
        ) ?? null;
      field?.focus();
    };
    if (reduced) {
      focusFirst();
      return;
    }
    const id = window.setTimeout(focusFirst, motion.base * 1000 + 40);
    return () => window.clearTimeout(id);
  }, [open]);

  useGSAP(
    () => {
      const intro = introRef.current;
      const panel = panelRef.current;
      if (!intro || !panel) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(intro, { clearProps: "all" });
        gsap.set(panel, {
          display: open ? "block" : "none",
          opacity: open ? 1 : 0,
          y: 0,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.killTweensOf([intro, panel]);
        if (open) {
          gsap.to(intro, {
            scale: 0.92,
            y: -12,
            opacity: 0.85,
            duration: motion.base,
            ease: motionEase.out,
          });
          gsap.fromTo(
            panel,
            { opacity: 0, y: 28, display: "none" },
            {
              opacity: 1,
              y: 0,
              display: "block",
              duration: motion.narrative,
              ease: motionEase.narrative,
            }
          );
        } else {
          // Hash ayrılınca anında kapat — revert/yarışta açık kalmasın
          gsap.to(intro, {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: motion.base,
            ease: motionEase.out,
          });
          gsap.set(panel, { display: "none", opacity: 0, y: 0 });
        }
      });

      return () => mm.revert();
    },
    { dependencies: [open] }
  );

  function openForm() {
    setOpen(true);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = "contact";
      window.history.replaceState(
        null,
        "",
        url.pathname + url.search + "#contact"
      );
      window.dispatchEvent(new Event("metek:lazy-reveal"));
    }
  }

  function toggleInterest(index: number) {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((x) => x !== index) : [...prev, index]
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nameValue = name.trim() || String(data.get("name") ?? "").trim();
    const emailValue = email.trim() || String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!nameValue) {
      setStatus("error");
      setErrorField("name");
      formRef.current
        ?.querySelector<HTMLElement>('input[name="name"]')
        ?.focus();
      return;
    }
    if (!emailOk) {
      setStatus("error");
      setErrorField("email");
      formRef.current
        ?.querySelector<HTMLElement>('input[name="email"]')
        ?.focus();
      return;
    }
    if (message.length < 8) {
      setStatus("error");
      setErrorField("message");
      formRef.current
        ?.querySelector<HTMLElement>('textarea[name="message"]')
        ?.focus();
      return;
    }
    setStatus("idle");
    setErrorField(null);
    const body = [
      `${tContact("mailName")}: ${nameValue}`,
      `${tContact("mailEmail")}: ${emailValue}`,
      `${tContact("mailInterest")}: ${
        selected
          .map((i) => interests[i])
          .filter(Boolean)
          .join(", ") || "·"
      }`,
      "",
      message,
    ].join("\n");
    // wa.me — popup engeline takılmasın diye aynı sekmede aç (eski mailto gibi).
    setStatus("sent");
    window.location.assign(whatsappHref(body));
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-offset)] relative overflow-hidden bg-band px-5 pb-[calc(5rem+var(--safe-bottom))] pt-16 text-band-fg md:px-10 md:pb-28 md:pt-28"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-8 select-none font-display text-[9rem] leading-none text-band-fg/[0.04] md:-right-4 md:top-4 md:text-[16rem]"
      >
        METEK
      </span>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div ref={introRef} className="origin-top">
          <Reveal>
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-band-fg/40">
              {t("label")}
            </p>
            <h2 className="max-w-[16ch] font-display text-[clamp(2.25rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-band-fg/55 md:text-base">
              {t("blurb")}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:gap-6">
              <Magnetic strength={0.22} className="w-full sm:w-auto">
                <SpecularButton
                  type="button"
                  tone="accent"
                  size="lg"
                  fillMobile
                  aria-expanded={open}
                  aria-controls="final-cta-form"
                  onClick={openForm}
                  className="btn-stable"
                >
                  {t("cta")}
                  <span aria-hidden>↗</span>
                </SpecularButton>
              </Magnetic>
              {!open ? (
                <a
                  href={whatsappHref(t("whatsappPrefill"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-medium text-band-fg/45 underline-offset-4 transition-colors hover:text-band-fg/80 hover:underline"
                >
                  {t("whatsapp")}
                </a>
              ) : null}
            </div>
        </div>

        {/* Form — görünürlük yalnız GSAP display (React style ile savaşma) */}
        <div
          ref={panelRef}
          id="final-cta-form"
          className="mt-12"
          aria-hidden={!open}
          // Kapalıyken odaklanabilir çocuklar aria-hidden ile çelişmesin.
          {...(!open ? { inert: true as const } : {})}
        >
          <form
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            className="rounded-[1.75rem] border border-band-fg/10 bg-band-fg/[0.04] p-5 backdrop-blur-sm md:max-w-2xl md:rounded-3xl md:p-8"
          >
            <div className="grid gap-4">
              <label className="block">
                <span className="mb-2 block text-xs text-band-fg/40">
                  {tContact("name")}
                </span>
                {open ? (
                  <CurvedInput
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(v) => {
                      setName(v);
                      if (errorField === "name") {
                        setErrorField(null);
                        setStatus("idle");
                      }
                    }}
                    placeholder={tContact("name")}
                    ariaLabel={tContact("name")}
                    ariaInvalid={errorField === "name"}
                    autoComplete="name"
                    autoCapitalize="words"
                    width="100%"
                    bend={22}
                    height={56}
                    fontSize={16}
                    cornerRadius={16}
                    shadowSize="sm"
                    showButton={false}
                    icon={NAME_ICON}
                    {...CURVED_INPUT_COLORS}
                  />
                ) : null}
              </label>
              <label className="block">
                <span className="mb-2 block text-xs text-band-fg/40">
                  {tContact("email")}
                </span>
                {open ? (
                  <CurvedInput
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(v) => {
                      setEmail(v);
                      if (errorField === "email") {
                        setErrorField(null);
                        setStatus("idle");
                      }
                    }}
                    placeholder={tContact("email")}
                    ariaLabel={tContact("email")}
                    ariaInvalid={errorField === "email"}
                    autoComplete="email"
                    width="100%"
                    bend={22}
                    height={56}
                    fontSize={16}
                    cornerRadius={16}
                    shadowSize="sm"
                    showButton={false}
                    {...CURVED_INPUT_COLORS}
                  />
                ) : null}
              </label>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-3 text-xs text-band-fg/40">
                {tContact("interestedIn")}
              </legend>
              <div className="flex flex-wrap gap-2">
                {interests.map((label, i) => {
                  const checked = selected.includes(i);
                  return (
                    <button
                      key={`${locale}-${i}`}
                      type="button"
                      onClick={() => toggleInterest(i)}
                      aria-pressed={checked}
                      className={`inline-flex min-h-11 items-center rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-colors ${
                        checked
                          ? "bg-accent text-on-accent"
                          : "border border-band-fg/15 text-band-fg/70 [@media(hover:hover)_and_(pointer:fine)]:hover:border-band-fg/40"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs text-band-fg/40">
                {tContact("message")}
              </span>
              <textarea
                name="message"
                rows={4}
                required
                minLength={8}
                placeholder={tContact("message")}
                aria-invalid={errorField === "message" || undefined}
                aria-describedby={
                  status === "error" ? "final-cta-error" : undefined
                }
                className="w-full resize-y rounded-xl border border-band-fg/10 bg-band-fg/5 px-4 py-3 text-base outline-none transition focus:border-accent/60"
              />
            </label>

            <Magnetic strength={0.22} className="mt-6 block w-full">
              <SpecularButton
                type="submit"
                tone="accent"
                size="lg"
                fillMobile
                className="w-full"
              >
                {tContact("send")}
              </SpecularButton>
            </Magnetic>

            {status === "sent" ? (
              <p className="mt-3 text-center text-xs text-band-fg/45">
                {tContact("sentHint")}
              </p>
            ) : null}

            {status === "error" ? (
              <p
                id="final-cta-error"
                role="alert"
                className="mt-3 text-center text-xs text-red-300/90"
              >
                {errorField === "name"
                  ? tContact("errorName")
                  : errorField === "email"
                    ? tContact("errorEmail")
                    : tContact("errorMessage")}
              </p>
            ) : null}

            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-band-fg/45 underline-offset-4 transition-colors hover:text-band-fg/80 hover:underline"
            >
              {tContact("emailCta")}
            </a>
          </form>
        </div>

        {/* No-JS: form her zaman görünür */}
        <noscript>
          <form
            action={`mailto:${EMAIL}`}
            method="get"
            encType="text/plain"
            className="mt-12 rounded-[1.75rem] border border-band-fg/10 bg-band-fg/[0.04] p-5 md:max-w-2xl md:p-8"
          >
            <p className="mb-4 text-sm text-band-fg/55">{t("blurb")}</p>
            <label className="mb-3 block text-xs text-band-fg/40">
              {tContact("name")}
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-band-fg/15 bg-band-fg/5 px-4 py-3 text-band-fg"
              />
            </label>
            <label className="mb-3 block text-xs text-band-fg/40">
              {tContact("email")}
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-band-fg/15 bg-band-fg/5 px-4 py-3 text-band-fg"
              />
            </label>
            <label className="mb-4 block text-xs text-band-fg/40">
              {tContact("message")}
              <textarea
                name="body"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-band-fg/15 bg-band-fg/5 px-4 py-3 text-band-fg"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-on-accent"
            >
              {tContact("send")}
            </button>
          </form>
        </noscript>
      </div>
    </section>
  );
}
