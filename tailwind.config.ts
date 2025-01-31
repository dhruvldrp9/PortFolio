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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
