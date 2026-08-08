import { ImageResponse } from 'next/og'

interface OGImageTemplateProps {
  title: string
  subtitle: string
  section: "cilingir" | "oto"
}

export function OGImageTemplate({ title, subtitle, section }: OGImageTemplateProps) {
  // Use generic hex codes that map closely to the brand's navy and amber oklch palettes.
  const bg = section === "oto" ? "#451a03" : "#0a0f24" 
  const accent = section === "oto" ? "#f59e0b" : "#60a5fa"
  const textPrimary = "#ffffff"
  const textSecondary = section === "oto" ? "#fde68a" : "#bfdbfe"

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bg,
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${accent}`,
            borderRadius: '24px',
            padding: '60px',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: `0 0 40px ${accent}40`,
          }}
        >
          {/* Logo / Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 48,
              fontWeight: 800,
              color: textPrimary,
              marginBottom: 40,
            }}
          >
            Bozkurt <span style={{ color: accent, marginLeft: 12 }}>Çilingir</span>
          </div>

          {/* Title (District/Neighborhood) */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: textPrimary,
              textAlign: 'center',
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: textSecondary,
              textAlign: 'center',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
