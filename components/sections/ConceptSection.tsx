import { SectionTitle } from '@/components/ui';

export function ConceptSection() {
  return (
    <section id="concept" className="bg-gradient-to-b from-soft-blue to-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="コンセプト" english="CONCEPT" />

        <div className="max-w-3xl mx-auto text-center">
          {/* キャッチコピー（大きなカード） */}
          <div className="mb-16">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-sm inline-block w-full">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <span className="font-heading text-3xl md:text-4xl lg:text-5xl text-miyako-ocean font-bold">
                  みんなでつくる
                </span>
                <span className="text-4xl md:text-5xl text-miyako-coral">×</span>
                <span className="font-heading text-3xl md:text-4xl lg:text-5xl text-miyako-ocean font-bold">
                  実験する
                </span>
              </div>
            </div>
          </div>

          {/* コンセプト文章 */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg md:text-xl font-medium mb-16">
            <p>
              宮古島の<span className="text-miyako-ocean font-bold">"冬"</span>を盛り上げる、<br />
              みんなでつくるおまつり！
            </p>
            <p>
              宮古島を面白くするアイディアや<br />
              やってみたいことを<br />
              <span className="text-miyako-ocean font-bold">「実験」</span>の名のもと果敢に挑戦。
            </p>
            <p>
              大人も子どももみんなで作り上げる、<br />
              <span className="text-miyako-ocean font-bold">島の文化祭</span>のようなイベントです。
            </p>
          </div>

          {/* テーマ（控えめに配置） */}
          <div className="relative py-10 border-t border-gray-200">
            <div className="inline-block bg-white px-4 absolute -top-3 left-1/2 -translate-x-1/2 text-sm text-gray-400 tracking-widest">
              THEME
            </div>
            
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-wide">
              温故知新
            </h3>
            
            <p className="text-gray-600 text-base leading-relaxed">
              色んな思いや情熱が集まって<br />
              さらなるパワーと刺激を生み出す🔥
            </p>
          </div>

          {/* 装飾ライン */}
          <div className="mt-8 flex justify-center opacity-50">
            <div className="flex items-center gap-4">
              <span className="block w-12 h-px bg-miyako-ocean" />
              <span className="block w-2 h-2 border border-miyako-ocean rotate-45" />
              <span className="block w-12 h-px bg-miyako-ocean" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
