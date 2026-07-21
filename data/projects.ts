export type Project = {
  id: string;
  name: string;
  colors: [string, string];
  url?: string;
  desktopImage?: string;
  mobileImage?: string;
};

export const projects: Project[] = [
  {
    id: "wcc",
    name: "Wholesale Cabinet Creations",
    colors: ["#171512", "#C89B63"],
    url: "https://websites-production-4b1d.up.railway.app/",
    desktopImage: "/projects/wcc/desktop.jpg",
    mobileImage: "/projects/wcc/mobile.jpg",
  },
  {
    id: "aydnnacar",
    name: "Nacar Mobilya",
    colors: ["#2c241c", "#c4a574"],
    url: "https://ayd-nnacar.vercel.app/",
    desktopImage: "/projects/aydnnacar/desktop.jpg",
    mobileImage: "/projects/aydnnacar/mobile.jpg",
  },
  {
    id: "wuffbutik",
    name: "Wuuf Butik",
    colors: ["#111111", "#e5e5e5"],
    url: "https://wuffbutik.vercel.app/",
    desktopImage: "/projects/wuffbutik/desktop.jpg",
    mobileImage: "/projects/wuffbutik/mobile.jpg",
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
