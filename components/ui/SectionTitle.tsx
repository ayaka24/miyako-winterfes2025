interface SectionTitleProps {
  japanese: string;
  english: string;
  theme?: 'light' | 'yellow';
}

export function SectionTitle({ japanese, english, theme = 'light' }: SectionTitleProps) {
  const englishColor = theme === 'yellow' ? 'text-miyako-ocean' : 'text-miyako-ocean';
  const japaneseColor = theme === 'yellow' ? 'text-gray-900' : 'text-gray-900';
  const lineColor = theme === 'yellow' ? 'bg-miyako-ocean' : 'bg-miyako-ocean';

  return (
    <div className="text-center mb-12 md:mb-16">
      {/* 英語サブタイトル（小さく上に） */}
      <p className={`font-accent text-xs md:text-sm ${englishColor} tracking-[0.3em] mb-2`}>
        {english}
      </p>
      {/* 日本語タイトル（メイン） */}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${japaneseColor} mb-4`}>
        {japanese}
      </h2>
      {/* デコレーションライン */}
      <div className="flex items-center gap-2 justify-center">
        <span className={`block w-8 h-0.5 ${lineColor}`} />
        <span className={`block w-2 h-2 ${lineColor} rotate-45`} />
        <span className={`block w-8 h-0.5 ${lineColor}`} />
      </div>
    </div>
  );
}
