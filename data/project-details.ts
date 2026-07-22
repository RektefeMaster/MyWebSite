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
        "ABD merkezli bir mobilya üreticisi için yüksek performanslı, SEO odaklı ve görsel olarak seçkin bir kurumsal web deneyimi kurduk. Üretim kalitesini yansıtan bir arayüzle marka, teklif ve iletişim tek akışta birleşti.",
      whatTitle: "Ne yaptık?",
      what: [
        "Markanın üretim kalitesini yansıtan özgün arayüz ve mikro animasyonlar.",
        "Mobil öncelikli, hızlı yüklenen ve dönüşüm odaklı sayfa yapısı.",
        "İçerik, medya ve SEO yönetimini kolaylaştıran panel entegrasyonu.",
        "Hizmet alanları, galeri ve teklif akışını tek sitede birleştirdik.",
        "Sertifika, referans ve üretim kapasitesi gibi güven unsurlarını net biçimde sunduk.",
        "Arama motorları için başlık, meta ve yapılandırılmış veri optimizasyonu yaptık.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi ürün ve hizmetleri net bir hiyerarşiyle gezer.",
        "İlgisini çeken alanda teklif formuna veya doğrudan iletişime yönlenir.",
        "İçerik paneli üzerinden sayfalar ve medya güncellenir.",
        "SEO ve performans ayarları yayın öncesi optimize edilir.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result:
        "Canlı site: seçkin kurumsal algı, hızlı mobil performans ve kolayca yönetilebilir içerik akışı.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Üretim markanız için böyle bir site mi istiyorsunuz?",
      ctaBlurb:
        "Üretim kalitenizi yansıtan, SEO odaklı ve teklif akışını netleştiren bir kurumsal site kuralım. Kısa bir özetten sonra net kapsam ve yol haritası çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    aydnnacar: {
      tag: "Marka & e katalog",
      summary:
        "Nacar Mobilya için minimal, editoryal bir dijital vitrin kurduk. Koleksiyonlar ve ürünler showroom hissiyle sunulur; her model isim, ölçü ve iletişim adımına net biçimde bağlanır.",
      whatTitle: "Ne yaptık?",
      what: [
        "Markaya özel tipografi ve sakin renk dili.",
        "Salon, yemek, yatak koleksiyonlarını öne çıkaran slider ve katalog yapısı.",
        "Ürün detayına giden net gezinme ve iletişim yolları.",
        "Mobilde de bozulmayan seçkin sunum.",
        "Koleksiyon bazlı filtreleme ile hızlı model karşılaştırma.",
        "Ölçü ve kumaş seçeneklerini net biçimde gösteren ürün kartları.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ana sayfa koleksiyon hikâyesiyle başlar, kataloga akar.",
        "Kullanıcı kategori seçerek modelleri inceler.",
        "Ölçü, kumaş ve teslimat için iletişim adımına yönlendirilir.",
        "İçerik güncellemeleri koleksiyon yapısı üzerinden ölçeklenir.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Canlı site: showroom hissi taşıyan katalog ve net iletişim yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Mobilya markanız için editoryal bir katalog mu istiyorsunuz?",
      ctaBlurb:
        "Koleksiyonlarınızı showroom hissiyle sunan, sakin ve seçkin bir dijital vitrin kuralım. Kısa bir özetten sonra net kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    wuffbutik: {
      tag: "Butik web",
      summary:
        "Wuuf Butik için sakin, şık ve yerel markaya uygun bir vitrin sitesi kurduk. Mağaza atmosferi ile uzaktan satış iletişimini WhatsApp üzerinden tek akışta birleştirdik.",
      whatTitle: "Ne yaptık?",
      what: [
        "Butik kimliğine uygun tipografi ve görsel dil.",
        "Koleksiyon, çizgiler ve iletişim odaklı net bilgi mimarisi.",
        "WhatsApp / mesaj butonlarıyla hızlı dönüşüm yolu.",
        "Hafif, hızlı ve mobilde akıcı arayüz.",
        "Ürün çizgilerini kategori bazlı gruplandıran net vitrin sayfaları.",
        "Mağaza konumu ve çalışma saatlerini ilk ekranda net gösterdik.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi markayı ve vitrini ilk ekranda anlar.",
        "Koleksiyon sayfalarından ürün çizgilerine geçer.",
        "Mesaj butonu ile doğrudan WhatsApp'a düşer.",
        "İçerik sade tutulduğu için güncelleme ve bakım kolaydır.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Canlı site: butik algısı ve WhatsApp üzerinden hızlı dönüşüm yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Butik markanız için vitrin ve WhatsApp dönüşümü mü istiyorsunuz?",
      ctaBlurb:
        "Mağaza atmosferini dijitale taşıyan, WhatsApp'a hızlı düşen bir vitrin sitesi kuralım. Kısa bir özetten sonra net kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "altitude-residence": {
      tag: "Lüks gayrimenkul",
      summary:
        "Altitude Private Residences için karanlık, editoryal bir lüks konut deneyimi kurduk. şehir silüeti, ritim ve randevu odaklı dönüşüm bir arada.",
      whatTitle: "Ne yaptık?",
      what: [
        "Ultra lüks markaya özel tipografi, görsel dil ve sinematik hero.",
        "Rezidans hikâyesini yükseklik / ritim metaforuyla anlatan sayfa akışı.",
        "“Görüntüleme randevusu” butonuyla net randevu ve satış yolu.",
        "Masaüstü ve mobilde bozulmayan seçkin sunum.",
        "Kat planları ve rezidans tiplerini net karşılaştırmalı sunduk.",
        "Şehir silüetini ve konum avantajlarını editoryal bir bölümde anlattık.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve yaşam vaadini editoryal bir karede kurar.",
        "Ziyaretçi rezidansları ve konum hikâyesini gezer.",
        "Buton doğrudan görüntüleme / iletişim adımına yönlendirir.",
        "İçerik ve medya markanın lüks tonunu koruyarak güncellenir.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Canlı site: seçkin algı, net randevu yolu, mobil uyum.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Lüks konut projeniz için görüntüleme odaklı bir site mi istiyorsunuz?",
      ctaBlurb:
        "Editoryal bir sunumla rezidans hikâyenizi anlatan, randevuya net akan bir deneyim kuralım. Kısa bir özetten sonra kapsam ve yol haritası çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "casa-aurelia": {
      tag: "Butik otel",
      summary:
        "Roma’da beş yıldızlı butik otel Casa Aurelia için sakin, atmosferik bir rezervasyon vitrini kurduk. İngilizce ve İtalyanca dil desteğiyle net bir booking yolu.",
      whatTitle: "Ne yaptık?",
      what: [
        "Otelin karakterini yansıtan sinematik hero ve tipografi.",
        "Rezervasyon odaklı net iletişim akışı.",
        "İngilizce ve İtalyanca dil seçimi.",
        "Mobilde de bozulmayan lüks sunum.",
        "Oda tiplerini ve olanaklarını (amenities) editoryal bir düzenle sunduk.",
        "Otelin Roma'daki konumunu ve çevresini harita destekli bölümle anlattık.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve Roma konumunu tek kompozisyonda anlatır.",
        "Ziyaretçi otel hikâyesini ve odaları gezer.",
        "Rezervasyon butonu rezervasyon / iletişime düşer.",
        "Dil anahtarıyla içerik İngilizce ↔ İtalyanca arasında geçer.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Canlı site: butik otel algısı, dil desteği, net rezervasyon yolu.",
      ctaLabel: "Sıradaki proje",
      ctaTitle:
        "Butik otel / konaklama markanız için böyle bir rezervasyon deneyimi mi istiyorsunuz?",
      ctaBlurb:
        "Atmosferik bir sunumla otel hikâyenizi anlatan, çok dilli ve rezervasyona net akan bir site kuralım. Kısa bir özetten sonra kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "seraphine-atelier": {
      tag: "Moda e ticaret",
      summary:
        "Séraphine Atelier için sis, film ve tipografiyle kurulan editoryal moda evi. Kadın / erkek lookbook, butik zemin hikâyesi ve özel fitting randevusuna giden net bir dönüşüm yolu. sepet değil, private hour.",
      whatTitle: "Ne yaptık?",
      what: [
        "Sinematik hero film, sis atmosferi ve couture tipografisiyle ilk ekranda marka vaadini kurduk.",
        "SS26 lookbook ritminde kadın koleksiyonunu altı look ile sunduk; parça adı, kesim ve fiyat editoryal hiyerarşide.",
        "Maison zeminini “her ray bir sahne” metaforuyla anlattık. butik fotoğrafları ve askılık kareleriyle güven inşa ettik.",
        "Erkek bölümünü karanlık runway grid’iyle ayırdık; blazer, takım ve overcoat parçalarını fiyatla birlikte sıraladık.",
        "Sayfa sonunda “Request a private hour” ile fitting / özel randevu CTA’sını netleştirdik.",
        "Masaüstü ve mobilde bozulmayan, sessiz lüks tonunda responsive sunum.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi sisli hero filmle markayı hisseder; Show Now / scroll ile boutique’e iner.",
        "Lookbook’ta kadın ve erkek parçalarını gezer; her kart isim, kesim ve fiyat taşır.",
        "Maison bölümü mağaza atmosferini anlatır. güven ve marka derinliği buradan gelir.",
        "Appointment bandı özel fitting randevusuna yönlendirir; satış yolu private hour üzerinden akar.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Canlı site: couture algı, lookbook ritmi ve private hour dönüşümü. Sessiz lüks tonu masaüstünden mobile kadar tutarlı kalır.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Benzer bir moda evi mi kurmak istiyorsunuz?",
      ctaBlurb:
        "Sinematik hero, lookbook ritmi ve randevu odaklı dönüşümü markanıza uyarlayalım. Kısa bir özetten sonra net kapsam ve yol haritası çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "havva-baklava": {
      tag: "Butik web",
      summary:
        "Köln Ehrenfeld’deki HAVVA Baklava için karanlık, sinematik bir vitrin. Gaziantep’ten Köln’e uzanan ustalık hikâyesi, günlük fiyat listesi ve WhatsApp üzerinden net sipariş yolu tek akışta.",
      whatTitle: "Ne yaptık?",
      what: [
        "Karanlık zemin, serif tipografi ve tepsi fotoğrafıyla ilk ekranda baklava atölyesi algısını kurduk.",
        "Gaziantep → Köln hikâyesini kaydırmalı hero panellerinde (Pistazie / Schicht für Schicht) anlattık.",
        "Werkstatt bölümünde el işçiliği, Antepfıstığı ve katkı maddesiz şerbet vaadini net maddelerle sunduk.",
        "Tageskarte / Preise ile fıstıklı, cevizli, şöbiyet, künefe ve tepsi fiyatlarını editoryal listede verdik.",
        "“Jetzt über WhatsApp bestellen” ile sipariş CTA’sını sayfanın dönüşüm noktası yaptık.",
        "Adres, saatler ve doğrudan WhatsApp numarası. Köln Ehrenfeld atölyesine net yol.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi hero’da atölyeyi ve ürünü hisseder; scroll ile marka hikâyesine iner.",
        "Werkstatt ve fiyat listesinde çeşit / kg fiyatı görür.",
        "WhatsApp butonu sipariş sohbetini açar. çeşit, miktar, saat.",
        "Atölye genelde 15 dakikada yanıtlar; hazır olunca abhol / teslim netleşir.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Canlı site: zanaatkâr baklava algısı, okunaklı fiyat listesi ve WhatsApp sipariş yolu. Masaüstünden mobile kadar aynı karanlık lüks ton.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Pastane veya atölye markanız için böyle bir sipariş vitrini mi istiyorsunuz?",
      ctaBlurb:
        "Ürün hikâyenizi, fiyat listenizi ve WhatsApp sipariş yolunu tek sinematik akışta kuralım. Kısa bir özetten sonra kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    mizan: {
      tag: "Estetik klinik",
      summary:
        "Nişantaşı’nda gülüş mimarisi stüdyosu MİZAN için milimetrik, editoryal bir dijital vitrin kurduk. Yüzün dengesini tasarlarız vaadi; kapalı ifade, ışık ve açılış ritmiyle ilk ekranda kurulur. Protokoller, atölye ve ilk ölçü randevusuna net akan bir deneyim.",
      whatTitle: "Ne yaptık?",
      what: [
        "Scroll ile ilerleyen gülüş filmi: kapalı ifade, ışık, açılış. yüzün cümlesini kare kare kurduk.",
        "Denge, oran ve sessizlik manifesto’sunu editoryal tipografiyle felsefe katmanına taşıdık.",
        "Protokol listesini klinik menü gibi değil, seçilmiş ritüeller olarak sunduk.",
        "Nişantaşı atölyesini sessiz lüks tonunda mekân kareleriyle anlattık.",
        "İlk ölçü / randevu CTA’sını dönüşüm noktası yaptık. soğuk form değil, konuşmaya davet.",
        "Masaüstü ve mobilde bozulmayan, milimetrik hiyerarşi ve sakin animasyon dili.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi hero’da MİZAN vaadini hisseder; kaydırınca gülüşün mimarisini izler.",
        "Felsefe ve protokoller markanın dilini kurar. iddia değil, ölçülebilir sakinlik.",
        "Atölye bölümü güven ve mekân derinliği verir.",
        "Randevu bandı ilk ölçü konuşmasına yönlendirir; satış yolu buradan akar.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Canlı site: gülüş mimarisi algısı, editoryal derinlik ve net randevu yolu. Sessiz lüks ton masaüstünden mobile kadar tutarlı kalır.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Estetik veya klinik markanız için böyle bir vitrin mi istiyorsunuz?",
      ctaBlurb:
        "Milimetrik tipografi, protokol hiyerarşisi ve randevuya net akan bir deneyim kuralım. Kısa bir özetten sonra kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "sahra-butik": {
      tag: "Butik web",
      summary:
        "Malatya’da Sahra Butik için lookbook odaklı bir kadın giyim vitrini kurduk. Günlükten tesettüre, spor çizgiden özel güne. parçayı lookbook’tan seç, mağazada dene; stok ve bedeni online sor.",
      whatTitle: "Ne yaptık?",
      what: [
        "Malatya kadın giyim kimliğine uygun sakin tipografi ve editoryal hero.",
        "Güncel modelleri kumaş, kalıp ve ruh haliyle gösteren lookbook grid’i.",
        "Günlük, spor ve tesettür mood’larını ayrı bölümlerde netleştirdik.",
        "Mağaza atmosferi ve stil kareleriyle fiziksel butiği dijitale taşıdık.",
        "Stok / beden sorusu için iletişim bandını dönüşüm noktası yaptık.",
        "Scroll bahçe / pin ritmiyle sayfaya nefes ve keşif hissi verdik.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "İlk ekran markayı ve Malatya konumunu tek kompozisyonda kurar.",
        "Ziyaretçi lookbook’tan model seçer; mood’lara göre gezer.",
        "Mağazada denemek veya stok sormak için iletişim adımına düşer.",
        "İçerik lookbook üzerinden güncellenir; vitrin canlı kalır.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Canlı site: lookbook ritmi, mağaza güveni ve online stok sorusu tek akışta. Yerel butik algısı mobilde de bozulmaz.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Butik markanız için lookbook ve stok yolu mu istiyorsunuz?",
      ctaBlurb:
        "Lookbook, mağaza denemesi ve online stok sorusunu tek vitrinde kuralım. Kısa bir özetten sonra kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "vela-skin-atelier": {
      tag: "Skin atelier",
      summary:
        "SoHo New York’ta VELA Skin Atelier için sakin, klinik soğukluğu olmayan bir randevu vitrini kurduk. Your skin is not a fixed thing. Observation first yaklaşımı, tedavi indeksi ve tek danışanlı stüdyo ritmi tek kompozisyonda.",
      whatTitle: "Ne yaptık?",
      what: [
        "Krem zemin, serif başlık ve terracotta vurguyla ilk ekranda atelier vaadini kurduk.",
        "Philosophy katmanında “yüz düzeltmiyoruz, cildi destekliyoruz” dilini editoryal olarak yerleştirdik.",
        "Reset, Sculpt, Renew, Restore, Frame protokollerini Skin Index’te net bir menü gibi sunduk.",
        "Featured ritual olarak VELA Reset’i süre, yatırım ve endikasyonla öne çıkardık.",
        "Treatment journal ve stüdyo bölümleriyle süreç ve mekân güvenini anlattık.",
        "Book a consultation CTA’sını sayfanın dönüşüm omurgası yaptık.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Ziyaretçi hero’da markayı ve SoHo konumunu hisseder.",
        "Philosophy ve Skin Index’te yaklaşımı ve ritüelleri okur.",
        "Reset ve stüdyo bölümleri güven ile randevu niyetini güçlendirir.",
        "Consultation butonu rezervasyon / konuşma adımına yönlendirir.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Canlı site: sakin atelier algısı, okunaklı tedavi indeksi ve net randevu yolu. Quiet luxury ton masaüstünden mobile kadar tutarlı.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Skin veya wellness markanız için böyle bir randevu vitrini mi istiyorsunuz?",
      ctaBlurb:
        "Observation first dil, tedavi indeksi ve randevuya net akan bir atelier deneyimi kuralım. Kısa bir özetten sonra kapsam çıkarırım.",
      ctaButton: "Projemi başlat",
    },
    "whatsapp-bot": {
      title: "WhatsApp Sohbet Asistanı",
      tag: "Otomasyon",
      summary:
        "Telefona bakmanıza gerek kalmadan WhatsApp’tan gelen müşteriyle sizin yerinize konuşur. Fiyatlarınızı ve hizmetlerinizi bilir. Randevu olmayan boş saatleri bilir, gelenleri oraya yönlendirir. Dolu saatleri de bilir, randevuları ona göre alır. İptal olunca boş kalan saati de bilir. Randevu saatinden 1 saat önce sahibine bildirim gider. son dakika iptallerinin önüne geçer. Soruları cevaplar, sizin gibi konuşur.",
      whatTitle: "Ne yaptık?",
      what: [
        "Fiyatlarınızı ve hizmetlerinizi bota yazdık; müşteri sorduğunda uydurmaz, sizin söylediğinizle cevaplar.",
        "Boş saatleri bilir: o saatte randevu yoksa müşteriyi oraya yönlendirir.",
        "Dolu saatleri bilir: o saatte zaten biri varsa yeni randevuyu oraya koymaz.",
        "İptal edilince boş kalan saati de bilir; yeni müşteriye o saati açar.",
        "Randevu saatinden 1 saat önce sahibine bildirim gönderir. unutma ve son dakika iptali azalır.",
        "Soru sorar, sorulara cevap verir; yetişemediği yerde size haber verir.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Müşteri WhatsApp’tan yazar. Bot sizin gibi karşılar, ne istediğini sorar.",
        "Fiyatı ve hizmeti anlatır. Boş saatleri gösterir, dolu olanlara dokunmaz.",
        "Müşteri saat seçince randevu alınır. İptal ederse o saat yine boşalır.",
        "Saatten 1 saat önce hatırlatma gider. İsterseniz her şey CRM paneline düşer.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Telefona yapışmadan iş yürür. Boş saatler dolar, dolu saatler çakışmaz, iptaller düzgün işler, 1 saat kala hatırlatma gider.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "İşletmeniz için WhatsApp randevu asistanı mı istiyorsunuz?",
      ctaBlurb:
        "Fiyatlarınızı, boş saatlerinizi ve randevu akışınızı öğrenen bir asistan kuralım. Kısa bir özetten sonra kapsamı netleştiririm.",
      ctaButton: "Projemi başlat",
    },
    "instagram-bot": {
      title: "Instagram DM Asistanı",
      tag: "Otomasyon",
      summary:
        "Instagram DM’de de aynı iş. Telefona bakmadan müşteriyle sizin gibi konuşur. Fiyat ve hizmetlerinizi bilir. Boş saatleri bilir, gelen randevuları oraya yönlendirir. Dolu saatleri bilir, ona göre alır. İptal olunca boş kalan saati de bilir. Saatten 1 saat önce randevu sahibine bildirim gider. Soru sorar, cevaplar.",
      whatTitle: "Ne yaptık?",
      what: [
        "DM’ye yazanın karşısına sizin adınıza çıkan sohbet kurduk.",
        "Fiyat ve hizmet cevapları WhatsApp’takiyle aynı. iki yerde farklı şey söylemez.",
        "Boş saatleri bilir, randevuyu oraya alır. Dolu saatlere koymaz.",
        "İptal olunca boş kalan saati açar. Saatten 1 saat önce hatırlatma gönderir.",
        "Botun yetmediği konuşmaları size veya CRM’e iletir.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Birisi Instagram’dan DM atar. Bot karşılar, gerekirse soru sorar, fiyatı anlatır.",
        "Randevu isteyince boş saatleri gösterir, doluları göstermez. Seçilen saat kaydolur.",
        "İptal olursa o saat yine boşalır. Saatten 1 saat önce hatırlatma gider.",
        "WhatsApp asistanıyla aynı takvimi kullanır; isterseniz CRM’de birleşir.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "Instagram DM’si dağılmaz: sorular cevaplanır, randevular boş saatlere yazılır, 1 saat kala hatırlatma gider. telefona bakmadan.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Instagram DM'leriniz için aynı asistanı mı istiyorsunuz?",
      ctaBlurb:
        "WhatsApp'takiyle aynı takvimi kullanan, DM'lerinizi dağıtmayan bir asistan kuralım. Kısa bir özetten sonra kapsamı netleştiririm.",
      ctaButton: "Projemi başlat",
    },
    crm: {
      title: "CRM Satış Paneli",
      tag: "Yazılım",
      summary:
        "WhatsApp ve Instagram asistanlarıyla birlikte çalışan panel. Botların konuştuğu müşteriler, aldığı randevular, iptaller ve notlar tek yerde. Kim ne zaman gelecek, hangi saat boş, hangi saat dolu, WhatsApp’tan mı Instagram’dan mı geldi. hepsi orada görünür.",
      whatTitle: "Ne yaptık?",
      what: [
        "Satışın adım adım ilerlediği sade bir panel kurduk.",
        "WhatsApp ve Instagram botlarını bağladık: randevu alınca kart kendiliğinden açılır.",
        "Kartta kanal, saat, boş/dolu durumu, notlar ve konuşma özeti durur.",
        "Bugün kim gelecek, kim iptal etti, hangi saatler boş. hepsi panelden okunur.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Bot boş bir saate randevu yazınca panelde kart oluşur. telefonda olmasanız bile.",
        "Kartı ilerletir, not ekler, kime ait olduğunu seçersiniz. WhatsApp veya Instagram özeti aynı müşteride kalır.",
        "İptal olunca o saat yine boşalır; panel de güncellenir.",
        "İki bot ayrı yerde konuşur, CRM’de her şey tek listede toplanır.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Botlar konuşur, boş saatleri doldurur, 1 saat kala hatırlatır; CRM hepsini bir yerde tutar. Siz yokken sistem dolmaya devam eder.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Botlarınızla konuşan bir CRM paneli mi istiyorsunuz?",
      ctaBlurb:
        "WhatsApp ve Instagram asistanlarınızın topladığı randevu ve müşterileri tek panelde toplayalım. Kısa bir özetten sonra kapsamı netleştiririm.",
      ctaButton: "Projemi başlat",
    },
    "css-system": {
      tag: "Tasarım sistemi",
      summary:
        "Markaya özel renk, tipografi, bileşen ve boşluk kurallarıyla tutarlı arayüz üreten bir CSS tasarım sistemi kurduk. Token'lar tek kaynaktan yönetilir; web ve panel aynı görsel dili konuşur.",
      whatTitle: "Ne yaptık?",
      what: [
        "Color, type, radius ve spacing token’ları.",
        "Primary / accent / ghost buton ve temel bileşenler.",
        "Dokümantasyon ve örnek kullanım yüzeyi.",
        "Web ve panelde aynı dilin tekrarını sağlar.",
        "Karanlık / aydınlık tema desteği için token katmanı.",
        "Yeni bileşenlerin token'lara bağlı kalarak hızlı üretilmesini sağladık.",
      ],
      howTitle: "Nasıl çalışıyor?",
      how: [
        "Token’lar tek kaynaktan (:root / theme) yönetilir.",
        "Bileşenler bu token’ları kullanarak üretilir.",
        "Yeni sayfa eklerken stil dağılmaz, hız artar.",
        "Marka güncellemesi tek noktadan yayılır.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
      result:
        "Sonuç: marka güncellemesi tek noktadan yayılır, yeni sayfalar stil dağılmadan hızla üretilir.",
      ctaLabel: "Sıradaki proje",
      ctaTitle: "Markanız için tutarlı bir tasarım sistemi mi istiyorsunuz?",
      ctaBlurb:
        "Token tabanlı, ölçeklenebilir bir CSS tasarım sistemi kuralım; web ve panelinizde aynı dili konuşsun. Kısa bir özetten sonra kapsamı netleştiririm.",
      ctaButton: "Projemi başlat",
    },
  },
  en: {
    wcc: {
      tag: "Corporate web",
      summary:
        "A high performance, SEO ready, premium corporate site for a US furniture manufacturer. An interface that reflects manufacturing quality brings brand, quote, and contact into one flow.",
      whatTitle: "What we built",
      what: [
        "Custom UI and micro animations that reflect manufacturing quality.",
        "Mobile first, fast loading, conversion focused page structure.",
        "CMS integration that simplifies content, media, and SEO management.",
        "Services, gallery, and quote flow unified in one site.",
        "Trust signals. certifications, references, production capacity. presented clearly.",
        "Title, meta, and structured data optimization for search engines.",
      ],
      howTitle: "How it works",
      how: [
        "Visitors browse products and services in a clear hierarchy.",
        "Interested visitors move straight to the quote form or contact.",
        "Pages and media update from the admin panel.",
        "SEO and performance are tuned before launch.",
      ],
      stack: ["React", "Vite", "TypeScript"],
      result:
        "Live site: premium corporate feel, fast mobile performance, and an easily managed content flow.",
      ctaLabel: "Up next",
      ctaTitle: "Need a site like this for a manufacturing brand?",
      ctaBlurb:
        "If production quality has to show online, and quotes need a clear path, send a short brief. I’ll reply with scope and next steps.",
      ctaButton: "Start my project",
    },
    aydnnacar: {
      tag: "Brand & catalogue",
      summary:
        "A minimal editorial digital showroom for Nacar Mobilya. collections and products presented with a premium feel, with every model tied cleanly to size, name, and contact.",
      whatTitle: "What we built",
      what: [
        "Custom type and calm colour language.",
        "Collection slider and catalogue structure across living, dining, and bedroom lines.",
        "Clear paths to product detail and contact.",
        "Premium presentation that holds on mobile.",
        "Collection based filtering for fast model comparison.",
        "Product cards that show size and fabric options clearly.",
      ],
      howTitle: "How it works",
      how: [
        "Homepage opens with collection story, then flows into the catalogue.",
        "Visitors filter by category and browse models.",
        "Size, fabric, and delivery questions route through contact.",
        "Content scales through the collection structure.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Live site: a catalogue with showroom feel and a clear contact path.",
      ctaLabel: "Up next",
      ctaTitle: "Need an editorial catalogue for furniture?",
      ctaBlurb:
        "Collections, measurements, contact, presented like a showroom. Send a brief and I’ll outline the build.",
      ctaButton: "Start my project",
    },
    wuffbutik: {
      tag: "Boutique web",
      summary:
        "A calm, elegant boutique site for Wuuf. store presence and WhatsApp led remote sales brought into one flow.",
      whatTitle: "What we built",
      what: [
        "Brand fit typography and visuals.",
        "Clear IA for collections and contact.",
        "WhatsApp / message CTAs for fast conversion.",
        "Light, fast mobile UI.",
        "Showcase pages grouped by product line for clear browsing.",
        "Store location and hours shown clearly on the first screen.",
      ],
      howTitle: "How it works",
      how: [
        "First screen explains the brand and showcase.",
        "Visitors move into collection lines.",
        "Message CTA opens WhatsApp directly.",
        "Lean content keeps updates easy.",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      result: "Live site: boutique feel with a fast WhatsApp conversion path.",
      ctaLabel: "Up next",
      ctaTitle: "Need a boutique site that converts on WhatsApp?",
      ctaBlurb:
        "Store atmosphere online, chat path that actually gets used. Send a brief, I’ll map the scope.",
      ctaButton: "Start my project",
    },
    "altitude-residence": {
      tag: "Luxury real estate",
      summary:
        "A dark, editorial luxury residence experience for Altitude. city skyline, tempo, and viewing led conversion working together.",
      whatTitle: "What we built",
      what: [
        "Ultra luxury typography, visual language, and cinematic hero.",
        "Page flow that tells the residence story through height and tempo.",
        "Clear path via Arrange a viewing CTA.",
        "Premium presentation on desktop and mobile.",
        "Floor plans and residence types presented in clear comparison.",
        "City skyline and location advantages told in a dedicated editorial section.",
      ],
      howTitle: "How it works",
      how: [
        "First screen sets brand and lifestyle promise.",
        "Visitors explore residences and location story.",
        "CTA routes to viewing / contact.",
        "Content stays true to the luxury tone.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live site: premium feel, clear viewing path, mobile polish.",
      ctaLabel: "Up next",
      ctaTitle: "Need a viewing led site for a residence project?",
      ctaBlurb:
        "Story first, appointment second, without the fluff. Send a brief and I’ll come back with a plan.",
      ctaButton: "Start my project",
    },
    "casa-aurelia": {
      tag: "Boutique hotel",
      summary:
        "An atmospheric booking showcase for five star boutique hotel Casa Aurelia in Rome. with English/Italian support and a clear path to booking.",
      whatTitle: "What we built",
      what: [
        "Cinematic hero and typography that match the hotel’s character.",
        "Book now focused reservation / contact flow.",
        "English and Italian language switch.",
        "Luxury presentation that holds on mobile.",
        "Room types and amenities presented in an editorial layout.",
        "Rome location and surroundings told through a map supported section.",
      ],
      howTitle: "How it works",
      how: [
        "First screen tells brand and Rome location in one frame.",
        "Visitors browse the hotel story and rooms.",
        "Book now CTA leads to reservation / contact.",
        "Language toggle switches Eng ↔ Ita content.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result: "Live site: boutique hotel feel, bilingual, clear booking path.",
      ctaLabel: "Up next",
      ctaTitle: "Need a booking site for a boutique hotel?",
      ctaBlurb:
        "Atmosphere, language support, a clean path to book. Send a brief, I’ll outline what that takes.",
      ctaButton: "Start my project",
    },
    "seraphine-atelier": {
      tag: "Fashion e commerce",
      summary:
        "An editorial fashion house for Séraphine Atelier. mist, film, and typography. Women/men lookbook, maison floor story, and a clear path to a private fitting. not a cart, a private hour.",
      whatTitle: "What we built",
      what: [
        "Cinematic hero film, mist atmosphere, and couture typography that set the brand promise on first paint.",
        "SS26 lookbook pacing for the women’s collection. six looks with name, cut, and price in editorial hierarchy.",
        "Maison floor told as “every rail is a scene”. boutique stills that build trust and depth.",
        "Men’s section separated with a dark runway grid; blazers, suits, and overcoats listed with price.",
        "Closing “Request a private hour” CTA that makes the fitting / appointment path unmistakable.",
        "Quiet luxury presentation that holds on desktop and mobile.",
      ],
      howTitle: "How it works",
      how: [
        "Visitors feel the brand through the misty hero film, then descend into boutique via Show Now / scroll.",
        "Lookbook lets them browse women’s and men’s pieces. each card carries name, cut, and price.",
        "Maison section stages the store atmosphere; trust and brand depth land here.",
        "Appointment band routes to a private fitting. conversion flows through private hour, not a cart.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Live site: couture feel, lookbook rhythm, and private hour conversion. Quiet luxury tone stays consistent from desktop to mobile.",
      ctaLabel: "Up next",
      ctaTitle: "Need a fashion house site in this register?",
      ctaBlurb:
        "Hero, lookbook rhythm, appointments that convert. Send a brief and I’ll sketch the scope.",
      ctaButton: "Start my project",
    },
    "havva-baklava": {
      tag: "Boutique web",
      summary:
        "A dark, cinematic showcase for HAVVA Baklava in Köln Ehrenfeld. craft story from Gaziantep to Cologne, daily price list, and a clear WhatsApp order path in one flow.",
      whatTitle: "What we built",
      what: [
        "Dark ground, serif type, and tray photography that set the baklava workshop feel on first paint.",
        "Gaziantep → Cologne told across scrollable hero panels (pistachio / layer by layer).",
        "Werkstatt block with clear claims: handwork, Antepfıstığı, syrup without additives.",
        "Tageskarte / Preise listing fıstıklı, cevizli, şöbiyet, künefe, and tray prices editorially.",
        "“Order via WhatsApp now” as the page’s conversion hinge.",
        "Address, hours, and direct WhatsApp number. a clear path to the Ehrenfeld workshop.",
      ],
      howTitle: "How it works",
      how: [
        "Visitors feel the workshop and product in the hero, then scroll into the brand story.",
        "Werkstatt and price list show varieties and per kg pricing.",
        "WhatsApp CTA opens the order chat. variety, quantity, pickup time.",
        "Workshop typically replies within ~15 minutes; pickup / delivery is confirmed when ready.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Live site: artisan baklava feel, readable price list, WhatsApp order path. Dark luxury tone holds from desktop to mobile.",
      ctaLabel: "Up next",
      ctaTitle: "Need an order showcase like this for a bakery or workshop?",
      ctaBlurb:
        "Product story, price list, WhatsApp ordering in one cinematic flow. Send a brief, I’ll outline the scope.",
      ctaButton: "Start my project",
    },
    mizan: {
      tag: "Aesthetic clinic",
      summary:
        "An editorial digital presence for MİZAN, a smile architecture studio in Nişantaşı. The promise We design the balance of the face lands in the first frame through closed expression, light, and opening. Protocols, atelier, and first measurement booking in one clear path.",
      whatTitle: "What we built",
      what: [
        "A scroll smile film: closed expression, light, opening. the face’s sentence built frame by frame.",
        "Balance, proportion, and silence carried into a philosophy layer with editorial type.",
        "Protocols presented as chosen rituals, not a cold clinic menu.",
        "The Nişantaşı atelier told through quiet luxury space photography.",
        "First measurement / booking CTA as the conversion hinge. an invitation to talk, not a cold form.",
        "Millimetric hierarchy and calm motion that holds on desktop and mobile.",
      ],
      howTitle: "How it works",
      how: [
        "Visitors feel the MİZAN promise in the hero, then watch smile architecture on scroll.",
        "Philosophy and protocols set the brand language. measurable calm, not loud claims.",
        "The atelier block builds trust and spatial depth.",
        "The booking band routes to the first measurement conversation.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Live site: smile architecture feel, editorial depth, clear booking path. Quiet luxury tone holds from desktop to mobile.",
      ctaLabel: "Up next",
      ctaTitle: "Need a presence like this for an aesthetic or clinic brand?",
      ctaBlurb:
        "Millimetric type, protocol hierarchy, and a path that ends in a booking conversation. Send a brief, I’ll outline the scope.",
      ctaButton: "Start my project",
    },
    "sahra-butik": {
      tag: "Boutique web",
      summary:
        "A lookbook led women’s wear showcase for Sahra Butik in Malatya. From daily to tesettür, sport line to special day. pick in the lookbook, try in store, ask stock and size online.",
      whatTitle: "What we built",
      what: [
        "Calm typography and an editorial hero fit for Malatya women’s wear.",
        "A lookbook grid that shows current models with fabric, cut, and mood.",
        "Daily, sport, and tesettür moods clarified in dedicated sections.",
        "Boutique atmosphere and style frames that bring the physical store online.",
        "Contact band for stock / size questions as the conversion hinge.",
        "Scroll garden / pin rhythm for breath and discovery through the page.",
      ],
      howTitle: "How it works",
      how: [
        "First screen sets brand and Malatya location in one composition.",
        "Visitors pick models in the lookbook and browse by mood.",
        "Try in store or ask stock routes through contact.",
        "Content updates through the lookbook keep the showcase alive.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Live site: lookbook rhythm, store trust, and online stock questions in one flow. Local boutique feel holds on mobile.",
      ctaLabel: "Up next",
      ctaTitle: "Need a lookbook and stock path for your boutique?",
      ctaBlurb:
        "Lookbook, in store try on, and online stock questions in one showcase. Send a brief, I’ll outline the scope.",
      ctaButton: "Start my project",
    },
    "vela-skin-atelier": {
      tag: "Skin atelier",
      summary:
        "A calm booking showcase for VELA Skin Atelier in SoHo, New York. Your skin is not a fixed thing. Observation first care, a considered treatment index, and a one client studio rhythm in one composition.",
      whatTitle: "What we built",
      what: [
        "Cream ground, serif headline, and terracotta accent that set the atelier promise on first paint.",
        "Philosophy layer: we do not correct faces, we support skin. told editorially.",
        "Reset, Sculpt, Renew, Restore, Frame presented clearly in the Skin Index.",
        "VELA Reset featured with duration, investment, and best for cues.",
        "Treatment journal and studio sections that build process and place trust.",
        "Book a consultation as the conversion spine of the page.",
      ],
      howTitle: "How it works",
      how: [
        "Visitors feel the brand and SoHo location in the hero.",
        "Philosophy and Skin Index explain approach and rituals.",
        "Reset and studio sections strengthen trust and booking intent.",
        "Consultation CTA routes to the reservation conversation.",
      ],
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
      result:
        "Live site: calm atelier feel, readable treatment index, clear booking path. Quiet luxury tone holds from desktop to mobile.",
      ctaLabel: "Up next",
      ctaTitle: "Need a booking showcase like this for a skin or wellness brand?",
      ctaBlurb:
        "Observation first language, treatment index, and a path that ends in consultation. Send a brief, I’ll outline the scope.",
      ctaButton: "Start my project",
    },
    "whatsapp-bot": {
      title: "WhatsApp Conversation Assistant",
      tag: "Automation",
      summary:
        "Talks to WhatsApp customers for you so you don’t have to watch your phone. Knows your prices and services. Knows free hours with no appointment and directs people there. Knows busy hours and books around them. Knows when a cancel frees a slot again. Sends a reminder 1 hour before to the appointment holder. cuts last minute no shows. Asks and answers questions, talks like you.",
      whatTitle: "What we built",
      what: [
        "Your prices and services are in the bot. it doesn’t make numbers up.",
        "It knows free hours: if nothing is booked, it sends people there.",
        "It knows busy hours: if someone already has that slot, it won’t double book.",
        "When someone cancels, it knows that hour is free again and can offer it.",
        "1 hour before the appointment it notifies the holder. fewer last minute cancels.",
        "It asks and answers questions; harder cases go to you.",
      ],
      howTitle: "How it works",
      how: [
        "Customer messages WhatsApp. Bot greets like you and asks what they need.",
        "It explains price and service. Shows free hours, skips busy ones.",
        "They pick a time, it’s booked. Cancel and that hour opens again.",
        "Reminder goes out 1 hour before. Optionally everything lands in CRM.",
      ],
      stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
      result:
        "Work keeps moving without you on the phone. Free hours fill, busy ones don’t clash, cancels free slots cleanly, reminder goes out 1 hour before.",
      ctaLabel: "Up next",
      ctaTitle: "Need a WhatsApp assistant for bookings?",
      ctaBlurb:
        "Prices, free hours, reminders, without living on your phone. Send a brief and I’ll scope the setup.",
      ctaButton: "Start my project",
    },
    "instagram-bot": {
      title: "Instagram DM Assistant",
      tag: "Automation",
      summary:
        "Same thing in Instagram DMs. Talks like you without watching your phone. Knows prices and services. Knows free hours and sends bookings there. Knows busy hours and books around them. Knows when a cancel frees a slot. Reminder 1 hour before. Asks and answers questions.",
      whatTitle: "What we built",
      what: [
        "Chat that greets DMs in your name.",
        "Same prices and services as WhatsApp. no mismatch between channels.",
        "Knows free hours and books there. Won’t put people on busy hours.",
        "Cancel frees the hour. Reminder 1 hour before.",
        "Hard chats go to you or CRM.",
      ],
      howTitle: "How it works",
      how: [
        "Someone DMs. Bot greets, asks if needed, explains prices.",
        "For booking it shows free hours, not busy ones. Chosen time is saved.",
        "Cancel opens that hour again. Reminder 1 hour before.",
        "Same calendar as WhatsApp; can merge in CRM.",
      ],
      stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
      result:
        "DM inbox stays tidy: questions answered, bookings on free hours, reminder 1 hour before. without watching your phone.",
      ctaLabel: "Up next",
      ctaTitle: "Need the same assistant in Instagram DMs?",
      ctaBlurb:
        "Same calendar as WhatsApp, cleaner inbox. Send a brief, I’ll scope it.",
      ctaButton: "Start my project",
    },
    crm: {
      title: "CRM Sales Panel",
      tag: "Software",
      summary:
        "Panel that works with the WhatsApp and Instagram assistants. Customers the bots talked to, appointments, cancels, and notes in one place. Who’s coming when, which hours are free or busy, WhatsApp or Instagram. all there.",
      whatTitle: "What we built",
      what: [
        "A plain sales panel that moves step by step.",
        "WhatsApp and Instagram bots linked: booking opens a card on its own.",
        "Card shows channel, time, free/busy, notes, and chat summary.",
        "Who’s coming today, who cancelled, what’s still free. readable on the panel.",
      ],
      howTitle: "How it works",
      how: [
        "Bot books a free hour → card appears, even if you’re not on the phone.",
        "You move the card, add notes, assign owner. WhatsApp or Instagram summary stays on the same customer.",
        "Cancel frees the hour; panel updates too.",
        "Two bots talk in different places; CRM keeps one list.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      result:
        "Bots talk, fill free hours, remind 1 hour before; CRM keeps it all in one place. While you’re away, the system keeps filling.",
      ctaLabel: "Up next",
      ctaTitle: "Need a CRM that sits with your bots?",
      ctaBlurb:
        "Bookings and customers from WhatsApp and Instagram, in one place. Send a brief and I’ll outline the panel.",
      ctaButton: "Start my project",
    },
    "css-system": {
      tag: "Design system",
      summary:
        "A CSS design system with brand tokens for colour, type, components, and spacing. a single source that keeps web and admin UI speaking the same visual language.",
      whatTitle: "What we built",
      what: [
        "Colour, type, radius, and spacing tokens.",
        "Primary / accent / ghost buttons and base components.",
        "Docs and example surface.",
        "Same language across web and admin UI.",
        "A token layer that supports dark / light theming.",
        "New components stay token bound, so they ship fast without drifting.",
      ],
      howTitle: "How it works",
      how: [
        "Tokens live in one source (:root / theme).",
        "Components consume those tokens.",
        "New pages stay consistent and ship faster.",
        "Brand updates propagate from one place.",
      ],
      stack: ["CSS Custom Properties", "Design Tokens"],
      result:
        "Result: brand updates propagate from one place, and new pages ship fast without style drift.",
      ctaLabel: "Up next",
      ctaTitle: "Need a design system your team can actually use?",
      ctaBlurb:
        "Tokens, components, docs, web and admin speaking the same language. Send a brief and I’ll scope it.",
      ctaButton: "Start my project",
    },
  },
};

// ES/DE fall back to EN if missing keys — fill with EN copies for completeness
projectDetails.es = { ...projectDetails.en };
projectDetails.de = { ...projectDetails.en };

projectDetails.es = {
  wcc: {
    tag: "Web corporativa",
    summary:
      "Sitio corporativo de alto rendimiento, preparado para SEO y visualmente selecto para un fabricante de mobiliario en EE. UU. Una interfaz que refleja la calidad de fabricación une marca, presupuesto y contacto en un solo flujo.",
    whatTitle: "Qué hicimos",
    what: [
      "UI y microanimaciones a medida que reflejan la calidad de fabricación.",
      "Estructura mobile first, rápida y orientada a conversión.",
      "Integración de panel que simplifica contenido, medios y SEO.",
      "Servicios, galería y flujo de presupuesto unidos en un solo sitio.",
      "Señales de confianza. certificaciones, referencias, capacidad de producción. presentadas con claridad.",
      "Optimización de títulos, meta y datos estructurados para buscadores.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El visitante recorre productos y servicios con jerarquía clara.",
      "Quien se interesa pasa directo al formulario de presupuesto o contacto.",
      "Páginas y medios se actualizan desde el panel.",
      "SEO y rendimiento se optimizan antes del lanzamiento.",
    ],
    stack: ["React", "Vite", "TypeScript"],
    result:
      "Sitio en vivo: sensación corporativa selecta, rendimiento móvil rápido y contenido fácil de gestionar.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un sitio así para su marca de fabricación?",
    ctaBlurb:
      "Construyamos un sitio corporativo que refleje su calidad de producción, se mantenga preparado para SEO y deje clara la ruta de presupuesto. Envíe Un brief corto, devolveré alcance y hoja de ruta claros.",
    ctaButton: "Empezar mi proyecto",
  },
  aydnnacar: {
    tag: "Marca y catálogo",
    summary:
      "Escaparate digital editorial y minimalista para Nacar Mobilya. colecciones y productos con sensación de showroom, donde cada modelo se conecta con claridad a medida, nombre y contacto.",
    whatTitle: "Qué hicimos",
    what: [
      "Tipografía y color propios de la marca, en tono calmado.",
      "Slider de colecciones y catálogo de salón, comedor y dormitorio.",
      "Rutas claras a detalle de producto y contacto.",
      "Presentación selecta que se sostiene en móvil.",
      "Filtrado por colección para comparar modelos rápido.",
      "Tarjetas de producto que muestran medida y tela con claridad.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La home abre con la historia de colección y fluye al catálogo.",
      "El usuario filtra por categoría y ve modelos.",
      "Medida, tela y entrega se resuelven por contacto.",
      "El contenido escala con la estructura de colecciones.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    result: "Sitio en vivo: catálogo con sensación de showroom y ruta de contacto clara.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un catálogo editorial para su marca de mobiliario?",
    ctaBlurb:
      "Construyamos un showroom digital calmado y selecto que presente sus colecciones con verdadera sensación de tienda. Envíe un brief corto y devolveré un alcance claro.",
    ctaButton: "Empezar mi proyecto",
  },
  wuffbutik: {
    tag: "Web boutique",
    summary:
      "Sitio boutique elegante y calmado para Wuuf. presencia de tienda y venta remota por WhatsApp en un solo flujo.",
    whatTitle: "Qué hicimos",
    what: [
      "Lenguaje visual y tipografía acorde a la boutique.",
      "Arquitectura clara de colecciones y contacto.",
      "Botones de WhatsApp / mensaje para conversión rápida.",
      "UI ligera y rápida en móvil.",
      "Páginas de vitrina agrupadas por línea de producto.",
      "Ubicación de tienda y horarios visibles en la primera pantalla.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla explica marca y vitrina.",
      "El visitante entra en las líneas de colección.",
      "El botón de mensaje abre WhatsApp directamente.",
      "Contenido ligero = mantenimiento fácil.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    result: "Sitio en vivo: sensación boutique con ruta de conversión rápida por WhatsApp.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un escaparate con conversión por WhatsApp para su boutique?",
    ctaBlurb:
      "Llevemos la atmósfera de su tienda a digital con una vitrina que cae directo a WhatsApp. Envíe un brief corto y devolveré un alcance claro.",
    ctaButton: "Empezar mi proyecto",
  },
  "altitude-residence": {
    tag: "Inmobiliaria de lujo",
    summary:
      "Experiencia editorial oscura de residencia de lujo para Altitude. skyline, ritmo y conversión a visita, todo en conjunto.",
    whatTitle: "Qué hicimos",
    what: [
      "Tipografía y hero cinematográfico de ultra lujo.",
      "Flujo que cuenta la residencia con metáfora de altura y tempo.",
      "Botón “Agendar visita” hacia cita / contacto.",
      "Presentación cuidada en escritorio y móvil.",
      "Planos y tipos de residencia presentados en comparación clara.",
      "Skyline de la ciudad y ventajas de ubicación en una sección editorial dedicada.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla fija marca y promesa de vida.",
      "El visitante explora residencias e historia de ubicación.",
      "El botón lleva a visita / contacto.",
      "El contenido mantiene el tono de lujo.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Sitio en vivo: sensación cuidada, ruta de visita clara, móvil pulido.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un sitio orientado a visitas para su proyecto de residencia de lujo?",
    ctaBlurb:
      "Construyamos una experiencia editorial que cuente la historia de su residencia y fluya con claridad hacia una cita de visita. Envíe un brief corto y devolveré alcance y hoja de ruta.",
    ctaButton: "Empezar mi proyecto",
  },
  "casa-aurelia": {
    tag: "Hotel boutique",
    summary:
      "Escaparate atmosférico de reserva para el hotel boutique de cinco estrellas Casa Aurelia en Roma. con soporte en inglés/italiano y ruta clara a reserva.",
    whatTitle: "Qué hicimos",
    what: [
      "Hero cinematográfico y tipografía acorde al hotel.",
      "Flujo de reserva hacia contacto.",
      "Selector de idioma inglés e italiano.",
      "Presentación de lujo también en móvil.",
      "Tipos de habitación y amenities en un diseño editorial.",
      "Ubicación en Roma y alrededores contados con una sección apoyada en mapa.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla cuenta marca y ubicación en Roma.",
      "El visitante recorre la historia del hotel y las habitaciones.",
      "El botón de reserva lleva a reserva / contacto.",
      "El interruptor de idioma cambia Eng ↔ Ita.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Sitio en vivo: sensación boutique, bilingüe, ruta de reserva clara.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere una experiencia de reserva así para su marca de hotel boutique?",
    ctaBlurb:
      "Contemos la historia de su hotel con atmósfera, en varios idiomas, con una ruta clara a la reserva. Envíe un brief corto y devolveré un alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  "seraphine-atelier": {
    tag: "Moda e commerce",
    summary:
      "Casa de moda editorial para Séraphine Atelier. niebla, film y tipografía. Lookbook mujer/hombre, suelo maison y ruta clara a un fitting privado. no un carrito, una private hour.",
    whatTitle: "Qué hicimos",
    what: [
      "Hero cinematográfico, atmósfera de niebla y tipografía couture que fija la promesa de marca al primer pantallazo.",
      "Ritmo de lookbook SS26 para la colección mujer. seis looks con nombre, corte y precio en jerarquía editorial.",
      "Suelo maison contado como “cada rail es una escena”. fotos de boutique que construyen confianza.",
      "Sección hombre separada con runway grid oscuro; blazers, trajes y abrigos con precio.",
      "CTA final “Request a private hour” que deja inequívoca la ruta de fitting / cita.",
      "Presentación quiet luxury que se sostiene en escritorio y móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El visitante siente la marca con el hero de niebla y baja al boutique con Show Now / scroll.",
      "El lookbook muestra piezas mujer y hombre. cada tarjeta lleva nombre, corte y precio.",
      "La sección maison escenifica la tienda; ahí aterrizan confianza y profundidad de marca.",
      "La banda de appointment lleva al fitting privado. la conversión fluye por private hour, no por carrito.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Sitio en vivo: sensación couture, ritmo lookbook y conversión private hour. El tono quiet luxury se mantiene de escritorio a móvil.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere una casa de moda así?",
    ctaBlurb:
      "Adaptamos hero cinematográfico, ritmo de lookbook y conversión por cita a su marca. Envíe Un brief corto, devolveré alcance y hoja de ruta claros.",
    ctaButton: "Empezar mi proyecto",
  },
  "havva-baklava": {
    tag: "Web boutique",
    summary:
      "Escaparate cinematográfico oscuro para HAVVA Baklava en Köln Ehrenfeld. historia artesanal de Gaziantep a Colonia, carta de precios y ruta clara de pedido por WhatsApp en un solo flujo.",
    whatTitle: "Qué hicimos",
    what: [
      "Fondo oscuro, tipografía serif y foto de bandeja que fijan el taller de baklava al primer pantallazo.",
      "Gaziantep → Colonia contada en paneles hero con scroll (pistacho / capa a capa).",
      "Bloque Werkstatt con promesas claras: a mano, Antepfıstığı, jarabe sin aditivos.",
      "Tageskarte / Preise con fıstıklı, cevizli, şöbiyet, künefe y precios de bandeja en lista editorial.",
      "“Pedir ahora por WhatsApp” como eje de conversión de la página.",
      "Dirección, horario y número de WhatsApp. camino claro al taller en Ehrenfeld.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El visitante siente el taller y el producto en el hero; con el scroll entra en la historia de marca.",
      "Werkstatt y la carta muestran variedades y precio por kg.",
      "El CTA de WhatsApp abre el chat de pedido. variedad, cantidad, hora de recogida.",
      "El taller suele responder en ~15 minutos; se confirma recogida / entrega cuando está listo.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Sitio en vivo: sensación artesanal, carta legible y ruta de pedido por WhatsApp. El tono de lujo oscuro se sostiene de escritorio a móvil.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un escaparate de pedidos así para su pastelería o taller?",
    ctaBlurb:
      "Historia del producto, carta de precios y pedido por WhatsApp en un solo flujo cinematográfico. Envíe Un brief corto, le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  mizan: {
    tag: "Clínica estética",
    summary:
      "Presencia digital editorial para MİZAN, estudio de arquitectura de la sonrisa en Nişantaşı. La promesa Diseñamos el equilibrio del rostro se fija en el primer fotograma con expresión cerrada, luz y apertura. Protocolos, atelier y primera medida en una ruta clara.",
    whatTitle: "Qué hicimos",
    what: [
      "Film de sonrisa con scroll: expresión cerrada, luz, apertura. la frase del rostro fotograma a fotograma.",
      "Equilibrio, proporción y silencio llevados a una capa de filosofía con tipografía editorial.",
      "Protocolos presentados como rituales elegidos, no como menú clínico frío.",
      "El atelier de Nişantaşı contado con fotografía de espacio en tono de lujo silencioso.",
      "CTA de primera medida / cita como eje de conversión. invitación a hablar, no un formulario frío.",
      "Jerarquía milimétrica y movimiento calmado que se sostiene en escritorio y móvil.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El visitante siente la promesa MİZAN en el hero y ve la arquitectura de la sonrisa al hacer scroll.",
      "Filosofía y protocolos fijan el lenguaje de marca. calma medible, no gritos.",
      "El bloque del atelier construye confianza y profundidad espacial.",
      "La banda de cita conduce a la conversación de primera medida.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Sitio en vivo: sensación de arquitectura de la sonrisa, profundidad editorial y ruta clara a cita. El tono de lujo silencioso se sostiene de escritorio a móvil.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere una presencia así para su marca estética o clínica?",
    ctaBlurb:
      "Tipografía milimétrica, jerarquía de protocolos y una ruta que termina en conversación de cita. Envíe un brief corto, le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  "sahra-butik": {
    tag: "Web boutique",
    summary:
      "Escaparate de moda mujer centrado en lookbook para Sahra Butik en Malatya. De lo cotidiano al tesettür, de la línea sport al día especial. elige en el lookbook, prueba en tienda, pregunta stock y talla online.",
    whatTitle: "Qué hicimos",
    what: [
      "Tipografía calmada y hero editorial acorde a la moda mujer de Malatya.",
      "Grid de lookbook que muestra modelos actuales con tela, corte y mood.",
      "Moods günlük, spor y tesettür aclarados en secciones propias.",
      "Atmósfera de boutique y fotogramas de estilo que llevan la tienda física al digital.",
      "Banda de contacto para stock / talla como eje de conversión.",
      "Ritmo de jardín scroll / pin para respiración y descubrimiento en la página.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "La primera pantalla fija marca y ubicación Malatya en una sola composición.",
      "El visitante elige modelos en el lookbook y navega por mood.",
      "Probar en tienda o preguntar stock pasa por contacto.",
      "El contenido se actualiza vía lookbook y el escaparate se mantiene vivo.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Sitio en vivo: ritmo de lookbook, confianza de tienda y consulta de stock online en un solo flujo. La sensación boutique local se sostiene en móvil.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere lookbook y ruta de stock para su boutique?",
    ctaBlurb:
      "Lookbook, prueba en tienda y consulta de stock online en un solo escaparate. Envíe un brief corto, le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  "vela-skin-atelier": {
    tag: "Skin atelier",
    summary:
      "Escaparate de reserva sereno para VELA Skin Atelier en SoHo, Nueva York. Your skin is not a fixed thing. Cuidado observation first, índice de tratamientos y ritmo de estudio de un solo cliente en una sola composición.",
    whatTitle: "Qué hicimos",
    what: [
      "Fondo crema, titular serif y acento terracotta que fijan la promesa del atelier al primer pantallazo.",
      "Capa de filosofía: no corregimos rostros, apoyamos la piel. contada de forma editorial.",
      "Reset, Sculpt, Renew, Restore, Frame presentados con claridad en el Skin Index.",
      "VELA Reset destacado con duración, inversión e indicación.",
      "Journal de tratamiento y secciones de estudio que construyen confianza de proceso y lugar.",
      "Book a consultation como columna vertebral de conversión de la página.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El visitante siente la marca y la ubicación SoHo en el hero.",
      "Filosofía y Skin Index explican enfoque y rituales.",
      "Reset y estudio refuerzan confianza e intención de cita.",
      "El CTA de consultation conduce a la conversación de reserva.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Sitio en vivo: sensación de atelier sereno, índice de tratamientos legible y ruta clara a cita. El tono quiet luxury se sostiene de escritorio a móvil.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un escaparate de reserva así para su marca de skin o wellness?",
    ctaBlurb:
      "Lenguaje observation first, índice de tratamientos y una ruta que termina en consultation. Envíe un brief corto, le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  "whatsapp-bot": {
    title: "Asistente de Conversación WhatsApp",
    tag: "Automatización",
    summary:
      "Habla con los clientes de WhatsApp por usted, para que no tenga que estar pegado al teléfono. Conoce sus precios y servicios. Conoce las horas libres sin cita y dirige ahí a la gente. Conoce las horas ocupadas y agenda en consecuencia. Sabe cuándo una cancelación libera una hora. Envía un recordatorio 1 hora antes al titular de la cita. reduce las cancelaciones de última hora. Pregunta y responde, habla como usted.",
    whatTitle: "Qué hicimos",
    what: [
      "Sus precios y servicios están en el bot. no se inventa números.",
      "Conoce las horas libres: si no hay nada agendado, dirige ahí a la gente.",
      "Conoce las horas ocupadas: si alguien ya tiene esa hora, no agenda encima.",
      "Cuando alguien cancela, sabe que esa hora vuelve a estar libre y puede ofrecerla.",
      "1 hora antes de la cita notifica al titular. menos olvidos y cancelaciones de última hora.",
      "Pregunta y responde; los casos difíciles pasan a usted.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El cliente escribe por WhatsApp. El bot saluda como usted y pregunta qué necesita.",
      "Explica precio y servicio. Muestra horas libres, evita las ocupadas.",
      "Elige una hora, queda agendada. Si cancela, esa hora se libera de nuevo.",
      "El recordatorio sale 1 hora antes. Opcionalmente todo llega al CRM.",
    ],
    stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
    result:
      "El trabajo sigue sin que usted esté pegado al teléfono. Las horas libres se llenan, las ocupadas no chocan, las cancelaciones liberan limpio, el recordatorio sale 1 hora antes.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un asistente de citas por WhatsApp para su negocio?",
    ctaBlurb:
      "Construyamos un asistente que conozca sus precios, sus horas libres y su flujo de citas. Envíe un brief corto y le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  "instagram-bot": {
    title: "Asistente de DM de Instagram",
    tag: "Automatización",
    summary:
      "Lo mismo en los DM de Instagram. Habla como usted sin que tenga que mirar el teléfono. Conoce precios y servicios. Conoce las horas libres y agenda ahí las citas. Conoce las horas ocupadas y agenda en consecuencia. Sabe cuándo una cancelación libera una hora. Recordatorio 1 hora antes. Pregunta y responde.",
    whatTitle: "Qué hicimos",
    what: [
      "Chat que saluda los DM en su nombre.",
      "Mismos precios y servicios que WhatsApp. sin contradicciones entre canales.",
      "Conoce las horas libres y agenda ahí. No pone a nadie en horas ocupadas.",
      "La cancelación libera la hora. Recordatorio 1 hora antes.",
      "Los chats difíciles pasan a usted o al CRM.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "Alguien escribe por DM. El bot saluda, pregunta si es necesario, explica precios.",
      "Para agendar muestra horas libres, no las ocupadas. La hora elegida se guarda.",
      "La cancelación libera esa hora de nuevo. Recordatorio 1 hora antes.",
      "Usa el mismo calendario que WhatsApp; puede unirse en el CRM.",
    ],
    stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
    result:
      "La bandeja de DM se mantiene ordenada: preguntas respondidas, citas en horas libres, recordatorio 1 hora antes. sin mirar el teléfono.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere el mismo asistente para sus DM de Instagram?",
    ctaBlurb:
      "Construyamos un asistente que comparta el mismo calendario que WhatsApp y mantenga sus DM ordenados. Envíe un brief corto y le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  crm: {
    title: "Panel de Ventas CRM",
    tag: "Software",
    summary:
      "Panel que trabaja junto a los asistentes de WhatsApp e Instagram. Los clientes con los que hablaron los bots, sus citas, cancelaciones y notas en un solo lugar. Quién llega y cuándo, qué horas están libres u ocupadas, si vino por WhatsApp o Instagram. todo visible.",
    whatTitle: "Qué hicimos",
    what: [
      "Un panel de ventas simple que avanza paso a paso.",
      "Bots de WhatsApp e Instagram conectados: al agendar, la tarjeta se abre sola.",
      "La tarjeta muestra canal, hora, libre/ocupado, notas y resumen de la conversación.",
      "Quién llega hoy, quién canceló, qué horas quedan libres. todo se lee en el panel.",
      "Cada cliente mantiene su historial aunque cambie de canal.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "El bot agenda una hora libre → aparece una tarjeta, aunque usted no esté con el teléfono.",
      "Usted mueve la tarjeta, agrega notas, asigna responsable. El resumen de WhatsApp o Instagram se mantiene en el mismo cliente.",
      "La cancelación libera la hora; el panel se actualiza también.",
      "Los dos bots conversan en lugares distintos; el CRM mantiene una sola lista.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    result:
      "Los bots conversan, llenan horas libres, recuerdan 1 hora antes; el CRM lo mantiene todo en un solo lugar. Mientras usted está fuera, el sistema sigue llenándose.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un panel CRM que hable con sus bots?",
    ctaBlurb:
      "Unifiquemos en un panel las citas y clientes que recogen sus asistentes de WhatsApp e Instagram. Envíe un brief corto y le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
  "css-system": {
    tag: "Sistema de diseño",
    summary:
      "Sistema de diseño CSS con tokens de marca para color, tipo, componentes y spacing. una sola fuente que mantiene el mismo lenguaje visual en web y panel.",
    whatTitle: "Qué hicimos",
    what: [
      "Tokens de color, tipo, radius y spacing.",
      "Botones primary / accent / ghost y componentes base.",
      "Docs y superficie de ejemplo.",
      "Mismo lenguaje en web y panel.",
      "Una capa de tokens que soporta tema oscuro / claro.",
      "Los componentes nuevos se mantienen ligados a los tokens, así se producen rápido sin desviarse.",
    ],
    howTitle: "Cómo funciona",
    how: [
      "Los tokens viven en una sola fuente.",
      "Los componentes consumen esos tokens.",
      "Las páginas nuevas se mantienen consistentes.",
      "Un cambio de marca se propaga desde un punto.",
    ],
    stack: ["CSS Custom Properties", "Design Tokens"],
    result:
      "Resultado: las actualizaciones de marca se propagan desde un solo punto y las páginas nuevas se producen rápido sin perder consistencia.",
    ctaLabel: "Siguiente proyecto",
    ctaTitle: "¿Quiere un sistema de diseño consistente para su marca?",
    ctaBlurb:
      "Construyamos un sistema de diseño CSS basado en tokens y escalable, para que su web y panel hablen el mismo idioma. Envíe un brief corto y le paso el alcance.",
    ctaButton: "Empezar mi proyecto",
  },
};

projectDetails.de = {
  wcc: {
    tag: "Unternehmenswebsite",
    summary:
      "Hochperformante, SEO faehige Unternehmenswebsite für einen US Möbelhersteller. Eine Oberfläche, die Fertigungsqualität spiegelt und Marke, Angebot sowie Kontakt in einem Ablauf vereint.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Individuelle Oberfläche und Mikroanimationen, die Fertigungsqualität widerspiegeln.",
      "Mobile first, schnelle Seitenstruktur mit klarer Conversion.",
      "Panel Anbindung, die Inhalte, Medien und SEO vereinfacht.",
      "Leistungen, Galerie und Angebotsablauf in einer Website vereint.",
      "Vertrauenssignale. Zertifikate, Referenzen, Produktionskapazität. klar dargestellt.",
      "Optimierung von Titeln, Meta Daten und strukturierten Daten für Suchmaschinen.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Besucher sehen Produkte und Leistungen in klarer Hierarchie.",
      "Interessierte gelangen direkt zum Angebotsformular oder zur Kontaktaufnahme.",
      "Seiten und Medien werden im Panel aktualisiert.",
      "SEO und Performance werden vor dem Launch optimiert.",
    ],
    stack: ["React", "Vite", "TypeScript"],
    result:
      "Live Website: erstklassige Unternehmenswirkung, schnelle mobile Performance und leicht pflegbare Inhalte.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine solche Website für Ihre Fertigungsmarke?",
    ctaBlurb:
      "Bauen wir eine Unternehmenswebsite, die Ihre Produktionsqualität spiegelt, fuer SEO geeignet bleibt und den Angebotsweg klar macht. Kurzes Briefing, klarer Umfang und Fahrplan zurück.",
    ctaButton: "Mein Projekt starten",
  },
  aydnnacar: {
    tag: "Marke & Katalog",
    summary:
      "Minimaler editorialer Digital Showroom für Nacar Mobilya. Kollektionen und Produkte mit Premium Wirkung, jedes Modell klar mit Maß, Name und Kontakt verknüpft.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Eigene Typografie und ruhige Farbsprache.",
      "Kollektions Slider und Katalog für Wohn, Ess und Schlafzimmer Linien.",
      "Klare Wege zu Produktdetail und Kontakt.",
      "Premium Darstellung, die auch mobil trägt.",
      "Kollektionsbasierte Filterung für schnellen Modellvergleich.",
      "Produktkarten, die Maß und Stoff klar zeigen.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Die Startseite beginnt mit der Kollektionsgeschichte und führt in den Katalog.",
      "Nutzer filtern nach Kategorie und sehen Modelle.",
      "Maß, Stoff und Lieferung laufen über den Kontakt.",
      "Inhalte skalieren über die Kollektionsstruktur.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    result: "Live Website: Katalog mit Showroom Wirkung und klarem Kontaktweg.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie einen editorialen Katalog für Ihre Möbelmarke?",
    ctaBlurb:
      "Bauen wir einen ruhigen, hochwertigen Digital Showroom, der Ihre Kollektionen mit echter Showroom Wirkung zeigt. Kurzes Briefing, klarer Umfang zurück.",
    ctaButton: "Mein Projekt starten",
  },
  wuffbutik: {
    tag: "Boutique-Web",
    summary:
      "Ruhige, elegante Boutique Website für Wuuf. Ladenpräsenz und WhatsApp geführter Fernverkauf in einem Ablauf.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Markenpassende Typografie und Bildsprache.",
      "Klare Informationsarchitektur für Kollektionen und Kontakt.",
      "WhatsApp und Nachrichten CTAs für schnelle Conversion.",
      "Leichte, schnelle mobile Oberfläche.",
      "Vitrineseiten nach Produktlinie gruppiert für klares Stöbern.",
      "Standort und Öffnungszeiten klar im ersten Bildschirm.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Der erste Bildschirm erklärt Marke und Vitrine.",
      "Besucher gehen in die Kollektionslinien.",
      "Der Nachrichten CTA öffnet direkt WhatsApp.",
      "Schlanke Inhalte halten Updates einfach.",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    result: "Live Website: Boutique Wirkung mit schnellem WhatsApp Weg zur Anfrage.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine Vitrine mit WhatsApp Anfragen für Ihre Boutique?",
    ctaBlurb:
      "Bringen wir Ihre Ladenatmosphäre digital, mit einer Vitrine, die direkt zu WhatsApp führt. Kurzes Briefing, klarer Umfang zurück.",
    ctaButton: "Mein Projekt starten",
  },
  "altitude-residence": {
    tag: "Luxusimmobilien",
    summary:
      "Dunkle, editoriale Markenerfahrung für Altitude Residences. Skyline, Rhythmus und klare Einladung zur Besichtigung im Zusammenspiel.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Hochwertige Typografie, Bildsprache und filmischer Einstieg.",
      "Seitenablauf, der die Residenz über Höhe und Tempo erzählt.",
      "Klarer Weg über die Schaltfläche „Besichtigung vereinbaren“.",
      "Premium Darstellung auf Desktop und Mobilgeräten.",
      "Grundrisse und Residenztypen im klaren Vergleich.",
      "Skyline und Standortvorteile in einem eigenen editorialen Abschnitt.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Der erste Bildschirm setzt Marke und Lebensstilversprechen.",
      "Besucher erkunden Residenzen und Standortgeschichte.",
      "Die Schaltfläche führt zu Besichtigung oder Kontakt.",
      "Der Inhalt bleibt im Premium Ton.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Live Website: Premium Wirkung, klarer Besichtigungspfad, saubere Mobile Umsetzung.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine besichtigungsorientierte Website für Ihr Residenzprojekt?",
    ctaBlurb:
      "Erzählen wir Ihre Residenzgeschichte editorial und führen klar zur Besichtigung. Kurzes Briefing, Umfang und Fahrplan zurück.",
    ctaButton: "Mein Projekt starten",
  },
  "casa-aurelia": {
    tag: "Boutique Hotel",
    summary:
      "Atmosphärische Buchungspräsentation für das Fünf Sterne Boutique Hotel Casa Aurelia in Rom. mit Englisch /Italienisch Unterstützung und klarem Weg zur Reservierung.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Filmischer Einstieg und Typografie passend zum Hotel.",
      "Reservierungs und Kontaktablauf mit Fokus auf „Jetzt buchen“.",
      "Sprachumschaltung Englisch und Italienisch.",
      "Hochwertige Darstellung auch mobil.",
      "Zimmertypen und Ausstattung in editorialem Layout.",
      "Standort Rom und Umgebung über einen kartengestützten Abschnitt.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Der erste Bildschirm erzählt Marke und Standort Rom.",
      "Besucher sehen Hotelgeschichte und Zimmer.",
      "„Jetzt buchen“ führt zu Reservierung oder Kontakt.",
      "Der Sprachwechsel schaltet zwischen Englisch und Italienisch.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result: "Live Website: Boutique Wirkung, zweisprachig, klarer Buchungsweg.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine solche Buchungserfahrung für Ihr Boutique Hotel?",
    ctaBlurb:
      "Erzählen wir Ihre Hotelgeschichte atmosphärisch, mehrsprachig und mit klarem Buchungsweg. Kurzes Briefing, klarer Umfang zurück.",
    ctaButton: "Mein Projekt starten",
  },
  "seraphine-atelier": {
    tag: "Mode & Atelier",
    summary:
      "Editoriales Modehaus für Séraphine Atelier. Nebel, Film und Typografie. Damen und Herren Lookbook, Ateliergeschichte und klarer Weg zum privaten Fitting. kein Warenkorb, sondern eine private Stunde.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Filmischer Hero, Nebelatmosphäre und Couture Typografie, die das Markenversprechen im ersten Bildschirm setzt.",
      "SS26 Lookbook Rhythmus für die Damenkollektion. sechs Looks mit Name, Schnitt und Preis in editorialer Hierarchie.",
      "Atelierboden als Szene. Boutique Stills, die Vertrauen aufbauen.",
      "Herrenbereich mit dunklem Runway Raster; Blazer, Anzüge und Mäntel mit Preis.",
      "Abschluss CTA „Private Stunde anfragen“, der den Fitting und Terminweg klar macht.",
      "Ruhige Premium Darstellung, die auf Desktop und Mobilgeräten trägt.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Besucher spüren die Marke im nebligen Hero Film und gelangen über Scroll in die Boutique.",
      "Im Lookbook stöbern sie Damen und Herrenstücke. jede Karte trägt Name, Schnitt und Preis.",
      "Der Atelierblock inszeniert die Ladenatmosphäre; Vertrauen und Markentiefe entstehen hier.",
      "Der Terminband führt zum privaten Fitting. Conversion läuft über die private Stunde, nicht über den Warenkorb.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Live Website: Couture Wirkung, Lookbook Rhythmus und Conversion über private Termine. Der ruhige Premium Ton bleibt von Desktop bis Mobile konsistent.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie ein Modehaus wie dieses?",
    ctaBlurb:
      "Wir passen filmischen Einstieg, Lookbook Rhythmus und terminbasierte Conversion an Ihre Marke an. Kurzes Briefing, klarer Umfang und Fahrplan zurück.",
    ctaButton: "Mein Projekt starten",
  },
  "havva-baklava": {
    tag: "Boutique-Web",
    summary:
      "Dunkle, filmische Vitrine für HAVVA Baklava in Köln Ehrenfeld. Handwerk von Gaziantep nach Köln, Tagespreisliste und klarer Bestellweg über WhatsApp in einem Ablauf.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Dunkler Grund, Serifen Typografie und Tablett Fotografie, die im ersten Bildschirm die Baklava Werkstatt spürbar machen.",
      "Gaziantep → Köln in scrollbaren Hero Panels erzählt (Pistazie / Schicht für Schicht).",
      "Werkstatt Block mit klaren Versprechen: Handarbeit, Antepfıstığı, Şerbet ohne Zusätze.",
      "Tageskarte / Preise mit Fıstıklı, Cevizli, Şöbiyet, Künefe und Tepsi Preisen in editorialer Liste.",
      "„Jetzt über WhatsApp bestellen“ als Conversion Anker der Seite.",
      "Adresse, Öffnungszeiten und direkte WhatsApp Nummer. klarer Weg zur Werkstatt in Ehrenfeld.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Besucher spüren Werkstatt und Produkt im Hero und scrollen in die Markengeschichte.",
      "Werkstatt und Preisliste zeigen Sorten und Kilopreise.",
      "WhatsApp CTA öffnet den Bestellchat. Sorte, Menge, Abholzeit.",
      "Die Werkstatt antwortet meist innerhalb von ~15 Minuten; Abholung / Lieferung wird bestätigt, sobald es bereit ist.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Live Website: handwerkliche Baklava Wirkung, lesbare Preisliste, WhatsApp Bestellweg. Dunkler Premium Ton von Desktop bis Mobile konsistent.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine solche Bestellvitrine für Ihre Konditorei oder Werkstatt?",
    ctaBlurb:
      "Produktgeschichte, Preisliste und WhatsApp Bestellung in einem filmischen Ablauf. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  mizan: {
    tag: "Ästhetik Klinik",
    summary:
      "Editoriale digitale Präsenz für MİZAN, Lächeln Architektur Studio in Nişantaşı. Das Versprechen Wir gestalten die Balance des Gesichts sitzt im ersten Frame über geschlossenen Ausdruck, Licht und Öffnung. Protokolle, Atelier und erste Messung auf einem klaren Weg.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Scrollbarer Smile Film: geschlossener Ausdruck, Licht, Öffnung. der Satz des Gesichts Bild für Bild.",
      "Balance, Proportion und Stille als Philosophieschicht mit editorialer Typografie.",
      "Protokolle als gewählte Rituale, nicht als kaltes Klinikmenü.",
      "Das Nişantaşı Atelier erzählt mit ruhiger Premium Raumfotografie.",
      "CTA zur ersten Messung / Termin als Conversion Anker. Einladung zum Gespräch, kein kaltes Formular.",
      "Millimetrische Hierarchie und ruhige Motion, die auf Desktop und Mobile trägt.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Besucher spüren das MİZAN Versprechen im Hero und sehen Lächeln Architektur beim Scrollen.",
      "Philosophie und Protokolle setzen die Markensprache. messbare Ruhe, keine lauten Claims.",
      "Der Atelier Block baut Vertrauen und räumliche Tiefe.",
      "Die Terminbande führt ins Gespräch zur ersten Messung.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Live Website: Lächeln Architektur Wirkung, editoriale Tiefe, klarer Terminweg. Quiet Luxury Ton von Desktop bis Mobile konsistent.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine solche Präsenz für Ihre Ästhetik oder Klinikmarke?",
    ctaBlurb:
      "Millimetrische Typografie, Protokoll Hierarchie und ein Weg, der im Termin Gespräch endet. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  "sahra-butik": {
    tag: "Boutique-Web",
    summary:
      "Lookbook geführte Damenmode Vitrine für Sahra Butik in Malatya. Vom Alltag zum Tesettür, von der Sportlinie zum besonderen Tag. im Lookbook wählen, im Laden anprobieren, Bestand und Größe online fragen.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Ruhige Typografie und editorialer Hero passend zur Malatya Damenmode.",
      "Lookbook Grid mit aktuellen Modellen, Stoff, Schnitt und Mood.",
      "Günlük, Spor und Tesettür Moods in eigenen Abschnitten klar gemacht.",
      "Boutique Atmosphäre und Stilframes, die den physischen Laden digital tragen.",
      "Kontaktbande für Bestand / Größe als Conversion Anker.",
      "Scroll Garten / Pin Rhythmus für Atem und Entdeckung auf der Seite.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Der erste Screen setzt Marke und Malatya Standort in einer Komposition.",
      "Besucher wählen Modelle im Lookbook und browsen nach Mood.",
      "Anprobe im Laden oder Bestandsfrage läuft über Kontakt.",
      "Inhalte aktualisieren sich über das Lookbook, die Vitrine bleibt lebendig.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Live Website: Lookbook Rhythmus, Ladenvertrauen und Online Bestandsfrage in einem Ablauf. Lokales Boutique Gefühl hält auch mobil.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie Lookbook und Bestandsweg für Ihre Boutique?",
    ctaBlurb:
      "Lookbook, Anprobe im Laden und Online Bestandsfrage in einer Vitrine. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  "vela-skin-atelier": {
    tag: "Skin Atelier",
    summary:
      "Ruhige Buchungsvitrine für VELA Skin Atelier in SoHo, New York. Your skin is not a fixed thing. Observation first Pflege, durchdachter Treatment Index und Ein Gast Studio Rhythmus in einer Komposition.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Cream Grund, Serifen Headline und Terracotta Akzent, die das Atelier Versprechen im ersten Frame setzen.",
      "Philosophieschicht: wir korrigieren keine Gesichter, wir stützen Haut. editorial erzählt.",
      "Reset, Sculpt, Renew, Restore, Frame klar im Skin Index.",
      "VELA Reset hervorgehoben mit Dauer, Investment und Best for Hinweisen.",
      "Treatment Journal und Studio Abschnitte, die Prozess und Ortsvertrauen aufbauen.",
      "Book a consultation als Conversion Rückgrat der Seite.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Besucher spüren Marke und SoHo Standort im Hero.",
      "Philosophie und Skin Index erklären Ansatz und Rituale.",
      "Reset und Studio stärken Vertrauen und Buchungsabsicht.",
      "Consultation CTA führt ins Reservierungsgespräch.",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Lenis"],
    result:
      "Live Website: ruhiges Atelier Gefühl, lesbarer Treatment Index, klarer Buchungsweg. Quiet Luxury Ton von Desktop bis Mobile konsistent.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie eine solche Buchungsvitrine für Ihre Skin oder Wellness Marke?",
    ctaBlurb:
      "Observation first Sprache, Treatment Index und ein Weg, der in der Consultation endet. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  "whatsapp-bot": {
    title: "WhatsApp Gesprächsassistent",
    tag: "Automatisierung",
    summary:
      "Spricht mit WhatsApp Kunden für Sie, ohne dass Sie am Handy hängen. Kennt Preise und Leistungen, freie und belegte Termine und bucht entsprechend. Nach einer Absage ist die Stunde wieder frei. Erinnerung eine Stunde vorher. weniger kurzfristige Absagen. Fragt, antwortet und spricht wie Sie.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Ihre Preise und Leistungen stehen im Assistenten. er erfindet keine Zahlen.",
      "Er kennt freie Stunden und lenkt Buchungen dorthin.",
      "Er kennt belegte Stunden: sitzt schon jemand, kommt kein zweiter Termin dazu.",
      "Nach Absage weiß er, dass die Stunde wieder frei ist, und kann sie anbieten.",
      "Eine Stunde vor dem Termin Benachrichtigung an den Inhaber. weniger Vergessen und kurzfristige Absagen.",
      "Fragt und antwortet; Schwieriges geht an Sie.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Kunde schreibt per WhatsApp. Der Assistent begrüßt wie Sie und fragt den Bedarf.",
      "Erklärt Preis und Leistung. Zeigt freie Stunden, lässt belegte weg.",
      "Kunde wählt Stunde, Termin ist gebucht. Absage → Stunde wieder frei.",
      "Erinnerung geht eine Stunde vorher raus. Optional alles ins CRM.",
    ],
    stack: ["WhatsApp Cloud API", "n8n", "Python", "PostgreSQL"],
    result:
      "Arbeit läuft weiter ohne Handy Zwang. Freie Stunden füllen sich, belegte kollidieren nicht, Absagen geben sauber frei, Erinnerung eine Stunde vorher.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie einen WhatsApp Terminassistenten für Ihr Unternehmen?",
    ctaBlurb:
      "Bauen wir einen Assistenten, der Ihre Preise, freien Stunden und Ihren Terminablauf kennt. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  "instagram-bot": {
    title: "Instagram-DM-Assistent",
    tag: "Automatisierung",
    summary:
      "Dasselbe in Instagram Direktnachrichten. Spricht wie Sie, ohne ständiges Handy Checken. Kennt Preise und Leistungen, freie und belegte Termine sowie wieder freigewordene Stunden. Erinnerung eine Stunde vorher.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Chat, der Direktnachrichten in Ihrem Namen begrüßt.",
      "Gleiche Preise und Leistungen wie WhatsApp. kein Widerspruch zwischen Kanälen.",
      "Kennt freie Stunden und bucht dort. Setzt niemanden auf belegte.",
      "Absage gibt die Stunde frei. Erinnerung eine Stunde vorher.",
      "Schwierige Chats gehen an Sie oder ins CRM.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Jemand schreibt per Direktnachricht. Der Assistent begrüßt, fragt bei Bedarf, erklärt Preise.",
      "Zum Buchen zeigt er freie Stunden, nicht belegte. Die gewählte wird gespeichert.",
      "Absage öffnet die Stunde wieder. Erinnerung eine Stunde vorher.",
      "Gleicher Kalender wie WhatsApp; kann im CRM zusammenlaufen.",
    ],
    stack: ["Instagram Graph API", "n8n", "Python", "Supabase"],
    result:
      "Der DM Posteingang bleibt geordnet: Fragen beantwortet, Termine auf freie Stunden, Erinnerung eine Stunde vorher. ohne Handy Check.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie denselben Assistenten für Ihre Instagram Direktnachrichten?",
    ctaBlurb:
      "Bauen wir einen Assistenten, der denselben Kalender wie WhatsApp nutzt und Ihre Direktnachrichten ordentlich hält. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  crm: {
    title: "CRM-Verkaufspanel",
    tag: "Software",
    summary:
      "Panel für die WhatsApp und Instagram Assistenten. Kunden, Termine, Absagen und Notizen an einem Ort. Wer wann kommt, welche Stunden frei oder belegt sind, WhatsApp oder Instagram. alles auf einen Blick.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Ein schlichtes Verkaufspanel, das Schritt für Schritt läuft.",
      "WhatsApp und Instagram Assistenten verbunden: Buchung öffnet von allein eine Karte.",
      "Auf der Karte: Kanal, Zeit, frei/belegt, Notizen und Chat Zusammenfassung.",
      "Wer kommt heute, wer stornierte, was noch frei ist. am Panel lesbar.",
      "Jeder Kunde behält seine Historie, auch bei Kanalwechsel.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Assistent bucht eine freie Stunde → Karte erscheint, auch wenn Sie nicht am Handy sind.",
      "Sie verschieben die Karte, ergänzen Notizen, wählen Verantwortliche. WhatsApp oder Instagram Zusammenfassung bleibt am selben Kunden.",
      "Absage gibt die Stunde frei; das Panel aktualisiert sich mit.",
      "Zwei Assistenten sprechen an getrennten Orten; das CRM hält eine Liste.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    result:
      "Assistenten sprechen, füllen freie Stunden, erinnern eine Stunde vorher; das CRM hält alles an einem Ort. Während Sie weg sind, füllt sich das System weiter.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie ein CRM Panel, das mit Ihren Assistenten spricht?",
    ctaBlurb:
      "Führen wir die Termine und Kunden Ihrer WhatsApp und Instagram Assistenten in einem Panel zusammen. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
  },
  "css-system": {
    tag: "Designsystem",
    summary:
      "CSS Designsystem mit Marken Tokens für Farbe, Typografie, Komponenten und Abstände. eine Quelle, die Web und Admin dieselbe visuelle Sprache sprechen lässt.",
    whatTitle: "Was wir gemacht haben",
    what: [
      "Tokens für Farbe, Typografie, Radius und Abstände.",
      "Primary, Accent und Ghost Buttons sowie Basiskomponenten.",
      "Dokumentation und Beispieloberfläche.",
      "Gleiche Sprache für Web und Admin.",
      "Eine Token Ebene, die helles und dunkles Theme unterstützt.",
      "Neue Komponenten bleiben an Tokens gebunden und entstehen schnell ohne Stilabweichung.",
    ],
    howTitle: "So funktioniert es",
    how: [
      "Tokens leben in einer Quelle (:root / Theme).",
      "Komponenten nutzen diese Tokens.",
      "Neue Seiten bleiben konsistent und entstehen schneller.",
      "Marken Updates verbreiten sich von einem Punkt aus.",
    ],
    stack: ["CSS Custom Properties", "Design Tokens"],
    result:
      "Ergebnis: Marken Updates verbreiten sich von einem Punkt aus, neue Seiten entstehen schnell ohne Stilabweichung.",
    ctaLabel: "Nächstes Projekt",
    ctaTitle: "Möchten Sie ein konsistentes Designsystem für Ihre Marke?",
    ctaBlurb:
      "Bauen wir ein tokenbasiertes, skalierbares CSS Designsystem, damit Web und Admin dieselbe Sprache sprechen. Kurzes Briefing, ich liefere den Umfang.",
    ctaButton: "Mein Projekt starten",
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
