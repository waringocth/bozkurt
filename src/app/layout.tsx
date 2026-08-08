import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GTMWrapper from "@/components/GTMWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bozkurt Çilingir | 7/24 Çilingir & Oto Anahtarcı",
    template: "%s | Bozkurt Çilingir",
  },
  description:
    "İstanbul'da 7/24 profesyonel çilingir ve oto anahtarcı hizmetleri. Kapı açma, kilit değiştirme, araç kapısı açma ve daha fazlası.",
  metadataBase: new URL("https://bozkurtcilingir.com"),
};

// Placeholder phone numbers — replace with real values via env or CMS
const CILINGIR_PHONE     = "0000 000 00 00";
const OTO_ANAHTARCI_PHONE = "0000 000 00 00";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header
          cilingirPhone={CILINGIR_PHONE}
          otoAnahtarciPhone={OTO_ANAHTARCI_PHONE}
        />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer
          cilingirPhone={CILINGIR_PHONE}
          otoAnahtarciPhone={OTO_ANAHTARCI_PHONE}
          address="İstanbul, Türkiye"
        />
        <CookieConsent />
        <GTMWrapper />
      </body>
    </html>
  );
}
