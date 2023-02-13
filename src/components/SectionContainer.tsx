import React from 'react';
import { clsxTailwindMerge } from '~/utils';

export default function SectionContainer({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={clsxTailwindMerge('min-h-[50rem] py-8 md:py-24 xl:py-32', className)}>{children}</div>;
}
