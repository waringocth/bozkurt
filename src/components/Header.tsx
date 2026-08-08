"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, KeyRound } from "lucide-react";
import CallButton from "@/components/CallButton";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeaderProps {
}

type Division = "cilingir" | "oto-anahtarci";

// ─── Tab config ───────────────────────────────────────────────────────────────

const TABS: { id: Division; label: string; href: string }[] = [
  { id: "cilingir",       label: "Çilingir",      href: "/" },
  { id: "oto-anahtarci",  label: "Oto Anahtarcı", href: "/oto-anahtarci" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header(_props: HeaderProps) {
  const pathname  = usePathname();
  const isAuto    = pathname.startsWith("/oto-anahtarci");
  const activeTab = isAuto ? "oto-anahtarci" : "cilingir";
  const section   = isAuto ? "oto" : "cilingir";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-500",
        isAuto
          ? "border-amber-800/30 bg-amber-950/90"
          : "border-navy-800/30  bg-navy-950/90"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
          aria-label="Bozkurt Çilingir — Ana Sayfa"
        >
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-500",
              isAuto ? "bg-amber-500/20 text-amber-300" : "bg-navy-500/20 text-navy-300"
            )}
          >
            <KeyRound className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="hidden font-semibold tracking-tight text-white sm:block">
            Bozkurt{" "}
            <span
              className={cn(
                "transition-colors duration-500",
                isAuto ? "text-amber-400" : "text-navy-300"
              )}
            >
              Çilingir
            </span>
          </span>
        </Link>

        {/* ── Division toggle ───────────────────────────────────────────────── */}
        <nav
          aria-label="Hizmet bölümü seçimi"
          className="relative flex shrink-0 items-center rounded-full p-1"
          style={{
            background: "rgba(255,255,255,0.06)",
            boxShadow:  "inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative z-10 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium",
                  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  isActive ? "text-white" : "text-white/55 hover:text-white/80"
                )}
              >
                {/* Sliding pill behind the active tab */}
                {isActive && (
                  <motion.span
                    layoutId="header-tab-indicator"
                    className={cn(
                      "absolute inset-0 rounded-full",
                      tab.id === "oto-anahtarci"
                        ? "bg-amber-500/80 shadow-[0_0_16px_2px_rgba(245,158,11,0.35)]"
                        : "bg-navy-600/90  shadow-[0_0_16px_2px_rgba(59,130,246,0.30)]"
                    )}
                    transition={{
                      type:      "spring",
                      stiffness: 400,
                      damping:   35,
                    }}
                  />
                )}
                {/* Label */}
                <span className="relative">{tab.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* ── Phone CTA ─────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
          >
            <CallButton
              section={section}
              data-phone-cta="header"
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
                "shadow-lg transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                isAuto
                  ? "bg-amber-500 text-amber-950 shadow-amber-500/25"
                  : "bg-white   text-navy-900  shadow-white/15"
              )}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="hidden sm:inline">
                {isAuto 
                  ? process.env.NEXT_PUBLIC_PHONE_OTO || "0000 000 00 00"
                  : process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0000 000 00 00"
                }
              </span>
              <span className="sm:hidden">Ara</span>
            </CallButton>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
}
