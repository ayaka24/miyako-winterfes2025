'use client';

import { SectionTitle } from '@/components/ui';
import { useInView } from '@/hooks';

export function AccessSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="access" className="relative bg-miyako-ocean py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in-up ${isInView ? 'visible' : ''}`}>
          <SectionTitle japanese="アクセス" english="ACCESS" light />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="space-y-4 md:space-y-5">
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 fade-in-up delay-100 ${isInView ? 'visible' : ''}`}>
              <p className="text-xs text-miyako-sky tracking-wider mb-2">VENUE</p>
              <p className="font-heading text-lg md:text-2xl font-bold text-white mb-1">
                JTAドーム宮古島
              </p>
              <p className="text-white/70 text-[13px] md:text-sm leading-[1.8]">
                〒906-0012 沖縄県宮古島市平良字下里2511-35
              </p>
            </div>

            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 fade-in-up delay-200 ${isInView ? 'visible' : ''}`}>
              <p className="text-xs text-miyako-sky tracking-wider mb-2">DATE</p>
              <p className="text-lg md:text-xl font-bold text-white">2026年2月28日（土）</p>
              <p className="text-white/70 text-[13px] md:text-sm mt-1">10:00〜18:00（予定）</p>
            </div>

            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 fade-in-up delay-300 ${isInView ? 'visible' : ''}`}>
              <p className="text-xs text-miyako-sky tracking-wider mb-3">ACCESS</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-miyako-sky/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-miyako-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <span className="text-white/80 text-[13px] md:text-sm">宮古空港から車で約3分</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-miyako-sky/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-miyako-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-white/80 text-[13px] md:text-sm">駐車場あり</span>
                    <p className="text-white/50 text-[12px] md:text-xs leading-[1.7] mt-1">
                      ※ 当日は混雑が予想されます。<br />
                      公共交通機関や乗り合わせでの<br />
                      ご来場にご協力ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`rounded-xl overflow-hidden aspect-square fade-in-up delay-200 ${isInView ? 'visible' : ''}`}>
            <iframe
              src="https://www.google.com/maps?q=JTAドーム宮古島&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JTAドーム宮古島 地図"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
