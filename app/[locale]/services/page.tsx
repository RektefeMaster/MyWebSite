import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import PageCta from "@/components/PageCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternatesFor(locale, "/services"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.services");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        blurb={t("heroBlurb")}
        crumbs={[
          { label: nav("home"), href: "/" },
          { label: nav("services") },
        ]}
      />
      <Services variant="full" />
      <PageCta
        label={t("ctaLabel")}
        title={t("ctaTitle")}
        blurb={t("ctaBlurb")}
        cta={t("ctaButton")}
      />
    </>
  );
}
