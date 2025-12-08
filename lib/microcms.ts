/**
 * microCMS 接続設定
 * 
 * フェーズ1: 準備のみ（実際の接続は行わない）
 * フェーズ2: 環境変数を設定してコメントアウトを解除
 */

import { createClient } from 'microcms-js-sdk';

// 型定義
export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsListResponse {
  contents: NewsArticle[];
  totalCount: number;
  offset: number;
  limit: number;
}

/**
 * microCMS クライアント
 * 
 * 使用方法:
 * 1. microCMS でサービスを作成
 * 2. 環境変数を設定:
 *    - MICROCMS_SERVICE_DOMAIN: サービスドメイン（例: miyako-winterfes）
 *    - MICROCMS_API_KEY: APIキー
 * 3. 下記のコメントアウトを解除
 */

// フェーズ2で有効化
// if (!process.env.MICROCMS_SERVICE_DOMAIN) {
//   throw new Error('MICROCMS_SERVICE_DOMAIN is required');
// }
// if (!process.env.MICROCMS_API_KEY) {
//   throw new Error('MICROCMS_API_KEY is required');
// }

// export const client = createClient({
//   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
//   apiKey: process.env.MICROCMS_API_KEY,
// });

/**
 * お知らせ記事一覧を取得
 */
// export async function getNewsList(limit: number = 10): Promise<NewsListResponse> {
//   return await client.get<NewsListResponse>({
//     endpoint: 'news',
//     queries: { limit },
//   });
// }

/**
 * お知らせ記事詳細を取得
 */
// export async function getNewsDetail(id: string): Promise<NewsArticle> {
//   return await client.get<NewsArticle>({
//     endpoint: 'news',
//     contentId: id,
//   });
// }

// プレースホルダー（型エラー回避用）
export const client = null;
export async function getNewsList(): Promise<NewsListResponse> {
  return {
    contents: [],
    totalCount: 0,
    offset: 0,
    limit: 10,
  };
}
export async function getNewsDetail(id: string): Promise<NewsArticle | null> {
  return null;
}


