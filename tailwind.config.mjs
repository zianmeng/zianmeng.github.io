/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'rgb(188, 68, 54)',
          light: 'rgb(210, 95, 80)',
          dark: 'rgb(155, 55, 44)',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
