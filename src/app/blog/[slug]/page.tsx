'use client';

import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ArticleJsonLd } from 'next-seo';
import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import { formatDate } from '~/utils';
import { CustomMDXComponents, FooterShareBar, TableOfContents } from '~/components/mdx';
import { SectionContainer } from '~/components';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = props.params;

  const post = allBlogPosts.find((post: BlogPost) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);
  const pathname = usePathname();

  const { title, summary, date, modifiedTime } = post;
  const formattedDate = formatDate(date);
  const ISOModifiedTime = new Date(modifiedTime).toISOString();

  return (
    <>
      <ArticleJsonLd
        useAppDir={true}
        url={`https://philho.xyz${pathname}`}
        title={title}
        datePublished={date}
        modifiedTime={ISOModifiedTime}
        description={summary}
        authorName={{
          name: '',
          url: 'https://philho.xyz',
        }}
        publisherLogo="https://honghong.me/static/images/avatar.png"
        publisherName="Phil Ho"
        type="Article"
        images={[`https://philho.xyz/api/og?title=${title}&date=${date}`]}
      />
      <SectionContainer className="min-h-[90vh] pt-32 md:pt-40 xl:pt48 px-2 xl:px-0">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold">{title}</h1>
        <div className="mt-8 flex flex-col justify-between lg:flex-row">
          <article className="w-full lg:w-[85%] pr-8">
            <div id="date-meta" className="block md:flex md:justify-between">
              <div id="written-date">
                <span className="font-semibold">Uploaded: </span>
                <span className="italic">{formattedDate}</span>
              </div>
              <div id="last-modified-date">
                <span className="font-semibold">Last modified: </span>
                <span className="italic">{formatDate(ISOModifiedTime)}</span>
              </div>
            </div>
            <div className="w-full max-w-none">
              <MDXContent components={CustomMDXComponents} />
            </div>
          </article>
          <aside className="lg:w-[12rem] lg:flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents />
            </div>
          </aside>
        </div>
        <FooterShareBar slug={slug} title={title} />
      </SectionContainer>
    </>
  );
}

export const generateStaticParams = () => {
  return allBlogPosts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
};
