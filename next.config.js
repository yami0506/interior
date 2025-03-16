/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 静的エクスポートを有効にする
    sassOptions: {
      includePaths: ['./src/styles'],
    },
    basePath: '/-',  // GitHub リポジトリ名に合わせて修正
    images: {
      unoptimized: true,  // GitHub Pages ではNext.jsのイメージ最適化が使えないため
    }
  }
  
  module.exports = nextConfig