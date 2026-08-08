import type { District } from "@/lib/types";

/**
 * Static list of Istanbul districts served by Bozkurt Çilingir.
 *
 * Populate with real district + neighbourhood data before building pages.
 * Each District must have at least one Neighborhood for dynamic routes to work.
 *
 * @example
 * {
 *   slug: "besiktas",
 *   name: "Beşiktaş",
 *   population: 180_000,
 *   neighborhoods: [
 *     { slug: "levent", name: "Levent", districtSlug: "besiktas" },
 *     { slug: "etiler", name: "Etiler", districtSlug: "besiktas" },
 *   ],
 * }
 */
export const districts: District[] = [
  // TODO: populate with Istanbul districts
];
