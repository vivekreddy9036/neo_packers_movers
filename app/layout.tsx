import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neopackersandmovers.com"),
  title: {
    default: "NEO Packers & Movers — Packed for Safety, Ready for Transit.",
    template: "%s · NEO Packers & Movers",
  },
  description:
    "Professional industrial packing company trusted by India's leading industries for 25 years. ISPM 15 certified. 500+ industrial projects, 30,000+ happy customers. Hyderabad, Bengaluru, Gandhidham.",
  keywords: [
    "industrial packing",
    "heavy machinery relocation",
    "export packing",
    "custom wooden crates",
    "container lashing",
    "vacuum packing",
    "VCI packing",
    "ISPM 15 certified",
    "packers and movers Hyderabad",
    "defence packing",
    "aerospace packing",
  ],
  openGraph: {
    title: "NEO Packers & Movers — Packed for Safety, Ready for Transit.",
    description:
      "India's trusted industrial packing specialists since 2000. ISPM 15 · ATA SPEC 300 · MIL-STD compliant. 500+ industrial projects, 30,000+ happy customers.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/neo-icon.png",
    apple: "/neo-icon.png",
  },
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
