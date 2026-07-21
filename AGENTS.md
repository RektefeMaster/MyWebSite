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

- **Hero 3D** (components/HeroScene.tsx): R3F sahnesi — tipografi (drei `<Text>`), stilize "M" + `MeshTransmissionMaterial` (cam/krom). Transmission buffer canlı: desktop `resolution=640` / `samples=10`, lite (mobil) `384` / `5`. Yüksek `samples` grenli/kumlu kırılmayı temizler; `resolution`'ı buffer bake sorunlarına karşı ~640 üstüne çıkarma. Env `frames={1}`. Offscreen / gizli sekmede `frameloop: never`. WebGL context restore’da Canvas remount. `reactStrictMode: false` şart. Mesh mount'ta `useFrame` içinde easeOutCubic ölçek girişi yapar.
- **Hero atmosferi** (components/Hero.tsx + globals.css): canvas üstünde `z-[1]` katman — `.hero-glow` (screen blend, lime, yavaş kayar), `.hero-vignette` (kenar karartma), `.hero-grain` (SVG film greni, soft-light/overlay). Üst-solda stüdyo künyesi (`hero.metaStudio`/`metaLocation`), sadece `md+`. **Perf:** grain/glow `will-change:transform` (GPU katmanı; blur scale ucuz), grain taşması ±14% (aşırı harmanlama yok), hero görüş dışına çıkınca atmosfer wrapper `data-atmosphere-idle="true"` → grain/glow animasyonları duraklar (`animation-play-state`); canvas zaten `frameloop:never` olur. Yani hero ekran dışıyken sıfır sürekli iş.
- **Sinematik intro** (components/Intro.tsx + globals.css `.intro-*`): ilk yükleme perdesi — ink zemin, "M." markası, `000→100` sayaç + lime alt-çizgi (loading hissi), sonra perde yukarı kalkıp hero'yu açar (GSAP timeline). Kararı layout içindeki `introInitScript` ilk boyamadan önce verir → `html[data-intro="play"|"skip"]` (FOUC yok). Oturum başına bir kez (`sessionStorage['metek-intro']`), reduced-motion'da atlanır, `?intro` ile yeniden tetiklenir, JS yoksa CSS failsafe (~7.2s) temizler. Sayaç sırasında below-fold chunk’lar + font + (home) WebGL ısıtılır; perde ancak boot kapısı açılınca kalkar. Oynarken scroll kilidi **event ile** (wheel/touchmove `preventDefault` + scroll tuşları) + `html.intro-lock { touch-action:none }` + Lenis `stop()`; bitince listener'lar kalkar + `start()` + `ScrollTrigger.refresh()`. **`overflow:hidden` KULLANMA** — custom scrollbar'ı (10px) kaldırıp perde kalkınca tüm sayfayı (sabit navbar dahil) yatay kaydırıp "zıplama" yaratıyor. Renkler tema-bağımsız sabit (#0d0c0b / #f4f2ec / #d0ec5a). Rota perdesi (`RouteTransition`) yalnızca ~520ms+ geciken soft-nav / geri tuşunda çıkar.
- **Başlık reveal** (components/WordReveal.tsx): büyük bölüm başlıkları için maskeli kelime-kelime yükselme (GSAP + `attachScrollReveal`). Düz metin string alır; TR alt-uzantıları padding ile korunur.
- **SEO altyapısı**:
  - `app/[locale]/opengraph-image.tsx` — locale'e göre marka paylaşım kartı (`next/og` ImageResponse, 1200×630). Font: `public/fonts/SpaceGrotesk-Bold.ttf` (`readFile`). Başlık = hero satırları birleşik. Node runtime (edge yapma; `readFile` gerekir).
  - `app/icon.tsx` — marka favicon + JSON-LD logo kaynağı (`/icon`, 256×256 png).
  - JSON-LD (`app/[locale]/layout.tsx` body): `ProfessionalService`/`Organization` + `WebSite` grafiği. `<` → `<` ile kaçırılır.
  - Twitter kartı + `metadataBase` layout `generateMetadata` içinde.
  - `proxy.ts` matcher metadata rotalarını (icon vb.) i18n yönlendirmesinden muaf tutar — yoksa 307.
- **i18n**: en (varsayılan) / tr / es / de. Rotalama `i18n/routing.ts` (`localePrefix: as-needed` → `/` = EN), metinler `messages/*.json`, proxy.ts locale yönlendirmesi yapar.
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
