import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",

  groups: [
    { name: "hero", title: "Hero" },
    { name: "overview", title: "What We Do" },
    { name: "value", title: "Problems & Outcomes" },
    { name: "stack", title: "Technology Stack" },
    { name: "shared", title: "Shared / Legacy" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    // -------- HERO --------
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "hero",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "hero",
      description: "Short hero tagline shown under the title.",
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      group: "hero",
      description: "Used in hero, navigation cards, and SEO fallbacks.",
    }),

    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // -------- OVERVIEW / WHAT WE DO --------
    defineField({
      name: "overviewHeading",
      title: "Overview Heading",
      type: "string",
      group: "overview",
      description: "Headline for the dark 'What We Can Do For You' section.",
    }),

    defineField({
      name: "serviceOverview",
      title: "Service Overview (Long Form)",
      type: "array",
      of: [{ type: "block" }],
      group: "overview",
      description: "Rich long-form copy shown alongside the capability grid.",
    }),

    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "array",
      group: "overview",
      description: "4–8 capability cards shown in the dark overview section.",
      of: [
        {
          type: "object",
          name: "capability",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),

    // -------- PROBLEMS / OUTCOMES --------
    defineField({
      name: "problemsSolved",
      title: "Problems We Solve",
      type: "array",
      of: [{ type: "string" }],
      group: "value",
      description: "Add 3–6 real business problems.",
    }),

    defineField({
      name: "outcomes",
      title: "Strategic Outcomes",
      type: "array",
      of: [{ type: "string" }],
      group: "value",
      description: "Add measurable results or business outcomes.",
    }),

    // -------- TECHNOLOGY STACK --------
    defineField({
      name: "technologyCategories",
      title: "Technology Categories",
      type: "array",
      group: "stack",
      description:
        "Grouped technology stack shown in the Technology section (e.g. Frontend, Backend, AI Tools).",
      of: [
        {
          type: "object",
          name: "techCategory",
          fields: [
            defineField({
              name: "title",
              title: "Category Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "technologies",
              title: "Technologies",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.min(1),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "technologies" },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: Array.isArray(subtitle) ? subtitle.join(", ") : "",
              };
            },
          },
        },
      ],
    }),

    // -------- SHARED / LEGACY --------
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      group: "shared",
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "Mobile", value: "mobile" },
          { title: "AI Content", value: "ai" },
        ],
      },
    }),

    defineField({
      name: "techTags",
      title: "Tech / Capability Tags (Home Tile)",
      type: "array",
      of: [{ type: "string" }],
      group: "shared",
      description:
        "5–8 short tags shown as scrolling chips on the home services tile.",
      validation: (Rule) => Rule.max(12),
    }),

    defineField({
      name: "details",
      title: "Detailed Content (Legacy)",
      type: "array",
      of: [{ type: "block" }],
      group: "shared",
      description:
        "Legacy long-form content. Prefer `serviceOverview` going forward.",
    }),

    // -------- SEO --------
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "seo",
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

  preview: {
    select: { title: "title", subtitle: "tagline", media: "image" },
  },
});
