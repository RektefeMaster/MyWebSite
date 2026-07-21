import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "İlk bakışta güven nasıl kurulur",
    excerpt:
      "Site açıldığı anda kullanıcı henüz bir satır okumamıştır. Ama o saniyede markaya güvenip güvenmeyeceğine çoktan karar vermeye başlar.",
    lead: "İlk ekran bir vitrin değil, bir el sıkışmasıdır. Tipografi ağırsa, boşluk rastgeleyse, buton üç tane ve hepsi aynı güçteyse güven gecikir. Metin ne kadar akıllı olursa olsun, yüzey dağınıksa ikna işe yaramaz.",
    imageAlt: "Premium marka arayüzü ve tipografi detayı",
    sections: [
      {
        heading: "Göz, cümleden önce kompozisyonu okur",
        paragraphs: [
          "Çoğu marka ilk izlenimi slogana bağlar. Oysa ekran açıldığında önce düzen görünür: satır aralığı, kenar boşluğu, görselin kırpımı, başlığın ağırlığı. Bunlar bilinçli bir okuma başlamadan “bu iş ciddi mi?” sorusunu cevaplar.",
          "Stanford’un web güvenilirliği çalışmalarında da benzer bir sonuç çıkar. İnsanlar tasarımı süs gibi değil, kalite sinyali gibi okur. Dağınık bir arayüz, iyi bir ürünü bile şüpheli gösterir. Temiz bir arayüz ise henüz kanıt sunmadan kapıyı aralar.",
        ],
      },
      {
        heading: "Netlik, tutarlılık, ölçülebilir niyet",
        paragraphs: [
          "Netlik basit görünür ama zordur. Her öğenin bir işi olmalı. Dekoratif çizgi, stok fotoğraf, animasyon mesajı boğuyorsa çıkarılmalı. Kullanıcı ilk ekranda ne yapacağını anlıyorsa netlik vardır.",
          "Tutarlılık da aynı derecede kritik. Ana sayfa sakin, ürün sayfası bağırıyorsa tek marka değil iki ses duyulur. Tipografi, renk ve boşluk aynı dilde kalmazsa güven parçalanır.",
          "Niyet ise tartışmayı bitirir. “Modern olsun” ölçülemez. “İlk ekranda konum net, tek birincil eylem var” ölçülebilir. Niyet yazıldığında revizyon da kısalır, çünkü herkes aynı hedefe bakıyordur.",
        ],
      },
      {
        heading: "Satın almadan önceki eşik",
        paragraphs: [
          "Güven araştırmaları yıllardır aynı noktaya dokunuyor: insanlar almadan önce markaya güvenmek ister. Moda, güzellik, yaşam tarzı ve hizmette bu eşik daha yüksektir. Ürün elde tutulabilir olsa bile deneyim soyuttur; site o soyutu somutlar.",
          "Dijitalde güveni büyüten şey parıltı değildir. Hız, okunabilir tipografi, tutarlı görsel dil ve abartısız vaat büyütür. Sessiz ve düzenli bir yüzey, bağıran bir yüzeyden daha ikna edicidir.",
        ],
      },
      {
        heading: "İlk ekranı tek cümleye indirin",
        paragraphs: [
          "Ana görünümde tek tez kalsın: kim olduğunuz ve kimin için buradasınız. Görsel dil bu cümleyi taşısın, onunla yarışmasın. Detay aşağıda yaşasın. Scroll ceza değil, hikâyenin devamı olsun.",
          "Sonra sisteme geçin. Tipografi ölçeği, renk kuralları, bileşen ritmi. Kahraman görsel tek başına ölçeklenmez. Sistem varsa her yeni sayfa markayı yeniden ispatlamak zorunda kalmaz.",
          "Kontrol edin: İlk ekranda tek tez var mı? Tipografi üç basamaktan fazla mı karmaşık? Birincil CTA tek mi? Mobilde aynı netlik duruyor mu? Bunlar yerindeyse ilk bakıştaki güven için zemin hazırdır.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Logoyu yenilemek yetmez. Sistem kurmak gerekir",
    excerpt:
      "Logo imzadır. Markayı ayakta tutan şey ise imzanın her kanalda aynı dilde konuşmasını sağlayan kurallardır.",
    lead: "Logo değişince markanın düzeldiğini sanmak yaygın bir hatadır. Asıl sorun çoğu zaman işarette değildir. Tipografi, renk, boşluk, fotoğraf dili ve arayüz bileşenleri birbirini tutmuyorsa yeni logo da yalnız kalır.",
    imageAlt: "Kimlik sistemi için renk ve grid çalışma masası",
    sections: [
      {
        heading: "Sistem, zevki kurala çevirir",
        paragraphs: [
          "Görsel kimlik sistemi “güzel duruyor” cümlesini “kural bu” cümlesine çevirir. Başlık ağırlığı, birincil rengin yeri, buton davranışı, fotoğraf kırpımı, boşluk ölçeği. Bunlar raf için PDF değil, günlük üretim dilidir.",
          "İyi sistem soruyu hızla cevaplar: bu bizim gibi mi? Kötü sistem her işi sıfırdan kurdurur. Tempo düşer, tutarlılık dağılır, marka her kanalda biraz başka birine benzer.",
        ],
      },
      {
        heading: "İnsanlar logoyu değil deneyimi hatırlar",
        paragraphs: [
          "Logo en küçük birimdir. Hatırlanan şey e-posta imzası, ürün sayfası, sosyal kapak, ambalaj, mobil menü, hatta faturadır. Hepsi aynı aile gibi durmuyorsa logo ne kadar iyi olursa olsun yetmez.",
          "Yatırım sırası da bundan çıkar. Önce tez ve kurallar, sonra işaret. Tersi yapılırsa ortaya güzel ama yalnız bir logo çıkar. Yalnız logo markayı taşımaz.",
        ],
      },
      {
        heading: "Üç katman: çekirdek, üretim, yüzey",
        paragraphs: [
          "Çekirdekte tez, tipografi ailesi, renk sistemi, logo kuralları ve yasaklar vardır. Bu katman kilitlenmeden genişleme temiz olmaz.",
          "Ortada grid, bileşenler, fotoğraf dili, ikonografi vardır. Marka gibi üretim burada hızlanır.",
          "Dışarıda web, sosyal, satış materyali, ambalaj ve mekân vardır. Web’i kimlikten kopuk tasarlamak iki marka üretmektir. Biri sunumda kalır, biri tarayıcıda yaşar.",
        ],
      },
      {
        heading: "Sistem raf için değildir",
        paragraphs: [
          "Yeni kanal açıldığında kurallar genişler, bozulmaz. TikTok kapağı da gelse, e-ticaret filtre çubuğu da gelse test aynıdır: yeni öğe çekirdek teze ve tipografi/renk diline ihanet etmemeli.",
          "Dokümantasyon kısa, örnek bol olsun. Ekipler kural ezberlemez, örneğe bakarak üretir. Kullanılmayan 80 sayfalık brand book’tan, her hafta açılan 12 sayfa daha değerlidir.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editoryal web satışa nasıl yardım eder",
    excerpt:
      "İyi bir site katalog gibi yığmaz. Hikâyeyi sıraya koyar, güveni hızlandırır ve sonraki adımı netleştirir.",
    lead: "Hâlâ çok site dijital broşür gibi duruyor. Bol görsel, zayıf hiyerarşi, belirsiz sonraki adım. Editoryal yaklaşım bunu tersine çevirir. Tipografi, boşluk ve içerik ritmi satışın sessiz motoru olur. Amaç bağırmak değil, yönlendirmektir.",
    imageAlt: "Editoryal web düzeni stüdyo ekranında",
    sections: [
      {
        heading: "Yığmak ile sıralamak aynı şey değildir",
        paragraphs: [
          "Broşür bilgi yığar. Deneyim sırayı yönetir: tez, kanıt, eylem. Kullanıcı kaydırdıkça daha ikna olmalı. Her bölüm bir öncekinin üstüne binmeli. Bu “daha az içerik” demek değil. Daha bilinçli içerik demek.",
          "Her bloğa aynı soruyu sorun: neden burada? Cevap yoksa blok sayfayı değil, dikkat süresini yer. Editoryal webde kesmek zayıflık değil, editörlüktür.",
        ],
      },
      {
        heading: "Tipografi satışın görünür kısmıdır",
        paragraphs: [
          "Editoryal arayüzde tipografi süs değildir. Okuma yolunu kurar. Ölçek netse yol nettir. Satır uzunluğu, satır aralığı, başlık ritmi, kontrast. Bunlar UX’in çıplak hâli.",
          "Mobilde bu daha acımasızdır. Küçük ekranda bozulan hiyerarşi markanın vaadini küçültür. Premium hissi parıltıdan değil ölçüden gelir. Başlık mobilde parçalanıyorsa masaüstündeki görkem zaten sahte demektir.",
        ],
      },
      {
        heading: "Kanıtı ayrı kutuya hapsetmeyin",
        paragraphs: [
          "Sosyal kanıt, istatistik ve vaka özeti “güven bölümü”nde mahkûm olmak zorunda değil. Doğru dozda hikâyenin içine girerler. Tezden sonra bir sonuç cümlesi. Ürün anlatısından sonra kısa bir alıntı. Süreçten sonra net bir rakam.",
          "Zayıf istatistik yığını ritmi bozar. Bir veya iki güçlü kanıt, on yumuşak iddiadan daha ikna edicidir.",
        ],
      },
      {
        heading: "CTA bağırmazsa daha iyi çalışır",
        paragraphs: [
          "Tek birincil eylem. Çevresinde net değer. İkincil eylemler görünür kalsın ama yarışmasın. “Hemen al” ile “keşfet” aynı ağırlıkta olmamalı.",
          "İyi editoryal site acele ettirmez, yönlendirir. Özellikle moda, güzellik ve yaşam tarzında tereddüt normaldir. Panik yaratmak güveni düşürür. Sakin bir yön, aceleci bir baskıdan daha çok dönüşüm getirir.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Sessiz lüks ekranda nasıl durur",
    excerpt:
      "Sessiz lüks az öğe ve yüksek niyet ister. Online’da bunu boşluk, malzeme hissi, tutarlı ritim ve abartısız hareket kurar.",
    lead: "Quiet luxury bir gri palet veya ince font değildir. Gösteriş yerine ölçü koyan bir disiplindir. Dijitalde sık yanlış yapılır. Doygunluğu düşürmek yetmez. Her kararın sakin ve bilinçli durması gerekir.",
    imageAlt: "Sessiz lüks estetiğinde minimal still life",
    sections: [
      {
        heading: "Azaltmak, içeriği öldürmek değildir",
        paragraphs: [
          "Sadeleştirme gürültüyü kesmektir. Bir sayfada üç mesaj varsa hiçbiri kalmaz. Bir mesaj varsa hatırlanır. Sessiz lüks “az konuşayım” pozu değildir. Doğru şeyi net söylemektir.",
          "Palet dar olabilir. Kontrast yine de bilinçli olmalı. Düşük doygunluk düşük okunurluk demek değildir. Okunamayan bir “premium” sayfa premium değildir. Sadece loştur.",
        ],
      },
      {
        heading: "Malzeme hissi ve hareket",
        paragraphs: [
          "Dijitalde malzeme fotoğraf kalitesinden, kontrollü derinlikten, keskin kenardan ve tutarlı kırpımdan gelir. Stok gülümseme ve ağır filtre işi anında bozar.",
          "Hareket hiyerarşi için vardır, şov için değil. Her hover performans olmak zorunda değil. Küçük ve tutarlı tepkiler yeter. Scroll’da içerik görünürken kayboluyorsa niyet bozulmuştur. Okunabilirlik her zaman önce gelir.",
        ],
      },
      {
        heading: "Mağaza sakin, site bağırıyorsa marka bölünür",
        paragraphs: [
          "Kanal tutarlılığı sessiz lüksün omurgasıdır. Kısa metin, net ürün hikâyesi, abartısız CTA, tutarlı tipografi. Bunlar mağazada da sitede de aynı nefeste kalmalı.",
          "Bu tutarlılık kalite algısını yükseltir. Kullanıcı “pahalı mı?” diye sormaz. “Dikkatli mi?” diye hisseder. Dikkat, dijital lüksün hem ucuz hem pahalı hammaddesidir. Efekt istemez, disiplin ister.",
        ],
      },
      {
        heading: "His, rakama da bağlanır",
        paragraphs: [
          "Sessiz lüks sadece atmosfer değildir. Daha net ilk ekran, daha az tereddüt, daha yüksek form tamamlama, daha düşük bounce. Tasarım kararları burada iş sonucuna bağlanır.",
          "Estetik ile performans zıt kutuplar değil. İyi kurulmuş sakin bir arayüz markayı korur ve yolu kısaltır.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "İyi proje iyi brief ile başlar",
    excerpt:
      "Hedef, kitle ve kısıtlar netse tempo artar. Revizyon azalır. Sonuç konuşulabilir hale gelir.",
    lead: "Keşif görüşmesi moodboard toplama seansı değildir. Neyin başarı sayılacağını, işin kimin için olduğunu ve nelerin dışarıda kalacağını yazıya dökme işidir. Belirsiz brief pahalı revizyon üretir. Net brief iyi tasarımı hızlandırır.",
    imageAlt: "Keşif brief’i için defter ve stüdyo masası",
    sections: [
      {
        heading: "Brief’te dört net madde",
        paragraphs: [
          "Hedef: proje bitince ne değişmiş olacak? “Daha modern site” hedef değildir. “İlk ekranda konum net olsun, keşif formu tamamlansın” hedeftir.",
          "Kitle: kime konuşuyoruz, neye ikna oluyorlar, hangi itirazları var? Kısıtlar: zaman, bütçe, teknik, mevcut varlıklar, yasaklar. Referanslar: neyin sevildiği ve neyin istenmediği.",
          "Bu maddeler yoksa her yorum öznel kalır. “Daha premium” ölçülemez. “İlk ekranda güven ve tek net CTA” ölçülebilir.",
        ],
      },
      {
        heading: "Referans kopya değildir",
        paragraphs: [
          "Referans şablon değildir. Tempo, boşluk, tipografi ağırlığı, fotoğraf dili, hareket seviyesi tarif eder. “Şunun logosunu istiyoruz” işi yavaşlatır. “Bu sakinlik ve bu hiyerarşi” işi hızlandırır.",
          "İstenmeyen örnekler de aynı derecede değerlidir. Ne olmadığını bilmek, ne olacağını bilmek kadar yön verir. İyi brief’te “yapmayalım” listesi “yapalım” listesi kadar açıktır.",
        ],
      },
      {
        heading: "Erken kilit, geç maliyet",
        paragraphs: [
          "Keşif ve strateji, yaratıcı yön, kimlik, arayüz, geliştirme, lansman. Her aşama bir öncekini kilitler. Erken açık bırakılan karar geç aşamada pahalıya patlar. Kod ve içerik üretildikten sonra yön değiştirmek, eskizi değiştirmekten katbekat maliyetlidir.",
          "Brief bu zincirin ilk halkasıdır. Kısa olabilir. Belirsiz olamaz. Bir sayfalık net brief, on sayfalık dağınık brief’ten daha işe yarar.",
        ],
      },
      {
        heading: "Birlikte yazılan brief sürtünmeyi azaltır",
        paragraphs: [
          "En iyi brief tek taraflı dayatma değildir. Stüdyo sorar, marka cevaplar, birlikte netleşir. Bu ortak yazım ileride “biz öyle dememiştik” tartışmasını azaltır.",
          "Başlamadan önce tek soru: proje bittiğinde başarıyı hangi tek cümleyle anlatacağız? Cevabı yazabiliyorsanız brief çalışmaya hazırdır.",
        ],
      },
    ],
  },
};

export default content;
