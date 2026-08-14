import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "what-is-seo": {
    title: "Teknik SEO ve arama motoru görünürlüğü",
    excerpt:
      "Arama motoru botlarının tarama davranışı, teknik altyapı gereksinimleri ve kurumsal web sitelerinde organik görünürlüğü belirleyen temel mimari kararlar.",
    lead: "Arama motoru optimizasyonu, bir web sitesinin arama botları tarafından eksiksiz taranmasını, sayfa hiyerarşisinin doğru anlaşılmasını ve kullanıcının arama niyetine yanıt veren içeriğin dizine eklenmesini sağlayan teknik ve editoryal bir mühendislik disiplinidir. Sunucu yanıt hızları, temiz URL mimarisi ve semantik HTML yapısı bu sürecin temel taşlarıdır.",
    imageAlt: "SEO çalışmasını simgeleyen dizüstü bilgisayar ve büyüteç",
    sections: [
      {
        heading: "Arama motorlarının tarama ve indeksleme mantığı",
        paragraphs: [
          "Arama motorları web sitelerini bağlantılar ve XML site haritaları üzerinden keşfeder. Tarama botları sayfaya ulaştığında ilk olarak robots.txt kurallarını, HTTP durum kodlarını ve DOM yapısını inceler.",
          "Erişimi kısıtlanmış veya sunucu tarafında yavaş yanıt veren sayfalar dizine eklenme sürecinde geriye düşer. Sayfa başlığı, H1 etiketi ve gövde metni arasındaki anlamsal bütünlük, sayfanın hangi sorgularla eşleşeceğini doğrudan belirler.",
          "Arama algoritmaları sürekli güncellendiğinden, sabit sıra garantisi veren yaklaşımlar teknik gerçeklerle bağdaşmaz. Sürdürülebilir görünürlük, sitenin teknik sağlığı ve içerik tutarlılığı ile inşa edilir.",
        ],
      },
      {
        heading: "Teknik altyapı ve Core Web Vitals metrikleri",
        paragraphs: [
          "Sayfa açılış hızı ve görsel kararlılık, arama sıralamasında doğrudan değerlendirilen performans kriterleridir. Optimize edilmemiş medya dosyaları ve gecikmeli yüklenen harici scriptler sayfa skorlarını olumsuz etkiler.",
          "Largest Contentful Paint (LCP) ve Cumulative Layout Shift (CLS) metriklerinin hedeflenen değerlerde tutulması, hem kullanıcı deneyimi hem de arama motoru puanı için gereklidir.",
          "Çok dilli platformlarda ise her dil varyantının bağımsız URL yapısına sahip olması ve hreflang etiketleriyle arama botlarına açıkça bildirilmesi gerekir.",
        ],
      },
      {
        heading: "Arama niyeti ve içerik hiyerarşisi",
        paragraphs: [
          "Kullanıcıların arama sorguları bilgi edinme, ticari araştırma ve doğrudan satın alma olarak farklı niyetlere ayrılır. Web platformundaki her sayfanın bu niyetlerden birine net biçimde odaklanması gerekir.",
          "Kurumsal hizmet sayfaları teknik özellikleri, uygulama alanlarını ve iletişim adımlarını doğrudan sunmalıdır. Blog ve rehber içerikleri ise sektörel sorulara ayrıntılı ve doğrulanabilir yanıtlar vermelidir.",
          "Sayfa içi bağlantılar, ziyaretçiyi hizmet detayından vaka analizine ve teklif formuna mantıklı bir sırada yönlendirmelidir.",
        ],
      },
      {
        heading: "Harici referanslar ve kurumsal güvenilirlik",
        paragraphs: [
          "Arama motorları bir alan adının otoritesini ölçerken sektör içi referansları, harita kayıtlarını ve bağımsız platformlardaki müşteri değerlendirmelerini dikkate alır.",
          "Manipülatif bağlantı edinme yöntemleri kısa vadede ceza riskleri barındırır. Gerçek proje teslimleri ve güncel kurumsal kayıtlar, alan adının uzun vadeli itibarını korur.",
        ],
      },
      {
        heading: "Yazılım geliştirme aşamasında SEO denetimi",
        paragraphs: [
          "Yeni bir web projesinde SEO çalışmaları yayından sonra başlatılan bir eklenti değil, geliştirme sürecinin ayrılmaz bir parçası olmalıdır. Sayfa meta verileri, Open Graph etiketleri, şema işaretlemeleri ve yönlendirme kuralları kodlama aşamasında eksiksiz yapılandırılmalıdır.",
          "Bu teknik temelin eksiksiz kurulması, projenin canlıya geçişinin ardından arama motoru dizinine hızla girmesini sağlar.",
        ],
      },
    ],
  },
  "website-pricing-why-cheap-costs-more": {
    title: "Web sitesi geliştirme maliyetleri ve bütçe planlaması",
    excerpt:
      "Tasarım, yazılım mimarisi, teknik altyapı, içerik üretimi ve bakım kalemlerinin web sitesi bütçelerindeki ağırlığı ve teklif değerlendirme kriterleri.",
    lead: "Web sitesi geliştirme teklifleri arasındaki farklar, sunulan hizmetin teknik derinliği, özgün arayüz tasarımı, mobil performans optimizasyonu ve kod mülkiyeti ile belirlenir. Şablon temaların uyarlanması ile işletmenin iş akışlarına özel sıfırdan kodlanan platformlar farklı mühendislik süreçleri gerektirir.",
    imageAlt: "Web sitesi fiyatlandırması ve kapsam karşılaştırması için çalışma masası",
    sections: [
      {
        heading: "Teklif kalemlerinin teknik karşılıkları",
        paragraphs: [
          "Bir web projesinin maliyetini belirleyen ana unsur, tasarım ve yazılım geliştirme sürecine ayrılan nitelikli mühendislik süresidir. Hazır şablonlar ilk aşamada ekonomik görünse de sınırlı kod esnekliği ve aşırı kaynak tüketimi nedeniyle uzun vadede ek masraflar üretir.",
          "Özel geliştirilen projelerde ise bilgi mimarisi, arayüz bileşenleri, veri tabanı modelleri ve mobil performans standartları sıfırdan planlanır.",
        ],
      },
      {
        heading: "Teklif dokümanında aranması gereken detaylar",
        paragraphs: [
          "Kapsamlı bir teklif dokümanında sayfa adedi, arayüz tasarım aşamaları, kullanılacak yazılım teknolojileri, yönetim paneli yetenekleri ve test kriterleri açıkça tanımlanmalıdır.",
          "Hangi gereksinimlerin fiyata dahil olduğu, hangi taleplerin ek geliştirme fazı olarak ele alınacağı baştan yazılı hale getirilmelidir.",
        ],
      },
      {
        heading: "Stratejik planlama ve içerik mimarisi",
        paragraphs: [
          "Tasarım ve kodlama başlamadan önce yapılacak kullanıcı akışı ve bilgi mimarisi planlaması, revizyon döngülerini azaltır. Hedef kitlenin sayfadaki ilerleme adımları ve dönüşüm noktaları baştan netleştirilmelidir.",
          "İçeriklerin kim tarafından hazırlanacağı ve sayfalara nasıl yerleştirileceği proje takviminin sapmasını engeller.",
        ],
      },
      {
        heading: "Kod mülkiyeti ve bağımsız yönetim altyapısı",
        paragraphs: [
          "Teslim edilen projenin kaynak kodları, alan adı yönetimi ve sunucu yetkileri eksiksiz olarak işletmeye devredilmelidir.",
          "Modüler mimariyle geliştirilmiş bir sistem, işletmenin ilerleyen dönemlerde yeni sayfalar veya işlevler eklemesini kolaylaştırır.",
        ],
      },
      {
        heading: "Kademeli geliştirme yaklaşımı",
        paragraphs: [
          "Bütçenin sınırlı olduğu durumlarda kapsamı genişletip kaliteden ödün vermek yerine, çekirdek hizmetleri içeren odaklı bir ilk faz ile başlamak daha sağlıklı bir yatırımdır.",
          "İkinci aşamada blog, karmaşık otomasyonlar veya ek panel modülleri sisteme entegre edilebilir.",
        ],
      },
    ],
  },
  "whatsapp-chatbot-for-business": {
    title: "İşletmeler için WhatsApp mesajlaşma otomasyonu ve entegrasyon",
    excerpt:
      "Sıkça sorulan sorular, randevu yönetimi, takvim senkronizasyonu, personele devir kuralları ve CRM bağlantısıyla kurumsal mesajlaşma mimarisi.",
    lead: "WhatsApp ve mesajlaşma kanalları, işletmeler ile müşterileri arasındaki en hızlı doğrudan iletişim noktalarıdır. Doğru yapılandırılmış bir mesajlaşma asistanı; rutin bilgi taleplerini karşılar, randevu takvimini yönetir ve satın alma aşamasındaki görüşmeleri ilgili personele aktararak operasyonel verimlilik sağlar.",
    imageAlt: "WhatsApp üzerinden müşteri görüşmesini gösteren akıllı telefon",
    sections: [
      {
        heading: "Asistanın görev sınırları ve bilgi tabanı",
        paragraphs: [
          "Mesajlaşma botunun başarısı, doğrulanmış işletme verileriyle sınırlı ve net bir kapsamda çalışmasına bağlıdır. Çalışma saatleri, hizmet kapsamı, adres ve başlangıç fiyat bilgileri gibi tekrarlanan sorular ilk aşamada çözülmelidir.",
          "Asistanın yanıtlayamayacağı özel taleplerde görüşmenin canlı personele nasıl devredileceği sistem kurallarıyla belirlenmelidir.",
        ],
      },
      {
        heading: "Hizmet ve randevu odaklı işletmelerde kullanım alanları",
        paragraphs: [
          "Klinikler, danışmanlık ofisleri, butik oteller ve bakım merkezleri gibi randevu ile çalışan işletmelerde mesajlaşma otomasyonu müşteri kaybını önemli ölçüde azaltır.",
          "Mesai saatleri dışında gelen randevu talepleri takvim kontrolü yapılarak anında onaylanabilir.",
        ],
      },
      {
        heading: "Merkezi takvim senkronizasyonu",
        paragraphs: [
          "Asistanın randevu oluşturabilmesi için Google Takvim veya kurumsal rezervasyon yazılımlarıyla çift yönlü entegrasyonu şarttır. Alınan bir randevu ilgili saat dilimini anında kapatmalıdır.",
          "Randevu saatinden önce gönderilen otomatik hatırlatma bildirimleri, katılım oranlarını düzenli tutar.",
        ],
      },
      {
        heading: "Personele bağlam korumalı devir mekanizması",
        paragraphs: [
          "Özel fiyatlandırma veya detaylı danışmanlık gerektiren durumlarda asistan görüşmeyi durdurup müşteri temsilcisine bildirim göndermelidir.",
          "Temsilci sohbete dahil olduğunda önceki tüm konuşma geçmişini görerek doğrudan konuya odaklanabilmelidir.",
        ],
      },
      {
        heading: "CRM ve müşteri kaydı entegrasyonu",
        paragraphs: [
          "Mesajlaşma kanalından gelen iletişim bilgileri ve talep detayları merkezi bir CRM panelinde toplanmalıdır.",
          "Bu sayede geçmiş görüşmeler, alınan randevular ve ekip notları tek bir kurumsal hafıza altında kayıt altında tutulur.",
        ],
      },
    ],
  },
  "technical-seo-checklist-business-website": {
    title: "Kurumsal web sitelerinde yayın öncesi teknik kontrol listesi",
    excerpt:
      "Arama motoru dizini, meta etiketler, 301 yönlendirmeleri, medya optimizasyonu ve form doğrulama süreçleri için yayın öncesi denetim rehberi.",
    lead: "Bir web sitesinin yayına alınması, görsel ve fonksiyonel kontrollerin yanı sıra arama motoru indeksleme ayarları ve performans testlerini içeren kapsamlı bir teknik denetim sürecini gerektirir. Canlıya çıkış öncesi tamamlanan kontroller, olası erişim hatalarının ve görünürlük kayıplarının önüne geçer.",
    imageAlt: "Teknik SEO kontrolü yapılan dizüstü bilgisayar ekranı",
    sections: [
      {
        heading: "Dizin ve tarama yapılandırması",
        paragraphs: [
          "Geliştirme aşamasında kullanılan noindex meta etiketleri ve robots.txt kısıtlamaları canlıya çıkış anında güncellenmelidir.",
          "Arama motorlarının tüm açık sayfalara erişebildiği ve XML site haritasının geçerli URL listesini içerdiği doğrulanmalıdır.",
        ],
      },
      {
        heading: "Sayfa başlıkları ve meta açıklamalar",
        paragraphs: [
          "Her sayfa için benzersiz başlık (title) ve meta açıklama (description) tanımlanmalıdır. Başlıklar sayfanın sunduğu hizmeti ve kurumsal kimliği net olarak ifade etmelidir.",
          "Sosyal medya paylaşımlarında doğru görsel ve başlığın görünmesi için Open Graph etiketleri eksiksiz yapılandırılmalıdır.",
        ],
      },
      {
        heading: "Eski URL yapılarının 301 ile yönlendirilmesi",
        paragraphs: [
          "Yenilenen web sitelerinde eski sayfa adreslerinin yeni karşılıklarına HTTP 301 kalıcı yönlendirme ile aktarılması zorunludur.",
          "Yönlendirilmeyen adresler 404 hatası üreterek arama motoru sıralamalarının ve gelen ziyaretçi trafiğinin kaybolmasına neden olur.",
        ],
      },
      {
        heading: "Medya optimizasyonu ve mobil hız testleri",
        paragraphs: [
          "Tüm görsel materyaller WebP veya AVIF gibi modern formatlara dönüştürülmeli ve ekran boyutlarına uygun srcset değerleriyle sunulmalıdır.",
          "Mobil cihazlarda sayfa yükleme süreleri ölçülmeli, kaynakların gereksiz bant genişliği tüketmesi engellenmelidir.",
        ],
      },
      {
        heading: "İletişim ve form uçtan uca doğrulaması",
        paragraphs: [
          "İletişim formları, teklif adımları, WhatsApp butonları ve telefon bağlantıları farklı cihazlarda bizzat test edilmelidir.",
          "Form gönderimlerinin veritabanına ve yetkili e-posta adreslerine eksiksiz ulaştığı teyit edilmelidir.",
        ],
      },
    ],
  },
  "identity-at-first-glance": {
    title: "Web arayüzlerinde görsel hiyerarşi ve ilk izlenim mimarisi",
    excerpt:
      "Ziyaretçinin ilk saniyelerdeki dikkatini yönlendiren tipografi ölçeği, sayfa ritmi, fotoğraf kalitesi ve bilgi sunumu ilkeleri.",
    lead: "Kullanıcıların bir web platformunda kalma ve incelemeye devam etme kararı, ilk ekranda karşılaştıkları görsel düzenin netliği ile doğrudan ilişkilidir. Bilgi mimarisi, tipografik kontrast ve boşluk dengesi doğru kurgulanmış bir arayüz, markanın kurumsal ağırlığını ve hizmet teklifini zahmetsizce aktarır.",
    imageAlt: "Web sitesinde tipografi ve sayfa düzeni ayrıntısı",
    sections: [
      {
        heading: "İlk ekranın bilgi hiyerarşisi",
        paragraphs: [
          "İlk ekran kompozisyonu, işletmenin temel faaliyet alanını ve ziyaretçiye sunduğu değeri açıkça belirtmelidir. Aşırı görsel yoğunluk kullanıcının odağını dağıtır.",
          "Net bir ana başlık, destekleyici açıklama metni ve belirgin bir eylem çağrısı, sayfanın devamına geçişi doğal biçimde tetikler.",
        ],
      },
      {
        heading: "Tipografi ve kurumsal algı",
        paragraphs: [
          "Yazı tiplerinin karakteri, boyutu ve satır aralıkları arayüzün okunabilirliğini ve ciddiyetini belirler. Başlıklar ile gövde metinleri arasında belirgin bir kontrast bulunmalıdır.",
          "Mobil ekranlarda rahat okunan puntolar ve yeterli renk kontrastı tercih edilmelidir.",
        ],
      },
      {
        heading: "Özgün görsel materyal kullanımı",
        paragraphs: [
          "Jenerik stok fotoğraflar yerine işletmenin gerçek çalışma alanlarını, üretim aşamalarını ve ürünlerini yansıtan yüksek kaliteli görseller kullanılmalıdır.",
          "Gerçek görsel detaylar, ziyaretçinin markaya duyduğu güveni somutlaştırır.",
        ],
      },
      {
        heading: "Arayüz netliğinin değerlendirilmesi",
        paragraphs: [
          "İlk ekranın etkinliği, bağımsız kullanıcıların sayfayı kısa sürede tarayıp temel hizmeti doğru kavraması ile test edilebilir.",
          "Gereksiz dekoratif unsurların ayıklanması, sayfanın asıl mesajını öne çıkarır.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Kurumsal kimlikten merkezi arayüz tasarım sistemine",
    excerpt:
      "Renk rolleri, tipografi ölçeği, boşluk hiyerarşisi ve CSS tasarım token'ları ile web platformlarında ve yönetim panellerinde tutarlılık sağlama.",
    lead: "Marka kimliği yalnızca logonun varlığıyla sınırlı değildir; web sitelerinden yönetim panellerine kadar tüm dijital temas noktalarında ortak kurallarla çalışan bir arayüz sistemini gerektirir. Tasarım token'ları ve modüler bileşen mimarisi bu tutarlılığı teknik olarak garanti altına alır.",
    imageAlt: "Marka tasarım sistemi için renk, tipografi ve ızgara örnekleri",
    sections: [
      {
        heading: "Arayüz bileşenlerinin sistemleştirilmesi",
        paragraphs: [
          "Butonlar, form alanları, kartlar ve modal pencereler gibi arayüz öğeleri merkezi kurallara bağlanmalıdır.",
          "Kuralların tanımlanmadığı durumlarda sayfalar arasında görsel tutarsızlıklar ve bakım zorlukları oluşur.",
        ],
      },
      {
        heading: "CSS tasarım token'ları ve merkezi yönetim",
        paragraphs: [
          "Renkler, boşluk basamakları ve köşe yuvarlama değerleri merkezi CSS değişkenleri olarak tanımlanır.",
          "Bu yaklaşım, tasarım güncellemelerinin tek bir noktadan tüm platformlara ve panellere yansımasını sağlar.",
        ],
      },
      {
        heading: "Web platformu ve yönetim paneli tutarlılığı",
        paragraphs: [
          "Dışa dönük kurumsal web sitesi ile şirket içi yönetim panelleri aynı tasarım sistemini ve görsel kuralları paylaşmalıdır.",
          "Bu görsel süreklilik, ekiplerin sisteme adaptasyonunu hızlandırır ve kurumsal kaliteyi içeriye de taşır.",
        ],
      },
      {
        heading: "Mevcut arayüzlerin standardizasyonu",
        paragraphs: [
          "Farklı zamanlarda geliştirilmiş sayfaların bileşenleri incelenerek ortak standartlara indirgenmelidir.",
          "Gereksiz stil varyasyonlarının temizlenmesi kod tabanını hafifletir ve sayfa performansını artırır.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Dönüşüm odaklı web sitelerinde sayfa akışı ve içerik mimarisi",
    excerpt:
      "Kurumsal ana sayfalarda değer teklifi, vaka kanıtları, süreç açıklamaları ve eylem çağrılarının hiyerarşik yerleşimi.",
    lead: "Bir web sitesinin ticari başarısı, sayfa boyunca sunulan bilginin mantıksal sıralaması ile şekillenir. Ziyaretçinin karar alma aşamalarını takip eden bir içerik kurgusu; önce hizmeti açıklar, ardından somut kanıtları sunar ve net bir eylem çağrısıyla süreci tamamlar.",
    imageAlt: "Belirgin tipografi hiyerarşisine sahip kurumsal ana sayfa",
    sections: [
      {
        heading: "1. Değer teklifinin ve hizmet kapsamının sunumu",
        paragraphs: [
          "Sayfa açılışında işletmenin sunduğu temel çözüm ve hedef kitle net olarak belirtilmelidir.",
          "Karmaşık ifadelerden kaçınarak doğrudan konuya odaklanan bir başlık ve açıklama kurgulanmalıdır.",
        ],
      },
      {
        heading: "2. Somut referanslar ve proje vaka analizleri",
        paragraphs: [
          "Hizmet iddiası, tamamlanmış projelerin fotoğrafları, teknik detayları ve kurumsal referanslarla desteklenmelidir.",
          "Kullanıcıya sunulan somut kanıtlar tereddütleri ortadan kaldırır.",
        ],
      },
      {
        heading: "3. Süreç ve teslim aşamalarının açıklanması",
        paragraphs: [
          "Çalışma yönteminin ve teslim adımlarının şeffaf biçimde paylaşılması müşteri tarafında öngörülebilirlik sağlar.",
          "Sık karşılaşılan teknik ve operasyonel sorular sayfa akışı içinde yanıtlanmalıdır.",
        ],
      },
      {
        heading: "4. Belirgin ve odaklanmış eylem çağrısı",
        paragraphs: [
          "Sayfanın sonunda kullanıcıyı teklif almaya, randevu oluşturmaya veya doğrudan iletişime geçmeye yönlendiren net bir eylem noktası bulunmalıdır.",
          "Çok sayıda birbiriyle yarışan buton yerine tek ve odaklı bir eylem tercih edilmelidir.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Seçkin ve butik markalar için dijital tasarım disiplini",
    excerpt:
      "Minimalist web mimarisinde tipografik hassasiyet, özgün fotoğraf dili, negatif alan yönetimi ve ölçülü hareket dengesi.",
    lead: "Butik markalar ve yüksek standartlı hizmet sunan işletmeler için dijital tasarım, gereksiz görsel karmaşadan arınmış, tipografisi kusursuz ve materyalleri dürüstçe sergileyen sakin bir zarafet gerektirir. Sadelik, temel bilgilerin açık ve şeffaf biçimde sunulmasıyla değer kazanır.",
    imageAlt: "Yumuşak ışıkta fotoğraflanmış sade ürün düzeni",
    sections: [
      {
        heading: "Sadelik ve bilgi şeffaflığı",
        paragraphs: [
          "Minimalist arayüzler ürün özelliklerini, malzeme kalitesini veya hizmet şartlarını eksiksiz aktarmalıdır.",
          "Negatif alanlar, sunulan ürünün ve editoryal içeriğin öne çıkmasını sağlamak üzere dengeli biçimde kullanılır.",
        ],
      },
      {
        heading: "Tipografik hassasiyet ve okunabilirlik",
        paragraphs: [
          "Zarif serif veya yalın sans-serif yazı tipleri seçilirken kontrast ve okunabilirlik kuralları titizlikle korunmalıdır.",
          "Yazı boyutları ve hiyerarşi hem masaüstü hem de mobil cihazlarda rahatça taranabilmelidir.",
        ],
      },
      {
        heading: "Özgün fotoğraf dili ve doku kalitesi",
        paragraphs: [
          "El işçiliğini, malzeme detaylarını ve mekân atmosferini doğal ışıkla gösteren özgün fotoğraflar tercih edilmelidir.",
          "Yapay filtrelerden uzak duran dürüst kareler markanın seçkin duruşunu pekiştirir.",
        ],
      },
      {
        heading: "Ölçülü ve amaca yönelik etkileşimler",
        paragraphs: [
          "Sayfadaki mikro animasyonlar yalnızca gezinmeye ve okuma akışına yardımcı olacak düzeyde tutulmalıdır.",
          "Gereksiz hareketlerden arındırılmış sakin bir ritim, kullanıcıya saygılı bir deneyim sunar.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Web sitesi ve yazılım projelerinde teknik brief hazırlama",
    excerpt:
      "İş hedefleri, kullanıcı profili, mevcut veri kaynakları, teslim takvimi ve bütçe sınırlarını netleştiren proje dokümantasyonu.",
    lead: "Başarılı bir web ve yazılım projesinin temeli, iş hedeflerini, teknik gereksinimleri ve operasyonel sınırları eksiksiz tanımlayan net bir proje brief'i ile atılır. Doğru hazırlanmış bir brief, geliştirme sürecindeki belirsizlikleri ortadan kaldırır ve bütçenin verimli kullanılmasını sağlar.",
    imageAlt: "Klavye yanında web sitesi proje notları bulunan çalışma masası",
    sections: [
      {
        heading: "Çözülecek operasyonel ve ticari problemin tanımı",
        paragraphs: [
          "Projenin hangi iş hedefine hizmet edeceği ve hangi operasyonel darboğazı çözeceği net olarak ifade edilmelidir.",
          "İhtiyacın doğru tarif edilmesi, en uygun mimari ve teknik çözümün belirlenmesini sağlar.",
        ],
      },
      {
        heading: "Hedef kitle ve kullanıcı rolleri",
        paragraphs: [
          "Platformu kullanacak ziyaretçilerin ve panel yöneticilerinin beklentileri tanımlanmalıdır.",
          "Kullanıcı profili sayfa tasarımını, bilgi akışını ve teknik işlevleri doğrudan şekillendirir.",
        ],
      },
      {
        heading: "Mevcut içerik ve entegrasyon altyapısı",
        paragraphs: [
          "Hazır olan fotoğraflar, kurumsal metinler, logo dosyaları ve bağlanılacak harici servisler listelenmelidir.",
          "Entegrasyon ihtiyaçlarının baştan bilinmesi teknik mimari planını hızlandırır.",
        ],
      },
      {
        heading: "Teslim takvimi ve bütçe planı",
        paragraphs: [
          "Hedeflenen teslim dönemi ve bütçe çerçevesi açıkça paylaşılmalıdır.",
          "Gerçekçi bir takvim ve kapsam planı, projenin öngörülen sürede başarıyla tamamlanmasını sağlar.",
        ],
      },
    ],
  },
};

export default content;
