/** Kart metinleri — full project-details client bundle'a girmesin */
export type ProjectCardCopy = {
  title?: string;
  tag: string;
  summary: string;
};

const projectCardCopy: Record<string, Record<string, ProjectCardCopy>> = {
  "tr": {
    "wcc": {
      "tag": "Kurumsal web",
      "summary": "ABD merkezli mobilya üreticisi için kurumsal site. mobilde hızlı, SEO’ya hazır; marka, teklif ve iletişim tek akışta."
    },
    "aydnnacar": {
      "tag": "Marka & e katalog",
      "summary": "Nacar Mobilya için minimal, editoryal bir dijital vitrin kurduk. Koleksiyonlar ve ürünler showroom hissiyle sunulur; her model isim, ölçü ve iletişim adımına net biçimde bağlanır."
    },
    "wuffbutik": {
      "tag": "Butik web",
      "summary": "Wuuf Butik için sakin, şık ve yerel markaya uygun bir vitrin sitesi kurduk. Mağaza atmosferi ile uzaktan satış iletişimini WhatsApp üzerinden tek akışta birleştirdik."
    },
    "altitude-residence": {
      "tag": "Lüks gayrimenkul",
      "summary": "Altitude Private Residences için karanlık, editoryal bir lüks konut deneyimi kurduk. şehir silüeti, ritim ve randevu odaklı dönüşüm bir arada."
    },
    "casa-aurelia": {
      "tag": "Butik otel",
      "summary": "Roma’da beş yıldızlı butik otel Casa Aurelia için sakin, atmosferik bir rezervasyon vitrini kurduk. İngilizce ve İtalyanca dil desteğiyle net bir booking yolu."
    },
    "seraphine-atelier": {
      "tag": "Moda e ticaret",
      "summary": "Séraphine Atelier için sis, film ve tipografiyle kurulan editoryal moda evi. Kadın / erkek lookbook, butik zemin hikâyesi ve özel fitting randevusuna giden net bir dönüşüm yolu. sepet değil, private hour."
    },
    "havva-baklava": {
      "tag": "Butik web",
      "summary": "Köln Ehrenfeld’deki HAVVA Baklava için karanlık, sinematik bir vitrin. Gaziantep’ten Köln’e uzanan ustalık hikâyesi, günlük fiyat listesi ve WhatsApp üzerinden net sipariş yolu tek akışta."
    },
    "mizan": {
      "tag": "Estetik klinik",
      "summary": "Nişantaşı’nda gülüş mimarisi stüdyosu MİZAN için milimetrik, editoryal bir dijital vitrin. Denge, oran ve sessizlik vaadi; protokoller ve ilk ölçü randevusuna net akan bir deneyim."
    },
    "sahra-butik": {
      "tag": "Butik web",
      "summary": "Malatya’da Sahra Butik için lookbook odaklı kadın giyim vitrini. Günlük, spor ve tesettür çizgileri; mağazada deneme ile online stok sorusunu tek akışta birleştirdik."
    },
    "vela-skin-atelier": {
      "tag": "Skin atelier",
      "summary": "SoHo New York’ta VELA Skin Atelier için sakin, klinik soğukluğu olmayan bir randevu vitrini. Observation first yaklaşımı, tedavi indeksi ve tek danışanlı stüdyo ritmi."
    },
    "whatsapp-bot": {
      "title": "WhatsApp Sohbet Asistanı",
      "tag": "Otomasyon",
      "summary": "Telefona bakmanıza gerek kalmadan WhatsApp’tan gelen müşteriyle sizin yerinize konuşur. Fiyatlarınızı ve hizmetlerinizi bilir. Randevu olmayan boş saatleri bilir, gelenleri oraya yönlendirir. Dolu saatleri de bilir, randevuları ona göre alır. İptal olunca boş kalan saati de bilir. Randevu saatinden 1 saat önce sahibine bildirim gider. son dakika iptallerinin önüne geçer. Soruları cevaplar, sizin gibi konuşur."
    },
    "instagram-bot": {
      "title": "Instagram DM Asistanı",
      "tag": "Otomasyon",
      "summary": "Instagram DM’de de aynı iş. Telefona bakmadan müşteriyle sizin gibi konuşur. Fiyat ve hizmetlerinizi bilir. Boş saatleri bilir, gelen randevuları oraya yönlendirir. Dolu saatleri bilir, ona göre alır. İptal olunca boş kalan saati de bilir. Saatten 1 saat önce randevu sahibine bildirim gider. Soru sorar, cevaplar."
    },
    "crm": {
      "title": "CRM Satış Paneli",
      "tag": "Yazılım",
      "summary": "WhatsApp ve Instagram asistanlarıyla birlikte çalışan panel. Botların konuştuğu müşteriler, aldığı randevular, iptaller ve notlar tek yerde. Kim ne zaman gelecek, hangi saat boş, hangi saat dolu, WhatsApp’tan mı Instagram’dan mı geldi. hepsi orada görünür."
    },
    "css-system": {
      "tag": "Tasarım sistemi",
      "summary": "Markaya özel renk, tipografi, bileşen ve boşluk kurallarıyla tutarlı arayüz üreten bir CSS tasarım sistemi kurduk. Token'lar tek kaynaktan yönetilir; web ve panel aynı görsel dili konuşur."
    }
  },
  "en": {
    "wcc": {
      "tag": "Corporate web",
      "summary": "Corporate site for a US furniture manufacturer. fast on mobile, SEO ready; brand, quote, and contact in one clear flow."
    },
    "aydnnacar": {
      "tag": "Brand & catalogue",
      "summary": "A minimal editorial digital showroom for Nacar Mobilya. collections and products presented with a premium feel, with every model tied cleanly to size, name, and contact."
    },
    "wuffbutik": {
      "tag": "Boutique web",
      "summary": "A calm, elegant boutique site for Wuuf. store presence and WhatsApp led remote sales brought into one flow."
    },
    "altitude-residence": {
      "tag": "Luxury real estate",
      "summary": "A dark, editorial luxury residence experience for Altitude. city skyline, tempo, and viewing led conversion working together."
    },
    "casa-aurelia": {
      "tag": "Boutique hotel",
      "summary": "An atmospheric booking showcase for five star boutique hotel Casa Aurelia in Rome. with English/Italian support and a clear path to booking."
    },
    "seraphine-atelier": {
      "tag": "Fashion e commerce",
      "summary": "An editorial fashion house for Séraphine Atelier. mist, film, and typography. Women/men lookbook, maison floor story, and a clear path to a private fitting. not a cart, a private hour."
    },
    "havva-baklava": {
      "tag": "Boutique web",
      "summary": "A dark, cinematic showcase for HAVVA Baklava in Köln Ehrenfeld. craft story from Gaziantep to Cologne, daily price list, and a clear WhatsApp order path in one flow."
    },
    "mizan": {
      "tag": "Aesthetic clinic",
      "summary": "An editorial digital presence for MİZAN, a smile architecture studio in Nişantaşı. Balance, proportion, and quiet confidence, with a clear path from protocols to the first measurement booking."
    },
    "sahra-butik": {
      "tag": "Boutique web",
      "summary": "A lookbook led women’s wear showcase for Sahra Butik in Malatya. Daily, sport, and tesettür lines, with try in store and ask stock online in one clear flow."
    },
    "vela-skin-atelier": {
      "tag": "Skin atelier",
      "summary": "A calm booking showcase for VELA Skin Atelier in SoHo, New York. Observation first care, a considered treatment index, and a one client studio rhythm without clinical coldness."
    },
    "whatsapp-bot": {
      "title": "WhatsApp Conversation Assistant",
      "tag": "Automation",
      "summary": "Talks to WhatsApp customers for you so you don’t have to watch your phone. Knows your prices and services. Knows free hours with no appointment and directs people there. Knows busy hours and books around them. Knows when a cancel frees a slot again. Sends a reminder 1 hour before to the appointment holder. cuts last minute no shows. Asks and answers questions, talks like you."
    },
    "instagram-bot": {
      "title": "Instagram DM Assistant",
      "tag": "Automation",
      "summary": "Same thing in Instagram DMs. Talks like you without watching your phone. Knows prices and services. Knows free hours and sends bookings there. Knows busy hours and books around them. Knows when a cancel frees a slot. Reminder 1 hour before. Asks and answers questions."
    },
    "crm": {
      "title": "CRM Sales Panel",
      "tag": "Software",
      "summary": "Panel that works with the WhatsApp and Instagram assistants. Customers the bots talked to, appointments, cancels, and notes in one place. Who’s coming when, which hours are free or busy, WhatsApp or Instagram. all there."
    },
    "css-system": {
      "tag": "Design system",
      "summary": "A CSS design system with brand tokens for colour, type, components, and spacing. a single source that keeps web and admin UI speaking the same visual language."
    }
  },
  "es": {
    "wcc": {
      "tag": "Web corporativa",
      "summary": "Sitio corporativo de alto rendimiento, preparado para SEO y visualmente selecto para un fabricante de mobiliario en EE. UU. Una interfaz que refleja la calidad de fabricación une marca, presupuesto y contacto en un solo flujo."
    },
    "aydnnacar": {
      "tag": "Marca y catálogo",
      "summary": "Escaparate digital editorial y minimalista para Nacar Mobilya. colecciones y productos con sensación de showroom, donde cada modelo se conecta con claridad a medida, nombre y contacto."
    },
    "wuffbutik": {
      "tag": "Web boutique",
      "summary": "Sitio boutique elegante y calmado para Wuuf. presencia de tienda y venta remota por WhatsApp en un solo flujo."
    },
    "altitude-residence": {
      "tag": "Inmobiliaria de lujo",
      "summary": "Experiencia editorial oscura de residencia de lujo para Altitude. skyline, ritmo y conversión a visita, todo en conjunto."
    },
    "casa-aurelia": {
      "tag": "Hotel boutique",
      "summary": "Escaparate atmosférico de reserva para el hotel boutique de cinco estrellas Casa Aurelia en Roma. con soporte en inglés/italiano y ruta clara a reserva."
    },
    "seraphine-atelier": {
      "tag": "Moda e commerce",
      "summary": "Casa de moda editorial para Séraphine Atelier. niebla, film y tipografía. Lookbook mujer/hombre, suelo maison y ruta clara a un fitting privado. no un carrito, una private hour."
    },
    "havva-baklava": {
      "tag": "Web boutique",
      "summary": "Escaparate cinematográfico oscuro para HAVVA Baklava en Köln Ehrenfeld. historia artesanal de Gaziantep a Colonia, carta de precios y ruta clara de pedido por WhatsApp en un solo flujo."
    },
    "mizan": {
      "tag": "Clínica estética",
      "summary": "Presencia digital editorial para MİZAN, estudio de arquitectura de la sonrisa en Nişantaşı. Equilibrio, proporción y silencio, con ruta clara de protocolos a la primera medida."
    },
    "sahra-butik": {
      "tag": "Web boutique",
      "summary": "Escaparate de moda mujer centrado en lookbook para Sahra Butik en Malatya. Líneas günlük, spor y tesettür, con prueba en tienda y consulta de stock online en un solo flujo."
    },
    "vela-skin-atelier": {
      "tag": "Skin atelier",
      "summary": "Escaparate de reserva sereno para VELA Skin Atelier en SoHo, Nueva York. Enfoque observation first, índice de tratamientos y ritmo de estudio de un solo cliente, sin frialdad clínica."
    },
    "whatsapp-bot": {
      "title": "Asistente de Conversación WhatsApp",
      "tag": "Automatización",
      "summary": "Habla con los clientes de WhatsApp por usted, para que no tenga que estar pegado al teléfono. Conoce sus precios y servicios. Conoce las horas libres sin cita y dirige ahí a la gente. Conoce las horas ocupadas y agenda en consecuencia. Sabe cuándo una cancelación libera una hora. Envía un recordatorio 1 hora antes al titular de la cita. reduce las cancelaciones de última hora. Pregunta y responde, habla como usted."
    },
    "instagram-bot": {
      "title": "Asistente de DM de Instagram",
      "tag": "Automatización",
      "summary": "Lo mismo en los DM de Instagram. Habla como usted sin que tenga que mirar el teléfono. Conoce precios y servicios. Conoce las horas libres y agenda ahí las citas. Conoce las horas ocupadas y agenda en consecuencia. Sabe cuándo una cancelación libera una hora. Recordatorio 1 hora antes. Pregunta y responde."
    },
    "crm": {
      "title": "Panel de Ventas CRM",
      "tag": "Software",
      "summary": "Panel que trabaja junto a los asistentes de WhatsApp e Instagram. Los clientes con los que hablaron los bots, sus citas, cancelaciones y notas en un solo lugar. Quién llega y cuándo, qué horas están libres u ocupadas, si vino por WhatsApp o Instagram. todo visible."
    },
    "css-system": {
      "tag": "Sistema de diseño",
      "summary": "Sistema de diseño CSS con tokens de marca para color, tipo, componentes y spacing. una sola fuente que mantiene el mismo lenguaje visual en web y panel."
    }
  },
  "de": {
    "wcc": {
      "tag": "Corporate Web",
      "summary": "Hochperformante, SEO fähige Unternehmenswebsite für einen US Möbelhersteller. Eine Oberfläche, die Fertigungsqualität spiegelt und Marke, Angebot sowie Kontakt in einem Ablauf vereint."
    },
    "aydnnacar": {
      "tag": "Marke & Katalog",
      "summary": "Minimaler editorialer Digital Showroom für Nacar Mobilya. Kollektionen und Produkte mit Premium Wirkung, jedes Modell klar mit Maß, Name und Kontakt verknüpft."
    },
    "wuffbutik": {
      "tag": "Boutique-Web",
      "summary": "Ruhige, elegante Boutique Website für Wuuf. Ladenpräsenz und WhatsApp geführter Fernverkauf in einem Ablauf."
    },
    "altitude-residence": {
      "tag": "Luxusimmobilien",
      "summary": "Dunkle, editoriale Markenerfahrung für Altitude Residences. Skyline, Rhythmus und klare Einladung zur Besichtigung im Zusammenspiel."
    },
    "casa-aurelia": {
      "tag": "Boutique-Hotel",
      "summary": "Atmosphärische Buchungspräsentation für das Fünf Sterne Boutique Hotel Casa Aurelia in Rom. mit Englisch /Italienisch Unterstützung und klarem Weg zur Reservierung."
    },
    "seraphine-atelier": {
      "tag": "Mode & Atelier",
      "summary": "Editoriales Modehaus für Séraphine Atelier. Nebel, Film und Typografie. Damen und Herren Lookbook, Ateliergeschichte und klarer Weg zum privaten Fitting. kein Warenkorb, sondern eine private Stunde."
    },
    "havva-baklava": {
      "tag": "Boutique-Web",
      "summary": "Dunkle, filmische Vitrine für HAVVA Baklava in Köln Ehrenfeld. Handwerk von Gaziantep nach Köln, Tagespreisliste und klarer Bestellweg über WhatsApp in einem Ablauf."
    },
    "mizan": {
      "tag": "Ästhetik Klinik",
      "summary": "Editoriale digitale Präsenz für MİZAN, Lächeln Architektur Studio in Nişantaşı. Balance, Proportion und Stille, mit klarem Weg von Protokollen zur ersten Messung."
    },
    "sahra-butik": {
      "tag": "Boutique-Web",
      "summary": "Lookbook geführte Damenmode Vitrine für Sahra Butik in Malatya. Günlük, Spor und Tesettür Linien, mit Anprobe im Laden und Online Bestandsfrage in einem Ablauf."
    },
    "vela-skin-atelier": {
      "tag": "Skin Atelier",
      "summary": "Ruhige Buchungsvitrine für VELA Skin Atelier in SoHo, New York. Observation first Pflege, durchdachter Treatment Index und Ein Gast Studio Rhythmus ohne klinische Kälte."
    },
    "whatsapp-bot": {
      "title": "WhatsApp Gesprächsassistent",
      "tag": "Automatisierung",
      "summary": "Spricht mit WhatsApp Kunden für Sie, ohne dass Sie am Handy hängen. Kennt Preise und Leistungen, freie und belegte Termine und bucht entsprechend. Nach einer Absage ist die Stunde wieder frei. Erinnerung eine Stunde vorher. weniger kurzfristige Absagen. Fragt, antwortet und spricht wie Sie."
    },
    "instagram-bot": {
      "title": "Instagram-DM-Assistent",
      "tag": "Automatisierung",
      "summary": "Dasselbe in Instagram Direktnachrichten. Spricht wie Sie, ohne ständiges Handy Checken. Kennt Preise und Leistungen, freie und belegte Termine sowie wieder freigewordene Stunden. Erinnerung eine Stunde vorher."
    },
    "crm": {
      "title": "CRM-Verkaufspanel",
      "tag": "Software",
      "summary": "Panel für die WhatsApp und Instagram Assistenten. Kunden, Termine, Absagen und Notizen an einem Ort. Wer wann kommt, welche Stunden frei oder belegt sind, WhatsApp oder Instagram. alles auf einen Blick."
    },
    "css-system": {
      "tag": "Designsystem",
      "summary": "CSS Designsystem mit Marken Tokens für Farbe, Typografie, Komponenten und Abstände. eine Quelle, die Web und Admin dieselbe visuelle Sprache sprechen lässt."
    }
  }
};

export function getProjectCardCopy(
  locale: string,
  id: string
): ProjectCardCopy | undefined {
  const pack = projectCardCopy[locale] ?? projectCardCopy.en;
  return pack[id] ?? projectCardCopy.en?.[id] ?? projectCardCopy.tr?.[id];
}
