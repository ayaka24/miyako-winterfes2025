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
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#7cc4ff',
          400: '#36a9ff',
          500: '#0c8ce9',
          600: '#006fca',
          700: '#0058a3',
          800: '#054b87',
          900: '#0a3f70',
        },
        miyako: {
          sky: '#7cc4ff',
          ocean: '#006fca',
          light: '#f0f7ff',
          accent: '#ff6b6b',
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
          'var(--font-zen-kaku)',
          'var(--font-noto-sans-jp)',
          'sans-serif',
        ],
        accent: [
          'var(--font-oswald)',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
