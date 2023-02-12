// const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 1080, 1200, 1440, 1560, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  swcMinify: true,
};

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
