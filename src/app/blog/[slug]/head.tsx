import { allBlogPosts } from 'contentlayer/generated';

import { Head } from '~/components';

type BlogPostHeadProps = {
  params: {
    slug: string;
  };
};

const BlogPostHead = (props: BlogPostHeadProps) => {
  const { params } = props;

  const post = allBlogPosts.find((post) => post.slug === params.slug);

  if (!post) return <Head title="404" />;

  const { title, summary, date, modifiedTime } = post;

  const ISOPublishedTime = new Date(date).toISOString();
  const ISOModifiedTime = new Date(modifiedTime).toISOString();

  return (
    <Head
      title={title}
      description={summary}
      openGraph={{
        description: summary,
        type: 'article',
        title: `${title} | ${process.env.BASE_TITLE}`,
        article: {
          publishedTime: ISOPublishedTime,
          modifiedTime: ISOModifiedTime,
          authors: ['https://philho.xyz'],
        },
        images: [
          {
            url: `https://philho.xyz/api/og?title=${title}&date=${date}`,
            alt: title,
            width: 1200,
            height: 630,
            type: 'image/png',
          },
        ],
      }}
    />
  );
};

export default BlogPostHead;
