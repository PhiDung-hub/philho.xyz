import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import { MdArticle } from 'react-icons/md';
import { type CardType } from '~/components/Card';

export function buildBlogsIndex() {
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
      desc: post.summary,
      categories,
      icon: <MdArticle size={24} />,
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

export function buildBlogsMeta(): CardType[] {
  return allBlogPosts.map((post: BlogPost) => {
    return {
      href: `/blog/${post.slug}`,
      openGraphHref: `/${post.image}`,
      title: post.title,
      desc: post.summary,
    };
  });
}
