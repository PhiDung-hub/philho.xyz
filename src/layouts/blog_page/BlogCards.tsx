import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SearchBar, Card, type CardType } from '~/components';
import { type indexTableEntry } from '~/components/SearchBar';

interface BlogCardsProps {
  allBlogPostMeta: CardType[];
  indexTable: indexTableEntry[];
  allCategories: string[];
}
export default function BlogCards(props: BlogCardsProps) {
  return (
    <div id="all-blogs">
      <div className="w-full mb-4 md:mb-8 text-center font-semibold text-2xl md:text-3xl">Blog Posts</div>
      <SearchBar className="mb-4 md:mb-8" allCategories={props.allCategories} indexTable={props.indexTable} />
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
