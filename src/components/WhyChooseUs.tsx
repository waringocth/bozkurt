"use client";

import { Shield, Clock, MapPin, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhyChooseUsProps {
  districtName: string;
  division: "cilingir" | "oto-anahtarci";
}

export default function WhyChooseUs({ districtName, division }: WhyChooseUsProps) {
  const isAuto = division === "oto-anahtarci";

  const sectionBg = isAuto ? "bg-amber-950" : "bg-navy-950";
  const eyebrowText = isAuto ? "text-amber-500" : "text-navy-400";
  const headingText = "text-white";
  const cardBorder = isAuto ? "border-amber-800/40" : "border-navy-800/40";
  const cardBg = isAuto ? "bg-amber-900/50" : "bg-navy-900/50";
  const iconColor = isAuto ? "text-amber-400" : "text-navy-300";
  const titleColor = "text-white";
  const descColor = isAuto ? "text-amber-400/80" : "text-navy-200/80";

  const reasons = [
    {
      icon: <Clock className="h-8 w-8" strokeWidth={1.75} />,
      title: "Hızlı Ulaşım",
      desc: `${districtName} genelinde gezici araçlarımızla size en yakın noktadan 15 dakikada ulaşıyoruz.`,
    },
    {
      icon: <MapPin className="h-8 w-8" strokeWidth={1.75} />,
      title: "Bölge Uzmanlığı",
      desc: `${districtName} trafiğini ve mahallelerini avucumuzun içi gibi biliyoruz, vakit kaybetmiyoruz.`,
    },
    {
      icon: <Shield className="h-8 w-8" strokeWidth={1.75} />,
      title: "Garantili Hizmet",
      desc: `Yaptığımız tüm işlemlerde %100 müşteri memnuniyeti ve hasarsız işlem garantisi veriyoruz.`,
    },
    {
      icon: <Banknote className="h-8 w-8" strokeWidth={1.75} />,
      title: "Şeffaf Fiyatlandırma",
      desc: `Sürpriz masraf yok. İşlem öncesinde size net fiyat bilgisi vererek çalışıyoruz.`,
    },
  ];

  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className={cn("relative isolate py-20 sm:py-28", sectionBg)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className={cn("mb-3 text-sm font-semibold uppercase tracking-widest", eyebrowText)}>
            Neden Biz
          </p>
          <h2
            id="why-choose-us-heading"
            className={cn("text-3xl font-bold tracking-tight sm:text-4xl", headingText)}
          >
            Neden {districtName} Bizi Tercih Ediyor?
          </h2>
          <p className={cn("mt-4 max-w-xl mx-auto", descColor)}>
            {isAuto
              ? "Araç başında hızlı ve güvenilir çözüm."
              : "Kapıda kalma sorununuza en hızlı, profesyonel çözüm."}
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {reasons.map((item, idx) => (
            <li
              key={idx}
              className={cn(
                "flex flex-col items-center rounded-2xl border p-8 text-center",
                cardBorder,
                cardBg
              )}
            >
              <span className={cn("mb-4", iconColor)}>{item.icon}</span>
              <span className={cn("text-lg font-bold", titleColor)}>
                {item.title}
              </span>
              <p className={cn("mt-3 text-sm leading-relaxed", descColor)}>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
