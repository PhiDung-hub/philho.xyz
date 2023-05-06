import { SectionContainer } from '~/components';
import { BlogPage } from '~/layouts';
import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import React from 'react';
import type { BlogPostCardType } from '~/components';

export default function Blog() {
  const allBlogPostMeta: BlogPostCardType[] = allBlogPosts.map((post: BlogPost) => {
    return {
      href: post.slug,
      openGraphHref: `/${post.image}`,
      title: post.title,
      summary: post.summary,
    };
  });

  return (
    <SectionContainer className="h-screen flex flex-col items-center justify-center">
      <BlogPage.About />
      <BlogPage.BlogCards allBlogPostMeta={allBlogPostMeta} />
    </SectionContainer>
  );
}
