import { defineConfig, SchemaField } from 'tinacms'

function isValidHttpUrl(string: string) {
  let url: any
  try {
    url = new URL(string)
  } catch (_) {
    return false
  }
  return url.protocol === 'https:'
}

// Upgrade guide https://tina.io/blog/upgrading-to-iframe/
var blogFields: SchemaField[] = [
  {
    type: 'string',
    label: 'Blog Title',
    name: 'title',
    isTitle: true,
    required: true,
  },
  {
    type: 'string',
    label: 'Preview description (optional)',
    name: 'description',
  },
  {
    type: 'string',
    label: 'Date (YYYY-MM-DD)',
    name: 'date',
  },
  {
    type: 'string',
    label: 'Tags',
    name: 'tags',
  },
  {
    type: 'image',
    label: 'Thumbnail URL',
    name: 'imageUrl',
  },
  {
    type: 'rich-text',
    label: 'Blog Body',
    name: 'body',
    isBody: true,
    templates: [
      {
        name: 'Quote',
        label: 'Quote',
        fields: [
          {
            type: 'string',
            name: 'content',
            label: 'Content',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
          },
          {
            type: 'string',
            name: 'cite',
            label: 'Cite',
          },
        ],
      },
      {
        name: 'ArticleImage',
        label: 'ArticleImage',
        fields: [
          {
            type: 'image',
            name: 'src',
            label: 'Image Upload',
          },
          {
            type: 'string',
            name: 'remote_src',
            label: 'Embedded Image URL (REQUIRED if no image uploaded)',
            ui: {
              validate: (value: string, data: any) => {
                if (!isValidHttpUrl(value)) {
                  return 'Invalid HTTPs URL'
                }
                if (!data.src || value.length === 0) {
                  return 'Give an image URL or upload an image'
                }
              },
            },
          },
          {
            type: 'string',
            name: 'caption',
            label: 'Image Caption',
          },
        ],
      },
      {
        name: 'Code',
        label: 'Code',
        fields: [
          {
            type: 'string',
            name: 'code',
            label: 'Code',
          },
          {
            type: 'string',
            name: 'language',
            label: 'Language',
          },
          {
            type: 'string',
            name: 'selectedLines',
            label: 'Selected Lines',
          },
          {
            type: 'boolean',
            name: 'withCopyButton',
            label: 'With Copy Button',
          },
          {
            type: 'boolean',
            name: 'withLineNumbers',
            label: 'With Line Numbers',
          },
          {
            type: 'string',
            name: 'caption',
            label: 'Caption',
          },
        ],
      },
      {
        name: 'br',
        label: 'Line Break',
        inline: true,
        fields: [
          {
            type: 'string',
            name: 'br',
            label: 'Line Break',
          },
        ],
      },
    ],
  },
]

const customFilename = {
  readonly: false,
  /* slugify: (values: any) => { */
  /*   const slug = values?.title?.toLowerCase(); */
  /*   const isLocaleIncluded = slug.includes('vi/') || slug.includes('en/'); */
  /*   return isLocaleIncluded ? slug : `vi/${slug}`; */
  /* }, */
}

export default defineConfig({
  branch: 'master',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID as string,
  token: process.env.TINA_TOKEN as string,
  // guide: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: 'Notes & Articles',
        name: 'article',
        path: 'posts/blog/articles',
        format: 'mdx',
        fields: blogFields,
        ui: {
          filename: customFilename,
        },
      },
      {
        label: 'Tutorials',
        name: 'tutorial',
        path: 'posts/blog/tutorial',
        format: 'mdx',
        fields: blogFields,
        ui: {
          filename: customFilename,
        },
      },
    ],
  },
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
})
