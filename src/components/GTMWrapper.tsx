"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function GTMWrapper() {
  const [hasConsent, setHasConsent] = useState(false);
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    // Check initial consent
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "granted") {
      setHasConsent(true);
    }

    // Intercept dataLayer.push to detect when consent is granted in the current session
    // This avoids needing to modify the existing CookieConsent component
    window.dataLayer = window.dataLayer || [];
    const originalPush = window.dataLayer.push.bind(window.dataLayer);
    
    window.dataLayer.push = function (...args: any[]) {
      if (args[0] && typeof args[0] === "object" && args[0].event === "cookie_consent_granted") {
        setHasConsent(true);
      }
      return originalPush(...args);
    };
  }, []);

  if (!gtmId || !hasConsent) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
