import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Global Edge Strategies — Custom AI-Powered Business Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A0E1A 0%, #0D1117 40%, #1a0d1a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #E91E8C, #00D4FF, #B794F6)",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#E91E8C",
            marginBottom: "32px",
            fontWeight: 600,
          }}
        >
          Global Edge Strategies
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Technology That</span>
          <span
            style={{
              background: "linear-gradient(135deg, #E91E8C, #B794F6, #00D4FF)",
              backgroundClip: "text",
              color: "transparent",
              fontStyle: "italic",
            }}
          >
            Bridges Markets.
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Custom AI systems, web platforms, and digital tools for businesses operating across the US, China, and UK.
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
          }}
        >
          gesedge.com
        </div>
      </div>
    ),
    { ...size }
  );
}
