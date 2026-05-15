/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      'deep-navy': '#0A1628',
      'medium-blue': '#1B3A6B',
      'electric-blue': '#2E6EDB',
      'pale-blue': '#E8F0FE',
      'steel-grey': '#8A9BB0',
    },
    fontFamily: {
      'mono': ['IBM Plex Mono', 'monospace'],
      'sans': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
