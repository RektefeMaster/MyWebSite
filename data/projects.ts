export type ProjectLane = "web" | "systems" | "ai" | "lab";

export type Project = {
  id: string;
  name: string;
  colors: [string, string];
  url?: string;
  desktopImage?: string;
  mobileImage?: string;
  /** Hover’da kaydırılan uzun masaüstü ekran görüntüsü */
  desktopScrollImage?: string;
  /** Hover’da kaydırılan uzun mobil ekran görüntüsü */
  mobileScrollImage?: string;
  /** /work ana grubu */
  primaryLane: ProjectLane;
  /** Filtre + capability eşlemesi */
  lanes?: ProjectLane[];
  /** Ana sayfa Selected Work */
  featured?: boolean;
  featuredOrder?: number;
  year?: number;
  /** Nadir full-bleed hint — layout bileşeni karar verir */
  displayPreference?: "default" | "hero";
};

export const projects: Project[] = [
  {
    id: "elif-seren",
    name: "Elif Seren",
    colors: ["#1c1917", "#d8d2c4"],
    url: "https://editorial-psychologist-site.vercel.app/",
    desktopImage: "/projects/elif-seren/desktop-v2.jpg",
    mobileImage: "/projects/elif-seren/mobile-v3.jpg",
    desktopScrollImage: "/projects/elif-seren/desktop-scroll-v2.jpg",
    mobileScrollImage: "/projects/elif-seren/mobile-scroll-v3.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2026,
  },
  {
    /*
      Portföyün en geniş kapsamlı işi: 32 rotalı yerel SEO mimarisi (hizmet,
      fiyat, bölge, iş kaydı, rehber). Bu yüzden hem /work web şeridinin
      başında hem de ana sayfa Selected Work'ün ilk dosyası.
    */
    id: "masal-koltuk",
    name: "MASAL Koltuk Yıkama",
    colors: ["#071b22", "#5B9BC4"],
    url: "https://malatyakoltuktemizleme.com/",
    desktopImage: "/projects/masal-koltuk/desktop.jpg",
    mobileImage: "/projects/masal-koltuk/mobile.jpg",
    desktopScrollImage: "/projects/masal-koltuk/desktop-scroll.jpg",
    mobileScrollImage: "/projects/masal-koltuk/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    featured: true,
    featuredOrder: 1,
    year: 2026,
    displayPreference: "hero",
  },
  {
    id: "wcc",
    name: "Wholesale Cabinet Creations",
    colors: ["#171512", "#C89B63"],
    url: "https://websites-ruddy-nu.vercel.app/",
    desktopImage: "/projects/wcc/desktop.jpg",
    mobileImage: "/projects/wcc/mobile.jpg",
    desktopScrollImage: "/projects/wcc/desktop-scroll.jpg",
    mobileScrollImage: "/projects/wcc/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web", "systems"],
    year: 2026,
    displayPreference: "hero",
  },
  {
    id: "aydnnacar",
    name: "Nacar Mobilya",
    colors: ["#2c241c", "#c4a574"],
    url: "https://ayd-nnacar.vercel.app/",
    desktopImage: "/projects/aydnnacar/desktop.jpg",
    mobileImage: "/projects/aydnnacar/mobile.jpg",
    desktopScrollImage: "/projects/aydnnacar/desktop-scroll.jpg",
    mobileScrollImage: "/projects/aydnnacar/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    featured: true,
    featuredOrder: 3,
    year: 2025,
  },
  {
    id: "wuffbutik",
    name: "Wuuf Butik",
    colors: ["#111111", "#e5e5e5"],
    url: "https://wuffbutik.vercel.app/",
    desktopImage: "/projects/wuffbutik/desktop-v3.jpg",
    mobileImage: "/projects/wuffbutik/mobile-v3.jpg",
    /*
      v4 şeritleri BOZUKTU: "mobil" şerit 1200×4077, yani masaüstü genişliğinde
      bir yakalama telefon ekranına sıkıştırılıyordu (diğer projelerde 390×3545).
      Telefonda sayfa değil, küçültülmüş masaüstü görünüyordu. Yeniden
      yakalandı — capture-project-scrolls.mjs.
    */
    desktopScrollImage: "/projects/wuffbutik/desktop-scroll.jpg",
    mobileScrollImage: "/projects/wuffbutik/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2025,
  },
  {
    id: "altitude-residence",
    name: "Altitude Residences",
    colors: ["#0a0a0a", "#c4b5a0"],
    url: "https://altitude-residence.vercel.app/",
    desktopImage: "/projects/altitude-residence/desktop.jpg",
    mobileImage: "/projects/altitude-residence/mobile.jpg",
    desktopScrollImage: "/projects/altitude-residence/desktop-scroll.jpg",
    mobileScrollImage: "/projects/altitude-residence/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2025,
  },
  {
    id: "casa-aurelia",
    name: "Casa Aurelia Roma",
    colors: ["#0a1620", "#d8d2c4"],
    url: "https://casa-aurelia-jet.vercel.app/",
    desktopImage: "/projects/casa-aurelia/desktop.jpg",
    mobileImage: "/projects/casa-aurelia/mobile.jpg",
    desktopScrollImage: "/projects/casa-aurelia/desktop-scroll.jpg",
    mobileScrollImage: "/projects/casa-aurelia/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    featured: true,
    featuredOrder: 4,
    year: 2025,
  },
  {
    id: "seraphine-atelier",
    name: "Séraphine Atelier",
    colors: ["#f0eeea", "#1a1a1a"],
    url: "https://seraphine-atelier.vercel.app/",
    desktopImage: "/projects/seraphine-atelier/desktop.jpg",
    mobileImage: "/projects/seraphine-atelier/mobile.jpg",
    desktopScrollImage: "/projects/seraphine-atelier/desktop-scroll.jpg",
    mobileScrollImage: "/projects/seraphine-atelier/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2025,
  },
  {
    id: "havva-baklava",
    name: "HAVVA Baklava",
    colors: ["#0a0a0a", "#c4a56a"],
    url: "https://baklavac-site.vercel.app/",
    desktopImage: "/projects/havva-baklava/desktop-air.jpg",
    mobileImage: "/projects/havva-baklava/mobile-clear.jpg",
    desktopScrollImage: "/projects/havva-baklava/desktop-scroll.jpg",
    mobileScrollImage: "/projects/havva-baklava/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2025,
  },
  {
    id: "sahra-butik",
    name: "Sahra Butik",
    colors: ["#111111", "#d4b5b0"],
    url: "https://sahrabutik.vercel.app/",
    desktopImage: "/projects/sahra-butik/desktop-v2.jpg",
    mobileImage: "/projects/sahra-butik/mobile-v2.jpg",
    desktopScrollImage: "/projects/sahra-butik/desktop-scroll.jpg",
    mobileScrollImage: "/projects/sahra-butik/mobile-scroll.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2025,
  },
  {
    id: "vela-skin-atelier",
    name: "VELA Skin Atelier",
    colors: ["#f3efe6", "#c45c3a"],
    url: "https://vela-skin-atelier.vercel.app/",
    desktopImage: "/projects/vela-skin-atelier/desktop.jpg",
    mobileImage: "/projects/vela-skin-atelier/mobile-v2.jpg",
    desktopScrollImage: "/projects/vela-skin-atelier/desktop-scroll-v2.jpg",
    mobileScrollImage: "/projects/vela-skin-atelier/mobile-scroll-v2.jpg",
    primaryLane: "web",
    lanes: ["web"],
    year: 2025,
  },
  {
    id: "aiahi",
    name: "Ahi AI",
    colors: ["#0f172a", "#059669"],
    url: "https://www.aiahi.net/",
    desktopImage: "/projects/aiahi/desktop.jpg",
    mobileImage: "/projects/aiahi/mobile.jpg",
    desktopScrollImage: "/projects/aiahi/desktop-scroll.jpg",
    mobileScrollImage: "/projects/aiahi/mobile-scroll.jpg",
    primaryLane: "ai",
    lanes: ["ai", "systems"],
    featured: true,
    featuredOrder: 2,
    year: 2026,
    displayPreference: "hero",
  },
  {
    id: "whatsapp-bot",
    name: "WhatsApp Chatbot",
    colors: ["#0b141a", "#25D366"],
    desktopImage: "/projects/whatsapp-bot/desktop.jpg",
    mobileImage: "/projects/whatsapp-bot/mobile.jpg",
    primaryLane: "ai",
    lanes: ["ai", "systems"],
    year: 2025,
  },
  {
    id: "instagram-bot",
    name: "Instagram DM Bot",
    colors: ["#111827", "#E1306C"],
    desktopImage: "/projects/instagram-bot/desktop.jpg",
    mobileImage: "/projects/instagram-bot/mobile.jpg",
    primaryLane: "ai",
    lanes: ["ai"],
    year: 2025,
  },
  {
    id: "crm",
    name: "CRM Platform",
    colors: ["#10141a", "#0c6b66"],
    desktopImage: "/projects/crm/desktop.jpg",
    mobileImage: "/projects/crm/mobile.jpg",
    primaryLane: "systems",
    lanes: ["systems", "ai"],
    featured: true,
    featuredOrder: 5,
    year: 2025,
  },
  {
    id: "css-system",
    name: "CSS Design System",
    colors: ["#1c1917", "#a8a29e"],
    desktopImage: "/projects/css-system/desktop.jpg",
    mobileImage: "/projects/css-system/mobile.jpg",
    primaryLane: "lab",
    lanes: ["lab", "web"],
    year: 2025,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getProjectsByPrimaryLane(lane: ProjectLane): Project[] {
  return projects.filter((p) => p.primaryLane === lane);
}

export const PROJECT_LANES: ProjectLane[] = ["web", "systems", "ai", "lab"];
