'use client';

import { SectionTitle } from '@/components/ui';
import { useInView } from '@/hooks';

const projects = [
  {
    id: 1,
    title: 'ステージ',
    description: '地元アーティストによるライブパフォーマンスや伝統芸能の披露。宮古島の音楽と文化を体感できるメインステージです。',
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'アリーナ',
    description: '体験ワークショップやキッズエリア、物産展など。宮古上布の織り体験や宮古馬とのふれあいコーナーも開催。',
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'フードブース',
    description: '宮古島の特産品や郷土料理が楽しめるグルメエリア。宮古そばや島野菜、スイーツなど地元の味が勢揃い。',
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export function ProjectSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="project" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in-up ${isInView ? 'visible' : ''}`}>
          <SectionTitle japanese="イベント内容" english="PROJECT" />
        </div>

        <p className={`text-center text-gray-500 mb-8 max-w-xl mx-auto text-[15px] md:text-base leading-[1.9] fade-in-up delay-100 ${isInView ? 'visible' : ''}`}>
          第5回宮古島冬まつりの3つのエリアをご紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-miyako-light rounded-xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 fade-in-up ${isInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-miyako-ocean/10 text-miyako-ocean flex items-center justify-center mb-4">
                {project.icon}
              </div>
              <h3 className="font-heading font-bold text-base md:text-lg text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-500 text-[15px] md:text-base leading-[1.9] md:leading-[2]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
