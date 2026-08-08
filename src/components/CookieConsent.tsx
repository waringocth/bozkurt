"use client";

import React, { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "granted") {
      updateGtmConsent();
    }
  }, []);

  const updateGtmConsent = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "cookie_consent_granted" });
      function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      }
      // @ts-expect-error - gtag is not fully typed here
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "granted");
    setShowBanner(false);
    updateGtmConsent();
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-between gap-4 border-t border-navy-800 bg-navy-950 p-4 text-sm text-navy-200 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] sm:flex-row sm:p-5">
      <p className="flex-1 text-center sm:text-left leading-relaxed max-w-4xl">
        Deneyiminizi geliştirmek ve hizmetlerimizi daha iyi sunabilmek için çerezleri kullanıyoruz. Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          onClick={handleReject}
          className="rounded-xl border border-navy-700 bg-transparent px-5 py-2 font-medium text-navy-300 transition-colors hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:ring-offset-2 focus:ring-offset-navy-950"
        >
          Reddet
        </button>
        <button
          onClick={handleAccept}
          className="rounded-xl bg-navy-600 px-5 py-2 font-medium text-white transition-colors hover:bg-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:ring-offset-2 focus:ring-offset-navy-950 shadow-md"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
