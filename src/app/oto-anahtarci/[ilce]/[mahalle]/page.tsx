import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Phone, MessageCircle } from "lucide-react";

import { otoDistricts } from "@/lib/data/districts-oto";
import ServiceGridOto from "@/components/oto-anahtarci/ServiceGridOto";
import CtaBannerOto from "@/components/oto-anahtarci/CtaBannerOto";
import Breadcrumb from "@/components/Breadcrumb";
import MobileBottomBar from "@/components/MobileBottomBar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_URL = "https://bozkurtcilingir.com";
const PHONE = process.env.NEXT_PUBLIC_PHONE_OTO || "0000 000 00 00";

// ─── Static params ────────────────────────────────────────────────────────────

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours

export function generateStaticParams() {
  return otoDistricts.flatMap((d) =>
    d.neighborhoods.slice(0, 5).map((n) => ({
      ilce:    d.slug,
      mahalle: n.slug,
    }))
  );
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  props: PageProps<"/oto-anahtarci/[ilce]/[mahalle]">
): Promise<Metadata> {
  const { ilce, mahalle } = await props.params;
  const district = otoDistricts.find((d) => d.slug === ilce);
  const neighborhood = district?.neighborhoods.find((n) => n.slug === mahalle);
  if (!district || !neighborhood) return {};

  const title = `${district.name} ${neighborhood.name} Oto Anahtarcı | Araç Başında Hizmet`;
  const description = `${district.name} ${neighborhood.name}'nde mobil oto anahtarcı hizmeti. Kayıp araç anahtarı kopyalama, immobilizer programlama — çekicisiz yerinde çözüm.`;
  const canonical = `${BASE_URL}/oto-anahtarci/${ilce}/${mahalle}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "tr_TR",
      type: "website",
    },
  };
}

// ─── JSON-LD helpers ──────────────────────────────────────────────────────────

function localBusinessSchema(
  districtName: string,
  neighborhoodName: string,
  districtSlug: string,
  neighborhoodSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bozkurt Oto Anahtarcı",
    description: `${districtName} ${neighborhoodName}'nde 7/24 profesyonel oto anahtarcı ve mobil kapı açma hizmetleri.`,
    telephone: "+905000000000",
    url: `${BASE_URL}/oto-anahtarci/${districtSlug}/${neighborhoodSlug}`,
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: `${neighborhoodName}, ${districtName}, İstanbul`,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: districtName,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    priceRange: "₺₺",
  };
}

function breadcrumbSchema(
  districtName: string,
  neighborhoodName: string,
  districtSlug: string,
  neighborhoodSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Oto Anahtarcı",
        item: `${BASE_URL}/oto-anahtarci`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: districtName,
        item: `${BASE_URL}/oto-anahtarci/${districtSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: neighborhoodName,
        item: `${BASE_URL}/oto-anahtarci/${districtSlug}/${neighborhoodSlug}`,
      },
    ],
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function NeighborhoodOtoPage(
  props: PageProps<"/oto-anahtarci/[ilce]/[mahalle]">
) {
  const { ilce, mahalle } = await props.params;
  const district     = otoDistricts.find((d) => d.slug === ilce);
  const neighborhood = district?.neighborhoods.find((n) => n.slug === mahalle);
  if (!district || !neighborhood) notFound();

  // Nearby neighborhoods — up to 4 others in the same district
  const nearbyNeighborhoods = district.neighborhoods
    .filter((n) => n.slug !== mahalle)
    .slice(0, 4);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema(
              district.name,
              neighborhood.name,
              district.slug,
              neighborhood.slug
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              district.name,
              neighborhood.name,
              district.slug,
              neighborhood.slug
            )
          ),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label={`${district.name} ${neighborhood.name} oto anahtarcı hizmeti`}
        className="relative isolate overflow-hidden bg-amber-950 pb-20 pt-14 sm:pb-28 sm:pt-20"
      >
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -5%, oklch(57% 0.165 48 / 0.30) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            className="mb-8"
            items={[
              { label: "Oto Anahtarcı",  href: "/oto-anahtarci" },
              { label: district.name,    href: `/oto-anahtarci/${district.slug}` },
              { label: neighborhood.name },
            ]}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Copy */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-800/50 px-4 py-1.5 text-xs font-medium text-amber-200">
                <MapPin className="h-3.5 w-3.5" />
                {district.name} · {neighborhood.name} · Mobil Servis
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {district.name}{" "}
                <span className="text-amber-400">{neighborhood.name}</span>{" "}
                Oto Anahtarcı
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-amber-200/75">
                {district.name} ilçesi {neighborhood.name}&apos;nde aracınızın markası
                ne olursa olsun, kayıp anahtar yapımı ve immobilizer arızaları için{" "}
                <strong className="text-white">adresinize geliyoruz</strong>.
                Çekici masrafına son!
              </p>

              <ul className="mt-5 flex flex-wrap gap-3 text-sm text-amber-200/70">
                {["✓ Araç Başında Çözüm", "✓ 7/24 Hizmet", "✓ Tüm Markalar", "✓ Çekici Masrafı Yok"].map(
                  (b) => <li key={b}>{b}</li>
                )}
              </ul>
            </div>

            {/* CTA card */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:w-56">
              <CallButton
                section="oto"
                data-phone-cta="neighborhood-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-amber-950 shadow-lg transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {PHONE}
              </CallButton>
              <WhatsAppButton
                section="oto"
                data-wa-cta="neighborhood-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCALLY-FLAVOURED INTRO ────────────────────────────────────── */}
      <section
        aria-label="Bölge hakkında"
        className="bg-amber-50/50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-white p-8">
            <h2 className="mb-4 text-xl font-bold text-amber-950">
              {district.name} {neighborhood.name} Mobil Oto Anahtarcı
            </h2>
            <p className="leading-relaxed text-[var(--muted-foreground)]">
              {district.name} ilçesinin en yoğun bölgelerinden biri olan{" "}
              <strong className="text-amber-900">{neighborhood.name}</strong>{" "}
              sınırları içinde aracınızın anahtarını mı kaybettiniz veya kilitli mi kaldınız? 
              Otomobilinizi servise veya sanayiye çektirmenize, çekici masrafı ödemenize gerek kalmadan 
              tam donanımlı mobil servis aracımızla doğrudan bulunduğunuz konuma geliyoruz. 
              Gelişmiş OBD programlama cihazlarımız sayesinde, tüm işlemleri {neighborhood.name} 
              içindeki aracınızın başında eksiksiz olarak tamamlıyoruz.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
              Kayıp anahtar kopyalama, immobilizer çip eşleştirme, bagaj kapağı açma veya
              kontak arızaları onarımı gibi tüm profesyonel hizmetlerimiz için{" "}
              <strong className="text-amber-900">{district.name}</strong> ilçesi{" "}
              {neighborhood.name} öncelikli kapsama alanımızdadır. Zaman, stres ve çekici 
              maliyetinden büyük ölçüde tasarruf etmek için 7/24 kesintisiz hizmet veren ekibimize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE GRID ───────────────────────────────────────────────── */}
      <ServiceGridOto />

      {/* ── NEARBY NEIGHBORHOODS ───────────────────────────────────────── */}
      {nearbyNeighborhoods.length > 0 && (
        <section
          id="yakin-mahalleler"
          aria-labelledby="nearby-heading"
          className="bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* New Coverage Card */}
            <div className="mb-12 rounded-2xl border border-amber-100 bg-amber-50/50 p-8 text-center sm:p-10">
              <h3 className="mb-4 text-2xl font-bold text-amber-950">
                {neighborhood.name} ve Çevresinde Geniş Hizmet Ağı
              </h3>
              <p className="mx-auto max-w-2xl text-[var(--muted-foreground)]">
                Bozkurt Oto Anahtarcı olarak sadece {neighborhood.name} ile sınırlı kalmıyor, {district.name} ilçesindeki komşu mahallelere de aynı hızda servis yönlendiriyoruz. 
                <strong className="mx-1 text-amber-800">
                  {nearbyNeighborhoods.map((n) => n.name).join(", ")}
                </strong>
                gibi çevre bölgelerde de çağrınızdan hemen sonra yola çıkıyor, aracınızın bulunduğu konuma hızla ulaşıyoruz.
              </p>
            </div>

            <div className="mb-10 text-center">
              <h2
                id="nearby-heading"
                className="text-2xl font-bold tracking-tight text-amber-950"
              >
                {district.name}&apos;daki Diğer Mahalleler
              </h2>
              <p className="mt-3 text-[var(--muted-foreground)]">
                Yakın mahallelerde de mobil oto anahtarcı hizmetimiz mevcuttur.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {nearbyNeighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/oto-anahtarci/${district.slug}/${n.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50/50 px-5 py-4 transition-all hover:border-amber-300 hover:bg-amber-100/50 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 shrink-0 text-amber-500" />
                      <span className="text-sm font-medium text-amber-950 group-hover:text-amber-700">
                        {n.name}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Back to district */}
            <div className="mt-8 text-center">
              <Link
                href={`/oto-anahtarci/${district.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 underline-offset-4 hover:underline"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                {district.name}&apos;un tüm mahalleleri
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <CtaBannerOto
        heading={`${neighborhood.name}&apos;nde Arabanızın Anahtarı mı Kayıp?`}
        subheading={`${district.name} ${neighborhood.name} bölgesine teknisyen yönlendirmek için 7/24 bizi arayabilirsiniz.`}
        caption={`${district.name} · ${neighborhood.name} ve çevre mahallelerde mobil servis`}
      />

      <MobileBottomBar division="oto-anahtarci" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
