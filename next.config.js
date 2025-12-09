/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/miyako-winterfes2025',
  assetPrefix: '/miyako-winterfes2025/',
};

module.exports = nextConfig;
