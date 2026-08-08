import { otoDistricts } from '@/lib/data/districts-oto'
import { OGImageTemplate } from '@/components/OGImageTemplate'

export const runtime = 'edge'
export const alt = 'Bozkurt Oto Anahtarcı'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image(props: { params: Promise<{ ilce: string }> }) {
  const params = await props.params;
  const district = otoDistricts.find(d => d.slug === params.ilce)
  if (!district) return new Response('Not Found', { status: 404 })

  return OGImageTemplate({
    title: `${district.name} Oto Anahtarcı`,
    subtitle: 'Kayıp Anahtar Yapımı ve İmmobilizer Çözümleri',
    section: 'oto',
  })
}
