/* eslint @typescript-eslint/no-var-requires: "off" */

const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    appDir: true,
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

module.exports = withContentlayer(nextConfig);
