import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="text-center px-4">
        {/* 404 アイコン */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-bold text-primary-200">
            404
          </span>
        </div>

        {/* メッセージ */}
        <h1 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          お探しのページは存在しないか、移動した可能性があります。
          <br />
          URLをご確認の上、再度お試しください。
        </p>

        {/* トップへ戻るボタン */}
        <Link
          href="/"
          className="btn-primary"
        >
          トップページへ戻る
        </Link>

        {/* デコレーション */}
        <div className="mt-16 text-gray-400 text-sm">
          <p>第5回 宮古島冬まつり</p>
          <p>2026.2.28（土）</p>
        </div>
      </div>
    </div>
  );
}


