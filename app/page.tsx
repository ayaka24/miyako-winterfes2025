import { Header, Footer } from '@/components/layout';
import {
  HeroSection,
  ConceptSection,
  PhotoSection,
  NewsSection,
  ProjectSection,
  PastEventSection,
  SponsorSection,
  AccessSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ファーストビュー */}
        <HeroSection />

        {/* コンセプト */}
        <ConceptSection />

        {/* 昨年の様子（スライドショー） */}
        <PhotoSection />

        {/* お知らせ - フェーズ1では Coming Soon 表示 */}
        <NewsSection />

        {/* プロジェクト（イベント内容） */}
        <ProjectSection />

        {/* スポンサー募集 */}
        <SponsorSection />

        {/* アクセス */}
        <AccessSection />

        {/* 過去のイベント（最後に配置） */}
        <PastEventSection />
      </main>

      <Footer />
    </>
  );
}
