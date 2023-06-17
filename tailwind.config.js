/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: 'rgb(240, 123, 79)',
      red: '#F15D51',
      white: 'rgb(255, 255, 255)',
      'gray-blue': 'rgb(94, 113, 130)',
      'dark-gray-blue': 'rgb(51, 65, 85)',
      'very-dark-blue': 'rgb(0, 0, 51)',
    },
    screens: {
      'sm': '370px',
      'md': '560px',
      'lg': '960px',
    },

    fontSize: {
      sm: '0.8rem',
      base: '16px',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.25rem',
    },
    fontFamily: {
      'body': []
    },
    extend: {
      maxHeight: {
        'fit-content': 'fit-content',
      }
    }
  },
  plugins: [],
}
