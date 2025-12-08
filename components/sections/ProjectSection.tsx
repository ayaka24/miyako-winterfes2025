import { SectionTitle } from '@/components/ui';

const projects = [
  {
    id: 1,
    title: 'ステージ',
    description: '地元アーティストによるライブパフォーマンスや伝統芸能の披露。宮古島の音楽と文化を体感できるメインステージです。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    id: 2,
    title: 'アリーナ',
    description: '体験ワークショップやキッズエリア、物産展など。宮古上布の織り体験や宮古馬とのふれあいコーナーも開催。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 3,
    title: 'フードブース',
    description: '宮古島の特産品や郷土料理が楽しめるグルメエリア。宮古そばや島野菜、スイーツなど地元の味が勢揃い。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-orange-400 to-amber-500',
    bgColor: 'bg-amber-50',
  },
];

export function ProjectSection() {
  return (
    <section id="project" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle japanese="イベント内容" english="PROJECT" />

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          第5回宮古島冬まつりの3つのエリアをご紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative ${project.bgColor} rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-500 overflow-hidden`}
            >
              {/* アイコン */}
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {project.icon}
              </div>

              {/* コンテンツ */}
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {project.description}
              </p>

              {/* 装飾 */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
