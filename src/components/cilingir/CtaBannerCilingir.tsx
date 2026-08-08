import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CtaBannerProps {
  heading?:    string;
  subheading?: string;
  eyebrow?:    string;
  caption?:    string;
}

export default function CtaBannerCilingir({
  heading    = "Kapınız Kilitli mi Kaldı?",
  subheading = "Hemen arayın — ustamız 15 dakika içinde kapınızda. Gece gündüz, her gün.",
  eyebrow    = "Acil Durum?",
  caption,
}: CtaBannerProps) {
  const phone = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0000 000 00 00";

  return (
    <section
      aria-labelledby="cta-banner-heading"
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
      {/* Dot grid */}
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
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-400">
            {eyebrow}
          </p>
        )}
        <h2
          id="cta-banner-heading"
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>
        <p className="mt-5 text-lg text-navy-200/75">{subheading}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CallButton
            section="cilingir"
            data-phone-cta="cta-banner"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-10 py-4 text-lg font-bold text-navy-900 shadow-xl shadow-black/30 transition-all hover:bg-navy-50 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            {phone}
          </CallButton>
          <WhatsAppButton
            section="cilingir"
            text="Merhaba, çilingir hizmeti almak istiyorum"
            data-wa-cta="cta-banner"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#25D366]/50 bg-[#25D366]/10 px-10 py-4 text-lg font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.03] active:scale-[0.97] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            WhatsApp
          </WhatsAppButton>
        </div>

        {caption && (
          <p className="mt-6 text-sm text-navy-400">{caption}</p>
        )}
      </div>
    </section>
  );
}
