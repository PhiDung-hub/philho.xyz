import React from 'react';
import { clsxTailwindMerge } from '~/utils';

type QuoteProps = {
  children: React.ReactNode;
  author?: React.ReactNode;
  className?: string;
};

const Quote = (props: QuoteProps) => {
  return (
    <div
      className={clsxTailwindMerge(
        'border-l-[3px] border-opacity-80 border-gray-400 dark:border-gray-700 pl-4',
        props.className,
      )}
    >
      <div aria-label="quote-content" className="opacity-80">
        {props.children}
      </div>
      {props.author && (
        <div aria-label="quote-author" className="opacity-90 italic font-medium text-lg">
          {props.author}
        </div>
      )}
    </div>
  );
};

export default Quote;
