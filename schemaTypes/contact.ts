import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",

  fields: [
    // HERO (dark premium section at the top of the page)
    defineField({
      name: "heroBadge",
      title: "Hero Badge",
      type: "string",
      description:
        "Optional. Small pill rendered above the hero title. Example: 'Get in touch'.",
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      description:
        "Main headline shown in the dark hero section. Example: 'Let's talk about your next move.'",
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      description:
        "Supporting description shown beneath the hero heading.",
    }),

    // CONSULTATION SECTION (left column heading + subtext)
    defineField({
      name: "heading",
      title: "Consultation Heading",
      type: "string",
    }),
    defineField({
      name: "subtext",
      title: "Consultation Subtext",
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