<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MySite — METEK Digital

METEK Digital stüdyo sitesi (kurucu: Nurullah Aydın). Next.js 16 (App Router) + React Three Fiber + next-intl.

## Copy / içerik işletim sistemi

UI, proje, blog ve meta metinlerinde **zorunlu**: `content-system/` + Cursor skill `.cursor/skills/metek-copy-pipeline`. Üçüncü taraf skill’ler yalnızca `.cursor/skills/vendor/` (pin’li SHA + LICENSE/SOURCE). Ana kaynak yazılmış TR pazarlama metni değil; **semantic brief** + bağımsız locale draft. `avoid-ai-writing` her dilin son stil editörüdür.

- `npm run content:inventory` — yüzey envanteri
- `npm run content:lint` — parity / empty / forbidden / duplicate meta / length raporu

## Komutlar

- `npm run dev` — dev server (port 3000)
- `npm run build` — production build (4 locale statik üretilir)

## Mimari

- **Hero 3D** (components/HeroScene.tsx + HomeHeroKeepAlive): R3F sahnesi — tipografi (drei `<Text>`), stilize "M" + `MeshTransmissionMaterial` (cam/krom). Hero layout’ta keep-alive: ana sayfadan çıkınca unmount YOK (park: opacity-0 + `frameloop:never`); M. ile dönüşte anında görünür. Transmission: desktop `640`/`10`, lite `512`/`7`; `resolution` ~640 üstüne çıkarma. **Mobil hedef 60fps** (`frameloop:always`, throttle YOK) + **adaptif keskinlik**: DPR tavan 2.0 / zemin 1.5 (eski 1.2 tabanı bulanıklık yapıyordu), `PerformanceMonitor bounds=[50,60]` 60'ı korumak için DPR'ı 1.5–2.0 arasında oynatır. Env `frames={1}`, `resolution=256` (mobil dahil — tek sefer bake, ucuz), 4 lightformer (mobilde de). Context loss’ta Canvas remount. `reactStrictMode: false` şart. Navbar giriş animasyonu yalnızca ilk mount’ta (pathname’de tekrarlanmaz).
- **Hero atmosferi** (components/Hero.tsx + globals.css): canvas üstünde `z-[1]` katman — `.hero-glow` (screen blend, lime, yavaş kayar), `.hero-vignette` (kenar karartma), `.hero-grain` (SVG film greni, soft-light/overlay). Üst-solda stüdyo künyesi (`hero.metaStudio`/`metaLocation`), sadece `md+`. **Perf:** grain/glow `will-change:transform` (GPU katmanı; blur scale ucuz), grain taşması ±14% (aşırı harmanlama yok), hero görüş dışına çıkınca atmosfer wrapper `data-atmosphere-idle="true"` → grain/glow animasyonları duraklar (`animation-play-state`); canvas zaten `frameloop:never` olur. Yani hero ekran dışıyken sıfır sürekli iş.
- **Sinematik intro** (components/Intro.tsx + globals.css `.intro-*`): ilk yükleme perdesi — ink zemin, "M." markası, `000→100` sayaç + lime alt-çizgi (loading hissi), sonra perde yukarı kalkıp hero'yu açar (GSAP timeline). Kararı layout içindeki `introInitScript` ilk boyamadan önce verir → `html[data-intro="play"|"skip"]` (FOUC yok). Oturum başına bir kez (`sessionStorage['metek-intro']`), reduced-motion'da atlanır, `?intro` ile yeniden tetiklenir, JS yoksa CSS failsafe (~7.2s) temizler. Sayaç sırasında below-fold chunk’lar + font + (home) WebGL ısıtılır; perde ancak boot kapısı açılınca kalkar. Oynarken scroll kilidi **event ile** (wheel/touchmove `preventDefault` + scroll tuşları) + `html.intro-lock { touch-action:none }` + Lenis `stop()`; bitince listener'lar kalkar + `start()` + `ScrollTrigger.refresh()`. **`overflow:hidden` KULLANMA** — custom scrollbar'ı (10px) kaldırıp perde kalkınca tüm sayfayı (sabit navbar dahil) yatay kaydırıp "zıplama" yaratıyor. Renkler tema-bağımsız sabit (#0d0c0b / #f4f2ec / #d0ec5a). Rota perdesi (`RouteTransition`) yalnızca ~520ms+ geciken soft-nav / geri tuşunda çıkar.
- **Künye** (components/Colophon.tsx): footer öncesi imza bölümü. Sayfanın
  kendi ölçümünü ziyaretçinin tarayıcısından canlı gösterir (ilk görünüm /
  sayfa kayması / etkileşime hazır) + Malatya saati. Rozet değil, gerçek
  `PerformanceObserver` verisi — stüdyonun "ayakta kalan iş" iddiasını
  iddia etmek yerine kanıtlıyor. Intro'nun `000→100` sayacıyla aynı hareket
  dili. **Üç satır her zaman render edilir**, yalnızca değer sonradan dolar;
  satırları sonradan eklemek mobilde CLS 0.02 yapıyordu. Değer kutusu
  `min-w-[5ch]` ("0.000" en uzun) — "—" ile rakam aynı yeri kaplar.
  Safari LCP/CLS desteklemiyor, o metrik "—" kalır; uydurma değer basma.
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

## CSS katmanları (ZORUNLU)

El yazımı CSS **her zaman `@layer components` içinde** olacak:
`app/craft.css` (globals.css `layer(components)` ile alır) ve bileşen yanı
`*.css` dosyaları (`SpecularButton.css`, `CircularText.css`, `CurvedInput.css`)
kendi `@layer components { }` bloğunu taşır.

Sebep: Tailwind v4 utility'leri `@layer utilities` içinde. Katmansız CSS
katmanlıyı **her zaman** geçer — yani katmansız `.btn-stable { display:inline-flex }`,
aynı elemandaki `md:hidden`'ı sessizce eziyordu (WhatsApp FAB masaüstünde
görünüyordu). Yeni bileşen stili eklerken katmanı atlama.

Tek istisna `globals.css` içindeki `.font-display` bloğu ve `--nav-offset`
ölçeği: bunlar **bilerek** katmansız, çünkü sırasıyla `font-bold` utility'sini
geçmeleri ve katmansız `:root` tanımıyla aynı yerde olmaları gerekiyor.

**Katman SIRASI her CSS girişinin en üstünde sabitlenir:**
`@layer theme, base, components, utilities;` — hem `globals.css` hem bileşen
yanı `*.css` dosyalarında. Silme. Sebep: bileşen CSS'i Next tarafından ayrı
stylesheet olarak globals'tan **önce** yüklenebiliyor; ilk görülen `@layer`
bildirimi sırayı belirlediği için sıra sabitlenmezse `components` en düşük
önceliğe düşüyor ve Tailwind preflight'ının `a { color: inherit }` kuralı
`.specular-button`'ın rengini eziyor — lime CTA açık gri metinle 1.2:1
kontrastta kalıyordu (ölçüldü, gözle de okunmuyordu).

## Bilinen kısıtlar / dikkat

- `reactStrictMode: false` ŞART: StrictMode'un çift effect çalıştırması R3F'in WebGL context'ini kalıcı kaybettiriyor (boş gri hero). Açma.
- `public/fonts/SpaceGrotesk-Bold.ttf` **silinmeyecek**: `app/icon.tsx` ve
  `opengraph-image.tsx` `readFile` ile okuyor (next/og TTF ister). Kod içinde
  import edilmediği için "kullanılmıyor" gibi görünür.
- Fontlar tek kopya: display `app/fonts/goks-regular.ttf`, aksan
  `app/fonts/vireon.otf`. `goks-italic.ttf` kayıtlı değil ama italic başlık
  gerekirse diye duruyor (bkz. `app/[locale]/layout.tsx`). Aynı yüzün ikinci
  formatını (otf/ttf ikizi) geri ekleme — ikisi de deploy'a gidiyordu.
- `--nav-offset` fallback'i gerçek header yüksekliğiyle **birebir** tutulacak
  (<640:168 · 640–767:176 · 768–1023:186 · ≥1024:121, hepsi `+ var(--safe-top)`).
  Uyuşmazsa hydrate'te tüm sayfa zıplıyor (ölçüldü: /work CLS 0.19). Nav
  padding'i değişirse bu değerleri yeniden ölç.
- Rotanın ana gövdesini `dynamic()` + `loading` ile sarma. SSR tam yükseklikte
  basıyor, hydrate'te Suspense fallback'i yerine geçip altındaki her şeyi
  zıplatıyor. `WorkBelowFold`/`ApproachBelowFold` bu yüzden statik import.
  Görüş dışı bölümler için `LazyMount` kullan (o `null` render eder, swap yok).
- `DeviceMockup` hover şeridi (~250KB ham JPG) yalnızca `pointerenter` ile
  iner. Viewport tetiğine geri alma — 768px'te LCP elemanı olup /work'ü
  5.5sn'ye çıkarıyordu.
- UI fontu next/font ile Space Grotesk (`latin` + `latin-ext` subset).
- `next/image` `sizes` değerine **sabit px yazma**. Editorial grid'de kart 4/5/7/8/12
  kolon olabiliyor; sabit `360px` 12 kolonluk kartta 1075px'lik kutuya 384px
  varyant düşürüp kaynağı (2400px) 3x upscale ediyordu. Kart görselleri
  `cardImageSizes(cols, frac)` (lib/editorial-layout.ts), proje galerisi
  `gallerySizes(span)` ile türetilir. Yeni görsel eklerken kutuyu ölç:
  `served_w >= box * dpr` olmalı.
- **Lime metin rengi tema-duyarlı**: `--lime` (#c8e84a) açık zeminde 1.1:1 —
  okunmuyor. Tema-takipli yüzeylerde (`bg-background`, `bg-paper`) metin için
  `text-lime-ink` kullan (light'ta koyu zeytin, dark'ta parlak lime). Her iki
  temada da koyu kalan bantlarda (`bg-band`, `bg-ink`, koyu buton) `text-lime`
  doğru olan. Arka plan/çizgi/nokta olarak `bg-lime` her yerde serbest.
- WhatsApp yeşili (#25D366) üstünde **beyaz metin kullanma** (1.98:1). Dolu
  yeşil varyantlarda yazı/ikon `#0b2e1a` (9.7:1). Outline varyantlarında zemin
  koyu olduğu için beyaz doğru.
- Dokunma hedefi min 24×24px (WCAG 2.2 AA 2.5.8). Küçük tipografili linkleri
  (breadcrumb, 11px) `py-1.5 -my-1.5` ile büyüt — hedef büyür, düzen kaymaz.

## Kişiselleştirme noktaları

- Marka: **METEK Digital** · Kurucu: Nurullah Aydın
- E-posta: `components/Contact.tsx` → `EMAIL` (`admin@metehtec.com`)
- Proje listesi: `data/projects.ts` (görseller `public/projects/{id}/`)
- Hero 3 satır: `messages/*.json` → `hero.line1..3`
- "M" şekli: `HeroScene.tsx` → `GlassM` içindeki `pts`
- Sosyal URL’ler gelince `Footer.tsx` içine ekle (şimdilik yok)
