import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "1. Wiener Grabredenwettbewerb – Wo Trauer Kunst wird.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(150deg, #14111c 0%, #201727 50%, #352741 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Top rule */}
        <div style={{ width: 60, height: 2, background: "#d4a843", marginBottom: 40, opacity: 0.7 }} />

        {/* Eyebrow */}
        <div style={{
          color: "#d4a843",
          fontSize: 16,
          letterSpacing: 8,
          textTransform: "uppercase",
          marginBottom: 28,
          opacity: 0.85,
          display: "flex",
        }}>
          Wien · Literatur · Wettbewerb
        </div>

        {/* Title */}
        <div style={{
          color: "#f2ede4",
          fontSize: 76,
          fontWeight: 900,
          textAlign: "center",
          lineHeight: 1.05,
          marginBottom: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <span>Wiener</span>
          <span>Grabredenwettbewerb</span>
        </div>

        {/* Subtitle */}
        <div style={{
          color: "rgba(242,237,228,0.55)",
          fontSize: 26,
          textAlign: "center",
          lineHeight: 1.5,
          display: "flex",
        }}>
          Wo Trauer Kunst wird.
        </div>

        {/* Bottom rule */}
        <div style={{ width: 60, height: 2, background: "#d4a843", marginTop: 40, opacity: 0.7 }} />

        {/* Domain */}
        <div style={{
          position: "absolute",
          bottom: 44,
          right: 64,
          color: "rgba(212,168,67,0.4)",
          fontSize: 15,
          letterSpacing: 2,
          display: "flex",
        }}>
          grabredenwettbewerb.at
        </div>
      </div>
    ),
    { ...size }
  );
}
