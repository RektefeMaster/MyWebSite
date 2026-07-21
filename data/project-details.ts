export type ProjectDetail = {
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
        "ABD merkezli bir mobilya markası için yüksek performanslı, SEO odaklı ve görsel olarak premium bir kurumsal web deneyimi.",
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
        "CTA’lar teklif formuna veya iletişime yönlendirir.",
        "İçerik paneli üzerinden sayfalar ve medya güncellenir.",
        "SEO ve performans ayarları yayın öncesi optimize edilir.",
      ],
      stack: ["Next.js", "UI/UX", "SEO", "CMS", "Performans"],
      result: "Canlı site: premium algı, mobil performans ve yönetilebilir içerik.",
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
        "Mobilde de bozulmayan premium sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ana sayfa koleksiyon hikâyesiyle başlar, kataloga akar.",
        "Kullanıcı kategori seçerek modelleri inceler.",
        "Ölçü, kumaş ve teslimat için iletişim adımına yönlendirilir.",
        "İçerik güncellemeleri koleksiyon yapısı üzerinden ölçeklenir.",
      ],
      stack: ["Next.js", "Editoryal UI", "Katalog", "Responsive"],
    },
    wuffbutik: {
      tag: "Butik web",
      summary:
        "Wuuf Butik için sakin, şık ve yerel markaya uygun bir vitrin sitesi. Mağaza ve uzaktan satış iletişimi bir arada.",
      whatTitle: "Ne yaptık?",
      what: [
        "Butik kimliğine uygun tipografi ve görsel dil.",
        "Koleksiyon, çizgiler ve iletişim odaklı net bilgi mimarisi.",
        "WhatsApp / mesaj CTA’larıyla hızlı dönüşüm yolu.",
        "Hafif, hızlı ve mobilde akıcı arayüz.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi markayı ve vitrini ilk ekranda anlar.",
        "Koleksiyon sayfalarından ürün çizgilerine geçer.",
        "Mesaj butonu ile doğrudan iletişime düşer.",
        "İçerik sade tutulduğu için güncelleme ve bakım kolaydır.",
      ],
      stack: ["Next.js", "Marka UI", "CTA akışı", "Mobil öncelik"],
    },
    "whatsapp-bot": {
      tag: "Otomasyon",
      summary:
        "WhatsApp üzerinden 7/24 yanıt veren, lead toplayan ve randevu yönlendiren akıllı sohbet botu.",
      whatTitle: "Ne yaptık?",
      what: [
        "Hazır diyalog akışları: karşılama, paket seçimi, randevu.",
        "Lead bilgisi (ihtiyaç, bütçe) otomatik toplanır.",
        "Canlı panelden sohbet ve bot durumu izlenir.",
        "Yanıt süresi saniyelere iner, gece de çalışır.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Müşteri WhatsApp’tan yazar; bot intent’i anlar.",
        "Hazır menülerle doğru pakete veya bilgiye yönlendirir.",
        "Uygun lead’ler CRM’e veya size bildirim olarak düşer.",
        "İsterseniz insan desteğe sorunsuz devredilir.",
      ],
      stack: ["WhatsApp API", "Flow builder", "Lead capture", "Bildirimler"],
      result: "İlk yanıt ort. saniyeler; kayıp mesaj azalır.",
    },
    "instagram-bot": {
      tag: "Otomasyon",
      summary:
        "Instagram DM’lerini sınıflandıran, sık sorulara otomatik yanıt veren ve sıcak lead’leri ayıran bot.",
      whatTitle: "Ne yaptık?",
      what: [
        "DM inbox + otomatik yanıt motoru.",
        "Satış, destek, işbirliği gibi intent etiketleri.",
        "Şablon mesajlar ve ürün/bilgi kartları.",
        "CRM’e lead aktarımı.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Gelen DM bot tarafından okunur ve etiketlenir.",
        "Sık sorulara anında şablon yanıt gider.",
        "Satın alma niyeti yüksek olanlar size iletilir.",
        "Panelden konuşmalar ve kurallar yönetilir.",
      ],
      stack: ["Instagram Messaging", "Intent", "Şablonlar", "CRM sync"],
    },
    crm: {
      tag: "Yazılım",
      summary:
        "Satış pipeline’ını, kişileri ve görevleri tek panelde toplayan sade ve hızlı bir CRM.",
      whatTitle: "Ne yaptık?",
      what: [
        "Kanban satış pipeline’ı (yeni → görüşme → teklif → kazanıldı).",
        "KPI kartları: açık fırsat, ciro, kazanma oranı.",
        "Kişi, görev ve entegrasyon yapısına hazır iskelet.",
        "WhatsApp / form lead’leriyle bağlanabilir yapı.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Yeni lead kart olarak pipeline’a düşer.",
        "Ekip kartı aşamalar arasında sürükler / günceller.",
        "Teklif ve kazanılan işler raporlanır.",
        "Bildirimler ve otomasyonlarla takip kaçmaz.",
      ],
      stack: ["Dashboard", "Pipeline", "Raporlama", "Entegrasyon"],
    },
    "css-system": {
      tag: "Tasarım sistemi",
      summary:
        "Markaya özel renk, tipografi, bileşen ve spacing token’larıyla tutarlı arayüz üreten CSS design system.",
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
      stack: ["Design tokens", "CSS", "UI Kit", "Docs"],
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
      stack: ["Next.js", "UI/UX", "SEO", "CMS", "Performance"],
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
      stack: ["Next.js", "Editorial UI", "Catalogue", "Responsive"],
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
      stack: ["Next.js", "Brand UI", "CTA flow", "Mobile-first"],
    },
    "whatsapp-bot": {
      tag: "Automation",
      summary:
        "A WhatsApp bot that replies 24/7, captures leads, and routes appointments.",
      whatTitle: "What we built",
      what: [
        "Dialog flows: welcome, packages, booking.",
        "Automatic capture of need and budget.",
        "Live panel for chats and bot status.",
        "First reply in seconds, even at night.",
      ],
      howTitle: "How it works",
      how: [
        "Customer messages WhatsApp; bot reads intent.",
        "Menus guide to the right package or info.",
        "Qualified leads notify you or land in CRM.",
        "Handoff to a human when needed.",
      ],
      stack: ["WhatsApp API", "Flow builder", "Lead capture", "Alerts"],
    },
    "instagram-bot": {
      tag: "Automation",
      summary:
        "An Instagram DM bot that classifies messages, auto-replies FAQs, and flags hot leads.",
      whatTitle: "What we built",
      what: [
        "DM inbox plus auto-reply engine.",
        "Intent tags: sales, support, collab.",
        "Templates and info cards.",
        "Lead sync to CRM.",
      ],
      howTitle: "How it works",
      how: [
        "Incoming DMs are read and tagged.",
        "FAQs get instant template replies.",
        "High-intent chats are escalated to you.",
        "Rules and threads are managed in the panel.",
      ],
      stack: ["Instagram Messaging", "Intent", "Templates", "CRM sync"],
    },
    crm: {
      tag: "Software",
      summary:
        "A lean CRM that keeps pipeline, contacts, and tasks in one panel.",
      whatTitle: "What we built",
      what: [
        "Kanban pipeline: new → meeting → proposal → won.",
        "KPI cards for opportunities, revenue, win rate.",
        "Ready structure for contacts, tasks, integrations.",
        "Connectable to WhatsApp and form leads.",
      ],
      howTitle: "How it works",
      how: [
        "New leads become cards on the board.",
        "Team moves cards across stages.",
        "Proposals and wins are reported.",
        "Alerts keep follow-ups from slipping.",
      ],
      stack: ["Dashboard", "Pipeline", "Reporting", "Integrations"],
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
      stack: ["Design tokens", "CSS", "UI Kit", "Docs"],
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
      "Sitio corporativo premium, rápido y preparado para SEO para una marca de mobiliario en EE. UU.",
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
      "Los CTA llevan a presupuesto o contacto.",
      "Páginas y medios se actualizan desde el panel.",
      "SEO y rendimiento se optimizan antes del lanzamiento.",
    ],
    stack: ["Next.js", "UI/UX", "SEO", "CMS", "Rendimiento"],
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
      "Presentación premium en móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La home abre con la historia de colección y pasa al catálogo.",
      "El usuario filtra por categoría y ve modelos.",
      "Medida, tela y entrega van por contacto.",
      "El contenido escala con la estructura de colecciones.",
    ],
    stack: ["Next.js", "UI editorial", "Catálogo", "Responsive"],
  },
  wuffbutik: {
    tag: "Web boutique",
    summary:
      "Sitio elegante y calmado para Wuuf — tienda física y mensaje remoto.",
    whatTitle: "Qué hicimos",
    what: [
      "Lenguaje visual acorde a la boutique.",
      "Arquitectura clara de colecciones y contacto.",
      "CTA de mensaje para conversión rápida.",
      "UI ligera y rápida en móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla explica marca y vitrina.",
      "El visitante entra en las líneas de colección.",
      "El CTA abre el chat directo.",
      "Contenido ligero = mantenimiento fácil.",
    ],
    stack: ["Next.js", "Brand UI", "Flujo CTA", "Mobile-first"],
  },
  "whatsapp-bot": {
    tag: "Automatización",
    summary:
      "Bot de WhatsApp que responde 24/7, captura leads y agenda citas.",
    whatTitle: "Qué hicimos",
    what: [
      "Flujos: bienvenida, paquetes, cita.",
      "Captura automática de necesidad y presupuesto.",
      "Panel en vivo de chats y estado del bot.",
      "Primera respuesta en segundos.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El cliente escribe; el bot lee la intención.",
      "Menús guían al paquete o información correcta.",
      "Leads cualificados avisan o van al CRM.",
      "Se puede pasar a un humano sin fricción.",
    ],
    stack: ["WhatsApp API", "Flow builder", "Lead capture", "Alertas"],
  },
  "instagram-bot": {
    tag: "Automatización",
    summary:
      "Bot de Instagram DM que clasifica mensajes, responde FAQs y marca leads calientes.",
    whatTitle: "Qué hicimos",
    what: [
      "Inbox DM + motor de auto-respuesta.",
      "Etiquetas: ventas, soporte, colaboración.",
      "Plantillas y tarjetas de información.",
      "Sync de leads al CRM.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "Los DM se leen y etiquetan.",
      "Las FAQ reciben plantilla al instante.",
      "Alta intención se escala a ti.",
      "Reglas e hilos se gestionan en el panel.",
    ],
    stack: ["Instagram Messaging", "Intent", "Plantillas", "CRM sync"],
  },
  crm: {
    tag: "Software",
    summary:
      "CRM ágil que une pipeline, contactos y tareas en un panel.",
    whatTitle: "Qué hicimos",
    what: [
      "Pipeline kanban: nuevo → reunión → propuesta → ganado.",
      "KPI de oportunidades, ingresos y win rate.",
      "Base para contactos, tareas e integraciones.",
      "Conectable a WhatsApp y formularios.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "Los leads nuevos son tarjetas en el tablero.",
      "El equipo mueve tarjetas entre etapas.",
      "Propuestas y cierres se reportan.",
      "Alertas evitan perder seguimientos.",
    ],
    stack: ["Dashboard", "Pipeline", "Reporting", "Integraciones"],
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
    stack: ["Design tokens", "CSS", "UI Kit", "Docs"],
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
      "CTAs führen zu Quote oder Kontakt.",
      "Seiten und Media werden im Panel aktualisiert.",
      "SEO und Performance werden vor Launch optimiert.",
    ],
    stack: ["Next.js", "UI/UX", "SEO", "CMS", "Performance"],
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
    stack: ["Next.js", "Editorial UI", "Katalog", "Responsive"],
  },
  wuffbutik: {
    tag: "Boutique Web",
    summary:
      "Ruhige, elegante Boutique-Site für Wuuf — Store plus Remote-Messaging.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "Markenpassende Typografie und Visuals.",
      "Klare IA für Collections und Kontakt.",
      "Message-CTAs für schnelle Conversion.",
      "Leichte, schnelle Mobile-UI.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Erster Screen erklärt Marke und Vitrine.",
      "Besucher gehen in Collection-Linien.",
      "CTA öffnet direkten Chat.",
      "Schlanker Content hält Updates einfach.",
    ],
    stack: ["Next.js", "Brand UI", "CTA-Flow", "Mobile-first"],
  },
  "whatsapp-bot": {
    tag: "Automation",
    summary:
      "WhatsApp-Bot, der 24/7 antwortet, Leads erfasst und Termine steuert.",
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
      "Qualifizierte Leads melden oder landen im CRM.",
      "Nahtlose Übergabe an einen Menschen möglich.",
    ],
    stack: ["WhatsApp API", "Flow builder", "Lead capture", "Alerts"],
  },
  "instagram-bot": {
    tag: "Automation",
    summary:
      "Instagram-DM-Bot, der Nachrichten klassifiziert, FAQs beantwortet und Hot Leads markiert.",
    whatTitle: "Was wir gebaut haben",
    what: [
      "DM-Inbox plus Auto-Reply-Engine.",
      "Intent-Tags: Sales, Support, Collab.",
      "Templates und Info-Cards.",
      "Lead-Sync ins CRM.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Eingehende DMs werden gelesen und getaggt.",
      "FAQs bekommen sofort Template-Antworten.",
      "Hohe Kaufabsicht wird an dich eskaliert.",
      "Regeln und Threads werden im Panel gesteuert.",
    ],
    stack: ["Instagram Messaging", "Intent", "Templates", "CRM sync"],
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
      "Neue Leads werden Karten auf dem Board.",
      "Team bewegt Karten über Stages.",
      "Angebote und Wins werden berichtet.",
      "Alerts verhindern verlorene Follow-ups.",
    ],
    stack: ["Dashboard", "Pipeline", "Reporting", "Integrationen"],
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
    stack: ["Design tokens", "CSS", "UI Kit", "Docs"],
  },
};

export function getProjectDetail(
  locale: string,
  id: string
): ProjectDetail | undefined {
  const pack = projectDetails[locale] ?? projectDetails.tr;
  return pack[id] ?? projectDetails.tr[id] ?? projectDetails.en[id];
}
