import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partners-section',
  title: 'Partners Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading (e.g., "Våre partnere")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Description below the main title',
      rows: 3,
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Partner Name',
              type: 'string',
              description: 'e.g., "SpareBank 1 SMN", "proneo", "Innovasjon Norge"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Partner Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility',
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'website',
              title: 'Website URL',
              type: 'url',
              description: 'Optional: Partner website link',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(12),
      description: 'Add partner logos (will be displayed in a grid)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      partners: 'partners',
    },
    prepare({ title, partners }) {
      return {
        title: title || 'Partners Section',
        subtitle: partners ? `${partners.length} partners` : 'No partners',
      };
    },
  },
});










