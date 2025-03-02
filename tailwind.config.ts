import type { Config } from "tailwindcss";
const theme = require("./theme.json");

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        lg: `${theme.radius}rem`,
        md: `calc(${theme.radius}rem - 2px)`,
        sm: `calc(${theme.radius}rem - 4px)`,
      },
      colors: {
        background: theme.background,
        foreground: theme.foreground,
        card: {
          DEFAULT: theme.card,
          foreground: theme["card-foreground"],
        },
        popover: {
          DEFAULT: theme.popover,
          foreground: theme["popover-foreground"],
        },
        primary: {
          DEFAULT: theme.primary,
          foreground: theme["primary-foreground"],
        },
        secondary: {
          DEFAULT: theme.muted,
          foreground: theme["muted-foreground"],
        },
        muted: {
          DEFAULT: theme.muted,
          foreground: theme["muted-foreground"],
        },
        accent: {
          DEFAULT: theme.accent,
          foreground: theme["accent-foreground"],
        },
        destructive: {
          DEFAULT: theme.destructive,
          foreground: theme["destructive-foreground"],
        },
        border: theme.border,
        input: theme.input,
        ring: theme.ring,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse": {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "rotate": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "rotate": "rotate 10s linear infinite",
      },
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
