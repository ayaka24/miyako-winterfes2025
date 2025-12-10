'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui';
import { useInView } from '@/hooks';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const photos = [
  // all
  { id: 1, src: `${basePath}/images/last-event/all1.jpeg`, alt: '会場全体の様子 1' },
  { id: 2, src: `${basePath}/images/last-event/all2.jpg`, alt: '会場全体の様子 2' },
  // arena
  { id: 3, src: `${basePath}/images/last-event/arena1.jpg`, alt: 'アリーナの様子 1' },
  { id: 4, src: `${basePath}/images/last-event/arena2.jpg`, alt: 'アリーナの様子 2' },
  { id: 5, src: `${basePath}/images/last-event/arena3.jpg`, alt: 'アリーナの様子 3' },
  { id: 6, src: `${basePath}/images/last-event/arena4.jpg`, alt: 'アリーナの様子 4' },
  { id: 7, src: `${basePath}/images/last-event/arena5.jpg`, alt: 'アリーナの様子 5' },
  // food
  { id: 8, src: `${basePath}/images/last-event/food1.jpeg`, alt: 'フードブースの様子 1' },
  { id: 9, src: `${basePath}/images/last-event/food2.jpeg`, alt: 'フードブースの様子 2' },
  // stage
  { id: 10, src: `${basePath}/images/last-event/stage1.jpeg`, alt: 'ステージの様子 1' },
  { id: 11, src: `${basePath}/images/last-event/stage2.jpg`, alt: 'ステージの様子 2' },
  { id: 12, src: `${basePath}/images/last-event/stage3.jpeg`, alt: 'ステージの様子 3' },
  { id: 13, src: `${basePath}/images/last-event/stage4.jpg`, alt: 'ステージの様子 4' },
  { id: 14, src: `${basePath}/images/last-event/stage5.jpg`, alt: 'ステージの様子 5' },
  { id: 15, src: `${basePath}/images/last-event/stage6.jpg`, alt: 'ステージの様子 6' },
  // last
  { id: 16, src: `${basePath}/images/last-event/last.jpg`, alt: '昨年のフィナーレ' },
];

export function PhotoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useInView(0.2);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="photo" className="relative bg-miyako-ocean py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in-up ${isInView ? 'visible' : ''}`}>
          <SectionTitle japanese="昨年の様子" english="PHOTO" light />
        </div>

        <div className={`relative max-w-4xl mx-auto fade-in-up delay-200 ${isInView ? 'visible' : ''}`}>
          <div className="relative aspect-[3/2] bg-black/20 rounded-xl overflow-hidden">
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-4 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 pointer-events-auto text-miyako-ocean"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 pointer-events-auto text-miyako-ocean"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-md mx-auto">
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
          
          <p className="text-center text-white/60 text-sm mt-3">
            {currentIndex + 1} / {photos.length}
          </p>
        </div>
      </div>
    </section>
  );
}
