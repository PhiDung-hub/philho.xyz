'use client';

import { clsxTailwindMerge } from '~/utils';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';

type ImageProps = {
  rounded?: string;
  caption?: string;
} & NextImageProps;

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = React.useState(true);

  // Configuration for NextImage: https://beta.nextjs.org/docs/api-reference/components/image#props
  return (
    <div className={clsxTailwindMerge('overflow-hidden py-2', rounded)}>
      <NextImage
        className={clsxTailwindMerge('duration-75 ease-in', isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0', rounded, className)}
        src={src}
        alt={alt}
        loading="lazy"
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
      {props.caption && <div className='text-center italic font-semibold'>{props.caption}</div>}
    </div>
  );
};
export default Image;
