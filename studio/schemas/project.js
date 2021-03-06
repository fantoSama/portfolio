export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "description",
      type: "string",
      title: "description",
      validation: (Rule) =>
        Rule.max(75).warning(`A title shouldn't be more than 75 characters.`),
    },

    {
      name: "link",
      type: "string",
      title: "Link",
    },

    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
};
