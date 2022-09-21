import { Container } from '@mantine/core'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import React, { PropsWithChildren } from 'react'

import { Favicons } from './Favicons'
import Footer from './Footer'
import Header from './Header'


const Layout = (props: PropsWithChildren<NextSeoProps>) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <>
      <NextSeo
        defaultTitle='Phil Ho – Developer'
        description={t('Seo.defaultDesc')}
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
        {...props}
        />
      <div className="flex min-h-screen flex-col justify-between pt-9 md:pt-7 w-screen items-start">
        <Header />
        <Container className="w-screen px-6 sm:px-10 py-8 sm:py-9">
          {props.children}
        </Container>
        <Footer />
      </div>
      </>
  )
}

export default Layout
