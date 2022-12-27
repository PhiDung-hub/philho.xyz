const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  i18n,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  swcMinify: true,
  eslint: {
    dirs: ['src'],
  },
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    })

    return config
  },

  // redirects function: https://nextjs.org/docs/api-reference/next.config.js/redirects
  /* async redirects() { */
  /*   return [ */
  /*     { */
  /*       source: '/admin', */
  /*       destination: '/admin/index#', */
  /*       permanent: true, */
  /*     }, */
  /*   ] */
  /* }, */
})
