import { ImageResponse } from "next/og";
import { PHONE_DISPLAY, person } from "@/data/site";

export const runtime = "edge";

export const alt = `${person.name} — ${person.jobTitle}, ${person.locality}, ${person.countryName}`;
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
          padding: "80px",
          background: "#0B0B0F",
          color: "#e2e8f0",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#22d3ee", letterSpacing: 2 }}>
          NURLAN.DEV
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          {person.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#38bdf8", marginTop: 12 }}>
          {person.jobTitle}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#94a3b8", marginTop: 28 }}>
          React · Next.js · TypeScript · Tailwind CSS · Node.js
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#64748b", marginTop: 40 }}>
          {person.locality}, {person.countryName} — {PHONE_DISPLAY}
        </div>
      </div>
    ),
    size,
  );
}
