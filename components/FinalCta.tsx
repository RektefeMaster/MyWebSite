"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SITE, whatsappHref } from "@/lib/site";
import Reveal from "./Reveal";

export default function FinalCta() {
  const t = useTranslations("finalCta");
  const tContact = useTranslations("contact");
  const locale = useLocale();
  const interests = tContact.raw("interests") as string[];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorField, setErrorField] = useState<
    "name" | "email" | "message" | null
  >(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#contact");
    sync();
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
    const timer = window.setTimeout(() => {
      formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    }, 80);
    return () => window.clearTimeout(timer);
  }, [open]);

  function openForm() {
    setOpen(true);
    const url = new URL(window.location.href);
    window.history.replaceState(null, "", `${url.pathname}${url.search}#contact`);
  }

  function toggleInterest(index: number) {
    setSelected((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const message = String(data.get("message") ?? "").trim();

    if (!cleanName) {
      setStatus("error");
      setErrorField("name");
      formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setStatus("error");
      setErrorField("email");
      formRef.current?.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
      return;
    }
    if (message.length < 8) {
      setStatus("error");
      setErrorField("message");
      formRef.current?.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.focus();
      return;
    }

    setStatus("sent");
    setErrorField(null);
    const body = [
      `${tContact("mailName")}: ${cleanName}`,
      `${tContact("mailEmail")}: ${cleanEmail}`,
      `${tContact("mailInterest")}: ${
        selected.map((index) => interests[index]).filter(Boolean).join(", ") || "·"
      }`,
      "",
      message,
    ].join("\n");
    window.location.assign(whatsappHref(body));
  }

  const fieldClass =
    "w-full border-0 border-b border-band-fg/25 bg-transparent px-0 py-4 text-base text-band-fg outline-none transition-colors placeholder:text-band-fg/28 focus:border-band-fg";

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-offset)] overflow-hidden bg-band px-5 pb-[calc(4rem+var(--safe-bottom))] pt-14 text-band-fg md:px-10 md:pb-20 md:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-x-5 border-t border-band-fg/20 pt-6 md:gap-x-6 md:pt-8">
          <Reveal className="col-span-12 md:col-span-9">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-band-fg/36">
              {t("label")}
            </p>
            <h2 className="mt-8 max-w-[12ch] font-display type-display text-[clamp(3.6rem,10.5vw,9.5rem)] leading-[1.4] tracking-[-0.055em]">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={80} className="col-span-10 col-start-3 mt-9 md:col-span-3 md:col-start-10 md:mt-12">
            <p className="max-w-[40ch] text-[15px] leading-[1.7] text-band-fg/62">
              {t("blurb")}
            </p>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="final-cta-form"
              onClick={openForm}
              className="group mt-9 inline-flex min-h-12 items-center gap-5 border-b border-band-fg/45 text-sm font-bold text-band-fg transition-colors hover:border-band-fg"
            >
              {t("cta")}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
            </button>
            {!open ? (
              <a
                href={whatsappHref(t("whatsappPrefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-fit text-xs text-band-fg/40 underline underline-offset-4 transition-colors hover:text-band-fg/75"
              >
                {t("whatsapp")}
              </a>
            ) : null}
          </Reveal>
        </div>

        <div
          id="final-cta-form"
          hidden={!open}
          className="mt-14 border-t border-band-fg/20 pt-8 md:mt-20 md:pt-10"
        >
          <form
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            className="grid grid-cols-12 gap-x-5 gap-y-12 md:gap-x-6"
          >
            <div className="col-span-12 grid gap-8 md:col-span-5">
              <label className="block">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-band-fg/38">
                  01 / {tContact("name")}
                </span>
                <input
                  name="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errorField === "name") setErrorField(null);
                  }}
                  required
                  autoComplete="name"
                  placeholder={tContact("name")}
                  aria-invalid={errorField === "name" || undefined}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-band-fg/38">
                  02 / {tContact("email")}
                </span>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (errorField === "email") setErrorField(null);
                  }}
                  required
                  autoComplete="email"
                  placeholder={tContact("email")}
                  aria-invalid={errorField === "email" || undefined}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-band-fg/38">
                  03 / {tContact("message")}
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  minLength={8}
                  placeholder={tContact("message")}
                  aria-invalid={errorField === "message" || undefined}
                  aria-describedby={status === "error" ? "final-cta-error" : undefined}
                  className={`${fieldClass} resize-y leading-relaxed`}
                />
              </label>
            </div>

            <fieldset className="col-span-12 md:col-span-6 md:col-start-7">
              <legend className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-band-fg/38">
                04 / {tContact("interestedIn")}
              </legend>
              <div className="grid border-t border-band-fg/20 sm:grid-cols-2">
                {interests.map((label, index) => {
                  const checked = selected.includes(index);
                  return (
                    <button
                      key={`${locale}-${index}`}
                      type="button"
                      onClick={() => toggleInterest(index)}
                      aria-pressed={checked}
                      className="group grid min-h-14 grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-band-fg/20 py-3 text-left text-sm text-band-fg/62 sm:odd:border-r sm:odd:pr-4 sm:even:pl-4"
                    >
                      <span className="font-mono text-[9px] text-band-fg/28">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={checked ? "text-band-fg" : ""}>{label}</span>
                      <span aria-hidden className="font-mono text-xs text-band-fg/40">
                        {checked ? "[×]" : "[ ]"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-between border border-band-fg bg-band-fg px-5 text-sm font-bold text-band transition-[background-color,color] hover:bg-transparent hover:text-band-fg sm:w-auto sm:min-w-64"
              >
                {tContact("send")}
                <span aria-hidden>↗</span>
              </button>

              {status === "sent" ? (
                <p className="mt-4 text-xs text-band-fg/48">{tContact("sentHint")}</p>
              ) : null}
              {status === "error" ? (
                <p id="final-cta-error" role="alert" className="mt-4 text-xs text-red-200">
                  {errorField === "name"
                    ? tContact("errorName")
                    : errorField === "email"
                      ? tContact("errorEmail")
                      : tContact("errorMessage")}
                </p>
              ) : null}
              <a
                href={`mailto:${SITE.email}`}
                className="mt-5 block w-fit text-xs text-band-fg/40 underline underline-offset-4 hover:text-band-fg/75"
              >
                {tContact("emailCta")}
              </a>
            </fieldset>
          </form>
        </div>

        <noscript>
          <p className="mt-16 border-t border-band-fg/20 pt-8 text-sm text-band-fg/60">
            <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
              {tContact("emailCta")}
            </a>
          </p>
        </noscript>
      </div>
    </section>
  );
}
