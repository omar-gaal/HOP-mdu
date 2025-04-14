/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/components/**/*.{vue,js,ts}',
    // './src/Navigation/**/*.{vue,js,ts}', 
    // './src/layouts/**/*.{vue,js,ts}',
    // './src/pages/**/*.{vue,js,ts}',
    // './src/app.vue',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
}

