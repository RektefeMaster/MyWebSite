import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Showcase from "@/components/Showcase";
import Projects from "@/components/Projects";
import BlogTeaser from "@/components/BlogTeaser";

/** Aşağı katmanlar — ayrı chunk; SSR HTML korunur, ilk JS parse ↓ */
const Stats = dynamic(() => import("@/components/Stats"));
const Services = dynamic(() => import("@/components/Services"));
const TechExpertise = dynamic(() => import("@/components/TechExpertise"));
const WorkingPrinciples = dynamic(() => import("@/components/WorkingPrinciples"));
const Availability = dynamic(() => import("@/components/Availability"));
const Contact = dynamic(() => import("@/components/Contact"));

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
      <TechExpertise />
      <BlogTeaser locale={locale} />
      <WorkingPrinciples />
      <Availability />
      <Contact />
    </>
  );
}
