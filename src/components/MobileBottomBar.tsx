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
  const isAuto    = division === "oto-anahtarci";
  const section   = isAuto ? "oto" : "cilingir";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div
        className={cn(
          "flex items-stretch border-t backdrop-blur-md",
          isAuto
            ? "border-amber-700/30 bg-amber-950/95"
            : "border-navy-800/30  bg-navy-950/95"
        )}
        style={{ boxShadow: "0 -4px 24px rgba(0,0,0,0.35)" }}
      >
        {/* Call */}
        <CallButton
          section={section}
          data-phone-cta="mobile-bottom-bar"
          className={cn(
            "flex flex-1 items-center justify-center gap-2.5 py-4 text-sm font-semibold transition-colors active:bg-white/10",
            isAuto ? "text-amber-300" : "text-white"
          )}
        >
          <Phone className="h-5 w-5" strokeWidth={2.5} />
          Hemen Ara
        </CallButton>

        {/* Divider */}
        <div className="my-3 w-px bg-white/15" aria-hidden />

        {/* WhatsApp */}
        <WhatsAppButton
          section={section}
          data-wa-cta="mobile-bottom-bar"
          className="flex flex-1 items-center justify-center gap-2.5 py-4 text-sm font-semibold text-[#25D366] transition-colors active:bg-white/10"
        >
          <WhatsAppIcon className="h-5 w-5" strokeWidth={2.5} />
          WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
