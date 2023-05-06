'use client';

import { usePathname } from 'next/navigation';
import { NextSeo, NextSeoProps } from 'next-seo';

type HeadProps = NextSeoProps;

export default function Head(props: HeadProps) {
  const pathname = usePathname();
  const {
    title,
    description = 'Phil Ho – Blockchain Engineer • Defi Snipper • Machine Learning Enthusiast • ZKP Developer • Amateur Writer',
    ...rest
  } = props;

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Phil Ho portfolio" />
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <NextSeo
        titleTemplate="%s | Phil Space"
        title={title}
        defaultTitle="Phil Space"
        description={description}
        canonical={`https://philho.xyz${pathname}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@aquila_',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://philho.xyz${pathname}`,
          type: 'website',
          title: title ?? 'Phil Ho portfolio',
          description,
          images: [
            {
              url: 'OG_IMAGE_URL_HERE',
              width: 1200,
              height: 630,
              alt: 'https://philho.xyz Open Graph Image',
            },
          ],
        }}
        {...rest}
      />
    </>
  );
}
