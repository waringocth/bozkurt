/**
 * Represents an Istanbul district (ilçe).
 */
export interface District {
  /** URL-safe slug, e.g. "besiktas" */
  slug: string;
  /** Human-readable name, e.g. "Beşiktaş" */
  name: string;
  /** Approximate population (optional) */
  population?: number;
  /** All neighbourhoods that belong to this district */
  neighborhoods: Neighborhood[];
}

/**
 * Represents a neighbourhood (mahalle) within a district.
 */
export interface Neighborhood {
  /** URL-safe slug, e.g. "levent" */
  slug: string;
  /** Human-readable name, e.g. "Levent" */
  name: string;
  /** Approximate population (optional) */
  population?: number;
  /** Slug of the parent district */
  districtSlug: string;
}

/**
 * Represents a locksmith service offered on the site.
 * Used for both the "Çilingir" and "Oto Anahtarcı" sections.
 */
export interface Service {
  /** URL-safe slug, e.g. "kapi-acma" */
  slug: string;
  /** Human-readable service name, e.g. "Kapı Açma" */
  name: string;
  /** One- or two-sentence teaser shown in cards/listings */
  shortDescription: string;
  /** Full description used on the service detail page */
  longDescription: string;
  /**
   * Optional icon identifier.
   * Use a Lucide icon name (e.g. "KeyRound") or a custom SVG path key.
   */
  icon?: string;
}

/**
 * Discriminator for which business division a service belongs to.
 */
export type ServiceDivision = "cilingir" | "oto-anahtarci";

/**
 * Represents a customer testimonial.
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  districtSlug?: string;
}
