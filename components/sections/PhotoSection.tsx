'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui';

// TODO: 実際の写真パスに置き換えてください
const photos = [
  { id: 1, src: '/images/photos/photo-1.jpg', alt: '昨年の様子 1' },
  { id: 2, src: '/images/photos/photo-2.jpg', alt: '昨年の様子 2' },
  { id: 3, src: '/images/photos/photo-3.jpg', alt: '昨年の様子 3' },
  { id: 4, src: '/images/photos/photo-4.jpg', alt: '昨年の様子 4' },
  { id: 5, src: '/images/photos/photo-5.jpg', alt: '昨年の様子 5' },
];

export function PhotoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="photo" className="bg-[#FFE135] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="昨年の様子" english="PHOTO" theme="yellow" />

        {/* スライドショー */}
        <div className="relative max-w-4xl mx-auto">
          {/* メイン画像エリア - 3:2の比率 */}
          <div className="relative aspect-[3/2] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {/* プレースホルダー（実際の画像がない場合） */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">写真 {currentIndex + 1} / {photos.length}</p>
              </div>
            </div>

            {/* TODO: 実際の画像を表示する場合は以下のコメントを外してください
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              fill
              className="object-cover"
            />
            */}
          </div>

          {/* ナビゲーションボタン */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 pointer-events-auto text-miyako-ocean"
              aria-label="前の写真"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 pointer-events-auto text-miyako-ocean"
              aria-label="次の写真"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* ドットインジケーター */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`写真 ${index + 1} を表示`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
