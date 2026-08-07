/**
 * Selected Work punch satırları — kısa tek satır anlatım.
 * Kart özetleri (project-card-copy) uzun; grid'de hızlı okunan güçlü cümle gerekir.
 */
const projectPunch: Record<string, Record<string, string>> = {
  tr: {
    wcc: "ABD dolap üreticisi: site her yolu teklife götürüyor.",
    aydnnacar: "Mobilya kataloğu: mağaza gibi gez, modele ulaş.",
    wuffbutik: "Vitrin ve WhatsApp satışı tek sayfada.",
    "altitude-residence": "Lüks konut vitrini; hedef görüntüleme randevusu.",
    "casa-aurelia": "Roma'da butik otel, iki dilde net rezervasyon.",
    "seraphine-atelier": "Sepet yok. Özel prova saati var.",
    "havva-baklava": "Gaziantep'in tarifi, Köln'ün vitrininde.",
    mizan: "Nişantaşı klinik sitesi: sakin ton, randevu yolu açık.",
    "sahra-butik": "Katalogdan beğen, mağazada dene, stoğu sor.",
    "vela-skin-atelier": "SoHo cilt atölyesi: tek danışan, net randevu.",
    aiahi: "WhatsApp talebi randevuya ve müşteri kaydına düşer.",
    "whatsapp-bot": "Siz meşgulken WhatsApp'ta randevuyu o alır.",
    "instagram-bot": "Aynı takvim, bu kez Instagram DM'de.",
    crm: "İki botun tüm randevuları tek ekranda.",
    "css-system": "Web ve panel için tek ve ortak tasarım dili.",
  },
  en: {
    wcc: "US cabinet maker: every path leads to a quote.",
    aydnnacar: "Furniture catalogue you browse like a showroom floor.",
    wuffbutik: "Boutique window and WhatsApp sales, one page.",
    "altitude-residence": "Luxury residence site built to book viewings.",
    "casa-aurelia": "Rome boutique hotel, clear booking in two languages.",
    "seraphine-atelier": "No cart. A private fitting hour instead.",
    "havva-baklava": "A Gaziantep recipe, in a Cologne window.",
    mizan: "Nişantaşı clinic site: calm tone, clear booking path.",
    "sahra-butik": "Pick in the lookbook, try in store, ask stock.",
    "vela-skin-atelier": "SoHo skin atelier: one client, clear booking.",
    aiahi: "WhatsApp requests land as bookings and customer records.",
    "whatsapp-bot": "Takes the WhatsApp booking while you're busy.",
    "instagram-bot": "The same calendar, this time in Instagram DMs.",
    crm: "Every booking from both bots on one screen.",
    "css-system": "One shared design language for web and admin.",
  },
  es: {
    wcc: "Fabricante de gabinetes en EE. UU.: cada ruta lleva a la cotización.",
    aydnnacar: "Un catálogo de muebles que se recorre como un showroom.",
    wuffbutik: "Vitrina boutique y venta por WhatsApp en una página.",
    "altitude-residence": "Sitio de residencia de lujo hecho para agendar visitas.",
    "casa-aurelia": "Hotel boutique en Roma, reserva clara en dos idiomas.",
    "seraphine-atelier": "Sin carrito. Una hora de fitting privado.",
    "havva-baklava": "Una receta de Gaziantep en una vitrina de Colonia.",
    mizan: "Clínica en Nişantaşı: tono calmado, ruta de cita clara.",
    "sahra-butik": "Elige en el lookbook, pruébalo en tienda, pregunta stock.",
    "vela-skin-atelier": "Atelier de piel en SoHo: un cliente, cita clara.",
    aiahi: "Las peticiones de WhatsApp llegan como citas y ficha de cliente.",
    "whatsapp-bot": "Toma la cita por WhatsApp mientras usted trabaja.",
    "instagram-bot": "El mismo calendario, ahora en los DM de Instagram.",
    crm: "Todas las citas de ambos bots en una pantalla.",
    "css-system": "Un mismo idioma visual para web y panel.",
  },
  de: {
    wcc: "US-Möbelhersteller: jeder Weg führt zur Angebotsanfrage.",
    aydnnacar: "Ein Möbelkatalog, den man wie einen Showroom durchgeht.",
    wuffbutik: "Boutique-Vitrine und WhatsApp-Verkauf auf einer Seite.",
    "altitude-residence": "Luxus-Wohnsite mit einem Ziel: Besichtigung buchen.",
    "casa-aurelia": "Boutique-Hotel in Rom, klare Buchung in zwei Sprachen.",
    "seraphine-atelier": "Kein Warenkorb. Dafür eine private Anprobe.",
    "havva-baklava": "Ein Rezept aus Gaziantep in einer Kölner Vitrine.",
    mizan: "Praxis-Site in Nişantaşı: ruhiger Ton, klarer Terminweg.",
    "sahra-butik": "Im Lookbook wählen, im Laden anprobieren, Bestand fragen.",
    "vela-skin-atelier": "SoHo-Hautatelier: ein Gast, klarer Termin.",
    aiahi: "WhatsApp-Anfragen landen als Termin und Kundendatei.",
    "whatsapp-bot": "Nimmt den Termin in WhatsApp an, während Sie arbeiten.",
    "instagram-bot": "Derselbe Kalender, diesmal in Instagram-DMs.",
    crm: "Alle Termine beider Bots auf einem Bildschirm.",
    "css-system": "Eine gemeinsame Designsprache für Web und Admin.",
  },
};

export function getProjectPunch(locale: string, id: string): string | undefined {
  const pack = projectPunch[locale] ?? projectPunch.en;
  return pack[id] ?? projectPunch.en?.[id] ?? projectPunch.tr?.[id];
}
