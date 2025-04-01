/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-opensans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      heading: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          dark: 'rgb(var(--color-primary-dark))',
          light: 'rgb(var(--color-primary-light))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          dark: 'rgb(var(--color-accent))',
          light: 'rgb(var(--color-secondary-light))',
        },
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary))',
          light: 'rgb(var(--color-tertiary-light))',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))',
        },
        dark: {
          DEFAULT: 'rgb(var(--color-dark))',
        },
        light: {
          DEFAULT: 'rgb(var(--color-light))',
        },
      },
    },
  },
  plugins: [],
} 