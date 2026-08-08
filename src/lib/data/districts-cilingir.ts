import type { District } from "@/lib/types";

/**
 * Istanbul districts served by the "Çilingir" (residential) division.
 *
 * Extended with display-only fields used by the homepage district cards.
 * NOTE: neighborhoods arrays currently hold 5 placeholder entries.
 *       These will be replaced with population-ranked real data (nufusu.com) in a later step.
 */
export interface CilingirDistrict extends District {
  /** One-sentence description shown on district cards */
  description: string;
  /** Approximate neighbourhood count (shown as badge) */
  neighborhoodCount: number;
}

export const cilingirDistricts: CilingirDistrict[] = [
  {
    slug: "esenyurt",
    name: "Esenyurt",
    population: 1003905,
    description: "İstanbul'un en kalabalık ilçelerinden biri. Yoğun konut alanları ve sitelerle her saatte çilingir ihtiyacı doğuyor.",
    neighborhoodCount: 43,
    neighborhoods: [
      { slug: "pinar", name: "Pınar Mahallesi", population: 42721, districtSlug: "esenyurt" },
      { slug: "mehtercesme", name: "Mehterçeşme Mahallesi", population: 37697, districtSlug: "esenyurt" },
      { slug: "yesilkent", name: "Yeşilkent Mahallesi", population: 37410, districtSlug: "esenyurt" },
      { slug: "suleymaniye", name: "Süleymaniye Mahallesi", population: 34649, districtSlug: "esenyurt" },
      { slug: "baglarcesme", name: "Bağlarçeşme Mahallesi", population: 33174, districtSlug: "esenyurt" },
      { slug: "cinar", name: "Çınar Mahallesi", population: 31971, districtSlug: "esenyurt" },
      { slug: "osmangazi", name: "Osmangazi Mahallesi", population: 30709, districtSlug: "esenyurt" },
      { slug: "selahaddin-eyyubi", name: "Selahaddin Eyyubi Mahallesi", population: 29837, districtSlug: "esenyurt" },
      { slug: "balikyolu", name: "Balıkyolu Mahallesi", population: 29640, districtSlug: "esenyurt" },
      { slug: "talatpasa", name: "Talatpaşa Mahallesi", population: 29151, districtSlug: "esenyurt" },
      { slug: "turgut-ozal", name: "Turgut Özal Mahallesi", population: 28564, districtSlug: "esenyurt" },
      { slug: "barbaros-hayrettin-pasa", name: "Barbaros Hayrettin Paşa Mahallesi", population: 28385, districtSlug: "esenyurt" },
      { slug: "hurriyet", name: "Hürriyet Mahallesi", population: 28342, districtSlug: "esenyurt" },
      { slug: "incirtepe", name: "İncirtepe Mahallesi", population: 28130, districtSlug: "esenyurt" },
      { slug: "ucevler", name: "Üçevler Mahallesi", population: 27861, districtSlug: "esenyurt" },
      { slug: "fatih", name: "Fatih Mahallesi", population: 27695, districtSlug: "esenyurt" },
      { slug: "akcaburgaz", name: "Akçaburgaz Mahallesi", population: 27530, districtSlug: "esenyurt" },
      { slug: "mehmet-akif-ersoy", name: "Mehmet Akif Ersoy Mahallesi", population: 26809, districtSlug: "esenyurt" },
      { slug: "inonu", name: "İnönü Mahallesi", population: 26737, districtSlug: "esenyurt" },
      { slug: "zafer", name: "Zafer Mahallesi", population: 24513, districtSlug: "esenyurt" },
      { slug: "saadetdere", name: "Saadetdere Mahallesi", population: 24511, districtSlug: "esenyurt" },
      { slug: "namik-kemal", name: "Namık Kemal Mahallesi", population: 23674, districtSlug: "esenyurt" },
      { slug: "yenikent", name: "Yenikent Mahallesi", population: 23452, districtSlug: "esenyurt" },
      { slug: "sultaniye", name: "Sultaniye Mahallesi", population: 23330, districtSlug: "esenyurt" },
      { slug: "yunus-emre", name: "Yunus Emre Mahallesi", population: 22691, districtSlug: "esenyurt" },
      { slug: "ornek", name: "Örnek Mahallesi", population: 20518, districtSlug: "esenyurt" },
      { slug: "necip-fazil-kisakurek", name: "Necip Fazıl Kısakürek Mahallesi", population: 20015, districtSlug: "esenyurt" },
      { slug: "orhan-gazi", name: "Orhan Gazi Mahallesi", population: 19205, districtSlug: "esenyurt" },
      { slug: "istiklal", name: "İstiklal Mahallesi", population: 18702, districtSlug: "esenyurt" },
      { slug: "guzelyurt", name: "Güzelyurt Mahallesi", population: 17956, districtSlug: "esenyurt" },
      { slug: "battalgazi", name: "Battalgazi Mahallesi", population: 17733, districtSlug: "esenyurt" },
      { slug: "gokevler", name: "Gökevler Mahallesi", population: 17691, districtSlug: "esenyurt" },
      { slug: "piri-reis", name: "Piri Reis Mahallesi", population: 17057, districtSlug: "esenyurt" },
      { slug: "sehitler", name: "Şehitler Mahallesi", population: 16868, districtSlug: "esenyurt" },
      { slug: "ataturk", name: "Atatürk Mahallesi", population: 15875, districtSlug: "esenyurt" },
      { slug: "asik-veysel", name: "Aşık Veysel Mahallesi", population: 15543, districtSlug: "esenyurt" },
      { slug: "mevlana", name: "Mevlana Mahallesi", population: 14560, districtSlug: "esenyurt" },
      { slug: "cumhuriyet", name: "Cumhuriyet Mahallesi", population: 14447, districtSlug: "esenyurt" },
      { slug: "akevler", name: "Akevler Mahallesi", population: 12761, districtSlug: "esenyurt" },
      { slug: "koza", name: "Koza Mahallesi", population: 10025, districtSlug: "esenyurt" },
      { slug: "esenkent", name: "Esenkent Mahallesi", population: 9351, districtSlug: "esenyurt" },
      { slug: "ardicli", name: "Ardıçlı Mahallesi", population: 8322, districtSlug: "esenyurt" },
      { slug: "aksemseddin", name: "Akşemseddin Mahallesi", population: 8093, districtSlug: "esenyurt" },
    ],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    population: 422988,
    description: "Modern konut projeleri ve site yaşamıyla öne çıkan Beylikdüzü'nde güvenilir çilingir hizmeti.",
    neighborhoodCount: 10,
    neighborhoods: [
      { slug: "adnan-kahveci", name: "Adnan Kahveci Mahallesi", population: 111164, districtSlug: "beylikduzu" },
      { slug: "kavakli", name: "Kavaklı Mahallesi", population: 67292, districtSlug: "beylikduzu" },
      { slug: "yakuplu", name: "Yakuplu Mahallesi", population: 58863, districtSlug: "beylikduzu" },
      { slug: "baris", name: "Barış Mahallesi", population: 55725, districtSlug: "beylikduzu" },
      { slug: "marmara", name: "Marmara Mahallesi", population: 31850, districtSlug: "beylikduzu" },
      { slug: "cumhuriyet", name: "Cumhuriyet Mahallesi", population: 26174, districtSlug: "beylikduzu" },
      { slug: "dereagzi", name: "Dereağzı Mahallesi", population: 21965, districtSlug: "beylikduzu" },
      { slug: "buyuksehir", name: "Büyükşehir Mahallesi", population: 21125, districtSlug: "beylikduzu" },
      { slug: "gurpinar", name: "Gürpınar Mahallesi", population: 20388, districtSlug: "beylikduzu" },
      { slug: "sahil", name: "Sahil Mahallesi", population: 8374, districtSlug: "beylikduzu" },
    ],
  },
  {
    slug: "bahcesehir",
    name: "Bahçeşehir",
    population: 110000,
    description: "Bahçeşehir 1. ve 2. Kısım ile tüm mahallelerinde 7/24 acil çilingir ve kilit değişimi hizmeti.",
    neighborhoodCount: 2,
    neighborhoods: [
      { slug: "bahcesehir-2-kisim", name: "Bahçeşehir 2. Kısım Mahallesi", population: 63770, districtSlug: "bahcesehir" },
      { slug: "bahcesehir-1-kisim", name: "Bahçeşehir 1. Kısım Mahallesi", population: 37997, districtSlug: "bahcesehir" },
    ],
  },
];
