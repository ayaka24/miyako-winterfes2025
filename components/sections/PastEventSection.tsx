import Image from 'next/image';
import { SectionTitle } from '@/components/ui';

const pastEvents = [
  {
    id: 4,
    number: '第4回',
    title: '宮古島冬まつり',
    theme: '#宮古島の冬はコラボでもっと盛り上がる！',
    date: '2024年2月17日（土）',
    venue: 'JTAドーム宮古島',
    visitors: '5,000人',
    siteUrl: 'https://example.com/2024',
    hasSite: true,
    poster: '/images/past-events/poster-4.png',
  },
  {
    id: 3,
    number: '第3回',
    title: '宮古島冬まつり',
    theme: '#できっこないをやる島だ！',
    date: '2023年2月18日（土）',
    venue: 'JTAドーム宮古島',
    visitors: '5,200人',
    siteUrl: 'https://example.com/2023',
    hasSite: true,
    poster: '/images/past-events/poster-3.png',
  },
  {
    id: 2,
    number: '第2回',
    title: '宮古島冬まつり',
    theme: '#宮古島愛をうたおう',
    date: '2020年2月16日（日）',
    venue: 'JTAドーム宮古島',
    visitors: '3,000人',
    siteUrl: null,
    hasSite: false,
    poster: '/images/past-events/poster-2.png',
  },
  {
    id: 1,
    number: '第1回',
    title: '宮古島冬まつり',
    theme: '#宮古島をアップデートせよ',
    date: '2019年2月10日（日）',
    venue: 'JTAドーム宮古島',
    visitors: '2,300人',
    siteUrl: null,
    hasSite: false,
    poster: '/images/past-events/poster-1.png',
  },
];

export function PastEventSection() {
  return (
    <section id="past-event" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="過去の開催" english="PAST EVENT" />

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          これまでの宮古島冬まつりの軌跡をご紹介します。
        </p>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-soft-blue/50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-5">
                {/* ポスター画像 */}
                <div className="flex-shrink-0 w-24 h-32 md:w-28 md:h-36 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={event.poster}
                    alt={`${event.number} ${event.title} ポスター`}
                    width={112}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* イベント情報 */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-1">
                    {event.number} {event.title}
                  </h3>
                  <p className="text-miyako-ocean font-bold text-sm md:text-base mb-4">
                    {event.theme}
                  </p>

                  <dl className="space-y-1.5 text-sm">
                    <div className="flex">
                      <dt className="text-gray-500 w-20 flex-shrink-0">開催日</dt>
                      <dd className="text-gray-700">{event.date}</dd>
                    </div>
                    <div className="flex">
                      <dt className="text-gray-500 w-20 flex-shrink-0">場所</dt>
                      <dd className="text-gray-700">{event.venue}</dd>
                    </div>
                    <div className="flex">
                      <dt className="text-gray-500 w-20 flex-shrink-0">参加人数</dt>
                      <dd className="text-gray-700">{event.visitors}</dd>
                    </div>
                  </dl>

                  {/* サイトリンク */}
                  {event.hasSite && (
                    <a
                      href={event.siteUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-miyako-ocean hover:text-primary-600 font-medium text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {event.number}のサイトを見る
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
