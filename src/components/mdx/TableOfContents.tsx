'use client';

import { IconList } from '@tabler/icons';
import React from 'react';

import clsxm from '~/utils/tailwind_clsx';
import { useHeadings, useScrollSpy } from '~/hooks';

import NextLink from "next/link"

const TableOfContents = () => {
  const headings = useHeadings();
  const activeId = useScrollSpy(
    headings.map((heading) => heading.id),
    { rootMargin: '0% 0% -55% 0%' },
  );

  return (
    <div className="hidden lg:block">
      <div className="mb-4 flex items-center gap-4">
        <IconList />
        <div>Table of contents</div>
      </div>
      <div>
        {headings.map((heading) => {
          const { id, level, title } = heading;

          return (
            <NextLink
              key={id}
              href={`#${id}`}
              className={clsxm(
                'block border-l-2 border-l-zinc-300 pt-[10px] pr-[10px] pb-[10px] text-sm leading-[1.2] text-accent-5 transition-all duration-300 hover:text-hong-fg dark:border-l-zinc-700',
                {
                  ['border-l-red-500 text-hong-fg dark:border-l-red-600']: id === activeId,
                },
              )}
              style={{
                paddingLeft: (level - 1) * 16,
              }}
            >
              {title}
            </NextLink>
          );
        })}
      </div>
    </div>
  );
};

export default TableOfContents;
