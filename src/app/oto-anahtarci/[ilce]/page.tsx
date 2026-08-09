import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import { otoDistricts } from "@/lib/data/districts-oto";
import ServiceGridOto from "@/components/oto-anahtarci/ServiceGridOto";
import CtaBannerOto from "@/components/oto-anahtarci/CtaBannerOto";
import Breadcrumb from "@/components/Breadcrumb";
import MobileBottomBar from "@/components/MobileBottomBar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceProcess from "@/components/ServiceProcess";
import Testimonials from "@/components/Testimonials";
import { otoTestimonials } from "@/lib/data/testimonials-oto";

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_URL = "https://bozkurtcilingir.com";
const PHONE = process.env.NEXT_PUBLIC_PHONE_OTO || "0535 310 61 39";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return otoDistricts.map((d) => ({ ilce: d.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  props: PageProps<"/oto-anahtarci/[ilce]">
): Promise<Metadata> {
  const { ilce } = await props.params;
  const district = otoDistricts.find((d) => d.slug === ilce);
  if (!district) return {};

  const title = `${district.name} Oto Anahtarcı | 7/24 Araç Anahtarı ve Kapı Açma`;
  const description = `${district.name}'de 7/24 mobil oto anahtarcı. Kayıp anahtar yapımı, immobilizer programlama ve hasarsız kapı açma — adresinize geliyoruz.`;
  const canonical = `${BASE_URL}/oto-anahtarci/${district.slug}`;

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

function localBusinessSchema(districtName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bozkurt Oto Anahtarcı",
    description: `${districtName}'de 7/24 profesyonel oto anahtarcı ve araç kapı açma hizmetleri.`,
    telephone: "+905353106139",
    url: `${BASE_URL}/oto-anahtarci/${slug}`,
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${districtName}, İstanbul`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: districtName,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    priceRange: "₺₺",
  };
}

function breadcrumbSchema(districtName: string, slug: string) {
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
        item: `${BASE_URL}/oto-anahtarci/${slug}`,
      },
    ],
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function DistrictOtoPage(props: PageProps<"/oto-anahtarci/[ilce]">) {
  const { ilce } = await props.params;
  const district = otoDistricts.find((d) => d.slug === ilce);
  if (!district) notFound();

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(district.name, district.slug)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(district.name, district.slug)),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label={`${district.name} oto anahtarcı hizmetleri`}
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
              { label: "Oto Anahtarcı", href: "/oto-anahtarci" },
              { label: district.name },
            ]}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Copy */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-800/50 px-4 py-1.5 text-xs font-medium text-amber-200">
                <MapPin className="h-3.5 w-3.5" />
                {district.name} İlçesi · 7/24 Mobil Servis
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {district.name}{" "}
                <span className="text-amber-400">Oto Anahtarcı</span>{" "}
                Hizmetleri
              </h1>

              {/* ── Compact CTA row — visible on mobile before scroll ── */}
              <div className="mt-5 flex flex-wrap gap-2.5 lg:hidden">
                <CallButton
                  section="oto"
                  data-phone-cta="district-hero-inline"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-amber-950 shadow-md shadow-amber-900/40 transition-all hover:bg-amber-400 active:scale-[0.97]"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  Hemen Ara
                </CallButton>
                <WhatsAppButton
                  section="oto"
                  data-wa-cta="district-hero-inline"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#25D366]/25 transition-all hover:bg-[#1ebe5d] active:scale-[0.97]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </WhatsAppButton>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-amber-200/75">
                {district.name} ilçesi sınırları içinde aracınızın anahtarını kaybettiğinizde veya yedek anahtar yaptırmak istediğinizde, sanayi sitesine veya servise gitmenize gerek yok. İmmobilizer programlama, çipli anahtar kopyalama ve hasarsız oto kapı açma hizmetlerimiz için tam donanımlı teknisyenimiz doğrudan <strong className="text-white">bulunduğunuz adrese geliyor</strong>. İster {district.name} merkezde, ister çevre mahallelerde olun; {district.neighborhoodCount} mahallenin tamamında çekici masrafı ödemeden 7/24 hızlı ve garantili çözüm sunuyoruz.
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
                data-phone-cta="district-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-amber-950 shadow-lg transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {PHONE}
              </CallButton>
              <WhatsAppButton
                section="oto"
                data-wa-cta="district-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.97]"
              >
                <WhatsAppIcon className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────── */}
      <WhyChooseUs districtName={district.name} division="oto-anahtarci" />

      {/* ── NEIGHBOURHOOD GRID ─────────────────────────────────────────── */}
      {district.neighborhoods.length > 0 && (
        <section
          id="mahalleler"
          aria-labelledby="nbhd-heading"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
                Mobil Servis Bölgeleri
              </p>
              <h2
                id="nbhd-heading"
                className="text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl"
              >
                {district.name} Mahalleleri
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
                {district.name}&apos;un tüm mahallelerine kesintisiz mobil oto anahtarcı
                hizmeti veriyoruz.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {district.neighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/oto-anahtarci/${district.slug}/${n.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition-all duration-150 hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <MapPin className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="font-semibold text-amber-950 group-hover:text-amber-700">
                        {n.name}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── SERVICE PROCESS ────────────────────────────────────────────── */}
      <ServiceProcess districtName={district.name} division="oto-anahtarci" />

      {/* ── SERVICE GRID ───────────────────────────────────────────────── */}
      <ServiceGridOto />

      {/* ── TESTIMONIALS (COMPACT) ─────────────────────────────────────── */}
      {(() => {
        const localTestimonials = otoTestimonials.filter(
          (t) => t.districtSlug === district.slug
        );
        if (localTestimonials.length > 0) {
          return (
            <Testimonials
              division="oto-anahtarci"
              testimonials={localTestimonials.slice(0, 3)}
              compact
              districtName={district.name}
            />
          );
        }
        return null;
      })()}

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <CtaBannerOto
        heading={`${district.name}'de Araba Anahtarınız mı Kayboldu?`}
        subheading={`${district.name} ilçesinde 7/24 mobil oto anahtarcı hizmeti. Çekici çağırmayın, biz aracınızın yanına geliyoruz.`}
        caption={`${district.name} ve çevre ilçelerde tüm marka araçlar için hizmetinizdeyiz`}
      />

      <MobileBottomBar division="oto-anahtarci" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
