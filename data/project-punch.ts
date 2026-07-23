/**
 * Selected Work punch satırları — kısa tek satır anlatım.
 * Kart özetleri (project-card-copy) uzun; grid'de hızlı okunan güçlü cümle gerekir.
 */
const projectPunch: Record<string, Record<string, string>> = {
  tr: {
    wcc: "ABD'li dolap üreticisine teklif odaklı kurumsal site.",
    aydnnacar: "Mağaza hissi veren mobilya kataloğu.",
    wuffbutik: "Butik vitrin, WhatsApp satışı tek akışta.",
    "altitude-residence": "Görüntüleme randevusuna akan lüks konut sitesi.",
    "casa-aurelia": "Roma butik oteline net rezervasyon yolu.",
    "seraphine-atelier": "Sepet yok; özel prova randevusu.",
    "havva-baklava": "Gaziantep'ten Köln'e baklava vitrini.",
    mizan: "Nişantaşı'nda gülüş mimarisi vitrini.",
    "sahra-butik": "Katalogdan seç, Malatya'da dene, stok sor.",
    "vela-skin-atelier": "SoHo'da tek danışanlı cilt atölyesi sitesi.",
    "whatsapp-bot": "WhatsApp'ta sizin yerinize randevu alır.",
    "instagram-bot": "Instagram DM'de aynı takvimle randevu alır.",
    crm: "Tüm bot randevuları tek panelde.",
    "css-system": "Web ve panel için tek tasarım dili.",
  },
  en: {
    wcc: "Quote-led corporate site for a US cabinet maker.",
    aydnnacar: "Furniture catalogue with a showroom feel.",
    wuffbutik: "Boutique showcase, WhatsApp sales in one flow.",
    "altitude-residence": "Luxury residence site built to book viewings.",
    "casa-aurelia": "Rome boutique hotel with a clear booking path.",
    "seraphine-atelier": "No cart—private fitting appointment.",
    "havva-baklava": "Baklava showcase from Gaziantep to Cologne.",
    mizan: "Smile architecture studio site in Nişantaşı.",
    "sahra-butik": "Pick in the lookbook, try in Malatya, ask stock.",
    "vela-skin-atelier": "One-client skin atelier booking in SoHo.",
    "whatsapp-bot": "Books appointments on WhatsApp for you.",
    "instagram-bot": "Same calendar, bookings in Instagram DMs.",
    crm: "Every bot booking in one sales panel.",
    "css-system": "One design language for web and admin.",
  },
  es: {
    wcc: "Sitio corporativo con cotización para fabricante de gabinetes en EE. UU.",
    aydnnacar: "Catálogo de muebles con sensación de showroom.",
    wuffbutik: "Vitrina boutique y venta por WhatsApp juntas.",
    "altitude-residence": "Residencia de lujo que agenda visitas.",
    "casa-aurelia": "Hotel boutique en Roma con reserva clara.",
    "seraphine-atelier": "Sin carrito: cita de fitting privado.",
    "havva-baklava": "Vitrina de baklava de Gaziantep a Colonia.",
    mizan: "Estudio de arquitectura de sonrisa en Nişantaşı.",
    "sahra-butik": "Elige en lookbook, prueba en Malatya, pregunta stock.",
    "vela-skin-atelier": "Reserva en atelier de piel, un cliente, SoHo.",
    "whatsapp-bot": "Agenda citas en WhatsApp por usted.",
    "instagram-bot": "Mismo calendario, citas en DM de Instagram.",
    crm: "Todas las citas de bots en un panel.",
    "css-system": "Un idioma visual para web y panel.",
  },
  de: {
    wcc: "Angebotswebsite für US-Schrankhersteller.",
    aydnnacar: "Möbelkatalog mit Showroom-Gefühl.",
    wuffbutik: "Boutique-Vitrine plus WhatsApp-Verkauf.",
    "altitude-residence": "Luxusresidenz-Website für Besichtigungen.",
    "casa-aurelia": "Boutique-Hotel Rom mit klarem Buchungsweg.",
    "seraphine-atelier": "Kein Warenkorb—privates Fitting.",
    "havva-baklava": "Baklava-Vitrine von Gaziantep nach Köln.",
    mizan: "Lächeln-Architektur in Nişantaşı.",
    "sahra-butik": "Lookbook wählen, in Malatya anprobieren.",
    "vela-skin-atelier": "Skin-Atelier-Buchung in SoHo, ein Gast.",
    "whatsapp-bot": "Bucht Termine in WhatsApp für Sie.",
    "instagram-bot": "Gleicher Kalender in Instagram-DMs.",
    crm: "Alle Bot-Termine in einem Panel.",
    "css-system": "Eine Designsprache für Web und Admin.",
  },
};

export function getProjectPunch(locale: string, id: string): string | undefined {
  const pack = projectPunch[locale] ?? projectPunch.en;
  return pack[id] ?? projectPunch.en?.[id] ?? projectPunch.tr?.[id];
}
