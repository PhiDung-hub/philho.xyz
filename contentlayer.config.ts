import remarkGfm from 'remark-gfm';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// import rehypePrettyCode from 'rehype-pretty-code';
// import { rehypePrettyCodeOptions } from './src/utils';
//
export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Blog title',
      required: true,
    },
    date: {
      type: 'string',
      description: 'Date of creation',
      required: true,
    },
    modifiedTime: {
      type: 'string',
      description: 'Last modified time',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Summary of the blog post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Open Graph image of the blog post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'mdx_contents',
  documentTypes: [BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
