import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Showcase from "@/components/Showcase";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import BlogTeaser from "@/components/BlogTeaser";
import WorkingPrinciples from "@/components/WorkingPrinciples";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";

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
      <Projects variant="teaser" />
      <Stats />
      <Services variant="teaser" />
      <BlogTeaser locale={locale} />
      <WorkingPrinciples />
      <Availability />
      <Contact />
    </>
  );
}
