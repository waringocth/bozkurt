import Link from "next/link";
import { KeyRound, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import CallButton from "@/components/CallButton";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FooterProps {
  address?: string;
  cilingirPhone: string;
  otoAnahtarciPhone: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const CILINGIR_SERVICES = [
  { label: "Kapı Açma",           href: "/hizmetler/kapi-acma" },
  { label: "Kilit Değiştirme",    href: "/hizmetler/kilit-degistirme" },
  { label: "Kasa Açma",           href: "/hizmetler/kasa-acma" },
  { label: "Çelik Kapı Tamiri",   href: "/hizmetler/celik-kapi-tamiri" },
  { label: "Anahtar Kopyalama",   href: "/hizmetler/anahtar-kopyalama" },
];

const OTO_SERVICES = [
  { label: "Araç Kapı Açma",       href: "/oto-anahtarci/hizmetler/arac-kapi-acma" },
  { label: "Kontak Açma",          href: "/oto-anahtarci/hizmetler/kontak-acma" },
  { label: "Oto Anahtar Kopyalama",href: "/oto-anahtarci/hizmetler/oto-anahtar-kopyalama" },
  { label: "Immobilizer Çözümü",   href: "/oto-anahtarci/hizmetler/immobilizer-cozumu" },
  { label: "Yedek Anahtar Yapımı", href: "/oto-anahtarci/hizmetler/yedek-anahtar-yapimi" },
];

const SERVICE_AREAS = [
  "Beşiktaş", "Şişli", "Beyoğlu", "Kadıköy", "Üsküdar",
  "Bakırköy", "Bağcılar", "Fatih", "Sarıyer", "Maltepe",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
      >
        <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
        {children}
      </Link>
    </li>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer({
  address = "İstanbul, Türkiye",
}: FooterProps) {
  const cilingirPhone = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0535 310 61 39";
  const otoAnahtarciPhone = process.env.NEXT_PUBLIC_PHONE_OTO || "0535 310 61 39";
  return (
    <footer className="mt-auto border-t border-white/8 bg-navy-950 text-white">
      {/* ── Main grid ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Brand + NAP ───────────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-500/20 text-navy-300">
                <KeyRound className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-semibold tracking-tight">
                Bozkurt <span className="text-navy-300">Çilingir</span>
              </span>
            </Link>

            {/* NAP */}
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0 text-white/30" />
                <span>7/24 Hizmet</span>
              </div>
              {/* Çilingir phone */}
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-navy-400" />
                <CallButton
                  section="cilingir"
                  data-phone-cta="footer"
                  className="font-medium text-navy-300 transition-colors hover:text-white"
                >
                  {cilingirPhone}
                  <span className="ml-1.5 text-xs font-normal text-white/40">(Çilingir)</span>
                </CallButton>
              </div>
              {/* Oto phone */}
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                <CallButton
                  section="oto"
                  data-phone-cta="footer"
                  className="font-medium text-amber-300 transition-colors hover:text-white"
                >
                  {otoAnahtarciPhone}
                  <span className="ml-1.5 text-xs font-normal text-white/40">(Oto)</span>
                </CallButton>
              </div>
            </address>
          </div>

          {/* Column 2 — Çilingir services ────────────────────────────── */}
          <div>
            <FooterHeading>Çilingir Hizmetleri</FooterHeading>
            <ul className="space-y-2.5">
              {CILINGIR_SERVICES.map((s) => (
                <FooterLink key={s.href} href={s.href}>{s.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 3 — Oto Anahtarcı services ──────────────────────── */}
          <div>
            <FooterHeading>Oto Anahtarcı Hizmetleri</FooterHeading>
            <ul className="space-y-2.5">
              {OTO_SERVICES.map((s) => (
                <FooterLink key={s.href} href={s.href}>{s.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 4 — Hizmet bölgeleri ─────────────────────────────── */}
          <div>
            <FooterHeading>Hizmet Bölgeleri</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="text-sm text-white/60">{area}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/30">
              ve İstanbul&apos;un tüm ilçeleri
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/30 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Bozkurt Çilingir. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="transition-colors hover:text-white/60">
              Çilingir
            </Link>
            <Link href="/oto-anahtarci" className="transition-colors hover:text-white/60">
              Oto Anahtarcı
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
