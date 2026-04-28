import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary text — deep navy black
        ink: {
          900: "#0A1628",
          800: "#142033",
          700: "#1F2D44",
        },
        // Brand navy (Stripe-like deep blue)
        navy: {
          900: "#0A2540",
          800: "#0D2B4D",
          700: "#103260",
          600: "#1A4480",
          500: "#2E5BA0",
        },
        // Cool slate for body text
        slate: {
          900: "#1A2236",
          700: "#3D4A5E",
          600: "#525F75",
          500: "#6B7280",
          400: "#8A93A4",
          300: "#B5BCC9",
          200: "#D5DAE3",
          100: "#E4E7EC",
          50: "#F1F3F6",
        },
        // Off-white background tones
        canvas: {
          DEFAULT: "#FFFFFF",
          50: "#FAFBFC",
          100: "#F4F6F9",
          200: "#EBEEF3",
        },
        // Conversion CTA — kept warm orange
        signal: {
          400: "#FF8A33",
          500: "#FF6A00",
          600: "#E55A00",
          700: "#C44A00",
        },
        // Trust accent
        accent: {
          500: "#0B5FFF",
          600: "#0852E0",
        },
        verify: {
          500: "#10B981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "tight-display": "-0.035em",
        "tight-tag": "-0.015em",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10, 22, 40, 0.04), 0 4px 12px rgba(10, 22, 40, 0.04)",
        elevated:
          "0 1px 2px rgba(10, 22, 40, 0.06), 0 8px 24px rgba(10, 22, 40, 0.08)",
        card: "0 1px 1px rgba(10, 22, 40, 0.03), 0 2px 6px rgba(10, 22, 40, 0.04)",
        glow: "0 0 0 1px rgba(255, 106, 0, 0.2), 0 12px 32px rgba(255, 106, 0, 0.18)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
