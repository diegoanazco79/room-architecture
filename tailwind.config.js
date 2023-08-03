const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: { min: '0px', max: '474px' },
      sm: { min: '475px', max: '767px' }
    },
    colors: {
      black: '#1D1D1B',
      white: '#FFFFFF',
      ...colors
    }
  },
  plugins: []
}
