import { Metadata } from 'next';
import { allBlogPosts, type BlogPost } from 'contentlayer/generated';

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = allBlogPosts.find((post: BlogPost) => post.slug === slug.join('/'));

  if (!post) {
    return {
      title: '404',
    };
  }

  const { title, summary, date, modifiedTime, image } = post;

  const ISOPublishedTime = new Date(date).toISOString();
  const ISOModifiedTime = new Date(modifiedTime).toISOString();

  return {
    title: title,
    description: summary,
    openGraph: {
      type: 'article',
      title: title,
      url: `https://philho.xyz/blog/${post.slug}`,
      siteName: 'philho.xyz',
      description: summary,
      publishedTime: ISOPublishedTime,
      modifiedTime: ISOModifiedTime,
      authors: 'Phil Ho',
      images: [
        {
          url: `https://philho.xyz/${image}`,
          alt: title,
          width: 1200,
          height: 630,
          type: 'image/webp',
        },
      ],
    },
  };
}

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default PostLayout;
