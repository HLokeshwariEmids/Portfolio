import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#ffffff",
          soft: "#f0f6ff",
          elevated: "#e5efff",
        },
        fg: {
          DEFAULT: "#132f52",
          muted: "#4a6284",
          subtle: "#7189aa",
          faint: "#a8bdda",
        },
        border: {
          DEFAULT: "#dfeaff",
          strong: "#c3d8f7",
        },
        accent: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          blue: "#2563eb",
          sky: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero-sm": ["clamp(2.5rem, 8vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "hero": ["clamp(3rem, 10vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
        "display": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(37 99 235 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(37 99 235 / 0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.12), transparent 70%)",
        "accent-gradient":
          "linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #06b6d4 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
