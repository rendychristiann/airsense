/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#51A471',
        ternary: '#0D5D56',
        dark: '#16213C',
        dashboardDark: '#11192D',
        creatorDark: '#16203B',
        semilight: '#E2DADB',
        light: '#FFFFFF'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "night"],
  }
}

