import Link from "next/link";
import {
  KeyRound,
  Copy,
  Cpu,
  Settings,
  Radio,
  Car,
  ChevronRight,
} from "lucide-react";
import { otoServices } from "@/lib/data/services-oto";

const ICON_MAP: Record<string, React.ReactNode> = {
  KeyRound: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  Copy:     <Copy     className="h-6 w-6" strokeWidth={1.75} />,
  Cpu:      <Cpu      className="h-6 w-6" strokeWidth={1.75} />,
  Settings: <Settings className="h-6 w-6" strokeWidth={1.75} />,
  Radio:    <Radio    className="h-6 w-6" strokeWidth={1.75} />,
  Car:      <Car      className="h-6 w-6" strokeWidth={1.75} />,
};

/**
 * Reusable Oto Anahtarcı service grid.
 * Renders all services from `otoServices` as linked cards with amber styling.
 */
export default function ServiceGridOto() {
  return (
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
  );
}
