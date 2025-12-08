import Link from 'next/link';

const footerLinks = [
  { name: 'コンセプト', href: '#concept' },
  { name: 'お知らせ', href: '#news' },
  { name: 'イベント内容', href: '#project' },
  { name: '協賛企業', href: '#sponsor' },
  { name: 'アクセス', href: '#access' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-soft-blue to-miyako-ocean/10 border-t border-miyako-ocean/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ロゴ・概要 */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">
                宮古島冬まつり
              </h3>
              <p className="font-accent text-xs text-miyako-ocean tracking-[0.2em]">
                MIYAKOJIMA WINTER FESTIVAL
              </p>
            </div>
            {/* <p className="text-gray-600 text-sm leading-relaxed">
              温故知新 〜 伝統と革新が織りなす宮古島の冬祭り
            </p> */}
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-miyako-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">2026.2.28（土）</span>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6">
              ナビゲーション
            </h4>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-miyako-ocean transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6">
              お問い合わせ
            </h4>
            <address className="not-italic space-y-4">
              <p className="text-gray-600 text-sm">宮古島冬まつり実行委員会</p>
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center gap-2 text-miyako-ocean hover:text-primary-600 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@example.com
              </a>
            </address>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-miyako-ocean/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} 宮古島冬まつり実行委員会. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
