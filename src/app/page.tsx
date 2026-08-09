import { Metadata } from "next";
import Link from "next/link";
import { Phone,
  DoorOpen,
  Lock,
  Shield,
  Archive,
  KeyRound,
  Wrench,
  MapPin,
  Zap,
  Clock,
  Star,
  ChevronRight,
  CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { cilingirServices } from "@/lib/data/services-cilingir";
import { cilingirDistricts } from "@/lib/data/districts-cilingir";
import FaqSection from "@/components/FaqSection";
import Testimonials from "@/components/Testimonials";
import { cilingirTestimonials } from "@/lib/data/testimonials-cilingir";
import MobileBottomBar from "@/components/MobileBottomBar";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0535 310 61 39";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  DoorOpen: <DoorOpen className="h-6 w-6" strokeWidth={1.75} />,
  Lock:     <Lock     className="h-6 w-6" strokeWidth={1.75} />,
  Shield:   <Shield   className="h-6 w-6" strokeWidth={1.75} />,
  Archive:  <Archive  className="h-6 w-6" strokeWidth={1.75} />,
  KeyRound: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  Wrench:   <Wrench   className="h-6 w-6" strokeWidth={1.75} />,
};

// ─── Trust signals ────────────────────────────────────────────────────────────

const TRUST_SIGNALS = [
  {
    icon: <Zap  className="h-8 w-8" strokeWidth={1.75} />,
    stat: "15 dk",
    label: "Ortalama Müdahale",
    desc:  "Çağrı aldıktan sonra kapınıza ulaşma süremiz.",
  },
  {
    icon: <Clock className="h-8 w-8" strokeWidth={1.75} />,
    stat: "7/24",
    label: "Kesintisiz Hizmet",
    desc:  "Gece yarısı veya resmi tatil — her an yanınızdayız.",
  },
  {
    icon: <Star  className="h-8 w-8" strokeWidth={1.75} />,
    stat: "15+ Yıl",
    label: "Sektör Deneyimi",
    desc:  "Uzman ekibimiz her türlü kilit ve kapı sistemine hakimdir.",
  },
  {
    icon: <MapPin className="h-8 w-8" strokeWidth={1.75} />,
    stat: "3 İlçe",
    label: "Hizmet Bölgesi",
    desc:  "Esenyurt, Beylikdüzü ve Bahçeşehir — tüm mahallelere hizmet.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Bozkurt Çilingir | 7/24 Acil Kapı Açma ve Kilit Değişimi",
  description: "Esenyurt, Beylikdüzü ve Bahçeşehir'de 7/24 profesyonel çilingir hizmeti. 15 dakikada adresinizde, hasarsız kapı açma ve kilit değişimi garantisi.",
  alternates: {
    canonical: "https://bozkurtcilingir.com",
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bozkurt Çilingir",
    image: "https://bozkurtcilingir.com/logo.png",
    "@id": "https://bozkurtcilingir.com",
    url: "https://bozkurtcilingir.com",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Esenyurt",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0343,
      longitude: 28.6801,
    },
    areaServed: ["Esenyurt", "Beylikdüzü", "Bahçeşehir"],
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
      <section
        id="hero"
        aria-label="Çilingir hizmetleri hakkında"
        className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-20 sm:pb-32 sm:pt-28"
      >
        {/* Dot-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(43% 0.085 255 / 0.35) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-600/40 bg-navy-800/50 px-4 py-1.5 text-xs font-medium text-navy-200"
            style={{ animation: "fade-up 0.4s ease-out both" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-navy-400" />
            </span>
            Esenyurt • Beylikdüzü • Bahçeşehir
          </div>

          {/* Headline */}
          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animation: "fade-up 0.5s 0.05s ease-out both" }}
          >
            7/24 Acil{" "}
            <span className="text-navy-300">Çilingir</span>{" "}
            Hizmeti
          </h1>

          {/* Sub-headline */}
          <p
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-200/80 sm:text-xl"
            style={{ animation: "fade-up 0.5s 0.10s ease-out both" }}
          >
            Esenyurt, Beylikdüzü ve Bahçeşehir&apos;de kapı açma, kilit
            değişimi ve tüm acil çilingir ihtiyaçlarınız için{" "}
            <strong className="font-semibold text-white">15 dakika içinde</strong> kapınızdayız.
          </p>

          {/* Trust badges */}
          <ul
            className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-navy-200/70"
            style={{ animation: "fade-up 0.5s 0.15s ease-out both" }}
            aria-label="Hizmet özellikleri"
          >
            {[
              "✓ Hasarsız Açma",
              "✓ Lisanslı Ustalar",
              "✓ Gece Hizmet",
              "✓ Şeffaf Fiyat",
            ].map((badge) => (
              <li key={badge} className="flex items-center gap-1">
                {badge}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animation: "fade-up 0.5s 0.20s ease-out both" }}
          >
            <CallButton
              section="cilingir"
              data-phone-cta="hero"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-navy-900 shadow-lg shadow-black/25 transition-all hover:bg-navy-50 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {PHONE}
            </CallButton>
            <WhatsAppButton
              section="cilingir"
              data-wa-cta="hero"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 text-base font-bold text-[#25D366] shadow-lg shadow-black/20 transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" strokeWidth={2.5} />
              WhatsApp ile Yaz
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES GRID ────────────────────────────────────────────── */}
      <section
        id="hizmetler"
        aria-labelledby="services-heading"
        className="bg-slate-50 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-500">
              Ne Yapıyoruz
            </p>
            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
            >
              Çilingir Hizmetlerimiz
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
              Kapı açmadan kilit değişimine, çelik kapı tamirinden kasa açmaya
              kadar tüm çilingir hizmetleri.
            </p>
          </div>

          {/* Card grid */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {cilingirServices.map((svc) => (
              <li key={svc.slug}>
                <Link
                  href={`/hizmetler/${svc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-navy-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Icon */}
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover:bg-navy-100">
                    {ICON_MAP[svc.icon ?? "KeyRound"]}
                  </span>

                  {/* Name */}
                  <h3 className="mb-2 text-lg font-semibold text-navy-950 transition-colors group-hover:text-navy-700">
                    {svc.name}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {svc.shortDescription}
                  </p>

                  {/* Arrow link */}
                  <span className="mt-5 flex items-center gap-1 text-sm font-medium text-navy-600 transition-all group-hover:gap-2">
                    Detaylı bilgi
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. SERVICE AREAS ────────────────────────────────────────────── */}
      <section
        id="hizmet-bolgesi"
        aria-labelledby="areas-heading"
        className="bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-500">
              Nerede Hizmet Veriyoruz
            </p>
            <h2
              id="areas-heading"
              className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
            >
              Hizmet Bölgelerimiz
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
              İstanbul&apos;un batı yakasında üç ilçeye kesintisiz çilingir hizmeti veriyoruz.
            </p>
          </div>

          {/* District cards */}
          <ul className="grid gap-6 sm:grid-cols-3" role="list">
            {cilingirDistricts.map((district) => (
              <li key={district.slug}>
                <Link
                  href={`/cilingir/${district.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-navy-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Decorative top stripe */}
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-navy-600 to-navy-400 opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Icon + name */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-600">
                      <MapPin className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h3 className="text-xl font-bold text-navy-950">
                      {district.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {district.description}
                  </p>

                  {/* Footer row */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
                      <MapPin className="h-3 w-3" />
                      {district.neighborhoodCount} mahalle
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-navy-600 transition-all group-hover:gap-2">
                      İlçeye git
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. TRUST SIGNALS ────────────────────────────────────────────── */}
      <section
        id="neden-biz"
        aria-labelledby="trust-heading"
        className="bg-navy-950 py-20 sm:py-28"
      >
        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-400">
              Güven Sinyalleri
            </p>
            <h2
              id="trust-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Neden Bozkurt Çilingir?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-navy-300/70">
              Hız, güvenilirlik ve şeffaflık — üç ilçenin tercihi.
            </p>
          </div>

          {/* Stat grid */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {TRUST_SIGNALS.map((item) => (
              <li
                key={item.stat}
                className="flex flex-col items-center rounded-2xl border border-navy-700/40 bg-navy-900/50 p-8 text-center"
              >
                <span className="mb-4 text-navy-300">{item.icon}</span>
                <span className="text-4xl font-extrabold text-white">
                  {item.stat}
                </span>
                <span className="mt-1.5 text-sm font-semibold text-navy-300">
                  {item.label}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-navy-400/80">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* Feature bullets */}
          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-navy-200/70">
            {[
              "Hasarsız kapı açma garantisi",
              "Yerinde fiyat teklifi — sürpriz ücret yok",
              "Tüm marka çelik kapı ve kilitlerde servis",
              "Lisanslı ve sigortalı ustalar",
              "Ödeme: nakit veya kart",
              "Tüm işlemlere garanti belgesi",
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy-400"
                  strokeWidth={2}
                />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ─────────────────────────────────────────────── */}
      <Testimonials division="cilingir" testimonials={cilingirTestimonials} />

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── 7. FINAL CTA BANNER ─────────────────────────────────────────── */}
      <section
        id="iletisim"
        aria-labelledby="cta-heading"
        className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-28"
      >
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 130%, oklch(43% 0.085 255 / 0.45) 0%, transparent 65%)",
          }}
        />
        {/* Grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-400">
            Acil Durum?
          </p>
          <h2
            id="cta-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Kapınız Kilitli mi Kaldı?
          </h2>
          <p className="mt-5 text-lg text-navy-200/75">
            Hemen arayın — ustamız{" "}
            <strong className="text-white">15 dakika</strong> içinde kapınızda.
            Gece gündüz, her gün.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton
              section="cilingir"
              data-phone-cta="cta-banner"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-10 py-4 text-lg font-bold text-navy-900 shadow-xl shadow-black/30 transition-all hover:bg-navy-50 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {PHONE}
            </CallButton>
            <WhatsAppButton
              section="cilingir"
              text="Merhaba, çilingir hizmeti almak istiyorum"
              data-wa-cta="cta-banner"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#25D366]/50 bg-[#25D366]/10 px-10 py-4 text-lg font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" strokeWidth={2.5} />
              WhatsApp
            </WhatsAppButton>
          </div>

          {/* Micro-copy */}
          <p className="mt-6 text-sm text-navy-400">
            Esenyurt · Beylikdüzü · Bahçeşehir — 7/24 hizmet
          </p>
        </div>
      </section>

      {/* ── Mobile sticky bottom bar ─────────────────────────────────────── */}
      <MobileBottomBar division="cilingir" />

      {/* Spacer for mobile bottom bar (so content isn't hidden on mobile) */}
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
