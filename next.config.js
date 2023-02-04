// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const { i18n } = require('./next-i18next.config');

// webpack(config) {
//   config.module.rules.push({
//     test: /\.svg?$/,
//     oneOf: [
//       {
//         use: [
//           {
//             loader: '@svgr/webpack',
//             options: {
//               prettier: false,
//               svgo: true,
//               svgoConfig: {
//                 plugins: [{ removeViewBox: false }],
//               },
//               titleProp: true,
//             },
//           },
//         ],
//         issuer: {
//           and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
//         },
//       },
//     ],
//   });
//
//   return config;
// },
//

/** @type {import('next').NextConfig} */
module.exports = {
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
