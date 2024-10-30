import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5A0CFF',
        'secondary': '#A540F3',
        'gray': '#818181',
        'light-yellow': '#FF8A00',
        'brown': '#553004',
        'dark-gray': '#141414',
        'dark-light': '#202020'
      },
      backgroundColor: {
        'primary': '#A540F3',
        'secondary': '#5A0CFF',
      }
    },
    screens: {
      'xl': '1200px',
      'lg': '1024px',
      'md': '768px'
    }
  },
  plugins: [],
};
export default config;
