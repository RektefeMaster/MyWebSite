import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Showcase from "@/components/Showcase";
import BlogTeaser from "@/components/BlogTeaser";
import HomeMidFold from "@/components/HomeMidFold";
import HomeTailFold from "@/components/HomeTailFold";

/** Ana sayfa = vitrin (özet). Detay içerik diğer sayfalarda. */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Clients />
      <Showcase />
      <HomeMidFold />
      <BlogTeaser locale={locale} />
      <HomeTailFold />
    </>
  );
}
