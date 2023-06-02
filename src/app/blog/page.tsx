import { BlogPage } from '~/layouts';
import { type CardType } from '~/components';
import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import React from 'react';

export default function Blog() {
  const allBlogPostMeta: CardType[] = allBlogPosts.map((post: BlogPost) => {
    return {
      href: `/blog/${post.slug}`,
      openGraphHref: `/${post.image}`,
      title: post.title,
      desc: post.summary,
    };
  });

  return (
    <div className="min-h-screen pt-36 pb-24 flex flex-col items-center justify-center">
      <BlogPage.About />
      <BlogPage.BlogCards allBlogPostMeta={allBlogPostMeta} />
    </div>
  );
}
