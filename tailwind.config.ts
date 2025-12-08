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
        // メインカラー（ファーストビューの鮮やかなブルー）
        primary: {
          50: '#f0f9ff',
          100: '#e0f5fe',
          200: '#b9e6fd',
          300: '#7ccdfb',
          400: '#36b2f9',
          500: '#0c96eb',
          600: '#0074cc', // メインのブルー
          700: '#015da3',
          800: '#064e86',
          900: '#0b416f',
        },
        // 宮古島の自然をイメージした色（FV画像から抽出）
        miyako: {
          sky: '#7ccdfb',       // 空の明るい青
          ocean: '#0074cc',     // 海の深い青
          sand: '#fdf6e3',      // 光の当たった白/クリーム色
          coral: '#ff6b6b',     // アクセントの赤/ピンク
          green: '#4ade80',     // 植物の鮮やかな緑
          tile: '#ea580c',      // 赤瓦/サツマイモのオレンジ
        },
        // 背景用のソフトカラー
        soft: {
          blue: '#f0f9ff',      // 非常に淡いブルー
          cream: '#fffbeb',     // 非常に淡いクリーム
          mint: '#f0fdf4',      // 非常に淡いグリーン
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
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
