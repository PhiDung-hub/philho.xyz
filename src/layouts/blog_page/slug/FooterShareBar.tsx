import NextLink from 'next/link';
import { FaFacebook, FaReddit, FaTwitter } from 'react-icons/fa';

type ShareProps = {
  slug: string;
  title: string;
};

export default function FooterShareBar({ slug, title }: ShareProps) {
  const shareLinkClsx = 'flex items-center justify-center h-8 w-8 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-500';
  return (
    <div className="my-8  flex w-full items-center justify-between border-t border-accent-2 py-4">
      <div className="text-xl italic font-semibold">Phil Ho</div>
      <div className="flex gap-4">
        <NextLink href={redditShareURL(slug, title)} className={shareLinkClsx}>
          <FaReddit size={24} />
        </NextLink>
        <NextLink href={twitterShareURL(slug, title)} className={shareLinkClsx}>
          <FaTwitter size={24} />
        </NextLink>
        <NextLink href={facebookShareURL(slug)} className={shareLinkClsx}>
          <FaFacebook size={24} />
        </NextLink>
      </div>
    </div>
  );
}

const twitterShareURL = (slug: string, title: string) =>
  `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(`https://philho.xyz/blog/${slug}`)}`;

const facebookShareURL = (slug: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://philho.xyz/blog/${slug}`)}`;

const redditShareURL = (slug: string, title: string) =>
  `https://www.reddit.com/submit?title=${title}&url=${encodeURIComponent(`https://philho.xyz/blog/${slug}`)}`;
