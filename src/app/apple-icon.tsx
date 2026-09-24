import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07040f",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 118,
            height: 118,
            borderRadius: 999,
            background: "radial-gradient(circle at 32% 28%, #f4edff 0%, #d8c8f5 28%, #9b7ee8 62%, #4a2d8a 100%)",
            boxShadow: "0 0 36px rgba(216,200,245,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 86,
            height: 86,
            borderRadius: 999,
            background: "#07040f",
            left: 78,
            top: 38,
          }}
        />
      </div>
    ),
    size,
  );
}
