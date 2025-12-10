/**
 * スポンサーデータ
 * フェーズ1では静的データとして管理
 */

export type SponsorRank = 'platinum' | 'gold' | 'silver' | 'bronze' | 'special';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
  rank: SponsorRank;
}

/**
 * スポンサーランクの表示設定
 */
export const sponsorRankConfig: Record<SponsorRank, { label: string; order: number }> = {
  special: { label: '特別協賛', order: 0 },
  platinum: { label: 'プラチナスポンサー', order: 1 },
  gold: { label: 'ゴールドスポンサー', order: 2 },
  silver: { label: 'シルバースポンサー', order: 3 },
  bronze: { label: 'ブロンズスポンサー', order: 4 },
};

/**
 * スポンサー一覧
 * TODO: 実際のスポンサー情報に置き換えてください
 */
export const sponsors: Sponsor[] = [
  // 特別協賛
  {
    id: 'miyakojima-city',
    name: '宮古島市',
    logo: '/images/sponsors/miyakojima-city.png',
    url: 'https://www.city.miyakojima.lg.jp/',
    rank: 'special',
  },

  // プラチナスポンサー
  {
    id: 'jta',
    name: '日本トランスオーシャン航空',
    logo: '/images/sponsors/jta.png',
    url: 'https://www.jta.co.jp/',
    rank: 'platinum',
  },

  // ゴールドスポンサー
  {
    id: 'sponsor-gold-1',
    name: 'サンプル企業A',
    logo: '/images/sponsors/placeholder.png',
    rank: 'gold',
  },
  {
    id: 'sponsor-gold-2',
    name: 'サンプル企業B',
    logo: '/images/sponsors/placeholder.png',
    rank: 'gold',
  },

  // シルバースポンサー
  {
    id: 'sponsor-silver-1',
    name: 'サンプル企業C',
    logo: '/images/sponsors/placeholder.png',
    rank: 'silver',
  },
  {
    id: 'sponsor-silver-2',
    name: 'サンプル企業D',
    logo: '/images/sponsors/placeholder.png',
    rank: 'silver',
  },
  {
    id: 'sponsor-silver-3',
    name: 'サンプル企業E',
    logo: '/images/sponsors/placeholder.png',
    rank: 'silver',
  },

  // ブロンズスポンサー
  {
    id: 'sponsor-bronze-1',
    name: 'サンプル企業F',
    logo: '/images/sponsors/placeholder.png',
    rank: 'bronze',
  },
  {
    id: 'sponsor-bronze-2',
    name: 'サンプル企業G',
    logo: '/images/sponsors/placeholder.png',
    rank: 'bronze',
  },
];

/**
 * ランク別にスポンサーを取得
 */
export function getSponsorsByRank(rank: SponsorRank): Sponsor[] {
  return sponsors.filter((sponsor) => sponsor.rank === rank);
}

/**
 * ランク順にソートしたスポンサーを取得
 */
export function getSponsorsSortedByRank(): Sponsor[] {
  return [...sponsors].sort(
    (a, b) => sponsorRankConfig[a.rank].order - sponsorRankConfig[b.rank].order
  );
}



