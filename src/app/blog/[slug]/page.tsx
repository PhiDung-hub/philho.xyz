'use client';

import { FaFacebook, FaReddit, FaTwitter } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ArticleJsonLd } from 'next-seo';
import React from 'react';

import { formateDate } from '~/utils';

import NextLink from 'next/link';
import { TableOfContents } from '~/components/mdx';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
};

export default function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = props.params;

  const post = allBlogPosts.find((post: any) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // const MDXComponent = useMDXComponent(post.body.code);
  const pathname = usePathname();

  const { title, summary, date, modifiedTime } = post;
  const formattedDate = formateDate(date);
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
      <div>{formattedDate}</div>
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <div className="mt-8 flex flex-col justify-between lg:flex-row">
        <article className="w-full lg:w-[540px]">
          <div className="prose prose-zinc w-full max-w-none dark:prose-invert">{/* <MDXComponent components={MDXComponents} /> */}</div>
        </article>
        <aside className="lg:min-w-[270px] lg:max-w-[270px]">
          <div className="sticky top-24">
            <TableOfContents />
          </div>
        </aside>
      </div>
      <div className="my-8  flex w-full items-center justify-between border-t border-b border-accent-2 py-4">
        <div className="flex items-center justify-center gap-2">
          <NextLink
            href={redditShareURL(slug, title)}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2"
          >
            <FaReddit size={18} />
          </NextLink>
          <NextLink
            href={twitterShareURL(slug, title)}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2"
          >
            <FaTwitter size={18} />
          </NextLink>
          <NextLink
            href={facebookShareURL(slug)}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2"
          >
            <FaFacebook size={18} />
          </NextLink>
        </div>
      </div>
    </>
  );
}

const twitterShareURL = (slug: string, title: string) =>
  `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(`https://honghong.me/blog/${slug}`)}`;

const facebookShareURL = (slug: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://honghong.me/blog/${slug}`)}`;

const redditShareURL = (slug: string, title: string) =>
  `https://www.reddit.com/submit?title=${title}&url=${encodeURIComponent(`https://honghong.me/blog/${slug}`)}`;
