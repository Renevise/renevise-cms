import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Client Role",
      type: "string",
    }),

    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule) => Rule.required().min(30),
    }),

    defineField({
      name: "image",
      title: "Client Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});