# 第5回宮古島冬まつり Webサイト制作 要件定義書

## 📋 プロジェクト概要

- **イベント名**: 第5回宮古島冬まつり
- **テーマ**: 温故知新
- **開催日**: 2026年2月28日（土）
- **会場**: JTAドーム宮古島

---

## 1. 開発の進め方

本プロジェクトは2段階でリリースを行います。

### フェーズ1（現在）
- 全コンテンツを**静的（ハードコード）**で作成
- microCMSの接続準備（SDKのインストール、設定ファイルの作成）まではコードに含めておくが、画面には表示しない
- 「スポンサー」情報はコード内の配列データで管理する

### フェーズ2（後日）
- microCMSで記事を投稿
- トップページに「お知らせ」セクションを表示させる（コメントアウトを外す）
- 記事詳細ページを公開する

---

## 2. 技術スタック

| カテゴリ | 技術 |
|---------|------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Hosting | Cloudflare Pages |
| CMS（準備のみ） | microCMS |

---

## 3. サイトマップ（フェーズ1）

### 3.1 トップページ (`/`)
シングルページ構成で以下のセクションを含む：

1. **Hero（ファーストビュー）**
   - メインビジュアル画像
   - イベントタイトル・テーマ・日時・場所

2. **Concept**
   - イベントのコンセプト説明

3. **News**（準備中 or 非表示）
   - フェーズ1: 「Coming Soon」表示またはセクション非表示
   - フェーズ2: microCMSから取得した記事一覧を表示

4. **Project**
   - イベント内容・企画の紹介

5. **Past Event**
   - 過去のイベント紹介

6. **Sponsor**
   - 協賛企業ロゴ一覧（静的データで管理）

7. **Access**
   - 会場へのアクセス情報

8. **Footer**
   - コピーライト、リンク等

### 3.2 404ページ
- カスタム404エラーページ

---

## 4. ディレクトリ構成

```
miyako-winterfes2025/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx             # トップページ
│   ├── not-found.tsx        # 404ページ
│   └── globals.css          # グローバルスタイル
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # ヘッダー
│   │   └── Footer.tsx       # フッター
│   └── sections/
│       ├── HeroSection.tsx       # ファーストビュー
│       ├── ConceptSection.tsx    # コンセプト
│       ├── NewsSection.tsx       # お知らせ（準備中）
│       ├── ProjectSection.tsx    # プロジェクト
│       ├── PastEventSection.tsx  # 過去イベント
│       ├── SponsorSection.tsx    # スポンサー
│       └── AccessSection.tsx     # アクセス
├── data/
│   └── sponsors.ts          # スポンサーデータ
├── lib/
│   └── microcms.ts          # microCMS接続設定（準備のみ）
├── public/
│   └── images/
│       ├── hero/            # ヒーロー画像
│       └── sponsors/        # スポンサーロゴ
├── docs/
│   └── requirements.md      # 本ファイル
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 5. データ構造

### 5.1 スポンサーデータ (`data/sponsors.ts`)

```typescript
export type SponsorRank = 'platinum' | 'gold' | 'silver' | 'bronze' | 'special';

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  rank: SponsorRank;
}

export const sponsors: Sponsor[] = [
  { name: "日本トランスオーシャン航空", logo: "/images/sponsors/jta.png", rank: "platinum" },
  { name: "宮古島市", logo: "/images/sponsors/city.png", rank: "special" },
  // ...他企業
];
```

---

## 6. フェーズ2への移行手順

1. microCMSでAPIを作成（お知らせ用）
2. 環境変数にAPIキーを設定
3. `lib/microcms.ts` のコメントアウトを解除
4. `NewsSection.tsx` を有効化
5. `/app/blog/[id]/page.tsx` を作成（記事詳細ページ）

---

## 7. 注意事項

- フェーズ1ではブログ詳細ページ (`/blog/[id]`) は作成しない
- スポンサーロゴは実際のファイルがない場合、プレースホルダーを使用
- レスポンシブデザインを考慮（モバイルファースト）
- アクセシビリティに配慮

---

## 8. 参考資料

- イベントビジュアル: 添付画像参照
- 宮古島の文化要素: 馬、サツマイモ、伝統的な赤瓦屋根、宮古上布




