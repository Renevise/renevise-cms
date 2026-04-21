import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
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

    // CONTACT METHODS
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
    }),

    // FORM OPTIONS
    defineField({
      name: "services",
      title: "Service Options",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});