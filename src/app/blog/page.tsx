import { BlogPage } from '~/layouts';
import { type CardType } from '~/components';
import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import React from 'react';
import { MdArticle } from 'react-icons/md';

export default function Blog() {
  const allBlogPostMeta: CardType[] = allBlogPosts.map((post: BlogPost) => {
    return {
      href: `/blog/${post.slug}`,
      openGraphHref: `/${post.image}`,
      title: post.title,
      desc: post.summary,
    };
  });
  const { indexTable, allCategories } = buildIndex();

  return (
    <div className="min-h-screen pt-36 pb-24 flex flex-col items-center justify-center">
      <BlogPage.About />
      <BlogPage.BlogCards allBlogPostMeta={allBlogPostMeta} indexTable={indexTable} allCategories={allCategories} />
    </div>
  );
}

function buildIndex() {
  const indexTable = allBlogPosts.map((post) => {
    const categories = [];
    if (post.categories) {
      const cats = post.categories.split(',').map((cat) => cat.trim());
      categories.push(...cats);
    }
    if (post.seriesName) {
      categories.push(post.seriesName);
    }
    return {
      href: `/blog/${post.slug}`,
      key: post.title,
      categories,
      icon: <MdArticle width={12} height={12} />,
    };
  });
  const uniqueCategories = new Set<string>();

  indexTable.forEach((entry) => {
    entry.categories.forEach((cat) => {
      uniqueCategories.add(cat);
    });
  });

  return { indexTable, allCategories: Array.from(uniqueCategories) };
}
