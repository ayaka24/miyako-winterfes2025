import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a2530]">
      {/* PC用背景画像 */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero/main-visual.png"
          alt="第5回宮古島冬まつり - 温故知新 - 2026.2.28（土）JTAドーム宮古島"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* スマホ用背景画像 */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src="/images/hero/main-visual-sp.png"
          alt="第5回宮古島冬まつり - 温故知新 - 2026.2.28（土）JTAドーム宮古島"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* キラキラエフェクト */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-white rounded-full animate-twinkle opacity-80" />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-cyan-200 rounded-full animate-twinkle animation-delay-500 opacity-70" />
        <div className="absolute top-[40%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle animation-delay-200 opacity-90" />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-cyan-100 rounded-full animate-twinkle animation-delay-800 opacity-60" />
        <div className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 bg-white rounded-full animate-twinkle animation-delay-500 opacity-70" />
        <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 bg-cyan-200 rounded-full animate-twinkle opacity-80" />
        
        <svg className="absolute top-[20%] right-[30%] w-4 h-4 text-white/60 animate-twinkle animation-delay-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute top-[50%] left-[8%] w-3 h-3 text-cyan-200/70 animate-twinkle animation-delay-800" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute bottom-[40%] right-[12%] w-5 h-5 text-white/50 animate-twinkle animation-delay-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute top-[70%] left-[30%] w-3 h-3 text-cyan-100/60 animate-twinkle" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* スクロール促進（画面下部） */}
      <div className="absolute bottom-8 left-0 right-0 z-10 animate-bounce-slow">
        <div className="flex flex-col items-center justify-center gap-2 text-white/80 drop-shadow-md">
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
