import { SectionTitle } from '@/components/ui';

export function AccessSection() {
  return (
    <section id="access" className="relative bg-miyako-ocean py-24 md:py-32 overflow-hidden">
      {/* キラキラ装飾 */}
      <div className="absolute top-20 right-[8%] w-1.5 h-1.5 bg-white rounded-full animate-sparkle" />
      <div className="absolute top-48 left-[12%] w-1 h-1 bg-miyako-sky rounded-full animate-sparkle animation-delay-700" />
      <div className="absolute bottom-32 right-[20%] w-1 h-1 bg-white/80 rounded-full animate-sparkle animation-delay-1500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="アクセス" english="ACCESS" light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-xs text-miyako-sky tracking-wider mb-2">VENUE</p>
              <p className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                JTAドーム宮古島
              </p>
              <p className="text-white/70 text-sm">
                〒906-0012 沖縄県宮古島市平良字下里2511-35
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-xs text-miyako-sky tracking-wider mb-2">DATE</p>
              <p className="text-xl font-bold text-white">2026年2月28日（土）</p>
              <p className="text-white/70 text-sm mt-1">10:00〜18:00（予定）</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-xs text-miyako-sky tracking-wider mb-3">ACCESS</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-miyako-sky/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-miyako-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <span className="text-white/80">宮古空港から車で約10分</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-miyako-sky/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-miyako-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  <span className="text-white/80">駐車場あり</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl aspect-square flex items-center justify-center">
            <div className="text-center text-white/40">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">MAP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
