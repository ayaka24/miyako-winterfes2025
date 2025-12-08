import { SectionTitle } from '@/components/ui';

export function SponsorSection() {
  return (
    <section id="sponsor" className="bg-soft-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="スポンサー募集" english="SPONSOR" />

        <div className="max-w-3xl mx-auto">
          {/* 募集案内 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-miyako-ocean to-primary-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              協賛企業・団体を募集しています
            </h3>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
              第5回宮古島冬まつりを一緒に盛り上げてくださる<br className="hidden md:block" />
              協賛企業・団体様を募集しております。<br />
              ご興味のある方はお気軽にお問い合わせください。
            </p>

            <a
              href="mailto:info@example.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-miyako-ocean to-primary-600 text-white font-semibold px-8 py-4 rounded-xl
                       hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              協賛について問い合わせる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
