import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cilingirServices } from "@/lib/data/services-cilingir";
import { Phone,
  DoorOpen,
  Lock,
  Shield,
  Archive,
  KeyRound,
  Wrench,
  ChevronRight,
  CheckCircle2,
  ChevronLeft } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import FaqSection from "@/components/FaqSection";

const PHONE = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0535 310 61 39";

const ICON_MAP: Record<string, React.ReactNode> = {
  DoorOpen: <DoorOpen className="h-6 w-6" strokeWidth={1.75} />,
  Lock:     <Lock     className="h-6 w-6" strokeWidth={1.75} />,
  Shield:   <Shield   className="h-6 w-6" strokeWidth={1.75} />,
  Archive:  <Archive  className="h-6 w-6" strokeWidth={1.75} />,
  KeyRound: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  Wrench:   <Wrench   className="h-6 w-6" strokeWidth={1.75} />,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cilingirServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = cilingirServices.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Hizmet Bulunamadı | Bozkurt Çilingir" };
  }

  return {
    title: `${service.name} | Bozkurt Çilingir`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://bozkurtcilingir.com/hizmetler/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = cilingirServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = cilingirServices
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Bozkurt Çilingir",
      image: "https://bozkurtcilingir.com/logo.png",
      "@id": "https://bozkurtcilingir.com",
      url: "https://bozkurtcilingir.com",
      telephone: PHONE,
    },
    areaServed: ["Esenyurt", "Beylikdüzü", "Bahçeşehir"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, oklch(43% 0.085 255 / 0.35) 0%, transparent 70%)",
          }}
        />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link href="/#hizmetler" className="inline-flex items-center gap-1 text-sm font-medium text-navy-300 hover:text-white transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" />
            Tüm Hizmetler
          </Link>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            {service.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-navy-200/80 sm:text-xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ── 2. DETAILS & CONTENT ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-navy-600">
              {ICON_MAP[service.icon ?? "KeyRound"]}
            </span>
            <h2 className="text-3xl font-bold text-navy-950">Hizmet Detayları</h2>
          </div>
          
          <div className="prose prose-lg prose-slate max-w-none text-navy-800">
            <p className="leading-relaxed">{service.longDescription}</p>
          </div>

          <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50/50 p-8">
            <h3 className="text-xl font-bold text-navy-950 mb-4">Neden Biz?</h3>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-navy-700">
              {[
                "15 dakikada adresinizdeyiz",
                "Hasarsız profesyonel işlem",
                "7/24 kesintisiz hizmet",
                "Uygun ve şeffaf fiyat garantisi",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-navy-600"
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
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-950 mb-6">Hemen Usta Çağırın</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton
              section="cilingir"
              data-phone-cta="service-detail"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-navy-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-navy-700 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {PHONE}
            </CallButton>
            <WhatsAppButton
              section="cilingir"
              text={`Merhaba, ${service.name} hizmeti hakkında bilgi almak istiyorum.`}
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
          <h2 className="text-2xl font-bold text-navy-950 mb-10 text-center">Diğer Hizmetlerimiz</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {relatedServices.map((svc) => (
              <li key={svc.slug}>
                <Link
                  href={`/hizmetler/${svc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-navy-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover:bg-navy-100">
                    {ICON_MAP[svc.icon ?? "KeyRound"]}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-navy-950 transition-colors group-hover:text-navy-700">
                    {svc.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {svc.shortDescription}
                  </p>
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

      <FaqSection />
      <MobileBottomBar division="cilingir" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
