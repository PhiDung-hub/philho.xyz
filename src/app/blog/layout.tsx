const description = 'This is Phil Ho personal blog, where I jot down my opinions, knowledges, and discoveries';
export const metadata = {
  title: 'Blog',
  description,
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default BlogLayout;
