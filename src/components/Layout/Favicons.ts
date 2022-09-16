import { Favicons as FaviconType } from '@/components/Layout/types'

export const Favicons: FaviconType[] = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/static/favicon/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/static/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/static/favicon/android-icon-512x512.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/static/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/static/favicon/favicon-16x16.png',
  },
  // https://hackthestuff.com/article/what-is-manifest-json-file-and-how-it-is-useful#:~:text=The%20manifest.,Add%20to%20Home%20Screen%20prompt.
  {
    rel: 'manifest',
    href: '/static/favicon/manifest.json',
  },
]
