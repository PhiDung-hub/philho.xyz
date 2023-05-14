const description = 'This is Phil Ho personal blog, where I jot down my opinions, knowledges, and discoveries';
export const metadata = {
  title: 'Blog',
  description,
  openGraph: {
    type: 'website',
    title: 'Blog | Phil Ho',
    description,
    siteName: 'PhilHo.xyz',
    url: 'https://philho.xyz',
    images: [
      {
        url: 'https://philho.xyz/og/blog.webp',
        alt: 'Phil Ho portfolio',
        width: 1200,
        height: 1200,
        type: 'image/png',
      },
    ],
  },
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default BlogLayout;
