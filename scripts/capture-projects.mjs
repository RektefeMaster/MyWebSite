import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Her site için en iyi kare: asıl içerik URL + bekleme */
const sites = [
  {
    id: "wcc",
    url: "https://websites-production-4b1d.up.railway.app/",
    waitFor: "text=Wholesale Cabinet Creations",
  },
  {
    id: "aydnnacar",
    // Ana sayfa intro yerine koleksiyon grid — gerçek mobilya içeriği
    url: "https://ayd-nnacar.vercel.app/koleksiyonlar",
    waitFor: "text=Koleksiyon",
    fallbackUrl: "https://ayd-nnacar.vercel.app/urunler",
  },
  {
    id: "wuffbutik",
    url: "https://wuffbutik.vercel.app/",
    waitFor: "text=WUUF",
  },
  {
    id: "altitude-residence",
    url: "https://altitude-residence.vercel.app/",
    waitFor: "text=Altitude",
  },
  {
    id: "casa-aurelia",
    url: "https://casa-aurelia-jet.vercel.app/",
    waitFor: "text=CASA AURELIA",
  },
  {
    id: "seraphine-atelier",
    url: "https://seraphine-atelier.vercel.app/",
    waitFor: "text=SÉRAPHINE",
  },
  {
    id: "havva-baklava",
    url: "https://baklavac-site.vercel.app/",
    waitFor: "text=HAVVA",
  },
];

async function hideChrome(page) {
  await page
    .addStyleTag({
      content: `
      [class*="cookie" i], [id*="cookie" i], [class*="Consent" i],
      #onetrust-banner-sdk, .cc-window, [aria-label*="cookie" i] {
        display: none !important; visibility: hidden !important;
      }
    `,
    })
    .catch(() => {});
}

async function capture(page, site, outPath, width, height) {
  mkdirSync(dirname(outPath), { recursive: true });
  await page.setViewportSize({ width, height });

  let url = site.url;
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 70000 });
  } catch {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 70000 });
  }

  if (site.waitFor) {
    try {
      await page.waitForSelector(site.waitFor, { timeout: 15000 });
    } catch {
      if (site.fallbackUrl) {
        url = site.fallbackUrl;
        await page.goto(url, { waitUntil: "networkidle", timeout: 70000 });
      }
    }
  }

  // Intro / loader geçsin, görseller otursun
  await page.waitForTimeout(2800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  // Lazy image tetikle: biraz aşağı kaydırıp geri gel
  await page.evaluate(() => window.scrollTo(0, Math.min(600, document.body.scrollHeight / 3)));
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);

  await hideChrome(page);

  // Görsellerin yüklenmesini bekle (max 4s)
  await Promise.race([
    page.evaluate(async () => {
      const imgs = [...document.images];
      await Promise.all(
        imgs.map(
          (img) =>
            img.complete ||
            new Promise((r) => {
              img.onload = img.onerror = () => r(null);
              setTimeout(() => r(null), 2500);
            })
        )
      );
    }),
    page.waitForTimeout(4000),
  ]);

  await page.screenshot({
    path: outPath,
    type: "jpeg",
    quality: 98,
    fullPage: false,
  });
}

const browser = await chromium.launch({ headless: true });

/** next/image deviceSizes max=1920 — fazlası boşa dosya şişirir, UI kalitesi aynı kalır */
const DESKTOP_DPR = 1920 / 1600; // → 1920×1200
const MOBILE_DPR = 3; // 390×3 → 1170 (telefon mockup için yeterli)

for (const site of sites) {
  const dir = join(root, "public/projects", site.id);
  mkdirSync(dir, { recursive: true });
  console.log("Capturing", site.id, "←", site.url);

  const deskCtx = await browser.newContext({
    deviceScaleFactor: DESKTOP_DPR,
    locale: "tr-TR",
  });
  const deskPage = await deskCtx.newPage();
  await capture(deskPage, site, join(dir, "desktop.jpg"), 1600, 1000);
  await deskCtx.close();
  console.log("  desktop ok");

  const mobCtx = await browser.newContext({
    deviceScaleFactor: MOBILE_DPR,
    locale: "tr-TR",
  });
  const mobPage = await mobCtx.newPage();
  await capture(mobPage, site, join(dir, "mobile.jpg"), 390, 844);
  await mobCtx.close();
  console.log("  mobile ok");
}

await browser.close();
console.log("done");
