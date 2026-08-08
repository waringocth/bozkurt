import type { Metadata } from "next";

/** Canonical base URL for the site */
const BASE_URL = "https://bozkurtcilingir.com";

/** Default site name shared across both divisions */
const SITE_NAME = "Bozkurt Çilingir";

/**
 * Generates a Next.js `Metadata` object for a given page.
 *
 * @param title        Page-specific title (will be appended with the site name)
 * @param description  Meta description for the page
 * @param path         Canonical path, e.g. "/oto-anahtarci/kapi-acma" (default: "/")
 * @param noIndex      Set to true to add noindex (e.g. for dynamic search pages)
 */
export function generateMetadata(
  title: string,
  description: string,
  path: string = "/",
  noIndex: boolean = false
): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Generates metadata for a district landing page.
 *
 * @param districtName   Human-readable district name, e.g. "Beşiktaş"
 * @param division       "cilingir" or "oto-anahtarci"
 * @param districtSlug   URL slug for the district
 */
export function generateDistrictMetadata(
  districtName: string,
  division: "cilingir" | "oto-anahtarci",
  districtSlug: string
): Metadata {
  const isAuto = division === "oto-anahtarci";
  const serviceLabel = isAuto ? "Oto Anahtarcı" : "Çilingir";
  const path = `/${division}/${districtSlug}`;

  return generateMetadata(
    `${districtName} ${serviceLabel} | ${SITE_NAME}`,
    `${districtName} bölgesinde 7/24 profesyonel ${serviceLabel.toLowerCase()} hizmetleri. Kapı açma, kilit değiştirme ve daha fazlası.`,
    path
  );
}

/**
 * Generates metadata for a service detail page.
 *
 * @param serviceName   Human-readable service name, e.g. "Kapı Açma"
 * @param description   Short service description
 * @param division      "cilingir" or "oto-anahtarci"
 * @param serviceSlug   URL slug for the service
 */
export function generateServiceMetadata(
  serviceName: string,
  description: string,
  division: "cilingir" | "oto-anahtarci",
  serviceSlug: string
): Metadata {
  const path = `/${division}/hizmetler/${serviceSlug}`;
  return generateMetadata(serviceName, description, path);
}
