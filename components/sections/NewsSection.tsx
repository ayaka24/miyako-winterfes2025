import { SectionTitle } from '@/components/ui';

export function NewsSection() {
  const isComingSoon = true;

  return (
    <section id="news" className="relative bg-miyako-light py-24 md:py-32 overflow-hidden">
      {/* キラキラ装飾 */}
      <div className="absolute top-20 left-[12%] w-1 h-1 bg-miyako-ocean/40 rounded-full animate-sparkle animation-delay-700" />
      <div className="absolute bottom-28 right-[18%] w-1 h-1 bg-miyako-sky rounded-full animate-sparkle animation-delay-1500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="お知らせ" english="NEWS" />

        {isComingSoon ? (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-miyako-ocean/10 mb-5">
              <svg className="w-7 h-7 text-miyako-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="font-heading text-xl font-bold text-gray-800 mb-2">準備中</p>
            <p className="text-gray-500 text-sm">
              お知らせ情報は準備中です。<br />
              公開までしばらくお待ちください。
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
