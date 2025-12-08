'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'コンセプト', href: '#concept' },
  { name: 'お知らせ', href: '#news' },
  { name: 'イベント内容', href: '#project' },
  { name: '協賛企業', href: '#sponsor' },
  { name: 'アクセス', href: '#access' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className={`font-heading font-bold text-lg md:text-xl transition-colors ${
              isScrolled ? 'text-miyako-ocean' : 'text-white'
            } group-hover:text-primary-500`}>
              宮古島冬まつり
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors relative group ${
                  isScrolled ? 'text-gray-700 hover:text-miyako-ocean' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? 'bg-miyako-ocean' : 'bg-white'
                }`} />
              </a>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-white/98 backdrop-blur-md px-4 py-4 space-y-1 border-t border-gray-100 shadow-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-sm text-gray-700 hover:text-miyako-ocean hover:bg-soft-blue/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
