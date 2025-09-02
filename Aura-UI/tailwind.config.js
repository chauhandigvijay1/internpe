/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          dark: '#020617',
          accent: 'hsl(230, 100%, 67%)',
          glow: 'hsl(230, 100%, 75%)',
          muted: 'hsl(220, 30%, 82%)',
          surface: 'rgba(15, 23, 42, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
}
