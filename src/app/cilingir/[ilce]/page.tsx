import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Phone, MessageCircle } from "lucide-react";

import { cilingirDistricts } from "@/lib/data/districts-cilingir";
import ServiceGridCilingir from "@/components/cilingir/ServiceGridCilingir";
import CtaBannerCilingir from "@/components/cilingir/CtaBannerCilingir";
import Breadcrumb from "@/components/Breadcrumb";
import MobileBottomBar from "@/components/MobileBottomBar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_URL = "https://bozkurtcilingir.com";
const PHONE = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0000 000 00 00";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return cilingirDistricts.map((d) => ({ ilce: d.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  props: PageProps<"/cilingir/[ilce]">
): Promise<Metadata> {
  const { ilce } = await props.params;
  const district = cilingirDistricts.find((d) => d.slug === ilce);
  if (!district) return {};

  const title = `${district.name} Çilingir | 7/24 Kapı Açma ve Kilit Hizmetleri`;
  const description = `${district.name}'de 7/24 profesyonel çilingir hizmeti. Kapı açma, kilit değişimi, çelik kapı tamiri ve acil çilingir — 15 dakika içinde adresinizde.`;
  const canonical = `${BASE_URL}/cilingir/${district.slug}`;

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
    name: "Bozkurt Çilingir",
    description: `${districtName}'de 7/24 profesyonel çilingir ve kapı açma hizmetleri.`,
    telephone: "+905000000000",
    url: `${BASE_URL}/cilingir/${slug}`,
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
        name: "Çilingir",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: districtName,
        item: `${BASE_URL}/cilingir/${slug}`,
      },
    ],
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function DistrictPage(props: PageProps<"/cilingir/[ilce]">) {
  const { ilce } = await props.params;
  const district = cilingirDistricts.find((d) => d.slug === ilce);
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
        aria-label={`${district.name} çilingir hizmetleri`}
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
              { label: "Çilingir", href: "/" },
              { label: district.name },
            ]}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Copy */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-600/40 bg-navy-800/50 px-4 py-1.5 text-xs font-medium text-navy-200">
                <MapPin className="h-3.5 w-3.5" />
                {district.name} İlçesi · 7/24 Hizmet
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {district.name}{" "}
                <span className="text-navy-300">Çilingir</span>{" "}
                Hizmetleri
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-navy-200/75">
                {district.name} ilçesinde kapı açma, kilit değişimi ve tüm çilingir
                ihtiyaçlarınız için{" "}
                <strong className="text-white">15 dakika içinde</strong> adresinizde
                oluyoruz. {district.neighborhoodCount} mahallede 7/24 hizmet.
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
                data-phone-cta="district-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-lg transition-all hover:bg-navy-50 hover:scale-[1.02] active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {PHONE}
              </CallButton>
              <WhatsAppButton
                section="cilingir"
                data-wa-cta="district-hero"
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEIGHBOURHOOD GRID ─────────────────────────────────────────── */}
      {district.neighborhoods.length > 0 && (
        <section
          id="mahalleler"
          aria-labelledby="nbhd-heading"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-500">
                Hizmet Verdiğimiz Mahalleler
              </p>
              <h2
                id="nbhd-heading"
                className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
              >
                {district.name} Mahalleleri
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
                {district.name}&apos;un tüm mahallelerine kesintisiz çilingir hizmeti
                veriyoruz.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {district.neighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/cilingir/${district.slug}/${n.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-150 hover:border-navy-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-600">
                        <MapPin className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="font-semibold text-navy-900 group-hover:text-navy-700">
                        {n.name}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-navy-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── SERVICE GRID ───────────────────────────────────────────────── */}
      <ServiceGridCilingir />

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <CtaBannerCilingir
        heading={`${district.name}'de Çilingir mi Arıyorsunuz?`}
        subheading={`${district.name} ilçesinde 7/24 profesyonel çilingir hizmeti. 15 dakika içinde kapınızdayız.`}
        caption={`${district.name} · Esenyurt · Beylikdüzü · Bahçeşehir — tüm ilçelerde hizmet`}
      />

      <MobileBottomBar division="cilingir" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
