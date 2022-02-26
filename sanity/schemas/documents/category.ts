import { CommentIcon } from "@sanity/icons";

export default {
  name: "category",
  type: "document",
  title: "Category",
  icon: CommentIcon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
  ],
};
