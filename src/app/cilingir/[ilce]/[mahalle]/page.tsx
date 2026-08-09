import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import { cilingirDistricts } from "@/lib/data/districts-cilingir";
import ServiceGridCilingir from "@/components/cilingir/ServiceGridCilingir";
import CtaBannerCilingir from "@/components/cilingir/CtaBannerCilingir";
import Breadcrumb from "@/components/Breadcrumb";
import MobileBottomBar from "@/components/MobileBottomBar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_URL = "https://bozkurtcilingir.com";
const PHONE = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0535 310 61 39";

// ─── Static params ────────────────────────────────────────────────────────────

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours

export function generateStaticParams() {
  return cilingirDistricts.flatMap((d) =>
    d.neighborhoods.slice(0, 5).map((n) => ({
      ilce:    d.slug,
      mahalle: n.slug,
    }))
  );
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  props: PageProps<"/cilingir/[ilce]/[mahalle]">
): Promise<Metadata> {
  const { ilce, mahalle } = await props.params;
  const district = cilingirDistricts.find((d) => d.slug === ilce);
  const neighborhood = district?.neighborhoods.find((n) => n.slug === mahalle);
  if (!district || !neighborhood) return {};

  const title = `${district.name} ${neighborhood.name} Çilingir | 7/24 Kapı Açma Hizmeti`;
  const description = `${district.name} ${neighborhood.name}'nde 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi — ustamız 15 dakika içinde adresinizde.`;
  const canonical = `${BASE_URL}/cilingir/${ilce}/${mahalle}`;

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
    name: "Bozkurt Çilingir",
    description: `${districtName} ${neighborhoodName}'nde 7/24 profesyonel çilingir ve kapı açma hizmetleri.`,
    telephone: "+905353106139",
    url: `${BASE_URL}/cilingir/${districtSlug}/${neighborhoodSlug}`,
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
        name: "Çilingir",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: districtName,
        item: `${BASE_URL}/cilingir/${districtSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: neighborhoodName,
        item: `${BASE_URL}/cilingir/${districtSlug}/${neighborhoodSlug}`,
      },
    ],
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function NeighborhoodPage(
  props: PageProps<"/cilingir/[ilce]/[mahalle]">
) {
  const { ilce, mahalle } = await props.params;
  const district     = cilingirDistricts.find((d) => d.slug === ilce);
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
        aria-label={`${district.name} ${neighborhood.name} çilingir hizmeti`}
        className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-14 sm:pb-28 sm:pt-20"
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
              "radial-gradient(ellipse 60% 50% at 50% -5%, oklch(43% 0.085 255 / 0.30) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            className="mb-8"
            items={[
              { label: "Çilingir",       href: "/" },
              { label: district.name,    href: `/cilingir/${district.slug}` },
              { label: neighborhood.name },
            ]}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Copy */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-600/40 bg-navy-800/50 px-4 py-1.5 text-xs font-medium text-navy-200">
                <MapPin className="h-3.5 w-3.5" />
                {district.name} · {neighborhood.name} · 7/24 Hizmet
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {district.name}{" "}
                <span className="text-navy-300">{neighborhood.name}</span>{" "}
                Çilingir
              </h1>

              {/* ── Compact CTA row — visible on mobile before scroll ── */}
              <div className="mt-5 flex flex-wrap gap-2.5 lg:hidden">
                <CallButton
                  section="cilingir"
                  data-phone-cta="neighborhood-hero-inline"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-navy-900 shadow-md transition-all hover:bg-navy-50 active:scale-[0.97]"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  Hemen Ara
                </CallButton>
                <WhatsAppButton
                  section="cilingir"
                  data-wa-cta="neighborhood-hero-inline"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#25D366]/25 transition-all hover:bg-[#1ebe5d] active:scale-[0.97]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </WhatsAppButton>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-navy-200/75">
                {district.name} ilçesi {neighborhood.name}&apos;nde kapı açma,
                kilit değişimi ve tüm acil çilingir hizmetleri için{" "}
                <strong className="text-white">15 dakika içinde</strong>{" "}
                adresinizde oluyoruz. Gece gündüz, 7 gün 24 saat.
              </p>

              <ul className="mt-5 flex flex-wrap gap-3 text-sm text-navy-200/60">
                {["✓ Hasarsız Açma", "✓ 7/24 Hizmet", "✓ Şeffaf Fiyat", "✓ Lisanslı Usta"].map(
                  (b) => <li key={b}>{b}</li>
                )}
              </ul>
            </div>

            {/* CTA card */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:w-56">
              <CallButton
                section="cilingir"
                data-phone-cta="neighborhood-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-lg transition-all hover:bg-navy-50 hover:scale-[1.02] active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {PHONE}
              </CallButton>
              <WhatsAppButton
                section="cilingir"
                data-wa-cta="neighborhood-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.97]"
              >
                <WhatsAppIcon className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCALLY-FLAVOURED INTRO ────────────────────────────────────── */}
      <section
        aria-label="Bölge hakkında"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-navy-950">
              {district.name} {neighborhood.name} Çilingir Hizmeti
            </h2>
            <p className="leading-relaxed text-[var(--muted-foreground)]">
              {district.name} ilçesinin en önemli noktalarından biri olan{" "}
              <strong className="text-navy-900">{neighborhood.name}</strong> sakinleri
              için 7/24 kesintisiz çilingir desteği sunuyoruz. Gecenin bir yarısı anahtarınızı evde
              unuttuğunuzda, kapınız kilitli kaldığında veya acil kilit değişimine ihtiyaç duyduğunuzda, 
              {district.name} genelinde devriye gezen araçlarımız hızla yanınızda olur. 
              Tek bir telefonla ustamız {neighborhood.name} sınırları içindeki adresinize 
              sadece dakikalar içinde ulaşır.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
              Kapı açma, yüksek güvenlikli kilit değişimi, çelik kapı tamiri ve kasa açma dahil
              tüm profesyonel çilingir hizmetlerimiz için{" "}
              <strong className="text-navy-900">{district.name}</strong> ilçesi{" "}
              {neighborhood.name} öncelikli hizmet bölgemiz dahilindedir. İster {neighborhood.name} meydanında 
              bir işyeriniz, ister ara sokaklarda bir eviniz olsun; tüm işlemlerimiz 
              yerinde, tamamen hasarsız ve sürpriz masraflar olmaksızın şeffaf fiyat garantisiyle gerçekleştirilir.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE GRID ───────────────────────────────────────────────── */}
      <ServiceGridCilingir />

      {/* ── NEARBY NEIGHBORHOODS ───────────────────────────────────────── */}
      {nearbyNeighborhoods.length > 0 && (
        <section
          id="yakin-mahalleler"
          aria-labelledby="nearby-heading"
          className="bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* New Coverage Card */}
            <div className="mb-12 rounded-2xl border border-navy-100 bg-navy-50/50 p-8 text-center sm:p-10">
              <h3 className="mb-4 text-2xl font-bold text-navy-950">
                {neighborhood.name} ve Çevresinde Geniş Hizmet Ağı
              </h3>
              <p className="mx-auto max-w-2xl text-[var(--muted-foreground)]">
                Bozkurt Çilingir olarak sadece {neighborhood.name} ile sınırlı kalmıyor, {district.name} ilçesindeki komşu mahallelere de aynı hızda hizmet götürüyoruz. 
                <strong className="mx-1 text-navy-800">
                  {nearbyNeighborhoods.map((n) => n.name).join(", ")}
                </strong>
                gibi çevre mahallelerde de 15 dakikada servis garantimiz geçerlidir.
              </p>
            </div>

            <div className="mb-10 text-center">
              <h2
                id="nearby-heading"
                className="text-2xl font-bold tracking-tight text-navy-950"
              >
                {district.name}&apos;daki Diğer Mahalleler
              </h2>
              <p className="mt-3 text-[var(--muted-foreground)]">
                Yakın mahallelerde de 7/24 çilingir hizmeti veriyoruz.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {nearbyNeighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/cilingir/${district.slug}/${n.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all hover:border-navy-300 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 shrink-0 text-navy-400" />
                      <span className="text-sm font-medium text-navy-900 group-hover:text-navy-700">
                        {n.name}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-navy-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Back to district */}
            <div className="mt-8 text-center">
              <Link
                href={`/cilingir/${district.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 underline-offset-4 hover:underline"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                {district.name}&apos;un tüm mahalleleri
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <CtaBannerCilingir
        heading={`${neighborhood.name}&apos;nde Çilingir mi Arıyorsunuz?`}
        subheading={`${district.name} ${neighborhood.name} mahallesi bölgemiz dahilindedir. 7/24 hizmet, 15 dakika içinde kapınızda.`}
        caption={`${district.name} · ${neighborhood.name} ve çevre mahalleler`}
      />

      <MobileBottomBar division="cilingir" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
