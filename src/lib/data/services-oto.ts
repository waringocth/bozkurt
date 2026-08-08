import type { Service } from "@/lib/types";

/**
 * Automotive locksmith services for the "Oto Anahtarcı" division.
 * Icon values are Lucide icon names — https://lucide.dev/icons/
 */
export const otoServices: Service[] = [
  {
    slug: "kayip-anahtar-yapimi",
    name: "Kayıp Anahtar Yapımı",
    shortDescription:
      "Araç anahtarınızı kaybettiniz mi? Tüm marka ve modeller için orijinal kalitede yedek anahtar kesimi ve programlama.",
    longDescription:
      "Anahtarınızı kaybettiğinizde veya çalındığında, aracınızı çalıştırabilmek için yeni bir anahtar yapılması gerekir. " +
      "Uzman teknisyenlerimiz BMW, Mercedes, Volkswagen, Toyota, Ford, Renault, Fiat ve diğer tüm marka araçlar için " +
      "orijinal veya kalite aftermarket anahtar kesip programlıyoruz. " +
      "İşlem araç başında (sahada) gerçekleştirildiğinden çekici masrafına gerek kalmaz. " +
      "Eski anahtarları devre dışı bırakarak araç güvenliğinizi de yeniden sağlıyoruz.",
    icon: "KeyRound",
  },
  {
    slug: "anahtar-kopyalama",
    name: "Anahtar Kopyalama",
    shortDescription:
      "Her marka ve modelde yedek anahtar. Çipli, lazerli ve standart anahtar kopyalama, aynı gün teslim.",
    longDescription:
      "Elinizde mevcut anahtarınızdan yedek kopya çıkarıyoruz. " +
      "Standart mekanik anahtarların yanı sıra transponder çipli anahtarlar, akıllı (smart key) anahtarlar ve " +
      "lazerli yüksek güvenlikli anahtarlar da kopyalanabilmektedir. " +
      "Çipli anahtarlarda hem fiziksel kesim hem de immobilizer programlaması aynı seansta tamamlanır. " +
      "Yedek anahtar sahibi olmak, acil durumda zaman ve maliyet tasarrufu sağlar.",
    icon: "Copy",
  },
  {
    slug: "immobilizer-programlama",
    name: "İmmobilizer Programlama",
    shortDescription:
      "Çipli anahtar ve immobilizer programlama. OBD arayüzlü profesyonel ekipmanla tüm araçlarda.",
    longDescription:
      "İmmobilizer (araç hırsızlık önleme) sistemi, yalnızca eşleştirilmiş anahtarlarla çalışır. " +
      "Yeni anahtar yapıldığında veya anahtar kaybedildiğinde immobilizer sistemi yeniden programlanmalıdır. " +
      "OBD bağlantısı ve profesyonel yazılım ekipmanımızla BMW, Mercedes, VAG grubu (VW, Audi, Skoda, Seat), " +
      "Renault, Peugeot, Citroën, Toyota, Honda, Hyundai ve daha birçok markada programlama yapıyoruz. " +
      "İşlem sırasında mevcut anahtarları iptal edip yeni anahtarı sisteme tanıtıyoruz.",
    icon: "Cpu",
  },
  {
    slug: "kontak-kilidi-tamiri",
    name: "Kontak Kilidi Tamiri",
    shortDescription:
      "Kontak kilidi arızası veya kırılan anahtar için yerinde tamir ve değişim hizmeti.",
    longDescription:
      "Kontak kilidinde anahtar döndürülemiyor, anahtar kırıldı veya kilit silindir arızalandıysa " +
      "yerinde tamir ya da değişim yapıyoruz. " +
      "Kırılan anahtar parçasını silindir içinden çıkarıp kilidi onarabiliyoruz. " +
      "Hasarlı veya aşınmış kontak silindirleri yenisiyle değiştirilir ve yeni anahtarlarla uyumlu hale getirilir. " +
      "Tüm işlemler araç başında, sökme gerektirmeden mümkün olan durumlarda tamamlanır.",
    icon: "Settings",
  },
  {
    slug: "kumanda-programlama",
    name: "Kumanda & Key Fob Programlama",
    shortDescription:
      "Araç kumandası (remote) ve akıllı anahtar programlama. Yeni kumanda alımı ve araç eşleştirmesi.",
    longDescription:
      "Araç merkezi kilit kumandanız çalışmıyor, yeni kumanda aldınız veya batarya değişimi sonrası eşleşme bozulduysa " +
      "aracınıza yeni kumanda programlıyoruz. " +
      "Proximity (akıllı/hands-free) anahtar eşleştirmesi dahil geniş marka ve model yelpazesinde hizmet sunuyoruz. " +
      "İkinci el araç alımlarında eski kumandaları devre dışı bırakıp güvenli programlama da yapılmaktadır.",
    icon: "Radio",
  },
  {
    slug: "arac-kapi-acma",
    name: "Araç Kapı Açma",
    shortDescription:
      "Anahtarınız araçta kaldı veya kilit arızası mı? Hasarsız araç kapı açma — nerede olursanız gidiyoruz.",
    longDescription:
      "Anahtarınızı araç içinde kilitli bıraktıysanız, merkezi kilit arızası yaşıyorsanız veya " +
      "acil bir durumda aracınıza erişmeniz gerekiyorsa teknisyenimiz adresinize gelir. " +
      "Özel ekipmanlarımızla boya veya contaya zarar vermeden kapınızı açıyoruz. " +
      "Bebek veya evcil hayvan araç içinde kaldıysa 7/24 acil hattımızı arayın; öncelikli müdahale uyguluyoruz. " +
      "Tüm araç tipleri (sedan, SUV, minibüs, ticari araç) için hizmet mevcuttur.",
    icon: "Car",
  },
];
