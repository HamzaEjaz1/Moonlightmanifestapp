import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(160deg, #07040f 0%, #1a0d36 55%, #07040f 100%)",
          color: "#f7f2ff",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, #f4edff, #8b6fd4 55%, #3a1f78)",
            boxShadow: "0 0 60px rgba(180,150,255,0.45)",
          }}
        />
        <div style={{ marginTop: 36, fontSize: 34, letterSpacing: 6, textTransform: "uppercase", color: "#d8c8f5" }}>
          Moonlight
        </div>
        <div style={{ marginTop: 16, fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
          Your dreams deserve to be heard.
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#b8adc9", maxWidth: 820 }}>
          Personalized stories and affirmations, narrated in a voice that feels right for you.
        </div>
      </div>
    ),
    size,
  );
}
