import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeaturedCase from "@/components/FeaturedCase";
import Projects from "@/components/Projects";
import PageCta from "@/components/PageCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.work" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.work");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        blurb={t("heroBlurb")}
        crumbs={[
          { label: nav("home"), href: "/" },
          { label: nav("work") },
        ]}
      />
      <FeaturedCase />
      <Projects variant="full" />
      <PageCta
        label={t("ctaLabel")}
        title={t("ctaTitle")}
        blurb={t("ctaBlurb")}
        cta={t("ctaButton")}
      />
    </>
  );
}
