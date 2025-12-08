import { SectionTitle } from '@/components/ui';

export function SponsorSection() {
  return (
    <section id="sponsor" className="relative bg-miyako-light py-24 md:py-32 overflow-hidden">
      {/* キラキラ装飾 */}
      <div className="absolute top-16 right-[15%] w-1 h-1 bg-miyako-sky rounded-full animate-sparkle animation-delay-300" />
      <div className="absolute bottom-20 left-[10%] w-1.5 h-1.5 bg-primary-300 rounded-full animate-sparkle animation-delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="スポンサー募集" english="SPONSOR" />

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 text-center shadow-sm">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-miyako-ocean/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-miyako-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
              協賛企業・団体を募集しています
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              第5回宮古島冬まつりを一緒に盛り上げてくださる<br />
              協賛企業・団体様を募集しております。
            </p>

            <a
              href="mailto:info@example.com"
              className="inline-flex items-center gap-2 bg-miyako-ocean text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-miyako-ocean/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
