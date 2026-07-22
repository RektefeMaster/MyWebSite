export type ProjectGalleryShot = {
  src: string;
  alt: string;
  /** FeaturedCase tarzı grid span sınıfları */
  span?: string;
};

const HERO =
  "col-span-4 row-span-2 min-h-[220px] md:min-h-[320px]";
const HALF = "col-span-2 min-h-[130px] md:min-h-[154px]";
const MID = "col-span-3 min-h-[140px] md:min-h-[170px]";
const WIDE = "col-span-6 min-h-[140px] md:min-h-[190px]";
const MOBILE_TALL =
  "col-span-2 row-span-2 min-h-[220px] md:min-h-[320px]";

type Locale = "tr" | "en" | "es" | "de";

type GalleryPack = Record<Locale, ProjectGalleryShot[]>;

function pack(
  shots: { src: string; span: string; alt: Record<Locale, string> }[]
): GalleryPack {
  return {
    tr: shots.map(({ src, span, alt }) => ({ src, span, alt: alt.tr })),
    en: shots.map(({ src, span, alt }) => ({ src, span, alt: alt.en })),
    es: shots.map(({ src, span, alt }) => ({ src, span, alt: alt.es })),
    de: shots.map(({ src, span, alt }) => ({ src, span, alt: alt.de })),
  };
}

const wcc = pack([
  {
    src: "/projects/wcc/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "WCC — ana sayfa hero",
      en: "WCC — homepage hero",
      es: "WCC — hero de inicio",
      de: "WCC — Startseiten-Hero",
    },
  },
  {
    src: "/projects/wcc/featured/02-kitchen.jpg",
    span: HALF,
    alt: {
      tr: "WCC — mutfak dolapları",
      en: "WCC — kitchen cabinets",
      es: "WCC — cocinas",
      de: "WCC — Küchenschränke",
    },
  },
  {
    src: "/projects/wcc/featured/03-projects.jpg",
    span: HALF,
    alt: {
      tr: "WCC — proje galerisi",
      en: "WCC — project gallery",
      es: "WCC — galería de proyectos",
      de: "WCC — Projektgalerie",
    },
  },
  {
    src: "/projects/wcc/featured/04-brands.jpg",
    span: WIDE,
    alt: {
      tr: "WCC — markalar ve güven",
      en: "WCC — brands and trust",
      es: "WCC — marcas y confianza",
      de: "WCC — Marken und Vertrauen",
    },
  },
]);

const aydnnacar = pack([
  {
    src: "/projects/aydnnacar/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "Nacar Mobilya — koleksiyon vitrini",
      en: "Nacar Mobilya — collection showcase",
      es: "Nacar Mobilya — escaparate de colección",
      de: "Nacar Mobilya — Kollektionsvitrine",
    },
  },
  {
    src: "/projects/aydnnacar/featured/02-collections.jpg",
    span: HALF,
    alt: {
      tr: "Nacar — tüm koleksiyonlar",
      en: "Nacar — all collections",
      es: "Nacar — todas las colecciones",
      de: "Nacar — alle Kollektionen",
    },
  },
  {
    src: "/projects/aydnnacar/featured/03-salon.jpg",
    span: HALF,
    alt: {
      tr: "Nacar — salon koleksiyonu",
      en: "Nacar — living collection",
      es: "Nacar — colección salón",
      de: "Nacar — Wohnkollektion",
    },
  },
  {
    src: "/projects/aydnnacar/featured/04-yatak.jpg",
    span: WIDE,
    alt: {
      tr: "Nacar — yatak odası koleksiyonu",
      en: "Nacar — bedroom collection",
      es: "Nacar — colección dormitorio",
      de: "Nacar — Schlafzimmer-Kollektion",
    },
  },
]);

const wuffbutik = pack([
  {
    src: "/projects/wuffbutik/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "Wuuf Butik — ana sayfa",
      en: "Wuuf Butik — homepage",
      es: "Wuuf Butik — inicio",
      de: "Wuuf Butik — Startseite",
    },
  },
  {
    src: "/projects/wuffbutik/featured/02-selections.jpg",
    span: HALF,
    alt: {
      tr: "Wuuf — mağazadan seçtiklerimiz",
      en: "Wuuf — store selections",
      es: "Wuuf — selecciones de tienda",
      de: "Wuuf — Ladenauswahl",
    },
  },
  {
    src: "/projects/wuffbutik/featured/03-yakin-bak.jpg",
    span: HALF,
    alt: {
      tr: "Wuuf — yakından bak",
      en: "Wuuf — look closer",
      es: "Wuuf — mira de cerca",
      de: "Wuuf — genauer hinsehen",
    },
  },
  {
    src: "/projects/wuffbutik/featured/04-gunluk.jpg",
    span: MID,
    alt: {
      tr: "Wuuf — günlük çizgi",
      en: "Wuuf — everyday line",
      es: "Wuuf — línea diaria",
      de: "Wuuf — Alltagslinie",
    },
  },
  {
    src: "/projects/wuffbutik/featured/05-spor.jpg",
    span: MID,
    alt: {
      tr: "Wuuf — spor çizgi",
      en: "Wuuf — sport line",
      es: "Wuuf — línea sport",
      de: "Wuuf — Sportlinie",
    },
  },
  {
    src: "/projects/wuffbutik/featured/06-tesettur.jpg",
    span: WIDE,
    alt: {
      tr: "Wuuf — tesettür çizgi",
      en: "Wuuf — modest line",
      es: "Wuuf — línea modest",
      de: "Wuuf — Modest-Linie",
    },
  },
]);

const altitude = pack([
  {
    src: "/projects/altitude-residence/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "Altitude — sinematik hero",
      en: "Altitude — cinematic hero",
      es: "Altitude — hero cinematográfico",
      de: "Altitude — filmischer Einstieg",
    },
  },
  {
    src: "/projects/altitude-residence/featured/02-residence.jpg",
    span: HALF,
    alt: {
      tr: "Altitude — size göre kurulan rezidans",
      en: "Altitude — a residence composed around you",
      es: "Altitude — residencia pensada para usted",
      de: "Altitude — Residence um Sie herum",
    },
  },
  {
    src: "/projects/altitude-residence/featured/03-city.jpg",
    span: HALF,
    alt: {
      tr: "Altitude — ayaklarınızın altında şehir",
      en: "Altitude — the city at your feet",
      es: "Altitude — la ciudad a sus pies",
      de: "Altitude — die Stadt zu Ihren Füßen",
    },
  },
  {
    src: "/projects/altitude-residence/featured/04-wellness.jpg",
    span: MID,
    alt: {
      tr: "Altitude — wellness club",
      en: "Altitude — wellness club",
      es: "Altitude — club wellness",
      de: "Altitude — Wellness Club",
    },
  },
  {
    src: "/projects/altitude-residence/featured/05-hours.jpg",
    span: MID,
    alt: {
      tr: "Altitude — size ait saatler",
      en: "Altitude — hours that belong to you",
      es: "Altitude — horas que le pertenecen",
      de: "Altitude — Stunden, die Ihnen gehören",
    },
  },
  {
    src: "/projects/altitude-residence/featured/06-club.jpg",
    span: WIDE,
    alt: {
      tr: "Altitude — ritminizi koruyan kulüp",
      en: "Altitude — a club that keeps your rhythm",
      es: "Altitude — un club que guarda su ritmo",
      de: "Altitude — Club, der Ihren Rhythmus hält",
    },
  },
]);

const casa = pack([
  {
    src: "/projects/casa-aurelia/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "Casa Aurelia — sinematik hero",
      en: "Casa Aurelia — cinematic hero",
      es: "Casa Aurelia — hero cinematográfico",
      de: "Casa Aurelia — filmischer Einstieg",
    },
  },
  {
    src: "/projects/casa-aurelia/featured/02-intro.jpg",
    span: HALF,
    alt: {
      tr: "Casa Aurelia — giriş bölümü",
      en: "Casa Aurelia — intro section",
      es: "Casa Aurelia — sección intro",
      de: "Casa Aurelia — Intro-Bereich",
    },
  },
  {
    src: "/projects/casa-aurelia/featured/03-rome.jpg",
    span: HALF,
    alt: {
      tr: "Casa Aurelia — Roma’da doğan hikâye",
      en: "Casa Aurelia — born in Rome",
      es: "Casa Aurelia — nacida en Roma",
      de: "Casa Aurelia — geboren in Rom",
    },
  },
  {
    src: "/projects/casa-aurelia/featured/04-rooms.jpg",
    span: MID,
    alt: {
      tr: "Casa Aurelia — odalar",
      en: "Casa Aurelia — rooms",
      es: "Casa Aurelia — habitaciones",
      de: "Casa Aurelia — Zimmer",
    },
  },
  {
    src: "/projects/casa-aurelia/featured/05-gastronomy.jpg",
    span: MID,
    alt: {
      tr: "Casa Aurelia — gastronomi",
      en: "Casa Aurelia — gastronomy",
      es: "Casa Aurelia — gastronomía",
      de: "Casa Aurelia — Gastronomie",
    },
  },
  {
    src: "/projects/casa-aurelia/featured/06-musica.jpg",
    span: WIDE,
    alt: {
      tr: "Casa Aurelia — Sala della Musica",
      en: "Casa Aurelia — Sala della Musica",
      es: "Casa Aurelia — Sala della Musica",
      de: "Casa Aurelia — Sala della Musica",
    },
  },
]);

const seraphine = pack([
  {
    src: "/projects/seraphine-atelier/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "Séraphine Atelier — sisli sinematik hero",
      en: "Séraphine Atelier — misty cinematic hero",
      es: "Séraphine Atelier — hero cinematográfico con niebla",
      de: "Séraphine Atelier — nebliger filmischer Einstieg",
    },
  },
  {
    src: "/projects/seraphine-atelier/featured/02-lookbook.jpg",
    span: HALF,
    alt: {
      tr: "Séraphine — Lookbook SS26",
      en: "Séraphine — Lookbook SS26",
      es: "Séraphine — Lookbook SS26",
      de: "Séraphine — Lookbook SS26",
    },
  },
  {
    src: "/projects/seraphine-atelier/featured/03-women.jpg",
    span: HALF,
    alt: {
      tr: "Séraphine — kadın koleksiyon grid’i",
      en: "Séraphine — women’s collection grid",
      es: "Séraphine — grid colección mujer",
      de: "Séraphine — Damen-Kollektionsgrid",
    },
  },
  {
    src: "/projects/seraphine-atelier/featured/04-maison.jpg",
    span: MID,
    alt: {
      tr: "Séraphine — maison butik zemin",
      en: "Séraphine — maison boutique floor",
      es: "Séraphine — suelo boutique maison",
      de: "Séraphine — Atelierboden",
    },
  },
  {
    src: "/projects/seraphine-atelier/featured/05-men.jpg",
    span: MID,
    alt: {
      tr: "Séraphine — erkek runway grid",
      en: "Séraphine — men’s runway grid",
      es: "Séraphine — runway grid hombre",
      de: "Séraphine — Herren-Runway",
    },
  },
  {
    src: "/projects/seraphine-atelier/featured/06-appointment.jpg",
    span: WIDE,
    alt: {
      tr: "Séraphine — private hour randevu CTA",
      en: "Séraphine — private hour appointment CTA",
      es: "Séraphine — CTA private hour",
      de: "Séraphine — private Stunde anfragen",
    },
  },
]);

const havva = pack([
  {
    src: "/projects/havva-baklava/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "HAVVA — katman katman, elde baklava",
      en: "HAVVA — layer by layer, by hand",
      es: "HAVVA — capa a capa, a mano",
      de: "HAVVA — Schicht für Schicht, von Hand",
    },
  },
  {
    src: "/projects/havva-baklava/featured/02-gaziantep.jpg",
    span: HALF,
    alt: {
      tr: "HAVVA — Gaziantep’ten Köln’e",
      en: "HAVVA — from Gaziantep to Cologne",
      es: "HAVVA — de Gaziantep a Colonia",
      de: "HAVVA — von Gaziantep nach Köln",
    },
  },
  {
    src: "/projects/havva-baklava/featured/03-pistazie.jpg",
    span: HALF,
    alt: {
      tr: "HAVVA — her katmanda fıstık",
      en: "HAVVA — pistachio in every layer",
      es: "HAVVA — pistacho en cada capa",
      de: "HAVVA — Pistazie in jeder Schicht",
    },
  },
  {
    src: "/projects/havva-baklava/featured/04-tepsi.jpg",
    span: MID,
    alt: {
      tr: "HAVVA — baklava tepsi hero",
      en: "HAVVA — baklava tray hero",
      es: "HAVVA — hero bandeja de baklava",
      de: "HAVVA — Baklava-Tablett Hero",
    },
  },
  {
    src: "/projects/havva-baklava/featured/05-werkstatt.jpg",
    span: MID,
    alt: {
      tr: "HAVVA — Ehrenfeld atölye hikâyesi",
      en: "HAVVA — Ehrenfeld workshop story",
      es: "HAVVA — historia del taller en Ehrenfeld",
      de: "HAVVA — Werkstattgeschichte Ehrenfeld",
    },
  },
  {
    src: "/projects/havva-baklava/featured/06-whatsapp.jpg",
    span: WIDE,
    alt: {
      tr: "HAVVA — WhatsApp sipariş CTA",
      en: "HAVVA — WhatsApp order CTA",
      es: "HAVVA — CTA pedido por WhatsApp",
      de: "HAVVA — WhatsApp-Bestell-CTA",
    },
  },
]);

function devicePack(
  id: string,
  name: Record<Locale, string>
): GalleryPack {
  return pack([
    {
      src: `/projects/${id}/desktop.jpg`,
      span: HERO,
      alt: {
        tr: `${name.tr} — masaüstü arayüz`,
        en: `${name.en} — desktop interface`,
        es: `${name.es} — interfaz escritorio`,
        de: `${name.de} — Desktop-Oberfläche`,
      },
    },
    {
      src: `/projects/${id}/mobile.jpg`,
      span: MOBILE_TALL,
      alt: {
        tr: `${name.tr} — mobil arayüz`,
        en: `${name.en} — mobile interface`,
        es: `${name.es} — interfaz móvil`,
        de: `${name.de} — Mobile Oberfläche`,
      },
    },
  ]);
}

const whatsapp = devicePack("whatsapp-bot", {
  tr: "WhatsApp Asistanı",
  en: "WhatsApp Assistant",
  es: "Asistente WhatsApp",
  de: "WhatsApp-Assistent",
});

const instagram = devicePack("instagram-bot", {
  tr: "Instagram DM Asistanı",
  en: "Instagram DM Assistant",
  es: "Asistente Instagram DM",
  de: "Instagram-DM-Assistent",
});

const crm = devicePack("crm", {
  tr: "CRM Satış Paneli",
  en: "CRM Sales Panel",
  es: "Panel CRM",
  de: "CRM-Verkaufspanel",
});

const cssSystem = devicePack("css-system", {
  tr: "CSS Tasarım Sistemi",
  en: "CSS Design System",
  es: "Sistema de diseño CSS",
  de: "CSS-Designsystem",
});

export const projectGalleries: Record<string, GalleryPack> = {
  wcc,
  aydnnacar,
  wuffbutik,
  "altitude-residence": altitude,
  "casa-aurelia": casa,
  "seraphine-atelier": seraphine,
  "havva-baklava": havva,
  "whatsapp-bot": whatsapp,
  "instagram-bot": instagram,
  crm,
  "css-system": cssSystem,
};

export function getProjectGallery(
  locale: string,
  id: string
): ProjectGalleryShot[] | undefined {
  const packForId = projectGalleries[id];
  if (!packForId) return undefined;
  if (locale === "tr" || locale === "en" || locale === "es" || locale === "de") {
    return packForId[locale];
  }
  return packForId.en;
}
