import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neoindustrial.example"),
  title: {
    default: "Neo Industrial — Heavy machinery, moved without a single dent.",
    template: "%s · Neo Industrial",
  },
  description:
    "Industrial relocation, export packing, and pan-India heavy-haul logistics — engineered by specialists, not movers. 20+ years. 12,000+ moves. ISO 9001 · IATA · FIATA.",
  keywords: [
    "industrial packing",
    "heavy machinery relocation",
    "export packing",
    "office relocation",
    "custom crating",
    "logistics India",
    "packers and movers industrial",
  ],
  openGraph: {
    title: "Neo Industrial — India's industrial cargo arrives intact.",
    description:
      "We move what others won't. CNCs, presses, transformers up to 80 MT — pan-India, claim-free.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-canvas text-slate-700 antialiased">
        {children}
      </body>
    </html>
  );
}
