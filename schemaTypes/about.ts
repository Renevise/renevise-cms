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
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description:
                "Choose the lucide icon to render in this card.",
              options: {
                list: [
                  { title: "Target (Mission / Goals)", value: "target" },
                  { title: "Shield Check (Integrity / Trust)", value: "shield-check" },
                  { title: "Users (Team / Expertise)", value: "users" },
                  { title: "Rocket (Growth / Launch)", value: "rocket" },
                  { title: "Sparkles (Craft / Quality)", value: "sparkles" },
                  { title: "Compass (Strategy / Direction)", value: "compass" },
                  { title: "Heart Handshake (Partnership)", value: "heart-handshake" },
                  { title: "Layers (Architecture)", value: "layers" },
                  { title: "Cpu (Engineering Depth)", value: "cpu" },
                  { title: "Workflow (Process)", value: "workflow" },
                  { title: "Gauge (Performance)", value: "gauge" },
                  { title: "Line Chart (Outcomes)", value: "line-chart" },
                ],
                layout: "dropdown",
              },
            },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "icon",
            },
          },
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