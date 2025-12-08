'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/ui';

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
    <section id="photo" className="relative bg-miyako-ocean py-24 md:py-32 overflow-hidden">
      {/* キラキラ装飾 */}
      <div className="absolute top-16 left-[10%] w-1.5 h-1.5 bg-white rounded-full animate-sparkle" />
      <div className="absolute top-32 right-[12%] w-1 h-1 bg-miyako-sky rounded-full animate-sparkle animation-delay-300" />
      <div className="absolute bottom-24 left-[18%] w-1 h-1 bg-white/80 rounded-full animate-sparkle animation-delay-1000" />
      <div className="absolute bottom-40 right-[8%] w-1.5 h-1.5 bg-miyako-sky rounded-full animate-sparkle animation-delay-1500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="昨年の様子" english="PHOTO" light />

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[3/2] bg-black/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/50">
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">{currentIndex + 1} / {photos.length}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 pointer-events-auto text-miyako-ocean"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 pointer-events-auto text-miyako-ocean"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
