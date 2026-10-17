import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Moonlight Manifest — Your daily manifestation space";

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
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "radial-gradient(circle at 30% 30%, #f4edff, #8b6fd4 55%, #3a1f78)",
              boxShadow: "0 0 48px rgba(180,150,255,0.45)",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: 7,
              textTransform: "uppercase",
              color: "#d8c8f5",
            }}
          >
            Moonlight Manifest
          </div>
        </div>
        <div style={{ marginTop: 36, fontSize: 64, lineHeight: 1.08, maxWidth: 920 }}>
          Your daily manifestation space.
        </div>
        <div style={{ marginTop: 22, fontSize: 28, color: "#b8adc9", maxWidth: 820 }}>
          Stories, intentions and affirmations in one place. Now on the App Store.
        </div>
      </div>
    ),
    size,
  );
}
