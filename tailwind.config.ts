import type { Config } from "tailwindcss/types";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "halloween",
      "retro",
      "synthwave",
      "coffee",
      "dracula",
      "forest",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
