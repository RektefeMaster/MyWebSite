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
        "ABD'li dolap üreticisi WCC için kurumsal site. Müşteri şantiyeden, telefondan bakıyor; site orada hızlı açılıyor ve teklif formu tek dokunuş uzakta.",
    },
    aydnnacar: {
      tag: "Marka ve katalog",
      summary:
        "Nacar Mobilya için sade dijital vitrin. Koleksiyonlar mağazada gezer gibi ilerliyor; her model ölçüsüne, adına ve iletişime bağlanıyor.",
    },
    wuffbutik: {
      tag: "Butik web",
      summary:
        "Wuuf Butik için sakin bir vitrin. Mağaza atmosferi ile WhatsApp satışı aynı sayfada duruyor, mobilde de akıcı kalıyor.",
    },
    "altitude-residence": {
      tag: "Lüks gayrimenkul",
      summary:
        "Altitude için lüks konut sitesi. Skyline ve rezidans tipleri anlatılır; sayfanın tek işi görüntüleme randevusu almak.",
    },
    "casa-aurelia": {
      tag: "Butik otel",
      summary:
        "Roma'daki Casa Aurelia için rezervasyon vitrini. İngilizce ve İtalyanca; oda tipleri ve tereddüde yer bırakmayan bir rezervasyon yolu.",
    },
    "seraphine-atelier": {
      tag: "Moda vitrini",
      summary:
        "Séraphine Atelier için moda evi sitesi. Kadın ve erkek katalog, butiğin hikâyesi; satış sepetle değil, özel prova randevusuyla kapanıyor.",
    },
    "havva-baklava": {
      tag: "Butik web",
      summary:
        "Köln Ehrenfeld'deki HAVVA için sinematik vitrin. Gaziantep–Köln hikâyesi, günlük fiyat listesi ve doğrudan WhatsApp sipariş yolu.",
    },
    mizan: {
      tag: "Estetik klinik",
      summary:
        "Nişantaşı'ndaki MİZAN için klinik sitesi. Tedaviler net; ton sakin; ziyaretçi ilk ölçü randevusuna yönlendirilir.",
    },
    "sahra-butik": {
      tag: "Butik web",
      summary:
        "Malatya'daki Sahra Butik için katalog vitrini. Günlük, spor ve tesettür hatları; mağazada dene, bedeni ve stoğu online sor.",
    },
    "vela-skin-atelier": {
      tag: "Cilt atölyesi",
      summary:
        "SoHo'daki VELA Skin Atelier için randevu sitesi. Önce gözlem, sonra tedavi; aynı anda tek danışan. Klinik soğukluğu yok.",
    },
    aiahi: {
      tag: "WhatsApp + CRM",
      summary:
        "İşletmeler için WhatsApp randevu asistanı ve müşteri paneli. Mevcut numara kalır; talep takvime düşer, kayıt panelde birikir.",
    },
    "whatsapp-bot": {
      title: "WhatsApp Sohbet Asistanı",
      tag: "Otomasyon",
      summary:
        "WhatsApp'a gelen soruları sizin fiyatlarınızla yanıtlar. Boş saate randevu yazar, dolu saati korur, randevudan 1 saat önce hatırlatır.",
    },
    "instagram-bot": {
      title: "Instagram Mesaj Asistanı",
      tag: "Otomasyon",
      summary:
        "Instagram DM'lerinde aynı takvim ve aynı fiyatlar. Randevu alır, iptal olan saati yeniden açar, 1 saat önce hatırlatma gönderir.",
    },
    crm: {
      title: "Satış ve Randevu Paneli",
      tag: "Yazılım",
      summary:
        "İki asistanın aldığı randevuları tek panelde toplar. Kanal, saat, müşteri ve notlar bir arada; günü tek ekrandan görürsünüz.",
    },
    "css-system": {
      tag: "Tasarım sistemi",
      summary:
        "Renk, tipografi ve boşluk kurallarını tek kaynaktan yöneten CSS tasarım sistemi. Web ile panel aynı dili konuşur, tutarsızlık kalmaz.",
    },
  },
  en: {
    wcc: {
      tag: "Corporate web",
      summary:
        "Corporate site for a US cabinet maker. Buyers check it on site, on a phone; it loads fast there and puts the quote request one tap away.",
    },
    aydnnacar: {
      tag: "Brand & catalogue",
      summary:
        "Minimal digital showroom for Nacar Mobilya. Collections move like a store floor, and each model ties back to its size, name and a way to get in touch.",
    },
    wuffbutik: {
      tag: "Boutique web",
      summary:
        "A calm boutique site for Wuuf. Store mood and WhatsApp selling share one page, and it stays light enough to feel quick on a phone.",
    },
    "altitude-residence": {
      tag: "Luxury real estate",
      summary:
        "Dark, heavy residence site for Altitude. Skyline and residence types get their story, but the page only really wants one thing: a booked viewing.",
    },
    "casa-aurelia": {
      tag: "Boutique hotel",
      summary:
        "Booking showcase for Casa Aurelia in Rome. English and Italian, room types laid out plainly, and a reservation path that leaves no room to hesitate.",
    },
    "seraphine-atelier": {
      tag: "Fashion showcase",
      summary:
        "Fashion house site for Séraphine Atelier. Women's and men's lookbook plus the atelier's story; it closes on a private fitting, not a checkout.",
    },
    "havva-baklava": {
      tag: "Artisan food",
      summary:
        "Cinematic showcase for HAVVA in Köln Ehrenfeld. The Gaziantep-to-Cologne craft story, the day's price list, and ordering straight over WhatsApp.",
    },
    mizan: {
      tag: "Aesthetic clinic",
      summary:
        "Smile architecture presence for MİZAN in Nişantaşı. The protocol list is there, but the tone stays quiet and drifts toward the first measurement.",
    },
    "sahra-butik": {
      tag: "Boutique web",
      summary:
        "Lookbook-led women's wear for Sahra Butik in Malatya. Daily, sport and tesettür lines; try it in store, ask about size and stock online.",
    },
    "vela-skin-atelier": {
      tag: "Skin atelier",
      summary:
        "Booking site for VELA in SoHo. Observation before treatment, a clear index of what's offered, and a studio that takes one client at a time.",
    },
    aiahi: {
      tag: "WhatsApp + CRM",
      summary:
        "WhatsApp booking assistant and customer panel for service businesses. Keep your number; requests land on the calendar and in the CRM.",
    },
    "whatsapp-bot": {
      title: "WhatsApp Conversation Assistant",
      tag: "Automation",
      summary:
        "Answers WhatsApp questions with your prices. Books open hours, protects the busy ones, and sends the reminder an hour before the appointment.",
    },
    "instagram-bot": {
      title: "Instagram DM Assistant",
      tag: "Automation",
      summary:
        "The same calendar and the same prices inside Instagram DMs. It books, it reopens the hour after a cancellation, it reminds an hour ahead.",
    },
    crm: {
      title: "CRM Sales Panel",
      tag: "Software",
      summary:
        "Pulls the bookings from both assistants into one panel. Channel, time, customer and notes together, so the whole day reads off one screen.",
    },
    "css-system": {
      tag: "Design system",
      summary:
        "A CSS design system holding colour, type and spacing in one source. Web and admin speak the same language, so the drift never starts.",
    },
  },
  es: {
    wcc: {
      tag: "Web corporativa",
      summary:
        "Sitio corporativo para un fabricante de gabinetes en EE. UU. Los clientes lo miran desde la obra, en el teléfono; ahí carga rápido y la cotización queda a un toque.",
    },
    aydnnacar: {
      tag: "Marca y catálogo",
      summary:
        "Showroom digital para Nacar Mobilya. Las colecciones se recorren como una tienda y cada modelo enlaza con su medida, su nombre y el contacto.",
    },
    wuffbutik: {
      tag: "Web boutique",
      summary:
        "Vitrina serena para Wuuf Butik. El ambiente de tienda y la venta por WhatsApp comparten una sola página, ligera para que vuele en móvil.",
    },
    "altitude-residence": {
      tag: "Bienes raíces de lujo",
      summary:
        "Sitio oscuro y denso para Altitude. El skyline y los tipos de unidad tienen su relato, pero la página busca una sola cosa: agendar la visita.",
    },
    "casa-aurelia": {
      tag: "Hotel boutique",
      summary:
        "Vitrina de reservas para Casa Aurelia en Roma. Inglés e italiano, tipos de habitación claros y un camino a reservar que no deja lugar a dudas.",
    },
    "seraphine-atelier": {
      tag: "Moda y atelier",
      summary:
        "Sitio de casa de moda para Séraphine Atelier. Lookbook de mujer y hombre más la historia del taller; cierra en una cita privada, no en un carrito.",
    },
    "havva-baklava": {
      tag: "Gastronomía artesanal",
      summary:
        "Vitrina cinematográfica para HAVVA en Ehrenfeld. La historia de Gaziantep a Colonia, la lista de precios del día y el pedido directo por WhatsApp.",
    },
    mizan: {
      tag: "Clínica estética",
      summary:
        "Presencia de arquitectura de sonrisa para MİZAN en Nişantaşı. La lista de protocolos está, pero el tono es sereno y lleva a la primera medida.",
    },
    "sahra-butik": {
      tag: "Web boutique",
      summary:
        "Moda de mujer guiada por lookbook para Sahra Butik en Malatya. Líneas günlük, sport y tesettür; pruébalo en tienda, pregunta talla y stock en línea.",
    },
    "vela-skin-atelier": {
      tag: "Atelier de piel",
      summary:
        "Sitio de reservas para VELA en SoHo. Primero observar, después tratar; un estudio que atiende a una persona a la vez, sin frialdad de clínica.",
    },
    aiahi: {
      tag: "WhatsApp + CRM",
      summary:
        "Asistente de citas por WhatsApp y panel de clientes para negocios de servicios. Conserva su número; la petición cae en el calendario y en el CRM.",
    },
    "whatsapp-bot": {
      title: "Asistente de WhatsApp",
      tag: "Automatización",
      summary:
        "Responde en WhatsApp con sus precios. Agenda las horas libres, respeta las ocupadas y manda el recordatorio una hora antes de la cita.",
    },
    "instagram-bot": {
      title: "Asistente de DM de Instagram",
      tag: "Automatización",
      summary:
        "El mismo calendario y los mismos precios dentro de los DM de Instagram. Agenda, reabre la hora tras una cancelación y recuerda una hora antes.",
    },
    crm: {
      title: "Panel CRM de ventas",
      tag: "Software",
      summary:
        "Reúne en un panel las citas de los dos asistentes. Canal, hora, cliente y notas juntos: el día entero se lee en una sola pantalla.",
    },
    "css-system": {
      tag: "Sistema de diseño",
      summary:
        "Sistema CSS que guarda color, tipografía y espaciado en una sola fuente. Web y panel hablan el mismo idioma y la deriva nunca empieza.",
    },
  },
  de: {
    wcc: {
      tag: "Unternehmensweb",
      summary:
        "Unternehmenswebsite für einen US-Möbelhersteller. Kunden schauen auf der Baustelle aufs Handy; dort lädt sie schnell und legt die Anfrage einen Tipp entfernt.",
    },
    aydnnacar: {
      tag: "Marke & Katalog",
      summary:
        "Digitaler Showroom für Nacar Mobilya. Die Kollektionen gehen sich wie eine Ladenfläche, und jedes Modell führt zu Maß, Name und Kontakt.",
    },
    wuffbutik: {
      tag: "Boutique-Web",
      summary:
        "Ruhige Boutique-Vitrine für Wuuf. Ladenstimmung und WhatsApp-Verkauf teilen sich eine Seite, die leicht genug bleibt, um mobil schnell zu wirken.",
    },
    "altitude-residence": {
      tag: "Luxusimmobilien",
      summary:
        "Dunkle, schwere Residenz-Website für Altitude. Skyline und Wohnungstypen bekommen ihre Erzählung, doch die Seite will nur eines: die Besichtigung.",
    },
    "casa-aurelia": {
      tag: "Boutique-Hotel",
      summary:
        "Buchungsvitrine für Casa Aurelia in Rom. Englisch und Italienisch, klar aufgeführte Zimmertypen und ein Reservierungsweg ohne Zögern.",
    },
    "seraphine-atelier": {
      tag: "Mode & Atelier",
      summary:
        "Modehaus-Website für Séraphine Atelier. Damen- und Herren-Lookbook samt Geschichte des Ateliers; am Ende steht die private Anprobe, kein Warenkorb.",
    },
    "havva-baklava": {
      tag: "Handwerk & Genuss",
      summary:
        "Filmische Vitrine für HAVVA in Köln-Ehrenfeld. Die Geschichte von Gaziantep nach Köln, die Tagespreise und die Bestellung direkt über WhatsApp.",
    },
    mizan: {
      tag: "Ästhetik-Klinik",
      summary:
        "Lächeln-Architektur-Präsenz für MİZAN in Nişantaşı. Die Protokolle stehen da, der Ton bleibt ruhig und führt zur ersten Messung.",
    },
    "sahra-butik": {
      tag: "Boutique-Web",
      summary:
        "Lookbook-geführte Damenmode für Sahra Butik in Malatya. Günlük-, Sport- und Tesettür-Linien; im Laden anprobieren, Größe und Bestand online fragen.",
    },
    "vela-skin-atelier": {
      tag: "Skin Atelier",
      summary:
        "Buchungswebsite für VELA in SoHo. Erst beobachten, dann behandeln; ein Studio für jeweils einen Gast, ohne klinische Kälte.",
    },
    aiahi: {
      tag: "WhatsApp + CRM",
      summary:
        "WhatsApp-Terminassistent und Kundenpanel für terminbasierte Betriebe. Nummer bleibt; Anfragen landen im Kalender und in der Kundendatei.",
    },
    "whatsapp-bot": {
      title: "WhatsApp-Assistent",
      tag: "Automatisierung",
      summary:
        "Antwortet in WhatsApp mit Ihren Preisen. Bucht freie Stunden, schützt die belegten und erinnert eine Stunde vor dem Termin.",
    },
    "instagram-bot": {
      title: "Instagram-DM-Assistent",
      tag: "Automatisierung",
      summary:
        "Derselbe Kalender und dieselben Preise in Instagram-DMs. Bucht, gibt die Stunde nach einer Absage wieder frei, erinnert eine Stunde vorher.",
    },
    crm: {
      title: "CRM-Verkaufspanel",
      tag: "Software",
      summary:
        "Bündelt die Termine beider Assistenten in einem Panel. Kanal, Zeit, Kunde und Notizen zusammen — der ganze Tag auf einem Bildschirm.",
    },
    "css-system": {
      tag: "Designsystem",
      summary:
        "CSS-Designsystem, das Farbe, Typografie und Abstände in einer Quelle hält. Web und Admin sprechen dieselbe Sprache, das Auseinanderdriften beginnt nicht.",
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
