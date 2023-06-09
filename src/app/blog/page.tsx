import { About, BlogView, buildBlogsIndex, buildBlogsMeta } from '~/layouts/blog_page';

export default function Blog() {
  const allBlogPostMeta = buildBlogsMeta();
  const { indexTable, allCategories } = buildBlogsIndex();

  return (
    <div className="min-h-screen pt-36 pb-24 flex flex-col items-center justify-center">
      <About />
      <BlogView allBlogPostMeta={allBlogPostMeta} indexTable={indexTable} allCategories={allCategories} />
    </div>
  );
}
