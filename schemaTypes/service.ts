import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",

  fields: [
    // TITLE
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // SLUG
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // SHORT DESCRIPTION
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    // PROBLEMS
    defineField({
      name: "problemsSolved",
      title: "Problems We Solve",
      type: "array",
      of: [{ type: "string" }],
      description: "Add 3–5 real business problems",
    }),

    // OUTCOMES
    defineField({
      name: "outcomes",
      title: "Strategic Outcomes",
      type: "array",
      of: [{ type: "string" }],
      description: "Add measurable results or benefits",
    }),

    // IMAGE
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
    }),

    // TAGLINE
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short hero tagline shown on the service detail page",
    }),

    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "Mobile", value: "mobile" },
          { title: "AI Content", value: "ai" },
        ],
      },
    }),
    // OPTIONAL LONG CONTENT
    defineField({
      name: "details",
      title: "Detailed Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 2,
        }),
      ],
    }),
  ],
});