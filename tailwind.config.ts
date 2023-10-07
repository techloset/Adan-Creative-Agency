import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "exact-white":"#FFF",
        "exact-black":"#000",
        "exact-red": "#FF2D59",
        "exact-green": "#4ADB61",
        "exact-yellow": "#FFCC00",
        "exact-blue": "#007BFF",
        "exact-purple": "#4C40F7",
        "exact-orange": "#FF6800",
        "exact-gray": "#6B6B6B", 
        "exact-dark":"#020E2D" ,
        "exact-dark-orange":"#FE9602",
        "exact-light-orange":"#FC0",

      },
    },
  },
  plugins: [],
}
export default config
