import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Manifesto from "@/components/Manifesto";
import PageCta from "@/components/PageCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.manifesto" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.manifesto");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        blurb={t("heroBlurb")}
        crumbs={[
          { label: nav("home"), href: "/" },
          { label: nav("manifesto") },
        ]}
      />
      <Manifesto />
      <PageCta
        label={t("ctaLabel")}
        title={t("ctaTitle")}
        blurb={t("ctaBlurb")}
        cta={t("ctaButton")}
      />
    </>
  );
}
