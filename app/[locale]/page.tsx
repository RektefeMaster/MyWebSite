import { setRequestLocale } from "next-intl/server";
import BlogTeaser from "@/components/BlogTeaser";
import HomeMidFold from "@/components/HomeMidFold";
import HomeTailFold from "@/components/HomeTailFold";
import LazyMount from "@/components/LazyMount";

/** Ana sayfa = kontrollü editorial hikâye. Hero layout'ta keep-alive. */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeMidFold />
      <LazyMount
        id="insights"
        minHeight="min(42vh, 480px)"
        rootMargin="240px 0px"
        className="scroll-mt-[var(--nav-offset)]"
      >
        <BlogTeaser locale={locale} />
      </LazyMount>
      <HomeTailFold />
    </>
  );
}
