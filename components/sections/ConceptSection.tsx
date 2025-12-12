'use client';

import Image from 'next/image';
import { SectionTitle } from '@/components/ui';
import { useInView } from '@/hooks';

export function ConceptSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="concept" className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* 背景写真 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/last-event/all1.jpeg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
        {/* グラデーションオーバーレイ - 少し薄めに */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in-up ${isInView ? 'visible' : ''}`}>
          <SectionTitle japanese="コンセプト" english="CONCEPT" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* キャッチコピー */}
          <div className={`mb-10 md:mb-14 fade-in-up delay-100 ${isInView ? 'visible' : ''}`}>
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                <span className="font-heading text-xl md:text-3xl text-miyako-ocean font-bold">
                  みんなでつくる
                </span>
                <span className="text-xl md:text-3xl text-miyako-accent">×</span>
                <span className="font-heading text-xl md:text-3xl text-miyako-ocean font-bold">
                  実験する
                </span>
              </div>
            </div>
          </div>

          {/* コンセプト文章 */}
          <div className={`space-y-6 text-gray-700 mb-10 md:mb-14 fade-in-up delay-200 ${isInView ? 'visible' : ''}`}>
            <p className="text-[15px] md:text-base leading-[1.9] md:leading-[2]">
              宮古島の<span className="text-miyako-ocean font-semibold">「冬」</span>を盛り上げる、<br />
              みんなでつくるおまつり！
            </p>
            <p className="text-[15px] md:text-base leading-[1.9] md:leading-[2]">
              宮古島を面白くするアイディアや<br />
              やってみたいことを<br />
              <span className="text-miyako-ocean font-semibold">「実験」</span>の名のもと果敢に挑戦。
            </p>
            <p className="text-[15px] md:text-base leading-[1.9] md:leading-[2]">
              大人も子どももみんなで作り上げる、<br />
              <span className="text-miyako-ocean font-semibold">島の文化祭</span>のようなイベントです。
            </p>
          </div>

          {/* テーマ */}
          <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 fade-in-up delay-300 ${isInView ? 'visible' : ''}`}>
            <p className="text-xs text-gray-400 tracking-widest mb-3">THEME</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-miyako-ocean mb-4">
              #みんなで作る島の文化祭
            </h3>
            <p className="text-gray-600 text-[15px] md:text-base leading-[1.9] md:leading-[2]">
              色んな思いや情熱が集まって<br />
              さらなるパワーと刺激を生み出す🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
