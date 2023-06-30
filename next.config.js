const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // 프록시 설정
  async rewrites(){
    const API_ENDPOINT = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;
    return process.env.NODE_ENV === 'development' ? [
      {
        source: '/api/:path*',
        destination: `${API_ENDPOINT}/:path*`, 
      }
    ] : [];
  
  }
}

module.exports = withVanillaExtract(nextConfig)