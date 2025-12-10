# 第5回 宮古島冬まつり 公式サイト

2026年2月28日（土）JTAドーム宮古島にて開催される「第5回 宮古島冬まつり」の公式Webサイトです。

## 🏝️ テーマ

**温故知新** - 古きを温ねて新しきを知る

## 🛠️ 技術スタック

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages
- **CMS**: microCMS（フェーズ2で導入予定）

## 📁 プロジェクト構成

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   ├── not-found.tsx       # 404ページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── layout/             # レイアウトコンポーネント
│   └── sections/           # セクションコンポーネント
├── data/
│   └── sponsors.ts         # スポンサーデータ
├── lib/
│   └── microcms.ts         # microCMS設定（準備中）
├── public/
│   └── images/             # 画像ファイル
└── docs/
    └── requirements.md     # 要件定義書
```

## 🚀 開発を始める

### 前提条件

- Node.js 18.17.0 以上
- npm または yarn

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

### ビルド

```bash
# プロダクションビルド
npm run build

# 静的ファイル出力（Cloudflare Pages用）
# out/ ディレクトリに出力されます
```

## 📝 開発フェーズ

### フェーズ1（現在）

- [x] 静的コンテンツでのサイト構築
- [x] スポンサー情報の静的管理
- [x] microCMS接続の準備

### フェーズ2（後日）

- [ ] microCMSでのお知らせ記事管理
- [ ] ブログ詳細ページの実装
- [ ] Newsセクションの有効化

## 🖼️ 画像の配置

| 用途 | パス |
|------|------|
| ヒーロー画像 | `/public/images/hero/` |
| スポンサーロゴ | `/public/images/sponsors/` |
| 過去イベント | `/public/images/past-events/` |

## 📄 ライセンス

© 宮古島冬まつり実行委員会



