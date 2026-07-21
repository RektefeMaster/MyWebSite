import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
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
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
      siteName: SITE.brand,
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

  return (
    <html
      lang={locale}
      className={`${goks.variable} ${vireon.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <NextIntlClientProvider>
          <ThemeProvider>
            <SmoothScroll>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <WhatsAppFab />
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
