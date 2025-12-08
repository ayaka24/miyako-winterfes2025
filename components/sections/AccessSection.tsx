import { SectionTitle } from '@/components/ui';

export function AccessSection() {
  return (
    <section id="access" className="bg-gradient-to-b from-white to-soft-blue py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="アクセス" english="ACCESS" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {/* 会場情報 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="font-accent text-xs text-miyako-ocean tracking-[0.2em] mb-3">
                VENUE
              </p>
              <p className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                JTAドーム宮古島
              </p>
              <p className="text-gray-600 text-lg">
                〒906-0012<br />
                沖縄県宮古島市平良字下里2511-35
              </p>
            </div>

            {/* 日時 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="font-accent text-xs text-miyako-ocean tracking-[0.2em] mb-3">
                DATE & TIME
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-soft-blue flex items-center justify-center">
                    <svg className="w-6 h-6 text-miyako-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">開催日</p>
                    <p className="text-xl font-bold text-gray-900">2026年2月28日（土）</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-soft-blue flex items-center justify-center">
                    <svg className="w-6 h-6 text-miyako-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">開催時間</p>
                    <p className="text-xl font-bold text-gray-900">10:00〜18:00（予定）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* アクセス方法 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="font-accent text-xs text-miyako-ocean tracking-[0.2em] mb-3">
                HOW TO GET THERE
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">飛行機</p>
                    <p className="text-gray-600">宮古空港から車で約10分</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">レンタカー・タクシー</p>
                    <p className="text-gray-600">会場には駐車場がございます</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                当日は混雑が予想されます。公共交通機関のご利用にご協力ください。
              </p>
            </div>
          </div>

          {/* 地図 */}
          <div className="lg:sticky lg:top-8">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-soft-blue to-white">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-4 text-miyako-ocean/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-accent text-xl tracking-wide mb-2 text-miyako-ocean">MAP</p>
                  <p className="text-sm text-gray-500">JTAドーム宮古島</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
