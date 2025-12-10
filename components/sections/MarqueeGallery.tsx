'use client';

import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const photos = [
  { src: `${basePath}/images/last-event/all1.jpeg`, alt: '会場全体の様子 1' },
  { src: `${basePath}/images/last-event/arena1.jpg`, alt: 'アリーナの様子 1' },
  { src: `${basePath}/images/last-event/food1.jpeg`, alt: 'フードブースの様子 1' },
  { src: `${basePath}/images/last-event/stage1.jpeg`, alt: 'ステージの様子 1' },
  { src: `${basePath}/images/last-event/arena2.jpg`, alt: 'アリーナの様子 2' },
  { src: `${basePath}/images/last-event/stage2.jpg`, alt: 'ステージの様子 2' },
  { src: `${basePath}/images/last-event/all2.jpg`, alt: '会場全体の様子 2' },
  { src: `${basePath}/images/last-event/arena3.jpg`, alt: 'アリーナの様子 3' },
  { src: `${basePath}/images/last-event/food2.jpeg`, alt: 'フードブースの様子 2' },
  { src: `${basePath}/images/last-event/stage3.jpeg`, alt: 'ステージの様子 3' },
];

export function MarqueeGallery() {
  return (
    <section className="relative bg-miyako-dark py-8 overflow-hidden">
      <div className="flex animate-marquee">
        {/* 2回繰り返してシームレスにループ */}
        {[...photos, ...photos].map((photo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-32 md:w-64 md:h-44 mx-2 rounded-lg overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={256}
              height={176}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* グラデーションオーバーレイ（左右にフェード効果） */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-miyako-dark to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-miyako-dark to-transparent pointer-events-none" />
    </section>
  );
}
