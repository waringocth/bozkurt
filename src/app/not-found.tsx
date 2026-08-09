import Link from "next/link";
import { Phone, Home, Car, AlertTriangle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";

const PHONE_CILINGIR = process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0535 310 61 39";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
              <AlertTriangle className="h-10 w-10" />
            </span>
          </div>
          <p className="text-base font-semibold text-navy-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-5xl">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="mt-6 text-base leading-7 text-[var(--muted-foreground)]">
            Üzgünüz, aradığınız sayfayı bulamadık veya bu sayfa taşınmış olabilir.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-navy-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              Çilingir Ana Sayfa
            </Link>
            <Link
              href="/oto-anahtarci"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-amber-950 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors"
            >
              <Car className="h-4 w-4" />
              Oto Anahtarcı Ana Sayfa
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-navy-950 mb-4">Acil yardıma mı ihtiyacınız var?</h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CallButton
                section="cilingir"
                data-phone-cta="404"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-navy-950 shadow-sm border border-slate-200 transition-all hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <Phone className="h-4 w-4 text-navy-600" />
                Hemen Ara
              </CallButton>
              <WhatsAppButton
                section="cilingir"
                text="Merhaba, sayfayı bulamadım ama hizmet almak istiyorum."
                data-wa-cta="404"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-bold text-[#25D366] shadow-sm transition-all hover:bg-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp ile Yaz
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </main>

      <MobileBottomBar division="cilingir" />
      <div className="h-16 md:hidden" aria-hidden />
    </>
  );
}
