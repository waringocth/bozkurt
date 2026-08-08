import type { Service } from "@/lib/types";

/**
 * Residential / general locksmith services for the "Çilingir" division.
 * Icon values are Lucide icon names — https://lucide.dev/icons/
 */
export const cilingirServices: Service[] = [
  {
    slug: "kapi-acma",
    name: "Kapı Açma",
    shortDescription:
      "Anahtarınızı unuttunuz veya kaybettiniz mi? Hasarsız kapı açma hizmetiyle 15 dakika içinde kapınızdayız.",
    longDescription:
      "Ev, ofis veya işyeri kapılarınızı anahtarsız veya kilitli kaldığınızda hasara yol açmadan açıyoruz. " +
      "Uzman çilingirlerimiz mekanik ve elektronik kilitli kapılarda deneyimlidir. " +
      "Esenyurt, Beylikdüzü ve Bahçeşehir bölgelerinde ortalama 15 dakika içinde adresinizde oluyoruz. " +
      "Tüm marka ve model kapılarda hizmet veriyoruz.",
    icon: "DoorOpen",
  },
  {
    slug: "kilit-degisimi",
    name: "Kilit Değişimi",
    shortDescription:
      "Güvenliğiniz için kilit değişimi. Silindir, mandal ve panel kilitlerde yerinde montaj.",
    longDescription:
      "Evinizin ya da işyerinizin güvenliğini artırmak için kilidinizi değiştirebiliriz. " +
      "Yale, Mul-T-Lock, Kale, Dormakaba gibi güvenilir markaların ürünlerini kullanıyoruz. " +
      "Silindir kilit, çift taraflı kilit, kartlı kilit ve biyometrik sistemler dahil geniş ürün yelpazemizden seçim yapabilirsiniz. " +
      "Tüm malzeme ve işçilik garantilidir.",
    icon: "Lock",
  },
  {
    slug: "celik-kapi-servisi",
    name: "Çelik Kapı Servisi",
    shortDescription:
      "Çelik kapı kurulum, tamir ve bakımı. Tüm marka ve modellere marka bağımsız teknik servis.",
    longDescription:
      "Çelik kapınızın kilit mekanizması, menteşe, conta veya kasa kısmında sorun mu yaşıyorsunuz? " +
      "Doğtaş, Çelikağ, Kapı Dünyası, Gordion ve diğer tüm markalara servis veriyoruz. " +
      "Kapı sıkışması, zor açılma, kilit arızası ve gıcırdama sorunlarını aynı gün çözüyoruz. " +
      "Eski veya arızalı çelik kapıları yenisiyle değiştirme hizmetimiz de mevcuttur.",
    icon: "Shield",
  },
  {
    slug: "kasa-acma",
    name: "Kasa Açma",
    shortDescription:
      "Şifrenizi unuttunuz veya kasa kapanıp kaldı mı? Hasarsız açma ve şifre yenileme.",
    longDescription:
      "Şifresini unuttuğunuz, elektronik arıza yapan veya anahtarı kaybolmuş kasaları hasarsız olarak açıyoruz. " +
      "Mekanik şifreli, elektronik şifreli ve parmak izli kasa türlerinde uzmanız. " +
      "Kasa açma işlemi sonrası yeni şifre belirleme ve kilit bakımı da yapılmaktadır. " +
      "Tüm marka yangına dayanıklı kasalar ve kasa odaları için hizmet mevcuttur.",
    icon: "Archive",
  },
  {
    slug: "anahtar-kopyalama",
    name: "Anahtar Kopyalama",
    shortDescription:
      "Her marka anahtarın kopyası. Çiplı, güvenlik ve master anahtarlar dahil.",
    longDescription:
      "Klasik anahtarlardan lazerli güvenlik anahtarlarına, çiplı (transponder) anahtarlardan kartlı geçiş sistemlerine kadar geniş anahtar yelpazesinde kopyalama yapıyoruz. " +
      "Ev, apartman, depo, ofis ve otomobil anahtarlarının kopyalanmasında kullandığımız profesyonel makine parkumuz sayesinde yüksek hassasiyetli kopyalar üretiyoruz. " +
      "Çoğaltılmasına izin verilen güvenlik anahtarlarında da hizmet sunuyoruz.",
    icon: "KeyRound",
  },
  {
    slug: "kilit-tamiri",
    name: "Kilit Tamiri",
    shortDescription:
      "Kırık, sıkışan veya arızalı kilitlerin tamiri. Kapı kolu ve menteşe tamiri de yapılır.",
    longDescription:
      "Silindir kırılması, anahtar kilit içinde kırılması, kilit mandal arızası ve kapı topu bozulması gibi sorunlarda yerinde tamir hizmeti sunuyoruz. " +
      "Onarım mümkün olmayan durumlarda uygun fiyatlı kilit değişimi öneriyoruz. " +
      "Kapı menteşelerinin yenilenmesi, kapı kollarının değiştirilmesi ve kapı ayarı da hizmet kapsamımızdadır.",
    icon: "Wrench",
  },
];
