/**
 * Ana sayfa akan şerit (ProjectStrip) için kısa, çarpıcı tek satır anlatımlar.
 * Kart özetleri (project-card-copy) uzun; şeritte hızlı okunan güçlü cümle gerekir.
 */
const projectPunch: Record<string, Record<string, string>> = {
  tr: {
    wcc: "ABD'li üreticiye SEO odaklı kurumsal vitrin.",
    aydnnacar: "Showroom hissi veren editoryal katalog.",
    wuffbutik: "Butik havası + WhatsApp satışı tek akışta.",
    "altitude-residence": "Randevuya götüren karanlık lüks konut deneyimi.",
    "casa-aurelia": "Roma'da beş yıldıza net rezervasyon yolu.",
    "seraphine-atelier": "Sepet değil; özel fitting randevusu.",
    "havva-baklava": "Gaziantep'ten Köln'e sinematik baklava vitrini.",
    mizan: "Nişantaşı’nda milimetrik gülüş mimarisi.",
    "sahra-butik": "Lookbook’tan seç, Malatya’da dene, stok online.",
    "vela-skin-atelier": "SoHo’da sakin, tek danışanlı skin atelier.",
    "whatsapp-bot": "WhatsApp'ta sizin yerinize konuşan asistan.",
    "instagram-bot": "Instagram DM'de randevuyu sizin yerinize alır.",
    crm: "Tüm randevu ve müşteriler tek panelde.",
    "css-system": "Tek kaynaktan tutarlı arayüz dili.",
  },
  en: {
    wcc: "SEO first corporate presence for a US maker.",
    aydnnacar: "An editorial catalogue with a showroom feel.",
    wuffbutik: "Boutique mood meets WhatsApp selling.",
    "altitude-residence": "Dark luxury residence, built to book viewings.",
    "casa-aurelia": "Five star Rome with a clear path to book.",
    "seraphine-atelier": "Not a cart. a private fitting hour.",
    "havva-baklava": "Cinematic baklava, Gaziantep to Cologne.",
    mizan: "Millimetric smile architecture in Nişantaşı.",
    "sahra-butik": "Lookbook pick, try in Malatya, stock online.",
    "vela-skin-atelier": "Quiet, one client skin atelier in SoHo.",
    "whatsapp-bot": "An assistant that talks on WhatsApp for you.",
    "instagram-bot": "Books appointments in your Instagram DMs.",
    crm: "Every appointment and customer in one panel.",
    "css-system": "One source, one consistent UI language.",
  },
  es: {
    wcc: "Presencia corporativa SEO para un fabricante de EE. UU.",
    aydnnacar: "Catálogo editorial con sensación de showroom.",
    wuffbutik: "Ambiente boutique + venta por WhatsApp.",
    "altitude-residence": "Residencia de lujo oscura que agenda visitas.",
    "casa-aurelia": "Cinco estrellas en Roma con reserva clara.",
    "seraphine-atelier": "No un carrito. una private hour.",
    "havva-baklava": "Baklava cinematográfica, de Gaziantep a Colonia.",
    mizan: "Arquitectura de la sonrisa milimétrica en Nişantaşı.",
    "sahra-butik": "Lookbook, prueba en Malatya, stock online.",
    "vela-skin-atelier": "Atelier de piel tranquilo, un cliente, en SoHo.",
    "whatsapp-bot": "Un asistente que habla en WhatsApp por ti.",
    "instagram-bot": "Agenda citas en tus DMs de Instagram.",
    crm: "Cada cita y cliente en un solo panel.",
    "css-system": "Una fuente, un lenguaje de UI consistente.",
  },
  de: {
    wcc: "SEO starke Unternehmenspräsenz für einen US Hersteller.",
    aydnnacar: "Editorialer Katalog mit Showroom Gefühl.",
    wuffbutik: "Boutique Gefühl trifft WhatsApp Verkauf.",
    "altitude-residence": "Dunkle Luxusresidenz, gebaut für Besichtigungen.",
    "casa-aurelia": "Fünf Sterne in Rom mit klarem Buchungsweg.",
    "seraphine-atelier": "Kein Warenkorb. eine private Stunde.",
    "havva-baklava": "Filmische Baklava, von Gaziantep nach Köln.",
    mizan: "Millimetrische Lächeln Architektur in Nişantaşı.",
    "sahra-butik": "Lookbook wählen, in Malatya anprobieren, Bestand online.",
    "vela-skin-atelier": "Ruhiges Skin Atelier in SoHo, ein Gast zur Zeit.",
    "whatsapp-bot": "Ein Assistent, der auf WhatsApp für Sie spricht.",
    "instagram-bot": "Bucht Termine in Ihren Instagram DMs.",
    crm: "Jeder Termin und Kunde in einem Panel.",
    "css-system": "Eine Quelle, eine konsistente UI Sprache.",
  },
};

export function getProjectPunch(locale: string, id: string): string | undefined {
  const pack = projectPunch[locale] ?? projectPunch.en;
  return pack[id] ?? projectPunch.en?.[id] ?? projectPunch.tr?.[id];
}
