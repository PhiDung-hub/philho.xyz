import { Container } from '@mantine/core'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react'

import { Favicons } from './Favicons'
import Footer from './Footer'
import Header from './Header'
import { LayoutType } from './types'

const Layout: React.FC<LayoutType> = (props) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <>
      <NextSeo
        defaultTitle='Phil Ho'
        title={props.title}
        description={props.description ?? 'Seo.defaultDesc'}
        canonical={`https://philho.xyz${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@',
          handle: '@',
        }}
        openGraph={{
          url: `https://philho.xyz{router.asPath}`,
          type: 'website',
          title: 'Phil Ho Dev',
          description: t('Seo.defaultDesc'),
          images: [
            {
              url: '',
              width: 1200,
              height: 630,
              alt: t('Seo.defaultDesc'),
            },
          ],
        }}
        additionalLinkTags={[...Favicons]}
      />
      <Header />
      <div className='flex min-h-[95vh] flex-col justify-between w-full items-start'>
        <Container className='w-screen px-6 sm:px-8 py-8 sm:py-9 lg:max-w-[1260px]'>
          {props.children}
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Layout
