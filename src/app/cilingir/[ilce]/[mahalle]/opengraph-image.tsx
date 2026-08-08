import { cilingirDistricts } from '@/lib/data/districts-cilingir'
import { OGImageTemplate } from '@/components/OGImageTemplate'

export const runtime = 'edge'
export const alt = 'Bozkurt Çilingir'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image(props: { params: Promise<{ ilce: string, mahalle: string }> }) {
  const params = await props.params;
  const district = cilingirDistricts.find(d => d.slug === params.ilce)
  const neighborhood = district?.neighborhoods.find(n => n.slug === params.mahalle)
  
  if (!district || !neighborhood) return new Response('Not Found', { status: 404 })

  return OGImageTemplate({
    title: `${neighborhood.name} Çilingir`,
    subtitle: `${district.name} · 7/24 Profesyonel Kapı Açma`,
    section: 'cilingir',
  })
}
