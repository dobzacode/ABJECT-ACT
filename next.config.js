/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: { taint: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ]
  }
});
