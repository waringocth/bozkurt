import { MetadataRoute } from 'next'
import { cilingirDistricts } from '@/lib/data/districts-cilingir'
import { otoDistricts } from '@/lib/data/districts-oto'

const BASE_URL = 'https://bozkurtcilingir.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/oto-anahtarci`,
      lastModified: new Date(),
      priority: 1,
    },
  ]

  // Add cilingir districts and neighborhoods
  cilingirDistricts.forEach((district) => {
    routes.push({
      url: `${BASE_URL}/cilingir/${district.slug}`,
      lastModified: new Date(),
      priority: 0.9,
    })

    district.neighborhoods.forEach((nbhd) => {
      // Scale priority based on population (max around ~115,000)
      let priority = 0.5 + (nbhd.population / 120000) * 0.3
      priority = Math.min(Math.max(priority, 0.5), 0.8) // Clamp between 0.5 and 0.8
      
      routes.push({
        url: `${BASE_URL}/cilingir/${district.slug}/${nbhd.slug}`,
        lastModified: new Date(),
        priority: parseFloat(priority.toFixed(1)),
      })
    })
  })

  // Add oto-anahtarci districts and neighborhoods
  otoDistricts.forEach((district) => {
    routes.push({
      url: `${BASE_URL}/oto-anahtarci/${district.slug}`,
      lastModified: new Date(),
      priority: 0.9,
    })

    district.neighborhoods.forEach((nbhd) => {
      // Scale priority based on population
      let priority = 0.5 + (nbhd.population / 120000) * 0.3
      priority = Math.min(Math.max(priority, 0.5), 0.8)
      
      routes.push({
        url: `${BASE_URL}/oto-anahtarci/${district.slug}/${nbhd.slug}`,
        lastModified: new Date(),
        priority: parseFloat(priority.toFixed(1)),
      })
    })
  })

  return routes
}
