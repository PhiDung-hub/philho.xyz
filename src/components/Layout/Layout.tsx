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
      <Header />
      <Container
        sx={(theme) => ({
          padding: '24px 30px',
          [theme.fn.largerThan('sm')]: {
            padding: '48px 32px',
          },
        })}
      >
        {props.children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
