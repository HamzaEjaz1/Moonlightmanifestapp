import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 999,
            background: "radial-gradient(circle at 32% 28%, #f4edff 0%, #d8c8f5 28%, #9b7ee8 62%, #4a2d8a 100%)",
            boxShadow: "0 0 10px rgba(216,200,245,0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "#07040f",
            left: 13,
            top: 7,
          }}
        />
      </div>
    ),
    size,
  );
}
