export type ProjectDetail = {
  /** Kart / detay başlığı; yoksa projects.ts name kullanılır */
  title?: string;
  tag: string;
  summary: string;
  whatTitle: string;
  what: string[];
  howTitle: string;
  how: string[];
  stack: string[];
  result?: string;
};

export type ProjectDetailsByLocale = Record<string, Record<string, ProjectDetail>>;

export const projectDetails: ProjectDetailsByLocale = {
  tr: {
    wcc: {
      tag: "Kurumsal web",
      summary:
        "ABD merkezli bir mobilya markası için yüksek performanslı, SEO odaklı ve görsel olarak seçkin bir kurumsal web deneyimi.",
      whatTitle: "Ne yaptık?",
      what: [
        "Markanın üretim kalitesini yansıtan özgün arayüz ve animasyonlar.",
        "Mobil uyumlu, hızlı yüklenen ve dönüşüm odaklı sayfa yapısı.",
        "İçerik, medya ve SEO yönetimini kolaylaştıran panel entegrasyonu.",
        "Hizmet alanları, galeri ve teklif akışını tek sitede birleştirdik.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi ürün ve hizmetleri net bir hiyerarşiyle gezer.",
        "Eylem butonları teklif formuna veya iletişime yönlendirir.",
        "İçerik paneli üzerinden sayfalar ve medya güncellenir.",
        "SEO ve performans ayarları yayın öncesi optimize edilir.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result: "Canlı site: seçkin algı, mobil performans ve yönetilebilir içerik.",
    },
    aydnnacar: {
      tag: "Marka & e-katalog",
      summary:
        "Nacar Mobilya için minimal, editoryal bir dijital vitrin. Koleksiyonlar ve ürünler showroom hissiyle sunulur.",
      whatTitle: "Ne yaptık?",
      what: [
        "Markaya özel tipografi ve sakin renk dili.",
        "Salon, yemek, yatak koleksiyonlarını öne çıkaran slider ve katalog.",
        "Ürün detayına giden net gezinme ve iletişim yolları.",
        "Mobilde de bozulmayan seçkin sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ana sayfa koleksiyon hikâyesiyle başlar, kataloga akar.",
        "Kullanıcı kategori seçerek modelleri inceler.",
        "Ölçü, kumaş ve teslimat için iletişim adımına yönlendirilir.",
        "İçerik güncellemeleri koleksiyon yapısı üzerinden ölçeklenir.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
    },
    wuffbutik: {
      tag: "Butik web",
      summary:
        "Wuuf Butik için sakin, şık ve yerel markaya uygun bir vitrin sitesi. Mağaza ve uzaktan satış iletişimi bir arada.",
      whatTitle: "Ne yaptık?",
      what: [
        "Butik kimliğine uygun tipografi ve görsel dil.",
        "Koleksiyon, çizgiler ve iletişim odaklı net bilgi mimarisi.",
        "WhatsApp / mesaj butonlarıyla hızlı dönüşüm yolu.",
        "Hafif, hızlı ve mobilde akıcı arayüz.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi markayı ve vitrini ilk ekranda anlar.",
        "Koleksiyon sayfalarından ürün çizgilerine geçer.",
        "Mesaj butonu ile doğrudan iletişime düşer.",
        "İçerik sade tutulduğu için güncelleme ve bakım kolaydır.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
    },
    "altitude-residence": {
      tag: "Lüks gayrimenkul",
      summary:
        "Altitude Private Residences için karanlık, editoryal bir lüks konut deneyimi — şehir silüeti, ritim ve randevu odaklı dönüşüm.",
      whatTitle: "Ne yaptık?",
      what: [
        "Ultra-lüks markaya özel tipografi, görsel dil ve sinematik hero.",
        "Rezidans hikâyesini yükseklik / ritim metaforuyla anlatan sayfa akışı.",
        "“Görüntüleme randevusu” butonuyla net randevu ve satış yolu.",
        "Masaüstü ve mobilde bozulmayan seçkin sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve yaşam vaadini editoryal bir karede kurar.",
        "Ziyaretçi rezidansları ve konum hikâyesini gezer.",
        "Buton doğrudan görüntüleme / iletişim adımına yönlendirir.",
        "İçerik ve medya markanın lüks tonunu koruyarak güncellenir.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Canlı site: seçkin algı, net randevu yolu, mobil uyum.",
    },
    "casa-aurelia": {
      tag: "Butik otel",
      summary:
        "Roma’da beş yıldızlı butik otel Casa Aurelia için sakin, atmosferik bir rezervasyon vitrini — İngilizce ve İtalyanca dil desteğiyle.",
      whatTitle: "Ne yaptık?",
      what: [
        "Otelin karakterini yansıtan sinematik hero ve tipografi.",
        "Rezervasyon odaklı net iletişim akışı.",
        "İngilizce ve İtalyanca dil seçimi.",
        "Mobilde de bozulmayan lüks sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve Roma konumunu tek kompozisyonda anlatır.",
        "Ziyaretçi otel hikâyesini ve odaları gezer.",
        "Rezervasyon butonu rezervasyon / iletişime düşer.",
        "Dil anahtarıyla içerik İngilizce ↔ İtalyanca arasında geçer.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Canlı site: butik otel algısı, dil desteği, net rezervasyon yolu.",
    },
    "whatsapp-bot": {
      title: "WhatsApp Sohbet Asistanı",
      tag: "Otomasyon",
      summary:
        "Telefona bakmanıza gerek kalmadan WhatsApp’tan gelen müşteriyle sizin yerinize konuşur. Fiyatlarınızı ve hizmetlerinizi bilir. Randevu olmayan boş saatleri bilir, gelenleri oraya yönlendirir. Dolu saatleri de bilir, randevuları ona göre alır. İptal olunca boş kalan saati de bilir. Randevu saatinden 1 saat önce sahibine bildirim gider — son dakika iptallerinin önüne geçer. Soruları cevaplar, sizin gibi konuşur.",
      whatTitle: "Ne yaptık?",
      what: [
        "Fiyatlarınızı ve hizmetlerinizi bota yazdık; müşteri sorduğunda uydurmaz, sizin söylediğinizle cevaplar.",
        "Boş saatleri bilir: o saatte randevu yoksa müşteriyi oraya yönlendirir.",
        "Dolu saatleri bilir: o saatte zaten biri varsa yeni randevuyu oraya koymaz.",
        "İptal edilince boş kalan saati de bilir; yeni müşteriye o saati açar.",
        "Randevu saatinden 1 saat önce sahibine bildirim gönderir — unutma ve son dakika iptali azalır.",
        "Soru sorar, sorulara cevap verir; yetişemediği yerde size haber verir.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Müşteri WhatsApp’tan yazar. Bot sizin gibi karşılar, ne istediğini sorar.",
        "Fiyatı ve hizmeti anlatır. Boş saatleri gösterir, dolu olanlara dokunmaz.",
        "Müşteri saat seçince randevu alınır. İptal ederse o saat yine boşalır.",
        "Saatten 1 saat önce hatırlatma gider. İsterseniz her şey CRM paneline düşer.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Telefona yapışmadan iş yürür. Boş saatler dolar, dolu saatler çakışmaz, iptaller düzgün işler, 1 saat kala hatırlatma gider.",
    },
    "instagram-bot": {
      title: "Instagram DM Asistanı",
      tag: "Otomasyon",
      summary:
        "Instagram DM’de de aynı iş. Telefona bakmadan müşteriyle sizin gibi konuşur. Fiyat ve hizmetlerinizi bilir. Boş saatleri bilir, gelen randevuları oraya yönlendirir. Dolu saatleri bilir, ona göre alır. İptal olunca boş kalan saati de bilir. Saatten 1 saat önce randevu sahibine bildirim gider. Soru sorar, cevaplar.",
      whatTitle: "Ne yaptık?",
      what: [
        "DM’ye yazanın karşısına sizin adınıza çıkan sohbet kurduk.",
        "Fiyat ve hizmet cevapları WhatsApp’takiyle aynı — iki yerde farklı şey söylemez.",
        "Boş saatleri bilir, randevuyu oraya alır. Dolu saatlere koymaz.",
        "İptal olunca boş kalan saati açar. Saatten 1 saat önce hatırlatma gönderir.",
        "Botun yetmediği konuşmaları size veya CRM’e iletir.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Birisi Instagram’dan DM atar. Bot karşılar, gerekirse soru sorar, fiyatı anlatır.",
        "Randevu isteyince boş saatleri gösterir, doluları göstermez. Seçilen saat kaydolur.",
        "İptal olursa o saat yine boşalır. Saatten 1 saat önce hatırlatma gider.",
        "WhatsApp asistanıyla aynı takvimi kullanır; isterseniz CRM’de birleşir.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "Instagram DM’si dağılmaz: sorular cevaplanır, randevular boş saatlere yazılır, 1 saat kala hatırlatma gider — telefona bakmadan.",
    },
    crm: {
      title: "CRM Satış Paneli",
      tag: "Yazılım",
      summary:
        "WhatsApp ve Instagram asistanlarıyla birlikte çalışan panel. Botların konuştuğu müşteriler, aldığı randevular, iptaller ve notlar tek yerde. Kim ne zaman gelecek, hangi saat boş, hangi saat dolu, WhatsApp’tan mı Instagram’dan mı geldi — hepsi orada görünür.",
      whatTitle: "Ne yaptık?",
      what: [
        "Satışın adım adım ilerlediği sade bir panel kurduk.",
        "WhatsApp ve Instagram botlarını bağladık: randevu alınca kart kendiliğinden açılır.",
        "Kartta kanal, saat, boş/dolu durumu, notlar ve konuşma özeti durur.",
        "Bugün kim gelecek, kim iptal etti, hangi saatler boş — hepsi panelden okunur.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Bot boş bir saate randevu yazınca panelde kart oluşur — telefonda olmasanız bile.",
        "Kartı ilerletir, not ekler, kime ait olduğunu seçersiniz. WhatsApp veya Instagram özeti aynı müşteride kalır.",
        "İptal olunca o saat yine boşalır; panel de güncellenir.",
        "İki bot ayrı yerde konuşur, CRM’de her şey tek listede toplanır.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Botlar konuşur, boş saatleri doldurur, 1 saat kala hatırlatır; CRM hepsini bir yerde tutar. Siz yokken sistem dolmaya devam eder.",
    },
    "css-system": {
      tag: "Tasarım sistemi",
      summary:
        "Markaya özel renk, tipografi, bileşen ve boşluk kurallarıyla tutarlı arayüz üreten CSS tasarım sistemi.",
      whatTitle: "Ne yaptık?",
      what: [
        "Color, type, radius ve spacing token’ları.",
        "Primary / accent / ghost buton ve temel bileşenler.",
        "Dokümantasyon ve örnek kullanım yüzeyi.",
        "Web ve panelde aynı dilin tekrarını sağlar.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Token’lar tek kaynaktan (:root / theme) yönetilir.",
        "Bileşenler bu token’ları kullanarak üretilir.",
        "Yeni sayfa eklerken stil dağılmaz, hız artar.",
        "Marka güncellemesi tek noktadan yayılır.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
    },
  },
  en: {
    wcc: {
      tag: "Corporate web",
      summary:
        "A high-performance, SEO-ready, premium corporate site for a US furniture brand.",
      whatTitle: "What we built",
      what: [
        "Custom UI and motion that reflect manufacturing quality.",
        "Mobile-first, fast, conversion-focused structure.",
        "CMS for content, media, and SEO.",
        "Services, gallery, and quote flow in one site.",
      ],
      howTitle: "How it works",
      how: [
        "Visitors browse products and services in a clear hierarchy.",
        "CTAs lead to quote or contact.",
        "Pages and media update from the admin panel.",
        "SEO and performance are tuned before launch.",
      ],
      stack: ["React", "Vite", "TypeScript"],
    },
    aydnnacar: {
      tag: "Brand & catalogue",
      summary:
        "A minimal editorial digital showroom for Nacar Mobilya — collections and products with a premium feel.",
      whatTitle: "What we built",
      what: [
        "Custom type and calm colour language.",
        "Collection slider and product catalogue.",
        "Clear paths to product detail and contact.",
        "Premium presentation on mobile.",
      ],
      howTitle: "How it works",
      how: [
        "Homepage opens with collection story, then catalogue.",
        "Users filter by category and browse models.",
        "Size, fabric, and delivery go through contact.",
        "Content scales through the collection structure.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
    },
    wuffbutik: {
      tag: "Boutique web",
      summary:
        "A calm, elegant boutique site for Wuuf — store presence plus remote messaging.",
      whatTitle: "What we built",
      what: [
        "Brand-fit typography and visuals.",
        "Clear IA for collections and contact.",
        "Message CTAs for fast conversion.",
        "Light, fast mobile UI.",
      ],
      howTitle: "How it works",
      how: [
        "First screen explains the brand and showcase.",
        "Visitors move into collection lines.",
        "Message CTA opens direct chat.",
        "Lean content keeps updates easy.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
    },
    "altitude-residence": {
      tag: "Luxury real estate",
      summary:
        "A dark, editorial luxury residence experience for Altitude — city skyline, tempo, and viewing-led conversion.",
      whatTitle: "What we built",
      what: [
        "Ultra-luxury typography, visual language, and cinematic hero.",
        "Page flow that tells the residence story through height and tempo.",
        "Clear path via Arrange a viewing CTA.",
        "Premium presentation on desktop and mobile.",
      ],
      howTitle: "How it works",
      how: [
        "First screen sets brand and lifestyle promise.",
        "Visitors explore residences and location story.",
        "CTA routes to viewing / contact.",
        "Content stays true to the luxury tone.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live site: premium feel, clear viewing path, mobile polish.",
    },
    "casa-aurelia": {
      tag: "Boutique hotel",
      summary:
        "An atmospheric booking showcase for five-star boutique hotel Casa Aurelia in Rome — with Eng/Ita support.",
      whatTitle: "What we built",
      what: [
        "Cinematic hero and typography that match the hotel’s character.",
        "Book-now focused reservation / contact flow.",
        "English and Italian language switch.",
        "Luxury presentation that holds on mobile.",
      ],
      howTitle: "How it works",
      how: [
        "First screen tells brand and Rome location in one frame.",
        "Visitors browse the hotel story and rooms.",
        "Book now CTA leads to reservation / contact.",
        "Language toggle switches Eng ↔ Ita content.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live site: boutique-hotel feel, bilingual, clear booking path.",
    },
    "whatsapp-bot": {
      title: "WhatsApp Conversation Assistant",
      tag: "Automation",
      summary:
        "Talks to WhatsApp customers for you so you don’t have to watch your phone. Knows your prices and services. Knows free hours with no appointment and directs people there. Knows busy hours and books around them. Knows when a cancel frees a slot again. Sends a reminder 1 hour before to the appointment holder — cuts last-minute no-shows. Asks and answers questions, talks like you.",
      whatTitle: "What we built",
      what: [
        "Your prices and services are in the bot — it doesn’t make numbers up.",
        "It knows free hours: if nothing is booked, it sends people there.",
        "It knows busy hours: if someone already has that slot, it won’t double-book.",
        "When someone cancels, it knows that hour is free again and can offer it.",
        "1 hour before the appointment it notifies the holder — fewer last-minute cancels.",
        "It asks and answers questions; harder cases go to you.",
      ],
      howTitle: "How it works",
      how: [
        "Customer messages WhatsApp. Bot greets like you and asks what they need.",
        "It explains price and service. Shows free hours, skips busy ones.",
        "They pick a time, it’s booked. Cancel and that hour opens again.",
        "Reminder goes out 1 hour before. Optionally everything lands in CRM.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Work keeps moving without you on the phone. Free hours fill, busy ones don’t clash, cancels free slots cleanly, reminder goes out 1 hour before.",
    },
    "instagram-bot": {
      title: "Instagram DM Assistant",
      tag: "Automation",
      summary:
        "Same thing in Instagram DMs. Talks like you without watching your phone. Knows prices and services. Knows free hours and sends bookings there. Knows busy hours and books around them. Knows when a cancel frees a slot. Reminder 1 hour before. Asks and answers questions.",
      whatTitle: "What we built",
      what: [
        "Chat that greets DMs in your name.",
        "Same prices and services as WhatsApp — no mismatch between channels.",
        "Knows free hours and books there. Won’t put people on busy hours.",
        "Cancel frees the hour. Reminder 1 hour before.",
        "Hard chats go to you or CRM.",
      ],
      howTitle: "How it works",
      how: [
        "Someone DMs. Bot greets, asks if needed, explains prices.",
        "For booking it shows free hours, not busy ones. Chosen time is saved.",
        "Cancel opens that hour again. Reminder 1 hour before.",
        "Same calendar as WhatsApp; can merge in CRM.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "DM inbox stays tidy: questions answered, bookings on free hours, reminder 1 hour before — without watching your phone.",
    },
    crm: {
      title: "CRM Sales Panel",
      tag: "Software",
      summary:
        "Panel that works with the WhatsApp and Instagram assistants. Customers the bots talked to, appointments, cancels, and notes in one place. Who’s coming when, which hours are free or busy, WhatsApp or Instagram — all there.",
      whatTitle: "What we built",
      what: [
        "A plain sales panel that moves step by step.",
        "WhatsApp and Instagram bots linked: booking opens a card on its own.",
        "Card shows channel, time, free/busy, notes, and chat summary.",
        "Who’s coming today, who cancelled, what’s still free — readable on the panel.",
      ],
      howTitle: "How it works",
      how: [
        "Bot books a free hour → card appears, even if you’re not on the phone.",
        "You move the card, add notes, assign owner. WhatsApp or Instagram summary stays on the same customer.",
        "Cancel frees the hour; panel updates too.",
        "Two bots talk in different places; CRM keeps one list.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Bots talk, fill free hours, remind 1 hour before; CRM keeps it all in one place. While you’re away, the system keeps filling.",
    },
    "css-system": {
      tag: "Design system",
      summary:
        "A CSS design system with brand tokens for colour, type, components, and spacing.",
      whatTitle: "What we built",
      what: [
        "Colour, type, radius, and spacing tokens.",
        "Primary / accent / ghost buttons and base components.",
        "Docs and example surface.",
        "Same language across web and admin UI.",
      ],
      howTitle: "How it works",
      how: [
        "Tokens live in one source (:root / theme).",
        "Components consume those tokens.",
        "New pages stay consistent and ship faster.",
        "Brand updates propagate from one place.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
    },
  },
};

// ES/DE fall back to EN if missing keys — fill with EN copies for completeness
projectDetails.es = { ...projectDetails.en };
projectDetails.de = { ...projectDetails.en };

projectDetails.es = {
  wcc: {
    tag: "Web corporativa",
    summary:
      "Sitio corporativo de alto nivel, rápido y preparado para SEO para una marca de mobiliario en EE. UU.",
    whatTitle: "Qué hicimos",
    what: [
      "UI y motion a medida que reflejan calidad de fabricación.",
      "Estructura mobile-first y orientada a conversión.",
      "CMS para contenido, medios y SEO.",
      "Servicios, galería y flujo de presupuesto en un solo sitio.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El visitante recorre productos y servicios con jerarquía clara.",
      "Los botones llevan a presupuesto o contacto.",
      "Páginas y medios se actualizan desde el panel.",
      "SEO y rendimiento se optimizan antes del lanzamiento.",
    ],
    stack: ["React", "Vite", "TypeScript"],
  },
  aydnnacar: {
    tag: "Marca y catálogo",
    summary:
      "Escaparate digital editorial y minimalista para Nacar Mobilya.",
    whatTitle: "Qué hicimos",
    what: [
      "Tipografía y color propios de la marca.",
      "Slider de colecciones y catálogo de productos.",
      "Rutas claras a detalle y contacto.",
      "Presentación cuidada en móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La home abre con la historia de colección y pasa al catálogo.",
      "El usuario filtra por categoría y ve modelos.",
      "Medida, tela y entrega van por contacto.",
      "El contenido escala con la estructura de colecciones.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
  },
  wuffbutik: {
    tag: "Web boutique",
    summary:
      "Sitio elegante y calmado para Wuuf — tienda física y mensaje remoto.",
    whatTitle: "Qué hicimos",
    what: [
      "Lenguaje visual acorde a la boutique.",
      "Arquitectura clara de colecciones y contacto.",
      "Botón de mensaje para conversión rápida.",
      "UI ligera y rápida en móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla explica marca y vitrina.",
      "El visitante entra en las líneas de colección.",
      "El botón abre el chat directo.",
      "Contenido ligero = mantenimiento fácil.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
  },
  "altitude-residence": {
    tag: "Inmobiliaria de lujo",
    summary:
      "Experiencia editorial oscura para Altitude Private Residences — skyline, ritmo y conversión a visita.",
    whatTitle: "Qué hicimos",
    what: [
      "Tipografía y hero cinematográfico de ultra lujo.",
      "Flujo que cuenta la residencia con metáfora de altura y tempo.",
      "Botón “Agendar visita” hacia cita / contacto.",
      "Presentación cuidada en escritorio y móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla fija marca y promesa de vida.",
      "El visitante explora residencias e historia de ubicación.",
      "El botón lleva a visita / contacto.",
      "El contenido mantiene el tono de lujo.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Sitio en vivo: sensación cuidada, ruta de visita clara, móvil pulido.",
  },
  "casa-aurelia": {
    tag: "Hotel boutique",
    summary:
      "Escaparate atmosférico de reserva para el hotel boutique de cinco estrellas Casa Aurelia en Roma — Eng/Ita.",
    whatTitle: "Qué hicimos",
    what: [
      "Hero cinematográfico y tipografía acorde al hotel.",
      "Flujo de reserva hacia contacto.",
      "Selector de idioma inglés e italiano.",
      "Presentación de lujo también en móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla cuenta marca y ubicación en Roma.",
      "El visitante recorre la historia del hotel y las habitaciones.",
      "El botón de reserva lleva a reserva / contacto.",
      "El interruptor de idioma cambia Eng ↔ Ita.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Sitio en vivo: sensación boutique, bilingüe, ruta de reserva clara.",
  },
  "whatsapp-bot": {
    title: "WhatsApp Gesprächsassistent",
    tag: "Automation",
    summary:
      "Spricht WhatsApp-Kunden für Sie, ohne dass Sie am Handy hängen. Kennt Preise und Leistungen. Kennt freie Stunden ohne Termin und schickt Leute dorthin. Kennt belegte Stunden und bucht danach. Kennt, wenn eine Absage eine Stunde wieder freimacht. Erinnert 1 Stunde vorher den Termininhaber — weniger Last-Minute-Absagen. Fragt und antwortet, spricht wie Sie.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Ihre Preise und Leistungen stehen im Bot — er erfindet keine Zahlen.",
      "Er kennt freie Stunden: ist nichts gebucht, schickt er dorthin.",
      "Er kennt belegte Stunden: sitzt schon jemand, kommt kein zweiter Termin drauf.",
      "Nach Absage weiß er, dass die Stunde wieder frei ist, und kann sie anbieten.",
      "1 Stunde vor dem Termin Benachrichtigung an den Inhaber — weniger Vergessen und Last-Minute-Absagen.",
      "Fragt und antwortet; Schwieriges geht an Sie.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Kunde schreibt per WhatsApp. Bot begrüßt wie Sie und fragt den Bedarf.",
      "Erklärt Preis und Leistung. Zeigt freie Stunden, lässt belegte weg.",
      "Kunde wählt Stunde, Termin ist gebucht. Absage → Stunde wieder frei.",
      "Erinnerung geht 1 Stunde vorher raus. Optional alles ins CRM.",
    ],
    stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
    result:
      "Arbeit läuft weiter ohne Handy-Zwang. Freie Stunden füllen sich, belegte kollidieren nicht, Absagen geben sauber frei, Erinnerung 1 Stunde vorher.",
  },
  "instagram-bot": {
    title: "Instagram-DM-Assistent",
    tag: "Automation",
    summary:
      "Dasselbe in Instagram-DMs. Spricht wie Sie ohne Handy-Check. Kennt Preise und Leistungen. Kennt freie Stunden und schickt Termine dorthin. Kennt belegte und bucht danach. Kennt, wenn Absage eine Stunde freimacht. Erinnerung 1 Stunde vorher. Fragt und antwortet.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Chat, der DMs in Ihrem Namen begrüßt.",
      "Gleiche Preise und Leistungen wie WhatsApp — kein Kanal-Widerspruch.",
      "Kennt freie Stunden und bucht dort. Setzt niemanden auf belegte.",
      "Absage gibt die Stunde frei. Erinnerung 1 Stunde vorher.",
      "Schwere Chats gehen an Sie oder CRM.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Jemand schreibt per DM. Bot begrüßt, fragt bei Bedarf, erklärt Preise.",
      "Zum Buchen zeigt er freie Stunden, nicht belegte. Gewählte wird gespeichert.",
      "Absage öffnet die Stunde wieder. Erinnerung 1 Stunde vorher.",
      "Gleicher Kalender wie WhatsApp; kann im CRM zusammenlaufen.",
    ],
    stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
    result:
      "DM-Posteingang bleibt geordnet: Fragen beantwortet, Termine auf freie Stunden, Erinnerung 1 Stunde vorher — ohne Handy-Check.",
  },
  crm: {
    title: "CRM Verkaufspanel",
    tag: "Software",
    summary:
      "Panel, das mit WhatsApp- und Instagram-Assistenten arbeitet. Kunden, mit denen die Bots sprachen, Termine, Absagen und Notizen an einem Ort. Wer wann kommt, welche Stunden frei oder belegt, WhatsApp oder Instagram — alles dort.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Ein schlichtes Verkaufspanel, das Schritt für Schritt läuft.",
      "WhatsApp- und Instagram-Bots verbunden: Buchung öffnet von allein eine Karte.",
      "Auf der Karte: Kanal, Zeit, frei/belegt, Notizen und Chat-Summary.",
      "Wer kommt heute, wer stornierte, was noch frei ist — am Panel lesbar.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Bot bucht eine freie Stunde → Karte erscheint, auch wenn Sie nicht am Handy sind.",
      "Sie schieben die Karte, ergänzen Notizen, wählen Owner. WhatsApp- oder Instagram-Summary bleibt am selben Kunden.",
      "Absage gibt die Stunde frei; Panel aktualisiert sich mit.",
      "Zwei Bots sprechen an getrennten Orten; CRM hält eine Liste.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    result:
      "Bots sprechen, füllen freie Stunden, erinnern 1 Stunde vorher; CRM hält alles an einem Ort. Während Sie weg sind, füllt sich das System weiter.",
  },

  "css-system": {
    tag: "Design system",
    summary:
      "Sistema CSS con tokens de marca para color, tipo, componentes y spacing.",
    whatTitle: "Qué hicimos",
    what: [
      "Tokens de color, tipo, radius y spacing.",
      "Botones primary / accent / ghost y componentes base.",
      "Docs y superficie de ejemplo.",
      "Mismo lenguaje en web y panel.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "Los tokens viven en una sola fuente.",
      "Los componentes consumen esos tokens.",
      "Las páginas nuevas se mantienen consistentes.",
      "Un cambio de marca se propaga desde un punto.",
    ],
    stack: ["CSS Custom Properties", "Design Tokens"],
  },
};

projectDetails.de = {
  wcc: {
    tag: "Corporate Web",
    summary:
      "Hochperformante, SEO-fähige Premium-Corporate-Site für eine US-Möbelmarke.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Custom UI und Motion, die Fertigungsqualität spiegeln.",
      "Mobile-first, schnell, conversion-fokussiert.",
      "CMS für Content, Media und SEO.",
      "Services, Gallery und Quote-Flow in einer Site.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Besucher sehen Produkte und Services in klarer Hierarchie.",
      "Schaltflächen führen zu Angebot oder Kontakt.",
      "Seiten und Media werden im Panel aktualisiert.",
      "SEO und Performance werden vor Launch optimiert.",
    ],
    stack: ["React", "Vite", "TypeScript"],
  },
  aydnnacar: {
    tag: "Marke & Katalog",
    summary:
      "Minimaler editorialer Digital-Showroom für Nacar Mobilya.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Eigene Typografie und ruhige Farbprache.",
      "Collection-Slider und Produktkatalog.",
      "Klare Wege zu Detail und Kontakt.",
      "Premium-Darstellung mobil.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Home startet mit Collection-Story, dann Katalog.",
      "Nutzer filtern nach Kategorie und sehen Modelle.",
      "Maß, Stoff und Lieferung laufen über Kontakt.",
      "Content skaliert über die Collection-Struktur.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
  },
  wuffbutik: {
    tag: "Boutique Web",
    summary:
      "Ruhige, elegante Boutique-Site für Wuuf — Store plus Remote-Messaging.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Markenpassende Typografie und Visuals.",
      "Klare IA für Collections und Kontakt.",
      "Nachricht-Schaltflächen für schnelle Conversion.",
      "Leichte, schnelle Mobile-UI.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Erster Screen erklärt Marke und Vitrine.",
      "Besucher gehen in Collection-Linien.",
      "Schaltfläche öffnet direkten Chat.",
      "Schlanker Content hält Updates einfach.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
  },
  "altitude-residence": {
    tag: "Luxury Real Estate",
    summary:
      "Dunkle, editoriale Luxury-Residence-Erfahrung für Altitude — Skyline, Tempo und Viewing-Conversion.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Ultra-Luxury Typografie, Visual Language und cinematic Hero.",
      "Seitenfluss, der die Residence über Höhe und Tempo erzählt.",
      "Klarer Pfad über die Schaltfläche „Besichtigung vereinbaren“.",
      "Premium-Darstellung auf Desktop und Mobile.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Erster Screen setzt Marke und Lifestyle-Promise.",
      "Besucher erkunden Residences und Location-Story.",
      "Schaltfläche führt zu Besichtigung / Kontakt.",
      "Content bleibt im Luxury-Ton.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Live-Site: Premium-Feeling, klarer Viewing-Pfad, Mobile-Polish.",
  },
  "casa-aurelia": {
    tag: "Boutique Hotel",
    summary:
      "Atmosphärisches Booking-Showcase für das Fünf-Sterne-Boutique-Hotel Casa Aurelia in Rom — Eng/Ita.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Cinematic Hero und Typografie passend zum Hotel.",
      "Book-now-fokussierter Reservierungs-/Kontaktfluss.",
      "Sprachumschaltung Englisch und Italienisch.",
      "Luxury-Präsentation auch mobil.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Erster Screen erzählt Marke und Rom-Location.",
      "Besucher sehen Hotel-Story und Zimmer.",
      "„Jetzt buchen“ führt zu Reservierung / Kontakt.",
      "Sprach-Toggle wechselt Eng ↔ Ita.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Live-Site: Boutique-Feeling, bilingual, klarer Booking-Pfad.",
  },
  "whatsapp-bot": {
    tag: "Automation",
    summary:
      "WhatsApp-Bot, der 24/7 antwortet, Kunden erfasst und Termine steuert.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Dialog-Flows: Welcome, Pakete, Booking.",
      "Automatische Erfassung von Bedarf und Budget.",
      "Live-Panel für Chats und Bot-Status.",
      "Erste Antwort in Sekunden.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Kunde schreibt; Bot liest Intent.",
      "Menüs führen zum richtigen Paket.",
      "Qualifizierte Kunden melden oder landen im CRM.",
      "Nahtlose Übergabe an einen Menschen möglich.",
    ],
    stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
  },
  "instagram-bot": {
    tag: "Automation",
    summary:
      "Instagram-DM-Bot, der Nachrichten klassifiziert, FAQs beantwortet und heiße Interessenten markiert.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "DM-Inbox plus Auto-Reply-Engine.",
      "Intent-Tags: Sales, Support, Collab.",
      "Templates und Info-Cards.",
      "Kunden-Sync ins CRM.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Eingehende DMs werden gelesen und getaggt.",
      "FAQs bekommen sofort Template-Antworten.",
      "Hohe Kaufabsicht wird an dich eskaliert.",
      "Regeln und Threads werden im Panel gesteuert.",
    ],
    stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
  },
  crm: {
    tag: "Software",
    summary:
      "Schlankes CRM für Pipeline, Kontakte und Tasks in einem Panel.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Kanban-Pipeline: neu → Meeting → Angebot → gewonnen.",
      "KPI-Karten für Opportunities, Revenue, Win Rate.",
      "Struktur für Kontakte, Tasks, Integrationen.",
      "Anbindbar an WhatsApp und Formulare.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Neue Kunden werden Karten auf dem Board.",
      "Team bewegt Karten über Stages.",
      "Angebote und Wins werden berichtet.",
      "Alerts verhindern verlorene Follow-ups.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  "css-system": {
    tag: "Design System",
    summary:
      "CSS Design System mit Brand-Tokens für Farbe, Type, Komponenten und Spacing.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Colour-, Type-, Radius- und Spacing-Tokens.",
      "Primary / Accent / Ghost Buttons und Basis-Komponenten.",
      "Docs und Beispiel-Surface.",
      "Gleiche Sprache für Web und Admin-UI.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Tokens leben in einer Quelle (:root / Theme).",
      "Komponenten konsumieren diese Tokens.",
      "Neue Seiten bleiben konsistent und schneller.",
      "Marken-Updates propagieren von einem Punkt.",
    ],
    stack: ["CSS Custom Properties", "Design Tokens"],
  },
};

export function getProjectDetail(
  locale: string,
  id: string
): ProjectDetail | undefined {
  const pack = projectDetails[locale] ?? projectDetails.tr;
  return pack[id] ?? projectDetails.tr[id] ?? projectDetails.en[id];
}
