import { Input, List, Text } from '@mantine/core'
import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import Layout from '@/components/Layout'
import PageLayout from '@/components/Layout/PageLayout'
import PostsList from '@/components/PostsList'
import { getAllPosts } from '@/lib/mdx'
import { PostFrontMatter } from '@/lib/types'

export default function Blog({ posts }: { posts: PostFrontMatter[] }) {
  const { t } = useTranslation('common')
  const [searchValue, setSearchValue] = React.useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Layout title='Blog'>
      <PageLayout
        title='Blog'
        description={t('blogDesc', { count: posts.length })}
      >
        <Input
          placeholder='Search'
          type='text'
          aria-label={t('search')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
        <List listStyleType='none'>
          {!filteredPosts.length && (
            <Text sx={{ textAlign: 'center' }} py={48}>
              {t('noPostsFound')}
            </Text>
          )}
          {filteredPosts.map((post) => (
            <PostsList key={post.slug} post={post} />
          ))}
        </List>
      </PageLayout>
    </Layout>
  )
}

/* export const getStaticProps: GetStaticProps = async ({ locale }) => { */
/*   const posts = getAllPosts(locale) */
/**/
/*   return { */
/*     props: { posts }, */
/*   } */
/* } */
