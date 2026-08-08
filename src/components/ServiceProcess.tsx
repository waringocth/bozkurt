"use client";

import { PhoneCall, MapPin, Truck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceProcessProps {
  districtName: string;
  division: "cilingir" | "oto-anahtarci";
}

export default function ServiceProcess({ districtName, division }: ServiceProcessProps) {
  const isAuto = division === "oto-anahtarci";

  const sectionBg = "bg-white";
  const eyebrowText = isAuto ? "text-amber-600" : "text-navy-500";
  const headingText = isAuto ? "text-amber-950" : "text-navy-950";
  const iconBg = isAuto ? "bg-amber-100" : "bg-navy-100";
  const iconColor = isAuto ? "text-amber-600" : "text-navy-600";

  const steps = [
    {
      icon: <PhoneCall className="h-6 w-6" strokeWidth={2} />,
      title: "Bizi Arayın",
      desc: "İster telefonla ister WhatsApp'tan 7/24 bize ulaşarak durumunuzu bildirin.",
    },
    {
      icon: <MapPin className="h-6 w-6" strokeWidth={2} />,
      title: "Konum Teyidi",
      desc: `${districtName} içindeki tam konumunuzu veya mahallenizi alırız.`,
    },
    {
      icon: <Truck className="h-6 w-6" strokeWidth={2} />,
      title: "Hemen Yola Çıkalım",
      desc: `Bölgedeki en yakın teknisyenimiz ${isAuto ? "araç başına" : "kapınıza"} en fazla 15 dakikada ulaşır.`,
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" strokeWidth={2} />,
      title: "Hizmet Tamamlansın",
      desc: "Profesyonel ekipmanlarla hasarsız bir şekilde işleminizi tamamlayıp teslim edelim.",
    },
  ];

  return (
    <section
      aria-labelledby="process-heading"
      className={cn("py-20 sm:py-28", sectionBg)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className={cn("mb-3 text-sm font-semibold uppercase tracking-widest", eyebrowText)}>
            Nasıl Çalışıyoruz?
          </p>
          <h2
            id="process-heading"
            className={cn("text-3xl font-bold tracking-tight sm:text-4xl", headingText)}
          >
            4 Basit Adımda Hizmet
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
            Hızlı, güvenilir ve şeffaf hizmet sürecimizle yanınızdayız.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-100" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className={cn("z-10 flex h-16 w-16 items-center justify-center rounded-full mb-6", iconBg, iconColor)}>
                {step.icon}
              </div>
              <h3 className={cn("mb-2 text-lg font-bold", headingText)}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
