import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

interface MobileBottomBarProps {
  division?: "cilingir" | "oto-anahtarci";
}

/**
 * Sticky mobile-only bottom action bar.
 * Visible only on viewports smaller than md (768px).
 * Uses env(safe-area-inset-bottom) to clear the iOS home indicator.
 *
 * Theming:
 *  - division="cilingir"      → deep navy background (default)
 *  - division="oto-anahtarci" → deep amber background
 */
export default function MobileBottomBar({
  division = "cilingir",
}: MobileBottomBarProps) {
  const isAuto  = division === "oto-anahtarci";
  const section = isAuto ? "oto" : "cilingir";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Top border glow line */}
      <div
        aria-hidden
        className={cn(
          "h-px w-full",
          isAuto
            ? "bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-navy-400/40 to-transparent"
        )}
      />

      <div
        className={cn(
          "flex items-stretch gap-3 px-3 py-2.5 backdrop-blur-xl",
          isAuto
            ? "bg-amber-950/96"
            : "bg-navy-950/96"
        )}
        style={{ boxShadow: "0 -8px 32px rgba(0,0,0,0.45)" }}
      >
        {/* ── Call button ─────────────────────────────────────────── */}
        <CallButton
          section={section}
          data-phone-cta="mobile-bottom-bar"
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all active:scale-95",
            isAuto
              ? "bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/25 active:bg-amber-500/25"
              : "bg-white/10 text-white ring-1 ring-white/15 active:bg-white/20"
          )}
        >
          <Phone className="h-4.5 w-4.5 shrink-0" strokeWidth={2.5} />
          Hemen Ara
        </CallButton>

        {/* ── WhatsApp button ──────────────────────────────────────── */}
        <WhatsAppButton
          section={section}
          data-wa-cta="mobile-bottom-bar"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all active:scale-95 active:bg-[#1ebe5d]"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
