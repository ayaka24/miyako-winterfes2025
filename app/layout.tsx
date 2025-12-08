import type { Metadata } from 'next';
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Oswald } from 'next/font/google';
import './globals.css';

// 本文用フォント
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

// 見出し用フォント（読みやすい日本語）
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-zen-kaku',
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
      className={`${notoSansJP.variable} ${zenKakuGothicNew.variable} ${oswald.variable}`}
    >
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
