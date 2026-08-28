import { SITE } from "@/lib/site";
import { SERVICE_LANDERS } from "@/data/service-landers";
import { INDUSTRY_LANDERS } from "@/data/industries";
import { blogPosts } from "@/data/blog";

const LINES = [
  `# ${SITE.brand}`,
  "",
  "> Custom website design and software studio. Founder: Nurullah Aydın. Based in Türkiye, working with businesses in Turkish, US, German, and US-Spanish markets.",
  "",
  "## Identity",
  "",
  `- Name: ${SITE.brand}`,
  "- Founder: Nurullah Aydın",
  `- Site: ${SITE.url}`,
  `- Email: ${SITE.email}`,
  `- Phone / WhatsApp: ${SITE.phoneDisplay}`,
  `- Instagram: ${SITE.instagram}`,
  "- Languages on this site: English (default), Turkish, Spanish (es-US), German",
  "",
  "## What METEK Digital builds",
  "",
  "- Custom websites (corporate, service, and storefront sites). Marketplace themes are not resold as custom work.",
  "- Admin panels and CRM interfaces for content, leads, bookings, and daily operations.",
  "- WhatsApp and Instagram chatbots for routine questions, appointments, and staff handoff.",
  "- CSS design systems and mobile apps when the same engagement needs them.",
  "- Technical SEO as part of website delivery: titles, headings, crawlable structure, canonicals, hreflang, sitemap, and index rules.",
  "",
  "## How work is run",
  "",
  "- One accountable delivery lead stays with the project from discovery through launch.",
  "- Scope is written before design and development begin.",
  "- Deliveries are reviewed for mobile performance, core accessibility requirements, and technical SEO before handoff.",
  "- When a project needs more than one language, copy is written for each market rather than translated line by line.",
  "",
  "## Portfolio verticals",
  "",
  "Manufacturing, furniture, boutique retail, hospitality, and internal operational software. Selected public work is listed at /work.",
  "",
  "## Primary pages",
  "",
  `- Home: ${SITE.url}/`,
  `- Services: ${SITE.url}/services`,
  ...SERVICE_LANDERS.map(
    (lander) => `- ${lander.schemaName}: ${SITE.url}/services/${lander.slug}`,
  ),
  ...INDUSTRY_LANDERS.map(
    (lander) => `- ${lander.schemaName}: ${SITE.url}/industries/${lander.slug}`,
  ),
  `- Portfolio: ${SITE.url}/work`,
  `- Process: ${SITE.url}/approach`,
  `- Agency: ${SITE.url}/manifesto`,
  `- Blog: ${SITE.url}/blog`,
  `- FAQ: ${SITE.url}/faq`,
  `- Glossary: ${SITE.url}/glossary`,
  `- Industries: ${SITE.url}/industries`,
  `- Contact: ${SITE.url}/contact`,
  "",
  "## Contact",
  "",
  "Project inquiries go through email and WhatsApp. Send the business, the required surface (website, panel, chatbot, or a combination), and any timing constraint.",
  "",
  "## Optional",
  "",
  `- Full citation file: ${SITE.url}/llms-full.txt`,
  `- XML sitemap: ${SITE.url}/sitemap.xml`,
  `- RSS: ${SITE.url}/feed.xml`,
  `- Latest articles: ${blogPosts
    .slice(0, 8)
    .map((post) => `${SITE.url}/blog/${post.slug}`)
    .join(", ")}`,
].join("\n");

export function llmsTxt(): string {
  return `${LINES}\n`;
}
