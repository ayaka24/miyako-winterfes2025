interface SectionTitleProps {
  japanese: string;
  english: string;
  light?: boolean;
}

export function SectionTitle({ japanese, english, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-10 md:mb-14 relative">
      <p className={`font-accent text-[10px] md:text-xs tracking-[0.3em] mb-2 ${light ? 'text-white/60' : 'text-miyako-ocean/60'}`}>
        {english}
      </p>
      <h2 className={`font-serif text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide ${light ? 'text-white' : 'text-gray-800'}`}>
        {japanese}
      </h2>
      
      {/* シンプルなライン */}
      <div className={`mt-4 w-12 h-0.5 mx-auto rounded-full ${light ? 'bg-white/40' : 'bg-miyako-ocean/30'}`} />
    </div>
  );
}
