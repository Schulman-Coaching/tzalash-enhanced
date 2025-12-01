/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tzalash': {
          'olive': '#303830',
          'olive-light': '#3d4a3d',
          'gold': '#F9C349',
          'gold-dark': '#d4a73d',
          'orange': '#FFB100',
          'cream': '#F5F3EF',
          'sand': '#E8E4DC',
        },
        'idf': {
          'green': '#4a5c4a',
          'khaki': '#8B7355',
        }
      },
      fontFamily: {
        'hebrew': ['David Libre', 'Frank Ruhl Libre', 'serif'],
        'sans': ['Open Sans', 'Heebo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #303830 0%, #1a1f1a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F9C349 0%, #FFB100 100%)',
      },
    },
  },
  plugins: [],
}
