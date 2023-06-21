'use client';
import { Image } from '~/components';
import { clsxTailwindMerge } from '~/utils';
import { useState } from 'react';
import NextLink from 'next/link';

export type CardType = {
  href: string;
  openGraphHref: string;
  title: string;
  desc?: string;
  wrapperClassname?: string;
  externalRef?: boolean;
};

export default function Card({ href, openGraphHref, title, desc, wrapperClassname, externalRef = false }: CardType) {
  const [click, setClick] = useState(false);

  return (
    <>
      {externalRef ? (
        <a
          href={href}
          rel="noreferrer external"
          target="_blank"
          className={clsxTailwindMerge(
            `group my-4 md:my-0 mx-auto w-[280px] md:w-[350px] bg-blue-200 dark:bg-gray-600 rounded-md 
          shadow-md shadow-sky-500 dark:shadow-sky-200 hover:scale-[1.02]`,
            wrapperClassname,
          )}
        >
          <Image src={openGraphHref} alt="Open Graph Image" width={350} height={200} className="rounded-t-md" />
          <div className="py-2 px-4">
            <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-200 group-hover:animate-text-pulse">
              {title}
            </p>
            <p className="text-center w-full">{desc}</p>
          </div>
        </a>
      ) : (
        <NextLink
          href={href}
          prefetch
          className={clsxTailwindMerge(
            `group my-4 md:my-0 mx-auto w-[280px] md:w-[350px] bg-blue-200 dark:bg-gray-600 rounded-md 
          shadow-md shadow-sky-500 dark:shadow-sky-200 hover:scale-[1.02]`,
            click ? 'blur-sm' : '',
            wrapperClassname,
          )}
          onClick={() => setClick(true)}
        >
          <Image src={openGraphHref} alt="Open Graph Image" width={350} height={200} fill={false} className="rounded-t-md" />
          <div className="py-2 px-4">
            <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-200 group-hover:animate-text-pulse">
              {title}
            </p>
            <p className="text-center w-full">{desc}</p>
          </div>
        </NextLink>
      )}
    </>
  );
}
