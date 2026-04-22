import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",

  fields: [
    // HERO
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
    }),

    // CTA
    defineField({
      name: "primaryCTA",
      title: "Primary CTA Text",
      type: "string",
    }),
    defineField({
      name: "secondaryCTA",
      title: "Secondary CTA Text",
      type: "string",
    }),

    // TRUST STATS
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Value" },
            { name: "label", type: "string", title: "Label" },
          ],
        },
      ],
    }),

    

    // FINAL CTA
    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "CTA Subtitle",
      type: "text",
    }),
  ],
});