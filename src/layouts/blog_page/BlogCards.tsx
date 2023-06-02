import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, type CardType } from '~/components';

interface BlogCardsProps {
  allBlogPostMeta: CardType[];
}
export default function BlogCards(props: BlogCardsProps) {
  return (
    <div id="all-blogs">
      <div className="w-full mb-8 text-center font-semibold text-2xl md:text-3xl">Blog Posts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 px-auto">
        {props.allBlogPostMeta.map(({ href, openGraphHref, title, desc }, index) => {
          return (
            <Card
              key={`blogpost-${uuidv4()}-${index}`}
              href={href}
              openGraphHref={openGraphHref}
              title={title}
              desc={desc}
              externalRef={false}
            />
          );
        })}
      </div>
    </div>
  );
}
