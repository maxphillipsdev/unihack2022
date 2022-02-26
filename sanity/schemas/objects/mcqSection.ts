export default {
  type: "object",
  name: "mcqSection",
  title: "MCQ Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "questions",
      type: "array",
      title: "Questions",
      of: [{ type: "mcqQuestion" }],
    },
  ],
};
