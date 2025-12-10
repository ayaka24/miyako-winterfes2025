const footerLinks = [
  { name: 'コンセプト', href: '#concept' },
  { name: 'お知らせ', href: '#news' },
  { name: 'イベント内容', href: '#project' },
  { name: '協賛企業', href: '#sponsor' },
  { name: 'アクセス', href: '#access' },
];

export function Footer() {
  return (
    <footer className="bg-[#0f3a4a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-2">宮古島冬まつり</h3>
            <p className="text-white/60 text-[13px] md:text-sm leading-[1.8]">
              2026.2.28（土）<br />
              JTAドーム宮古島
            </p>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-3">MENU</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[13px] md:text-sm text-white/60 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 宮古島冬まつり実行委員会
          </p>
        </div>
      </div>
    </footer>
  );
}
