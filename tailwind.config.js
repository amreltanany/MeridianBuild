/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        surface: '#2f2f2f',
        'surface-hover': '#3a3a3a',
        border: '#404040',
        text: '#f6f6f6',
        'text-muted': '#a0a0a0',
        accent: '#ffcb74',
        'accent-hover': '#ffd590',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
