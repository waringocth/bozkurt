import { Metadata } from "next";
import Link from "next/link";
import { Phone,
  KeyRound,
  Car,
  Cpu,
  Settings,
  Radio,
  Copy,
  MapPin,
  Zap,
  Clock,
  Wrench,
  ChevronRight,
  CheckCircle2,
  Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { otoServices } from "@/lib/data/services-oto";
import { otoDistricts } from "@/lib/data/districts-oto";
import FaqSectionOto from "@/components/FaqSectionOto";
import Testimonials from "@/components/Testimonials";
import { otoTestimonials } from "@/lib/data/testimonials-oto";
import MobileBottomBar from "@/components/MobileBottomBar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroOto from "@/components/oto-anahtarci/HeroOto";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE = process.env.NEXT_PUBLIC_PHONE_OTO || "0535 310 61 39";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  KeyRound: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  Copy:     <Copy     className="h-6 w-6" strokeWidth={1.75} />,
  Cpu:      <Cpu      className="h-6 w-6" strokeWidth={1.75} />,
  Settings: <Settings className="h-6 w-6" strokeWidth={1.75} />,
  Radio:    <Radio    className="h-6 w-6" strokeWidth={1.75} />,
  Car:      <Car      className="h-6 w-6" strokeWidth={1.75} />,
};

// ─── Trust signals ────────────────────────────────────────────────────────────

const TRUST_SIGNALS = [
  {
    icon: <Navigation className="h-8 w-8" strokeWidth={1.75} />,
    stat: "Size Gelir",
    label: "Mobil Servis",
    desc:  "Teknisyenimiz adresinize gelir — çekici masrafı olmadan araç başında çözüm.",
  },
  {
    icon: <Zap className="h-8 w-8" strokeWidth={1.75} />,
    stat: "30–60 dk",
    label: "İşlem Süresi",
    desc:  "Çoğu anahtar yapım ve programlama işlemi sahadaki teknisyen tarafından tamamlanır.",
  },
  {
    icon: <Wrench className="h-8 w-8" strokeWidth={1.75} />,
    stat: "100+ Marka",
    label: "Araç Kapsamı",
    desc:  "Avrupa, Asya ve Amerikan menşeli tüm araç markaları ve modelleri.",
  },
  {
    icon: <Clock className="h-8 w-8" strokeWidth={1.75} />,
    stat: "7/24",
    label: "Acil Servis",
    desc:  "Gece yarısı, hafta sonu veya resmi tatil — her an arayabilirsiniz.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Bozkurt Oto Anahtarcı | Araç Başında 7/24 Hizmet",
  description: "Avrupa Yakası'nda 7/24 mobil oto anahtarcı. Kayıp anahtar yapımı, immobilizer programlama ve araç kapı açma — çekici gerekmeden adresinizde çözüm.",
  alternates: {
    canonical: "https://bozkurtcilingir.com/oto-anahtarci",
  },
};

export default function OtoAnahtarciPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bozkurt Oto Anahtarcı",
    image: "https://bozkurtcilingir.com/logo.png",
    "@id": "https://bozkurtcilingir.com/oto-anahtarci",
    url: "https://bozkurtcilingir.com/oto-anahtarci",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0343,
      longitude: 28.6801,
    },
    areaServed: ["İstanbul Avrupa Yakası"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <HeroOto phone={PHONE} />

      {/* ── 2. SERVICES GRID ────────────────────────────────────────────── */}
      <section
        id="hizmetler"
        aria-labelledby="oto-services-heading"
        className="bg-amber-50 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
              Ne Yapıyoruz
            </p>
            <h2
              id="oto-services-heading"
              className="text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl"
            >
              Oto Anahtarcı Hizmetlerimiz
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
              Kayıp anahtar yapımından immobilizer programlamaya, araç kapı açmadan
              kumanda eşleştirmeye kadar her şey.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {otoServices.map((svc) => (
              <li key={svc.slug}>
                <Link
                  href={`/oto-anahtarci/hizmetler/${svc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Icon */}
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                    {ICON_MAP[svc.icon ?? "KeyRound"]}
                  </span>

                  {/* Name */}
                  <h3 className="mb-2 text-lg font-semibold text-amber-950 transition-colors group-hover:text-amber-700">
                    {svc.name}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {svc.shortDescription}
                  </p>

                  {/* Arrow */}
                  <span className="mt-5 flex items-center gap-1 text-sm font-medium text-amber-600 transition-all group-hover:gap-2">
                    Detaylı bilgi
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. COVERAGE AREA ────────────────────────────────────────────── */}
      <section
        id="hizmet-bolgesi"
        aria-labelledby="coverage-heading"
        className="bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
              Hizmet Alanı
            </p>
            <h2
              id="coverage-heading"
              className="text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl"
            >
              Avrupa Yakası&apos;nın Tamamı
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--muted-foreground)]">
              İstanbul Avrupa Yakası&apos;ndaki{" "}
              <strong className="font-semibold text-amber-800">
                {otoDistricts.length} ilçenin
              </strong>{" "}
              tamamına mobil oto anahtarcı hizmeti veriyoruz.
              Teknisyenimiz araç başında, adresinizde.
            </p>
          </div>

          {/* Compact district pill grid */}
          <ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            role="list"
          >
            {otoDistricts.map((district) => (
              <li key={district.slug}>
                <Link
                  href={`/oto-anahtarci/${district.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-amber-100 bg-amber-50/60 px-4 py-3 transition-all duration-150 hover:border-amber-300 hover:bg-amber-100 hover:shadow-sm"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-amber-900 group-hover:text-amber-700">
                      {district.name}
                    </p>
                    <p className="mt-0.5 text-xs text-amber-600/70">
                      {district.neighborhoodCount} mahalle
                    </p>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-amber-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Summary strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted-foreground)]">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-500" />
              {otoDistricts.length} ilçe
            </span>
            <span className="flex items-center gap-2">
              <Car className="h-4 w-4 text-amber-500" />
              Tüm araç markaları
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-500" />
              7/24 hizmet
            </span>
          </div>
        </div>
      </section>

      {/* ── 4. TRUST SIGNALS ────────────────────────────────────────────── */}
      <section
        id="neden-biz"
        aria-labelledby="oto-trust-heading"
        className="relative isolate bg-amber-950 py-20 sm:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-500">
              Neden Biz
            </p>
            <h2
              id="oto-trust-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Neden Bozkurt Oto Anahtarcı?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-amber-300/70">
              Sahaya giden teknisyen, kapsamlı ekipman ve tüm marka garantisi.
            </p>
          </div>

          {/* Stat grid */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {TRUST_SIGNALS.map((item) => (
              <li
                key={item.stat}
                className="flex flex-col items-center rounded-2xl border border-amber-800/40 bg-amber-900/50 p-8 text-center"
              >
                <span className="mb-4 text-amber-400">{item.icon}</span>
                <span className="text-3xl font-extrabold text-white">
                  {item.stat}
                </span>
                <span className="mt-1.5 text-sm font-semibold text-amber-300">
                  {item.label}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-amber-400/80">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* Feature list */}
          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-amber-200/70">
            {[
              "OBD arayüzlü profesyonel programlama cihazları",
              "Orijinal kalite yedek anahtar ve transponder çipler",
              "İmmobilizer silindiri okuma ve yazma (All Keys Lost)",
              "Akıllı (smart key / proximity) anahtar programlama",
              "Eski anahtarları devre dışı bırakma",
              "Tüm işlemlere 3 ay garanti",
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  strokeWidth={2}
                />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ─────────────────────────────────────────────── */}
      <Testimonials division="oto-anahtarci" testimonials={otoTestimonials} />

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      <FaqSectionOto />

      {/* ── 7. FINAL CTA BANNER ─────────────────────────────────────────── */}
      <section
        id="iletisim"
        aria-labelledby="oto-cta-heading"
        className="relative isolate overflow-hidden bg-amber-900 py-20 sm:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 130%, oklch(57% 0.165 48 / 0.5) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Acil Durum?
          </p>
          <h2
            id="oto-cta-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Araba Anahtarınız mı Kayboldu?
          </h2>
          <p className="mt-5 text-lg text-amber-200/75">
            Hemen arayın — teknisyenimiz{" "}
            <strong className="text-white">adresinize gelir</strong>,
            araç başında yeni anahtar yapar.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton
              section="oto"
              data-phone-cta="cta-banner"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 px-10 py-4 text-lg font-bold text-amber-950 shadow-xl shadow-black/30 transition-all hover:bg-amber-400 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {PHONE}
            </CallButton>
            <WhatsAppButton
              section="oto"
              text="Merhaba, oto anahtarcı hizmeti almak istiyorum"
              data-wa-cta="cta-banner"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#25D366]/50 bg-[#25D366]/10 px-10 py-4 text-lg font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" strokeWidth={2.5} />
              WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-sm text-amber-500/80">
            İstanbul Avrupa Yakası — {otoDistricts.length} ilçe — 7/24 hizmet
          </p>
        </div>
      </section>

      {/* ── Mobile sticky bottom bar ─────────────────────────────────────── */}
      <MobileBottomBar division="oto-anahtarci" />

      {/* Spacer for mobile bottom bar */}
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
