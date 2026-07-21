<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MySite — METEK Digital

METEK Digital stüdyo sitesi (kurucu: Nurullah Aydın). Next.js 16 (App Router) + React Three Fiber + next-intl.

## Komutlar

- `npm run dev` — dev server (port 3000)
- `npm run build` — production build (4 locale statik üretilir)

## Mimari

- **Hero 3D** (components/HeroScene.tsx): R3F sahnesi — tipografi (drei `<Text>`), stilize "M" + `MeshTransmissionMaterial` (cam/krom). Transmission buffer canlı ama çözünürlüğü sınırlı (`resolution` ~320–512); nadir bake siyah/bozuk FBO’ya yol açıyordu. Env `frames={1}`. Offscreen / gizli sekmede `frameloop: never`. WebGL context restore’da Canvas remount. `reactStrictMode: false` şart.
- **i18n**: tr (varsayılan) / en / es / de. Rotalama `i18n/routing.ts`, metinler `messages/*.json`, proxy.ts locale yönlendirmesi yapar.
- **Projeler**: `data/projects.ts` içindeki liste; kartlarda gerçekçi laptop+telefon mockup (`ProjectCard.tsx`). Ekran görselleri: `desktopImage` / `mobileImage` → dosyalar `public/projects/{id}/`. Path yoksa renkli placeholder.
- **Blog**: meta `data/blog.ts`, yazılar `data/blog-content/{tr,en,es,de}.ts`. Liste `/blog`, detay `/blog/[slug]`.

## Bilinen kısıtlar / dikkat

- `reactStrictMode: false` ŞART: StrictMode'un çift effect çalıştırması R3F'in WebGL context'ini kalıcı kaybettiriyor (boş gri hero). Açma.
- 3D yazı fontu `public/fonts/SpaceGrotesk-Bold.ttf` (troika woff2 okumaz, TTF gerekli; latin-ext içeriyor — Türkçe karakterler tamam).
- UI fontu next/font ile Space Grotesk (`latin` + `latin-ext` subset).

## Kişiselleştirme noktaları

- Marka: **METEK Digital** · Kurucu: Nurullah Aydın
- E-posta: `components/Contact.tsx` → `EMAIL` (`admin@metehtec.com`)
- Proje listesi: `data/projects.ts` (görseller `public/projects/{id}/`)
- Hero 3 satır: `messages/*.json` → `hero.line1..3`
- "M" şekli: `HeroScene.tsx` → `GlassM` içindeki `pts`
- Sosyal URL’ler gelince `Footer.tsx` içine ekle (şimdilik yok)
