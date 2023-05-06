'use client';

import { FaListUl } from 'react-icons/fa';
import React from 'react';

import { clsxTailwindMerge } from '~/utils';
import { useHeadings, useScrollSpy } from '~/hooks';

const TableOfContents = () => {
  const headings = useHeadings();
  const activeId = useScrollSpy(
    headings.map((heading) => heading.id),
    { rootMargin: '0% 0% -65% 0%' },
  );

  return (
    <div className="hidden md:block">
      <div className="mb-4 flex items-center gap-4">
        <FaListUl size={20} />
        <div className="text-lg md:text-xl font-semibold text-yellow-500 dark:text-blue-300">Table of contents</div>
      </div>
      {headings.map((heading) => {
        const { id, level, title } = heading;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={clsxTailwindMerge(
              'block border-l-2 border-l-zinc-300 dark:border-l-zinc-700 py-2 text-sm leading-[1.2] hover:text-blue-500 dark:hover:text-blue-200',
              {
                ['border-l-red-700 text-bold dark:border-l-red-500 font-semibold text-md text-yellow-500 dark:text-blue-300']: id === activeId,
              },
            )}
            style={{
              paddingLeft: level * 16,
            }}
          >
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
