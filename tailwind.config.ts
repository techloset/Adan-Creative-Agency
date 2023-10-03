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
        "exact-red": "#FF2D59",
        "exact-purple": "#4C40F7",
        "exact-orange": "#FF6800",
        "exact-gray": "#6B6B6B",
        "exact-green": "#4ADB61",
        "exact-yellow": "#FFCC00",
        "exact-blue": "#007BFF",
        
      },
      listStyleImage: {
        checkmark: 'url("./src/assests/images/checkmark.png")',
      },
    },
  },
  plugins: [],
}
export default config
