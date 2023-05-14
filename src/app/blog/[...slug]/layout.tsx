import { Metadata, ResolvingMetadata } from 'next';
import { allBlogPosts, type BlogPost } from 'contentlayer/generated';
import { type BlogPostPageProps } from './page';

export async function generateMetadata(props: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = props.params;
  const post = allBlogPosts.find((post: BlogPost) => post.slug === slug.join('/'));

  if (!post) {
    return {
      title: '404',
    };
  }

  const { title, summary, date, modifiedTime, image } = post;

  const ISOPublishedTime = new Date(date).toISOString();
  const ISOModifiedTime = new Date(modifiedTime).toISOString();

  const previousImages = (await parent).openGraph?.images || [];

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
        ...previousImages,
      ],
    },
  };
}

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};
export default PostLayout;
