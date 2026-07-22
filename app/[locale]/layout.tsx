import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HomeHeroKeepAlive from "@/components/HomeHeroKeepAlive";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import Intro from "@/components/Intro";
import RouteTransition from "@/components/RouteTransition";
import { SITE } from "@/lib/site";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import "../globals.css";

/** Display — başlıklar (Hero 3D hariç) */
const goks = localFont({
  src: [
    { path: "../fonts/goks-regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/goks-italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-goks",
  display: "swap",
});

/** Gövde / alt yazı / UI */
const vireon = localFont({
  src: "../fonts/vireon.otf",
  weight: "400",
  variable: "--font-vireon",
  display: "swap",
});

/** HeroScene 3D Text + yedek stack */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** Perde kararı — ilk boyamadan önce html[data-intro] ayarlar (FOUC yok). */
const introInitScript = `(function(){try{var r=document.documentElement;var q=location.search+location.hash;var play=q.indexOf("intro")>-1||(sessionStorage.getItem("metek-intro")!=="1"&&!matchMedia("(prefers-reduced-motion: reduce)").matches);r.setAttribute("data-intro",play?"play":"skip");}catch(e){document.documentElement.setAttribute("data-intro","skip");}})();`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6e4df" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE.url),
    applicationName: SITE.brand,
    authors: [{ name: "Nurullah Aydın", url: SITE.url }],
    creator: "Nurullah Aydın",
    publisher: SITE.brand,
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: SITE.url,
      locale,
      type: "website",
      siteName: SITE.brand,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const tMeta = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": `${SITE.url}/#org`,
        name: SITE.brand,
        alternateName: "METEK",
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/icon`,
          width: 256,
          height: 256,
        },
        image: `${SITE.url}/icon`,
        description: tMeta("description"),
        email: SITE.email,
        telephone: SITE.phoneTel,
        priceRange: "$$",
        founder: {
          "@type": "Person",
          name: "Nurullah Aydın",
          jobTitle: "Founder",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Malatya",
          addressCountry: "TR",
        },
        areaServed: { "@type": "Place", name: "Worldwide" },
        sameAs: [SITE.instagram],
        knowsAbout: [
          "Web Design",
          "Web Development",
          "Software Development",
          "Artificial Intelligence",
          "Automation",
          "UI/UX Design",
          "SEO",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.email,
          telephone: SITE.phoneTel,
          contactType: "sales",
          availableLanguage: ["Turkish", "English", "Spanish", "German"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.brand,
        inLanguage: locale,
        publisher: { "@id": `${SITE.url}/#org` },
      },
    ],
  };

  return (
    <html
      lang={locale}
      className={`${goks.variable} ${vireon.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: introInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <NextIntlClientProvider>
          <ThemeProvider>
            <SmoothScroll>
              <Navbar />
              {/* Hero WebGL keep-alive — ana sayfa dışına çıkınca unmount olmasın */}
              <HomeHeroKeepAlive />
              <main>{children}</main>
              <Footer />
              <WhatsAppFab />
              <Intro />
              <RouteTransition />
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
