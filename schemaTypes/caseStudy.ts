import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",

  fields: [
    // CLIENT
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // TITLE
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // SLUG (for future pages)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),

    // PROBLEM
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
      description: "What challenge the client faced",
    }),

    // SOLUTION
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      description: "What you built or implemented",
    }),

    // TECH STACK
    defineField({
      name: "tech",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    }),

    // RESULT (VERY IMPORTANT)
    defineField({
      name: "result",
      title: "Quantified Result",
      type: "string",
      description: "Must be measurable (e.g. 'Reduced load time by 40%')",
    }),

    // RELATED SERVICE
    defineField({
      name: "service",
      title: "Related Service",
      type: "reference",
      to: [{ type: "service" }],
      description: "Which service this case study demonstrates",
    }),
    defineField({
      name: "details",
      title: "Detailed Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    // IMAGE
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});