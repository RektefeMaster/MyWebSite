import { getProjectGallery, type ProjectGalleryShot } from "./project-galleries";

export type { ProjectGalleryShot };

export type ProjectDetail = {
  /** Kart / detay başlığı; yoksa projects.ts name kullanılır */
  title?: string;
  tag: string;
  summary: string;
  whatTitle: string;
  what: string[];
  howTitle: string;
  how: string[];
  stack: string[];
  result?: string;
  /** Detay sayfasında ek ekran görüntüleri — yoksa project-galleries.ts kullanılır */
  gallery?: ProjectGalleryShot[];
  /** Sayfa sonu CTA bandı */
  ctaLabel?: string;
  ctaTitle?: string;
  ctaBlurb?: string;
  ctaButton?: string;
};

export type ProjectDetailsByLocale = Record<string, Record<string, ProjectDetail>>;

export const projectDetails: ProjectDetailsByLocale = {
  tr: {
    wcc: {
      tag: "Kurumsal web",
      summary:
        "Wholesale Cabinet Creations, ABD'de mutfak ve banyo dolabı üretiyor. Müşterisi siteye şantiyeden, telefondan bakıyor — bu yüzden site orada hızlı açılıyor, aramada çıkıyor ve teklif formunu tek dokunuş uzağa koyuyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Üretim kalitesini ekrana taşıyan özel arayüz ve sakin bir hareket dili.",
        "Mobil öncelikli sayfa yapısı: galeri, hizmetler ve teklif yolu ilk bakışta belli.",
        "Sertifika, referans ve kapasite gibi güven unsurları saklanmadan görünür.",
        "İçerik ve görselleri ekibin kendi güncelleyebilmesi için panel bağlantısı.",
        "Başlık, meta ve yapılandırılmış arama bilgisi yayın öncesi hazır.",
        "Hızlı tarayan B2B alıcısına göre kurulmuş bilgi mimarisi.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi ürün ve hizmetleri net bir hiyerarşiyle geziyor.",
        "İlgilendiği bölümden doğrudan teklif formuna ya da iletişime geçiyor.",
        "Ekip sayfa ve görselleri panelden güncelliyor; kimseye haber vermeye gerek yok.",
        "Yayından önce hız ve temel arama kontrolleri tek tek geçiliyor.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result:
        "Yayında: kurumsal bir algı, telefonda hızlı bir deneyim ve panelden yönetilen içerik.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Üretim markanız için de böyle bir site?",
      ctaBlurb:
        "Üretim kalitenizi yansıtan, aramaya hazır ve teklif yolu net bir kurumsal site. Kısa bir ihtiyaç yazın; kapsamı ve yolu ben çıkarayım.",
      ctaButton: "Projemi başlat",
    },
    aydnnacar: {
      tag: "Marka ve katalog",
      summary:
        "Nacar Mobilya için sade bir dijital vitrin. Salon, yemek ve yatak koleksiyonları mağazada gezer gibi ilerliyor; her model ölçüsüne, kumaşına ve iletişime bağlanıyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Markaya özel tipografi ve sakin bir renk dili.",
        "Koleksiyon geçişleri ve arkasında duran katalog yapısı.",
        "Ürün kartlarında ölçü ve kumaş seçenekleri.",
        "Koleksiyon bazlı filtreleme; iki modeli karşılaştırmak birkaç saniye sürüyor.",
        "Mobilde bozulmayan, seçkin kalan bir sunum.",
        "Her parçadan iletişim adımına kısa yol.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ana sayfa koleksiyon hikâyesiyle başlıyor, kataloğa akıyor.",
        "Kullanıcı kategori seçip modelleri inceliyor.",
        "Ölçü, kumaş ve teslimat soruları doğrudan iletişime yönleniyor.",
        "Yeni modeller mevcut koleksiyon yapısının içine ekleniyor.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Yayında: mağaza hissi taşıyan bir katalog ve net bir iletişim yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Mobilya markanız için okunaklı bir katalog ister misiniz?",
      ctaBlurb:
        "Koleksiyonlarınızı mağaza hissiyle sunan sade bir vitrin kuralım. Kısa bir özet yeter, kapsamı ben çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    wuffbutik: {
      tag: "Butik web",
      summary:
        "Wuuf Butik için sakin bir vitrin sitesi. Koleksiyon çizgileri, mağaza konumu ve WhatsApp satışı aynı sayfada; yapı hafif olduğu için mobilde akıcı kalıyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Butik kimliğine oturan tipografi ve görsel dil.",
        "Koleksiyon, çizgi ve iletişim üzerine kurulu sayfa düzeni.",
        "Tek dokunuşla açılan WhatsApp yazışma yolu.",
        "Ürün çizgilerini kategori bazında gruplama.",
        "Mağaza konumu ve çalışma saatleri ilk ekranda, arayıp sormaya gerek yok.",
        "Hafif ve hızlı bir mobil kullanım.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi markayı ve vitrini ilk ekranda anlıyor.",
        "Koleksiyon sayfalarından ürün çizgilerine geçiyor.",
        "Tek adımda WhatsApp'a düşüyor.",
        "Sade içerik yapısı güncellemeyi kolay tutuyor.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Yayında: butik algısı ve WhatsApp üzerinden hızlı iletişim.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Butik markanız için vitrin ve WhatsApp yolu ister misiniz?",
      ctaBlurb:
        "Mağaza atmosferini dijitale taşıyan, WhatsApp'a hızlı düşen bir vitrin kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "altitude-residence": {
      tag: "Lüks gayrimenkul",
      summary:
        "Altitude Private Residences için karanlık, ağır bir konut sitesi. Şehir silüeti ve rezidans tipleri anlatılıyor; ama sayfanın tek gerçek hedefi görüntüleme randevusu.",
      whatTitle: "Ne yaptım?",
      what: [
        "Ultra lüks tipografi, görsel dil ve sinematik bir açılış.",
        "Yükseklik ve ritim metaforu üzerinden kurulan rezidans hikâyesi.",
        "Kat planları ve rezidans tipleri karşılaştırmalı sunum.",
        "Şehir silüeti ve konum avantajları için ayrı bir bölüm.",
        "Görüntüleme randevusu çağrısı, aranmayacak kadar net.",
        "Masaüstünde ve mobilde tutarlı kalan bir sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve yaşam vaadini kuruyor.",
        "Ziyaretçi rezidansları ve konum hikâyesini geziyor.",
        "Çağrı doğrudan görüntüleme randevusuna ya da iletişime gidiyor.",
        "İçerik, lüks tonu bozmadan güncellenebiliyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Yayında: seçkin bir algı, net bir randevu yolu ve sorunsuz mobil uyum.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Lüks konut projeniz için görüntüleme odaklı bir site ister misiniz?",
      ctaBlurb:
        "Rezidans hikâyenizi anlatan ve randevuya net akan bir deneyim kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "casa-aurelia": {
      tag: "Butik otel",
      summary:
        "Roma'daki Casa Aurelia için rezervasyon vitrini. İngilizce ve İtalyanca; oda tipleri sade biçimde açılıyor ve rezervasyon yolu tereddüde yer bırakmıyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Otelin karakterine uygun sinematik bir açılış ve tipografi.",
        "Her şeyi rezervasyona bağlayan bir iletişim akışı.",
        "İngilizce ↔ İtalyanca dil seçimi.",
        "Oda tipleri ve olanaklar, okunaklı bir düzende.",
        "Roma konumu ve çevresi için harita destekli bölüm.",
        "Mobilde bozulmayan bir lüks sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve Roma konumunu anlatıyor.",
        "Ziyaretçi otelin hikâyesini ve odaları geziyor.",
        "Rezervasyon çağrısı doğrudan iletişime gidiyor.",
        "Dil anahtarı içeriği EN ↔ IT arasında değiştiriyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Yayında: butik otel algısı, iki dil ve net bir rezervasyon yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Otel markanız için böyle bir rezervasyon deneyimi ister misiniz?",
      ctaBlurb:
        "Atmosferik bir sunum, çok dil ve rezervasyona akan bir site kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "seraphine-atelier": {
      tag: "Moda vitrini",
      summary:
        "Séraphine Atelier için moda evi sitesi. Sisli bir açılış filmi, kadın ve erkek katalog, butiğin zemin hikâyesi; satış sepetle değil, özel prova randevusuyla kapanıyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Sinematik açılış, sis atmosferi ve özel dikime yakışan bir tipografi.",
        "SS26 kadın kataloğu: altı görünüm, parça adı, kesim ve fiyat.",
        "Butik zeminini sahne metaforuyla anlatan bölüm.",
        "Erkek bölümü, karanlık podyum düzeniyle ayrıştırıldı.",
        "Özel saat talep etme çağrısıyla prova yolu netleşti.",
        "Masaüstü ve mobilde aynı kalan sakin lüks ton.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi sisli açılışla markayı hissediyor, kaydırarak butiğe iniyor.",
        "Katalogda kadın ve erkek parçalarını geziyor.",
        "Butik bölümü mağaza atmosferini ve güveni kuruyor.",
        "Randevu bandı özel prova saatine yönlendiriyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Yayında: özel dikim algısı, katalog ritmi ve özel saate giden yol.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Benzer bir moda evi kurmak ister misiniz?",
      ctaBlurb:
        "Sinematik açılışı, katalog ritmini ve randevu akışını markanıza uyarlayalım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "havva-baklava": {
      tag: "Butik web",
      summary:
        "Köln Ehrenfeld'deki HAVVA Baklava için karanlık, sinematik bir vitrin. Gaziantep–Köln hikâyesi, günlük fiyat listesi ve doğrudan WhatsApp sipariş yolu.",
      whatTitle: "Ne yaptım?",
      what: [
        "Karanlık zemin, serif tipografi ve tepsi fotoğrafıyla kurulan atölye algısı.",
        "Gaziantep → Köln hikâyesi, kaydırmalı panellerde anlatıldı.",
        "El işçiliği, antep fıstığı ve katkısız şerbet vaadi net maddelerle.",
        "Günlük fiyat listesinde çeşit ve tepsi fiyatları.",
        "WhatsApp sipariş yolu sayfanın en görünür yerinde.",
        "Adres, çalışma saatleri ve doğrudan WhatsApp numarası.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi ilk ekranda atölyeyi ve ürünü hissediyor.",
        "Atölye ve fiyat listesinde çeşidi ve kilo fiyatını görüyor.",
        "WhatsApp sipariş sohbetini açıyor: çeşit, miktar, saat.",
        "Atölye yanıt verdiğinde gel-al ya da teslim netleşiyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Yayında: zanaatkâr bir baklava algısı, okunaklı fiyat listesi ve WhatsApp sipariş yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Atölyeniz için böyle bir sipariş vitrini ister misiniz?",
      ctaBlurb:
        "Ürün hikâyesini, fiyat listesini ve WhatsApp sipariş yolunu tek akışta kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    mizan: {
      tag: "Estetik klinik",
      summary:
        "Nişantaşı'ndaki MİZAN gülüş mimarisi stüdyosu için sakin bir dijital vitrin. Tedavi listesi var ama ton yüksek değil; sayfa ilk ölçü randevusuna doğru yavaşça akıyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Kaydırmayla açılan gülüş filmi: kapalı ifade, ışık, açılış.",
        "Denge, oran ve sessizlik metni felsefe katmanına taşındı.",
        "Tedavi listesi, seçilmiş ritüeller olarak sunuldu.",
        "Nişantaşı atölyesi mekân kareleriyle anlatıldı.",
        "İlk ölçü ve randevu yolu öne çıkarıldı.",
        "Milimetrik bir hiyerarşi ve sakin bir hareket dili.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi ilk ekranda MİZAN'ın vaadini hissediyor.",
        "Felsefe ve tedavi listesi markanın dilini kuruyor.",
        "Atölye bölümü güven ve mekân derinliği veriyor.",
        "Randevu bandı ilk ölçü konuşmasına yönlendiriyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Yayında: gülüş mimarisi algısı, derinlik ve net bir randevu yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Kliniğiniz için böyle bir vitrin ister misiniz?",
      ctaBlurb:
        "Net bir tedavi hiyerarşisi ve randevuya akan bir deneyim kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "sahra-butik": {
      tag: "Butik web",
      summary:
        "Malatya'daki Sahra Butik için katalog vitrini. Günlük, spor ve tesettür çizgileri bir arada; mağazada dene, bedeni ve stoğu online sor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Malatya kadın giyim kimliğine uygun tipografi ve açılış.",
        "Güncel modelleri kumaşı, kalıbı ve ruh haliyle gösteren katalog.",
        "Günlük, spor ve tesettür bölümleri net biçimde ayrıldı.",
        "Mağaza atmosferi ve stil kareleriyle fiziksel butik ekrana taşındı.",
        "Stok ve beden sorusu için iletişim bandı öne çıkarıldı.",
        "Kaydırma ritmiyle kurulan bir keşif hissi.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve Malatya konumunu kuruyor.",
        "Ziyaretçi katalogdan model seçiyor, tarzlara göre geziyor.",
        "Mağazada denemek ya da stok sormak için iletişime düşüyor.",
        "İçerik katalog üzerinden güncelleniyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Yayında: katalog ritmi, mağaza güveni ve online stok sorusu tek akışta.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Butiğiniz için katalog ve stok yolu ister misiniz?",
      ctaBlurb:
        "Kataloğu, mağaza denemesini ve online stok sorusunu tek vitrinde kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "vela-skin-atelier": {
      tag: "Cilt atölyesi",
      summary:
        "SoHo'daki VELA Skin Atelier için randevu sitesi. Önce gözlem yaklaşımı, açık bir tedavi listesi ve aynı anda tek danışan alan bir stüdyo ritmi — klinik soğukluğu olmadan.",
      whatTitle: "Ne yaptım?",
      what: [
        "Krem zemin, serif başlık ve terracotta vurguyla kurulan açılış.",
        "\"Yüz düzeltmiyoruz, cildi destekliyoruz\" dili sayfaya yerleştirildi.",
        "Reset, Sculpt, Renew, Restore ve Frame protokolleri listede açıldı.",
        "VELA Reset, süresi ve kimlere uygun olduğu bilgisiyle öne çıkarıldı.",
        "Tedavi günlüğü ve stüdyo bölümleriyle süreç güveni kuruldu.",
        "Danışmanlık ve randevu yolu netleştirildi.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi markayı ve SoHo konumunu ilk ekranda hissediyor.",
        "Yaklaşım ve tedavi listesinde ritüelleri okuyor.",
        "Stüdyo bölümü güveni ve randevu niyetini güçlendiriyor.",
        "Danışmanlık adımı rezervasyon konuşmasına gidiyor.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Yayında: sakin bir atölye algısı, okunaklı bir tedavi listesi ve net bir randevu yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Cilt bakımı markanız için böyle bir randevu sitesi ister misiniz?",
      ctaBlurb:
        "Gözlem önce dilini, tedavi listesini ve randevuya akan atölye deneyimini kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    aiahi: {
      title: "Ahi AI",
      tag: "WhatsApp + CRM",
      summary:
        "Randevu temposu yüksek işletmeler için WhatsApp asistanı ve müşteri paneli. Mevcut hat kalır; gelen talep uygun saate yazılır, müşteri kaydı panelde birikir.",
      whatTitle: "Ne yaptım?",
      what: [
        "WhatsApp Cloud API üzerinden çalışan randevu asistanı.",
        "Çalışma saati, hizmet süresi, fiyat ve personel tercihine bağlı yanıtlar.",
        "Randevu, müşteri kaydı, etiket ve ekip notunu aynı panelde tutan CRM.",
        "Kuaför, klinik, servis ve danışmanlık için sektöre göre dil.",
        "Sohbeti istediğiniz anda devralma; asistan geri çekilir.",
        "Ürünü anlatan, paneli gösteren pazarlama sitesi (aiahi.net).",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Müşteri mevcut WhatsApp numaranıza yazar.",
        "Asistan kurallarınıza göre uygun saat önerir; uydurma slot vermez.",
        "Seçilen saat takvime düşer, müşteri kaydı açılır veya güncellenir.",
        "Panelde günün tablosu, bekleyen iş ve riskli randevular durur.",
      ],
      stack: ["Next.js", "TypeScript", "WhatsApp Cloud API", "PostgreSQL"],
      result:
        "Yayında: WhatsApp talebi randevuya ve müşteri kaydına dönüşüyor; gün tek panelden okunuyor.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "İşletmeniz için WhatsApp randevu ve CRM ister misiniz?",
      ctaBlurb:
        "Saatlerinizi, hizmetlerinizi ve panel ihtiyacınızı anlatın. Kurulumu işinize göre netleştiririz.",
      ctaButton: "Projemi başlat",
    },
    "whatsapp-bot": {
      title: "WhatsApp Sohbet Asistanı",
      tag: "Otomasyon",
      summary:
        "WhatsApp'tan gelen soruları sizin fiyatlarınızla yanıtlar. Boş saate randevu yazar, dolu saati korur, iptalde slotu yeniden açar ve randevudan 1 saat önce hatırlatır.",
      whatTitle: "Ne yaptım?",
      what: [
        "Fiyatları ve hizmetleri asistana tanımladım; uydurma cevap üretmiyor.",
        "Boş saatleri biliyor ve randevuyu oraya yazıyor.",
        "Dolu saate ikinci randevu koymuyor.",
        "İptal olduğunda boşalan saati tekrar açıyor.",
        "Randevudan 1 saat önce sahibine bildirim gönderiyor.",
        "Yetemediği konuşmayı size veya panele devrediyor.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Müşteri WhatsApp'tan yazıyor; asistan karşılıyor ve ihtiyacı soruyor.",
        "Fiyatı ve hizmeti anlatıyor, boş saatleri gösteriyor.",
        "Saat seçilince randevu kaydoluyor; iptal slotu serbest bırakıyor.",
        "1 saat kala hatırlatma gidiyor, isteğe bağlı olarak panele düşüyor.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Telefona yapışmadan randevu akışı yürüyor: boş saatler doluyor, çakışma olmuyor, hatırlatma kendiliğinden gidiyor.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "İşletmeniz için WhatsApp randevu asistanı ister misiniz?",
      ctaBlurb:
        "Fiyatlarınızı, boş saatlerinizi ve randevu akışınızı öğrenen bir asistan kuralım. Kısa bir özetten sonra kapsamı netleştiririm.",
      ctaButton: "Projemi başlat",
    },
    "instagram-bot": {
      title: "Instagram Mesaj Asistanı",
      tag: "Otomasyon",
      summary:
        "Instagram DM'lerinde aynı fiyatlar ve aynı takvim. Randevu alır, dolu saate yazmaz, iptali boş slota çevirir ve 1 saat önce hatırlatır.",
      whatTitle: "Ne yaptım?",
      what: [
        "DM'lere sizin adınıza karşılık veren bir sohbet akışı.",
        "WhatsApp'takiyle birebir aynı fiyat ve hizmet cevapları.",
        "Boş saate randevu yazıyor, dolu saate koymuyor.",
        "İptal sonrası saati tekrar açıyor ve 1 saat önce hatırlatıyor.",
        "Zorlandığı konuşmaları size ya da panele aktarıyor.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Biri Instagram'dan yazıyor; asistan karşılıyor ve fiyatı anlatıyor.",
        "Randevu için boş saatleri gösteriyor, seçilen saat kaydoluyor.",
        "İptal slotu serbest bırakıyor; hatırlatma gidiyor.",
        "WhatsApp asistanıyla aynı takvimi kullanıyor.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "Instagram mesajları dağılmıyor: sorular yanıtlanıyor, randevular doğru saate yazılıyor, hatırlatma gidiyor.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Instagram mesajlarınız için de aynı asistanı ister misiniz?",
      ctaBlurb:
        "WhatsApp'takiyle aynı takvimi kullanan, DM'leri toparlayan bir asistan kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    crm: {
      title: "Satış ve Randevu Paneli",
      tag: "Yazılım",
      summary:
        "WhatsApp ve Instagram asistanlarının aldığı randevuları tek panelde toplar. Kanal, saat, müşteri, iptal ve notlar bir arada görünür.",
      whatTitle: "Ne yaptım?",
      what: [
        "Satış adımlarını izleyen sade bir panel.",
        "İki asistanı da bağladım; randevu geldiğinde kart kendiliğinden açılıyor.",
        "Kartta kanal, saat, boş/dolu durumu, notlar ve konuşma özeti.",
        "Bugün kim geliyor, kim iptal etti, hangi saatler boş — hepsi tek ekranda.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Asistan boş saate randevu yazdığında kart oluşuyor.",
        "Kartı ilerletiyor, not ekliyorsunuz; kanal özeti aynı müşteride kalıyor.",
        "İptal olduğunda hem saat hem panel güncelleniyor.",
        "İki asistan konuşuyor, panel hepsini tek listede topluyor.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Asistanlar konuşurken panel randevuyu, müşteriyi ve hatırlatmaları tek yerde tutuyor.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Asistanlarınızla konuşan bir satış paneli ister misiniz?",
      ctaBlurb:
        "WhatsApp ve Instagram asistanlarının topladığı randevuları tek panelde birleştirelim. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
    "css-system": {
      tag: "Tasarım sistemi",
      summary:
        "Marka rengini, tipografisini ve boşluk kurallarını tek kaynaktan yöneten bir CSS tasarım sistemi. Web ile panel aynı görsel dili konuşuyor.",
      whatTitle: "Ne yaptım?",
      what: [
        "Renk, tipografi, köşe ve boşluk için token seti.",
        "Ana, vurgulu ve sade eylem stilleri ile temel bileşenler.",
        "Kullanım rehberi ve canlı bir örnek yüzey.",
        "Açık ve koyu tema için ayrı token katmanı.",
        "Yeni bileşenlerin kurallara bağlı kalmasını sağlayan yapı.",
        "Web ve panelde aynı dilin tekrarlanacağının garantisi.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Token'lar tek kaynaktan yönetiliyor.",
        "Bileşenler doğrudan bu token'ları tüketiyor.",
        "Yeni sayfalar stil dağıtmadan hızlanıyor.",
        "Marka güncellemesi tek noktadan tüm yüzeylere yayılıyor.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
      result:
        "Marka güncellemesi tek noktadan yayılıyor; yeni sayfalar kendiliğinden tutarlı kalıyor.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Markanız için tutarlı bir tasarım sistemi ister misiniz?",
      ctaBlurb:
        "Token tabanlı, büyümeye dayanıklı bir tasarım sistemi kuralım. Kısa bir özet yeter.",
      ctaButton: "Projemi başlat",
    },
  },
  en: {
    wcc: {
      tag: "Corporate web",
      summary:
        "Wholesale Cabinet Creations builds kitchen and bathroom cabinets in the US. Their buyers check the site from a job site, on a phone — so it loads fast there, turns up in search, and keeps the quote request one tap away.",
      whatTitle: "What I built",
      what: [
        "A custom interface and a quiet motion language that carry the factory's quality onto the screen.",
        "Mobile-first page structure: gallery, services and the quote path are obvious at a glance.",
        "Trust signals — certifications, references, capacity — kept visible instead of buried.",
        "A panel connection so the team updates content and photography themselves.",
        "Titles, meta and structured search data ready before launch.",
        "Information architecture built for a B2B buyer who scans fast.",
      ],
      howTitle: "How it works",
      how: [
        "The visitor moves through products and services in a clear hierarchy.",
        "From whichever section caught them, they go straight to the quote form or contact.",
        "The team updates pages and media from the panel — nobody has to email me.",
        "Speed and core search checks are run one by one before it goes live.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result:
        "Live: a corporate presence, a fast experience on a phone, and content the team runs from the panel.",
      ctaLabel: "Next project",
      ctaTitle: "Want something like this for your manufacturing brand?",
      ctaBlurb:
        "A corporate site that reflects your build quality, is ready for search and makes the quote path obvious. Send a short note and I'll come back with scope and a route.",
      ctaButton: "Start my project",
    },
    aydnnacar: {
      tag: "Brand & catalogue",
      summary:
        "A spare digital showroom for Nacar Mobilya. Living, dining and bedroom collections move like a store floor, and every model ties back to its size, its fabric and a way to get in touch.",
      whatTitle: "What I built",
      what: [
        "Typography made for the brand and a calm colour language.",
        "Collection transitions with a real catalogue structure behind them.",
        "Size and fabric options on the product cards.",
        "Collection-based filtering, so comparing two models takes seconds.",
        "A presentation that stays refined on a phone instead of falling apart.",
        "A short path from any piece to the contact step.",
      ],
      howTitle: "How it works",
      how: [
        "The homepage opens on the collection story and flows into the catalogue.",
        "The visitor picks a category and works through the models.",
        "Questions about size, fabric and delivery route straight to contact.",
        "New models drop into the existing collection structure.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Live: a catalogue with a showroom feel and a clear route to contact.",
      ctaLabel: "Next project",
      ctaTitle: "Want a catalogue people can actually read?",
      ctaBlurb:
        "Let's build a spare showcase that presents your collections like a store floor. A short summary is enough to start.",
      ctaButton: "Start my project",
    },
    wuffbutik: {
      tag: "Boutique web",
      summary:
        "A calm showcase site for Wuuf Butik. Collection lines, the store location and WhatsApp selling all live on one page, and the build stays light enough to feel quick on mobile.",
      whatTitle: "What I built",
      what: [
        "Typography and visual language that sit inside the boutique's identity.",
        "A page structure built around collections, lines and contact.",
        "A WhatsApp conversation one tap away.",
        "Product lines grouped by category.",
        "Store location and opening hours on the first screen — nobody has to call to ask.",
        "A light, fast experience on a phone.",
      ],
      howTitle: "How it works",
      how: [
        "The visitor understands the brand and the shopfront on the first screen.",
        "They move from collection pages into the product lines.",
        "One step drops them into WhatsApp.",
        "The simple content structure keeps updates easy.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Live: a boutique presence and fast contact over WhatsApp.",
      ctaLabel: "Next project",
      ctaTitle: "Want a showcase with a WhatsApp route for your boutique?",
      ctaBlurb:
        "Let's carry the store's atmosphere online and put WhatsApp one tap away. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "altitude-residence": {
      tag: "Luxury real estate",
      summary:
        "A dark, heavy residence site for Altitude Private Residences. The skyline and the residence types get their story — but the page only really wants one thing: a booked viewing.",
      whatTitle: "What I built",
      what: [
        "Ultra-luxury typography, a matching visual language and a cinematic opening.",
        "The residence story told through metaphors of height and rhythm.",
        "Floor plans and residence types presented side by side.",
        "A dedicated section for the skyline and the location advantages.",
        "A viewing request that's too clear to need a phone call.",
        "A presentation that holds together on desktop and on mobile.",
      ],
      howTitle: "How it works",
      how: [
        "The first screen sets the brand and the promise of living there.",
        "The visitor moves through the residences and the location story.",
        "The call goes straight to a viewing or to contact.",
        "Content can be updated without breaking the luxury tone.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: a refined presence, a clear booking path and clean mobile behaviour.",
      ctaLabel: "Next project",
      ctaTitle: "Want a viewing-led site for your development?",
      ctaBlurb:
        "Let's build an experience that tells your residence story and lands on the booking. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "casa-aurelia": {
      tag: "Boutique hotel",
      summary:
        "A booking showcase for Casa Aurelia in Rome. English and Italian, room types laid out plainly, and a reservation path that leaves no room to hesitate.",
      whatTitle: "What I built",
      what: [
        "A cinematic opening and typography that match the hotel's character.",
        "A contact flow that ties everything back to the reservation.",
        "English ↔ Italian language switching.",
        "Room types and amenities in a legible layout.",
        "A map-backed section for the Rome location and its surroundings.",
        "A luxury presentation that doesn't break on a phone.",
      ],
      howTitle: "How it works",
      how: [
        "The first screen carries the brand and the Rome location.",
        "The visitor moves through the hotel's story and the rooms.",
        "The reservation call goes straight to contact.",
        "The language switch moves the content between EN and IT.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: a boutique hotel presence, two languages and a clear booking path.",
      ctaLabel: "Next project",
      ctaTitle: "Want a booking experience like this for your hotel?",
      ctaBlurb:
        "Let's build an atmospheric, multilingual site that flows into the reservation. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "seraphine-atelier": {
      tag: "Fashion showcase",
      summary:
        "A fashion house site for Séraphine Atelier. A misted opening film, women's and men's lookbooks, the boutique's ground-floor story — and a close that lands on a private fitting rather than a checkout.",
      whatTitle: "What I built",
      what: [
        "A cinematic opening, an atmosphere of mist, and typography that suits made-to-measure work.",
        "The SS26 women's lookbook: six looks, piece names, cut and price.",
        "The boutique floor told through a stage metaphor.",
        "The men's section set apart with a darker runway layout.",
        "A request-a-private-hour call that makes the fitting path explicit.",
        "The same quiet luxury tone on desktop and on mobile.",
      ],
      howTitle: "How it works",
      how: [
        "The visitor feels the brand through the misted opening, then scrolls down into the boutique.",
        "They move through women's and men's pieces in the lookbook.",
        "The boutique section builds the store atmosphere and the trust.",
        "The booking band points them to a private fitting hour.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: a made-to-measure presence, a lookbook rhythm, and a route to a private hour.",
      ctaLabel: "Next project",
      ctaTitle: "Thinking about a fashion house site like this?",
      ctaBlurb:
        "Let's adapt the cinematic opening, the lookbook rhythm and the booking flow to your brand. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "havva-baklava": {
      tag: "Artisan food",
      summary:
        "A dark, cinematic showcase for HAVVA Baklava in Köln Ehrenfeld. The Gaziantep-to-Cologne story, the day's price list, and ordering straight over WhatsApp.",
      whatTitle: "What I built",
      what: [
        "A workshop presence built from a dark ground, serif type and a photograph of the tray.",
        "The Gaziantep → Cologne story told across scrolling panels.",
        "Handwork, pistachio and additive-free syrup stated as plain claims.",
        "A daily price list with varieties and tray prices.",
        "The WhatsApp ordering route placed where it can't be missed.",
        "Address, opening hours and the WhatsApp number, direct.",
      ],
      howTitle: "How it works",
      how: [
        "The visitor feels the workshop and the product on the first screen.",
        "In the workshop and price list they see the variety and the price per kilo.",
        "They open the WhatsApp ordering chat: variety, quantity, time.",
        "Once the workshop replies, pickup or delivery is settled.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: an artisan presence, a legible price list and a WhatsApp ordering path.",
      ctaLabel: "Next project",
      ctaTitle: "Want an ordering showcase for your workshop?",
      ctaBlurb:
        "Let's put the product story, the price list and the WhatsApp order into one flow. A short summary is enough.",
      ctaButton: "Start my project",
    },
    mizan: {
      tag: "Aesthetic clinic",
      summary:
        "A calm digital presence for MİZAN, a smile architecture studio in Nişantaşı. The treatment list is there, but nothing is raised in volume — the page drifts slowly toward the first measurement.",
      whatTitle: "What I built",
      what: [
        "A smile film that opens as you scroll: closed expression, light, release.",
        "The balance, proportion and quiet copy moved into a philosophy layer.",
        "The treatment list presented as a set of chosen rituals.",
        "The Nişantaşı studio told through frames of the space.",
        "The first measurement and booking path brought forward.",
        "Millimetric hierarchy and a calm motion language.",
      ],
      howTitle: "How it works",
      how: [
        "The visitor feels MİZAN's promise on the first screen.",
        "Philosophy and the treatment list establish the brand's language.",
        "The studio section adds trust and a sense of depth.",
        "The booking band points to a first measurement conversation.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: a smile architecture presence, depth, and a clear booking path.",
      ctaLabel: "Next project",
      ctaTitle: "Want a presence like this for your clinic?",
      ctaBlurb:
        "Let's build a clear treatment hierarchy and an experience that flows into the booking. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "sahra-butik": {
      tag: "Boutique web",
      summary:
        "A lookbook showcase for Sahra Butik in Malatya. Daily, sport and tesettür lines together; try it in store, ask about size and stock online.",
      whatTitle: "What I built",
      what: [
        "Typography and an opening that suit Malatya women's wear.",
        "A catalogue showing current models with their fabric, cut and mood.",
        "Daily, sport and tesettür sections clearly separated.",
        "The physical boutique carried across with store atmosphere and styling frames.",
        "A contact band brought forward for stock and size questions.",
        "A sense of discovery built into the scroll rhythm.",
      ],
      howTitle: "How it works",
      how: [
        "The first screen establishes the brand and the Malatya location.",
        "The visitor picks a model from the catalogue and browses by style.",
        "They drop into contact to try it in store or ask about stock.",
        "Content is updated through the catalogue.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: catalogue rhythm, store trust and the online stock question in one flow.",
      ctaLabel: "Next project",
      ctaTitle: "Want a catalogue and a stock route for your boutique?",
      ctaBlurb:
        "Let's put the catalogue, the in-store try-on and the online stock question into one showcase. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "vela-skin-atelier": {
      tag: "Skin atelier",
      summary:
        "A booking site for VELA Skin Atelier in SoHo. Observation before treatment, a clear index of what's offered, and the rhythm of a studio that takes one client at a time — without the coldness of a clinic.",
      whatTitle: "What I built",
      what: [
        "An opening built from a cream ground, serif headings and a terracotta accent.",
        "The \"we don't correct the face, we support the skin\" language placed into the page.",
        "The Reset, Sculpt, Renew, Restore and Frame protocols opened up in the index.",
        "VELA Reset brought forward with its duration and who it suits.",
        "Trust in the process built through the treatment diary and studio sections.",
        "The consultation and booking route made explicit.",
      ],
      howTitle: "How it works",
      how: [
        "The visitor feels the brand and the SoHo location on the first screen.",
        "They read the rituals in the approach and the treatment index.",
        "The studio section strengthens trust and booking intent.",
        "The consultation step leads into the reservation conversation.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: a calm atelier presence, a legible treatment index and a clear booking path.",
      ctaLabel: "Next project",
      ctaTitle: "Want a booking site like this for your skincare brand?",
      ctaBlurb:
        "Let's build the observation-first language, the treatment index and an atelier experience that flows into the booking. A short summary is enough.",
      ctaButton: "Start my project",
    },
    aiahi: {
      title: "Ahi AI",
      tag: "WhatsApp + CRM",
      summary:
        "WhatsApp booking assistant and customer panel for businesses that live on appointments. Keep the existing line; incoming requests land on open slots and in the CRM record.",
      whatTitle: "What I built",
      what: [
        "A booking assistant on the WhatsApp Cloud API.",
        "Replies tied to opening hours, service length, prices and staff preference.",
        "A CRM that keeps bookings, customer records, tags and team notes in one panel.",
        "Sector-tuned language for salons, clinics, repair shops and consulting.",
        "Takeover anytime — you step into the chat and the assistant stands down.",
        "A marketing site that explains the product and shows the panel (aiahi.net).",
      ],
      howTitle: "How it works",
      how: [
        "The customer writes to your existing WhatsApp number.",
        "The assistant offers open hours from your rules — no invented slots.",
        "The chosen time hits the calendar; the customer record opens or updates.",
        "The panel holds today's board, waiting work and risky bookings.",
      ],
      stack: ["Next.js", "TypeScript", "WhatsApp Cloud API", "PostgreSQL"],
      result:
        "Live: WhatsApp requests become bookings and customer records; the day reads from one panel.",
      ctaLabel: "Next project",
      ctaTitle: "Want WhatsApp booking and a CRM for your business?",
      ctaBlurb:
        "Tell us your hours, services and what the panel needs to show. We scope the setup around your trade.",
      ctaButton: "Start my project",
    },
    "whatsapp-bot": {
      title: "WhatsApp Conversation Assistant",
      tag: "Automation",
      summary:
        "Answers WhatsApp questions with your prices. Books into open hours, protects the busy ones, reopens a slot after a cancellation and reminds the customer an hour before.",
      whatTitle: "What I built",
      what: [
        "Your prices and services taught to the assistant — it doesn't invent answers.",
        "It knows the open hours and books into them.",
        "It won't put a second appointment into a busy hour.",
        "When someone cancels, it reopens the hour that just freed up.",
        "It sends the owner a notification an hour before the appointment.",
        "Conversations it can't carry get handed to you or to the panel.",
      ],
      howTitle: "How it works",
      how: [
        "A customer writes on WhatsApp; the assistant greets them and asks what they need.",
        "It explains the price and the service, then shows the open hours.",
        "Once an hour is chosen the booking is recorded; a cancellation frees the slot.",
        "An hour before, the reminder goes out and, optionally, lands in the panel.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Bookings keep moving without anyone glued to a phone: open hours fill, nothing double-books, reminders go out on their own.",
      ctaLabel: "Next project",
      ctaTitle: "Want a WhatsApp booking assistant for your business?",
      ctaBlurb:
        "Let's build an assistant that learns your prices, your open hours and your booking flow. Send a short summary and I'll define the scope.",
      ctaButton: "Start my project",
    },
    "instagram-bot": {
      title: "Instagram DM Assistant",
      tag: "Automation",
      summary:
        "The same prices and the same calendar, inside Instagram DMs. It books, it stays off busy hours, it turns a cancellation back into an open slot and reminds an hour ahead.",
      whatTitle: "What I built",
      what: [
        "A conversation flow that answers DMs in your name.",
        "Exactly the same price and service answers as on WhatsApp.",
        "It books into open hours and stays out of the busy ones.",
        "It reopens the hour after a cancellation and reminds an hour before.",
        "Conversations it struggles with go to you or into the panel.",
      ],
      howTitle: "How it works",
      how: [
        "Someone writes on Instagram; the assistant greets them and explains the price.",
        "It shows the open hours, and the chosen one is recorded.",
        "A cancellation frees the slot; the reminder still goes out.",
        "It runs on the same calendar as the WhatsApp assistant.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "Instagram messages stop scattering: questions get answered, bookings land in the right hour, reminders go out.",
      ctaLabel: "Next project",
      ctaTitle: "Want the same assistant handling your Instagram DMs?",
      ctaBlurb:
        "Let's build an assistant on the same calendar as WhatsApp that keeps the DMs in order. A short summary is enough.",
      ctaButton: "Start my project",
    },
    crm: {
      title: "CRM Sales Panel",
      tag: "Software",
      summary:
        "Collects the bookings from the WhatsApp and Instagram assistants into one panel. Channel, time, customer, cancellations and notes all visible together.",
      whatTitle: "What I built",
      what: [
        "A plain panel that follows the sales steps.",
        "Both assistants wired in — a card opens by itself when a booking lands.",
        "Channel, time, open/busy status, notes and the conversation summary on the card.",
        "Who's coming today, who cancelled, which hours are free — all on one screen.",
      ],
      howTitle: "How it works",
      how: [
        "When the assistant books an open hour, a card is created.",
        "You move the card along and add notes; the channel history stays with that customer.",
        "A cancellation updates both the hour and the panel.",
        "Two assistants do the talking; the panel gathers it into one list.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "While the assistants talk, the panel keeps bookings, customers and reminders in one place.",
      ctaLabel: "Next project",
      ctaTitle: "Want a sales panel that talks to your assistants?",
      ctaBlurb:
        "Let's bring the bookings from the WhatsApp and Instagram assistants into a single panel. A short summary is enough.",
      ctaButton: "Start my project",
    },
    "css-system": {
      tag: "Design system",
      summary:
        "A CSS design system that holds brand colour, typography and spacing rules in one source. Web and admin end up speaking the same visual language.",
      whatTitle: "What I built",
      what: [
        "Tokens for colour, typography, radius and spacing.",
        "Primary, accent and quiet action styles, plus the base components.",
        "A usage guide and a live example surface.",
        "A separate token layer for light and dark themes.",
        "A structure that keeps new components inside the rules.",
        "A guarantee that web and admin repeat the same language.",
      ],
      howTitle: "How it works",
      how: [
        "Tokens are managed from one source.",
        "Components consume those tokens directly.",
        "New pages get faster because nobody is scattering styles.",
        "A brand update spreads from one point to every surface.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
      result: "A brand update spreads from one point; new pages stay consistent on their own.",
      ctaLabel: "Next project",
      ctaTitle: "Want a consistent design system for your brand?",
      ctaBlurb:
        "Let's build a token-based system that survives growth. A short summary is enough.",
      ctaButton: "Start my project",
    },
  },
  es: {
    wcc: {
      tag: "Web corporativa",
      summary:
        "Wholesale Cabinet Creations fabrica gabinetes de cocina y baño en EE. UU. Sus clientes miran el sitio desde la obra, en el teléfono: ahí carga rápido, aparece en las búsquedas y deja la cotización a un toque.",
      whatTitle: "Qué construí",
      what: [
        "Una interfaz a medida y un movimiento sobrio que llevan la calidad de fábrica a la pantalla.",
        "Estructura mobile first: galería, servicios y ruta de cotización evidentes de un vistazo.",
        "Señales de confianza —certificaciones, referencias, capacidad— a la vista y no enterradas.",
        "Conexión al panel para que el equipo actualice contenido e imágenes por su cuenta.",
        "Títulos, meta y datos estructurados listos antes del lanzamiento.",
        "Arquitectura de información pensada para un comprador B2B que escanea rápido.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El visitante recorre productos y servicios con una jerarquía clara.",
        "Desde la sección que le interesó pasa directo a la cotización o al contacto.",
        "El equipo actualiza páginas e imágenes desde el panel, sin escribirme.",
        "Antes de publicar se revisan velocidad y búsqueda, punto por punto.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result:
        "En línea: presencia corporativa, experiencia rápida en el teléfono y contenido que gestiona el equipo.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere algo así para su marca industrial?",
      ctaBlurb:
        "Un sitio corporativo que refleje su calidad de fabricación, listo para la búsqueda y con la ruta de cotización clara. Mándeme un resumen breve y le devuelvo alcance y ruta.",
      ctaButton: "Iniciar mi proyecto",
    },
    aydnnacar: {
      tag: "Marca y catálogo",
      summary:
        "Un showroom digital sobrio para Nacar Mobilya. Las colecciones de sala, comedor y dormitorio se recorren como una tienda, y cada modelo enlaza con su medida, su tela y una forma de contacto.",
      whatTitle: "Qué construí",
      what: [
        "Tipografía propia de la marca y un lenguaje de color sereno.",
        "Transiciones de colección con una estructura de catálogo real detrás.",
        "Opciones de medida y tela en las fichas de producto.",
        "Filtrado por colección: comparar dos modelos toma segundos.",
        "Una presentación que sigue siendo cuidada en el teléfono.",
        "Un camino corto desde cualquier pieza hasta el contacto.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "La portada abre con la historia de la colección y desemboca en el catálogo.",
        "El usuario elige una categoría y revisa los modelos.",
        "Las preguntas de medida, tela y entrega van directo al contacto.",
        "Los modelos nuevos entran dentro de la estructura de colecciones existente.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "En línea: un catálogo con sensación de tienda y una ruta clara al contacto.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere un catálogo que de verdad se lea?",
      ctaBlurb:
        "Construyamos una vitrina sobria que presente sus colecciones como una tienda. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    wuffbutik: {
      tag: "Web boutique",
      summary:
        "Una vitrina serena para Wuuf Butik. Las líneas de colección, la ubicación de la tienda y la venta por WhatsApp viven en una sola página, y la construcción se mantiene ligera para volar en móvil.",
      whatTitle: "Qué construí",
      what: [
        "Tipografía y lenguaje visual dentro de la identidad de la boutique.",
        "Una estructura de página construida sobre colecciones, líneas y contacto.",
        "Una conversación de WhatsApp a un toque de distancia.",
        "Líneas de producto agrupadas por categoría.",
        "Ubicación y horario en la primera pantalla: nadie tiene que llamar para preguntar.",
        "Una experiencia ligera y rápida en el teléfono.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El visitante entiende la marca y el escaparate en la primera pantalla.",
        "Pasa de las páginas de colección a las líneas de producto.",
        "En un paso cae en WhatsApp.",
        "La estructura simple de contenido mantiene fáciles las actualizaciones.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "En línea: presencia de boutique y contacto rápido por WhatsApp.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere vitrina y ruta a WhatsApp para su boutique?",
      ctaBlurb:
        "Llevemos el ambiente de la tienda al sitio y dejemos WhatsApp a un toque. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "altitude-residence": {
      tag: "Bienes raíces de lujo",
      summary:
        "Un sitio residencial oscuro y denso para Altitude Private Residences. El skyline y los tipos de unidad tienen su relato, pero la página en el fondo quiere una sola cosa: una visita agendada.",
      whatTitle: "Qué construí",
      what: [
        "Tipografía de lujo, un lenguaje visual a juego y una apertura cinematográfica.",
        "La historia de la residencia contada con metáforas de altura y ritmo.",
        "Planos y tipos de unidad presentados uno junto a otro.",
        "Una sección dedicada al skyline y a las ventajas de la ubicación.",
        "Una solicitud de visita tan clara que no hace falta llamar.",
        "Una presentación que aguanta en escritorio y en móvil.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "La primera pantalla fija la marca y la promesa de vivir ahí.",
        "El visitante recorre las unidades y la historia de la ubicación.",
        "La llamada lleva directo a la visita o al contacto.",
        "El contenido se actualiza sin romper el tono de lujo.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: presencia selecta, ruta clara a la visita y buen comportamiento en móvil.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere un sitio orientado a visitas para su desarrollo?",
      ctaBlurb:
        "Construyamos una experiencia que cuente su residencia y aterrice en la visita agendada. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "casa-aurelia": {
      tag: "Hotel boutique",
      summary:
        "Una vitrina de reservas para Casa Aurelia en Roma. Inglés e italiano, tipos de habitación expuestos con claridad y un camino a reservar que no deja lugar a dudas.",
      whatTitle: "Qué construí",
      what: [
        "Una apertura cinematográfica y una tipografía acordes al carácter del hotel.",
        "Un flujo de contacto que devuelve todo a la reserva.",
        "Cambio de idioma inglés ↔ italiano.",
        "Tipos de habitación y servicios en una composición legible.",
        "Una sección con mapa para la ubicación en Roma y su entorno.",
        "Una presentación de lujo que no se rompe en el teléfono.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "La primera pantalla carga la marca y la ubicación romana.",
        "El visitante recorre la historia del hotel y las habitaciones.",
        "La llamada a reservar va directo al contacto.",
        "El selector de idioma mueve el contenido entre EN e IT.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: presencia de hotel boutique, dos idiomas y una ruta de reserva clara.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere una experiencia de reserva así para su hotel?",
      ctaBlurb:
        "Construyamos un sitio atmosférico y multilingüe que desemboque en la reserva. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "seraphine-atelier": {
      tag: "Moda y atelier",
      summary:
        "Un sitio de casa de moda para Séraphine Atelier. Una película de apertura entre niebla, lookbooks de mujer y hombre, la historia del taller — y un cierre que aterriza en una prueba privada, no en un carrito.",
      whatTitle: "Qué construí",
      what: [
        "Una apertura cinematográfica, atmósfera de niebla y tipografía de alta costura.",
        "El lookbook SS26 de mujer: seis salidas, nombre de la pieza, corte y precio.",
        "El piso de la boutique contado con una metáfora de escenario.",
        "La sección de hombre separada con una pasarela más oscura.",
        "Una llamada a pedir hora privada que deja explícito el camino a la prueba.",
        "El mismo lujo sereno en escritorio y en móvil.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El visitante siente la marca con la apertura entre niebla y baja hacia la boutique.",
        "Recorre las piezas de mujer y de hombre en el lookbook.",
        "La sección de boutique construye el ambiente de tienda y la confianza.",
        "La banda de cita lo lleva a una hora de prueba privada.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: presencia de alta costura, ritmo de lookbook y ruta a la hora privada.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Piensa en una casa de moda como esta?",
      ctaBlurb:
        "Adaptemos la apertura cinematográfica, el ritmo del lookbook y el flujo de citas a su marca. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "havva-baklava": {
      tag: "Gastronomía artesanal",
      summary:
        "Una vitrina oscura y cinematográfica para HAVVA Baklava en Köln Ehrenfeld. La historia de Gaziantep a Colonia, la lista de precios del día y el pedido directo por WhatsApp.",
      whatTitle: "Qué construí",
      what: [
        "Una presencia de taller hecha de fondo oscuro, tipografía serif y la foto de la bandeja.",
        "La historia de Gaziantep a Colonia contada en paneles con desplazamiento.",
        "Trabajo a mano, pistacho y almíbar sin aditivos, dichos sin adornos.",
        "Una lista de precios del día con variedades y precio de bandeja.",
        "La ruta de pedido por WhatsApp puesta donde no se puede pasar por alto.",
        "Dirección, horarios y el número de WhatsApp, directos.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El visitante siente el taller y el producto en la primera pantalla.",
        "En el taller y la lista de precios ve la variedad y el precio por kilo.",
        "Abre el chat de pedido por WhatsApp: variedad, cantidad, hora.",
        "Cuando el taller responde, se define recogida o entrega.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: presencia artesanal, lista de precios legible y ruta de pedido por WhatsApp.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere una vitrina de pedidos para su taller?",
      ctaBlurb:
        "Pongamos la historia del producto, la lista de precios y el pedido por WhatsApp en un solo flujo. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    mizan: {
      tag: "Clínica estética",
      summary:
        "Una presencia digital serena para MİZAN, estudio de arquitectura de sonrisa en Nişantaşı. La lista de tratamientos está, pero nada sube de volumen: la página deriva despacio hacia la primera medida.",
      whatTitle: "Qué construí",
      what: [
        "Una película de sonrisa que se abre al desplazar: expresión cerrada, luz, apertura.",
        "El texto de equilibrio, proporción y silencio llevado a una capa de filosofía.",
        "La lista de tratamientos presentada como rituales escogidos.",
        "El taller de Nişantaşı contado con planos del espacio.",
        "La primera medida y la ruta de cita puestas por delante.",
        "Jerarquía milimétrica y un lenguaje de movimiento sereno.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El visitante siente la promesa de MİZAN en la primera pantalla.",
        "La filosofía y la lista de tratamientos establecen el idioma de la marca.",
        "La sección de taller aporta confianza y profundidad de lugar.",
        "La banda de cita lleva a la conversación de primera medida.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: presencia de arquitectura de sonrisa, profundidad y ruta de cita clara.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere una presencia así para su clínica?",
      ctaBlurb:
        "Construyamos una jerarquía de tratamientos clara y una experiencia que desemboque en la cita. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "sahra-butik": {
      tag: "Web boutique",
      summary:
        "Una vitrina guiada por lookbook para Sahra Butik en Malatya. Líneas günlük, sport y tesettür juntas; pruébelo en tienda, pregunte talla y stock en línea.",
      whatTitle: "Qué construí",
      what: [
        "Tipografía y apertura acordes a la moda femenina de Malatya.",
        "Un catálogo que muestra los modelos actuales con su tela, su corte y su ánimo.",
        "Secciones günlük, sport y tesettür claramente separadas.",
        "La boutique física trasladada con ambiente de tienda y planos de estilismo.",
        "Una banda de contacto adelantada para preguntas de stock y talla.",
        "Una sensación de descubrimiento construida en el ritmo del desplazamiento.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "La primera pantalla establece la marca y la ubicación en Malatya.",
        "El visitante elige un modelo del catálogo y navega por estilos.",
        "Cae en el contacto para probarlo en tienda o preguntar stock.",
        "El contenido se actualiza desde el catálogo.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: ritmo de catálogo, confianza de tienda y la pregunta de stock en un flujo.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere catálogo y ruta de stock para su boutique?",
      ctaBlurb:
        "Pongamos el catálogo, la prueba en tienda y la pregunta de stock en una sola vitrina. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "vela-skin-atelier": {
      tag: "Atelier de piel",
      summary:
        "Un sitio de reservas para VELA Skin Atelier en SoHo. Observar antes de tratar, un índice claro de lo que se ofrece y el ritmo de un estudio que atiende a una persona a la vez, sin frialdad de clínica.",
      whatTitle: "Qué construí",
      what: [
        "Una apertura de fondo crema, titulares serif y un acento terracota.",
        "El lenguaje de «no corregimos el rostro, sostenemos la piel» llevado a la página.",
        "Los protocolos Reset, Sculpt, Renew, Restore y Frame abiertos en el índice.",
        "VELA Reset destacado con su duración y para quién es adecuado.",
        "Confianza en el proceso a través del diario de tratamiento y el estudio.",
        "La ruta de consulta y reserva hecha explícita.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El visitante siente la marca y la ubicación en SoHo en la primera pantalla.",
        "Lee los rituales en el enfoque y el índice de tratamientos.",
        "La sección de estudio refuerza la confianza y la intención de reservar.",
        "El paso de consulta lleva a la conversación de reserva.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "En línea: presencia serena de atelier, índice legible y ruta de reserva clara.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere un sitio de reservas así para su marca de piel?",
      ctaBlurb:
        "Construyamos el lenguaje de observar primero, el índice de tratamientos y una experiencia que lleve a la reserva. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    aiahi: {
      title: "Ahi AI",
      tag: "WhatsApp + CRM",
      summary:
        "Asistente de citas por WhatsApp y panel de clientes para negocios que viven de la agenda. Conserva su línea; la petición cae en huecos libres y en la ficha del CRM.",
      whatTitle: "Qué construí",
      what: [
        "Un asistente de citas sobre WhatsApp Cloud API.",
        "Respuestas ligadas a horario, duración del servicio, precios y preferencia de personal.",
        "Un CRM que junta citas, ficha de cliente, etiquetas y notas del equipo en un panel.",
        "Lenguaje afinado por sector: salones, clínicas, talleres y consultoría.",
        "Puede tomar el chat cuando quiera; el asistente se retira.",
        "Un sitio de producto que explica el sistema y muestra el panel (aiahi.net).",
      ],
      howTitle: "Cómo funciona",
      how: [
        "El cliente escribe a su número de WhatsApp actual.",
        "El asistente ofrece horas libres según sus reglas — sin huecos inventados.",
        "La hora elegida entra al calendario; la ficha se abre o se actualiza.",
        "El panel muestra el día, el trabajo pendiente y las citas de riesgo.",
      ],
      stack: ["Next.js", "TypeScript", "WhatsApp Cloud API", "PostgreSQL"],
      result:
        "En línea: las peticiones de WhatsApp se vuelven citas y fichas; el día se lee en un solo panel.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere citas por WhatsApp y un CRM para su negocio?",
      ctaBlurb:
        "Cuéntenos horarios, servicios y qué debe mostrar el panel. Ajustamos el montaje a su oficio.",
      ctaButton: "Iniciar mi proyecto",
    },
    "whatsapp-bot": {
      title: "Asistente de WhatsApp",
      tag: "Automatización",
      summary:
        "Responde las preguntas de WhatsApp con sus precios. Agenda en las horas libres, protege las ocupadas, reabre el hueco tras una cancelación y recuerda una hora antes.",
      whatTitle: "Qué construí",
      what: [
        "Sus precios y servicios enseñados al asistente: no inventa respuestas.",
        "Conoce las horas libres y agenda ahí.",
        "No pone una segunda cita en una hora ocupada.",
        "Cuando alguien cancela, reabre la hora que acaba de liberarse.",
        "Manda un aviso al dueño una hora antes de la cita.",
        "Las conversaciones que no puede llevar pasan a usted o al panel.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "Un cliente escribe por WhatsApp; el asistente saluda y pregunta qué necesita.",
        "Explica el precio y el servicio, y muestra las horas libres.",
        "Al elegir una hora se registra la cita; una cancelación libera el hueco.",
        "Una hora antes sale el recordatorio y, si quiere, cae en el panel.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Las citas avanzan sin nadie pegado al teléfono: las horas libres se llenan, no hay choques y los recordatorios salen solos.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere un asistente de citas por WhatsApp?",
      ctaBlurb:
        "Construyamos un asistente que aprenda sus precios, sus horas libres y su flujo de citas. Mándeme un resumen y defino el alcance.",
      ctaButton: "Iniciar mi proyecto",
    },
    "instagram-bot": {
      title: "Asistente de DM de Instagram",
      tag: "Automatización",
      summary:
        "Los mismos precios y el mismo calendario, dentro de los DM de Instagram. Agenda, se mantiene fuera de las horas ocupadas, convierte una cancelación en hueco libre y recuerda una hora antes.",
      whatTitle: "Qué construí",
      what: [
        "Un flujo de conversación que responde los DM en su nombre.",
        "Exactamente las mismas respuestas de precio y servicio que en WhatsApp.",
        "Agenda en las horas libres y se mantiene fuera de las ocupadas.",
        "Reabre la hora tras una cancelación y recuerda una hora antes.",
        "Las conversaciones difíciles pasan a usted o al panel.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "Alguien escribe por Instagram; el asistente saluda y explica el precio.",
        "Muestra las horas libres y registra la elegida.",
        "Una cancelación libera el hueco; el recordatorio igual sale.",
        "Corre sobre el mismo calendario que el asistente de WhatsApp.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "Los mensajes de Instagram dejan de dispersarse: se responden preguntas, las citas caen en la hora correcta y los recordatorios salen.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere el mismo asistente en sus DM de Instagram?",
      ctaBlurb:
        "Construyamos un asistente sobre el mismo calendario de WhatsApp que mantenga los DM en orden. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    crm: {
      title: "Panel CRM de ventas",
      tag: "Software",
      summary:
        "Reúne en un panel las citas de los asistentes de WhatsApp e Instagram. Canal, hora, cliente, cancelaciones y notas visibles juntos.",
      whatTitle: "Qué construí",
      what: [
        "Un panel sencillo que sigue los pasos de venta.",
        "Los dos asistentes conectados: la ficha se abre sola cuando entra una cita.",
        "Canal, hora, estado libre/ocupado, notas y resumen de la conversación en la ficha.",
        "Quién viene hoy, quién canceló y qué horas quedan libres, en una pantalla.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "Cuando el asistente agenda una hora libre, se crea la ficha.",
        "Usted avanza la ficha y agrega notas; el historial del canal queda con ese cliente.",
        "Una cancelación actualiza la hora y el panel.",
        "Dos asistentes conversan; el panel lo junta en una sola lista.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Mientras los asistentes conversan, el panel mantiene citas, clientes y recordatorios en un mismo lugar.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere un panel de ventas que hable con sus asistentes?",
      ctaBlurb:
        "Juntemos en un solo panel las citas de los asistentes de WhatsApp e Instagram. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
    "css-system": {
      tag: "Sistema de diseño",
      summary:
        "Un sistema de diseño CSS que guarda color, tipografía y espaciado de marca en una sola fuente. Web y panel acaban hablando el mismo idioma visual.",
      whatTitle: "Qué construí",
      what: [
        "Tokens de color, tipografía, radio y espaciado.",
        "Estilos de acción principal, acentuada y discreta, más los componentes base.",
        "Una guía de uso y una superficie de ejemplo en vivo.",
        "Una capa de tokens aparte para tema claro y oscuro.",
        "Una estructura que mantiene los componentes nuevos dentro de las reglas.",
        "La garantía de que web y panel repiten el mismo idioma.",
      ],
      howTitle: "Cómo funciona",
      how: [
        "Los tokens se gestionan desde una sola fuente.",
        "Los componentes consumen esos tokens directamente.",
        "Las páginas nuevas van más rápido porque nadie dispersa estilos.",
        "Una actualización de marca se propaga desde un punto a todas las superficies.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
      result: "La marca se actualiza desde un punto; las páginas nuevas quedan consistentes solas.",
      ctaLabel: "Siguiente proyecto",
      ctaTitle: "¿Quiere un sistema de diseño consistente para su marca?",
      ctaBlurb:
        "Construyamos un sistema basado en tokens que aguante el crecimiento. Con un resumen breve basta.",
      ctaButton: "Iniciar mi proyecto",
    },
  },
  de: {
    wcc: {
      tag: "Unternehmensweb",
      summary:
        "Wholesale Cabinet Creations fertigt Küchen- und Badmöbel in den USA. Die Kundschaft schaut von der Baustelle aufs Handy — dort lädt die Site schnell, taucht in der Suche auf und hält die Angebotsanfrage einen Tipp entfernt.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Eine eigene Oberfläche und eine ruhige Bewegungssprache, die Fertigungsqualität auf den Schirm bringen.",
        "Mobile-First-Aufbau: Galerie, Leistungen und Angebotsweg sind auf einen Blick klar.",
        "Vertrauenssignale — Zertifikate, Referenzen, Kapazität — sichtbar statt vergraben.",
        "Panel-Anbindung, damit das Team Inhalte und Bilder selbst pflegt.",
        "Titel, Meta und strukturierte Suchdaten vor dem Launch fertig.",
        "Informationsarchitektur für einen B2B-Einkäufer, der schnell überfliegt.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Besucher geht Produkte und Leistungen in klarer Hierarchie durch.",
        "Aus dem Abschnitt, der ihn gepackt hat, geht es direkt zur Anfrage oder zum Kontakt.",
        "Das Team pflegt Seiten und Medien im Panel — niemand muss mir schreiben.",
        "Vor dem Livegang werden Tempo und Such-Basics einzeln geprüft.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result:
        "Live: ein seriöser Auftritt, ein schnelles Erlebnis am Handy und Inhalte, die das Team selbst führt.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "So etwas auch für Ihre Fertigungsmarke?",
      ctaBlurb:
        "Eine Unternehmenswebsite, die Ihre Fertigungsqualität zeigt, für die Suche vorbereitet ist und den Angebotsweg klar macht. Schicken Sie eine kurze Notiz, ich komme mit Umfang und Route zurück.",
      ctaButton: "Mein Projekt starten",
    },
    aydnnacar: {
      tag: "Marke & Katalog",
      summary:
        "Ein sparsamer digitaler Showroom für Nacar Mobilya. Wohn-, Ess- und Schlafkollektionen gehen sich wie eine Ladenfläche, und jedes Modell führt zurück zu Maß, Stoff und einem Weg zum Kontakt.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Eine markeneigene Typografie und eine ruhige Farbsprache.",
        "Kollektionsübergänge mit einer echten Katalogstruktur dahinter.",
        "Maß- und Stoffoptionen direkt auf den Produktkarten.",
        "Filterung nach Kollektion — zwei Modelle zu vergleichen dauert Sekunden.",
        "Eine Darstellung, die am Handy gepflegt bleibt statt auseinanderzufallen.",
        "Ein kurzer Weg von jedem Stück zum Kontaktschritt.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Die Startseite öffnet mit der Kollektionsgeschichte und mündet im Katalog.",
        "Der Nutzer wählt eine Kategorie und geht die Modelle durch.",
        "Fragen zu Maß, Stoff und Lieferung laufen direkt in den Kontakt.",
        "Neue Modelle fügen sich in die bestehende Kollektionsstruktur ein.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Live: ein Katalog mit Showroom-Gefühl und ein klarer Weg zum Kontakt.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Wollen Sie einen Katalog, den man wirklich liest?",
      ctaBlurb:
        "Bauen wir eine sparsame Vitrine, die Ihre Kollektionen wie eine Ladenfläche zeigt. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    wuffbutik: {
      tag: "Boutique-Web",
      summary:
        "Eine ruhige Vitrine für Wuuf Butik. Kollektionslinien, Ladenadresse und WhatsApp-Verkauf leben auf einer Seite, und der Aufbau bleibt leicht genug, um mobil schnell zu wirken.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Typografie und Bildsprache innerhalb der Identität der Boutique.",
        "Ein Seitenaufbau rund um Kollektionen, Linien und Kontakt.",
        "Ein WhatsApp-Gespräch einen Tipp entfernt.",
        "Produktlinien nach Kategorie gruppiert.",
        "Adresse und Öffnungszeiten auf dem ersten Screen — niemand muss anrufen.",
        "Ein leichtes, schnelles Erlebnis am Telefon.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Besucher versteht Marke und Schaufenster auf dem ersten Screen.",
        "Von den Kollektionsseiten geht es in die Produktlinien.",
        "Ein Schritt führt zu WhatsApp.",
        "Die einfache Inhaltsstruktur hält Aktualisierungen leicht.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Live: ein Boutique-Auftritt und schneller Kontakt über WhatsApp.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Vitrine plus WhatsApp-Weg für Ihre Boutique?",
      ctaBlurb:
        "Holen wir die Ladenstimmung ins Netz und legen WhatsApp einen Tipp entfernt. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "altitude-residence": {
      tag: "Luxusimmobilien",
      summary:
        "Eine dunkle, schwere Residenz-Website für Altitude Private Residences. Skyline und Wohnungstypen bekommen ihre Erzählung — doch im Grunde will die Seite nur eines: eine gebuchte Besichtigung.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Luxus-Typografie, eine passende Bildsprache und ein filmischer Auftakt.",
        "Die Residenzgeschichte erzählt über Metaphern von Höhe und Rhythmus.",
        "Grundrisse und Wohnungstypen nebeneinander dargestellt.",
        "Ein eigener Abschnitt für Skyline und Lagevorteile.",
        "Eine Besichtigungsanfrage, die zu klar ist, um einen Anruf zu brauchen.",
        "Eine Darstellung, die auf Desktop und Mobil zusammenhält.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der erste Screen setzt die Marke und das Versprechen des Wohnens.",
        "Der Besucher geht die Residenzen und die Lagegeschichte durch.",
        "Der Aufruf führt direkt zur Besichtigung oder zum Kontakt.",
        "Inhalte lassen sich pflegen, ohne den Luxuston zu brechen.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: ein gehobener Auftritt, ein klarer Buchungsweg und sauberes Verhalten mobil.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Eine besichtigungsgetriebene Website für Ihr Projekt?",
      ctaBlurb:
        "Bauen wir ein Erlebnis, das Ihre Residenz erzählt und auf der Buchung landet. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "casa-aurelia": {
      tag: "Boutique-Hotel",
      summary:
        "Eine Buchungsvitrine für Casa Aurelia in Rom. Englisch und Italienisch, Zimmertypen klar aufgeführt und ein Reservierungsweg, der kein Zögern zulässt.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein filmischer Auftakt und eine Typografie passend zum Charakter des Hauses.",
        "Ein Kontaktfluss, der alles zur Reservierung zurückführt.",
        "Sprachwechsel Englisch ↔ Italienisch.",
        "Zimmertypen und Ausstattung in einem lesbaren Layout.",
        "Ein kartengestützter Abschnitt zur Lage in Rom und zur Umgebung.",
        "Eine Luxusdarstellung, die am Handy nicht bricht.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der erste Screen trägt die Marke und die römische Lage.",
        "Der Besucher geht die Geschichte des Hauses und die Zimmer durch.",
        "Der Reservierungsaufruf führt direkt in den Kontakt.",
        "Der Sprachschalter bewegt die Inhalte zwischen EN und IT.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: ein Boutique-Hotel-Auftritt, zwei Sprachen und ein klarer Buchungsweg.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "So ein Buchungserlebnis für Ihr Hotel?",
      ctaBlurb:
        "Bauen wir eine atmosphärische, mehrsprachige Site, die in die Reservierung mündet. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "seraphine-atelier": {
      tag: "Mode & Atelier",
      summary:
        "Eine Modehaus-Website für Séraphine Atelier. Ein Auftakt im Nebel, Lookbooks für Damen und Herren, die Erdgeschoss-Geschichte der Boutique — und ein Abschluss, der bei der privaten Anprobe landet, nicht im Warenkorb.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein filmischer Auftakt, eine Nebelatmosphäre und eine Typografie für Maßarbeit.",
        "Das SS26-Damen-Lookbook: sechs Looks, Stückname, Schnitt und Preis.",
        "Die Boutiquefläche über eine Bühnenmetapher erzählt.",
        "Der Herrenbereich mit dunklerem Laufsteg-Layout abgesetzt.",
        "Ein Aufruf zur privaten Stunde, der den Weg zur Anprobe explizit macht.",
        "Derselbe stille Luxuston auf Desktop und Mobil.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Besucher spürt die Marke im Nebelauftakt und scrollt hinunter in die Boutique.",
        "Er geht Damen- und Herrenstücke im Lookbook durch.",
        "Der Boutique-Abschnitt baut Ladenstimmung und Vertrauen auf.",
        "Das Terminband führt zu einer privaten Anprobestunde.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: ein Maßarbeit-Auftritt, ein Lookbook-Rhythmus und ein Weg zur privaten Stunde.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Denken Sie an ein Modehaus wie dieses?",
      ctaBlurb:
        "Passen wir Auftakt, Lookbook-Rhythmus und Terminfluss an Ihre Marke an. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "havva-baklava": {
      tag: "Handwerk & Genuss",
      summary:
        "Eine dunkle, filmische Vitrine für HAVVA Baklava in Köln-Ehrenfeld. Die Geschichte von Gaziantep nach Köln, die Tagespreisliste und die Bestellung direkt über WhatsApp.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein Werkstatt-Auftritt aus dunklem Grund, Serifentype und dem Foto des Blechs.",
        "Die Geschichte Gaziantep → Köln über scrollende Panels erzählt.",
        "Handarbeit, Pistazie und Sirup ohne Zusätze — schlicht benannt.",
        "Eine Tagespreisliste mit Sorten und Blechpreisen.",
        "Der WhatsApp-Bestellweg dort platziert, wo man ihn nicht übersieht.",
        "Adresse, Öffnungszeiten und die WhatsApp-Nummer, direkt.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Besucher spürt Werkstatt und Produkt auf dem ersten Screen.",
        "In Werkstatt und Preisliste sieht er Sorte und Kilopreis.",
        "Er öffnet den WhatsApp-Bestellchat: Sorte, Menge, Uhrzeit.",
        "Sobald die Werkstatt antwortet, steht Abholung oder Lieferung.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: ein handwerklicher Auftritt, eine lesbare Preisliste und ein WhatsApp-Bestellweg.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Eine Bestellvitrine für Ihre Werkstatt?",
      ctaBlurb:
        "Bringen wir Produktgeschichte, Preisliste und WhatsApp-Bestellung in einen Fluss. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    mizan: {
      tag: "Ästhetik-Klinik",
      summary:
        "Ein ruhiger digitaler Auftritt für MİZAN, ein Studio für Lächeln-Architektur in Nişantaşı. Die Behandlungsliste ist da, aber nichts wird lauter gedreht — die Seite driftet langsam zur ersten Messung.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein Lächeln-Film, der sich beim Scrollen öffnet: geschlossener Ausdruck, Licht, Öffnung.",
        "Der Text über Balance, Proportion und Stille in eine Philosophieebene gehoben.",
        "Die Behandlungsliste als Reihe gewählter Rituale dargestellt.",
        "Das Nişantaşı-Atelier über Raumaufnahmen erzählt.",
        "Erste Messung und Terminweg nach vorn geholt.",
        "Millimetergenaue Hierarchie und eine ruhige Bewegungssprache.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Besucher spürt das Versprechen von MİZAN auf dem ersten Screen.",
        "Philosophie und Behandlungsliste etablieren die Sprache der Marke.",
        "Der Atelier-Abschnitt gibt Vertrauen und räumliche Tiefe.",
        "Das Terminband führt zum Gespräch über die erste Messung.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: ein Auftritt für Lächeln-Architektur, Tiefe und ein klarer Terminweg.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "So ein Auftritt für Ihre Klinik?",
      ctaBlurb:
        "Bauen wir eine klare Behandlungshierarchie und ein Erlebnis, das in den Termin mündet. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "sahra-butik": {
      tag: "Boutique-Web",
      summary:
        "Eine Lookbook-geführte Vitrine für Sahra Butik in Malatya. Günlük-, Sport- und Tesettür-Linien zusammen; im Laden anprobieren, Größe und Bestand online fragen.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Typografie und Auftakt passend zur Damenmode in Malatya.",
        "Ein Katalog, der die aktuellen Modelle mit Stoff, Schnitt und Stimmung zeigt.",
        "Günlük-, Sport- und Tesettür-Bereiche klar getrennt.",
        "Die physische Boutique übertragen durch Ladenstimmung und Styling-Aufnahmen.",
        "Ein Kontaktband nach vorn geholt für Fragen zu Bestand und Größe.",
        "Ein Gefühl von Entdeckung, in den Scroll-Rhythmus eingebaut.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der erste Screen setzt die Marke und den Standort Malatya.",
        "Der Besucher wählt ein Modell aus dem Katalog und stöbert nach Stil.",
        "Für Anprobe im Laden oder Bestandsfrage landet er im Kontakt.",
        "Inhalte werden über den Katalog gepflegt.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: Katalogrhythmus, Ladenvertrauen und die Bestandsfrage in einem Fluss.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Katalog und Bestandsweg für Ihre Boutique?",
      ctaBlurb:
        "Bringen wir Katalog, Anprobe im Laden und Online-Bestandsfrage in eine Vitrine. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "vela-skin-atelier": {
      tag: "Skin Atelier",
      summary:
        "Eine Buchungswebsite für VELA Skin Atelier in SoHo. Beobachten vor Behandeln, ein klarer Index des Angebots und der Rhythmus eines Studios, das jeweils einen Gast nimmt — ohne klinische Kälte.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein Auftakt aus cremefarbenem Grund, Serifen-Überschriften und einem Terrakotta-Akzent.",
        "Die Sprache „wir korrigieren nicht das Gesicht, wir stützen die Haut“ in die Seite gelegt.",
        "Die Protokolle Reset, Sculpt, Renew, Restore und Frame im Index geöffnet.",
        "VELA Reset hervorgehoben, mit Dauer und für wen es passt.",
        "Vertrauen in den Ablauf über Behandlungstagebuch und Studio-Abschnitte.",
        "Der Weg über Beratung zur Buchung explizit gemacht.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Besucher spürt Marke und SoHo-Lage auf dem ersten Screen.",
        "Er liest die Rituale in Ansatz und Behandlungsindex.",
        "Der Studio-Abschnitt stärkt Vertrauen und Buchungsabsicht.",
        "Der Beratungsschritt führt ins Reservierungsgespräch.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live: ein ruhiger Atelier-Auftritt, ein lesbarer Index und ein klarer Buchungsweg.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "So eine Buchungswebsite für Ihre Hautpflegemarke?",
      ctaBlurb:
        "Bauen wir die Beobachten-zuerst-Sprache, den Behandlungsindex und ein Erlebnis, das in die Buchung mündet. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    aiahi: {
      title: "Ahi AI",
      tag: "WhatsApp + CRM",
      summary:
        "WhatsApp-Terminassistent und Kundenpanel für Betriebe, deren Tag aus Terminen besteht. Die bestehende Nummer bleibt; Anfragen landen auf freien Stunden und in der Kundendatei.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Einen Terminassistenten über die WhatsApp Cloud API.",
        "Antworten gebunden an Öffnungszeiten, Leistungsdauer, Preise und Mitarbeiterwunsch.",
        "Ein CRM, das Termine, Kundendatei, Tags und Teamnotizen in einem Panel hält.",
        "Branchensprache für Salons, Kliniken, Werkstätten und Beratung.",
        "Chat jederzeit übernehmen — der Assistent zieht sich zurück.",
        "Eine Produktseite, die das System erklärt und das Panel zeigt (aiahi.net).",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Der Kunde schreibt an Ihre bestehende WhatsApp-Nummer.",
        "Der Assistent bietet freie Stunden nach Ihren Regeln — keine erfundenen Slots.",
        "Die gewählte Zeit landet im Kalender; die Kundendatei öffnet oder aktualisiert sich.",
        "Das Panel hält den Tagesplan, offene Arbeit und riskante Termine.",
      ],
      stack: ["Next.js", "TypeScript", "WhatsApp Cloud API", "PostgreSQL"],
      result:
        "Live: WhatsApp-Anfragen werden zu Terminen und Kundendateien; der Tag liest sich aus einem Panel.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "WhatsApp-Termine und CRM für Ihren Betrieb?",
      ctaBlurb:
        "Schildern Sie Stunden, Leistungen und was das Panel zeigen soll. Wir richten die Einrichtung auf Ihr Handwerk aus.",
      ctaButton: "Mein Projekt starten",
    },
    "whatsapp-bot": {
      title: "WhatsApp-Assistent",
      tag: "Automatisierung",
      summary:
        "Beantwortet WhatsApp-Fragen mit Ihren Preisen. Bucht in freie Stunden, schützt die belegten, gibt nach einer Absage den Platz wieder frei und erinnert eine Stunde vorher.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ihre Preise und Leistungen dem Assistenten beigebracht — er erfindet keine Antworten.",
        "Er kennt die freien Stunden und bucht dorthin.",
        "Er legt keinen zweiten Termin in eine belegte Stunde.",
        "Sagt jemand ab, öffnet er die eben frei gewordene Stunde wieder.",
        "Eine Stunde vor dem Termin geht eine Benachrichtigung an die Inhaberseite.",
        "Gespräche, die er nicht tragen kann, gehen an Sie oder ins Panel.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Ein Kunde schreibt über WhatsApp; der Assistent begrüßt und fragt nach dem Anliegen.",
        "Er erklärt Preis und Leistung und zeigt die freien Stunden.",
        "Ist eine Stunde gewählt, wird gebucht; eine Absage gibt den Platz frei.",
        "Eine Stunde vorher geht die Erinnerung raus und landet auf Wunsch im Panel.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Termine laufen weiter, ohne dass jemand am Telefon klebt: freie Stunden füllen sich, nichts überschneidet sich, Erinnerungen gehen von selbst raus.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Einen WhatsApp-Terminassistenten für Ihren Betrieb?",
      ctaBlurb:
        "Bauen wir einen Assistenten, der Ihre Preise, Ihre freien Zeiten und Ihren Terminfluss lernt. Kurze Notiz genügt, den Umfang kläre ich.",
      ctaButton: "Mein Projekt starten",
    },
    "instagram-bot": {
      title: "Instagram-DM-Assistent",
      tag: "Automatisierung",
      summary:
        "Dieselben Preise und derselbe Kalender, in den Instagram-DMs. Er bucht, hält sich von belegten Stunden fern, macht aus einer Absage wieder einen freien Platz und erinnert eine Stunde vorher.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein Gesprächsfluss, der DMs in Ihrem Namen beantwortet.",
        "Exakt dieselben Preis- und Leistungsantworten wie auf WhatsApp.",
        "Er bucht in freie Stunden und bleibt aus den belegten heraus.",
        "Er öffnet die Stunde nach einer Absage wieder und erinnert eine Stunde vorher.",
        "Gespräche, mit denen er sich schwertut, gehen an Sie oder ins Panel.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Jemand schreibt über Instagram; der Assistent begrüßt und erklärt den Preis.",
        "Er zeigt die freien Stunden, die gewählte wird eingetragen.",
        "Eine Absage gibt den Platz frei; die Erinnerung geht trotzdem raus.",
        "Er läuft auf demselben Kalender wie der WhatsApp-Assistent.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "Instagram-Nachrichten zerfasern nicht mehr: Fragen werden beantwortet, Termine landen in der richtigen Stunde, Erinnerungen gehen raus.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Denselben Assistenten für Ihre Instagram-DMs?",
      ctaBlurb:
        "Bauen wir einen Assistenten auf demselben Kalender wie WhatsApp, der die DMs in Ordnung hält. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    crm: {
      title: "CRM-Verkaufspanel",
      tag: "Software",
      summary:
        "Bündelt die Termine der WhatsApp- und Instagram-Assistenten in einem Panel. Kanal, Zeit, Kunde, Absagen und Notizen sind zusammen sichtbar.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Ein schlichtes Panel, das den Verkaufsschritten folgt.",
        "Beide Assistenten angebunden — kommt ein Termin, öffnet sich die Karte von selbst.",
        "Kanal, Zeit, frei/belegt, Notizen und Gesprächszusammenfassung auf der Karte.",
        "Wer heute kommt, wer abgesagt hat, welche Stunden frei sind — auf einem Bildschirm.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Bucht der Assistent eine freie Stunde, entsteht eine Karte.",
        "Sie bewegen die Karte weiter und ergänzen Notizen; die Kanalhistorie bleibt beim Kunden.",
        "Eine Absage aktualisiert Stunde und Panel.",
        "Zwei Assistenten reden, das Panel sammelt alles in einer Liste.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Während die Assistenten reden, hält das Panel Termine, Kunden und Erinnerungen an einem Ort.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Ein Verkaufspanel, das mit Ihren Assistenten spricht?",
      ctaBlurb:
        "Führen wir die Termine der WhatsApp- und Instagram-Assistenten in einem Panel zusammen. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
    "css-system": {
      tag: "Designsystem",
      summary:
        "Ein CSS-Designsystem, das Markenfarbe, Typografie und Abstände in einer Quelle hält. Web und Admin sprechen am Ende dieselbe visuelle Sprache.",
      whatTitle: "Was ich gebaut habe",
      what: [
        "Tokens für Farbe, Typografie, Radien und Abstände.",
        "Primäre, betonte und zurückhaltende Aktionsstile plus die Basiskomponenten.",
        "Ein Anwendungsleitfaden und eine lebende Beispielfläche.",
        "Eine eigene Token-Ebene für helles und dunkles Thema.",
        "Eine Struktur, die neue Komponenten innerhalb der Regeln hält.",
        "Die Garantie, dass Web und Admin dieselbe Sprache wiederholen.",
      ],
      howTitle: "So funktioniert es",
      how: [
        "Tokens werden aus einer Quelle gepflegt.",
        "Komponenten greifen direkt auf diese Tokens zu.",
        "Neue Seiten gehen schneller, weil niemand Stile verstreut.",
        "Ein Marken-Update verteilt sich von einem Punkt auf alle Flächen.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
      result: "Marken-Updates verteilen sich zentral; neue Seiten bleiben von selbst konsistent.",
      ctaLabel: "Nächstes Projekt",
      ctaTitle: "Ein konsistentes Designsystem für Ihre Marke?",
      ctaBlurb:
        "Bauen wir ein token-basiertes System, das Wachstum aushält. Eine kurze Notiz genügt.",
      ctaButton: "Mein Projekt starten",
    },
  },
};

export function getProjectDetail(
  locale: string,
  id: string
): ProjectDetail | undefined {
  const pack = projectDetails[locale] ?? projectDetails.en;
  const detail = pack[id] ?? projectDetails.en[id] ?? projectDetails.tr[id];
  if (!detail) return undefined;
  const gallery = detail.gallery ?? getProjectGallery(locale, id);
  return gallery ? { ...detail, gallery } : detail;
}
