import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ✅ 关键
  basePath: '/blog', // ⭐ 关键
  assetPrefix: '/blog/', // ⭐ 关键

  images: {
    unoptimized: true, // ✅ 避免图片问题
  },
}

export default nextConfig
