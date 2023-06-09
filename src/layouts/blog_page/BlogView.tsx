'use client';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';

import { SearchBar, Card, type CardType } from '~/components';
import { type indexTableEntry } from '~/components/SearchBar';
import { useMediaQuery } from '~/hooks';
import './BlogView.css';

type BlogCardsProps = {
  allBlogPostMeta: CardType[];
  indexTable: indexTableEntry[];
  allCategories: string[];
};
export default function BlogView({ ...props }: BlogCardsProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const isXl = useMediaQuery('(min-width: 1280px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const itemsPerPage = isXl ? 9 : isMd ? 4 : 3;
  const items = props.allBlogPostMeta;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div id="all-blogs">
      <div className="w-full mb-4 md:mb-8 text-center font-semibold text-2xl md:text-3xl">Blog Posts</div>
      <SearchBar className="mb-4 md:mb-8" allCategories={props.allCategories} indexTable={props.indexTable} />
      <AllBlogs allBlogPostMeta={currentItems} />
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={<BiSkipNext width={32} height={32} className="text-2xl" />}
          previousLabel={<BiSkipPrevious width={32} height={32} className="text-2xl" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="previous-item"
          nextClassName="next-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active-page"
          renderOnZeroPageCount={null}
          className="flex items-center justify-center text-center gap-2 py-2 mt-8 text-lg"
        />
      )}
    </div>
  );
}

function AllBlogs({ allBlogPostMeta }: { allBlogPostMeta: CardType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 px-auto">
      {allBlogPostMeta.map(({ href, openGraphHref, title, desc }, index) => {
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
  );
}
