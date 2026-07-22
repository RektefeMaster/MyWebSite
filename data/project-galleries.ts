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
    src: "/projects/wuffbutik/featured/01-hero-v2.jpg",
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

const mizan = pack([
  {
    src: "/projects/mizan/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "MİZAN — gülüş mimarisi hero",
      en: "MİZAN — smile architecture hero",
      es: "MİZAN — hero arquitectura de la sonrisa",
      de: "MİZAN — Lächeln-Architektur Hero",
    },
  },
  {
    src: "/projects/mizan/featured/02-film.jpg",
    span: HALF,
    alt: {
      tr: "MİZAN — scroll gülüş filmi",
      en: "MİZAN — scroll smile film",
      es: "MİZAN — film de sonrisa con scroll",
      de: "MİZAN — scrollbarer Smile-Film",
    },
  },
  {
    src: "/projects/mizan/featured/03-felsefe.jpg",
    span: HALF,
    alt: {
      tr: "MİZAN — denge, oran, sessizlik",
      en: "MİZAN — balance, proportion, silence",
      es: "MİZAN — equilibrio, proporción, silencio",
      de: "MİZAN — Balance, Proportion, Stille",
    },
  },
  {
    src: "/projects/mizan/featured/04-hizmetler.jpg",
    span: MID,
    alt: {
      tr: "MİZAN — protokoller listesi",
      en: "MİZAN — protocols list",
      es: "MİZAN — lista de protocolos",
      de: "MİZAN — Protokolliste",
    },
  },
  {
    src: "/projects/mizan/featured/05-atoelye.jpg",
    span: MID,
    alt: {
      tr: "MİZAN — Nişantaşı atölye",
      en: "MİZAN — Nişantaşı atelier",
      es: "MİZAN — atelier en Nişantaşı",
      de: "MİZAN — Atelier in Nişantaşı",
    },
  },
  {
    src: "/projects/mizan/featured/06-randevu.jpg",
    span: WIDE,
    alt: {
      tr: "MİZAN — randevu / ilk ölçü",
      en: "MİZAN — booking / first measurement",
      es: "MİZAN — cita / primera medida",
      de: "MİZAN — Termin / erste Messung",
    },
  },
]);

const vela = pack([
  {
    src: "/projects/vela-skin-atelier/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "VELA — SoHo skin atelier hero",
      en: "VELA — SoHo skin atelier hero",
      es: "VELA — hero skin atelier SoHo",
      de: "VELA — SoHo Skin Atelier Hero",
    },
  },
  {
    src: "/projects/vela-skin-atelier/featured/02-philosophy.jpg",
    span: HALF,
    alt: {
      tr: "VELA — observation first felsefe",
      en: "VELA — observation first philosophy",
      es: "VELA — filosofía observation first",
      de: "VELA — Observation first Philosophie",
    },
  },
  {
    src: "/projects/vela-skin-atelier/featured/03-index.jpg",
    span: HALF,
    alt: {
      tr: "VELA — Skin Index protokolleri",
      en: "VELA — Skin Index treatments",
      es: "VELA — tratamientos Skin Index",
      de: "VELA — Skin Index Behandlungen",
    },
  },
  {
    src: "/projects/vela-skin-atelier/featured/04-reset.jpg",
    span: MID,
    alt: {
      tr: "VELA — Reset ritüeli",
      en: "VELA — Reset ritual",
      es: "VELA — ritual Reset",
      de: "VELA — Reset Ritual",
    },
  },
  {
    src: "/projects/vela-skin-atelier/featured/05-studio.jpg",
    span: MID,
    alt: {
      tr: "VELA — tek danışanlı stüdyo",
      en: "VELA — one client studio",
      es: "VELA — estudio de un solo cliente",
      de: "VELA — Ein Gast Studio",
    },
  },
  {
    src: "/projects/vela-skin-atelier/featured/06-book.jpg",
    span: WIDE,
    alt: {
      tr: "VELA — consultation / randevu",
      en: "VELA — consultation / booking",
      es: "VELA — consultation / reserva",
      de: "VELA — Consultation / Buchung",
    },
  },
]);

const sahra = pack([
  {
    src: "/projects/sahra-butik/featured/01-hero.jpg",
    span: HERO,
    alt: {
      tr: "Sahra — Malatya kadın giyim hero",
      en: "Sahra — Malatya women’s wear hero",
      es: "Sahra — hero moda mujer Malatya",
      de: "Sahra — Malatya Damenmode Hero",
    },
  },
  {
    src: "/projects/sahra-butik/featured/02-lookbook.jpg",
    span: HALF,
    alt: {
      tr: "Sahra — güncel modeller lookbook",
      en: "Sahra — current models lookbook",
      es: "Sahra — lookbook modelos actuales",
      de: "Sahra — Lookbook aktuelle Modelle",
    },
  },
  {
    src: "/projects/sahra-butik/featured/03-moods.jpg",
    span: HALF,
    alt: {
      tr: "Sahra — günlük / spor / tesettür",
      en: "Sahra — günlük / spor / tesettür",
      es: "Sahra — günlük / spor / tesettür",
      de: "Sahra — günlük / spor / tesettür",
    },
  },
  {
    src: "/projects/sahra-butik/featured/04-boutique.jpg",
    span: MID,
    alt: {
      tr: "Sahra — mağaza ve stil",
      en: "Sahra — boutique and style",
      es: "Sahra — boutique y estilo",
      de: "Sahra — Boutique und Stil",
    },
  },
  {
    src: "/projects/sahra-butik/featured/05-whisper.jpg",
    span: MID,
    alt: {
      tr: "Sahra — iletişim / stok sor",
      en: "Sahra — contact / ask stock",
      es: "Sahra — contacto / preguntar stock",
      de: "Sahra — Kontakt / Bestand fragen",
    },
  },
  {
    src: "/projects/sahra-butik/featured/06-garden.jpg",
    span: WIDE,
    alt: {
      tr: "Sahra — scroll bahçe / pin bölümü",
      en: "Sahra — scroll garden / pin section",
      es: "Sahra — jardín scroll / sección pin",
      de: "Sahra — Scroll-Garten / Pin-Abschnitt",
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
  mizan,
  "sahra-butik": sahra,
  "vela-skin-atelier": vela,
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
