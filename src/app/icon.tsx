import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Next.js App Router favicon — auto-served as /favicon.ico + <link rel="icon">.
 * Mirrors the site logo: navy rounded square + white KeyRound icon.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0f1729",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* KeyRound path — matches the Lucide icon used in the Header logo */}
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(180,200,255,0.9)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="m21 2-9.6 9.6" />
          <path d="m15.5 7.5 3 3L22 7l-3-3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
