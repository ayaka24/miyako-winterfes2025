import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#d1e9f1',
          200: '#a3d3e3',
          300: '#75bdd5',
          400: '#47a7c7',
          500: '#2d8fb0',
          600: '#24728c',
          700: '#1b5569',
          800: '#123846',
          900: '#091c23',
        },
        miyako: {
          sky: '#5fb3c9',
          ocean: '#1a6b8a',
          deep: '#0f4a5f',
          dark: '#0a2530',
          light: '#e8f4f8',
          accent: '#e86b5c',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-noto-sans-jp)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        heading: [
          'var(--font-noto-sans-jp)',
          'sans-serif',
        ],
        serif: [
          'var(--font-noto-serif-jp)',
          'serif',
        ],
        accent: [
          'var(--font-oswald)',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
