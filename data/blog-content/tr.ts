import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "İlk ekran okunmadan ne söyler",
    excerpt:
      "Ziyaretçi metne geçmeden düzeni, yazı ağırlığını ve ritmi ölçer. Karar çoğu zaman o saniyede verilir.",
    lead: "İlk ekrana slogan koymak yaygın bir alışkanlık. Gözün yaptığı ise başka: kenar boşluklarına, menüyle logonun ilişkisine, kaç öğenin aynı anda bağırdığına bakar. Bu sinyaller uyumsuzsa metin adil bir şans bulamaz.",
    imageAlt: "Premium marka ana sayfasında tipografi ve düzen detayı",
    sections: [
      {
        heading: "Kompozisyon cümleden önce konuşur",
        paragraphs: [
          "Butik veya hizmet sitesi açın; ilk kaydedilen genelde başlık değildir. Ekranın yoğunluğu: marjların ne kadar sıkışık hissettirdiği, logonun tek başına mı durduğu, üç düğmenin aynı görsel ağırlığı taşıyıp taşımadığı. Bilinçli okuma başlamadan önce bunlar yetkinlik ya da gürültü olarak okunur.",
          "Web güvenilirliği üzerine yapılan çalışmalar yıllardır aynı eğilimi gösteriyor: insanlar arayüz kalitesini iş kalitesinin göstergesi sayar. Dağınık bir ilk görünümün arkasında güçlü ürün olsa bile eksi puanla başlanır. Sakin ve okunaklı yüzey asıl argümana zaman kazandırır.",
        ],
      },
      {
        heading: "Buradaki kimlik: tipografi, tempo, hiyerarşi",
        paragraphs: [
          "İlk bakış kimliği logo dosyası değildir. Katmanın üstünde neyin göründüğünü yöneten sistemdir: kaç tipografik seviyenin aynı anda öne çıktığı, vurgu renginin bir kez mi yoksa her yerde mi kullanıldığı, boşluk birimlerinin tutarlı mı yoksa rastgele mi olduğu.",
          "Tempo da mesaj verir. Girişte otomatik video, kayan yazı, pop-up markanın aceleci olduğunu söyler. Hızlı açılan, sabit duran, tek net yol sunan site özgüven okutur. Özgüven metin hilesi değil, tasarım kararıdır.",
          "Pazarlama sitelerinde bu kuralları illüstrasyon ve fotoğraftan önce kilitleriz. Hazır tema değil, markaya özel arayüz: hiyerarşi koda yazılır, tek seferlik CSS yamalarıyla kurtarılmaz.",
        ],
      },
      {
        heading: "Bugün uygulayabileceğiniz üç kontrol",
        paragraphs: [
          "Tek tez. Kimin için burada olduğunuzu ve ne yaptığınızı tek cümleyle söyleyebiliyor musunuz; düzen bu cümleyi taşıyor mu yoksa gömüyor mu? ilk ekranı beş şey anlatmaya çalışıyorsa hiçbiri kalmaz.",
          "Tek birincil eylem. İkincil bağlantılar olabilir ama geri planda kalmalı. Eşit ağırlıklı iki düğme, karar vermemekle aynıdır. Mobilde başparmak erişimi ve dokunma alanı testin parçasıdır, sonradan eklenmez.",
          "Sayfalar arası tutarlılık. Ana sayfa cilalı, ürün veya iletişim sayfası şablon stiline dönmüş olabilir. Bu kırılma saniyeler içinde görülür; zayıf bir başlıktan daha çok güven kaybettirir.",
        ],
      },
      {
        heading: "İlk ekran teklifle aynı dili konuşunca",
        paragraphs: [
          "Moda, güzellik, üretim ortaklıkları, profesyonel hizmet gibi yüksek değerlendirme kategorilerinde güven ayrıntıdan önce gelir. Ziyaretçi piksel değil, muhakeme satın alır. İlk ekran, onların problemine aynı muhakemenin uygulandığı hissini vermelidir.",
          "Hız, okunaklı yazı tipi, abartısız vaatler ve teknik temeller (kontrast, odak durumları, meta veri) estetikle aynı masada konuşulmalıdır. Teslimden önce bunları test ederiz; geç açılan veya mobilde bozulan güzel sayfa el sıkışmayı yine kırar.",
          "Üç kontrol geçiyor ama hâlâ yanlış hissediyorsanız sorun çoğu zaman süsleme değil, stratejidir. Düzenin taşıması gereken tek cümleyi netleştirin, sistemi onun etrafında yeniden kurun. Yeni kahraman görselinden yavaş, çok daha kalıcıdır.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Logo kimliğin en küçük parçası",
    excerpt:
      "PDF'teki yeni işaret; e-posta imzasını, ürün sayfasını veya şablon varsayılanlarını düzeltmez.",
    lead: "Yeniden markalaşma projeleri çoğu kez sembolle başlar. Kurallarla başlamalı. Ortak tipografi, renk, boşluk ve bileşen davranışı yoksa en taze logo da parçalı deneyimin üstünde yalnız kalır.",
    imageAlt: "Marka sistemi için grid, renk örnekleri ve tipografi spesimenleri",
    sections: [
      {
        heading: "İnsanların gerçekten hatırladığı",
        paragraphs: [
          "Güvendiği bir markayı tarif etmesini isteyin. Nadiren logoyu çizer. Onay e-postasının nasıl göründüğünü, faturanın siteyle uyumlu olup olmadığını, Instagram ızgarasının ambalajla aynı şirketi hissettirip hissettirmediğini söyler.",
          "Temas noktaları logo versiyonlarından hızlı çoğalır. 32 pikselde ve kamyon giydirmesinde çalışan işaret gerekli ama iş yükünün tamamı değil. Asıl yük, reklam tıklamasından sonra sizinle karşılaştıkları her yüzeydir.",
        ],
      },
      {
        heading: "Sistem zevki tekrarlanabilir karara çevirir",
        paragraphs: [
          "Görsel kimlik sistemi üretim sorularını önceden cevaplar: H1 ile H2 ağırlığı, tek ekranda en fazla kaç vurgu rengi, fotoğraf kırpım oranı, düğme yarıçapı, minimum boşluk ölçeği. Tasarımcı ve geliştirici her sayfada sıfırdan pazarlık etmez.",
          "İyi sistemler yasak da içerir. Gerilmiş logo yok, gövde metninde gölge yok, e-postada üçüncü taraf font yok. Sınırlar ekipleri hızlandırır çünkü reddetmek kolaylaşır.",
          "Hem site hem yönetim paneli gerektiğinde aynı kural setinden çıkarız. Kamusal markayı yok sayan panel, kimliğin süs olduğunu iç kullanıcılara öğretir.",
        ],
      },
      {
        heading: "Çekirdek, üretim, yüzey",
        paragraphs: [
          "Çekirdekte tez, yazı tipi ailesi, renk token'ları, logo boşluğu ve ses sınırları vardır. Ölçeklemeden önce kilitlenir.",
          "Üretimde grid, arayüz bileşenleri, ikon stili, fotoğraf yönü ve hareket limitleri vardır. Günlük iş burada döner.",
          "Yüzey web, sosyal şablonlar, satış sunumları, tabela ve ambalajdır. Web'i kimlikten kopuk tasarlamak iki marka üretir: biri Figma'da, biri tarayıcıda. Farklı tuval, tek sistem olmalı.",
        ],
      },
      {
        heading: "İnsanların açtığı dokümantasyon",
        paragraphs: [
          "Paylaşımlı sürücüde kalan seksen sayfalık brand book sistem değil, arşivdir. İşe yarayan dokümantasyon kısa, aranabilir ve örnek ağırlıklıdır: şunu yap, bunu yapma, gerçek ekranlarla.",
          "Yeni kanal açıldığında (pazar yeri listesi, kısa video kapağı, ortak marka kilidi) kurallar genişler, kırılmaz. Test sabittir: bu parça çekirdekteki tip ve renk mantığını devralıyor mu?",
          "Ürün sayfalarında hâlâ üç farklı düğme stili varken bir logo keşfine bütçe ayıracaksanız durun. Önce yüzeyleri denetleyin. Sistemi düzeltin, sonra işareti inceltin.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editoryal yapı, bağıran çağrıdan daha çok satar",
    excerpt:
      "Sıra yığmaktan üstündür. Tez, kanıt ve eylemi sıralayan sayfa, daha çok görselli broşürden iyi performans verir.",
    lead: "Birçok site hâlâ katlanmış el ilanı gibi okunuyor: kahraman, özellik ızgarası, referans karuseli, sayfa sonu çağrısı. Blokların tek tek suçu yok. Sorun sıradır. Editoryal tempo olmadan ziyaretçi kanıtın yanından geçer, eyleme ikna olmadan varır.",
    imageAlt: "Net tipografik hiyerarşili editoryal ana sayfa düzeni",
    sections: [
      {
        heading: "Broşür yığar; deneyim sıralar",
        paragraphs: [
          "Yığmak sayfa dolana kadar modül eklemektir. Sıralamak bir sonraki adımda neye inanılması gerektiğini sorar. Önce kimin için olduğunuz ve iletişim sonrası ne değişecek. Sonra iddianın gerçek olduğuna dair kanıt. En son eylem isteği.",
          "Her bölüm bir sonraki kaydırmayı hak etmeli. Blok hikâyedeki yerini cevaplayamıyorsa kesin veya taşıyın. Editörlük değer silmek değil, dikkati korumaktır.",
        ],
      },
      {
        heading: "Tipografi satış yoludur",
        paragraphs: [
          "Editoryal sitelerde punto ve aralık navigasyondur. Net H1-H2 basamakları menü minimal olsa bile yol çizer. ~65 karakter satır uzunluğu, tutarlı satır aralığı, yeterli kontrast animasyonlu sayaçtan daha çok anlaşılırlık getirir.",
          "Mobil zayıf hiyerarşiyi masaüstünden hızlı cezalandırır. Başlık beş satıra düşüp alt başlık kayboluyorsa vaat de küçülür. Masaüstü dramını onaylamadan önce telefonda ölçün.",
        ],
      },
      {
        heading: "Kanıtı şüphe nerede doğuyorsa oraya koyun",
        paragraphs: [
          "Genel bir güven bandına hapsolmuş sosyal kanıt atlanması kolaydır. Kanıt itirazla buluşunca işe yarar: vaatten sonra sonuç cümlesi, yetenek listesinden sonra adlı proje, fiyat bağlamından sonra kısa alıntı.",
          "On belirsiz istatistikten güçlü bir örnek iş daha ikna edicidir. Kaynaksız soyut yüzde rozetleri yerine gerçek canlı işleri (üretim siteleri, butik perakende, operasyon araçları) bağlamında gösteririz.",
        ],
      },
      {
        heading: "Tek birincil eylem, sakin çerçeve",
        paragraphs: [
          "Birincil eylem ağırlık alır: etiket, konum, etrafındaki boşluk. İkincil yollar (katalog, SSS, portföy) görünür kalır ama daha sessiz. Eşit ağırlıklı Satın Al ve Keşfet birbirini iptal eder.",
          "Yüksek değerlendirme kategorileri zaman ister. Editoryal tempo buna saygı duyar. Panik sayacı ve agresif pop-up ziyaretçiyi markaya güvenmemeye alıştırır. Net sonraki adım ve dürüst metin baskıdan daha iyi dönüşür.",
          "Mevcut ana sayfanızı tez, kanıt, eylem sütunlarına yerleştirin. Boşluklar hemen görünür. Doldurmak eklenti kurmaktan çok metin ve düzen işidir.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Sessiz lüks online: niyetli sadeleşme",
    excerpt:
      "Soluk renk ve ince font kısayol değildir. Asıl mesele disiplinli boşluk, malzeme ve harekettir.",
    lead: "Sessiz lüks markalar fiziksel sakinliği dijital griye çevirmeyi sık dener. Kaçırılan nokta şu: online sadeleşme her öğenin varlığını haklı çıkarmasıdır. Boş alan yokluk değil, yapıdır.",
    imageAlt: "Yumuşak doğal ışıkta minimal ürün ürün fotoğrafı",
    sections: [
      {
        heading: "Daha az gürültü, daha keskin mesaj",
        paragraphs: [
          "Sadeleştirme yarışan iddiaları temizler. Tek ana mesaj, tek destek satırı, tek yol. Aynı ekranda üç eşit başlık hiçbirinin hatırlanmamasını garanti eder.",
          "Dar palet olur. Okunabilirlik opsiyon değildir. Düşük doygunluk yine kontrast şartını karşılamalı. Fısıldayan ama okunamayan sayfa premium değil, ihmal edilmiştir.",
        ],
      },
      {
        heading: "Ekranda malzeme",
        paragraphs: [
          "Dijital malzeme fotoğraf disiplininden gelir: tutarlı ışık, dürüst doku, kontrollü derinlik, alanı doldurmak yerine ürüne saygılı kırpım. Stok gülümseme ve ağır filtre lüksü anında bozar.",
          "Tipografi de malzeme taşır. Harf aralığı, ağırlık ve marj ambalaj gibi nefes alır. Lüks hikâyeye rastgele sistem fontu yapıştırmak evde basılmış etiket hissi verir.",
        ],
      },
      {
        heading: "İşi olan hareket",
        paragraphs: [
          "Animasyon hiyerarşiyi netleştirmeli, gösteri yapmamalı. Hafif hover, düşünülmüş geçişler, metni okunur tutan scroll davranışı içeriği okurken gizleyen parallax'tan iyidir.",
          "Kullanıcı hâlâ okurken hareket devam ediyorsa düzen başarısız demektir. Duraklatın veya kaldırın. Lüks kontrol olarak okunur.",
        ],
      },
      {
        heading: "Mağaza ve tarayıcıda tek marka",
        paragraphs: [
          "Sessiz lüks tutarlılıkta yaşar. Dükkanda kısa metin, online uzun paragraf markayı böler. Cümle uzunluğu, ürün adlandırması ve eylem dilini kanallarda eşleştirin.",
          "Performans hissin parçasıdır. Yavaş açılış dikkatsizlik okutur. Hız ve temel erişilebilirlik kontrollerini boşluk ve tipografiyle aynı teslim kriteri sayarız; özen mekanikte de görünür.",
          "Sitenizi en iyi fiziksel temas noktanızla karşılaştırın. Ekran mağazanın fısıldadığı yerde bağırıyorsa bir sonraki kampanya bütçesinden önce hizalayın.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Projeyi kısaltan proje notu",
    excerpt:
      "Net hedef, kitle, sınır ve referans öznel geri bildirimi inşa edilebilir karara çevirir.",
    lead: "Keşif görsel pano turizmi değildir. Başarının neye benzediğini, işin kime hitap ettiğini ve kapsam dışında kalanı yazmaktır. Belirsiz girdi pahalı döngü üretir. Somut girdi tasarım ve kodu hareket ettirir.",
    imageAlt: "Klavye yanında stüdyo masasında proje notu",
    sections: [
      {
        heading: "Dört blok: hedef, kitle, kısıt, referans",
        paragraphs: [
          "Hedef gözlemlenebilir değişim adlandırır: ilk ekran konumlandırmayı net söyler, başvuru formu tamamlanır, bayi bulucu kullanılır. Modern veya premium gibi ruh hali kelimesi değil.",
          "Kitle karar vereni, korkularını, hangi kanıta ihtiyaç duyduğunu adlandırır. Kısıtlar zaman çizelgesi, bütçe bandı, mevcut varlıklar, entegrasyonlar, geçilemeyecek hukuki çizgileri listeler.",
          "Referanslar tempo ve yapı gösterir, hırsızlık hedefi değil. Reddettiğiniz siteleri ve nedenlerini de ekleyin.",
        ],
      },
      {
        heading: "İyi cümleler uzun sunumdan iyidir",
        paragraphs: [
          "Tek sayfa on dağınık dokümandan iyidir. Paydaşlar anlaşmıyorsa proje notu bunu dördüncü revizyon turunda değil, erken gösterir.",
          "Daha temiz istiyoruz yerine katmanın üstünde tek birincil eylem ve teknik dökümanların girişsiz indirilebilir olması yazın. İkinci cümle inşa edilebilir.",
        ],
      },
      {
        heading: "Erken kilitle; kilitlemezsen geç ödersin",
        paragraphs: [
          "Strateji, kimlik, arayüz, geliştirme, yayın. Her faz bir öncekinin oturduğunu varsayar. Bileşenler varken konumlandırmayı değiştirmek eskiz değiştirmenin katını maliyetlendirir.",
          "Proje notu ilk kilit noktasıdır. Kurucu liderliğindeki stüdyo niyet yazılıyken hızlı ilerler; tema kaymasız özel iş için yine de o çapa gerekir.",
        ],
      },
      {
        heading: "Birlikte yazın",
        paragraphs: [
          "En iyi proje notları ortak yazılır. Müşteri alan bilgisini getirir; stüdyo boşlukları açığa çıkaran soruları sorar. Ortak dil sonradan biz bunu kastetmedik tartışmasını azaltır.",
          "Stüdyoya yazmadan önce şu cümleyi bitirin: Yayına aldığımızda işe yaradığını şununla anlayacağız: ___. Boşluğu dolduramıyorsanız keşif hâlâ eksiktir.",
          "O cümleyi bağlantılar, kısıtlar ve anti-referanslarla gönderin. Daha keskin teklif ve daha kısa yayın yolu alırsınız.",
        ],
      },
    ],
  },
};

export default content;
