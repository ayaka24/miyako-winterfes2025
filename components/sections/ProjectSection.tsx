'use client';

import { SectionTitle } from '@/components/ui';
import { useInView } from '@/hooks';

export function ProjectSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="project" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in-up ${isInView ? 'visible' : ''}`}>
          <SectionTitle japanese="イベント内容" english="PROJECT" />
        </div>

        <div className={`max-w-2xl mx-auto text-center bg-miyako-light rounded-xl p-8 shadow-sm fade-in-up delay-100 ${isInView ? 'visible' : ''}`}>
          <p className="font-accent text-lg md:text-xl text-miyako-ocean font-bold mb-4 tracking-wide">
            COMING SOON
          </p>
          <p className="text-gray-600 text-[15px] md:text-base leading-[1.9]">
            イベント内容は決まり次第公開いたします。<br />
            今しばらくお待ちください。
          </p>
        </div>
      </div>
    </section>
  );
}
