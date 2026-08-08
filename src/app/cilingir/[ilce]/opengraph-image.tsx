import { cilingirDistricts } from '@/lib/data/districts-cilingir'
import { OGImageTemplate } from '@/components/OGImageTemplate'

export const runtime = 'edge'
export const alt = 'Bozkurt Çilingir'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image(props: { params: Promise<{ ilce: string }> }) {
  const params = await props.params;
  const district = cilingirDistricts.find(d => d.slug === params.ilce)
  if (!district) return new Response('Not Found', { status: 404 })

  return OGImageTemplate({
    title: `${district.name} Çilingir`,
    subtitle: '7/24 Profesyonel Kapı Açma ve Kilit Değişimi',
    section: 'cilingir',
  })
}
