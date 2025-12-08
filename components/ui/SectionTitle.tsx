interface SectionTitleProps {
  japanese: string;
  english: string;
  light?: boolean;
}

export function SectionTitle({ japanese, english, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16 relative">
      {/* キラッと星エフェクト */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className={`absolute -top-2 left-1/2 -translate-x-16 w-4 h-4 animate-twinkle ${light ? 'text-white' : 'text-miyako-sky'}`}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg 
          className={`absolute top-4 left-1/2 translate-x-14 w-3 h-3 animate-twinkle animation-delay-500 ${light ? 'text-white/70' : 'text-miyako-ocean/60'}`}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      
      <p className={`font-accent text-[10px] md:text-xs tracking-[0.3em] mb-2 ${light ? 'text-white/60' : 'text-miyako-ocean/60'}`}>
        {english}
      </p>
      <h2 className={`font-heading text-2xl md:text-3xl lg:text-4xl font-bold ${light ? 'text-white' : 'text-gray-800'}`}>
        {japanese}
      </h2>
      
      {/* シンプルなライン */}
      <div className={`mt-4 w-12 h-0.5 mx-auto rounded-full ${light ? 'bg-white/40' : 'bg-miyako-ocean/30'}`} />
    </div>
  );
}
