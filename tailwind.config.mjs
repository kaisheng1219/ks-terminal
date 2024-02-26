/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

function withOpacity(variable) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        skin: {
          text: withOpacity("--color-text"),
          command: withOpacity("--color-text-command"),
          "text-second": withOpacity("--color-text-second"),
          cl: withOpacity("--color-text-cl"),
          caret: withOpacity("--color-caret"),
          "cl-user": withOpacity("--color-cl-user"),
          "cl-path": withOpacity("--color-cl-path"),
          background: withOpacity("--color-background"),
          solid: withOpacity("--color-border"),
        },
      },
      keyframes: {
        blink: {
          "50%": {
            opacity: 0,
          },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        typing: {
          from: { width: 0 },
          to: { width: "100%" },
        },
      },
      animation: {
        blink: "blink 1s linear infinite",
        "fade-in": "fade-in 0.5s ease forwards",
        typing: "typing 0.5s steps(30, end) 1",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
  ],
};
