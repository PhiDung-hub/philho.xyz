import { Metadata } from 'next';
import { allBlogPosts, type BlogPost } from 'contentlayer/generated';

type Props = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const post = allBlogPosts.find((post: BlogPost) => post.slug === params.slug);

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
      url: `https://philho.xyz/blog/${post.slug}`,
      description: summary,
      publishedTime: ISOPublishedTime,
      modifiedTime: ISOModifiedTime,
      authors: ['Phil Ho'],
      images: [
        {
          url: `/${image}`,
          alt: title,
          width: 1200,
          height: 630,
          type: 'image/png',
        },
      ],
    },
  };
}

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default PostLayout;
