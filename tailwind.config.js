module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbff',
          100: '#d8f3ff',
          200: '#b9ebff',
          300: '#8addff',
          400: '#58c8ff',
          500: '#2aa7ff',
          600: '#1184f4',
          700: '#1069d6',
          800: '#1557aa',
          900: '#174a87'
        },
        danger: '#ef4444',
        success: '#22c55e'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 110, 214, 0.12)'
      }
    }
  },
  plugins: []
};
