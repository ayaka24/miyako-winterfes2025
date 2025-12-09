import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Oswald } from 'next/font/google';
import './globals.css';

// 本文・見出し共通フォント（ゴシック）
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

// 明朝体フォント（温故知新感）
const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

// 装飾用フォント（英語）
const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '第5回 宮古島冬まつり | 温故知新',
  description:
    '2026年2月28日（土）JTAドーム宮古島にて開催。伝統と革新が織りなす宮古島の冬祭り。',
  keywords: ['宮古島', '冬まつり', 'イベント', '沖縄', '2026'],
  openGraph: {
    title: '第5回 宮古島冬まつり | 温故知新',
    description:
      '2026年2月28日（土）JTAドーム宮古島にて開催。伝統と革新が織りなす宮古島の冬祭り。',
    url: 'https://miyako-winterfes.example.com',
    siteName: '宮古島冬まつり',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '第5回 宮古島冬まつり | 温故知新',
    description:
      '2026年2月28日（土）JTAドーム宮古島にて開催。伝統と革新が織りなす宮古島の冬祭り。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${oswald.variable}`}
    >
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
