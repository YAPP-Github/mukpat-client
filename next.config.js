const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 프록시 설정
  async rewrites(){
    const rewriteTargets = [];
    const API_ENDPOINT = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

    if(process.env.NODE_ENV === 'development') {
      rewriteTargets.push({
        source: '/api/:path*',
        destination: `${API_ENDPOINT}/:path*`, 
      });
    }

    return rewriteTargets;
  }
}

module.exports = withVanillaExtract(nextConfig)