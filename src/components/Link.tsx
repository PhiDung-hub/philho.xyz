import NextLink, { LinkProps } from 'next/link';
import React from 'react';
import { clsxTailwindMerge } from '~/utils';

type CustomLinkProps = {
  children: React.ReactNode;
  wrapperClassname?: string;
} & LinkProps;

export default function CustomLink(props: CustomLinkProps) {
  const { children, wrapperClassname, ...nextLinkProps } = props;
  return (
    <NextLink passHref {...nextLinkProps}>
      <div className={clsxTailwindMerge('text-sky-600 dark:text-rose-300 hover:underline', wrapperClassname)}>
        {children}
      </div>
    </NextLink>
  );
}
