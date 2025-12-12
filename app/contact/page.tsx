'use client';

import { Header, Footer } from '@/components/layout';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-20 pb-16 md:pt-24 md:pb-24 min-h-screen bg-miyako-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ページタイトル */}
          <div className="text-center mb-10 md:mb-14">
            <p className="font-accent text-sm tracking-[0.3em] text-gray-500 mb-2">
              CONTACT
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              お問い合わせ
            </h1>
            <p className="text-gray-600 text-[15px] md:text-base leading-[1.9]">
              宮古島冬まつりに関するお問い合わせは<br className="md:hidden" />
              下記フォームよりお願いいたします。
            </p>
          </div>

          {/* Googleフォーム埋め込み */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSevDYF0EIjuLlVQstvgo11DhnFEp-oiUGYWfB1nQI2XaxqbZA/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="お問い合わせフォーム"
            >
              読み込んでいます…
            </iframe>
          </div>

          {/* 注意事項 */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs md:text-sm leading-[1.8]">
              ※ お問い合わせ内容によっては、回答にお時間をいただく場合がございます。<br />
              ※ 協賛に関するお問い合わせもこちらからお願いいたします。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

