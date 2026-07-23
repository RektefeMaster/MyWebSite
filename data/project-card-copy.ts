/** Kart metinleri — full project-details client bundle'a girmesin */
export type ProjectCardCopy = {
  title?: string;
  tag: string;
  summary: string;
};

const projectCardCopy: Record<string, Record<string, ProjectCardCopy>> = {
  tr: {
    wcc: {
      tag: "Kurumsal web",
      summary:
        "ABD'li dolap üreticisi için kurumsal site. Mobilde hızlı, arama için hazır; galeri, hizmetler ve teklif tek akışta.",
    },
    aydnnacar: {
      tag: "Marka ve katalog",
      summary:
        "Nacar Mobilya için sade dijital vitrin. Koleksiyonlar mağaza hissiyle; her model ölçü, isim ve iletişime net bağlanır.",
    },
    wuffbutik: {
      tag: "Butik web",
      summary:
        "Wuuf Butik için sakin vitrin sitesi. Mağaza atmosferi ile WhatsApp satışı aynı sayfada, mobilde akıcı.",
    },
    "altitude-residence": {
      tag: "Lüks gayrimenkul",
      summary:
        "Altitude için karanlık lüks konut sitesi. Skyline, rezidans tipleri ve görüntüleme randevusuna net yol.",
    },
    "casa-aurelia": {
      tag: "Butik otel",
      summary:
        "Roma'daki Casa Aurelia için rezervasyon vitrini. İngilizce ve İtalyanca; oda tipleri ve net rezervasyon yolu.",
    },
    "seraphine-atelier": {
      tag: "Moda vitrini",
      summary:
        "Séraphine Atelier için moda evi sitesi. Kadın/erkek katalog, butik hikâyesi; sepet değil, özel prova randevusu.",
    },
    "havva-baklava": {
      tag: "Butik web",
      summary:
        "Köln Ehrenfeld'deki HAVVA için sinematik vitrin. Gaziantep–Köln hikâyesi, günlük fiyat listesi, WhatsApp sipariş yolu.",
    },
    mizan: {
      tag: "Estetik klinik",
      summary:
        "Nişantaşı'ndaki MİZAN için gülüş mimarisi vitrini. Tedavi listesi ve ilk ölçü randevusuna akan sakin bir deneyim.",
    },
    "sahra-butik": {
      tag: "Butik web",
      summary:
        "Malatya'daki Sahra Butik için katalog vitrini. Günlük, spor, tesettür; mağazada dene, stok ve bedeni online sor.",
    },
    "vela-skin-atelier": {
      tag: "Cilt atölyesi",
      summary:
        "SoHo'daki VELA Skin Atelier için randevu sitesi. Önce gözlem, tedavi listesi; tek danışanlı stüdyo, klinik soğukluğu yok.",
    },
    "whatsapp-bot": {
      title: "WhatsApp Sohbet Asistanı",
      tag: "Otomasyon",
      summary:
        "WhatsApp sorularını fiyatlarınızla yanıtlar. Boş saatlere randevu yazar, dolu saatleri korur, 1 saat önce hatırlatır.",
    },
    "instagram-bot": {
      title: "Instagram Mesaj Asistanı",
      tag: "Otomasyon",
      summary:
        "Instagram DM'lerinde aynı takvim ve fiyatlar. Randevu alır, iptalleri boş saate çevirir, 1 saat önce hatırlatma gönderir.",
    },
    crm: {
      title: "Satış ve Randevu Paneli",
      tag: "Yazılım",
      summary:
        "WhatsApp ve Instagram asistanlarının randevularını tek panelde toplar. Kanal, saat, müşteri ve notlar bir arada.",
    },
    "css-system": {
      tag: "Tasarım sistemi",
      summary:
        "Renk, tipografi ve boşluk kurallarını tek kaynaktan yöneten CSS tasarım sistemi. Web ve panel aynı dili konuşur.",
    },
  },
  en: {
    wcc: {
      tag: "Corporate web",
      summary:
        "Corporate site for a US cabinet maker. Fast on mobile, built for search; gallery, services, and quote path in one flow.",
    },
    aydnnacar: {
      tag: "Brand & catalogue",
      summary:
        "Minimal showroom for Nacar Mobilya. Store-floor collections; each model ties to size, fabric, and contact.",
    },
    wuffbutik: {
      tag: "Boutique web",
      summary:
        "Calm boutique site for Wuuf. Store mood and WhatsApp sales on one page, light enough to stay fast on mobile.",
    },
    "altitude-residence": {
      tag: "Luxury real estate",
      summary:
        "Dark luxury residence site for Altitude. Skyline story, residence types, and a direct path to book a viewing.",
    },
    "casa-aurelia": {
      tag: "Boutique hotel",
      summary:
        "Booking showcase for Casa Aurelia in Rome. English and Italian; room types and a clear reservation path.",
    },
    "seraphine-atelier": {
      tag: "Fashion showcase",
      summary:
        "Fashion house site for Séraphine Atelier. Women/men lookbook; private fitting hour, not cart checkout.",
    },
    "havva-baklava": {
      tag: "Artisan food",
      summary:
        "Cinematic showcase for HAVVA in Köln Ehrenfeld. Gaziantep-to-Cologne craft story, daily prices, WhatsApp ordering.",
    },
    mizan: {
      tag: "Aesthetic clinic",
      summary:
        "Smile architecture presence for MİZAN in Nişantaşı. Protocol list and a calm path to the first measurement booking.",
    },
    "sahra-butik": {
      tag: "Boutique web",
      summary:
        "Lookbook-led women's wear for Sahra Butik in Malatya. Daily, sport, tesettür lines; try in store, ask stock online.",
    },
    "vela-skin-atelier": {
      tag: "Skin atelier",
      summary:
        "Booking site for VELA in SoHo. Observation-first care, treatment index, one-client studio rhythm.",
    },
    "whatsapp-bot": {
      title: "WhatsApp Conversation Assistant",
      tag: "Automation",
      summary:
        "Answers WhatsApp questions with your prices, books open hours, protects busy slots, sends a reminder one hour before.",
    },
    "instagram-bot": {
      title: "Instagram DM Assistant",
      tag: "Automation",
      summary:
        "Same calendar and prices in Instagram DMs. Books appointments, frees cancelled slots, sends a one-hour reminder.",
    },
    crm: {
      title: "CRM Sales Panel",
      tag: "Software",
      summary:
        "Pulls WhatsApp and Instagram bot bookings into one panel. Channel, time, customer, and notes in one place.",
    },
    "css-system": {
      tag: "Design system",
      summary:
        "CSS design system with brand tokens for color, type, and spacing. One source keeps web and admin UI aligned.",
    },
  },
  es: {
    wcc: {
      tag: "Web corporativa",
      summary:
        "Sitio corporativo para fabricante de gabinetes en EE. UU. Rápido en móvil; cotización y galería juntos.",
    },
    aydnnacar: {
      tag: "Marca y catálogo",
      summary:
        "Showroom digital para Nacar Mobilya. Colecciones con sensación de tienda; medida, tela y contacto.",
    },
    wuffbutik: {
      tag: "Web boutique",
      summary:
        "Vitrina calmada para Wuuf Butik. Ambiente de tienda y venta por WhatsApp en una sola página, ligera en móvil.",
    },
    "altitude-residence": {
      tag: "Bienes raíces de lujo",
      summary:
        "Sitio oscuro de lujo para Altitude. Skyline, tipos de unidad y ruta directa para agendar visita.",
    },
    "casa-aurelia": {
      tag: "Hotel boutique",
      summary:
        "Vitrina de reserva para Casa Aurelia en Roma. Inglés e italiano; tipos de habitación y camino claro a reservar.",
    },
    "seraphine-atelier": {
      tag: "Moda y atelier",
      summary:
        "Sitio de casa de moda para Séraphine Atelier. Lookbook mujer/hombre e historia del atelier; cita privada, no carrito.",
    },
    "havva-baklava": {
      tag: "Gastronomía artesanal",
      summary:
        "Vitrina cinematográfica para HAVVA en Ehrenfeld. Historia Gaziantep–Colonia, precios del día, WhatsApp.",
    },
    mizan: {
      tag: "Clínica estética",
      summary:
        "Presencia de arquitectura de sonrisa para MİZAN en Nişantaşı. Lista de protocolos y ruta calmada a la primera medida.",
    },
    "sahra-butik": {
      tag: "Web boutique",
      summary:
        "Moda mujer con lookbook para Sahra Butik en Malatya. Líneas günlük, sport y tesettür; prueba en tienda, stock online.",
    },
    "vela-skin-atelier": {
      tag: "Atelier de piel",
      summary:
        "Sitio de reserva para VELA en SoHo. Cuidado que observa primero, índice de tratamientos, estudio de un cliente a la vez.",
    },
    "whatsapp-bot": {
      title: "Asistente de WhatsApp",
      tag: "Automatización",
      summary:
        "Responde en WhatsApp con sus precios, agenda horas libres, respeta las ocupadas y manda recordatorio una hora antes.",
    },
    "instagram-bot": {
      title: "Asistente de DM de Instagram",
      tag: "Automatización",
      summary:
        "Mismo calendario y precios en DM de Instagram. Agenda citas, libera cancelaciones y recuerda una hora antes.",
    },
    crm: {
      title: "Panel CRM de ventas",
      tag: "Software",
      summary:
        "Reúne citas de bots de WhatsApp e Instagram en un panel. Canal, hora, cliente y notas en un solo lugar.",
    },
    "css-system": {
      tag: "Sistema de diseño",
      summary:
        "Sistema CSS con tokens de marca para color, tipo y espaciado. Una fuente alinea web y panel administrativo.",
    },
  },
  de: {
    wcc: {
      tag: "Unternehmensweb",
      summary:
        "Unternehmenswebsite für US-Schrankhersteller. Schnell mobil; Galerie, Leistungen und Angebot zusammen.",
    },
    aydnnacar: {
      tag: "Marke & Katalog",
      summary:
        "Digitaler Showroom für Nacar Mobilya. Kollektionen wie im Laden; jedes Modell mit Maß, Name und Kontakt verknüpft.",
    },
    wuffbutik: {
      tag: "Boutique-Web",
      summary:
        "Ruhige Boutique-Vitrine für Wuuf. Ladenstimmung und WhatsApp-Verkauf auf einer Seite, leicht und schnell mobil.",
    },
    "altitude-residence": {
      tag: "Luxusimmobilien",
      summary:
        "Dunkle Luxusresidenz-Website für Altitude. Skyline, Wohnungstypen und direkter Weg zur Besichtigung.",
    },
    "casa-aurelia": {
      tag: "Boutique-Hotel",
      summary:
        "Buchungsvitrine für Casa Aurelia in Rom. Englisch und Italienisch; Zimmertypen und klarer Reservierungsweg.",
    },
    "seraphine-atelier": {
      tag: "Mode & Atelier",
      summary:
        "Modehaus-Website für Séraphine Atelier. Damen/Herren-Lookbook; privates Fitting, kein Warenkorb.",
    },
    "havva-baklava": {
      tag: "Handwerk & Genuss",
      summary:
        "Filmische Vitrine für HAVVA in Köln-Ehrenfeld. Geschichte Gaziantep–Köln, Tagespreise, Bestellung per WhatsApp.",
    },
    mizan: {
      tag: "Ästhetik-Klinik",
      summary:
        "Lächeln-Architektur-Präsenz für MİZAN in Nişantaşı. Protokolle und ruhiger Weg zur ersten Messung.",
    },
    "sahra-butik": {
      tag: "Boutique-Web",
      summary:
        "Lookbook-Vitrine für Sahra Butik in Malatya. Günlük-, Sport- und Tesettür-Linien; anprobieren im Laden, Bestand online.",
    },
    "vela-skin-atelier": {
      tag: "Skin Atelier",
      summary:
        "Buchungswebsite für VELA in SoHo. Beobachtung zuerst, Behandlungsindex, Ein-Gast-Studio ohne klinische Kälte.",
    },
    "whatsapp-bot": {
      title: "WhatsApp-Assistent",
      tag: "Automatisierung",
      summary:
        "Antwortet in WhatsApp mit Ihren Preisen, bucht freie Stunden, schützt belegte und erinnert eine Stunde vorher.",
    },
    "instagram-bot": {
      title: "Instagram-DM-Assistent",
      tag: "Automatisierung",
      summary:
        "Gleicher Kalender und Preise in Instagram-DMs. Bucht Termine, gibt Stornos frei, Erinnerung eine Stunde vorher.",
    },
    crm: {
      title: "CRM-Verkaufspanel",
      tag: "Software",
      summary:
        "Sammelt WhatsApp- und Instagram-Buchungen in einem Panel. Kanal, Zeit, Kunde und Notizen an einem Ort.",
    },
    "css-system": {
      tag: "Designsystem",
      summary:
        "CSS-Designsystem mit Marken-Tokens für Farbe, Typo und Abstände. Eine Quelle für Web und Admin-Oberfläche.",
    },
  },
};

export function getProjectCardCopy(
  locale: string,
  id: string
): ProjectCardCopy | undefined {
  const pack = projectCardCopy[locale] ?? projectCardCopy.en;
  return pack[id] ?? projectCardCopy.en?.[id] ?? projectCardCopy.tr?.[id];
}
