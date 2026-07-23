import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "İlk ekran okunmadan ne söyler",
    excerpt:
      "Ziyaretçi metne geçmeden ağırlığı, boşluğu ve temposu ölçer. Karar çoğu zaman o saniyede verilir.",
    lead: "İlk ekrana slogan koymak yaygın alışkanlık. Gözün yaptığı ise başka: yoğunluğu, kaç öğenin yarıştığını, markanın sakin mi aceleci mi durduğunu ölçer. Bu sinyaller çatışırsa metin adil şans bulamaz.",
    imageAlt: "Premium marka ana sayfasında tipografi ve düzen detayı",
    sections: [
      {
        heading: "Kompozisyon cümleden önce konuşur",
        paragraphs: [
          "Butik veya hizmet sitesi açın; ilk kaydedilen genelde başlık değildir. Ekranın yoğunluğu: sıkışık marjlar, menüyle boğuşan logo, aynı görsel ağırlığı paylaşan üç düğme. Bilinçli okuma başlamadan bunlar yetkinlik ya da gürültü olarak okunur.",
          "İnsanlar arayüz kalitesini iş kalitesinin göstergesi sayar. Dağınık ilk görünümün arkasında güçlü teklif olsa bile eksiyle başlanır. Sakin, okunaklı yüzey asıl argümana zaman kazandırır.",
        ],
      },
      {
        heading: "Buradaki kimlik: tipografi, tempo, hiyerarşi",
        paragraphs: [
          "İlk bakış kimliği logo dosyası değildir. Katmanın üstünü yöneten sistemdir: kaç tipografi seviyesinin bağırdığı, vurgu renginin bir kez mi her yerde mi kullanıldığı, boşlukların birime mi yoksa rastgele mi uyduğu.",
          "Tempo da iddiadır. Girişte otomatik video, kayan yazı, pop-up markanın gerildiğini söyler. Hızlı açılan, sabit duran, tek net yol sunan site özgüven okutur — ve özgüven metin hilesi değil, tasarım kararıdır.",
          "Pazarlama sitelerinde bu kuralları illüstrasyon ve fotoğraftan önce kilitleriz. Hazır tema değil, markaya özel arayüz: hiyerarşi koda yazılır, tek seferlik CSS yamasıyla kurtarılmaz.",
        ],
      },
      {
        heading: "Bugün uygulayabileceğiniz üç kontrol",
        paragraphs: [
          "Tek tez. Kimin için burada olduğunuzu ve ne yaptığınızı tek cümleyle söyleyebiliyor musunuz; düzen bu cümleyi taşıyor mu yoksa gömüyor mu? Beş iddia yarışırsa hiçbiri kalmaz.",
          "Tek birincil eylem. İkincil bağlantılar olabilir ama geri planda kalmalı. Eşit ağırlıklı iki düğme, karar vermemekle aynıdır. Mobilde başparmak erişimi ve dokunma alanı testin parçasıdır.",
          "Sayfalar arası tutarlılık. Cilalı ana sayfa, ürün veya iletişimde şablon varsayılanına düşüyorsa zayıf bir başlıktan daha çok güven kaybettirir. Sloganı yeniden yazmadan önce kırılmayı onarın.",
        ],
      },
      {
        heading: "İlk ekran teklifle aynı dili konuşunca",
        paragraphs: [
          "Moda, güzellik, üretim ortaklıkları, profesyonel hizmet gibi yüksek değerlendirme kategorilerinde güven ayrıntıdan önce gelir. Ziyaretçi piksel değil, muhakeme satın alır. İlk ekran, onların problemine aynı muhakemenin uygulandığı hissini vermelidir.",
          "Hız, okunaklı yazı, abartısız vaat ve teknik temeller (kontrast, odak, meta) estetikle aynı masada konuşulmalıdır. Teslimden önce bunları test ederiz; mobilde bozulan güzel sayfa el sıkışmayı yine kırar.",
          "Üç kontrol geçiyor ama hâlâ yanlış hissediyorsanız sorun çoğu zaman süsleme değil, stratejidir. Düzenin taşıması gereken tek cümleyi yazın, sistemi onun etrafında yeniden kurun.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Logo kimliğin en küçük parçası",
    excerpt:
      "PDF’teki yeni işaret; e-posta imzasını, ürün sayfasını veya şablon varsayılanlarını düzeltmez.",
    lead: "Yeniden markalaşma çoğu kez sembolle başlar. Kurallarla başlamalı. Ortak tipografi, renk, boşluk ve bileşen davranışı yoksa en taze logo da parçalı deneyimin üstünde yalnız kalır.",
    imageAlt: "Marka sistemi için grid, renk örnekleri ve tipografi spesimenleri",
    sections: [
      {
        heading: "İnsanların gerçekten hatırladığı",
        paragraphs: [
          "Güvendikleri bir markayı tarif etmelerini isteyin. Logoyu nadiren çizerler. Onay e-postasını, faturanın siteyle uyumunu, Instagram’ın ambalajla aynı şirketi hissedip hissetmediğini anlatırlar.",
          "Dokunuş noktaları logo sürümlerinden hızlı çoğalır. 32px’de ve kamyon brandasında çalışan işaret önemli — asıl iş yükü reklam tıklamasından sonraki her yüzeydir.",
        ],
      },
      {
        heading: "Sistemler zevki tekrarlanabilir karara çevirir",
        paragraphs: [
          "Görsel sistem üretim sorularını erkenden cevaplar: H1 ile H2 ağırlığı, bir ekranda kaç vurgu, fotoğraf kırpım oranı, düğme yarıçapı, minimum dolgu. Ekipler her sayfada sıfırdan pazarlık etmez.",
          "İyi sistemlerde yasaklar vardır — esnetilmiş logo yok, gövde metninde gölge yok, e-postada rastgele font yok. Kısıt işi hızlandırır çünkü ret nettir.",
          "İkisi de gerektiğinde site ve yönetim panelini aynı kural setinden çıkarırız. Kamuya uymayan bir panel, kimliğin makyaj olduğunu öğretir.",
        ],
      },
      {
        heading: "Çekirdek, üretim, yüzey",
        paragraphs: [
          "Çekirdek: tez, tipografi ailesi, renk token’ları, logo güvenli alanı, ses sınırları. Ölçeklemeden önce kilitlenir.",
          "Üretim: grid, arayüz bileşenleri, ikon dili, fotoğraf yönü, hareket sınırları — günlük iş bu katmanda döner.",
          "Yüzey: web, sosyal, sunum, tabela, ambalaj. Web’i tek başına tasarlamak iki marka üretir: biri Figma’da, biri tarayıcıda. Aynı sistem, farklı tuval olmalı.",
        ],
      },
      {
        heading: "Açılan dokümantasyon",
        paragraphs: [
          "Sürücüde unutulan seksen sayfalık marka kitabı arşivdir, sistem değil. İşe yarayan belge kısa, aranabilir ve örnek ağırlıklıdır: şunu yap, şunu yapma — gerçek ekranlarla.",
          "Yeni kanal geldiğinde — pazaryeri listesi, kısa video kapağı, ortak logo — kuralları kırıp değil genişleterek ilerleyin. Test aynı kalır: bu parça çekirdek tipografi ve renk mantığını miras alıyor mu?",
          "Ürün sayfalarında hâlâ üç düğme stili varken yeni logo turu finanse ediyorsanız durun. Önce yüzeyleri denetleyin. Sistemi onarın, sonra işareti ince ayarlayın.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editoryal yapı, bağıran çağrıdan daha çok satar",
    excerpt:
      "Sıra, yığından üstündür. Tez, kanıt ve eylemi doğru dizersek daha çok görselden iyidir.",
    lead: "Birçok site hâlâ katlanmış broşür gibi okunur: kahraman, özellik ızgarası, yorum döngüsü, alt çağrı. Blokların tek tek günahı yok. Sorun sırada. Editoryal tempo yoksa ziyaretçi kanıtı kaydırıp ikna olmadan düğmeye varır.",
    imageAlt: "Net tipografik hiyerarşili editoryal ana sayfa düzeni",
    sections: [
      {
        heading: "Broşür yığar; deneyim sıralar",
        paragraphs: [
          "Yığmak, sayfa dolana kadar modül ekler. Sıralamak, sırada neyin inanılması gerektiğini sorar. Önce kimin için olduğu ve iletişimden sonra neyin değişeceği. Sonra kanıt. Ancak ondan sonra eylem.",
          "Her bölüm bir sonraki kaydırmayı hak etmeli. Hikâyede yeri cevaplanamayan bloğu kesin veya taşıyın. Kısaltmak değeri silmez; dikkati korur.",
        ],
      },
      {
        heading: "Satış yolu tipografidir",
        paragraphs: [
          "Editoryal sitelerde punto ve boşluk navigasyondur. Net H1–H2 basamakları menü seyrek olsa bile yol çizer. Yaklaşık 65 karakter satır, tutarlı satır aralığı ve yeterli kontrast, animasyonlu sayaçlardan daha çok anlaşılırlık sağlar.",
          "Mobil, zayıf hiyerarşiyi masaüstünün affettiğinden hızlı kırar. Başlık beş satıra yayılıp alt başlık kayboluyorsa vaat de küçülür. Masaüstü dramayı onaylamadan telefonda bitirin.",
        ],
      },
      {
        heading: "Kanıtı şüphenin çıktığı yere koyun",
        paragraphs: [
          "Genel güven bandına sıkışmış sosyal kanıt kolay atlanır. Kanıt itirazla karşılaşınca işe yarar: vaatten sonra sonuç satırı, yetenek listesinden sonra isimli proje, fiyat bağlamından sonra kısa alıntı.",
          "Tek güçlü vaka, kaynaksız on belirsiz istatistikten iyidir. Üretim siteleri, butik perakende, operasyon araçları gibi yayındaki işleri bağlam içinde gösteririz — yüzde rozeti değil.",
        ],
      },
      {
        heading: "Tek birincil eylem, sakin çerçeve",
        paragraphs: [
          "Birincil çağrı ağırlık alır: etiket, konum, boşluk. İkincil yollar görünür ama daha sessiz kalır. Eşit ağırlıklı Satın Al ve İncele birbirini iptal eder.",
          "Yüksek değerlendirme kategorileri zamana ihtiyaç duyar. Editoryal tempo buna saygı duyar. Panik sayaçları ve agresif pop-up güvensizlik öğretir. Net sonraki adım ve dürüst metin, baskıdan daha iyi dönüştürür.",
          "Ana sayfanızı tez, kanıt, eylem sütunlarına dökün. Boşluklar hemen görünür — doldurmak eklenti kurulumu değil, metin ve düzen işidir.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Sessiz lüks online: niyetli sadeleşme",
    excerpt:
      "Soluk renk ve ince yazı kısayoldur. Asıl sessiz lüks disiplinli boşluk, malzeme ve harekettir.",
    lead: "Sessiz lüks markaları fiziksel sakinliği çoğu zaman dijital griye çevirir. Noktayı kaçırır. Online sadeleşme, her öğenin varlığını haklı kılmasıdır. Boşluk yokluk değil; yapıdır.",
    imageAlt: "Yumuşak doğal ışıklı minimal ürün natürmortu",
    sections: [
      {
        heading: "Daha az gürültü, daha keskin mesaj",
        paragraphs: [
          "Azaltmak, yarışan iddiaları temizler. Bir kahraman mesajı, bir destek satırı, bir ileri yol. Aynı ekranda üç eşit başlık, hiçbirinin hatırlanmamasını garanti eder.",
          "Dar palet sorun değil. Okunabilirlik opsiyonel değildir. Düşük doygunluk da kontrastı karşılamalı. Fısıldayan ama okunamayan sayfa premium değil, ihmalkârdır.",
        ],
      },
      {
        heading: "Ekranda malzeme",
        paragraphs: [
          "Dijital malzeme fotoğraf disiplininden gelir: tutarlı ışık, dürüst doku, kontrollü derinlik, ürüne saygılı kırpım. Stok gülümsemeleri ve ağır filtreler lüksü tek karede bozar.",
          "Tipografi de malzeme taşır. Harf aralığı, ağırlık ve kenar boşluğu ambalaj gibi nefes almalı. Lüks hikâyede rastgele sistem fontu, evde basılmış etikete benzer.",
        ],
      },
      {
        heading: "İşi olan hareket",
        paragraphs: [
          "Animasyon hiyerarşiyi netleştirmeli, sahne yapmamalı. İnce hover, ölçülü geçiş ve metni okunur tutan kaydırma; okurken içeriği gizleyen paralakstan iyidir.",
          "Ziyaretçi hâlâ okurken hareket çalışıyorsa düzen başarısızdır. Durdurun veya kaldırın. Lüks, kontrol olarak okunur.",
        ],
      },
      {
        heading: "Mağaza ve tarayıcıda tek marka",
        paragraphs: [
          "Sessiz lüks tutarlılıkta yaşar. Mağazada kısa, online uzun paragraflar markayı böler. Cümle uzunluğunu, ürün adlandırmasını ve çağrı tonunu kanallar arasında hizalayın.",
          "Performans hissin parçasıdır. Yavaş açılış özensiz okunur. Hızı ve temel erişilebilirliği boşluk ve tipografiyle aynı teslim kriteri sayarız — özen mekanikte de görünür.",
          "Sitenizi en iyi fiziksel dokunuşunuzla denetleyin. Mağaza fısıldarken ekran bağırıyorsa bir sonraki kampanya bütçesinden önce hizalayın.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Projeyi kısaltan proje notu",
    excerpt:
      "Net hedef, kitle, sınır ve referans; öznel geri bildirimi inşa edilebilir karara çevirir.",
    lead: "Keşif, moodboard turizmi değildir. Başarının neye benzediğini, işin kime konuştuğunu ve kapsam dışı kalanı yazmaktır. Belirsiz girdi pahalı döngü üretir. Net girdi tasarım ve kodu ilerletir.",
    imageAlt: "Stüdyo masasında klavye yanında proje notları",
    sections: [
      {
        heading: "Dört blok: hedef, kitle, kısıt, referans",
        paragraphs: [
          "Hedef gözlemlenebilir bir değişimi adlandırır: ilk ekran konumlandırmayı net söyler, form tamamlanır, bayi haritası kullanılır — modern veya premium gibi ruh hali kelimesi değil.",
          "Kitle karar vereni, korkusunu ve ihtiyaç duyduğu kanıtı adlandırır. Kısıtlar zaman, bütçe bandı, mevcut varlıklar, entegrasyonlar ve aşılamayan yasal çizgileri listeler.",
          "Referanslar tempo ve yapıyı gösterir; çalma hedefi değil. Anti-referans ekleyin: reddettiğiniz site veya stiller ve neden.",
        ],
      },
      {
        heading: "İyi cümle, uzun sunumdan üstündür",
        paragraphs: [
          "Tek sayfa, dağınık on belgeden iyidir. Paydaşlar anlaşmıyorsa not bunu dördüncü revizyon turunda değil erkenden ortaya çıkarır.",
          "Daha temiz olsun yerine katmanın üstünde tek birincil çağrı ve giriş olmadan indirilebilir teknik sayfa deyin. İkinci cümle inşa edilebilir.",
        ],
      },
      {
        heading: "Erken kilitleyin — yoksa sonra ödersiniz",
        paragraphs: [
          "Strateji, kimlik, arayüz, geliştirme, yayın. Her faz bir öncekinin oturduğunu varsayar. Bileşenler varken konum değişirmek, kroki değiştirmenin katlarıdır.",
          "Proje notu ilk kilittir. Kurucu liderliğinde stüdyo niyet yazıldığında hızlı hareket eder; özel işi tema sapması olmadan çıkarmak için yine o çapa gerekir.",
        ],
      },
      {
        heading: "Birlikte yazın",
        paragraphs: [
          "En iyi notlar ortak yazılır. Siz alan bilgisini getirirsiniz; stüdyo boşlukları açığa çıkaran soruları sorar. Ortak dil, sonradan istediğimiz bu değildi’yi azaltır.",
          "Stüdyoya yazmadan şu cümleyi bitirin: Yayınlandığında işe yaradığını ___ olduğu için bileceğiz. Boşluğu dolduramıyorsanız keşif bitmemiştir.",
          "O cümleyi bağlantılar, kısıtlar ve anti-referanslarla gönderin. Daha keskin teklif ve yayına daha kısa yol alırsınız.",
        ],
      },
    ],
  },
};

export default content;
