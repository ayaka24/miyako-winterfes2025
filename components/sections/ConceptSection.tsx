import { SectionTitle } from '@/components/ui';

export function ConceptSection() {
  return (
    <section id="concept" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="コンセプト" english="CONCEPT" />

        <div className="max-w-3xl mx-auto text-center">
          {/* キャッチコピー */}
          <div className="mb-10 md:mb-14">
            <div className="inline-block bg-gradient-to-r from-primary-50 to-miyako-light rounded-2xl p-6 md:p-10">
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
          <div className="space-y-6 text-gray-600 mb-10 md:mb-14">
            <p className="text-[15px] md:text-base leading-[1.9] md:leading-[2]">
              宮古島の<span className="text-miyako-ocean font-semibold">"冬"</span>を盛り上げる、<br />
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

          {/* テーマ - 明朝体で温故知新感 */}
          <div className="border-t border-gray-100 pt-8 md:pt-10">
            <p className="text-xs text-gray-400 tracking-widest mb-3">THEME</p>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-4 tracking-wider">
              温故知新
            </h3>
            <p className="font-serif text-gray-500 text-[15px] md:text-base leading-[1.9] md:leading-[2]">
              色んな思いや情熱が集まって<br />
              さらなるパワーと刺激を生み出す🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
