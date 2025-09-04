import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'services-section',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'pretitle',
      title: 'Pretitle',
      type: 'translation',
      description: 'Small text above the main title (e.g., "Our Services")',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'translation',
      description: 'Main heading for the services section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'translationText',
      description: 'Description below the main title',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'translation',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Service Description',
              type: 'translationText',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Service Image',
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
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'translation' }],
              description: 'List of features for this service',
              validation: (Rule) => Rule.min(1).max(5),
            }),
          ],
          preview: {
            select: {
              title: 'title.no',
              titleEn: 'title.en',
              media: 'image',
            },
            prepare({ title, titleEn, media }) {
              return {
                title: title || titleEn || 'Service',
                subtitle: title && titleEn ? 'NO / EN' : title ? 'NO only' : titleEn ? 'EN only' : 'No translations',
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: 'title.no',
      titleEn: 'title.en',
      services: 'services',
    },
    prepare({ title, titleEn, services }) {
      return {
        title: title || titleEn || 'Services Section',
        subtitle: services ? `${services.length} services` : 'No services',
      };
    },
  },
});






