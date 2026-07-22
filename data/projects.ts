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
};

export const projects: Project[] = [
  {
    id: "wcc",
    name: "Wholesale Cabinet Creations",
    colors: ["#171512", "#C89B63"],
    url: "https://websites-production-4b1d.up.railway.app/",
    desktopImage: "/projects/wcc/desktop.jpg",
    mobileImage: "/projects/wcc/mobile.jpg",
    desktopScrollImage: "/projects/wcc/desktop-scroll.jpg",
    mobileScrollImage: "/projects/wcc/mobile-scroll.jpg",
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
  },
  {
    id: "wuffbutik",
    name: "Wuuf Butik",
    colors: ["#111111", "#e5e5e5"],
    url: "https://wuffbutik.vercel.app/",
    desktopImage: "/projects/wuffbutik/desktop.jpg",
    mobileImage: "/projects/wuffbutik/mobile.jpg",
    desktopScrollImage: "/projects/wuffbutik/desktop-scroll.jpg",
    mobileScrollImage: "/projects/wuffbutik/mobile-scroll.jpg",
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
  },
  {
    id: "mizan",
    name: "MİZAN",
    colors: ["#141210", "#c4a574"],
    url: "https://mizan-ten-brown.vercel.app/",
    desktopImage: "/projects/mizan/desktop.jpg",
    mobileImage: "/projects/mizan/mobile.jpg",
    desktopScrollImage: "/projects/mizan/desktop-scroll.jpg",
    mobileScrollImage: "/projects/mizan/mobile-scroll.jpg",
  },
  {
    id: "sahra-butik",
    name: "Sahra Butik",
    colors: ["#111111", "#d4b5b0"],
    url: "https://sahrabutik.vercel.app/",
    desktopImage: "/projects/sahra-butik/desktop.jpg",
    mobileImage: "/projects/sahra-butik/mobile.jpg",
    desktopScrollImage: "/projects/sahra-butik/desktop-scroll.jpg",
    mobileScrollImage: "/projects/sahra-butik/mobile-scroll.jpg",
  },
  {
    id: "vela-skin-atelier",
    name: "VELA Skin Atelier",
    colors: ["#f3efe6", "#c45c3a"],
    url: "https://vela-skin-atelier.vercel.app/",
    desktopImage: "/projects/vela-skin-atelier/desktop.jpg",
    mobileImage: "/projects/vela-skin-atelier/mobile.jpg",
    desktopScrollImage: "/projects/vela-skin-atelier/desktop-scroll.jpg",
    mobileScrollImage: "/projects/vela-skin-atelier/mobile-scroll.jpg",
  },
  {
    id: "whatsapp-bot",
    name: "WhatsApp Chatbot",
    colors: ["#0b141a", "#25D366"],
    desktopImage: "/projects/whatsapp-bot/desktop.jpg",
    mobileImage: "/projects/whatsapp-bot/mobile.jpg",
  },
  {
    id: "instagram-bot",
    name: "Instagram DM Bot",
    colors: ["#111827", "#E1306C"],
    desktopImage: "/projects/instagram-bot/desktop.jpg",
    mobileImage: "/projects/instagram-bot/mobile.jpg",
  },
  {
    id: "crm",
    name: "CRM Platform",
    colors: ["#0f172a", "#c8e84a"],
    desktopImage: "/projects/crm/desktop.jpg",
    mobileImage: "/projects/crm/mobile.jpg",
  },
  {
    id: "css-system",
    name: "CSS Design System",
    colors: ["#1c1917", "#a8a29e"],
    desktopImage: "/projects/css-system/desktop.jpg",
    mobileImage: "/projects/css-system/mobile.jpg",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
