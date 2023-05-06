import { Image } from '~/components';
import NextLink from 'next/link';

export type BlogPostCardType = {
  href: string;
  openGraphHref: string;
  title: string;
  summary?: string;
  className?: string;
};

export default function BlogPostCard({ href, openGraphHref, title, summary, className }: BlogPostCardType) {
  return (
    <NextLink
      href={href}
      passHref
      replace
      prefetch
      className={`group my-4 md:my-0 mx-auto w-[280px] md:w-[350px] bg-blue-200 dark:bg-gray-600 rounded-md 
        shadow-md shadow-sky-500 dark:shadow-sky-200 hover:scale-[1.02] ${className}`}
    >
      <Image src={openGraphHref} alt="Open Graph Image" width={350} height={200} className="rounded-t-md" />
      <div className="py-2 px-4">
        <p className="text-lg text-center font-semibold text-blue-700 dark:text-blue-200 group-hover:animate-text-pulse">{title}</p>
        <p className="text-center w-full">{summary}</p>
      </div>
    </NextLink>
  );
}
