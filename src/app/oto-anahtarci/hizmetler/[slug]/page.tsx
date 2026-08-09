import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { otoServices } from "@/lib/data/services-oto";
import { Phone,
  KeyRound,
  Car,
  Cpu,
  Settings,
  Radio,
  Copy,
  ChevronRight,
  CheckCircle2,
  ChevronLeft } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import FaqSectionOto from "@/components/FaqSectionOto";

const PHONE = process.env.NEXT_PUBLIC_PHONE_OTO || "0535 310 61 39";

const ICON_MAP: Record<string, React.ReactNode> = {
  KeyRound: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  Copy:     <Copy     className="h-6 w-6" strokeWidth={1.75} />,
  Cpu:      <Cpu      className="h-6 w-6" strokeWidth={1.75} />,
  Settings: <Settings className="h-6 w-6" strokeWidth={1.75} />,
  Radio:    <Radio    className="h-6 w-6" strokeWidth={1.75} />,
  Car:      <Car      className="h-6 w-6" strokeWidth={1.75} />,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return otoServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = otoServices.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Hizmet Bulunamadı | Bozkurt Oto Anahtarcı" };
  }

  return {
    title: `${service.name} | Bozkurt Oto Anahtarcı`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://bozkurtcilingir.com/oto-anahtarci/hizmetler/${slug}`,
    },
  };
}

export default async function OtoServicePage({ params }: Props) {
  const { slug } = await params;
  const service = otoServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = otoServices
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Bozkurt Oto Anahtarcı",
      image: "https://bozkurtcilingir.com/logo.png",
      "@id": "https://bozkurtcilingir.com/oto-anahtarci",
      url: "https://bozkurtcilingir.com/oto-anahtarci",
      telephone: PHONE,
    },
    areaServed: ["İstanbul Avrupa Yakası"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-amber-950 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(57% 0.165 48 / 0.40) 0%, transparent 70%)",
          }}
        />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link href="/oto-anahtarci/#hizmetler" className="inline-flex items-center gap-1 text-sm font-medium text-amber-300 hover:text-white transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" />
            Tüm Oto Hizmetleri
          </Link>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            {service.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-amber-100/75 sm:text-xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ── 2. DETAILS & CONTENT ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              {ICON_MAP[service.icon ?? "KeyRound"]}
            </span>
            <h2 className="text-3xl font-bold text-amber-950">Hizmet Detayları</h2>
          </div>
          
          <div className="prose prose-lg prose-slate max-w-none text-amber-900">
            <p className="leading-relaxed">{service.longDescription}</p>
          </div>

          <div className="mt-12 rounded-2xl border border-amber-100 bg-amber-50/50 p-8">
            <h3 className="text-xl font-bold text-amber-950 mb-4">Neden Biz?</h3>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-amber-800">
              {[
                "Araç başında mobil hizmet",
                "Çekici masrafı olmadan çözüm",
                "7/24 acil servis",
                "Tüm marka ve modellerde uzmanlık",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
                    strokeWidth={2}
                  />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-amber-950 mb-6">Teknisyen Çağırın</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton
              section="oto"
              data-phone-cta="service-detail"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 px-8 py-4 text-base font-bold text-amber-950 shadow-lg shadow-amber-900/40 transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {PHONE}
            </CallButton>
            <WhatsAppButton
              section="oto"
              text={`Merhaba, oto ${service.name} hizmeti hakkında bilgi almak istiyorum.`}
              data-wa-cta="service-detail"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 text-base font-bold text-[#25D366] shadow-lg shadow-black/5 transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" strokeWidth={2.5} />
              WhatsApp ile Yaz
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ── 4. RELATED SERVICES ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-amber-950 mb-10 text-center">Diğer Oto Hizmetlerimiz</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {relatedServices.map((svc) => (
              <li key={svc.slug}>
                <Link
                  href={`/oto-anahtarci/hizmetler/${svc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                    {ICON_MAP[svc.icon ?? "KeyRound"]}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-amber-950 transition-colors group-hover:text-amber-700">
                    {svc.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {svc.shortDescription}
                  </p>
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

      <FaqSectionOto />
      <MobileBottomBar division="oto-anahtarci" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
