import type { Config } from "tailwindcss/types";

const config: Config = {
  theme: {
    extend: {
      boxShadow: {
        'gold-centered': '0px 0px 15px 10px rgba(255, 162, 51, 0.8)',
      },
    },
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "luxury",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
