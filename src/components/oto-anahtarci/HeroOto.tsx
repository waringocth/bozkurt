import Link from "next/link";
import { Phone, Navigation, Zap, Car, Clock, CheckCircle2, Star, Cpu } from "lucide-react";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  phone: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STAT_CARDS = [
  {
    icon: <Navigation className="h-5 w-5" strokeWidth={2} />,
    stat: "Adrese",
    label: "Mobil Servis",
    color: "bg-orange-500/20 text-orange-300",
  },
  {
    icon: <Zap className="h-5 w-5" strokeWidth={2} />,
    stat: "30–60 dk",
    label: "İşlem Süresi",
    color: "bg-amber-500/20 text-amber-300",
  },
  {
    icon: <Car className="h-5 w-5" strokeWidth={2} />,
    stat: "100+",
    label: "Araç Marka",
    color: "bg-yellow-500/20 text-yellow-300",
  },
  {
    icon: <Clock className="h-5 w-5" strokeWidth={2} />,
    stat: "7/24",
    label: "Acil Servis",
    color: "bg-amber-600/20 text-amber-200",
  },
];

const QUICK_TAGS = [
  { label: "Kayıp Anahtar",       href: "/oto-anahtarci/hizmetler/kayip-anahtar-yapimi"   },
  { label: "İmmobilizer",         href: "/oto-anahtarci/hizmetler/immobilizer-programlama" },
  { label: "Araç Kapı Açma",      href: "/oto-anahtarci/hizmetler/arac-kapi-acma"          },
  { label: "Kumanda Programlama", href: "/oto-anahtarci/hizmetler/kumanda-programlama"     },
];

const BADGES = [
  "Araç Başında Programlama",
  "Tüm Markalar",
  "OBD Ekipmanı",
  "Çekici Masrafı Yok",
];

const MICRO_STATS = [
  { value: "800+", label: "Tamamlanan İş" },
  { value: "%97",  label: "Memnuniyet"    },
  { value: "30 dk", label: "Yanıt Süresi" },
];

const AVATARS = ["ÖK", "RD", "NB", "AT", "GS"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroOto({ phone }: Props) {
  return (
    <section
      id="hero"
      aria-label="Oto Anahtarcı hizmetleri hakkında"
      className="relative isolate overflow-hidden bg-amber-950 pb-32 pt-20 sm:pt-28"
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Amber radial glow — top center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, oklch(57% 0.165 48 / 0.40) 0%, transparent 70%)",
        }}
      />
      {/* Soft secondary glow — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "oklch(57% 0.165 48 / 0.12)" }}
      />

      {/* ── Main grid ──────────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT COLUMN ────────────────────────────────────────────────── */}
          <div style={{ animation: "fade-up 0.5s ease-out both" }}>

            {/* Pill badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-900/60 px-4 py-1.5 text-xs font-semibold text-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              Acil Servis Aktif · 7/24
            </div>

            {/* H1 headline */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Avrupa Yakası&apos;nda{" "}
              <br className="hidden sm:block" />
              Araç Başında{" "}
              <br />
              <span
                style={{
                  background: "linear-gradient(120deg, #fff 0%, oklch(80% 0.175 47) 30%, oklch(70% 0.185 47) 60%, oklch(80% 0.175 47) 100%)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 4s ease infinite",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Oto Anahtarcı
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-5 text-base leading-relaxed text-amber-100/75 sm:text-lg">
              Kayıp{" "}
              <strong className="font-semibold text-white">anahtar yapımı</strong>,{" "}
              <strong className="font-semibold text-white">immobilizer programlama</strong>{" "}
              ve araç kapı açma — teknisyenimiz{" "}
              <strong className="font-semibold text-white">adresinize gelir</strong>,
              çekici gerekmez, 25 ilçeye hizmet.
            </p>

            {/* Chip badges */}
            <ul
              aria-label="Hizmet özellikleri"
              className="mt-5 flex flex-wrap gap-2"
            >
              {BADGES.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-amber-700/40 bg-amber-900/50 px-3 py-1 text-xs font-medium text-amber-200"
                >
                  <CheckCircle2 className="h-3 w-3 text-amber-400" strokeWidth={2.5} />
                  {badge}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton
                section="oto"
                data-phone-cta="hero"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-amber-500 px-7 py-3.5 text-base font-bold text-amber-950 shadow-lg shadow-amber-900/40 transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Hemen Servis Çağır
              </CallButton>
              <WhatsAppButton
                section="oto"
                data-wa-cta="hero"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-base font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ile Yaz
              </WhatsAppButton>
            </div>

            {/* Quick-service tag links */}
            <nav
              aria-label="Hızlı hizmet bağlantıları"
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-amber-600/70"
            >
              {QUICK_TAGS.map((tag, i) => (
                <span key={tag.href} className="flex items-center gap-3">
                  <Link
                    href={tag.href}
                    className="transition-colors hover:text-amber-200"
                  >
                    {tag.label}
                  </Link>
                  {i < QUICK_TAGS.length - 1 && (
                    <span aria-hidden className="text-amber-800">·</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

          {/* ── RIGHT COLUMN ───────────────────────────────────────────────── */}
          <div
            className="flex flex-col gap-4"
            style={{ animation: "fade-up 0.5s 0.12s ease-out both" }}
          >

            {/* 2×2 small stat card grid */}
            <div className="grid grid-cols-2 gap-3">
              {STAT_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col gap-2 rounded-2xl border border-amber-800/40 bg-amber-900/60 p-4 backdrop-blur-sm"
                >
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${card.color}`}
                  >
                    {card.icon}
                  </span>
                  <span className="text-2xl font-extrabold leading-none text-white">
                    {card.stat}
                  </span>
                  <span className="text-xs font-medium text-amber-500">
                    {card.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Full-width trust statement card */}
            <div className="rounded-2xl border border-amber-800/40 bg-amber-900/60 p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700/40 text-amber-200">
                  <Cpu className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="text-sm font-bold text-white">
                  OBD Ekipmanı ile Araç Başında Programlama
                </p>
              </div>
              <p className="text-sm leading-relaxed text-amber-300/80">
                Çekici masrafı olmadan adresinizde, tüm marka ve modellere uyumlu profesyonel programlama ekipmanıyla hizmet.
              </p>

              {/* Micro stats */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-amber-800/30 pt-4">
                {MICRO_STATS.map((ms) => (
                  <div key={ms.label} className="text-center">
                    <p className="text-base font-extrabold text-white">{ms.value}</p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-500">
                      {ms.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof bar */}
            <div className="flex items-center gap-3 rounded-2xl border border-amber-800/40 bg-amber-900/60 px-5 py-3.5 backdrop-blur-sm">
              {/* Overlapping avatar circles */}
              <div className="flex -space-x-2" aria-hidden>
                {AVATARS.map((initials, i) => (
                  <span
                    key={i}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-950 bg-amber-800 text-[10px] font-bold text-amber-100"
                    style={{ zIndex: AVATARS.length - i }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="flex-1 min-w-0">
                {/* 5-star row */}
                <div className="flex items-center gap-0.5" aria-label="5 yıldız">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-amber-300">
                  <strong className="text-white">320+</strong> müşteri bizi 5 yıldızla değerlendirdi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero → Services fade transition ───────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(20% 0.065 60) 40%, rgb(255 251 235))",
        }}
      />
    </section>
  );
}
