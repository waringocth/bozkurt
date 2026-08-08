import Link from "next/link";
import {
  DoorOpen,
  Lock,
  Shield,
  Archive,
  KeyRound,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { cilingirServices } from "@/lib/data/services-cilingir";

const ICON_MAP: Record<string, React.ReactNode> = {
  DoorOpen: <DoorOpen className="h-6 w-6" strokeWidth={1.75} />,
  Lock:     <Lock     className="h-6 w-6" strokeWidth={1.75} />,
  Shield:   <Shield   className="h-6 w-6" strokeWidth={1.75} />,
  Archive:  <Archive  className="h-6 w-6" strokeWidth={1.75} />,
  KeyRound: <KeyRound className="h-6 w-6" strokeWidth={1.75} />,
  Wrench:   <Wrench   className="h-6 w-6" strokeWidth={1.75} />,
};

/**
 * Reusable Çilingir service grid.
 * Renders all services from `cilingirServices` as linked cards.
 */
export default function ServiceGridCilingir() {
  return (
    <section
      id="hizmetler"
      aria-labelledby="svc-grid-heading"
      className="bg-slate-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-500">
            Tüm Hizmetler
          </p>
          <h2
            id="svc-grid-heading"
            className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl"
          >
            Çilingir Hizmetlerimiz
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
            Kapı açmadan kilit değişimine, çelik kapı tamirinden kasa açmaya
            kadar tüm çilingir hizmetleri.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {cilingirServices.map((svc) => (
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
  );
}
