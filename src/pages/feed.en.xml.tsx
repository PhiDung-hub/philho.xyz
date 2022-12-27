import { GetServerSideProps } from 'next'
import RSS from 'rss'

import { getAllPosts } from '@/lib/mdx'
import { PostFrontMatter } from '@/lib/types'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const feed = new RSS({
    title: 'Phil Ho Portfolio',
    description: 'Blog and personal website',
    site_url: 'https://honghong.me',
    feed_url: 'https://honghong.me/feed.en.xml',
    language: 'en',
    image_url: 'https://honghong.me/static/images/og/og.png',
  })

  const allPosts = getAllPosts('en')

  allPosts.map((post: PostFrontMatter) => {
    feed.item({
      title: post.title,
      url: `https://honghong.me/en/blog/${post.slug}`,
      date: post.date,
      description: post.summary,
      author: 'Phil Ho',
    })
  })

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(feed.xml({ indent: true }))
  res.end()

  return {
    props: {},
  }
}

export default function RSSFeed() {
  return null
}
