import React from 'react';
import { BlogPostCard, type BlogPostCardType } from '~/components';
import { v4 as uuidv4 } from 'uuid';

interface BlogCardsProps {
  allBlogPostMeta: BlogPostCardType[];
}
export default function BlogCards(props: BlogCardsProps) {
  return (
    <div id="all-blogs">
      <div className="w-full text-center font-semibold text-xl sm:text-2xl md:text-3xl">Blog Posts</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8 mx-auto">
        {props.allBlogPostMeta.map(({ href, openGraphHref, title, summary }, index) => {
          return (
            <BlogPostCard key={`blogpost-${uuidv4()}-${index}`} href={href} openGraphHref={openGraphHref} title={title} summary={summary} />
          );
        })}
      </div>
    </div>
  );
}
