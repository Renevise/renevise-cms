import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",

  fields: [
    // HERO
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subtext",
      title: "Subtext",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),

    // STATS
    defineField({
      name: "statsNumber",
      title: "Stats Number",
      type: "string",
    }),
    defineField({
      name: "statsLabel",
      title: "Stats Label",
      type: "string",
    }),

    // VALUES (cards)
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    }),

    // CONTACT
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
  ],
});