import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    // FOOTER — brand block
    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "text",
      rows: 3,
      description:
        "Short paragraph shown under the logo in the footer.",
    }),

    // CONTACT (used in footer)
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "addressLines",
      title: "Address Lines",
      type: "array",
      of: [{ type: "string" }],
      description: "One line per row — rendered stacked in the footer.",
    }),

    // SOCIAL LINKS
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "whatsappUrl",
      title: "WhatsApp URL",
      type: "url",
      description:
        "Full WhatsApp link, e.g. https://wa.me/923043673951",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),

    // BOTTOM BAR LINKS
    defineField({
      name: "privacyPolicyUrl",
      title: "Privacy Policy URL",
      type: "string",
      description:
        "Path or external URL for the Privacy Policy link in the footer bottom bar.",
    }),
    defineField({
      name: "termsUrl",
      title: "Terms of Service URL",
      type: "string",
      description:
        "Path or external URL for the Terms of Service link in the footer bottom bar.",
    }),
  ],

  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
