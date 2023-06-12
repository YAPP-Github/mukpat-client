const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites(){
    const API_ENDPOINT = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;
    
    if(process.env.NODE_ENV === 'development'){
      return [
        {
          source: '/api/:path*',
          destination: `${API_ENDPOINT}/api/:path*`, 
        }
      ]
    }
  }
}

module.exports = withVanillaExtract(nextConfig)