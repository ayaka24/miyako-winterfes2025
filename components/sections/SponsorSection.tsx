'use client';

import Link from 'next/link';
import { SectionTitle } from '@/components/ui';
import { useInView } from '@/hooks';

export function SponsorSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="sponsor" className="relative bg-miyako-light py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in-up ${isInView ? 'visible' : ''}`}>
          <SectionTitle japanese="スポンサー募集" english="SPONSOR" />
        </div>

        <div className="max-w-xl mx-auto">
          <div className={`bg-white rounded-xl p-6 md:p-10 text-center shadow-sm fade-in-up delay-200 ${isInView ? 'visible' : ''}`}>
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-full bg-miyako-ocean/10 flex items-center justify-center">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-miyako-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="font-heading text-lg md:text-xl font-bold text-gray-800 mb-4">
              協賛企業・団体を募集しています
            </h3>

            <p className="text-gray-500 text-[15px] md:text-base leading-[1.9] md:leading-[2] mb-6">
              第5回宮古島冬まつりを一緒に盛り上げてくださる<br className="hidden md:block" />
              協賛企業・団体様を募集しております。
            </p>

            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-miyako-ocean text-white text-[15px] md:text-base font-medium px-5 py-2.5 rounded-lg hover:bg-miyako-ocean/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
