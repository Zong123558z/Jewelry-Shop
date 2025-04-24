import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D2B2D',
        'gray': '#B3B3B3',
        'purple': '#6A3D96',
        'background': '#F5F6F1',
        'gray-text': '#C3C3C0'
      }
    },
  },
  plugins: [],
};
export default config;
