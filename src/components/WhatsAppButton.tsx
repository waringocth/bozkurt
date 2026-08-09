"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Extend global window object for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  section: "cilingir" | "oto";
  text?: string;
}

const WhatsAppButton = React.forwardRef<HTMLAnchorElement, WhatsAppButtonProps>(
  ({ section, text, className, children, ...props }, ref) => {
  const pathname = usePathname();

  const waPhone =
    section === "cilingir"
      ? process.env.NEXT_PUBLIC_WHATSAPP_CILINGIR || "905353106139"
      : process.env.NEXT_PUBLIC_WHATSAPP_OTO || "905353106139";
      
  const cleanPhone = waPhone.replace(/\s/g, "").replace(/^\+/, "");
  
  const defaultText =
    section === "cilingir"
      ? "Merhaba, çilingir hizmeti almak istiyorum"
      : "Merhaba, oto anahtarcı hizmeti almak istiyorum";

  const messageText = text || defaultText;
  const encodedText = encodeURIComponent(messageText);

  const waHref = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        cta_type: "whatsapp",
        section,
        page_path: pathname,
      });
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a
      ref={ref}
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
