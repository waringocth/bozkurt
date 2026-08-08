"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Extend global window object for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface CallButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  section: "cilingir" | "oto";
}

const CallButton = React.forwardRef<HTMLAnchorElement, CallButtonProps>(
  ({ section, className, children, ...props }, ref) => {
  const pathname = usePathname();

  const phone =
    section === "cilingir"
      ? process.env.NEXT_PUBLIC_PHONE_CILINGIR || "0000 000 00 00"
      : process.env.NEXT_PUBLIC_PHONE_OTO || "0000 000 00 00";

  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        cta_type: "call",
        section,
        page_path: pathname,
      });
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a ref={ref} href={phoneHref} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
});

CallButton.displayName = "CallButton";

export default CallButton;
