/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages用の設定
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 末尾スラッシュを付ける（Cloudflare Pages推奨）
  trailingSlash: true,
};

module.exports = nextConfig;


