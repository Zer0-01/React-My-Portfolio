import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** The size LinkedIn, WhatsApp, Slack and X expect for link previews. */
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Dark theme values from `.dark` in app/globals.css. Image generation runs outside
 * the browser, so CSS variables are not available and the values are mirrored here.
 */
const colors = {
  background: "#121212",
  foreground: "#f5f5f5",
  muted: "#a3a3a3",
  primaryText: "#dca0ac",
  gold: "#b89b5e",
  border: "#29292b",
};

/** Static font files; the image renderer cannot read variable or woff2 fonts. */
async function loadFonts() {
  const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));
  const [heading, body, label] = await Promise.all([
    font("space-grotesk-latin-700-normal.woff"),
    font("inter-latin-400-normal.woff"),
    font("inter-latin-500-normal.woff"),
  ]);

  return [
    { name: "Space Grotesk", data: heading, weight: 700 as const, style: "normal" as const },
    { name: "Inter", data: body, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: label, weight: 500 as const, style: "normal" as const },
  ];
}

interface OgCardProps {
  /** Small line above the title, e.g. "Flutter mobile app · 2025". */
  eyebrow: string;
  title: string;
  description: string;
  /** Left side of the bottom row. */
  footer: string;
}

/** A link-preview card in the portfolio's dark editorial style. */
export async function renderOgCard({ eyebrow, title, description, footer }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: colors.background,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 500, color: colors.muted }}>{eyebrow}</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div
              style={{
                fontFamily: "Space Grotesk",
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: colors.foreground,
              }}
            >
              {title}
            </div>
            {/* The gold rule that ends the hero heading on the site. */}
            <div style={{ width: 48, height: 9, marginLeft: 8, marginBottom: 20, backgroundColor: colors.gold }} />
          </div>
          <div style={{ marginTop: 24, maxWidth: 960, fontSize: 36, lineHeight: 1.4, color: colors.muted }}>
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: `2px solid ${colors.border}`,
            fontSize: 28,
            fontWeight: 500,
          }}
        >
          <div style={{ color: colors.foreground }}>{footer}</div>
          <div style={{ color: colors.primaryText }}>anaszulkifli.dev</div>
        </div>
      </div>
    ),
    { ...ogImageSize, fonts: await loadFonts() },
  );
}
