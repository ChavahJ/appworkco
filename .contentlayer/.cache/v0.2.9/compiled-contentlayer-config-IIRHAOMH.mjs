// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the blog",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/blog/${blog._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data/blog",
  documentTypes: [Blog]
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IIRHAOMH.mjs.map
