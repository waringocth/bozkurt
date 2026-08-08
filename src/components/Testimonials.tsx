"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  division: "cilingir" | "oto-anahtarci";
  testimonials: Testimonial[];
  compact?: boolean;
  districtName?: string;
}

export default function Testimonials({ division, testimonials, compact, districtName }: TestimonialsProps) {
  const isAuto = division === "oto-anahtarci";

  // Dynamic branding classes based on division
  const sectionBg = isAuto ? "bg-amber-50" : "bg-slate-50";
  const eyebrowText = isAuto ? "text-amber-600" : "text-navy-500";
  const headingText = isAuto ? "text-amber-950" : "text-navy-950";
  const cardBorder = isAuto
    ? "border-amber-200 hover:border-amber-400"
    : "border-slate-200 hover:border-navy-300";
  const starColor = isAuto ? "text-amber-400 fill-amber-400" : "text-amber-400 fill-amber-400"; // Stars are usually amber/gold anyway
  const nameText = isAuto ? "text-amber-950" : "text-navy-950";

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": isAuto ? "https://bozkurtcilingir.com/oto-anahtarci" : "https://bozkurtcilingir.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": testimonials.length.toString(),
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
      },
      "reviewBody": t.text,
    })),
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className={cn(compact ? "py-12 sm:py-16" : "py-20 sm:py-28", compact ? "bg-transparent" : sectionBg)}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center", compact ? "mb-10" : "mb-14")}>
          <p className={cn("mb-3 text-sm font-semibold uppercase tracking-widest", eyebrowText)}>
            Müşteri Yorumları
          </p>
          <h2
            id="testimonials-heading"
            className={cn("font-bold tracking-tight", compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl", headingText)}
          >
            {districtName ? `${districtName} Yorumları` : "Hakkımızda Neler Söylediler?"}
          </h2>
          {!compact && (
            <p className="mt-4 max-w-xl mx-auto text-[var(--muted-foreground)]">
              {isAuto
                ? "Oto anahtarcı hizmetimizle yolda kalan yüzlerce müşterimize güven verdik."
                : "Yüzlerce mutlu müşterimiz gibi siz de profesyonel ve hızlı hizmetimizin keyfini çıkarın."}
            </p>
          )}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                  cardBorder
                )}
              >
                {/* Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonial.rating
                          ? starColor
                          : "text-slate-200 fill-slate-200"
                      )}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)] mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className={cn("text-sm font-semibold", nameText)}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
