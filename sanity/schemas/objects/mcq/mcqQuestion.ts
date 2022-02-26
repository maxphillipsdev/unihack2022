export default {
  type: "object",
  name: "mcqQuestion",
  title: "Question",
  fields: [
    {
      name: "question",
      type: "string",
      title: "Question",
    },
    {
      name: "answers",
      type: "array",
      title: "Answers",
      of: [{ type: "mcqAnswer" }],
    },
  ],
};
