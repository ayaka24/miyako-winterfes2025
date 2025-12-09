import Image from 'next/image';
import { SectionTitle } from '@/components/ui';

const pastEvents = [
  {
    id: 4,
    number: '第4回',
    theme: '#宮古島の冬はコラボでもっと盛り上がる！',
    date: '2024.2.17',
    visitors: '5,000人',
    siteUrl: 'https://example.com/2024',
    hasSite: true,
    poster: '/images/past-events/poster-4.png',
  },
  {
    id: 3,
    number: '第3回',
    theme: '#できっこないをやる島だ！',
    date: '2023.2.18',
    visitors: '5,200人',
    siteUrl: 'https://example.com/2023',
    hasSite: true,
    poster: '/images/past-events/poster-3.png',
  },
  {
    id: 2,
    number: '第2回',
    theme: '#宮古島愛をうたおう',
    date: '2020.2.16',
    visitors: '3,000人',
    hasSite: false,
    poster: '/images/past-events/poster-2.png',
  },
  {
    id: 1,
    number: '第1回',
    theme: '#宮古島をアップデートせよ',
    date: '2019.2.10',
    visitors: '2,300人',
    hasSite: false,
    poster: '/images/past-events/poster-1.png',
  },
];

export function PastEventSection() {
  return (
    <section id="past-event" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="過去の開催" english="PAST EVENT" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-miyako-light rounded-xl p-4 md:p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-16 h-22 md:w-20 md:h-28 bg-white rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={event.poster}
                    alt={`${event.number} ポスター`}
                    width={80}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-sm md:text-base text-gray-800 mb-1">
                    {event.number} 宮古島冬まつり
                  </p>
                  <p className="text-miyako-ocean text-xs md:text-sm font-medium mb-1 truncate">
                    {event.theme}
                  </p>
                  <div className="text-[10px] md:text-xs text-gray-500">
                    <p>{event.date} ／ {event.visitors}</p>
                  </div>
                  {event.hasSite && (
                    <a
                      href={event.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-miyako-ocean text-[10px] md:text-xs hover:underline"
                    >
                      サイトを見る
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
