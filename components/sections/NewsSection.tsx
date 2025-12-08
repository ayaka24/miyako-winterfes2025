import { SectionTitle } from '@/components/ui';

interface NewsSectionProps {}

export function NewsSection({}: NewsSectionProps) {
  const isComingSoon = true;

  return (
    <section id="news" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="お知らせ" english="NEWS" />

        {isComingSoon ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-soft-blue to-primary-100 mb-6">
              <svg
                className="w-10 h-10 text-miyako-ocean"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              準備中
            </p>
            <p className="text-gray-500 max-w-md mx-auto">
              お知らせ情報は準備中です。<br />
              公開までしばらくお待ちください。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p className="text-gray-500 col-span-full text-center">
              現在お知らせはありません。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
