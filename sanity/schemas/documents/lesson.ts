import { MasterDetailIcon } from "@sanity/icons";

export default {
  name: "lesson",
  type: "document",
  title: "Lesson",
  icon: MasterDetailIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Lesson Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "content",
      type: "array",
      title: "Lesson sections",
      of: [{ type: "textSection" }, { type: "mcqSection" }],
    },
  ],
};
