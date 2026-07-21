"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import CurvedInput from "./CurvedInput";
import WhatsAppButton from "./WhatsAppButton";
import { SITE } from "@/lib/site";

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
    const nameValue = name.trim() || String(data.get("name") ?? "");
    const emailValue = email.trim() || String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(
      `${t("mailSubject")}${nameValue ? ` — ${nameValue}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `${t("mailName")}: ${nameValue}`,
        `${t("mailEmail")}: ${emailValue}`,
        `${t("mailInterest")}: ${selected.join(", ") || "—"}`,
        "",
        message,
      ].join("\n")
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-offset)] bg-band px-5 py-20 text-band-fg md:px-10 md:py-28"
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
              <WhatsAppButton />
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-band-fg/15 px-5 py-3 text-sm font-semibold text-band-fg/80 transition-colors hover:border-band-fg/35 hover:text-band-fg"
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
                  value={name}
                  onChange={setName}
                  placeholder={t("name")}
                  ariaLabel={t("name")}
                  autoComplete="name"
                  width="100%"
                  bend={22}
                  height={56}
                  fontSize={15}
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
                  fontSize={15}
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
                {interests.map((label) => {
                  const checked = selected.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggleInterest(label)}
                      className={`inline-flex min-h-9 items-center rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                        checked
                          ? "bg-lime text-on-lime"
                          : "border border-band-fg/15 text-band-fg/70 hover:border-band-fg/40"
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
                placeholder={t("message")}
                className="w-full resize-y rounded-xl border border-band-fg/10 bg-band-fg/5 px-4 py-3 text-sm outline-none transition focus:border-lime/60"
              />
            </label>

            <Magnetic strength={0.25} className="mt-6 block">
              <button
                type="submit"
                className="btn-sheen w-full min-h-12 rounded-full bg-lime py-3.5 text-sm font-bold text-on-lime transition-transform active:scale-[0.99]"
              >
                {t("send")}
              </button>
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
