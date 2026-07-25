import { routing } from "@/i18n/routing";

/** Tek kaynak — iletişim ve sosyal sabitler */
export const SITE = {
  brand: "METEK Digital",
  email: "admin@metehtec.com",
  emailAlt: "metehtec@gmail.com",
  phoneDisplay: "+90 506 055 02 39",
  phoneTel: "+905060550239",
  whatsapp: "905060550239",
  instagram:
    "https://www.instagram.com/meteknology?igsh=MWFhaDNpNmo2OGZzMA==",
  url: "https://metehtec.com",
} as const;

export function whatsappHref(prefill: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(prefill)}`;
}

/** `localePrefix: as-needed` — varsayılan dil önekle gezmez (`/` = EN) */
export function localePath(locale: string, path: string): string {
  if (locale === routing.defaultLocale) return path || "/";
  return path ? `/${locale}${path}` : `/${locale}`;
}

/**
 * Sayfa başına canonical + hreflang.
 *
 * Bu Next sürümünde relative canonical (`"./"`) route'a göre DEĞİL
 * `metadataBase`'e göre çözülüyor (bkz. generate-metadata.md "URL
 * Composition"), yani her sayfa kendi yolunu açıkça vermek zorunda.
 *
 * Neden şart: 4 dilli sitede hreflang yoksa Google hangi dili kime
 * göstereceğini bilemiyor ve 4 sürüm birbirinin kopyası sayılabiliyor.
 * Canonical de `as-needed` öneki yüzünden `/` ile `/en`'in ayrı sayfa
 * görünmesini engelliyor.
 */
export function alternatesFor(locale: string, path: string) {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localePath(l, path)])
  );
  return {
    // Her dil KENDİNİ canonical gösterir; hepsi EN'i gösterirse
    // TR/ES/DE sürümleri kopya sayılıp indeksten düşer.
    canonical: localePath(locale, path),
    languages: {
      ...languages,
      "x-default": localePath(routing.defaultLocale, path),
    },
  };
}
