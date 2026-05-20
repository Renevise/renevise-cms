import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",

  fields: [
    // HERO
    defineField({
      name: "heroBadge",
      title: "Hero Badge (small pill above title)",
      type: "string",
      description:
        "Short label rendered as a pill above the headline. Example: 'AI-Powered Enterprise Solutions'.",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroTitleHighlight",
      title: "Hero Title Highlight",
      type: "string",
      description:
        "Optional. Will be appended to the title and rendered with the blue gradient. Example: 'AI'.",
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

    // SOCIAL PROOF (hero row)
    defineField({
      name: "socialProof",
      title: "Hero Social Proof",
      type: "object",
      fields: [
        { name: "rating", type: "string", title: "Rating (e.g. '4.9/5')" },
        { name: "count", type: "string", title: "Count (e.g. '500+')" },
        { name: "label", type: "string", title: "Label (e.g. 'enterprise clients')" },
      ],
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