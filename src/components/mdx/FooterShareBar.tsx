import NextLink from 'next/link';
import { FaFacebook, FaReddit, FaTwitter } from 'react-icons/fa';

type ShareProps = {
  slug: string;
  title: string;
};

export default function FooterShareBar({ slug, title }: ShareProps) {
  return (
    <div className="my-8  flex w-full items-center justify-between border-t border-accent-2 py-4">
      <div>BRO</div>
      <div className="flex items-center justify-center gap-2">
        <NextLink
          href={redditShareURL(slug, title)}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2"
        >
          <FaReddit size={18} />
        </NextLink>
        <NextLink
          href={twitterShareURL(slug, title)}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2"
        >
          <FaTwitter size={18} />
        </NextLink>
        <NextLink
          href={facebookShareURL(slug)}
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent-2"
        >
          <FaFacebook size={18} />
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
