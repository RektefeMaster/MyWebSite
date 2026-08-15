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

- **Hero 3D** (components/HeroScene.tsx + HomeHeroKeepAlive): R3F sahnesi — kadrajın üstünde dönen, **gerçek cam/krom** stilize "M" (`MeshTransmissionMaterial`). Hero layout'ta keep-alive: ana sayfadan çıkınca unmount YOK (park: opacity-0 + `frameloop:never`); M. ile dönüşte anında görünür.
  - **Sahne artık TEMA-BAĞIMSIZ**: hero her iki temada da aynı siyah film, ışık da filmden geliyor. `dark` state / MutationObserver / tema başına env bake YOK.
  - **Kırılma arkaplanı** (`useFilmBackdrop`): transmission sahnenin FBO'sunu örnekliyor, sahne boşsa M opak levhaya dönüyor. drei'nin `background` kancasına, filmin posteri **ekran en-boyuna CSS'in cover + `object-position` matematiğiyle kırpılıp** veriliyor — cam gerçekten arkasındakini kırıyor. Posteri ham vermek yetmez: `scene.background` düz dokuyu gerer, cam yamalı bir renk lekesi olur.
  - **Marka YALNIZCA camın içinden okunuyor** (`drawWordmark`): sahne hazır olunca DOM'daki `<h1>` görsel olarak sönüyor (`[data-scene-ready]`), kelime markasının bir kopyası ise kırılma arkaplanına çiziliyor. Yani "METEK Digital" çıplak gözle görünmüyor; M üstünden geçtikçe harfler camın içinde kırılarak beliriyor. Kopya DOM'daki font/punto/konumla birebir; konum `offsetLeft/offsetTop` ile okunuyor (`getBoundingClientRect` DEĞİL — giriş animasyonunun `y:16` transform'u bake anında kopyayı kalıcı kaydırıyordu), taban çizgisi CSS half-leading formülüyle. `<h1>` DOM'da ve erişilebilirlik ağacında kalır (`visibility`/`display` kullanma); WebGL yoksa `data-scene-ready` hiç gelmez ve yazı görünür kalır.
  - **Env = filmin kendisi** (`useFilmEnvironment`): equirect canvas — üstte gece göğü (mutlak siyah DEĞİL; sıfırlanırsa M siyah bir deliğe düşüyor), ufukta figürün halesi, altta 4 kez aynalanarak döşenmiş tarla, + tek "ay" speküları. Canvas LDR olduğu için `envMapIntensity` yüksek (9) — eski elle konmuş Lightformer'lar HDR'dı.
  - **Malzeme dengesi**: `transmission 0.82` + `metalness 0.3`. Saf cam (1.0) siyah gökte fizik gereği görünmez oluyor; saf krom da "arkasını göstermiyor". `thickness` DÜNYA BİRİMİNDE ve M sahnede ~0.5 birim — 0.2 civarında tut, büyütürsen cam ekranın ta altındaki tarlayı örnekleyip mavi levhaya dönüyor.
  - **Hareket**: sürekli Y dönüşü (~16sn/tur; gövde `depth 0.5` — inceltirsen profilde marka kayboluyor) + Lissajous gezinme + imleç takibi (`state.pointer`, bu yüzden canvas'ta masaüstünde `pointer-events: auto`). Gezinme bandının merkezi kelime markasıyla ÇAKIŞIR — yazı ancak cam üstünden geçince okunduğu için M'i yukarı sabitleme. Toplam yol `MARK_LIMIT_*` ile kırpılır ve sınırlar M'in YARIM boyu kadar içeri çekilir (merkezi kırpmak yetmiyor; büyük gövdenin üstü nav'ın altına giriyordu).
  - **Perf**: DPR tavan masaüstü 2 / lite 1.75, zemin 1.5; `PerformanceMonitor bounds=[50,60]`. Transmission `resolution` desktop 1024 / lite 512 (~1024 üstüne çıkarma). Env tek sefer bake. M sürekli döndüğü için görünürken `frameloop:always` — eski "pointer idle → demand" modu dönüşü donduruyordu; boştaki maliyeti görünürlük kesiyor (görüş dışı/sekme gizli → `never`). Context loss'ta Canvas remount. `reactStrictMode: false` şart.

- **Hero zemini = film** (components/HeroFilm.tsx + `public/hero/` + `lib/hero-media.ts`): hero'nun tüm arka planı, ışıyan çiçek tarlasında duran humanoid; gökyüzü mutlak siyah. Marka kilidi (cam M + kelime markası) bu göğe oturuyor.
  - **Gökyüzü uzatıldı**: kaynağın üst ~%26'sı gerçek siyah (ölçüldü: ilk 120 satır max RGB 4/5). Master'lar üstten saf siyahla uzatıldı — dikiş görünmüyor (sınırda 0 → max 2) ama nav ile figürün başı arasında kilit için gerçek yer açılıyor (uzatmasız ~130px kalıyordu). `object-position: 50% 100%` kırpma payını gökten verip zemini (çiçek tarlası ve figür) ekranda tutuyor.
  - **Siyah ezme**: x264 near-black'i blok blok 2/255'e kaldırıp gren/vinyet altında görünür dikdörtgen leke yapıyordu. `curves` ile yumuşak toe (0..~5 → 0) uygulandı; gök artık tam 0, tarlanın halesi duruyor.
  - **Yön başına ayrı master**: yatay `void-1920x1500.mp4` (~2.7MB, üstten 432px dolgu) ve dikey `void-1080x1920.mp4` (~1.5MB, kaynak 1100px'e kırpılıp üstten 868px dolgu). Seçim `matchMedia("(orientation: portrait)")`, dönüşte `change` ile master değişir. Poster yolları HeroScene ile ORTAK (`lib/hero-media.ts`) — cam aynı dosyayı kırılma/env dokusu olarak okuyor, ikinci indirme yok.
  - **Kesintisiz döngü**: kaynak 12.04sn ve başladığı yere dönmüyor (ilk/son kare RMSE 0.022); son 0.6sn ilk 0.6sn üstüne `xfade` ile bindirilip 11.46sn'ye indirildi. Yeni klip gelirse aynı işlemi uygula.
  - **Kalite**: crf 26/27. Daha agresif sıkıştırma (crf 31) çiçek dokusunu gözle görülür şekilde eziyordu. CSS'te `transform`/`filter` YOK — ikisi de kareyi yeniden örnekletip yumuşatıyor.
  - **Perf:** `preload="none"` + src YOK; kaynak ancak Hero'nun boot kapısı (`metek:hero-warm` / idle) açılınca bağlanıyor, hero görüş dışına çıkınca `pause()`. İlk görsel `<picture>` posteri (~73KB webp, `fetchPriority=high` — LCP elemanı odur); video `playing` olunca `data-playing` ile üstüne açılıyor. reduced-motion'da video hiç inmiyor, poster kalıyor. `.hero-film__veil` yalnızca iki uçta çalışıyor: üstte nav okunurluğu, altta sayfaya geçiş (%14 — tarla griye boyanmıyor).

- **Atölye kareleri** (components/StudioFrames.tsx + `public/studio/`): Capabilities ile Manifesto arasında, `bg-band` üstünde üç kareli editöryal yayılma (01 talep · 02 iz · 03 zanaat). Üç görsel tek sanat yönüne çekildi: "eller" karesinin beyaz zemini luminans matıyla silindi (şeffaf webp), heykelin mor ışığı `hue=-85:s=0.25` ile petrole döndürüldü, parmak izi desatüre edildi. Kareler `Reveal mode="mask"` + scrub parallax (`data-parallax`, reduced-motion'da yok). Metin `messages.studioFrames`.
- **Hero atmosferi + marka kilidi** (components/Hero.tsx + craft.css): hero'da **başka metin yok** — yalnızca kelime markası. `hero.line2/line3` yalnız `sr-only` tanım satırında ve OG başlığında yaşıyor (mesaj anahtarları duruyor, `opengraph-image.tsx` onları okuyor).
  - **Kelime markası** iki basamak: METEK sol üstte, Digital sağ altta (`--hero-word-stagger`, em cinsinden). Sahne hazır olunca sönüyor — marka camın içinden okunuyor (bkz. Hero 3D). Renk tema tokenı DEĞİL (`--hero-fg`): açık temada siyah kadrajda siyah yazı olurdu. Hero tokenları `.hero-section` üstünde ve tema-bağımsız; tek istisna perdenin alt ucu, orası kasten sayfanın zeminine erir.
  - **Kadraj eşlemesi**: `--hero-mark-y` / `--hero-word-y` figürün başının konumuyla hizalı (yatay master'da ~%50, dikeyde ~%61). Değiştirirsen HeroScene'deki `MARK_Y` / `MARK_Y_PORTRAIT` ile birlikte değiştir.
  - Katmanlar: `.hero-halo` (M'in arkasında ay ışığı, `--hero-mark-y`'den besleniyor), `.hero-vignette`, `.hero-grain` (opaklık 0.12 — mutlak siyahta gren çabuk "kar"a dönüyor), `.hero-scroll__line` (metinsiz kaydırma imi). Canvas bunların ÜSTÜNDE (`z-[3]`) ki cam yazının üstünden geçebilsin.
  - **Perf:** hero görüş dışına çıkınca wrapper `data-atmosphere-idle="true"` → grain/halo/scroll animasyonları duraklar; canvas zaten `frameloop:never` olur. Ekran dışında sıfır sürekli iş.

- **Sinematik video intro** (components/Intro.tsx + craft.css `.intro-*`): ilk yükleme perdesi — stop-motion kâğıt katlama/yıkım sanatı ile METEK posterine dönüşen video (`public/intro/metek-intro.{mp4,webm}`), ses açma/kapama, `Geç` (Esc/Boşluk) kontrolü ve alt ilerleme çizgisi. Kararı layout içindeki `introInitScript` ilk boyamadan önce verir → `html[data-intro="play"|"skip"]` (FOUC yok). Oturum başına bir kez (`sessionStorage['metek-intro']`), reduced-motion'da atlanır, `?intro` ile yeniden tetiklenir, JS yoksa CSS failsafe (~12.5s) temizler. Oynatma sırasında (~2s) below-fold chunk’lar + font + (home) WebGL ısıtılır (`metek:hero-warm`). Video sonlandığında veya atlandığında GSAP ile kusursuz blur/scale erimesiyle 3D Hero sahnesi açılır. Oynatma noktası cihaza göre: masaüstünde ~2s, lite'ta 5.2s (telefonda perde decode + WebGL boot + ikinci video indirme aynı anda perdeyi takıyordu). Save-Data / 2g'de perde hiç oynamaz (bkz. `introInitScript`). Kaynak sırası **webm ÖNCE** (1.33MB vs mp4 2.03MB, SSIM 0.981); ters çevirme, VP9 dosyası ölü ağırlığa döner. Oynarken scroll kilidi **event ile** (wheel/touchmove `preventDefault` + scroll tuşları) + `html.intro-lock { touch-action:none }` + Lenis `stop()`.
  - **Kilit `completeExit` içinde sökülmeli, effect cleanup'ına BIRAKMA.** Intro layout'ta duruyor ve bitince `null` render ediyor — UNMOUNT OLMUYOR, yani cleanup hiç çalışmıyor. Dinleyiciler cleanup'a bırakıldığında `touchmove` preventDefault'ı oturum boyunca asılı kalıyor ve **mobilde sayfa hiç kaydırılamıyordu** (masaüstünde Lenis programatik kaydırdığı için görünmüyordu). Kilit `releaseLockRef` kapatıcısında; `unlockScroll` hem `completeExit`'ten hem cleanup'tan çağrılıyor.
  - **Çıkış timeline'ına sert tavan var** (`exitFailsafeRef`, 1.8s): timeline GSAP ticker'ına bağlı, sekme arkaplandayken rAF durunca `onComplete` hiç gelmiyor ve perde açık kalıyordu. **`overflow:hidden` KULLANMA** — custom scrollbar'ı (10px) kaldırıp perde kalkınca tüm sayfayı (sabit navbar dahil) yatay kaydırıp "zıplama" yaratıyor.
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
- **Blur'suz nav TAM OPAK olmalı.** Mobilde `backdrop-filter` iOS scroll jank'i
  yüzünden kapalı; zemin `color-mix(... 94%)` bırakılınca altından geçen dev
  editöryel başlıklar ve proje mockup'ları nav çubuğunun içinden görünüyordu —
  "cam" değil hata gibi okunuyor. Saydamlık yalnızca blur AÇIKKEN anlamlı.
- **Display `clamp()` alt sınırları mobili yönetir.** Orta terim (`8vw` vb.)
  320–430px'te alt sınırın altında kaldığı için o aralıkta boyutu ALT SINIR
  belirliyor; eski `3rem` değerleri 320px'te 48px verip TR/DE kelimelerini
  (“geliştiriyoruz” 381px) ekran dışına taşırıyordu. Sınırlar rampanın ~440px'te
  düzleşeceği şekilde seçildi — **≥460px'te hiçbir boyut değişmedi** (ölçüldü:
  768/1280/1600 birebir aynı). Yeni başlıkta aynı oranı koru (`min ≈ vw × 0.275rem`).
- **`WordReveal` / `BlurText` maskeleri `inline-block`**: shrink-to-fit kutu
  max-content'e büyüdüğü için başlıktaki `overflow-wrap` HİÇ çalışmıyor. Maske
  ve içindeki her sarmalayıcı `max-width: 100%` almalı (craft.css). Metin
  elemanlarındaki `min-width: 0` de şart — `overflow-wrap: break-word`
  min-content'i küçültmediğinden grid/flex çocuğu track'i uzun kelime kadar
  şişiriyordu. Bunlar emniyet ağı; normalde punto zaten sığmalı.
- **Kırılma arkaplanı bake genişliği cihaza bağlı** (`useFilmBackdrop`):
  masaüstü 1536, lite 1024. Telefonda 1536 dikey kadrajda 1536×2743 RGBA
  (~17MB GPU) demek ve aygıt genişliğinin 4 katı — 1024 hâlâ ~1.5 katı,
  görüntüde fark yok.
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
- **Accent metin rengi tema-duyarlı**: `--accent` (#0c6b66 / dark #3dcdc4) açık
  zeminde metin olarak zayıf kalabilir. Tema-takipli yüzeylerde (`bg-background`,
  `bg-paper`) metin için `text-accent-ink` kullan. Her iki temada da koyu kalan
  bantlarda (`bg-band`, `bg-ink`, koyu buton) `text-accent` doğru olan. Dolu
  accent CTA’da `text-on-accent`. Arka plan/çizgi/nokta olarak `bg-accent`
  her yerde serbest.
- WhatsApp yeşili (#25D366) üstünde **beyaz metin kullanma** (1.98:1). Dolu
  yeşil varyantlarda yazı/ikon `#0b2e1a` (9.7:1). Outline varyantlarında zemin
  koyu olduğu için beyaz doğru.
- Dokunma hedefi min 24×24px (WCAG 2.2 AA 2.5.8). Küçük tipografili linkleri
  (breadcrumb, 11px) `py-1.5 -my-1.5` ile büyüt — hedef büyür, düzen kaymaz.

## Kişiselleştirme noktaları

- Marka: **METEK Digital** · Kurucu: Nurullah Aydın
- E-posta / site URL: `lib/site.ts` (`SITE.email`, `SITE.url`)
- Proje listesi: `data/projects.ts` (görseller `public/projects/{id}/`)
- Hero 3 satır: `messages/*.json` → `hero.line1..3`
- "M" şekli: `HeroScene.tsx` → `GlassM` içindeki `pts`
- Sosyal: Instagram + WhatsApp (`lib/site.ts`). Yeni kanal gelince `SITE` + `Footer.tsx`
