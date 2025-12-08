import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/main-visual.png"
          alt="第5回宮古島冬まつり - 温故知新 - 2026.2.28（土）JTAドーム宮古島"
          fill
          className="object-contain md:object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* スクロール促進（画面下部） */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2 text-white/80 drop-shadow-md">
          <span className="text-xs font-accent tracking-[0.3em]">SCROLL</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
