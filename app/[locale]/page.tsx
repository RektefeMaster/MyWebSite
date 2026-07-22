import { setRequestLocale } from "next-intl/server";
import Clients from "@/components/Clients";
import Showcase from "@/components/Showcase";
import BlogTeaser from "@/components/BlogTeaser";
import HomeMidFold from "@/components/HomeMidFold";
import HomeTailFold from "@/components/HomeTailFold";

/** Ana sayfa = vitrin (özet). Hero layout'ta keep-alive (HomeHeroKeepAlive). */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Clients />
      <Showcase />
      <HomeMidFold />
      <BlogTeaser locale={locale} />
      <HomeTailFold />
    </>
  );
}
