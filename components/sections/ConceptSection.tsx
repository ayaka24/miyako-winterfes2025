import { SectionTitle } from '@/components/ui';

export function ConceptSection() {
  return (
    <section id="concept" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* キラキラ装飾 */}
      <div className="absolute top-20 left-[15%] w-1 h-1 bg-miyako-sky rounded-full animate-sparkle" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-miyako-ocean/50 rounded-full animate-sparkle animation-delay-700" />
      <div className="absolute bottom-32 left-[25%] w-1 h-1 bg-miyako-sky rounded-full animate-sparkle animation-delay-1500" />
      <div className="absolute bottom-48 right-[15%] w-1 h-1 bg-primary-300 rounded-full animate-sparkle animation-delay-300" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="コンセプト" english="CONCEPT" />

        <div className="max-w-3xl mx-auto text-center">
          {/* キャッチコピー */}
          <div className="mb-14">
            <div className="inline-block bg-gradient-to-r from-primary-50 to-miyako-light rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                <span className="font-heading text-2xl md:text-3xl text-miyako-ocean font-bold">
                  みんなでつくる
                </span>
                <span className="text-2xl md:text-3xl text-miyako-accent">×</span>
                <span className="font-heading text-2xl md:text-3xl text-miyako-ocean font-bold">
                  実験する
                </span>
              </div>
            </div>
          </div>

          {/* コンセプト文章 */}
          <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg mb-14">
            <p>
              宮古島の<span className="text-miyako-ocean font-semibold">"冬"</span>を盛り上げる、<br />
              みんなでつくるおまつり！
            </p>
            <p>
              宮古島を面白くするアイディアや<br />
              やってみたいことを<br />
              <span className="text-miyako-ocean font-semibold">「実験」</span>の名のもと果敢に挑戦。
            </p>
            <p>
              大人も子どももみんなで作り上げる、<br />
              <span className="text-miyako-ocean font-semibold">島の文化祭</span>のようなイベントです。
            </p>
          </div>

          {/* テーマ */}
          <div className="border-t border-gray-100 pt-10">
            <p className="text-xs text-gray-400 tracking-widest mb-3">THEME</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              温故知新
            </h3>
            <p className="text-gray-500 text-sm">
              色んな思いや情熱が集まって<br />
              さらなるパワーと刺激を生み出す🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
