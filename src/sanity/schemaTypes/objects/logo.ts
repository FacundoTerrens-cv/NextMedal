import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'logoObject',
  title: 'Logo Object',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'width',
      title: 'Width (px)',
      type: 'number',
      initialValue: 48,
      validation: (Rule) => Rule.min(24).max(200),
    }),
    defineField({
      name: 'height',
      title: 'Height (px)',
      type: 'number',
      initialValue: 48,
      validation: (Rule) => Rule.min(24).max(200),
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'image.alt',
    },
    prepare(selection) {
      const { media, title } = selection;
      return {
        title: title || 'Logo',
        media: media,
      };
    },
  },
});
