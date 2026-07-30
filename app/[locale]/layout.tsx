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
import Colophon from "@/components/Colophon";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import Intro from "@/components/Intro";
import RouteTransition from "@/components/RouteTransition";
import { SITE, alternatesFor, socialMeta } from "@/lib/site";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import "../globals.css";

/**
 * Display — başlıklar (Hero 3D hariç). TR glifleri (ŞşĞğİı) TTF’ye gömülü.
 *
 * Italic kesim bilerek kayıtlı değil: kodun hiçbir yerinde italic display
 * metni yok, ama kayıtlıyken her sayfada preload edilip ~14KB indiriyordu.
 * Italic başlık gerekirse şu satırı geri ekle (dosya `app/fonts/` içinde):
 *   { path: "../fonts/goks-italic.ttf", weight: "400", style: "italic" },
 */
const goks = localFont({
  src: [{ path: "../fonts/goks-regular.ttf", weight: "400", style: "normal" }],
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

/** Perde kararı — ilk boyamadan önce html[data-intro] ayarlar (FOUC yok).
 *  `?intro=skip` atlar; `?intro` / `?intro=1` zorla oynatır (eski `indexOf("intro")`
 *  `intro=skip`’i de play sanıyordu).
 */
const introInitScript = `(function(){try{if("scrollRestoration" in history)history.scrollRestoration="manual";var r=document.documentElement;var sp=new URLSearchParams(location.search);var iv=sp.get("intro");var forceSkip=iv==="skip"||iv==="0"||iv==="false";var forcePlay=!forceSkip&&(iv!==null||location.hash==="#intro");var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;var play=forceSkip?false:(forcePlay||(sessionStorage.getItem("metek-intro")!=="1"&&!reduce));r.setAttribute("data-intro",play?"play":"skip");if(play){setTimeout(function(){if(r.getAttribute("data-intro")==="play"){r.setAttribute("data-intro","skip");r.classList.remove("intro-lock");try{window.dispatchEvent(new Event("metek:intro-done"));}catch(e){}}},7800);}}catch(e){document.documentElement.setAttribute("data-intro","skip");}})();`;

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
  const title = t("title");
  const description = t("description");
  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    /*
      Ana sayfa canonical + hreflang. Alt rotalar kendi generateMetadata'sında
      kendi yolunu veriyor — bu sürümde relative canonical route'a göre değil
      metadataBase'e göre çözüldüğü için miras yeterli olmuyor.
    */
    alternates: alternatesFor(locale, ""),
    applicationName: SITE.brand,
    authors: [{ name: "Nurullah Aydın", url: SITE.url }],
    creator: "Nurullah Aydın",
    publisher: SITE.brand,
    ...socialMeta({ locale, path: "", title, description }),
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
  const tA11y = await getTranslations({ locale, namespace: "a11y" });

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
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-full focus:bg-ink focus:px-4 focus:text-sm focus:font-bold focus:text-ink-fg"
              >
                {tA11y("skipToContent")}
              </a>
              <Navbar />
              {/* Hero WebGL keep-alive — ana sayfa dışına çıkınca unmount olmasın */}
              <HomeHeroKeepAlive />
              <main id="main-content">{children}</main>
              {/* Künye: sayfanın kendi ölçümü — footer'dan önce */}
              <Colophon />
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
