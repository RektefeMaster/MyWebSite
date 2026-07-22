"use client";

import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import dynamic from "next/dynamic";
import WhatsAppButton from "./WhatsAppButton";
import { SITE } from "@/lib/site";
import SpecularButton from "./SpecularButton";

const CurvedInput = dynamic(() => import("./CurvedInput"));

const EMAIL = SITE.email;

/** Contact (ink zemin) — site lime/ink paleti */
const CURVED_INPUT_COLORS = {
  backgroundColor: "#1f1f1f",
  textColor: "#f4f2ec",
  placeholderColor: "rgba(244,242,236,0.4)",
  borderColor: "rgba(255,255,255,0.12)",
  buttonColor: "#c8e84a",
  buttonTextColor: "#161616",
  iconColor: "#c8e84a",
  shadowColor: "#000000",
} as const;

/** Yeşil chip CurvedInput tarafından çizilir; burada sadece kişi ikonu */
const NAME_ICON = (
  <>
    <circle cx="0" cy="-2.8" r="3.2" fill="#161616" />
    <path
      d="M -7 7.6 C -7 3.6 -3.9 1.3 0 1.3 C 3.9 1.3 7 3.6 7 7.6"
      fill="#161616"
    />
  </>
);

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const interests = t.raw("interests") as string[];
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function toggleInterest(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nameValue = name.trim() || String(data.get("name") ?? "").trim();
    const emailValue = email.trim() || String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!nameValue || !emailOk || message.length < 8) {
      setStatus("idle");
      return;
    }
    const subject = encodeURIComponent(
      `${t("mailSubject")}${nameValue ? ` · ${nameValue}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `${t("mailName")}: ${nameValue}`,
        `${t("mailEmail")}: ${emailValue}`,
        `${t("mailInterest")}: ${selected.join(", ") || "·"}`,
        "",
        message,
      ].join("\n")
    );
    // mailto açıldı — başarı mail istemcisine bağlı; yine de onay göster
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-offset)] bg-band px-5 pb-[calc(6.5rem+var(--safe-bottom))] pt-20 text-band-fg md:px-10 md:pb-28 md:pt-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-band-fg/40">
              {t("label")}
            </p>
            <h2 className="text-[2.35rem] font-bold leading-[1.05] tracking-tight md:text-6xl">
              {t("titleLine1")}{" "}
              <span className="text-lime">{t("titleLine2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-band-fg/55 md:mt-6 md:text-base">
              {t("blurb")}
            </p>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-band-fg/35 md:text-[13px]">
              {t("response")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton className="btn-stable btn-stable--cta justify-center" />
              <a
                href={`mailto:${EMAIL}`}
                className="btn-stable btn-stable--cta inline-flex min-h-12 rounded-full border border-band-fg/15 px-5 py-3 text-sm font-semibold text-band-fg/80 transition-colors hover:border-band-fg/35 hover:text-band-fg"
              >
                {t("emailCta")}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.75rem] border border-band-fg/10 bg-band-fg/[0.04] p-5 backdrop-blur-sm md:rounded-3xl md:p-8"
          >
            <div className="grid gap-4">
              <label className="block">
                <span className="mb-2 block text-xs text-band-fg/40">
                  {t("name")}
                </span>
                <CurvedInput
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={setName}
                  placeholder={t("name")}
                  ariaLabel={t("name")}
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
              </label>
              <label className="block">
                <span className="mb-2 block text-xs text-band-fg/40">
                  {t("email")}
                </span>
                <CurvedInput
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                  placeholder={t("email")}
                  ariaLabel={t("email")}
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
              </label>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-3 text-xs text-band-fg/40">
                {t("interestedIn")}
              </legend>
              <div className="flex flex-wrap gap-2">
                {interests.map((label, i) => {
                  const checked = selected.includes(label);
                  return (
                    <button
                      key={`${locale}-${i}`}
                      type="button"
                      onClick={() => toggleInterest(label)}
                      className={`inline-flex min-h-11 items-center rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition-colors ${
                        checked
                          ? "bg-lime text-on-lime"
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
                {t("message")}
              </span>
              <textarea
                name="message"
                rows={4}
                required
                minLength={8}
                placeholder={t("message")}
                className="w-full resize-y rounded-xl border border-band-fg/10 bg-band-fg/5 px-4 py-3 text-base outline-none transition focus:border-lime/60"
              />
            </label>

            <Magnetic strength={0.25} className="mt-6 block">
              <SpecularButton
                type="submit"
                tone="lime"
                size="lg"
                className="w-full"
              >
                {t("send")}
              </SpecularButton>
            </Magnetic>

            {status === "sent" && (
              <p className="mt-3 text-center text-xs text-band-fg/45">
                {t("sentHint")}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
